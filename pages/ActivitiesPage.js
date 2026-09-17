// AayuMove Activities Catalog Page
// Filterable by time, stage, goal, category, and user preferences with interactive workout launcher.

import { activitiesData } from '../data/activitiesData.js';

export function renderActivitiesPage({ currentUser, filters, onFilterChange }) {
  const activeTimeFilter = filters?.time || 'all';
  const activeCategory = filters?.category || 'all';
  const activeDifficulty = filters?.difficulty || 'all';
  const searchQuery = (filters?.search || '').toLowerCase();
  const onlyRecommended = filters?.onlyRecommended || false;

  // Filter activities
  const filtered = activitiesData.filter(act => {
    // Time filter
    if (activeTimeFilter !== 'all') {
      const t = parseInt(activeTimeFilter, 10);
      if (t === 5 && act.duration !== 5) return false;
      if (t === 10 && act.duration !== 10) return false;
      if (t === 15 && act.duration !== 15) return false;
      if (t >= 30 && act.duration < 30) return false;
    }

    // Category filter
    if (activeCategory !== 'all' && !act.category.toLowerCase().includes(activeCategory.toLowerCase())) {
      return false;
    }

    // Difficulty filter
    if (activeDifficulty !== 'all' && act.difficulty.toLowerCase() !== activeDifficulty.toLowerCase()) {
      return false;
    }

    // Search query
    if (searchQuery) {
      const matchText = (act.title + ' ' + act.shortDescription + ' ' + act.category + ' ' + act.goal).toLowerCase();
      if (!matchText.includes(searchQuery)) return false;
    }

    // Recommended for You toggle
    if (onlyRecommended) {
      const matchGoal = act.goal.toLowerCase() === (currentUser?.goal || '').toLowerCase();
      const matchStage = act.difficulty.toLowerCase() === (currentUser?.fitnessStage || '').toLowerCase();
      if (!matchGoal && !matchStage) return false;
    }

    return true;
  });

  const categories = ['all', 'Mobility & Stretching', 'Cardio', 'HIIT', 'Calisthenics', 'Yoga', 'Desk Yoga'];

  return `
    <main class="container" style="padding-top: 2rem; padding-bottom: 3rem;">
      <!-- Header -->
      <div style="margin-bottom: 2rem;">
        <span class="badge badge-cyan" style="margin-bottom: 0.5rem;">Dorm & Small-Space Library</span>
        <h1 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 0.4rem;">
          Explore <span class="gradient-text">Student Activities</span>
        </h1>
        <p style="color: var(--text-muted); font-size: 0.98rem; max-width: 600px;">
          Tailored routines designed for student living—no gym gear needed, quiet footwork, and proven posture & focus benefits.
        </p>
      </div>

      <!-- Filter Controls Bar -->
      <div class="glass-card" style="margin-bottom: 2rem; padding: 1.25rem;">
        <!-- Search & Recommended Toggle -->
        <div style="display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap; margin-bottom: 1.25rem;">
          <div style="flex: 1; min-width: 240px; position: relative;">
            <input type="text" 
                   class="input-field" 
                   id="activity-search-input" 
                   placeholder="Search workouts, posture, cardio, stretch..." 
                   value="${filters?.search || ''}"
                   oninput="window.AayuApp.setActivityFilter('search', this.value)" />
          </div>

          <button class="btn ${onlyRecommended ? 'btn-primary' : 'btn-secondary'} btn-sm" 
                  onclick="window.AayuApp.toggleRecommendedFilter()">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            ${onlyRecommended ? '✓ Showing Personalized Matches' : 'Filter by My Profile'}
          </button>
        </div>

        <!-- Available Time Chips -->
        <div style="margin-bottom: 1rem;">
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-subtle); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.4rem;">
            Duration Filter
          </span>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${[
              { id: 'all', label: 'All Times' },
              { id: '5', label: '5 min' },
              { id: '10', label: '10 min' },
              { id: '15', label: '15 min' },
              { id: '30', label: '30+ min' }
            ].map(t => `
              <button class="filter-chip ${activeTimeFilter === t.id ? 'active' : ''}"
                      onclick="window.AayuApp.setActivityFilter('time', '${t.id}')">
                ${t.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Category Chips -->
        <div>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-subtle); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.4rem;">
            Activity Style
          </span>
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
            ${categories.map(c => `
              <button class="filter-chip ${activeCategory === c ? 'active' : ''}"
                      onclick="window.AayuApp.setActivityFilter('category', '${c}')">
                ${c === 'all' ? 'All Types' : c}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Activities Grid -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span style="font-size: 0.88rem; color: var(--text-muted); font-weight: 600;">
          Showing <strong>${filtered.length}</strong> student routines
        </span>
      </div>

      <div class="activities-grid">
        ${filtered.map(act => `
          <div class="activity-card">
            <div>
              <div class="activity-meta-top">
                <span class="activity-duration-pill">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                  ${act.duration} mins
                </span>
                <span class="badge ${act.difficulty === 'Beginner' ? 'badge-emerald' : act.difficulty === 'Intermediate' ? 'badge-cyan' : 'badge-amber'}">
                  ${act.difficulty}
                </span>
              </div>

              <h3 class="activity-title">${act.title}</h3>
              <p class="activity-desc">${act.shortDescription}</p>

              <!-- Space & Calories Specs -->
              <div class="activity-specs">
                <div class="activity-spec-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                  ${act.spaceNeeded}
                </div>
                <div class="activity-spec-item" style="color: #fbbf24;">
                  🔥 ~${act.burnedCalories} kcal
                </div>
              </div>

              <!-- Top Benefits -->
              <div style="margin-bottom: 1rem;">
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem;">
                  ${act.benefits.slice(0, 2).map(b => `
                    <li style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem;">
                      <span style="color: var(--accent-cyan);">•</span> ${b}
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- Footer Action -->
            <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
              <span class="badge badge-indigo">${act.goal}</span>
              <button class="btn btn-primary btn-sm" onclick="window.AayuApp.startActivity('${act.id}')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Start Workout
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </main>
  `;
}
