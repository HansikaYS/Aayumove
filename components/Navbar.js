// AayuMove Navigation Bar Component

export function renderNavbar({ currentTab, currentUser, onNavigate, onOpenAI, onLogout }) {
  const userName = currentUser?.name ? currentUser.name.split(' ')[0] : 'Student';
  const initial = userName.charAt(0).toUpperCase();

  return `
    <header class="navbar">
      <div class="container nav-inner">
        <!-- Brand Logo -->
        <div class="brand-logo" id="nav-brand-logo" onclick="window.AayuApp.navigate('dashboard')">
          <div class="brand-icon-box">
            <div class="brand-icon-pulse"></div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 20V10"/>
              <path d="M12 20V4"/>
              <path d="M6 20v-6"/>
            </svg>
          </div>
          <div>
            <span class="brand-title">AayuMove</span>
            <span class="brand-tagline-mini">Adaptive Student Fitness</span>
          </div>
        </div>

        <!-- Desktop Navigation Links -->
        <nav>
          <ul class="nav-links">
            <li>
              <button class="nav-link-btn ${currentTab === 'dashboard' ? 'active' : ''}" id="nav-btn-dashboard" onclick="window.AayuApp.navigate('dashboard')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Dashboard
              </button>
            </li>
            <li>
              <button class="nav-link-btn ${currentTab === 'adaptive' ? 'active' : ''}" id="nav-btn-adaptive" onclick="window.AayuApp.navigate('adaptive')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                Adaptive Move
              </button>
            </li>
            <li>
              <button class="nav-link-btn ${currentTab === 'activities' ? 'active' : ''}" id="nav-btn-activities" onclick="window.AayuApp.navigate('activities')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                Activities
              </button>
            </li>
            <li>
              <button class="nav-link-btn ${currentTab === 'diet' ? 'active' : ''}" id="nav-btn-diet" onclick="window.AayuApp.navigate('diet')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                Fuel & Diet
              </button>
            </li>
            <li>
              <button class="nav-link-btn ${currentTab === 'progress' ? 'active' : ''}" id="nav-btn-progress" onclick="window.AayuApp.navigate('progress')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
                Progress
              </button>
            </li>
          </ul>
        </nav>

        <!-- Nav Right Actions -->
        <div class="nav-actions">
          <!-- Aayu AI Pill Button -->
          <button class="ai-pill-btn" id="btn-open-aayu-ai" onclick="window.AayuApp.toggleAI()" title="Ask Aayu AI">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 12.5"/><path d="m4.5 15 4 4"/><path d="m14.5 4 4 4"/></svg>
            <span class="ai-pill-label">Ask Aayu AI</span>
          </button>

          <!-- User Profile Dropdown Trigger -->
          <div class="user-badge-dropdown ${currentTab === 'profile' ? 'active' : ''}" id="nav-user-profile" onclick="window.AayuApp.navigate('profile')" title="Student Profile & Settings">
            <div class="user-avatar-circle">${initial}</div>
            <span class="user-name-label">${userName}</span>
          </div>

          <button class="btn btn-secondary btn-sm nav-logout-btn" id="btn-nav-logout" onclick="window.AayuApp.logout()" title="Logout of AayuMove">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            <span class="nav-logout-text">Logout</span>
          </button>
        </div>
      </div>

      <!-- Mobile Bottom Navigation Bar -->
      <div class="mobile-nav-bar">
        <div class="mobile-nav-items">
          <button class="mobile-nav-btn ${currentTab === 'dashboard' ? 'active' : ''}" id="mob-nav-home" onclick="window.AayuApp.navigate('dashboard')">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            <span>Home</span>
          </button>
          <button class="mobile-nav-btn ${currentTab === 'adaptive' ? 'active' : ''}" id="mob-nav-adapt" onclick="window.AayuApp.navigate('adaptive')">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <span>Adapt</span>
          </button>
          <button class="mobile-nav-btn ${currentTab === 'activities' ? 'active' : ''}" id="mob-nav-activities" onclick="window.AayuApp.navigate('activities')">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            <span>Workouts</span>
          </button>
          <button class="mobile-nav-btn ${currentTab === 'diet' ? 'active' : ''}" id="mob-nav-diet" onclick="window.AayuApp.navigate('diet')">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
            <span>Diet</span>
          </button>
          <button class="mobile-nav-btn ${currentTab === 'progress' ? 'active' : ''}" id="mob-nav-progress" onclick="window.AayuApp.navigate('progress')">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
            <span>Stats</span>
          </button>
          <button class="mobile-nav-btn ${currentTab === 'profile' ? 'active' : ''}" id="mob-nav-profile" onclick="window.AayuApp.navigate('profile')">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span>Profile</span>
          </button>
        </div>
      </div>
    </header>
  `;
}
