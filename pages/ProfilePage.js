// AayuMove Editable Student Profile Page
// Allows updating all parameters; immediately refreshes adaptive engine and recommendations.

export function renderProfilePage({ currentUser, profileSavedMessage }) {
  const user = currentUser || {};

  return `
    <main class="container" style="padding-top: 2rem; padding-bottom: 3rem; max-width: 800px;">
      <!-- Header -->
      <div style="margin-bottom: 2rem;">
        <span class="badge badge-indigo" style="margin-bottom: 0.5rem;">Adaptive Calibration</span>
        <h1 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 0.4rem;">
          Your <span class="gradient-text">Student Profile & Settings</span>
        </h1>
        <p style="color: var(--text-muted); font-size: 0.98rem;">
          Keep your schedule and fitness targets up to date. Any changes here immediately adapt your dashboard and workout suggestions.
        </p>
      </div>

      ${profileSavedMessage ? `
        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); color: #059669; padding: 0.85rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Profile updated successfully! All recommendations have been recalibrated.
        </div>
      ` : ''}

      <form id="profile-edit-form" onsubmit="event.preventDefault(); window.AayuApp.saveProfileForm();" class="glass-card" style="padding: 2rem; display: flex; flex-direction: column; gap: 1.75rem;">
        <!-- Basic Info -->
        <div>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: #7c3aed;">1. Student Identity</h3>
          <div class="profile-identity-grid">
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Full Name</label>
              <input type="text" id="prof-name" class="input-field" value="${user.name || ''}" required />
            </div>
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Age</label>
              <input type="number" id="prof-age" class="input-field" value="${user.age || 20}" min="12" max="65" />
            </div>
          </div>
        </div>

        <!-- Fitness Stage & Goal -->
        <div>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: #7c3aed;">2. Fitness Stage & Primary Goal</h3>
          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Fitness Stage</label>
            <div class="profile-pill-grid-3">
              ${['Beginner', 'Intermediate', 'Advanced'].map(st => `
                <button type="button" 
                        class="time-pill-btn ${user.fitnessStage === st ? 'selected' : ''}"
                        onclick="window.AayuApp.tempUpdateProfile('fitnessStage', '${st}')"
                        style="padding: 0.75rem;">
                  <span style="font-weight: 700;">${st}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Main Goal</label>
            <div class="profile-pill-grid-2">
              ${['Stay Active', 'Build Strength', 'Improve Fitness', 'Lose Weight', 'General Wellness', 'Flexibility', 'Endurance', 'Mobility', 'Improve Energy', 'Reduce Sedentary Time'].map(g => `
                <button type="button" 
                        class="time-pill-btn ${user.goal === g ? 'selected' : ''}"
                        onclick="window.AayuApp.tempUpdateProfile('goal', '${g}')"
                        style="padding: 0.75rem 0.5rem;">
                  <span style="font-weight: 700; font-size: 0.88rem;">${g}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Schedule & Routine -->
        <div>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: #7c3aed;">3. Schedule & Activity Level</h3>
          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Typical Available Free Time</label>
            <div class="profile-pill-grid-4">
              ${['5 minutes', '10 minutes', '15 minutes', '30+ minutes'].map(t => `
                <button type="button" 
                        class="time-pill-btn ${user.availableTime === t ? 'selected' : ''}"
                        onclick="window.AayuApp.tempUpdateProfile('availableTime', '${t}')"
                        style="padding: 0.7rem 0.3rem;">
                  <span style="font-weight: 800;">${t.replace(' minutes', 'm')}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Preferred Time of Day</label>
            <div class="profile-pill-grid-4">
              ${['Morning', 'Afternoon', 'Evening', 'Custom'].map(time => `
                <button type="button" 
                        class="time-pill-btn ${user.preferredTime === time ? 'selected' : ''}"
                        onclick="window.AayuApp.tempUpdateProfile('preferredTime', '${time}')"
                        style="padding: 0.7rem 0.3rem;">
                  <span style="font-weight: 700; font-size: 0.85rem;">${time}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Activity Level</label>
            <div class="profile-pill-grid-2">
              ${['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active'].map(lvl => `
                <button type="button" 
                        class="time-pill-btn ${user.activityLevel === lvl ? 'selected' : ''}"
                        onclick="window.AayuApp.tempUpdateProfile('activityLevel', '${lvl}')"
                        style="padding: 0.7rem 0.5rem;">
                  <span style="font-weight: 700; font-size: 0.85rem;">${lvl}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Nutrition & Wellness -->
        <div>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: #7c3aed;">4. Nutrition & Smart Reminders</h3>
          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Dietary Preference</label>
            <div class="profile-pill-grid-3">
              ${['Vegetarian', 'Non-Vegetarian', 'No Preference'].map(d => `
                <button type="button" 
                        class="time-pill-btn ${user.dietaryPreference === d ? 'selected' : ''}"
                        onclick="window.AayuApp.tempUpdateProfile('dietaryPreference', '${d}')"
                        style="padding: 0.7rem 0.4rem;">
                  <span style="font-weight: 700; font-size: 0.82rem;">${d}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">Budget Friendly</label>
            <div class="profile-pill-grid-2">
              ${['Yes', 'No'].map(b => `
                <button type="button" 
                        class="time-pill-btn ${(user.budgetFriendly || 'No') === b ? 'selected' : ''}"
                        onclick="window.AayuApp.tempUpdateProfile('budgetFriendly', '${b}')"
                        style="padding: 0.7rem 0.4rem;">
                  <span style="font-weight: 700; font-size: 0.82rem;">${b}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Smart Reminder Toggle -->
          <div style="background: rgba(0, 0, 0, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between;">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem;">Smart Movement Reminders</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Encourages movement during your natural study break windows</div>
            </div>
            <label style="position: relative; display: inline-block; width: 48px; height: 26px; cursor: pointer;">
              <input type="checkbox" id="prof-reminders-toggle" ${user.remindersEnabled ? 'checked' : ''} style="opacity: 0; width: 0; height: 0;" onchange="window.AayuApp.tempUpdateProfile('remindersEnabled', this.checked)">
              <span style="position: absolute; cursor: pointer; inset: 0; background-color: ${user.remindersEnabled ? '#f97316' : 'rgba(0,0,0,0.15)'}; border-radius: 34px; transition: 0.3s;">
                <span style="position: absolute; height: 20px; width: 20px; left: ${user.remindersEnabled ? '24px' : '3px'}; bottom: 3px; background-color: white; border-radius: 50%; transition: 0.3s;"></span>
              </span>
            </label>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="profile-submit-row" style="display: flex; justify-content: flex-end; gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; margin-top: 0.5rem;">
          <button type="submit" class="btn btn-primary" id="btn-save-profile" style="min-width: 180px;">
            Save & Recalibrate Engine
          </button>
        </div>
      </form>
    </main>
  `;
}
