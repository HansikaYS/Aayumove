// AayuMove Interactive Onboarding Flow
// Gathers student parameters: Time, Stage, Goal, Activities, Diet, and Routine.

export class OnboardingModal {
  constructor(username, password, onComplete) {
    this.username = username;
    this.password = password;
    this.onComplete = onComplete;

    this.currentStep = 1;
    this.totalSteps = 4;

    this.data = {
      name: '',
      age: 20,
      fitnessStage: 'Beginner', // Beginner, Intermediate, Advanced
      goal: 'Stay Active',
      preferredActivities: ['Mobility & Stretching', 'Cardio'],
      availableTime: '10 minutes', // 5 minutes, 10 minutes, 15 minutes, 30+ minutes
      preferredTime: 'Morning', // Morning, Afternoon, Evening, Custom
      activityLevel: 'Sedentary', // Sedentary, Lightly Active, Moderately Active, Very Active
      dietaryPreference: 'Vegetarian', // Vegetarian, Non-Vegetarian, No Preference
      budgetFriendly: 'No', // Yes, No
      wellnessPreferences: ['Stress relief', 'Posture reset']
    };
  }

  setField(key, value) {
    this.data[key] = value;
    this.render();
  }

  toggleArrayItem(key, item) {
    if (this.data[key].includes(item)) {
      this.data[key] = this.data[key].filter(i => i !== item);
    } else {
      this.data[key].push(item);
    }
    this.render();
  }

