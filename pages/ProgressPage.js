// AayuMove Progress & Consistency Analytics Page
// Displays streak stats, weekly activity bars, goal completion ring, and workout history.

export function renderProgressPage({ currentUser }) {
  const weekly = currentUser?.weeklyActivity || [
    { day: 'Mon', minutes: 15, completed: true },
    { day: 'Tue', minutes: 20, completed: true },
    { day: 'Wed', minutes: 10, completed: true },
    { day: 'Thu', minutes: 25, completed: true },
    { day: 'Fri', minutes: 15, completed: true },
    { day: 'Sat', minutes: 30, completed: true },
    { day: 'Sun', minutes: 30, completed: true }
  ];

  // Calculate weekly total
  const weekTotal = weekly.reduce((acc, curr) => acc + (curr.minutes || 0), 0);
  const weeklyGoal = 120; // 120 minutes weekly goal for students
  const goalPercent = Math.min(100, Math.round((weekTotal / weeklyGoal) * 100));

  const maxMin = Math.max(...weekly.map(w => w.minutes), 30);

  const completedList = currentUser?.completedActivities || [];

  return `
    <main class="container" style="padding-top: 2rem; padding-bottom: 3rem;">
      <!-- Header -->
      <div style="margin-bottom: 2rem;">
        <span class="badge badge-emerald" style="margin-bottom: 0.5rem;">Consistency Tracker</span>
        <h1 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 0.4rem;">
          Your <span class="gradient-text">Activity Momentum</span>
        </h1>
        <p style="color: var(--text-muted); font-size: 0.98rem;">
          Students succeed through consistency, not exhaustion. Track your daily movement micro-wins.
        </p>
      </div>

      <!-- Streak Hero Box -->
      <div class="streak-hero-box" style="margin-bottom: 2rem;">
        <div class="streak-flame-icon">🔥</div>
        <div>
          <div style="display: flex; align-items: baseline; gap: 0.5rem; margin-bottom: 0.2rem;">
            <span class="streak-number">${currentUser?.streakDays || 1}</span>
            <span style="font-size: 1.25rem; font-weight: 700; color: #ea580c;">Day Move Streak!</span>
          </div>
          <p style="font-size: 0.9rem; color: #92400e;">
            You are building unstoppable physical stamina for college and life. Keep the flame alive!
          </p>
        </div>
      </div>

      <!-- Grid Layout: Weekly Chart & Goal Ring -->
      <div class="progress-grid" style="margin-bottom: 2.5rem;">
        <!-- Weekly Activity Visual Chart -->
        <div class="glass-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div>
              <h3 style="font-size: 1.25rem;">Weekly Movement</h3>
              <span style="font-size: 0.8rem; color: var(--text-muted);">${weekTotal} mins accumulated this week</span>
            </div>
            <span class="badge badge-indigo">Last 7 Days</span>
          </div>

          <div class="weekly-bars-container">
            ${weekly.map(w => {
              const heightPct = Math.max(12, Math.round((w.minutes / maxMin) * 100));
              return `
                <div class="day-bar-col">
                  <span style="font-size: 0.72rem; color: ${w.completed ? '#38bdf8' : 'var(--text-subtle)'}; font-weight: 700;">
                    ${w.minutes > 0 ? `${w.minutes}m` : '-'}
                  </span>
                  <div class="bar-pill ${w.completed ? 'active-day' : ''}" style="height: ${heightPct}%;"></div>
                  <span class="day-label">${w.day}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Weekly Goal Completion Meter -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <h3 style="font-size: 1.25rem;">Weekly Target Progress</h3>
              <span class="badge badge-emerald">${goalPercent}% Done</span>
            </div>

            <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 1.5rem;">
              Target: <strong>${weeklyGoal} active minutes</strong> per week (just ~17 mins/day to counter sedentary study strain).
            </p>

            <!-- Large Visual Progress Bar -->
            <div style="background: rgba(255,255,255,0.06); height: 16px; border-radius: 8px; overflow: hidden; margin-bottom: 0.75rem;">
              <div style="height: 100%; width: ${goalPercent}%; background: linear-gradient(90deg, #6366f1, #06b6d4, #10b981); border-radius: 8px; transition: width 0.6s ease;"></div>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);">
              <span>${weekTotal} mins completed</span>
              <span>${Math.max(0, weeklyGoal - weekTotal)} mins remaining</span>
            </div>
          </div>

          <!-- Student Milestone Badges -->
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem; margin-top: 1.25rem;">
            <span style="font-size: 0.74rem; font-weight: 700; color: var(--text-subtle); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.6rem;">
              Earned Badges
            </span>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="badge badge-indigo">⚡ First Move Completed</span>
              <span class="badge badge-amber">🔥 Consistency Streak</span>
              <span class="badge badge-cyan">🧘 Posture Master</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Completed Activities Log -->
      <div class="glass-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <h3 style="font-size: 1.3rem;">Completed Activity History</h3>
          <span style="font-size: 0.84rem; color: var(--text-muted);">${completedList.length} total logged</span>
        </div>

        ${completedList.length === 0 ? `
          <div style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
            No workouts logged yet. Start your first 5-minute Adaptive Move!
          </div>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${completedList.map(item => `
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.9rem 1.15rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 0.85rem;">
                  <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); color: #34d399; display: flex; align-items: center; justify-content: center;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4 style="font-size: 0.98rem; font-weight: 700;">${item.title}</h4>
                    <span style="font-size: 0.78rem; color: var(--text-subtle);">${item.dateStr || 'Recent'}</span>
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 1rem;">
                  <span class="badge badge-cyan">${item.duration} mins</span>
                  <span class="badge badge-amber">🔥 ~${item.calories} kcal</span>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </main>
  `;
}
