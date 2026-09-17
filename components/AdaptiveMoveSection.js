// AayuMove Adaptive Move Component - The Core Innovation Feature
// Real-time recommendation adapting to available time, fitness stage, goal, and student routine.

import { activitiesData } from '../data/activitiesData.js';

export function getAdaptiveRecommendation(selectedMinutes, user) {
  const timeNum = parseInt(selectedMinutes, 10) || 10;
  
  // Strict filter: duration must strictly align with selected slot
  // 5m -> 5m only; 10m -> 10m only; 15m -> 15m only; 30+m -> >= 30m
  let pool = activitiesData.filter(act => {
    if (timeNum === 5) return act.duration === 5;
    if (timeNum === 10) return act.duration === 10;
    if (timeNum === 15) return act.duration === 15;
    if (timeNum >= 30) return act.duration >= 30;
    return act.duration <= timeNum;
  });

  if (pool.length === 0) {
    pool = activitiesData.filter(act => act.duration <= timeNum);
  }

  // Scoring algorithm based on user's saved preferences
  const userGoal = user?.goal || 'Stay Active';
  const userStage = user?.fitnessStage || 'Beginner';
  const preferredCats = user?.preferredActivities || [];

  const scored = pool.map(act => {
    let score = 0;
    let matchReasons = [];

    // Goal matching
    if (act.goal.toLowerCase() === userGoal.toLowerCase()) {
      score += 4;
      matchReasons.push(`Matches your goal: ${userGoal}`);
    }

    // Fitness stage matching
    if (act.difficulty.toLowerCase() === userStage.toLowerCase()) {
      score += 3;
      matchReasons.push(`Perfect for ${userStage} level`);
    } else if (userStage === 'Beginner' && act.difficulty === 'Beginner') {
      score += 3;
    }

    // Preferred category matching
    if (preferredCats.some(c => act.category.toLowerCase().includes(c.toLowerCase()))) {
      score += 3;
      matchReasons.push(`Includes ${act.category}`);
    }

    // Default student space advantage
    if (act.spaceNeeded.toLowerCase().includes('desk') || act.spaceNeeded.toLowerCase().includes('dorm')) {
      score += 1;
    }

    return {
      activity: act,
      score,
      rationale: matchReasons.length > 0 
        ? matchReasons.join(' • ') 
        : `Tailored for ${timeNum} mins of student movement in small spaces`
    };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0] || { activity: pool[0], rationale: `Tailored for ${timeNum} minutes` };
}

export function renderAdaptiveMoveSection(selectedMinutes, user) {
  const currentMinutes = parseInt(selectedMinutes, 10) || 10;
  const bestMatch = getAdaptiveRecommendation(currentMinutes, user);
  const act = bestMatch.activity;

  return `
    <section class="adaptive-move-card" id="adaptive-move-section">
      <div class="adaptive-header">
        <div>
          <div class="adaptive-headline-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Core Innovation • Real-Time Engine
          </div>
          <h2 class="adaptive-title">Your Day. Your Time. Your Move.</h2>
          <p class="adaptive-subtitle">Fitness that adapts to your student day, not the other way around. Select what you have right now:</p>
        </div>
      </div>

      <!-- Time Selector Segmented Buttons -->
      <div class="time-selector-container">
        <div class="time-selector-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
          How much time do you have right now?
        </div>
        <div class="time-selector-grid">
          <button class="time-pill-btn ${currentMinutes === 5 ? 'selected' : ''}" 
                  id="time-opt-5"
                  onclick="window.AayuApp.setAdaptiveTime(5)">
            <span class="time-pill-value">5 min</span>
            <span class="time-pill-desc">Quick Desk Mobility</span>
          </button>

          <button class="time-pill-btn ${currentMinutes === 10 ? 'selected' : ''}" 
                  id="time-opt-10"
                  onclick="window.AayuApp.setAdaptiveTime(10)">
            <span class="time-pill-value">10 min</span>
            <span class="time-pill-desc">Express Dorm Circuit</span>
          </button>

          <button class="time-pill-btn ${currentMinutes === 15 ? 'selected' : ''}" 
                  id="time-opt-15"
                  onclick="window.AayuApp.setAdaptiveTime(15)">
            <span class="time-pill-value">15 min</span>
            <span class="time-pill-desc">Focused Power Move</span>
          </button>

          <button class="time-pill-btn ${currentMinutes >= 30 ? 'selected' : ''}" 
                  id="time-opt-30"
                  onclick="window.AayuApp.setAdaptiveTime(30)">
            <span class="time-pill-value">30+ min</span>
            <span class="time-pill-desc">Full Student Workout</span>
          </button>
        </div>
      </div>

      <!-- Dynamic Adaptive Output Result -->
      <div class="adaptive-recommendation-box" id="adaptive-result-box">
        <div>
          <div class="rec-badge-row">
            <span class="badge badge-cyan">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
              ${act.duration} Minutes Exactly
            </span>
            <span class="badge badge-indigo">${act.difficulty}</span>
            <span class="badge badge-amber">${act.category}</span>
            <span class="badge badge-emerald">🔥 ~${act.burnedCalories} kcal</span>
          </div>

          <h3 class="rec-title">${act.title}</h3>
          <p class="rec-rationale">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <strong>Why it fits:</strong> ${bestMatch.rationale}
          </p>

          <ul class="rec-benefits-list">
            ${act.benefits.slice(0, 2).map(b => `
              <li class="rec-benefit-chip">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                ${b}
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-end;">
          <button class="btn btn-primary" id="btn-start-adaptive-move" onclick="window.AayuApp.startActivity('${act.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Start Move Now
          </button>
          <span style="font-size: 0.76rem; color: var(--text-subtle);">${act.spaceNeeded}</span>
        </div>
      </div>
    </section>
  `;
}
