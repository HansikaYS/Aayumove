// AayuMove Dashboard Page
// Highly personalized student hub featuring "Your Day. Your Time. Your Move.", stats, and quick-start actions.

import { renderAdaptiveMoveSection } from '../components/AdaptiveMoveSection.js';
import { activitiesData } from '../data/activitiesData.js';

export function renderDashboardPage({ currentUser, selectedAdaptiveTime }) {
  const firstName = currentUser?.name ? currentUser.name.split(' ')[0] : 'Student';
  
  // Time of day greeting
  const hour = new Date().getHours();
  let timeGreeting = 'Good morning';
  if (hour >= 12 && hour < 17) timeGreeting = 'Good afternoon';
  if (hour >= 17) timeGreeting = 'Good evening';

  // Today's personalized suggestion
  const userGoal = currentUser?.goal || 'Stay Active';
  const stage = currentUser?.fitnessStage || 'Beginner';
  const defaultMinutes = parseInt(currentUser?.availableTime, 10) || 10;
  
  // Find a prime tailored activity for quick-start
  const quickStartAct = activitiesData.find(a => 
    a.duration === defaultMinutes && 
    (a.difficulty.toLowerCase() === stage.toLowerCase() || a.difficulty === 'Beginner')
  ) || activitiesData[0];

  return `
    <main class="container" style="padding-top: 2rem; padding-bottom: 3rem;">
      <!-- Hero Welcome Section -->
      <section class="hero-welcome-section">
        <!-- Student Header Profile & Actions Row -->
        <div class="dashboard-user-bar">
          <div class="dashboard-user-info">
            <div class="user-avatar-circle" style="width: 44px; height: 44px; font-size: 1.1rem; flex-shrink: 0; background: linear-gradient(135deg, #f97316, #8b5cf6);">${firstName.charAt(0).toUpperCase()}</div>
            <div>
              <div class="hero-welcome-greeting" style="margin-bottom: 0.15rem;">
                <span>👋 ${timeGreeting}, <strong style="color: var(--text-main);">${firstName}</strong></span>
                <span class="badge badge-indigo">${stage}</span>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${userGoal} • ${currentUser?.availableTime || '10 mins'} daily window</div>
            </div>
          </div>

          <!-- Quick Action Buttons for Profile and Logout -->
          <div class="dashboard-user-actions">
            <button class="btn btn-secondary btn-sm" id="btn-dash-profile" onclick="window.AayuApp.navigate('profile')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Profile</span>
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-dash-logout" onclick="window.AayuApp.logout()" title="Logout of AayuMove">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>Logout</span>
            </button>
          </div>
        </div>

        <h1 class="hero-welcome-title" style="margin-top: 1.25rem;">
          Ready to <span class="gradient-text">move on your own terms?</span>
        </h1>
        <p style="color: var(--text-muted); font-size: 1rem; max-width: 650px;">
          No rigid gym timetables. AayuMove adapts to whatever gap you have between lectures, study sessions, or hostel chores.
        </p>
      </section>

      <!-- Key Stats Row -->
      <section class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: rgba(139, 92, 246, 0.1); color: #8b5cf6;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
          </div>
          <div class="stat-val gradient-text">${currentUser?.totalActiveMinutes || 0}m</div>
          <div class="stat-label">Total Active Time</div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <div class="stat-val" style="color: #ea580c;">${currentUser?.consistencyScore || 0}</div>
          <div class="stat-label">Consistency Score ⚡</div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: rgba(16, 185, 129, 0.15); color: #34d399;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="stat-val" style="color: #34d399;">${currentUser?.totalWorkoutsCompleted || 0}</div>
          <div class="stat-label">Moves Completed</div>
        </div>

        <div class="stat-card">
          <div class="stat-icon-wrapper" style="background: rgba(6, 182, 212, 0.15); color: #38bdf8;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
          </div>
          <div class="stat-val" style="font-size: 1.15rem; color: #38bdf8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${userGoal}
          </div>
          <div class="stat-label">Target Focus</div>
        </div>
      </section>

      <!-- Supportive Smart Reminder Notice -->
      ${currentUser?.remindersEnabled ? `
        <div class="reminder-banner">
          <div class="reminder-content">
            <div class="reminder-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
            <div>
              <div class="reminder-text-title">Smart Break Reminder Active</div>
              <div class="reminder-text-desc">You have 10 minutes free between classes. Perfect window for an energy reset!</div>
            </div>
          </div>
          <button class="btn btn-cyan btn-sm" onclick="window.AayuApp.setAdaptiveTime(10); window.AayuApp.navigate('adaptive');">
            Check 10m Routine &rarr;
          </button>
        </div>
      ` : ''}

      <!-- THE CORE INNOVATION: ADAPTIVE MOVE SECTION -->
      ${renderAdaptiveMoveSection(selectedAdaptiveTime, currentUser)}

      <!-- Two-Column Student Hub Grid -->
      <div class="dashboard-grid">
        <!-- Left: Quick-Start & Today's Highlight -->
        <div>
          <!-- Quick-Start Activity Spotlight -->
          <div class="glass-card" style="margin-bottom: 2rem; position: relative;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <span class="badge badge-cyan">⚡ Quick Start Routine</span>
              <span style="font-size: 0.8rem; color: var(--text-muted);">${quickStartAct.spaceNeeded}</span>
            </div>

            <h3 style="font-size: 1.4rem; margin-bottom: 0.4rem;">${quickStartAct.title}</h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">
              ${quickStartAct.shortDescription}
            </p>

            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
              <div style="display: flex; gap: 0.5rem; align-items: center;">
                <span class="badge badge-indigo">${quickStartAct.duration} mins</span>
                <span class="badge badge-emerald">~${quickStartAct.burnedCalories} kcal</span>
                <span class="badge badge-amber">${quickStartAct.difficulty}</span>
              </div>
              <button class="btn btn-primary btn-sm" id="btn-dashboard-quick-start" onclick="window.AayuApp.startActivity('${quickStartAct.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Launch Now
              </button>
            </div>
          </div>

          <!-- Student Routine Rationale -->
          <div class="glass-card">
            <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Why Adaptive Fitness Matters for Students
            </h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 0.75rem;">
              College and coaching timetables change daily. When you miss a standard 1-hour gym slot, you feel guilt and quit. With <strong>AayuMove</strong>, a 5-minute desk stretch or a 10-minute dorm circuit keeps your physiological momentum intact.
            </p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="badge badge-indigo">Zero Equipment</span>
              <span class="badge badge-cyan">Dorm Friendly</span>
              <span class="badge badge-emerald">Cognitive Focus</span>
            </div>
          </div>
        </div>

        <!-- Right: Aayu AI Assistant Spotlight & Fuel Tip -->
        <div>
          <!-- AI Assistant Card -->
          <div class="glass-card" style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.06), rgba(20, 184, 166, 0.06)); border-color: rgba(139, 92, 246, 0.2); margin-bottom: 2rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
              <div class="brand-icon-box" style="width: 40px; height: 40px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 12.5"/><path d="m4.5 15 4 4"/><path d="m14.5 4 4 4"/></svg>
              </div>
              <div>
                <h4 style="font-size: 1.15rem; font-weight: 800;">Aayu AI Companion</h4>
                <span style="font-size: 0.74rem; color: #0d9488;">Instant Student Wellness Advice</span>
              </div>
            </div>

            <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.25rem; line-height: 1.45;">
              Ask anything about late-night study nutrition, beating exam burnout, or quick dorm stretches.
            </p>

            <button class="btn btn-cyan" style="width: 100%; font-size: 0.9rem;" onclick="window.AayuApp.toggleAI()">
              💬 Chat with Aayu AI
            </button>
          </div>

          <!-- Student Fuel Snapshot -->
          <div class="glass-card">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="badge badge-amber">Smart Student Fuel</span>
              <span style="font-size: 0.78rem; color: #059669;">${currentUser?.dietaryPreference || 'Vegetarian'}</span>
            </div>
            <h4 style="font-size: 1.1rem; margin-bottom: 0.35rem;">Late-Night Study Makhana</h4>
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 1rem;">
              Roasted fox nuts + peanuts tossed in chaat masala. Low glycemic crunch that stops brain fog without disrupting sleep!
            </p>
            <button class="btn btn-secondary btn-sm" style="width: 100%;" onclick="window.AayuApp.navigate('diet')">
              Explore All Student Meals &rarr;
            </button>
          </div>

          <!-- Hydration Reminder Card -->
          <div class="hydration-card" style="margin-top: 1.5rem;">
            <div class="hydration-icon">💧</div>
            <h4 style="font-size: 1.1rem; margin-bottom: 0.35rem;">Stay Hydrated</h4>
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 0.75rem;">
              Drinking water between study sessions boosts concentration by up to 14%. Keep a bottle handy!
            </p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="badge badge-cyan">8 glasses/day</span>
              <span class="badge badge-emerald">Brain Fuel</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
}
