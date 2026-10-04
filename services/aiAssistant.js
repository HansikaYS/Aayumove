// Aayu AI - Student Adaptive Fitness & Wellness Reasoning Engine
// Highly personalized, context-aware, evidence-informed student health advisor.
// DISCLAIMER: Wellness suggestions only. Not medical or clinical advice.

import { activitiesData } from '../data/activitiesData.js';
import { mealsData } from '../data/mealsData.js';
import { storage } from './storage.js';

export class AayuAIService {
  /**
   * Helper: Parse user body weight from profile or recent chat history
   */
  static extractWeight(user, chatHistory = []) {
    if (user?.weight && !isNaN(Number(user.weight)) && Number(user.weight) > 30) {
      return Number(user.weight);
    }
    if (user?.bodyWeight && !isNaN(Number(user.bodyWeight)) && Number(user.bodyWeight) > 30) {
      return Number(user.bodyWeight);
    }

    // Check recent user messages in chatHistory for weight mentions (e.g. "65 kg", "I weigh 70kg", "62kg")
    if (Array.isArray(chatHistory)) {
      for (let i = chatHistory.length - 1; i >= 0; i--) {
        const msg = chatHistory[i];
        if (msg && msg.sender === 'user' && typeof msg.text === 'string') {
          const match = msg.text.match(/(?:i weigh|my weight is|weight\s*:?\s*)?(\b[4-9]\d|1\d\d)\s*(?:kg|kgs|kilos)?\b/i);
          if (match && match[1]) {
            const parsed = Number(match[1]);
            if (parsed >= 35 && parsed <= 200) {
              return parsed;
            }
          }
        }
      }
    }
    return null;
  }

  /**
   * Helper: Calculate personalized BMR and TDEE
   */
  static calculateCalorieProfile(user, weightKg = null) {
    const age = Number(user?.age) || 20;
    const activityLevel = user?.activityLevel || 'Sedentary';
    const goal = user?.goal || 'Stay Active';

    // Activity multiplier
    const multipliers = {
      'Sedentary': 1.2,
      'Lightly Active': 1.375,
      'Moderately Active': 1.55,
      'Very Active': 1.725
    };
    const factor = multipliers[activityLevel] || 1.35;

    if (weightKg) {
      // Estimated BMR using Mifflin-St Jeor formula (assuming avg student height ~168cm)
      const bmr = Math.round(10 * weightKg + 6.25 * 168 - 5 * age + 5);
      const maintenanceTDEE = Math.round(bmr * factor);

      let targetCaloriesRange = `${maintenanceTDEE - 100} – ${maintenanceTDEE + 100}`;
      let guidanceNote = 'Maintenance intake to fuel your academic focus and daily movement.';

      if (goal.includes('Lose Weight') || goal.includes('fat')) {
        const deficitMin = Math.round(maintenanceTDEE - 450);
        const deficitMax = Math.round(maintenanceTDEE - 300);
        targetCaloriesRange = `${deficitMin} – ${deficitMax}`;
        guidanceNote = `A sustainable 300–450 kcal deficit to lose body fat safely without sacrificing college brainpower.`;
      } else if (goal.includes('Build Strength') || goal.includes('muscle')) {
        const surplusMin = Math.round(maintenanceTDEE + 200);
        const surplusMax = Math.round(maintenanceTDEE + 350);
        targetCaloriesRange = `${surplusMin} – ${surplusMax}`;
        guidanceNote = `A clean 200–350 kcal surplus to support muscle recovery and strength progression.`;
      }

      return {
        hasWeight: true,
        weightKg,
        bmr,
        maintenanceTDEE,
        targetCaloriesRange,
        guidanceNote,
        factor
      };
    }

    // Default range estimate for typical 55kg - 75kg college student
    const minBmr = Math.round(10 * 55 + 6.25 * 165 - 5 * age + 5);
    const maxBmr = Math.round(10 * 75 + 6.25 * 175 - 5 * age + 5);
    const minTDEE = Math.round(minBmr * factor);
    const maxTDEE = Math.round(maxBmr * factor);

    let targetCaloriesRange = `${minTDEE} – ${maxTDEE}`;
    let guidanceNote = `Estimated maintenance range for an average 55–75kg student with a *${activityLevel}* routine.`;

    if (goal.includes('Lose Weight') || goal.includes('fat')) {
      targetCaloriesRange = `${minTDEE - 400} – ${maxTDEE - 300}`;
      guidanceNote = `Estimated deficit range for steady fat loss while keeping your study energy high.`;
    } else if (goal.includes('Build Strength') || goal.includes('muscle')) {
      targetCaloriesRange = `${minTDEE + 200} – ${maxTDEE + 350}`;
      guidanceNote = `Estimated surplus range for lean muscle building and hostel calisthenics recovery.`;
    }

    return {
      hasWeight: false,
      weightKg: null,
      bmrRange: `${minBmr} – ${maxBmr}`,
      maintenanceRange: `${minTDEE} – ${maxTDEE}`,
      targetCaloriesRange,
      guidanceNote,
      factor
    };
  }

  /**
   * Helper: Calculate personalized protein requirements
   */
  static calculateProteinProfile(user, weightKg = null) {
    const goal = user?.goal || 'Stay Active';
    const stage = user?.fitnessStage || 'Beginner';

    let minGramsPerKg = 1.2;
    let maxGramsPerKg = 1.5;

    if (goal.includes('Build Strength') || goal.includes('muscle') || stage === 'Advanced') {
      minGramsPerKg = 1.6;
      maxGramsPerKg = 2.0;
    } else if (goal.includes('Lose Weight') || goal.includes('fat')) {
      minGramsPerKg = 1.5;
      maxGramsPerKg = 1.8; // higher protein spares lean muscle during deficit
    } else if (stage === 'Intermediate') {
      minGramsPerKg = 1.3;
      maxGramsPerKg = 1.6;
    }

    if (weightKg) {
      const minGrams = Math.round(weightKg * minGramsPerKg);
      const maxGrams = Math.round(weightKg * maxGramsPerKg);
      return {
        hasWeight: true,
        weightKg,
        minGramsPerKg,
        maxGramsPerKg,
        dailyTargetRange: `${minGrams}g – ${maxGrams}g`
      };
    }

    // Estimated for typical 55kg - 75kg student
    const minGrams = Math.round(55 * minGramsPerKg);
    const maxGrams = Math.round(75 * maxGramsPerKg);
    return {
      hasWeight: false,
      weightKg: null,
      minGramsPerKg,
      maxGramsPerKg,
      dailyTargetRange: `${minGrams}g – ${maxGrams}g`
    };
  }

