// AayuMove Interactive Activity Player Modal
// Features live countdown timer, play/pause/reset, step progression, audio synth cues,
// REST TIMER between exercises, animated exercise form guides, and progress logging.

import { getExerciseAnimationHtml } from '../services/exerciseAnimations.js';

export class ActivityPlayerModal {
  constructor(activity, onComplete, onClose) {
    this.activity = activity;
    this.onComplete = onComplete;
    this.onClose = onClose;

    this.exercises = activity.instructions.map((inst, idx) => ({
      stepIndex: idx + 1,
      name: inst.name,
      durationSec: inst.durationSec || 60,
      status: 'Incomplete' // 'Completed' | 'Skipped' | 'Incomplete'
    }));

    this.currentStepIdx = 0;
    this.totalSteps = activity.instructions.length;
    this.stepSecondsLeft = activity.instructions[0]?.durationSec || 60;
    this.totalSecondsElapsed = 0;
    this.isRunning = false;
    this.timerInterval = null;
    this.audioCtx = null;

    // Rest timer state
    this.isResting = false;
    this.restSecondsLeft = 0;
    this.REST_DURATION = 15; // seconds between exercises
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playBeep(freq = 440, duration = 0.15, type = 'sine') {
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  playCompletionChime() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      setTimeout(() => this.playBeep(freq, 0.25, 'triangle'), i * 140);
    });
  }

  startTimer() {
    this.initAudio();
    this.playBeep(660, 0.12);
    this.isRunning = true;
    this.updateUI();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.isResting) {
        // Rest timer countdown
        if (this.restSecondsLeft > 0) {
          this.restSecondsLeft--;
          if (this.restSecondsLeft <= 3 && this.restSecondsLeft > 0) {
            this.playBeep(523, 0.08);
          }
          this.updateRestUI();
        } else {
          // Rest finished, move to next step
          this.isResting = false;
          this.currentStepIdx++;
          this.stepSecondsLeft = this.activity.instructions[this.currentStepIdx].durationSec;
          this.playBeep(587, 0.2);
          this.updateUI();
        }
      } else {
        // Normal exercise countdown
        if (this.stepSecondsLeft > 0) {
          this.stepSecondsLeft--;
          this.totalSecondsElapsed++;
          if (this.stepSecondsLeft <= 3 && this.stepSecondsLeft > 0) {
            this.playBeep(440, 0.08);
          }
          this.updateTimeDigits();
        } else {
          // Exercise step finished genuinely
          if (this.exercises[this.currentStepIdx]) {
            this.exercises[this.currentStepIdx].status = 'Completed';
          }
          if (this.currentStepIdx < this.totalSteps - 1) {
            this.startRestTimer();
          } else {
            this.finishWorkout();
          }
        }
      }
    }, 1000);
  }

  startRestTimer() {
    this.isResting = true;
    this.restSecondsLeft = this.REST_DURATION;
    this.playBeep(392, 0.15, 'triangle');
    this.renderRestScreen();
  }

  skipRest() {
    this.isResting = false;
    this.currentStepIdx++;
    this.stepSecondsLeft = this.activity.instructions[this.currentStepIdx].durationSec;
    this.playBeep(587, 0.2);
    this.updateUI();
  }

  pauseTimer() {
    this.isRunning = false;
    clearInterval(this.timerInterval);
    this.playBeep(330, 0.1);
    this.updateUI();
  }

  resetCurrentStep() {
    this.stepSecondsLeft = this.activity.instructions[this.currentStepIdx]?.durationSec || 60;
    this.updateTimeDigits();
  }

  nextStep() {
    if (this.isResting) {
      this.skipRest();
      return;
    }

    // If skipping before duration is completed, mark exercise as Skipped
    if (this.exercises[this.currentStepIdx]) {
      if (this.stepSecondsLeft > 0) {
        this.exercises[this.currentStepIdx].status = 'Skipped';
      } else {
        this.exercises[this.currentStepIdx].status = 'Completed';
      }
    }

    if (this.currentStepIdx < this.totalSteps - 1) {
      // If timer is running, go through rest; otherwise direct advance
      if (this.isRunning) {
        this.startRestTimer();
      } else {
        this.currentStepIdx++;
        this.stepSecondsLeft = this.activity.instructions[this.currentStepIdx].durationSec;
        this.playBeep(587, 0.2);
        this.updateUI();
      }
    } else {
      this.finishWorkout();
    }
  }

  prevStep() {
    if (this.isResting) {
      this.isResting = false;
      this.stepSecondsLeft = this.activity.instructions[this.currentStepIdx]?.durationSec || 60;
      this.updateUI();
      return;
    }
    if (this.currentStepIdx > 0) {
      this.currentStepIdx--;
      this.stepSecondsLeft = this.activity.instructions[this.currentStepIdx].durationSec;
      this.updateUI();
    }
  }

  finishWorkout() {
    clearInterval(this.timerInterval);
    this.isRunning = false;

    // A workout is genuinely completed only if all exercises have status 'Completed'
    const allCompleted = this.exercises.length > 0 && this.exercises.every(e => e.status === 'Completed');

    if (allCompleted) {
      this.playCompletionChime();
    } else {
      this.playBeep(330, 0.25, 'triangle');
    }

    const actualMinutes = Math.max(1, Math.round(this.totalSecondsElapsed / 60) || this.activity.duration);
    if (this.onComplete) {
      this.onComplete(this.activity, actualMinutes, {
        isCompleted: allCompleted,
        exercises: this.exercises
      });
    }

    if (allCompleted) {
      this.renderCompletedState(actualMinutes);
    } else {
      this.renderIncompleteState(actualMinutes);
    }
  }

  close() {
    clearInterval(this.timerInterval);
    if (this.onClose) this.onClose();
  }

  formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  updateTimeDigits() {
    const digitsEl = document.getElementById('player-time-digits');
    if (digitsEl) {
      digitsEl.textContent = this.formatTime(this.stepSecondsLeft);
    }
    const progEl = document.getElementById('player-step-progress-bar');
    if (progEl) {
      const stepTotal = this.activity.instructions[this.currentStepIdx]?.durationSec || 60;
      const pct = ((stepTotal - this.stepSecondsLeft) / stepTotal) * 100;
      progEl.style.width = `${pct}%`;
    }
  }

  updateRestUI() {
    const restCountdown = document.getElementById('rest-countdown-digits');
    if (restCountdown) {
      restCountdown.textContent = this.restSecondsLeft;
    }
  }

  renderRestScreen() {
    const content = document.getElementById('player-modal-content');
    if (!content) return;

    const nextStep = this.activity.instructions[this.currentStepIdx + 1];
    const nextName = nextStep ? nextStep.name : 'Final step';

    content.innerHTML = `
      <button class="modal-close-btn" onclick="window.AayuApp.closeModal()" title="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <div class="rest-timer-box">
        <div class="rest-icon">😮‍💨</div>
        <div class="rest-title">Rest & Breathe</div>
        <div class="rest-countdown" id="rest-countdown-digits">${this.restSecondsLeft}</div>
        <div class="rest-upcoming">Up next: <strong>${nextName}</strong></div>

        <button class="btn btn-primary" onclick="window.AayuApp.activePlayer.skipRest()">
          Skip Rest →
        </button>
      </div>
    `;
  }

  updateUI() {
    // If we're in rest, render rest screen instead
    if (this.isResting) {
      this.renderRestScreen();
      return;
    }

    // Re-render the full player view
    const content = document.getElementById('player-modal-content');
    if (content) {
      content.innerHTML = this.getInnerHTML();
    }
  }

  renderCompletedState(minutesLogged) {
    const content = document.getElementById('player-modal-content');
    if (!content) return;

    content.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">🎉</div>
        <span class="badge badge-emerald" style="font-size: 0.88rem; margin-bottom: 1rem; padding: 0.35rem 1rem;">Move Completed!</span>
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Awesome job, Student Warrior!</h2>
        <p style="color: var(--text-muted); max-width: 420px; margin: 0 auto 1.5rem;">
          You just invested in your physical energy and academic stamina. Small daily moves compound into lifelong strength!
        </p>

        <div class="completed-stats-grid">
          <div style="background: rgba(0,0,0,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
            <div style="font-size: 1.6rem; font-weight: 800; color: #0d9488;">+${minutesLogged}</div>
            <div style="font-size: 0.76rem; color: var(--text-muted);">Active Mins</div>
          </div>
          <div style="background: rgba(0,0,0,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
            <div style="font-size: 1.6rem; font-weight: 800; color: #d97706;">~${this.activity.burnedCalories}</div>
            <div style="font-size: 0.76rem; color: var(--text-muted);">Calories Burned</div>
          </div>
          <div style="background: rgba(0,0,0,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
            <div style="font-size: 1.6rem; font-weight: 800; color: #10b981;">⚡ +1</div>
            <div style="font-size: 0.76rem; color: var(--text-muted);">Consistency Score</div>
          </div>
        </div>

        <button class="btn btn-primary" id="player-btn-close-completed" onclick="window.AayuApp.closeModal(); window.AayuApp.navigate('dashboard');">
          Return to Dashboard
        </button>
      </div>
    `;
  }

  renderIncompleteState(minutesLogged) {
    const content = document.getElementById('player-modal-content');
    if (!content) return;

    const completedCount = this.exercises.filter(e => e.status === 'Completed').length;
    const skippedCount = this.exercises.filter(e => e.status === 'Skipped').length;

    content.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">⚠️</div>
        <span class="badge badge-amber" style="font-size: 0.88rem; margin-bottom: 1rem; padding: 0.35rem 1rem;">Workout Incomplete</span>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">Exercises Were Skipped</h2>
        <p style="color: var(--text-muted); max-width: 440px; margin: 0 auto 1.5rem; font-size: 0.92rem;">
          To build genuine fitness and earn <strong>+1 Consistency Score</strong>, all exercises in the routine must be fully completed without skipping.
        </p>

        <div style="max-width: 440px; margin: 0 auto 1.5rem; text-align: left; background: rgba(0,0,0,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem;">
          <div style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.75rem;">
            Exercise Breakdown (${completedCount}/${this.totalSteps} Completed)
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${this.exercises.map(e => `
              <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.85rem;">
                <span>${e.stepIndex}. ${e.name}</span>
                <span class="badge ${e.status === 'Completed' ? 'badge-emerald' : 'badge-amber'}" style="font-size: 0.75rem;">
                  ${e.status === 'Completed' ? '✔ Completed' : '⏭ Skipped'}
                </span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="completed-stats-grid" style="grid-template-columns: repeat(2, 1fr); max-width: 360px; margin: 0 auto 1.5rem;">
          <div style="background: rgba(0,0,0,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.9rem;">
            <div style="font-size: 1.4rem; font-weight: 800; color: #0d9488;">+${minutesLogged}m</div>
            <div style="font-size: 0.76rem; color: var(--text-muted);">Active Time</div>
          </div>
          <div style="background: rgba(0,0,0,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.9rem;">
            <div style="font-size: 1.4rem; font-weight: 800; color: #64748b;">+0</div>
            <div style="font-size: 0.76rem; color: var(--text-muted);">Consistency Score</div>
          </div>
        </div>

        <button class="btn btn-primary" id="player-btn-close-completed" onclick="window.AayuApp.closeModal(); window.AayuApp.navigate('dashboard');">
          Return to Dashboard
        </button>
      </div>
    `;
  }

  getInnerHTML() {
    const curr = this.activity.instructions[this.currentStepIdx];
    return `
      <button class="modal-close-btn" onclick="window.AayuApp.closeModal()" title="Close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      <!-- Top Meta -->
      <div style="margin-bottom: 1.25rem;">
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
          <span class="badge badge-cyan">${this.activity.duration} Min Total</span>
          <span class="badge badge-indigo">${this.activity.difficulty}</span>
          <span class="badge badge-amber">${this.activity.category}</span>
        </div>
        <h2 style="font-size: 1.6rem; font-weight: 800;">${this.activity.title}</h2>
        <p style="font-size: 0.86rem; color: var(--text-muted);">${this.activity.shortDescription}</p>
      </div>

      <!-- Step Progress Track -->
      <div style="background: rgba(0,0,0,0.05); height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1.25rem;">
        <div id="player-step-progress-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #f97316, #14b8a6); transition: width 0.3s ease;"></div>
      </div>

      <!-- Exercise Animation Guide Demo -->
      <div class="exercise-anim-container">
        <div class="exercise-anim-top-bar">
          <span class="exercise-anim-badge">
            <span class="pulse-dot"></span> Realistic Human Form Guide
          </span>
          <span class="exercise-anim-step-title">Step ${this.currentStepIdx + 1} of ${this.totalSteps}</span>
        </div>
        ${curr.gifUrl ? `
          <div class="exercise-gif-wrap">
            <img src="${curr.gifUrl}" alt="${curr.name}" class="exercise-gif-img" />
          </div>
        ` : getExerciseAnimationHtml(curr.name, this.activity.category, curr.tips)}
      </div>

      <!-- Timer Presentation -->
      <div class="timer-display-box">
        <div class="timer-circle-wrap">
          <div class="timer-digits" id="player-time-digits">${this.formatTime(this.stepSecondsLeft)}</div>
        </div>

        <h3 class="timer-step-name" id="player-step-title">${curr.name}</h3>
        <p class="timer-step-tip" id="player-step-instructions">${curr.tips}</p>

        <!-- Control Buttons -->
        <div class="timer-controls">
          <button class="btn btn-secondary btn-sm" onclick="window.AayuApp.activePlayer.prevStep()" title="Previous Step">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <button class="btn ${this.isRunning ? 'btn-secondary' : 'btn-primary'}" id="player-btn-play" onclick="window.AayuApp.togglePlayerTimer()">
            ${this.isRunning
              ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause`
              : `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> ${this.totalSecondsElapsed > 0 ? 'Resume' : 'Start Move'}`}
          </button>

          <button class="btn btn-secondary btn-sm" onclick="window.AayuApp.activePlayer.nextStep()" title="Skip to Next Step">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          <button class="btn btn-secondary btn-sm" onclick="window.AayuApp.activePlayer.resetCurrentStep()" title="Reset Step Timer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          </button>
        </div>
      </div>

      <!-- Benefits & Tips -->
      <div style="border-top: 1px solid var(--border-subtle); padding-top: 1.25rem; margin-top: 1rem;">
        <h4 style="font-size: 0.88rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.05em;">Key Student Benefits</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem;">
          ${this.activity.benefits.map(b => `
            <li style="font-size: 0.82rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem;">
              <span style="color: var(--accent-emerald);">✔</span> ${b}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  getHTML() {
    return `
      <div class="modal-backdrop" id="activity-player-modal">
        <div class="modal-card" id="player-modal-content">
          ${this.getInnerHTML()}
        </div>
      </div>
    `;
  }
}
