// AayuMove Main Application Controller
// Orchestrates state, navigation, modals, audio synth player, and adaptive engine.

import { storage } from './services/storage.js';
import { activitiesData } from './data/activitiesData.js';
import { mealsData } from './data/mealsData.js';
import { renderNavbar } from './components/Navbar.js';
import { ActivityPlayerModal } from './components/ActivityPlayerModal.js';
import { AayuAIAssistant } from './components/AayuAIAssistant.js';
import { SmartReminderManager } from './components/SmartReminderToast.js';
import { AuthModal } from './components/AuthModal.js';
import { OnboardingModal } from './components/OnboardingModal.js';
import { getExerciseAnimationHtml } from './services/exerciseAnimations.js';

import { renderDashboardPage } from './pages/DashboardPage.js';
import { renderActivitiesPage } from './pages/ActivitiesPage.js';
import { renderDietPage } from './pages/DietPage.js';
import { renderProgressPage } from './pages/ProgressPage.js';
import { renderProfilePage } from './pages/ProfilePage.js';

class AayuApp {
  constructor() {
    this.currentTab = 'dashboard';
    this.currentUser = storage.getCurrentUser();

    // Default adaptive time based on user profile or 10 min
    const userTimeNum = parseInt(this.currentUser?.availableTime, 10);
    this.selectedAdaptiveTime = !isNaN(userTimeNum) ? userTimeNum : 10;

    this.activityFilters = {
      time: 'all',
      category: 'all',
      difficulty: 'all',
      search: '',
      onlyRecommended: false
    };

    this.dietFilters = {
      category: 'all',
      diet: 'all'
    };

    this.shuffledMealId = null;
    this.activePlayer = null;
    this.aiDrawerOpen = false;
    this.profileSavedMessage = false;

    // Sub-components
    this.aiAssistant = new AayuAIAssistant(
      this.currentUser,
      (tab) => this.navigate(tab),
      (actId) => this.startActivity(actId)
    );

    this.reminderManager = new SmartReminderManager(
      storage,
      (actId) => this.startActivity(actId)
    );

    this.authModal = null;
    this.onboarding = null;

    this.init();
  }

  init() {
    window.AayuApp = this;
    this.reminderManager.startPeriodicCheck();
    this.render();
  }

  render() {
    const root = document.getElementById('root');
    if (!root) return;

    // Check if user is logged in
    this.currentUser = storage.getCurrentUser();

    if (!this.currentUser) {
      if (!this.authModal && !this.onboarding) {
        this.authModal = new AuthModal(
          storage,
          (user) => {
            this.authModal = null;
            this.currentUser = user;
            this.aiAssistant.updateUser(user);
            if (!user.hasCompletedOnboarding) {
              this.startOnboardingFlow(user.username, user.password);
            } else {
              this.navigate('dashboard');
            }
          },
          (username, password) => {
            this.authModal = null;
            this.startOnboardingFlow(username, password);
          }
        );
      }

      if (this.onboarding) {
        root.innerHTML = this.onboarding.getHTML();
      } else if (this.authModal) {
        root.innerHTML = this.authModal.getHTML();
      }
      return;
    }

    // Main App View
    let pageHTML = '';
    if (this.currentTab === 'dashboard' || this.currentTab === 'adaptive') {
      pageHTML = renderDashboardPage({
        currentUser: this.currentUser,
        selectedAdaptiveTime: this.selectedAdaptiveTime
      });
    } else if (this.currentTab === 'activities') {
      pageHTML = renderActivitiesPage({
        currentUser: this.currentUser,
        filters: this.activityFilters
      });
    } else if (this.currentTab === 'diet') {
      pageHTML = renderDietPage({
        currentUser: this.currentUser,
        activeCategory: this.dietFilters.category,
        activeDiet: this.dietFilters.diet,
        shuffledMealId: this.shuffledMealId
      });
    } else if (this.currentTab === 'progress') {
      pageHTML = renderProgressPage({
        currentUser: this.currentUser
      });
    } else if (this.currentTab === 'profile') {
      pageHTML = renderProfilePage({
        currentUser: this.currentUser,
        profileSavedMessage: this.profileSavedMessage
      });
    }

    // Assemble page
    root.innerHTML = `
      ${renderNavbar({
        currentTab: this.currentTab,
        currentUser: this.currentUser
      })}
      
      <div id="page-content-area">
        ${pageHTML}
      </div>

      <!-- Modals and Overlays -->
      <div id="modal-slot">
        ${this.activePlayer ? this.activePlayer.getHTML() : ''}
      </div>

      <div id="ai-drawer-slot">
        ${this.aiDrawerOpen ? this.aiAssistant.getHTML() : ''}
      </div>
    `;

    // Re-bind dynamic AI messages if drawer open
    if (this.aiDrawerOpen) {
      this.aiAssistant.renderMessages();
    }
  }

