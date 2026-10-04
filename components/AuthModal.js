// AayuMove Authentication Modal Component (Login / Sign Up)
// Pure username & password authentication without email or Supabase.

export class AuthModal {
  constructor(storage, onLoginSuccess, onStartOnboarding) {
    this.storage = storage;
    this.onLoginSuccess = onLoginSuccess;
    this.onStartOnboarding = onStartOnboarding;
    this.mode = 'login'; // 'login' or 'signup'
    this.errorMsg = '';
  }

  setMode(mode) {
    this.mode = mode;
    this.errorMsg = '';
    const el = document.getElementById('auth-modal-container');
    if (el) el.innerHTML = this.getCardHTML();
  }

  handleLogin(username, password) {
    const cleanUser = username ? username.trim() : '';
    if (!cleanUser || !password) {
      this.errorMsg = 'Please enter both username and password.';
      this.renderError();
      return;
    }
    const res = this.storage.login(cleanUser, password);
    if (!res.success) {
      this.errorMsg = res.error;
      this.renderError();
      return;
    }
    if (this.onLoginSuccess) this.onLoginSuccess(res.user);
  }

  handleSignup(username, password, confirmPassword) {
    const cleanUsername = username ? username.trim().toLowerCase() : '';
    if (!cleanUsername || cleanUsername.length < 3) {
      this.errorMsg = 'Username must be at least 3 characters.';
      this.renderError();
      return;
    }
    if (!password || password.length < 4) {
      this.errorMsg = 'Password must be at least 4 characters.';
      this.renderError();
      return;
    }
    if (password !== confirmPassword) {
      this.errorMsg = 'Passwords do not match.';
      this.renderError();
      return;
    }
    const users = this.storage.getUsers();
    if (users.some(u => u.username.toLowerCase() === cleanUsername)) {
      this.errorMsg = 'Username already taken. Please choose another.';
      this.renderError();
      return;
    }
    // Pass user to onboarding flow with pre-set credentials
    if (this.onStartOnboarding) {
      this.onStartOnboarding(cleanUsername, password);
    }
  }

  fillDemo() {
    const userInput = document.getElementById('auth-input-username');
    const passInput = document.getElementById('auth-input-password');
    if (userInput && passInput) {
      userInput.value = 'student';
      passInput.value = 'password123';
    }
  }

  renderError() {
    const errEl = document.getElementById('auth-error-box');
    if (errEl) {
      errEl.textContent = this.errorMsg;
      errEl.style.display = this.errorMsg ? 'block' : 'none';
    }
  }

  getCardHTML() {
    const isLogin = this.mode === 'login';
    return `
      <div class="modal-card" style="max-width: 440px;">
        <div style="text-align: center; margin-bottom: 1.75rem;">
          <div class="brand-icon-box" style="margin: 0 auto 0.75rem; width: 48px; height: 48px;">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
          </div>
          <h2 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 0.25rem;">
            ${isLogin ? 'Welcome Back!' : 'Join AayuMove'}
          </h2>
          <p style="font-size: 0.86rem; color: var(--text-muted);">
            ${isLogin ? 'Sign in to access your adaptable student routine.' : 'Create an account to build fitness tailored to your day.'}
          </p>
        </div>

        <div id="auth-error-box" style="display: ${this.errorMsg ? 'block' : 'none'}; background: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.25); color: #e11d48; padding: 0.6rem 0.9rem; border-radius: var(--radius-sm); font-size: 0.82rem; margin-bottom: 1.25rem;">
          ${this.errorMsg}
        </div>

        <form id="auth-form" onsubmit="event.preventDefault(); window.AayuApp.submitAuth();" style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.05em;">
              Username
            </label>
            <input type="text" id="auth-input-username" class="input-field" placeholder="e.g. rahul2026" required autocomplete="username" />
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.05em;">
              Password
            </label>
            <input type="password" id="auth-input-password" class="input-field" placeholder="••••••••" required autocomplete="current-password" />
          </div>

          ${!isLogin ? `
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.05em;">
                Confirm Password
              </label>
              <input type="password" id="auth-input-confirm" class="input-field" placeholder="••••••••" required autocomplete="new-password" />
            </div>
          ` : ''}

          <button type="submit" class="btn btn-primary" id="btn-auth-submit" style="width: 100%; margin-top: 0.5rem;">
            ${isLogin ? 'Sign In to Dashboard &rarr;' : 'Continue to Personalize &rarr;'}
          </button>
        </form>

        ${isLogin ? `
          <div style="margin-top: 1.25rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 0.75rem;">
            <button class="btn btn-secondary btn-sm" id="btn-demo-quick-login" onclick="window.AayuApp.quickDemoLogin()" style="width: 100%;">
              ⚡ Quick Demo Login (Student Profile)
            </button>
          </div>
        ` : ''}

        <div style="text-align: center; margin-top: 1.25rem; font-size: 0.85rem; color: var(--text-muted);">
          ${isLogin ? `
            New to AayuMove? <a href="#" onclick="window.AayuApp.setAuthMode('signup'); return false;" style="color: #f97316; font-weight: 700; text-decoration: none;">Create an account</a>
          ` : `
            Already have an account? <a href="#" onclick="window.AayuApp.setAuthMode('login'); return false;" style="color: #f97316; font-weight: 700; text-decoration: none;">Sign in</a>
          `}
        </div>
      </div>
    `;
  }

  getHTML() {
    return `
      <div class="modal-backdrop" id="auth-modal-backdrop">
        <div id="auth-modal-container">
          ${this.getCardHTML()}
        </div>
      </div>
    `;
  }
}