  /**
   * Generates a context-tailored greeting for the user.
   */
  static getGreeting(user) {
    const name = user?.name ? user.name.split(' ')[0] : 'fellow student';
    const goal = user?.goal || 'stay healthy and energised';
    const time = user?.availableTime || '10 minutes';
    const stage = user?.fitnessStage || 'Beginner';
    const consistencyScore = user?.consistencyScore || 0;

    const hour = new Date().getHours();
    let timeGreeting = 'Hey';
    if (hour < 12) timeGreeting = 'Good morning';
    else if (hour < 17) timeGreeting = 'Good afternoon';
    else timeGreeting = 'Good evening';

    return `${timeGreeting}, **${name}**! 👋 I'm **Aayu AI**, your student fitness & wellness buddy.

🎯 **Your Current Profile:**
- Goal: **${goal}** (${stage} level)
- Available slot: **${time}** between classes
- Consistency Score: **⚡ ${consistencyScore} pts**

What can I help you with right now? Ask me about **personalized calories & protein**, **dorm workouts**, **hostel diet**, **hydration targets**, **desk posture**, or **study stamina**!`;
  }

  /**
   * Generates dynamic suggestion chips tailored to user's current goal and time of day.
   */
  static getQuickPrompts(user) {
    const goal = (user?.goal || '').toLowerCase();
    const time = user?.availableTime || '10 minutes';

    const prompts = [
      `⚡ ${time} dorm workout for my goal`,
      '📊 How many calories & protein do I need daily?',
      '🥗 High-protein student snacks on a budget',
      '💧 How much water should I drink today?',
      '🧘 Fix stiff neck & shoulders from laptop',
      '🌙 Wind-down routine for late-night study',
      '🎯 How is my consistency score calculated?'
    ];

    if (goal.includes('strength') || goal.includes('muscle')) {
      prompts.unshift('💪 How much protein and calories for muscle gain?');
    } else if (goal.includes('weight') || goal.includes('fat')) {
      prompts.unshift('🔥 What is my daily calorie deficit for fat loss?');
    } else if (goal.includes('mobility') || goal.includes('flexibility') || goal.includes('wellness')) {
      prompts.unshift('🧘 5-min desk stretch for lower back relief');
    }

    return prompts.slice(0, 6);
  }

