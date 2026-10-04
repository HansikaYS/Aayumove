// AayuMove Personalized Student Diet & Fuel Page
// Varied, student-friendly, budget-conscious meal ideas tailored to preferences without medical claims.

import { mealsData } from '../data/mealsData.js';

export function renderDietPage({ currentUser, activeCategory = 'all', activeDiet = 'all', shuffledMealId = null }) {
  const userDietPref = currentUser?.dietaryPreference || 'Vegetarian';
  const userGoal = currentUser?.goal || 'Stay Active';

  // Filter meals
  let filtered = mealsData.filter(m => {
    if (activeCategory !== 'all' && m.category.toLowerCase() !== activeCategory.toLowerCase()) {
      return false;
    }
    if (activeDiet !== 'all' && m.diet.toLowerCase() !== activeDiet.toLowerCase()) {
      return false;
    }
    return true;
  });

  // Spotlight meal (either shuffled or top recommended for the user)
  const spotlightMeal = shuffledMealId
    ? mealsData.find(m => m.id === shuffledMealId) || mealsData[0]
    : mealsData.find(m => m.diet.toLowerCase().includes(userDietPref.toLowerCase().slice(0, 4))) || mealsData[0];

  const categories = ['all', 'Breakfast', 'Lunch', 'Smart Snacks', 'Dinner'];
  const diets = ['all', 'Vegetarian', 'Vegan', 'Eggetarian', 'Non-Vegetarian', 'High-Protein Student', 'Budget-Friendly'];

  return `
    <main class="container" style="padding-top: 2rem; padding-bottom: 3rem;">
      <!-- Header -->
      <div style="margin-bottom: 2rem;">
        <span class="badge badge-amber" style="margin-bottom: 0.5rem;">Student Fuel & Hostel Hacks</span>
        <h1 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 0.4rem;">
          Fuel That Fits <span class="gradient-text-orange">Your Student Life</span>
        </h1>
        <p style="color: var(--text-muted); font-size: 0.98rem; max-width: 650px;">
          Simple, budget-friendly meal ideas calibrated for your <strong>${userDietPref}</strong> preference and <strong>${userGoal}</strong> focus. No complex kitchen required.
        </p>
      </div>

      <!-- Spotlight Shuffler Banner -->
      <div class="glass-card spotlight-card" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(234, 88, 12, 0.08)); border-color: rgba(245, 158, 11, 0.35); padding: 1.75rem; margin-bottom: 2.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; flex-wrap: wrap;">
              <span class="badge badge-amber">✨ Featured Student Pick</span>
              <span class="badge badge-emerald">${spotlightMeal.category}</span>
              <span class="badge badge-cyan">${spotlightMeal.diet}</span>
              <span class="badge badge-indigo">${spotlightMeal.prepTime}</span>
            </div>
            <h2 style="font-size: 1.6rem; font-weight: 800;">${spotlightMeal.title}</h2>
          </div>

          <button class="btn btn-secondary btn-sm" onclick="window.AayuApp.shuffleMeal()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
            Shuffle Next Meal Idea
          </button>
        </div>

        <div class="spotlight-main-layout">
          ${spotlightMeal.image ? `
            <div class="spotlight-image-container">
              <img src="${spotlightMeal.image}" alt="${spotlightMeal.title}" class="spotlight-meal-img" loading="eager" />
              <div class="spotlight-cal-badge">${spotlightMeal.caloriesEstimate}</div>
            </div>
          ` : ''}

          <div class="spotlight-details-container">
            <div class="meal-purpose" style="margin-bottom: 1rem;">
              🎯 <strong>Nutritional Purpose:</strong> ${spotlightMeal.nutritionalPurpose}
            </div>

            <div class="spotlight-recipe-grid">
              <div>
                <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem; letter-spacing: 0.05em;">Ingredients</h4>
                <ul class="ingredients-list">
                  ${spotlightMeal.ingredients.map(i => `<li>${i}</li>`).join('')}
                </ul>
              </div>
              <div>
                <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem; letter-spacing: 0.05em;">Student Prep Instructions</h4>
                <ol style="font-size: 0.84rem; color: var(--text-muted); padding-left: 1.1rem; display: flex; flex-direction: column; gap: 0.35rem;">
                  ${spotlightMeal.instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
                <div class="meal-tip" style="margin-top: 0.75rem;">
                  💡 <strong>Hostel Tip:</strong> ${spotlightMeal.studentTip}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters Row -->
      <div class="glass-card" style="margin-bottom: 2rem; padding: 1.25rem;">
        <!-- Category Filter -->
        <div style="margin-bottom: 1rem;">
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-subtle); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.4rem;">
            Meal Type
          </span>
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
            ${categories.map(c => `
              <button class="filter-chip ${activeCategory === c ? 'active' : ''}"
                      onclick="window.AayuApp.setDietFilter('category', '${c}')">
                ${c === 'all' ? 'All Types' : c}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Diet Filter -->
        <div>
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-subtle); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.4rem;">
            Dietary Style
          </span>
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
            ${diets.map(d => `
              <button class="filter-chip ${activeDiet === d ? 'active' : ''}"
                      onclick="window.AayuApp.setDietFilter('diet', '${d}')">
                ${d === 'all' ? 'All Diets' : d}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Non-Clinical Disclaimer -->
      <div class="disclaimer-banner">
        ⚠️ <strong>General Wellness Disclaimer:</strong> Meal and nutrition ideas are intended for healthy college students and general lifestyle support. They are not medical, diagnostic, or clinical dietary prescriptions.
      </div>

      <!-- All Meals Grid -->
      <div class="meals-grid">
        ${filtered.map(meal => `
          <div class="meal-card">
            ${meal.image ? `
              <div class="meal-card-image-wrap">
                <img src="${meal.image}" alt="${meal.title}" class="meal-card-img" loading="lazy" />
                <div class="meal-card-badges-overlay">
                  <span class="badge badge-amber">${meal.category}</span>
                  <span class="badge badge-cyan">${meal.prepTime}</span>
                </div>
              </div>
            ` : `
              <div class="meal-tag-row" style="padding: 1rem 1rem 0;">
                <span class="badge badge-amber">${meal.category}</span>
                <span class="badge badge-cyan">${meal.prepTime}</span>
              </div>
            `}

            <div class="meal-card-content">
              <h3 class="meal-title">${meal.title}</h3>
              <div class="meal-purpose">${meal.nutritionalPurpose}</div>

              <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.6rem;">
                <strong>Ingredients:</strong> ${meal.ingredients.slice(0, 3).join(', ')}${meal.ingredients.length > 3 ? '...' : ''}
              </div>

              <div class="meal-tip" style="margin-bottom: 0.75rem;">
                💡 ${meal.studentTip}
              </div>

              <div class="meal-card-footer">
                <span class="badge badge-indigo">${meal.diet}</span>
                <span class="meal-cal-val">${meal.caloriesEstimate}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </main>
  `;
}
