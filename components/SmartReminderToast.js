// AayuMove Smart Reminder Toast System
// Supportive non-nagging student reminders that adapt to free time and breaks
// Includes workout AND hydration reminders with Skip for Now option

export class SmartReminderManager {
  constructor(storage, onStartActivity) {
    this.storage = storage;
    this.onStartActivity = onStartActivity;
    this.toastTimer = null;
    this.isVisible = false;
    this.reminderType = 'workout'; // alternates between 'workout' and 'hydration'
  }

  startPeriodicCheck() {
    // Check every 90 seconds in active session or trigger based on preferences
    setInterval(() => {
      this.maybeShowReminder();
    }, 90000);

    // Also trigger initial gentle check 8 seconds after login/mount
    setTimeout(() => {
      this.maybeShowReminder();
    }, 8000);
  }

  maybeShowReminder() {
    const user = this.storage.getCurrentUser();
    if (!user || !user.remindersEnabled) return;

    // Check if reminder was dismissed recently
    const lastDismissed = sessionStorage.getItem('aayumove_reminder_dismissed');
    if (lastDismissed && Date.now() - parseInt(lastDismissed, 10) < 180000) {
      return; // Wait at least 3 minutes between reminders
    }

    // Check if "Skip for Now" was used (30 min suppression)
    const skippedUntil = sessionStorage.getItem('aayumove_reminder_skipped_until');
    if (skippedUntil && Date.now() < parseInt(skippedUntil, 10)) {
      return; // User chose "Skip for Now" — wait 30 minutes
    }

    this.showToast(user);
  }

  showToast(user) {
    if (this.isVisible) return;
    this.isVisible = true;

    const availableTime = user.availableTime || '10 minutes';
    const name = user.name ? user.name.split(' ')[0] : 'there';

    // Alternate between workout and hydration reminders
    this.reminderType = this.reminderType === 'workout' ? 'hydration' : 'workout';

    let chosenMsg = '';
    let toastTitle = '';
    let toastIcon = '';
    let toastColor = '';
    let toastBorder = '';

    if (this.reminderType === 'hydration') {
      toastTitle = 'Hydration Check 💧';
      toastIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`;
      toastColor = '#0ea5e9';
      toastBorder = 'rgba(14, 165, 233, 0.3)';
      const hydrationMsgs = [
        `Hey ${name}! Time for a glass of water. Staying hydrated improves focus and concentration.`,
        `Quick hydration break! Dehydration causes brain fog — drink some water to stay sharp.`,
        `Water check! Your brain is 75% water. A sip now keeps your study game strong.`
      ];
      chosenMsg = hydrationMsgs[Math.floor(Math.random() * hydrationMsgs.length)];
    } else {
      toastTitle = 'Adaptive Study Break';
      toastIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
      toastColor = '#f97316';
      toastBorder = 'rgba(249, 115, 22, 0.3)';
      const workoutMsgs = [
        `Hey ${name}! You have ${availableTime} free between study blocks. Ready for a quick move?`,
        `Study posture check! 5 minutes away from your screen can recharge your concentration.`,
        `Keep your ${user.streakDays || 1}-day streak shining! A quick micro-break is ready.`
      ];
      chosenMsg = workoutMsgs[Math.floor(Math.random() * workoutMsgs.length)];
    }

    let container = document.getElementById('smart-reminder-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'smart-reminder-toast-container';
      container.style.position = 'fixed';
      container.style.bottom = '85px';
      container.style.right = '1.5rem';
      container.style.zIndex = '80';
      container.style.maxWidth = '380px';
      document.body.appendChild(container);
    }

    container.innerHTML = `
      <div style="background: rgba(255, 255, 255, 0.97); border: 1px solid ${toastBorder}; border-radius: var(--radius-lg); padding: 1.1rem 1.25rem; box-shadow: 0 15px 35px rgba(0,0,0,0.12), 0 0 20px rgba(0,0,0,0.04); backdrop-filter: blur(16px); animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);">
        <div style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: ${toastColor}15; display: flex; align-items: center; justify-content: center; color: ${toastColor}; flex-shrink: 0;">
            ${toastIcon}
          </div>
          <div>
            <div style="font-weight: 700; font-size: 0.88rem; color: ${toastColor}; margin-bottom: 0.2rem;">${toastTitle}</div>
            <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4;">${chosenMsg}</p>
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="window.AayuApp.skipReminderForNow()">
            Skip for Now
          </button>
          <button class="btn btn-secondary btn-sm" onclick="window.AayuApp.dismissReminder()">
            Later
          </button>
          ${this.reminderType === 'workout' ? `
            <button class="btn btn-cyan btn-sm" onclick="window.AayuApp.acceptReminder()">
              Let's Move &rarr;
            </button>
          ` : `
            <button class="btn btn-cyan btn-sm" onclick="window.AayuApp.dismissReminder()">
              Got it! 💧
            </button>
          `}
        </div>
      </div>
    `;
  }

  dismiss() {
    this.isVisible = false;
    sessionStorage.setItem('aayumove_reminder_dismissed', Date.now().toString());
    const container = document.getElementById('smart-reminder-toast-container');
    if (container) container.innerHTML = '';
  }

  skipForNow() {
    this.isVisible = false;
    // Suppress reminders for 30 minutes
    const skipUntil = Date.now() + (30 * 60 * 1000);
    sessionStorage.setItem('aayumove_reminder_skipped_until', skipUntil.toString());
    sessionStorage.setItem('aayumove_reminder_dismissed', Date.now().toString());
    const container = document.getElementById('smart-reminder-toast-container');
    if (container) container.innerHTML = '';
  }

  accept() {
    this.dismiss();
    const user = this.storage.getCurrentUser();
    const time = user?.availableTime?.includes('5') ? 5 : 10;
    if (window.AayuApp) {
      window.AayuApp.setAdaptiveTime(time);
      window.AayuApp.navigate('adaptive');
    }
  }
}