  nextStep() {
    if (this.currentStep === 1) {
      const nameInput = document.getElementById('onboard-input-name');
      const ageInput = document.getElementById('onboard-input-age');
      if (nameInput && nameInput.value.trim()) {
        this.data.name = nameInput.value.trim();
      } else {
        this.data.name = this.username;
      }
      if (ageInput && ageInput.value) {
        this.data.age = parseInt(ageInput.value, 10) || 20;
      }
    }

    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.render();
    } else {
      // Finished all steps
      if (this.onComplete) {
        this.onComplete(this.username, this.password, this.data);
      }
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.render();
    }
  }

  render() {
    const container = document.getElementById('onboarding-modal-container');
    if (container) {
      container.innerHTML = this.getCardHTML();
    }
  }

  getStepContentHTML() {
    switch (this.currentStep) {
      case 1:
        return `
          <div>
            <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.35rem;">Let's get to know you</h3>
            <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.5rem;">Basic details to calibrate your student fitness engine.</p>

            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div>
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">
                  Your Name / Nickname
                </label>
                <input type="text" id="onboard-input-name" class="input-field" placeholder="e.g. Priya or Rahul" value="${this.data.name || ''}" />
              </div>

              <div>
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">
                  Age
                </label>
                <input type="number" id="onboard-input-age" class="input-field" value="${this.data.age || 20}" min="12" max="65" />
              </div>

              <div>
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.6rem;">
                  Your Fitness Stage
                </label>
                <div class="onboard-grid-3">
                  ${['Beginner', 'Intermediate', 'Advanced'].map(stage => `
                    <button type="button" 
                            class="time-pill-btn ${this.data.fitnessStage === stage ? 'selected' : ''}" 
                            onclick="window.AayuApp.onboarding.setField('fitnessStage', '${stage}')"
                            style="padding: 0.8rem 0.5rem;">
                      <span style="font-weight: 700; font-size: 0.95rem;">${stage}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `;

      case 2:
        return `
          <div>
            <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.35rem;">What is your main goal?</h3>
            <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.5rem;">Pick the primary focus that matters to you right now.</p>

            <div style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.5rem;">
              ${[
                { id: 'Stay Active', desc: 'Maintain energy, counter sitting in classes' },
                { id: 'Build Strength', desc: 'Tone muscles and master bodyweight movements' },
                { id: 'Improve Fitness', desc: 'Boost stamina and athletic endurance' },
                { id: 'Lose Weight', desc: 'Burn calories with high-efficiency intervals' },
                { id: 'General Wellness', desc: 'De-stress, fix posture and mental focus' },
                { id: 'Flexibility', desc: 'Improve range of motion and suppleness' },
                { id: 'Endurance', desc: 'Build cardiovascular and muscular stamina' },
                { id: 'Mobility', desc: 'Move freely with better joint health' },
                { id: 'Improve Energy', desc: 'Fight fatigue and feel energized all day' },
                { id: 'Reduce Sedentary Time', desc: 'Break long sitting spells with movement' }
              ].map(g => `
                <div class="glass-card" 
                     style="padding: 0.85rem 1rem; cursor: pointer; border-color: ${this.data.goal === g.id ? '#f97316' : 'var(--border-subtle)'}; background: ${this.data.goal === g.id ? 'rgba(249,115,22,0.08)' : 'var(--bg-card)'};"
                     onclick="window.AayuApp.onboarding.setField('goal', '${g.id}')">
                  <div style="font-weight: 700; font-size: 0.95rem; color: ${this.data.goal === g.id ? '#ea580c' : 'var(--text-main)'};">${g.id}</div>
                  <div style="font-size: 0.78rem; color: var(--text-muted);">${g.desc}</div>
                </div>
              `).join('')}
            </div>

            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
              Preferred Activities (Select all that you like)
            </label>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
              ${['Mobility & Stretching', 'Cardio', 'HIIT', 'Yoga', 'Calisthenics', 'Desk Yoga'].map(act => `
                <button type="button" 
                        class="filter-chip ${this.data.preferredActivities.includes(act) ? 'active' : ''}"
                        onclick="window.AayuApp.onboarding.toggleArrayItem('preferredActivities', '${act}')">
                  ${act}
                </button>
              `).join('')}
            </div>
          </div>
        `;

      case 3:
        return `
          <div>
            <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.35rem;">Your Schedule & Availability</h3>
            <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.5rem;">Fitness adapts to your day. How do your study hours look?</p>

            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div>
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
                  Typical Free Time Available
                </label>
                <div class="onboard-grid-4">
                  ${['5 minutes', '10 minutes', '15 minutes', '30+ minutes'].map(t => `
                    <button type="button" 
                            class="time-pill-btn ${this.data.availableTime === t ? 'selected' : ''}" 
                            onclick="window.AayuApp.onboarding.setField('availableTime', '${t}')"
                            style="padding: 0.75rem 0.3rem;">
                      <span style="font-weight: 800; font-size: 1.1rem;">${t.replace(' minutes', 'm')}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <div>
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
                  Preferred Time of Day
                </label>
                <div class="onboard-grid-4">
                  ${['Morning', 'Afternoon', 'Evening', 'Custom'].map(time => `
                    <button type="button" 
                            class="time-pill-btn ${this.data.preferredTime === time ? 'selected' : ''}" 
                            onclick="window.AayuApp.onboarding.setField('preferredTime', '${time}')"
                            style="padding: 0.7rem 0.3rem;">
                      <span style="font-weight: 700; font-size: 0.85rem;">${time}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <div>
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
                  Current Activity Level
                </label>
                <div class="onboard-grid-2">
                  ${[
                    { id: 'Sedentary', label: 'Mostly Sitting (Lectures/Desk)' },
                    { id: 'Lightly Active', label: 'Walking campus occasionally' },
                    { id: 'Moderately Active', label: 'Move regularly between classes' },
                    { id: 'Very Active', label: 'Play sports or daily workouts' }
                  ].map(lvl => `
                    <div class="glass-card" 
                         style="padding: 0.75rem; cursor: pointer; border-color: ${this.data.activityLevel === lvl.id ? '#06b6d4' : 'var(--border-subtle)'}; background: ${this.data.activityLevel === lvl.id ? 'rgba(6,182,212,0.15)' : 'var(--bg-card)'};"
                         onclick="window.AayuApp.onboarding.setField('activityLevel', '${lvl.id}')">
                      <div style="font-weight: 700; font-size: 0.88rem; color: ${this.data.activityLevel === lvl.id ? '#a5f3fc' : 'var(--text-main)'};">${lvl.id}</div>
                      <div style="font-size: 0.74rem; color: var(--text-muted);">${lvl.label}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `;

      case 4:
        return `
          <div>
            <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.35rem;">Fuel & Student Wellness</h3>
            <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.5rem;">Tailor your food ideas and mindful recovery.</p>

            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              <div>
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
                  Dietary Preference
                </label>
                <div class="onboard-grid-3">
                  ${['Vegetarian', 'Non-Vegetarian', 'No Preference'].map(d => `
                    <button type="button" 
                            class="time-pill-btn ${this.data.dietaryPreference === d ? 'selected' : ''}" 
                            onclick="window.AayuApp.onboarding.setField('dietaryPreference', '${d}')"
                            style="padding: 0.75rem 0.5rem;">
                      <span style="font-weight: 700; font-size: 0.85rem;">${d}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <div>
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
                  Budget Friendly
                </label>
                <div class="onboard-grid-2">
                  ${['Yes', 'No'].map(b => `
                    <button type="button" 
                            class="time-pill-btn ${this.data.budgetFriendly === b ? 'selected' : ''}" 
                            onclick="window.AayuApp.onboarding.setField('budgetFriendly', '${b}')"
                            style="padding: 0.75rem 0.5rem;">
                      <span style="font-weight: 700; font-size: 0.85rem;">${b}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <div>
                <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
                  Wellness Priorities
                </label>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  ${['Stress relief', 'Posture reset', 'Focus boost', 'Sleep quality', 'Digestive health'].map(w => `
                    <button type="button" 
                            class="filter-chip ${this.data.wellnessPreferences.includes(w) ? 'active' : ''}"
                            onclick="window.AayuApp.onboarding.toggleArrayItem('wellnessPreferences', '${w}')">
                      ${w}
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        `;

      default:
        return '';
    }
  }

  getCardHTML() {
    return `
      <div class="modal-card" style="max-width: 540px;">
        <!-- Step Indicator -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <span class="badge badge-indigo">Step ${this.currentStep} of ${this.totalSteps}</span>
          <span style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">Personalizing AayuMove</span>
        </div>

        <div style="background: rgba(255,255,255,0.06); height: 5px; border-radius: 3px; overflow: hidden; margin-bottom: 1.75rem;">
          <div style="height: 100%; width: ${(this.currentStep / this.totalSteps) * 100}%; background: linear-gradient(90deg, #6366f1, #06b6d4); transition: width 0.3s ease;"></div>
        </div>

        <!-- Dynamic Step Content -->
        ${this.getStepContentHTML()}

        <!-- Actions -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 2rem; border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
          ${this.currentStep > 1 ? `
            <button class="btn btn-secondary" onclick="window.AayuApp.onboarding.prevStep()">
              &larr; Back
            </button>
          ` : `<div></div>`}

          <button class="btn btn-primary" id="btn-onboarding-next" onclick="window.AayuApp.onboarding.nextStep()">
            ${this.currentStep === this.totalSteps ? 'Finish & Open Dashboard 🎉' : 'Next Step &rarr;'}
          </button>
        </div>
      </div>
    `;
  }

  getHTML() {
    return `
      <div class="modal-backdrop" id="onboarding-modal-backdrop">
        <div id="onboarding-modal-container">
          ${this.getCardHTML()}
        </div>
      </div>
    `;
  }
}