  navigate(tab) {
    this.currentTab = tab;
    this.profileSavedMessage = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();

    // If navigated to adaptive, scroll to the Adaptive Move section
    if (tab === 'adaptive') {
      setTimeout(() => {
        const el = document.getElementById('adaptive-move-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }

  setAdaptiveTime(minutes) {
    this.selectedAdaptiveTime = parseInt(minutes, 10);
    this.render();
    // Scroll smoothly to the result box
    const resultBox = document.getElementById('adaptive-result-box');
    if (resultBox) {
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  startActivity(activityId) {
    const act = activitiesData.find(a => a.id === activityId);
    if (!act) return;

    this.activePlayer = new ActivityPlayerModal(
      act,
      (completedAct, mins, resultOptions) => {
        storage.logCompletedWorkout(completedAct, mins, resultOptions);
        this.currentUser = storage.getCurrentUser();
        this.aiAssistant.updateUser(this.currentUser);
      },
      () => {
        this.activePlayer = null;
        this.render();
      }
    );

    this.render();
  }

  togglePlayerTimer() {
    if (!this.activePlayer) return;
    if (this.activePlayer.isRunning) {
      this.activePlayer.pauseTimer();
    } else {
      this.activePlayer.startTimer();
    }
  }

  closeModal() {
    if (this.activePlayer) {
      this.activePlayer.close();
      this.activePlayer = null;
    }
    this.render();
  }

  toggleAI() {
    this.aiDrawerOpen = !this.aiDrawerOpen;
    this.render();
  }

  submitAIChat() {
    const input = document.getElementById('ai-chat-input');
    if (!input || !input.value.trim()) return;
    const text = input.value;
    input.value = '';
    this.aiAssistant.sendUserMessage(text);
  }

  sendAIPrompt(promptText) {
    this.aiAssistant.sendUserMessage(promptText);
  }

  handleAIAction(activityId, navTab) {
    if (activityId) {
      this.aiDrawerOpen = false;
      this.startActivity(activityId);
    } else if (navTab) {
      this.aiDrawerOpen = false;
      this.navigate(navTab);
    }
  }

  setActivityFilter(key, value) {
    this.activityFilters[key] = value;
    this.render();
  }

  toggleRecommendedFilter() {
    this.activityFilters.onlyRecommended = !this.activityFilters.onlyRecommended;
    this.render();
  }

  setDietFilter(key, value) {
    this.dietFilters[key] = value;
    this.render();
  }

  shuffleMeal() {
    const randomIdx = Math.floor(Math.random() * mealsData.length);
    this.shuffledMealId = mealsData[randomIdx].id;
    this.render();
  }

  tempUpdateProfile(key, val) {
    if (!this.currentUser) return;
    this.currentUser[key] = val;
    storage.updateProfile({ [key]: val });
    this.render();
  }

  saveProfileForm() {
    const nameInput = document.getElementById('prof-name');
    const ageInput = document.getElementById('prof-age');

    const updates = {
      name: nameInput ? nameInput.value.trim() : this.currentUser.name,
      age: ageInput ? parseInt(ageInput.value, 10) : this.currentUser.age
    };

    const updated = storage.updateProfile(updates);
    this.currentUser = updated;
    this.aiAssistant.updateUser(updated);

    // Update adaptive time if user changed available time
    const userTime = parseInt(updated.availableTime, 10);
    if (!isNaN(userTime)) {
      this.selectedAdaptiveTime = userTime;
    }

    this.profileSavedMessage = true;
    this.render();
  }

  dismissReminder() {
    this.reminderManager.dismiss();
  }

  acceptReminder() {
    this.reminderManager.accept();
  }

  skipReminderForNow() {
    this.reminderManager.skipForNow();
  }

  quickDemoLogin() {
    const user = storage.resetDemo();
    this.currentUser = user;
    this.authModal = null;
    this.onboarding = null;
    this.aiAssistant.updateUser(user);
    this.navigate('dashboard');
  }

  setAuthMode(mode) {
    if (this.authModal) {
      this.authModal.setMode(mode);
    }
  }

  submitAuth() {
    const userInput = document.getElementById('auth-input-username');
    const passInput = document.getElementById('auth-input-password');
    const confirmInput = document.getElementById('auth-input-confirm');

    if (!userInput || !passInput) return;

    if (this.authModal.mode === 'login') {
      this.authModal.handleLogin(userInput.value, passInput.value);
    } else {
      this.authModal.handleSignup(
        userInput.value,
        passInput.value,
        confirmInput ? confirmInput.value : ''
      );
    }
  }

  startOnboardingFlow(username, password) {
    this.authModal = null;
    this.onboarding = new OnboardingModal(username, password, (u, p, data) => {
      const existingUser = storage.getUsers().find(user => user.username.toLowerCase() === u.trim().toLowerCase());
      let res;
      if (existingUser) {
        const updated = storage.updateProfile({ ...data, hasCompletedOnboarding: true });
        res = { success: true, user: updated };
      } else {
        res = storage.register(u, p, { ...data, hasCompletedOnboarding: true });
      }

      if (res.success) {
        this.currentUser = res.user;
        this.onboarding = null;
        this.aiAssistant.updateUser(res.user);
        this.navigate('dashboard');
      } else {
        alert(res.error || 'Registration failed.');
      }
    });
    this.render();
  }

  toggleExerciseVisualMode(visualId) {
    if (!this.activePlayer) return;
    const currStep = this.activePlayer.activity.instructions[this.activePlayer.currentStepIdx];
    if (!currStep) return;
    const animContainer = document.querySelector('.exercise-anim-container');
    if (animContainer) {
      const visualHtml = getExerciseAnimationHtml(currStep.name, this.activePlayer.activity.category, currStep.tips);
      animContainer.innerHTML = `
        <div class="exercise-anim-top-bar">
          <span class="exercise-anim-badge">
            <span class="pulse-dot"></span> Realistic Human Form Guide
          </span>
          <span class="exercise-anim-step-title">Step ${this.activePlayer.currentStepIdx + 1} of ${this.activePlayer.totalSteps}</span>
        </div>
        ${visualHtml}
      `;
    }
  }

  logout() {
    storage.logout();
    this.currentUser = null;
    this.authModal = null;
    this.onboarding = null;
    this.currentTab = 'dashboard';
    this.render();
  }
}

// Bootstrap app on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new AayuApp();
});