  /**
   * Core Reasoning & Response Generator
   */
  static generateResponse(userPrompt, user, chatHistory = []) {
    if (!userPrompt || !userPrompt.trim()) {
      return {
        text: "I didn't catch that. What would you like guidance on? (e.g. personalized calories, protein targets, dorm workouts, diet, or posture reset!)"
      };
    }

    const rawPrompt = userPrompt.trim();
    const prompt = rawPrompt.toLowerCase();
    const name = user?.name ? user.name.split(' ')[0] : 'Friend';
    const age = Number(user?.age) || 20;
    const stage = user?.fitnessStage || 'Beginner';
    const goal = user?.goal || 'Stay Active';
    const diet = user?.dietaryPreference || 'Vegetarian';
    const availableTime = user?.availableTime || '10 minutes';
    const preferredTime = user?.preferredTime || 'Morning';
    const activityLevel = user?.activityLevel || 'Sedentary';
    const budgetFriendly = user?.budgetFriendly || 'No';
    const consistencyScore = user?.consistencyScore || 0;
    const workoutsCount = user?.totalWorkoutsCompleted || 0;
    const activeMins = user?.totalActiveMinutes || 0;

    // Detect if user provided weight in their prompt (e.g. "I weigh 65 kg", "68kg", "weight 70")
    const promptWeightMatch = rawPrompt.match(/(?:i weigh|my weight is|weight\s*:?\s*)?(\b[4-9]\d|1\d\d)\s*(?:kg|kgs|kilos)\b/i) ||
                             rawPrompt.match(/\b(4\d|5\d|6\d|7\d|8\d|9\d|10\d|11\d|12\d)\s*kg\b/i);
    
    if (promptWeightMatch && promptWeightMatch[1]) {
      const detectedWeight = Number(promptWeightMatch[1]);
      if (detectedWeight >= 35 && detectedWeight <= 200) {
        if (!user.weight || user.weight !== detectedWeight) {
          user.weight = detectedWeight;
          try {
            storage.updateProfile({ weight: detectedWeight });
          } catch (e) {}
        }
      }
    }

    const weightKg = this.extractWeight(user, chatHistory);

    // Helper: Find best matching activity from catalog
    const findMatchingActivity = (predicate) => {
      return activitiesData.find(predicate) || activitiesData[0];
    };

    // Helper: Find best matching meal from catalog
    const findMatchingMeal = (predicate) => {
      return mealsData.find(predicate) || mealsData[0];
    };

    // =========================================================================
    // INTENT SCORING ENGINE
    // Categorizes multi-word queries with high precision
    // =========================================================================

    // 1. User Profile & Stats intent
    const hasProfileIntent =
      prompt.includes('consistency') ||
      (prompt.includes('score') && (prompt.includes('my') || prompt.includes('current') || prompt.includes('how many') || prompt.includes('what is'))) ||
      (prompt.includes('goal') && (prompt.includes('my') || prompt.includes('current') || prompt.includes('what is') || prompt.includes('fitness goal'))) ||
      prompt.includes('my stat') ||
      prompt.includes('my profile') ||
      prompt.includes('my progress') ||
      prompt.includes('my stage') ||
      (prompt.includes('how many workout') && prompt.includes('completed'));

    if (hasProfileIntent) {
      const weightStr = weightKg ? `${weightKg} kg` : 'Not provided yet';
      return {
        text: `Here is your current student fitness snapshot, **${name}**! 📊

⚡ **Consistency Score:** **${consistencyScore} Points** (Earned from fully completed routines)
🏋️ **Workouts Completed:** **${workoutsCount} sessions**
⏱️ **Total Active Time:** **${activeMins} minutes**
🎯 **Fitness Goal:** **${goal}**
🏆 **Fitness Level:** **${stage}** (Activity Level: *${activityLevel}*)
⚖️ **Body Weight:** **${weightStr}**
🥗 **Dietary Preference:** **${diet}** ${budgetFriendly === 'Yes' ? '(Budget-Friendly)' : ''}
⏳ **Preferred Free Slot:** **${availableTime}** (${preferredTime})

You earn +1 Consistency Score every time you genuinely complete a full workout without skipping any exercises. Ready to log another active session today?`,
        actionLabel: 'View Detailed Progress & Stats',
        actionNavigate: 'progress'
      };
    }

    // 2. Identity / Greeting / Conversational
    if (
      prompt === 'hi' ||
      prompt === 'hello' ||
      prompt === 'hey' ||
      prompt === 'yo' ||
      prompt.startsWith('hi ') ||
      prompt.startsWith('hello ') ||
      prompt.startsWith('hey ')
    ) {
      return {
        text: `Hey there, ${name}! 👋 Ready to move, calculate your nutrition macros, or take a quick study break?

Here are some personalized questions you can ask me:
- *"How many calories and protein should I eat for my goal?"*
- *"Give me a ${availableTime} dorm workout for my ${stage} level"*
- *"What should I eat in the hostel mess to build stamina?"*
- *"Fix my stiff neck from studying at my desk"*`,
        actionLabel: 'Browse All Activities',
        actionNavigate: 'activities'
      };
    }

    if (prompt.includes('who are you') || prompt.includes('what are you') || prompt.includes('about aayu') || prompt.includes('what can you do')) {
      return {
        text: `I'm **Aayu AI**, your personalized adaptive fitness and wellness coach engineered specifically for college students!

🤖 **How I Tailor Everything For You:**
- 📊 **Personalized Macro & Calorie Calculator:** Estimates tailored to your age (${age}y), activity level (*${activityLevel}*), body weight, and goal (*${goal}*).
- 🏋️ **Adaptive Micro-Workouts:** 5, 10, 15, and 30-min routines calibrated to your **${stage}** fitness stage.
- 🥗 **Student Nutrition:** Budget-conscious recipes and hostel mess hacks matched to your **${diet}** preference.
- 💧 **Hydration & Focus Coaching:** Real-time intake recommendations based on your routine.
- 🧘 **Desk Posture & Pain Relief:** Fast ergonomic decompression for long lecture and study blocks.`,
        actionLabel: 'Explore Activities',
        actionNavigate: 'activities'
      };
    }

    if (prompt.includes('thank') || prompt.includes('thanks') || (prompt.includes('awesome') && !prompt.includes('workout'))) {
      return {
        text: `You're very welcome, ${name}! 🙌 I'm always here in your corner to help you balance college coursework with great physical health and mental focus. Let me know whenever you need another quick routine or nutrition check!`,
        actionLabel: 'Explore Daily Activities',
        actionNavigate: 'activities'
      };
    }

    // 3. Calorie, TDEE, BMR & Calorie Burn Estimates
    const hasCalorieIntent =
      prompt.includes('calorie') ||
      prompt.includes('calories') ||
      prompt.includes('tdee') ||
      prompt.includes('bmr') ||
      prompt.includes('maintenance calorie') ||
      prompt.includes('calorie deficit') ||
      prompt.includes('how many cal') ||
      prompt.includes('energy expenditure');

    if (hasCalorieIntent) {
      const calProfile = this.calculateCalorieProfile(user, weightKg);
      const act = findMatchingActivity(a => a.duration === 10 || a.goal === goal);

      let weightContextNote = '';
      if (calProfile.hasWeight) {
        weightContextNote = `Based on your age (**${age} years**), body weight (**${weightKg} kg**), and **${activityLevel}** routine:\n- **Estimated Basal Metabolic Rate (BMR):** ~**${calProfile.bmr} kcal/day**\n- **Estimated Maintenance (TDEE):** ~**${calProfile.maintenanceTDEE} kcal/day**`;
      } else {
        weightContextNote = `Based on your age (**${age} years**) and **${activityLevel}** lifestyle (assuming typical student body weight of 55–75 kg):\n- **Estimated BMR Range:** **${calProfile.bmrRange} kcal/day**\n- **Estimated Maintenance (TDEE) Range:** **${calProfile.maintenanceRange} kcal/day**\n\n💡 *Want an exact single-number calculation? Reply with your body weight in kg (e.g., 'I weigh 65 kg') and I will compute your exact macros!*`;
      }

      return {
        text: `Here is your personalized daily energy & calorie breakdown, **${name}**! ⚡

${weightContextNote}

🎯 **Recommended Daily Target for Your Goal (*${goal}*):**
> **${calProfile.targetCaloriesRange} kcal/day**
${calProfile.guidanceNote}

🔥 **Estimated Calorie Burn from Student Micro-Moves:**
- **5-Min Quick Decompression:** ~**25 – 45 kcal**
- **10-Min Dorm HIIT / Core:** ~**65 – 110 kcal**
- **15-Min Calisthenics Circuit:** ~**110 – 170 kcal**

Pair your daily nutrition with a quick **${availableTime}** routine to keep your metabolic rate and study concentration primed!`,
        actionLabel: `Start: ${act.title}`,
        actionActivityId: act.id
      };
    }

    // 4. Protein, Macros, Muscle Food & Nutrition
    const hasProteinIntent =
      prompt.includes('protein') ||
      prompt.includes('how much protein') ||
      prompt.includes('gram of protein') ||
      prompt.includes('daily protein') ||
      prompt.includes('protein target') ||
      prompt.includes('macro');

    if (hasProteinIntent) {
      const protProfile = this.calculateProteinProfile(user, weightKg);
      
      let proteinSources = '';
      if (diet.includes('Non') || prompt.includes('chicken') || prompt.includes('egg') || prompt.includes('meat')) {
        proteinSources = `
1. 🥚 **Whole Eggs (₹7-8/egg):** 6g protein per egg. 3 boiled eggs give **18g complete protein** + choline for memory.
2. 🍗 **Chicken Breast:** ~**30g protein per 100g**. Easy to grill or boil.
3. 📦 **Soya Chunks:** **52g protein per 100g** (₹40-45/box). Boil in your hostel kettle!
4. 🧀 **Paneer / Dahi:** ~**18g protein per 100g** paneer; curd aids gut digestion.
5. 🥜 **Roasted Chana & Peanuts:** Budget student crunch with ~**20g protein per 100g**.`;
      } else {
        proteinSources = `
1. 📦 **Soya Chunks (Hostel MVP):** **52g protein per 100g**! Soak in hot kettle water for 4 mins and mix with mess dal.
2. 🧀 **Paneer & Fresh Curd:** ~**18g protein per 100g** paneer; curd provides natural probiotics.
3. 🌱 **Sprouted Moong & Kala Chana:** ~**8-10g protein per cup** with zero cooking required.
4. 🥜 **Peanut Butter on Roti/Oats:** Dense healthy fats + **8g protein per 2 tbsp**.
5. 🥣 **Roasted Makhana + Peanuts:** Guilt-free study crunch with **10g+ protein per bowl**.`;
      }

      let weightNotice = '';
      if (protProfile.hasWeight) {
        weightNotice = `For your body weight (**${weightKg} kg**), **${stage}** level, and goal to **${goal}**, your tailored intake is **${protProfile.minGramsPerKg} – ${protProfile.maxGramsPerKg}g per kg**:`;
      } else {
        weightNotice = `For your **${stage}** level and goal to **${goal}**, aim for **${protProfile.minGramsPerKg} – ${protProfile.maxGramsPerKg}g protein per kg of body weight** (approx. **${protProfile.dailyTargetRange}** for average 55–75kg students).\n\n💡 *Want an exact gram target? Reply with your body weight in kg (e.g. '62 kg').*`;
      }

      const meal = findMatchingMeal(m => m.diet === diet || m.category === 'Lunch');

      return {
        text: `Hey ${name}, here is your tailored student protein blueprint for a **${diet}** ${budgetFriendly === 'Yes' ? '(Budget-Friendly)' : ''} diet! 💪

🎯 **Your Personalized Daily Protein Target:**
> **${protProfile.dailyTargetRange}**
${weightNotice}

🥗 **Top Student-Friendly Protein Staples for You:**
${proteinSources}

💡 *Student Habit:* Distribute your protein across 3–4 meals (~20–30g per meal) so your brain and muscles get a steady stream of amino acids all day.`,
        actionLabel: `View Recipe: ${meal.title}`,
        actionNavigate: 'diet'
      };
    }

    // 5. Weight Loss, Fat Loss, Belly Fat, Cutting
    const hasWeightLossIntent =
      prompt.includes('lose belly fat') ||
      prompt.includes('fat loss') ||
      prompt.includes('weight loss') ||
      prompt.includes('lose weight') ||
      prompt.includes('cut fat') ||
      prompt.includes('burn fat') ||
      prompt.includes('slim down') ||
      prompt.includes('get lean');

    if (hasWeightLossIntent) {
      const calProfile = this.calculateCalorieProfile(user, weightKg);
      const protProfile = this.calculateProteinProfile(user, weightKg);
      const act = findMatchingActivity(a => a.id === 'act-10-2' || a.category === 'Cardio' || a.goal === 'Lose Weight');

      let weightClarification = '';
      if (!calProfile.hasWeight) {
        weightClarification = `\n\n💡 *Note: To calculate your exact deficit numbers, reply with your current body weight in kg (e.g. 'I weigh 68 kg').*`;
      }

      return {
        text: `To shed body fat sustainably while managing college lectures and exams, **${name}**, here is your personalized student plan:

🎯 **Your Personalized Numbers:**
- **Target Calorie Window:** **${calProfile.targetCaloriesRange} kcal/day** (${calProfile.guidanceNote})
- **Daily Protein Protection Target:** **${protProfile.dailyTargetRange}** (Keeps you satiated and prevents muscle breakdown)${weightClarification}

📋 **The 4-Pillar Student Fat Loss Protocol:**
1. 🥗 **Focus on Protein & High Volume Fiber:** Start every mess meal with fresh cucumbers/salad and a protein source (${diet === 'Vegetarian' ? 'paneer, soya chunks, dal' : 'eggs, chicken, soya'}).
2. 🚶 **Increase Campus Non-Exercise Steps (NEAT):** Aim for **8,000 – 10,000 steps** daily by walking to classes and taking the stairs.
3. ☕ **Liquid Calories Check:** Cut out sweetened canteen chai/colas and packaged juices. Stick to water, black coffee, or green tea.
4. ⚡ **Short ${availableTime} Interval Moves:** Perform high-efficiency intervals right in your dorm room without making loud floor noise.`,
        actionLabel: 'Launch 10-Min HIIT Torch',
        actionActivityId: act.id
      };
    }

    // 6. Stamina, Endurance, Muscle Building, Strength Progression
    const hasStaminaStrengthIntent =
      prompt.includes('stamina') ||
      prompt.includes('endurance') ||
      prompt.includes('strength') ||
      prompt.includes('build muscle') ||
      prompt.includes('get stronger') ||
      prompt.includes('gain muscle') ||
      prompt.includes('bulk');

    if (hasStaminaStrengthIntent) {
      const isStrength = prompt.includes('strength') || prompt.includes('muscle') || goal.includes('Strength');
      const act = findMatchingActivity(a => isStrength ? (a.id === 'act-10-4' || a.category === 'Strength') : (a.id === 'act-15-2' || a.category === 'Cardio'));

      return {
        text: `Here is your personalized ${isStrength ? 'strength-building' : 'stamina-boosting'} progression tailored for a **${stage}** student, **${name}**! 🚀

🎯 **Personalized Routine Calibration:**
- **Current Fitness Stage:** **${stage}** (Activity Level: *${activityLevel}*)
- **Target Free Window:** **${availableTime}** (Best done: *${preferredTime}*)
- **Primary Focus:** **${goal}**

⚡ **Your Step-by-Step Training Protocol:**
1. **Progressive Tension Overload:** Rather than needing heavy gym weights, slow down your bodyweight tempo (3s down on push-ups and squats) to recruit deep motor units.
2. **Short Interval Circuits:** Work for 40 seconds, rest for 20 seconds. Repeat for 3 to 4 rounds during your **${availableTime}** window.
3. **Cardiovascular Stamina:** Combine high-knee marches, speed squats, and shadow boxing to expand VO2 max without disturbing your roommates.
4. **Consistency Over Exhaustion:** Complete your micro-workout daily to build lasting physical endurance for college life.`,
        actionLabel: `Start: ${act.title}`,
        actionActivityId: act.id
      };
    }

    // 7. General Diet, Food, Snacks, Mess Hacks & Meal Ideas
    const hasDietIntent =
      prompt.includes('diet') ||
      prompt.includes('food') ||
      prompt.includes('eat') ||
      prompt.includes('snack') ||
      prompt.includes('meal') ||
      prompt.includes('breakfast') ||
      prompt.includes('lunch') ||
      prompt.includes('dinner') ||
      prompt.includes('mess') ||
      prompt.includes('kettle') ||
      prompt.includes('hungry') ||
      prompt.includes('crav') ||
      prompt.includes('munch') ||
      prompt.includes('recipe');

    if (hasDietIntent) {
      // 7A. Late night snacks & Study munchies
      if (prompt.includes('late') || prompt.includes('night') || prompt.includes('midnight') || prompt.includes('snack') || prompt.includes('munch') || prompt.includes('crav')) {
        const snack = findMatchingMeal(m => m.category === 'Smart Snacks');
        return {
          text: `Studying late burns brain glucose, which triggers intense cravings for chips or instant noodles, ${name}. But fast carbs cause an insulin spike followed by a brain fog crash!

🌙 **Smart Late-Night Study Snacks for You (${diet}):**
- 🥣 **Roasted Makhana + Peanuts (~170 kcal):** Light, crunchy, rich in magnesium for calm focus.
- 🍌 **Banana + 1 tbsp Peanut Butter (~180 kcal):** Steady potassium and slow-burning complex energy.
${diet.includes('Non') || diet.includes('Egg') ? '- 🥚 **Boiled Egg Chaat (140 kcal):** 2 boiled eggs with black pepper & lemon (12g protein, zero sugar).' : '- 🌱 **Sprouted Moong Chaat (120 kcal):** Crisp, refreshing, high in B-vitamins for mental stamina.'}
- 🥛 **Warm Kettle Cinnamon Milk or Oats:** Rich in tryptophan to help you wind down when you finish studying.

💧 *Pro-Tip:* Drink a glass of water first—frequently, late-night thirst is misinterpreted by the brain as hunger!`,
          actionLabel: `Try: ${snack.title}`,
          actionNavigate: 'diet'
        };
      }

      // 7B. Hostel / College Mess Food Hacks
      if (prompt.includes('mess') || prompt.includes('hostel food') || prompt.includes('canteen') || prompt.includes('oily')) {
        return {
          text: `Hostel mess food can be challenging, ${name}, but you can easily optimize it with these 4 student rules for a **${diet}** diet:

🍛 **Hostel Mess Survival Guide:**
1. **The Soya Chunk Dal Hack:** Keep a ₹45 box of mini soya chunks in your room. Soak a handful in hot kettle water for 4 mins, squeeze, and toss directly into your mess dal. (Adds +15g pure protein!)
2. **Roti > Oily Gravy:** Stick to plain whole wheat rotis and spoon the vegetable/dal without scooping the floating excess oil from the top.
3. **Always Start with Raw Salad:** Grab sliced cucumbers/onions/tomatoes first. Raw fiber prevents rapid glucose spikes and afternoon lecture drowsiness.
4. **Daily Curd / Dahi:** Neutralizes heavy mess spices and supports your gut microbiome.`,
          actionLabel: 'Explore Student Diet Catalog',
          actionNavigate: 'diet'
        };
      }

      // 7C. Breakfast & Morning fuel before class
      if (prompt.includes('breakfast') || prompt.includes('morning') || prompt.includes('rush') || prompt.includes('class')) {
        const breakfast = findMatchingMeal(m => m.category === 'Breakfast');
        return {
          text: `Skipping breakfast leads to cognitive slowdown in 8 AM lectures, ${name}. Here are 3 student breakfast ideas you can assemble in under 5 minutes:

🌅 **Quick Student Breakfasts (${diet}):**
1. **Hostel Kettle Power Oatmeal:** Oats + hot kettle water/milk + sliced banana + 1 tbsp peanut butter (3 mins, ~320 kcal, 12g protein).
2. **Peanut Butter Roti Roll:** Spread peanut butter on yesterday's mess roti, roll a whole banana inside, and eat on your walk to class!
3. **Moong Sprouts Chaat:** Toss sprouted moong with lemon juice, cucumber, and black salt for instant crisp energy.`,
          actionLabel: `View ${breakfast.title}`,
          actionNavigate: 'diet'
        };
      }

      // 7D. General nutrition match
      const matchedMeal = findMatchingMeal(m => m.diet === diet);
      return {
        text: `Nutrition is your primary cognitive and physical fuel, ${name}! Based on your preference for **${diet}** ${budgetFriendly === 'Yes' ? '(budget-friendly)' : ''} foods and your goal to **${goal}**:

🥗 **Personalized Student Guidelines:**
- **Regular Balanced Meals:** Avoid heavy carb-dense meals before study blocks to prevent post-meal food comas.
- **Dorm Fuel Staples:** Keep roasted chana, peanuts, oats, bananas, and curd accessible in your room.
- **Hydrate Continuously:** Drink water between lecture intervals to optimize focus and nutrient delivery.`,
        actionLabel: `Explore ${matchedMeal.title}`,
        actionNavigate: 'diet'
      };
    }

    // 8. Hydration & Fluids
    const hasHydrationIntent =
      prompt.includes('water') ||
      prompt.includes('hydrat') ||
      prompt.includes('drink') ||
      prompt.includes('fluid') ||
      prompt.includes('thirst') ||
      prompt.includes('electrolyte') ||
      prompt.includes('dehydrat') ||
      ((prompt.includes('coffee') || prompt.includes('tea') || prompt.includes('chai') || prompt.includes('caffeine')) && !hasDietIntent);

    if (hasHydrationIntent) {
      if (prompt.includes('electrolyte') || prompt.includes('sweat') || prompt.includes('hot') || prompt.includes('salt') || prompt.includes('dizzy')) {
        return {
          text: `Hey ${name}, in warm hostel rooms or after study fatigue, plain water sometimes isn't enough because you lose essential electrolytes (sodium & potassium).

🧂 **Budget Student Electrolyte Solution (Hostel Kettle Recipe):**
- **500ml clean water** (cool or room temp)
- **1/4 tsp salt** (for sodium balance)
- **Squeeze of 1/2 fresh lemon** (potassium & vitamin C)
- **1 tsp honey or raw sugar** (glucose facilitates faster cellular water uptake)

⚡ **When to drink:** Sip this right before afternoon lectures or after your dorm workout to banish brain fog instantly!`,
          actionLabel: 'Check Daily Wellness Routine',
          actionNavigate: 'activities'
        };
      }

      if (prompt.includes('coffee') || prompt.includes('tea') || prompt.includes('chai') || prompt.includes('caffeine') || prompt.includes('energy drink')) {
        return {
          text: `Great question, ${name}! While chai and coffee give an alertness spike, caffeine is a mild diuretic and can mask chronic dehydration.

☕ **The 1:1 Student Coffee Rule:**
1. For every cup of coffee/chai, drink **1 full glass (250ml) of pure water** within 30 minutes.
2. Avoid using coffee as your primary study fluid—caffeine dehydration causes headaches, eye dryness, and 4 PM crashes.
3. Keep a 1-liter bottle at your desk and sip after each study block.

💧 *Pro-Tip:* Drinking a glass of water *before* your morning coffee kickstarts brain circulation!`,
          actionLabel: 'Explore Focus Stretches',
          actionActivityId: 'act-5-3'
        };
      }

      const estTargetLiters = weightKg 
        ? `${(weightKg * 0.035).toFixed(1)} to ${(weightKg * 0.04).toFixed(1)}` 
        : (stage === 'Advanced' ? '3.2 to 3.8' : (stage === 'Intermediate' ? '2.8 to 3.2' : '2.5 to 3.0'));

      return {
        text: `Hey ${name}, staying hydrated is one of the highest ROI habits for students! A mere **2% drop in hydration reduces short-term memory and focus by up to 15%**.

💧 **Your Recommended Daily Target:** **${estTargetLiters} Liters** (tailored to your *${stage}* profile${weightKg ? ` and ${weightKg}kg body weight` : ''}).

📅 **The 3-Bottle Student Hydration Blueprint:**
- 🌅 **Bottle 1 (Morning to 12 PM):** Drink 500ml right after waking up, finish before lunch.
- ☀️ **Bottle 2 (12 PM to 5 PM):** Keep on your desk during lectures or study sessions.
- 🌙 **Bottle 3 (5 PM to 9 PM):** Drink around workout times; taper off 1 hour before bed.

💡 *Self-Check:* Your urine should be pale straw/light yellow. If it looks dark amber, drink a 300ml glass immediately!`,
        actionLabel: 'View Activity Timers',
        actionNavigate: 'activities'
      };
    }

    // 9. Ergonomics, Posture, Neck, Back Pain, Soreness, Eye Strain
    const hasErgoPainIntent =
      prompt.includes('neck') ||
      prompt.includes('posture') ||
      prompt.includes('spine') ||
      prompt.includes('hunch') ||
      prompt.includes('slouch') ||
      prompt.includes('lower back') ||
      prompt.includes('lumbar') ||
      prompt.includes('wrist') ||
      prompt.includes('eye') ||
      prompt.includes('screen') ||
      prompt.includes('sore') ||
      prompt.includes('doms') ||
      prompt.includes('ache') ||
      prompt.includes('stiff') ||
      prompt.includes('recover faster') ||
      prompt.includes('back hurt');

    if (hasErgoPainIntent) {
      if (prompt.includes('neck') || prompt.includes('hunch') || prompt.includes('cervical') || prompt.includes('trap') || prompt.includes('shoulder')) {
        return {
          text: `Looking down at laptops and phones shifts 20-30kg of extra gravitational load onto your cervical spine, ${name}. Here is an instant 3-minute desk decompression:

🧘 **Desk Tech-Neck Reset:**
1. **Chin Tucks (30s):** Look straight ahead, pull your chin straight backward (making a double chin). Hold 3s, repeat 6 times. (Strengthens deep neck flexors).
2. **Upper Trap Stretch (45s/side):** Drop right ear toward right shoulder, place right hand gently on head for a soft stretch.
3. **Chair Cat-Cow (60s):** Inhale and arch your chest forward; exhale, tuck chin and round your spine back.
4. **Eagle Arms Opener (45s):** Cross elbows, interlace forearms, and elevate elbows to chin level to release tight shoulder blades.`,
          actionLabel: 'Launch 5-min Desk Reset',
          actionActivityId: 'act-5-1'
        };
      }

      if (prompt.includes('lower back') || prompt.includes('lumbar') || prompt.includes('back hurt') || prompt.includes('back')) {
        return {
          text: `Lower back pain during long study sessions is almost always caused by tight hip flexors and inactive glutes pulling on your pelvis, ${name}.

🛋️ **Instant Study Lower Back Relief:**
1. **Seated Glute Figure-4 Stretch (45s/leg):** Cross right ankle over left knee, sit tall, and gently hinge forward.
2. **Kneeling Hip Flexor Lunge (60s/leg):** Step one foot forward, tuck pelvis under, and shift weight forward to open up tight hips.
3. **Standing Back Extension (30s):** Place hands on your hips, gently lean backward, and breathe deeply.
4. **Pelvic Neutral Check:** Sit on your "sit bones" rather than your tailbone, and place a rolled towel behind your lower back.`,
          actionLabel: 'Deep Stress & Mobility Routine',
          actionActivityId: 'act-15-3'
        };
      }

      if (prompt.includes('eye') || prompt.includes('screen') || prompt.includes('headache') || prompt.includes('blur') || prompt.includes('vision')) {
        return {
          text: `Prolonged screen reading reduces your natural blink rate by 60%, causing dry eyes and digital ocular fatigue.

👀 **The 20-20-20 Eye & Mental Reset:**
1. **The 20-20-20 Rule:** Every 20 minutes, look at an object at least 20 feet away for 20 seconds. It relaxes the ciliary eye muscles.
2. **Eye Palming (60s):** Rub your palms vigorously until warm, then cup them gently over closed eyes without pressing the eyeballs.
3. **Screen Ergonomics:** Ensure your monitor top is at eye level and brightness matches your room lighting.`,
          actionLabel: 'Study-Break Eye & Posture Reset',
          actionActivityId: 'act-5-3'
        };
      }

      if (prompt.includes('sore') || prompt.includes('doms') || prompt.includes('recover') || prompt.includes('hurts') || prompt.includes('pain')) {
        return {
          text: `Muscle soreness 24-48 hours after a workout (DOMS) is a normal sign of microscopic muscle fiber adaptation, ${name}!

🩹 **How to Accelerate Student Recovery:**
1. **Active Recovery Movement:** A gentle 5-minute walk or light mobility stretch flushes metabolic waste and increases healing blood flow.
2. **Hydration & Electrolytes:** Keep muscle fibers pliable with regular fluid intake.
3. **Warm Shower:** Stimulates vasodilation and muscle relaxation.
4. **Sleep Priority:** Growth hormone peaks during deep sleep—aim for 7+ hours tonight!`,
          actionLabel: 'Bedside Mobility & Recovery',
          actionActivityId: 'act-5-4'
        };
      }

      return {
        text: `Great posture directly expands your lung volume and improves blood flow to the prefrontal cortex for better studying, ${name}!

📐 **Quick 3-Point Posture Check:**
1. **Ears over shoulders:** Avoid leaning your head toward the screen.
2. **90-90-90 Rule:** 90° angle at your elbows, hips, and knees.
3. **Move every 45 minutes:** Even a 60-second standing stretch resets spinal disc pressure.`,
        actionLabel: 'Start Desk Posture Decompression',
        actionActivityId: 'act-5-1'
      };
    }

    // 10. Wellness, Sleep, Exam Anxiety, Procrastination, Motivation
    const hasWellnessIntent =
      prompt.includes('exam') ||
      prompt.includes('stress') ||
      prompt.includes('anxiety') ||
      prompt.includes('panic') ||
      prompt.includes('nervous') ||
      prompt.includes('viva') ||
      prompt.includes('sleep') ||
      prompt.includes('insomnia') ||
      prompt.includes('wind down') ||
      prompt.includes('cant sleep') ||
      prompt.includes('lazy') ||
      prompt.includes('procrastinat') ||
      prompt.includes('motivat') ||
      prompt.includes('burnout');

    if (hasWellnessIntent) {
      if (prompt.includes('stress') || prompt.includes('anxiety') || prompt.includes('panic') || prompt.includes('nervous') || prompt.includes('viva') || prompt.includes('exam')) {
        return {
          text: `Exam stress triggers your body's sympathetic "fight-or-flight" response, raising cortisol and narrowing cognitive focus. Let's immediately downregulate your nervous system, ${name}:

🌬️ **The Double Physiological Sigh (Fastest Stress Eraser):**
1. Take **two quick inhales through your nose** (one deep inhale, followed immediately by a sharp top-off sniff).
2. Exhale slowly and completely through your mouth with a long sigh (takes 6 seconds).
3. Repeat 3 to 4 times to drop your heart rate within 30 seconds!

💡 *Exam Tip:* Take a 5-minute movement break between study blocks. Movement stimulates Brain-Derived Neurotrophic Factor (BDNF), which directly cements memory retention!`,
          actionLabel: 'Focus-Restoring Yoga Flow',
          actionActivityId: 'act-10-3'
        };
      }

      if (prompt.includes('sleep') || prompt.includes('insomnia') || prompt.includes('night') || prompt.includes('bed') || prompt.includes('wind down')) {
        return {
          text: `Staring at code or textbooks late into the night bombards your eyes with blue light, delaying melatonin release. Here is your student sleep prep routine:

🌙 **The 10-Minute Hostel Sleep Protocol:**
1. **The 4-7-8 Breathing Trick:** Inhale quietly through nose for 4s, hold breath for 7s, exhale completely through mouth with a whoosh for 8s. Repeat 4 cycles.
2. **Viparita Karani (Legs Up The Wall):** Lie on your bed, swing legs up against the wall for 3 minutes to trigger parasympathetic calm.
3. **Screen Curfew:** Switch phone to warm night-mode and place face-down 15 minutes before closing your eyes.`,
          actionLabel: 'Hostel Bedside Mobility & Sleep Prep',
          actionActivityId: 'act-5-4'
        };
      }

      if (prompt.includes('motivat') || prompt.includes('lazy') || prompt.includes('procrastinat') || prompt.includes('start') || prompt.includes('habit')) {
        return {
          text: `You don't need willpower, ${name}—you just need momentum!

⚡ **The 2-Minute Fitness Rule for Students:**
> *"Tell yourself you're only going to do 2 minutes of stretching or 10 bodyweight squats."*

Once you start moving, dopamine kicks in and the friction disappears. You already have a **⚡ Consistency Score of ${consistencyScore}** and **${workoutsCount} workouts logged** in AayuMove! Keep the momentum going.

Give yourself just **one 5-minute session** today. Your future self during finals will thank you!`,
          actionLabel: 'Do a 5-Min Express Move',
          actionActivityId: 'act-5-2'
        };
      }

      const act = findMatchingActivity(a => a.category.includes('Yoga') || a.category.includes('Mobility'));
      return {
        text: `Long unbroken study blocks lead to diminishing returns, ${name}.

🧠 **The Optimal Student Study-Movement Ratio:**
- **50 Minutes Study:** Deep focused work without multitasking.
- **10 Minutes Movement:** Walk around the hostel, stretch, drink water, and let your subconscious mind process what you just read.

Doing this keeps your concentration sharp all day without mid-afternoon burnout!`,
        actionLabel: `Start: ${act.title}`,
        actionActivityId: act.id
      };
    }

    // 11. Workouts, Exercises, Muscle Groups & Fitness
    const hasWorkoutIntent =
      prompt.includes('workout') ||
      prompt.includes('exercise') ||
      prompt.includes('routine') ||
      prompt.includes('training') ||
      prompt.includes('calisthenic') ||
      prompt.includes('hiit') ||
      prompt.includes('cardio') ||
      prompt.includes('pushup') ||
      prompt.includes('push up') ||
      prompt.includes('squat') ||
      prompt.includes('lunge') ||
      prompt.includes('plank') ||
      prompt.includes('burpee') ||
      prompt.includes('chest') ||
      prompt.includes('abs') ||
      prompt.includes('core') ||
      prompt.includes('leg') ||
      prompt.includes('arm') ||
      prompt.includes('dorm') ||
      prompt.includes('hostel') ||
      prompt.includes('5-min') ||
      prompt.includes('5 min') ||
      prompt.includes('10 min') ||
      prompt.includes('15 min') ||
      prompt.includes('30 min');

    if (hasWorkoutIntent) {
      if (prompt.includes('chest') || prompt.includes('pushup') || prompt.includes('push up') || prompt.includes('tricep') || prompt.includes('upper body')) {
        const act = findMatchingActivity(a => a.id === 'act-10-4' || a.id === 'act-15-1');
        return {
          text: `Building upper body strength in a dorm room is completely doable using bodyweight leverage, ${name}! Calibrated for your **${stage}** level:

💥 **Hostel Upper Body / Chest Progression:**
1. **${stage === 'Beginner' ? 'Incline Push-Ups on Bed/Desk' : 'Standard or Archer Push-Ups'} (3 sets of ${stage === 'Advanced' ? '15-20' : '8-12'}):** Hands slightly wider than shoulders, keep elbows tucked at 45°.
2. **Chair / Bed Tricep Dips (3 sets of 10-12):** Hands on edge of sturdy chair, lower hips till elbows hit 90°.
3. **Pike Push-Ups (3 sets of 6-8):** Hips in high V-shape; great for building shoulders and upper chest.
4. **Doorframe Bodyweight Rows (3 sets of 10):** Grip a sturdy doorframe, lean back, and pull your chest to the frame for back & bicep balance.

💡 *Form Cue:* Keep your core and glutes locked like a rigid plank during every push-up!`,
          actionLabel: `Start: ${act.title}`,
          actionActivityId: act.id
        };
      }

      if (prompt.includes('core') || prompt.includes('abs') || prompt.includes('belly') || prompt.includes('plank') || prompt.includes('midsection')) {
        const act = findMatchingActivity(a => a.id === 'act-10-1');
        return {
          text: `A strong core is critical for students because it supports your lumbar spine during long hours in library chairs, ${name}!

🔥 **Hostel Floor Core Triad (Quiet & Equipment-Free):**
1. **Deadbugs (45s):** Lie on back, lower opposite arm and leg while keeping your lower back firmly glued to the floor.
2. **Bicycle Crunches (45s):** Controlled rotation from ribs, not pulling on your neck.
3. **Forearm Plank with Hip Dips (45s):** Squeeze glutes and rotate hips side to side.
4. **Glute Bridges (45s):** Drives hip extension and relieves lower back tightness.

Repeat for 2 rounds (takes only 6-8 minutes)!`,
          actionLabel: `Launch: ${act.title}`,
          actionActivityId: 'act-10-1'
        };
      }

      if (prompt.includes('leg') || prompt.includes('glute') || prompt.includes('quad') || prompt.includes('squat') || prompt.includes('lunge')) {
        const act = findMatchingActivity(a => a.id === 'act-15-4' || a.id === 'act-10-4');
        return {
          text: `Sitting in lectures for hours deactivates your glutes and tightens hip flexors. Let's wake up your lower body, ${name}!

🦵 **Express Dorm Leg & Glute Builder:**
1. **Air Squats (3 sets of 15):** Sit hips back like reaching for a low chair, drive up through your heels.
2. **Reverse Lunges (3 sets of 10/leg):** Stepping back protects your knees and focuses tension on glutes.
3. **Bulgarian Split Squats (2 sets of 8/leg):** Rest rear foot on your hostel bed/chair for intense quad development.
4. **Wall Sit (60s hold):** Back flat against the wall, thighs parallel to floor. Feel the burn!`,
          actionLabel: `Start: ${act.title}`,
          actionActivityId: act.id
        };
      }

      if (prompt.includes('cardio') || prompt.includes('hiit') || prompt.includes('quiet') || prompt.includes('2x2') || prompt.includes('noise')) {
        const act = findMatchingActivity(a => a.id === 'act-10-2' || a.id === 'act-15-2' || a.id === 'act-5-2');
        return {
          text: `You don't need a treadmill or a big running track to build great cardiovascular stamina, ${name}!

⚡ **Quiet Dorm HIIT Circuit (Roommate-Friendly):**
- **0:00 - 1:00:** Shadow boxing with high knee marching (rhythmic & silent)
- **1:00 - 2:30:** Fast speed squats (40s work / 20s rest)
- **2:30 - 4:00:** Low-impact speed skaters (side-to-side bounds on soft toes)
- **4:00 - 5:30:** Mountain climbers in rigid high plank
- **5:30 - 7:00:** Step-out burpees (no slamming on the floor)

Spikes your heart rate, torches ~**65–110 kcal**, and floods your brain with fresh oxygen for exams!`,
          actionLabel: `Start: ${act.title}`,
          actionActivityId: act.id
        };
      }

      if (prompt.includes('5 min') || prompt.includes('5-min') || prompt.includes('quick') || prompt.includes('fast') || prompt.includes('short')) {
        const act = findMatchingActivity(a => a.duration === 5 && a.goal === 'Stay Active');
        return {
          text: `Short on time before your next lecture, ${name}? Just 5 minutes of targeted movement activates your sympathetic nervous system and beats afternoon sluggishness!

⚡ **The 5-Minute Dorm Energy Burst:**
1. **Minute 1:** Arm circles & marching high knees.
2. **Minute 2:** 20 Bodyweight squats or chair pulses.
3. **Minute 3:** Desk or wall incline push-ups.
4. **Minute 4:** Standing side-bends and torso twists.
5. **Minute 5:** 5 Deep belly breaths with arms raised overhead.`,
          actionLabel: `Launch: ${act.title}`,
          actionActivityId: act.id
        };
      }

      const matchedAct = findMatchingActivity(a => a.difficulty === stage || a.goal === goal);
      return {
        text: `Awesome commitment, ${name}! For your **${stage}** fitness stage and goal to **${goal}**, here is your tailored student session:

📋 **Recommended Session:**
- **Activity:** **${matchedAct.title}** (${matchedAct.duration} mins)
- **Focus:** ${matchedAct.shortDescription}
- **Calories Burned:** ~${matchedAct.burnedCalories} kcal
- **Space Needed:** ${matchedAct.spaceNeeded}

Consistency beats intensity every single time. Completing this ${matchedAct.duration}-min routine today earns you **+1 to your Consistency Score**!`,
        actionLabel: `Start ${matchedAct.title}`,
        actionActivityId: matchedAct.id
      };
    }

    // =========================================================================
    // 12. DYNAMIC ADAPTIVE FALLBACK FOR ANY OTHER QUESTION
    // =========================================================================
    const topicKeywords = rawPrompt
      .replace(/[^a-zA-Z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 3 && !['what', 'when', 'where', 'which', 'should', 'could', 'would', 'have', 'with', 'about', 'from', 'this', 'that', 'your', 'please'].includes(w.toLowerCase()));

    const keyTopicStr = topicKeywords.slice(0, 3).join(' ') || 'fitness & wellness';

    let bestActivity = activitiesData.find(a => 
      prompt.split(' ').some(word => word.length > 3 && (a.title.toLowerCase().includes(word) || a.category.toLowerCase().includes(word) || a.goal.toLowerCase().includes(word)))
    ) || activitiesData[1];

    return {
      text: `Thanks for asking about **${keyTopicStr}**, ${name}!

Here is how to approach this effectively as a student aiming to **${goal}** with a **${stage}** routine:

1. 🎯 **The Core Principle:** Keep healthy habits low-friction. Don't let busy class schedules or hostel limitations stop you from moving or fueling your body properly.
2. ⚡ **Practical Action Plan:** Squeeze in intentional micro-habits—whether it's a **${availableTime}** movement burst, keeping a water bottle at your study desk, or prioritizing clean **${diet}** fuel.
3. 🧠 **Mind-Body Benefit:** Small daily physical resets reduce exam cortisol and significantly increase cognitive focus for your assignments.

Would you like a specific step-by-step workout routine, personalized calorie calculation, or nutrition recipe for this?`,
      actionLabel: `Try: ${bestActivity.title}`,
      actionActivityId: bestActivity.id
    };
  }
}
