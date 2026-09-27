// Aayu AI - Student Adaptive Fitness & Wellness Reasoning Engine
// Dynamic, context-aware, empathetic, and evidence-informed student health advisor.
// DISCLAIMER: Wellness suggestions only. Not medical or clinical advice.

import { activitiesData } from '../data/activitiesData.js';
import { mealsData } from '../data/mealsData.js';

export class AayuAIService {
  /**
   * Generates a context-tailored greeting for the user.
   */
  static getGreeting(user) {
    const name = user?.name ? user.name.split(' ')[0] : 'fellow student';
    const goal = user?.goal || 'stay healthy and energised';
    const time = user?.availableTime || '10 minutes';
    const stage = user?.fitnessStage || 'Beginner';
    const streak = user?.streakDays || 1;

    const hour = new Date().getHours();
    let timeGreeting = 'Hey';
    if (hour < 12) timeGreeting = 'Good morning';
    else if (hour < 17) timeGreeting = 'Good afternoon';
    else timeGreeting = 'Good evening';

    return `${timeGreeting}, **${name}**! 👋 I'm **Aayu AI**, your student fitness & wellness buddy.

🎯 **Your Current Profile:**
- Goal: **${goal}** (${stage} level)
- Available slot: **${time}** between classes
- Streak: **🔥 ${streak} day${streak > 1 ? 's' : ''}**

What can I help you with right now? Ask me about **dorm workouts**, **hostel diet & protein**, **hydration targets**, **desk posture**, **exam stress**, or **late-night study routines**!`;
  }

  /**
   * Generates dynamic suggestion chips tailored to user's current goal and time of day.
   */
  static getQuickPrompts(user) {
    const goal = (user?.goal || '').toLowerCase();
    const time = user?.availableTime || '10 minutes';

    const prompts = [
      `⚡ ${time} dorm workout for my goal`,
      '💧 How much water should I drink today?',
      '🥗 High-protein student snacks on a budget',
      '🧘 Fix stiff neck & shoulders from laptop',
      '🌙 Wind-down routine for late-night study',
      '🎯 Quick motivation to keep my streak alive'
    ];

    if (goal.includes('strength') || goal.includes('muscle')) {
      prompts.unshift('💪 Best bodyweight exercises for chest and arms');
    } else if (goal.includes('weight') || goal.includes('fat')) {
      prompts.unshift('🔥 Quick calorie-burning HIIT without making noise');
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
        text: "I didn't catch that. What would you like guidance on? (e.g. quick workout, diet tip, hydration, or posture fix!)"
      };
    }

    const rawPrompt = userPrompt.trim();
    const prompt = rawPrompt.toLowerCase();
    const name = user?.name ? user.name.split(' ')[0] : 'Friend';
    const stage = user?.fitnessStage || 'Beginner';
    const goal = user?.goal || 'Stay Active';
    const diet = user?.dietaryPreference || 'Vegetarian';
    const availableTime = user?.availableTime || '10 minutes';
    const streak = user?.streakDays || 1;
    const workoutsCount = user?.totalWorkoutsCompleted || 0;
    const activeMins = user?.totalActiveMinutes || 0;

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
      (prompt.includes('streak') && (prompt.includes('my') || prompt.includes('current') || prompt.includes('how many') || prompt.includes('what is'))) ||
      (prompt.includes('goal') && (prompt.includes('my') || prompt.includes('current') || prompt.includes('what is') || prompt.includes('fitness goal'))) ||
      prompt.includes('my stat') ||
      prompt.includes('my profile') ||
      prompt.includes('my progress') ||
      prompt.includes('my stage') ||
      (prompt.includes('how many workout') && prompt.includes('completed'));

    if (hasProfileIntent) {
      return {
        text: `Here is your current student fitness snapshot, **${name}**! 📊

🔥 **Streak:** **${streak} Consecutive Days**
🏋️ **Workouts Completed:** **${workoutsCount} sessions**
⏱️ **Total Active Time:** **${activeMins} minutes**
🎯 **Fitness Goal:** **${goal}**
🏆 **Current Stage:** **${stage}**
🥗 **Dietary Preference:** **${diet}**
⏳ **Typical Available Window:** **${availableTime}**

You're making steady, sustainable progress. Ready to log another active session today?`,
        actionLabel: 'View Detailed Progress & Stats',
        actionNavigate: 'stats'
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
        text: `Hey there, ${name}! 👋 Ready to move, hydrate, or recharge? 

You can ask me anything like:
- *"Give me a 5-min dorm workout for energy"*
- *"What should I eat before my morning exam?"*
- *"How do I fix my neck pain from sitting at my laptop?"*
- *"How much water should I drink today?"*`,
        actionLabel: 'Browse All Activities',
        actionNavigate: 'activities'
      };
    }

    if (prompt.includes('who are you') || prompt.includes('what are you') || prompt.includes('about aayu') || prompt.includes('what can you do')) {
      return {
        text: `I'm **Aayu AI**, an adaptive fitness and wellness coach built specifically for students in dorms, hostels, coaching centers, and homes!

🤖 **How I Can Help You:**
- 🏋️ **Micro-Workouts:** 5, 10, 15, and 30-min routines designed for 2x2 ft small spaces with zero equipment.
- 🥗 **Student Nutrition:** Budget-friendly recipes, mess food hacks, and kettle meals.
- 💧 **Hydration Guidance:** Daily intake calculations and focus strategies.
- 🧘 **Desk Ergonomics & Posture:** Instant resets for neck, back, and eye strain.
- 🌙 **Exam Stress & Sleep:** Fast nervous-system down-regulation techniques.`,
        actionLabel: 'Explore Activities',
        actionNavigate: 'activities'
      };
    }

    if (prompt.includes('thank') || prompt.includes('thanks') || (prompt.includes('awesome') && !prompt.includes('workout'))) {
      return {
        text: `You're very welcome, ${name}! 🙌 I'm always here in your corner to help you balance college life with great health and energy. Let me know if you need another quick routine or fuel tip!`,
        actionLabel: 'Explore Daily Activities',
        actionNavigate: 'activities'
      };
    }

    // 3. Ergonomics, Posture, Neck, Back Pain, Soreness, Eye Strain
    const hasErgoPainIntent =
      prompt.includes('neck') ||
      prompt.includes('posture') ||
      prompt.includes('spine') ||
      prompt.includes('hunch') ||
      prompt.includes('slouch') ||
      prompt.includes('lower back') ||
      prompt.includes('lumbar') ||
      prompt.includes('wrist') ||
      prompt.includes('carpal') ||
      prompt.includes('eye') ||
      prompt.includes('screen') ||
      prompt.includes('sore') ||
      prompt.includes('doms') ||
      prompt.includes('ache') ||
      prompt.includes('stiff') ||
      prompt.includes('recover faster') ||
      prompt.includes('back hurt') ||
      (prompt.includes('pain') && !prompt.includes('gain'));

    if (hasErgoPainIntent) {
      // Neck / Upper back / Trapezius
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

      // Lower back pain from chairs/sitting
      if (prompt.includes('lower back') || prompt.includes('lumbar') || prompt.includes('back hurt') || prompt.includes('back')) {
        return {
          text: `Lower back pain during long study sessions is almost always caused by tight hip flexors and inactive glutes pulling on your pelvis, ${name}.

🛋️ **Instant Study Lower Back Relief:**
1. **Seated Glute Figure-4 Stretch (45s/leg):** Cross right ankle over left knee, sit tall, and gently hinge forward until you feel a deep glute stretch.
2. **Kneeling Hip Flexor Lunge (60s/leg):** Step one foot forward, tuck pelvis under, and shift weight forward to open up tight hips.
3. **Standing Back Extension (30s):** Place hands on your hips, gently lean backward, and breathe deeply.
4. **Pelvic Neutral Check:** Avoid sitting on your tailbone; sit on your "sit bones" and place a rolled towel behind your lower back.`,
          actionLabel: 'Deep Stress & Mobility Routine',
          actionActivityId: 'act-15-3'
        };
      }

      // Eye strain & screen fatigue
      if (prompt.includes('eye') || prompt.includes('screen') || prompt.includes('headache') || prompt.includes('blur') || prompt.includes('vision')) {
        return {
          text: `Prolonged screen reading reduces your natural blink rate by 60%, causing dry eyes and digital ocular fatigue.

👀 **The 20-20-20 Eye & Mental Reset:**
1. **The 20-20-20 Rule:** Every 20 minutes, look at an object at least 20 feet away for 20 seconds. It relaxes the ciliary eye muscles.
2. **Eye Palming (60s):** Rub your palms vigorously until warm, then cup them gently over closed eyes without pressing the eyeballs. Inhale deeply.
3. **Screen Ergonomics:** Ensure your monitor top is at eye level and brightness matches your room lighting.`,
          actionLabel: 'Study-Break Eye & Posture Reset',
          actionActivityId: 'act-5-3'
        };
      }

      // Muscle Soreness & DOMS
      if (prompt.includes('sore') || prompt.includes('doms') || prompt.includes('recover') || prompt.includes('hurts') || prompt.includes('pain')) {
        return {
          text: `Muscle soreness 24-48 hours after a workout (DOMS) is a normal sign of microscopic muscle fiber adaptation, ${name}!

🩹 **How to Accelerate Student Recovery:**
1. **Active Recovery Movement:** Don't stay completely stationary. A gentle 5-minute walk or light mobility stretch flushes metabolic waste and increases healing blood flow.
2. **Hydration & Electrolytes:** Drink plenty of water to keep muscle fibers pliable.
3. **Warm Shower / Contrast Rinse:** Direct warm water over tight muscles to stimulate vasodilation.
4. **Sleep Priority:** Growth hormone peaks during deep stage 3/4 sleep—aim for 7+ hours tonight!`,
          actionLabel: 'Bedside Mobility & Recovery',
          actionActivityId: 'act-5-4'
        };
      }

      // General posture
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

    // 4. Diet, Nutrition, Food, Snacks, Protein, Weight Loss
    const hasDietIntent =
      prompt.includes('diet') ||
      prompt.includes('food') ||
      prompt.includes('eat') ||
      prompt.includes('snack') ||
      prompt.includes('protein') ||
      prompt.includes('calorie') ||
      prompt.includes('carb') ||
      prompt.includes('fat') ||
      prompt.includes('meal') ||
      prompt.includes('breakfast') ||
      prompt.includes('lunch') ||
      prompt.includes('dinner') ||
      prompt.includes('mess') ||
      prompt.includes('kettle') ||
      prompt.includes('hungry') ||
      prompt.includes('crav') ||
      prompt.includes('munch') ||
      prompt.includes('lose belly fat') ||
      prompt.includes('fat loss') ||
      prompt.includes('weight loss') ||
      prompt.includes('bulk') ||
      prompt.includes('recipe');

    if (hasDietIntent) {
      // 4A. Protein sources for students
      if (prompt.includes('protein') || prompt.includes('muscle food') || prompt.includes('supplement') || prompt.includes('budget protein')) {
        let proteinSources = '';
        if (diet.includes('Non') || prompt.includes('chicken') || prompt.includes('egg') || prompt.includes('meat')) {
          proteinSources = `
1. **Eggs (₹7-8/egg):** 6g protein per egg. 3 boiled eggs give 18g high-bioavailability protein.
2. **Chicken Breast:** 30g protein per 100g.
3. **Soya Chunks:** 52g protein per 100g (₹40/box). Boil in your hostel kettle!
4. **Paneer / Curd:** 18g protein per 100g paneer; fresh curd gives probiotics for digestion.
5. **Roasted Chana & Peanuts:** Budget student crunch with ~20g protein per 100g.`;
        } else if (diet.includes('Egg') || prompt.includes('egg')) {
          proteinSources = `
1. **Boiled Eggs (₹7-8/egg):** 6g complete protein per egg + choline for brain function.
2. **Soya Chunks:** 52g protein per 100g (ultra cheap student staple).
3. **Paneer (Cottage Cheese):** 18g protein per 100g.
4. **Sprouted Moong & Chana:** 8g protein per cup with zero cooking.
5. **Peanut Butter & Milk/Oats:** Fast kettle breakfast with 12g+ protein.`;
        } else {
          proteinSources = `
1. **Soya Chunks (Hostel MVP):** 52g protein per 100g! Boil in kettle for 5 mins and mix with mess dal.
2. **Paneer & Fresh Curd:** 18g protein per 100g paneer; curd aids gut health.
3. **Sprouted Moong & Kala Chana:** High fiber & micro-nutrients.
4. **Peanut Butter on Roti/Oats:** Dense healthy fats + 8g protein per 2 tbsp.
5. **Roasted Makhana & Peanuts:** Guilt-free crunch for study sessions.`;
        }

        const meal = findMatchingMeal(m => m.diet === diet || m.category === 'Lunch');

        return {
          text: `Hey ${name}, building strength and staying energised on a **${diet}** student budget doesn't require expensive protein powders!

💪 **Top Student-Friendly Protein Staples:**
${proteinSources}

🎯 **Daily Goal for You:** Aim for **1.2 to 1.5g protein per kg of body weight** (e.g. ~70-90g/day for a 60kg student) to maintain muscle tone and lecture stamina.`,
          actionLabel: `View Recipe: ${meal.title}`,
          actionNavigate: 'diet'
        };
      }

      // 4B. Late night snacks & Study munchies
      if (prompt.includes('late') || prompt.includes('night') || prompt.includes('midnight') || prompt.includes('snack') || prompt.includes('munch') || prompt.includes('crav')) {
        const snack = findMatchingMeal(m => m.category === 'Smart Snacks');
        return {
          text: `Studying late burns brain glucose, which triggers intense cravings for chips or sugary packaged noodles. But fast carbs lead to an insulin crash that destroys memory consolidation!

🌙 **Brain-Boosting Study Snacks (Fast & Healthy):**
- 🥣 **Roasted Makhana + Peanuts:** Light, crunchy, rich in magnesium for calm focus (~170 kcal).
- 🍌 **Banana + 1 tbsp Peanut Butter:** Provides steady potassium and slow-burning complex energy.
- 🥚 **Boiled Egg Chaat:** 2 eggs with a pinch of chaat masala & lemon (12g protein, zero sugar).
- 🥛 **Warm Kettle Cinnamon Milk/Oats:** Contains tryptophan to help you relax when you're ready to sleep.

💧 *Quick Hack:* Drink 1 glass of water first. Often, study dehydration masks itself as false midnight hunger!`,
          actionLabel: `Try: ${snack.title}`,
          actionNavigate: 'diet'
        };
      }

      // 4C. Hostel / College Mess Food Hacks
      if (prompt.includes('mess') || prompt.includes('hostel food') || prompt.includes('canteen') || prompt.includes('oily')) {
        return {
          text: `Hostel mess food can be unpredictable, ${name}, but you can easily level it up with these 4 smart student rules:

🍛 **Hostel Mess Survival Protocol:**
1. **The Dal Power-Up:** Buy a ₹45 box of mini soya chunks. Soak a handful in hot kettle water for 4 mins, squeeze, and toss directly into your mess dal. (Instantly adds +15g pure protein!)
2. **Roti > Oily Gravies:** Stick to whole wheat rotis and spoon the sabzi without drinking excess oil from the curry base.
3. **Always Start with Raw Salad:** Grab sliced cucumbers/onions first. Fiber stabilizes glucose spikes so you don't fall asleep in afternoon classes.
4. **Curd / Dahi Everyday:** Neutralizes heavy spices and keeps your gut microbiome healthy.`,
          actionLabel: 'Explore Student Diet Catalog',
          actionNavigate: 'diet'
        };
      }

      // 4D. Breakfast & Morning fuel before class
      if (prompt.includes('breakfast') || prompt.includes('morning') || prompt.includes('rush') || prompt.includes('class')) {
        const breakfast = findMatchingMeal(m => m.category === 'Breakfast');
        return {
          text: `Skipping breakfast leaves you with brain fog during morning lectures, ${name}. Here are 3 student breakfast ideas you can assemble in under 5 minutes:

🌅 **Fast Student Breakfasts:**
1. **Hostel Kettle Power Oatmeal:** Oats + hot kettle water/milk + sliced banana + peanut butter (3 mins).
2. **Peanut Butter Roti Roll:** Spread 1.5 tbsp peanut butter on yesterday's mess roti, roll a whole banana inside, and eat on your walk to class!
3. **Moong Sprouts Chaat:** Toss sprouted moong with lemon juice, cucumber, and black salt for instant crisp energy.`,
          actionLabel: `View ${breakfast.title}`,
          actionNavigate: 'diet'
        };
      }

      // 4E. Weight loss / Calorie deficit for students
      if (prompt.includes('lose') || prompt.includes('fat') || prompt.includes('weight') || prompt.includes('cut') || prompt.includes('slim') || prompt.includes('belly fat')) {
        return {
          text: `To shed body fat safely while balancing college coursework, ${name}, avoid extreme crash diets that starve your brain!

🎯 **The Sustainable Student Fat Loss Protocol:**
1. **Calorie Deficit without Starving:** Aim for a mild 300-400 kcal deficit. Swap fried canteen samosas/chips for roasted makhana, fruit, or sprouts.
2. **Prioritize Protein & Fiber:** Eating protein with every meal keeps you full for 4+ hours and prevents hostel snacking.
3. **Liquid Calories Check:** Cut down on sugary sodas, packaged juices, and extra sugar in tea/coffee.
4. **Daily Step Count:** Aim for 8,000-10,000 steps by taking stairs in campus and walking between lecture halls.
5. **Pair with 10-15 Min Daily HIIT:** Short interval sessions burn calories and keep your resting metabolic rate elevated!`,
          actionLabel: 'Launch 10-Min HIIT Torch',
          actionActivityId: 'act-10-2'
        };
      }

      // 4F. General nutrition match
      const matchedMeal = findMatchingMeal(m => m.diet === diet);
      return {
        text: `Nutrition is your primary cognitive and physical fuel, ${name}! Based on your preference for **${diet}** foods and your goal to **${goal}**:

🥗 **Key Student Nutrition Guidelines:**
- **Eat regular, balanced meals:** Avoid huge heavy lunches that cause post-prandial somnolence (afternoon food coma).
- **Keep clean fuel in your room:** Stock up on roasted chana, peanuts, oats, bananas, and curd.
- **Hydrate continuously:** Drink water throughout lectures to assist nutrient transport and mental clarity.`,
        actionLabel: `Explore ${matchedMeal.title}`,
        actionNavigate: 'diet'
      };
    }

    // 5. Hydration & Fluids
    const hasHydrationIntent =
      prompt.includes('water') ||
      prompt.includes('hydrat') ||
      prompt.includes('drink') ||
      prompt.includes('fluid') ||
      prompt.includes('thirst') ||
      prompt.includes('electrolyte') ||
      prompt.includes('urine') ||
      prompt.includes('dehydrat') ||
      ((prompt.includes('coffee') || prompt.includes('tea') || prompt.includes('chai') || prompt.includes('caffeine')) && !hasDietIntent);

    if (hasHydrationIntent) {
      // 5A. Electrolytes & summer/hostel heat
      if (prompt.includes('electrolyte') || prompt.includes('sweat') || prompt.includes('hot') || prompt.includes('salt') || prompt.includes('dizzy')) {
        return {
          text: `Hey ${name}, in warm hostel rooms or after study fatigue, plain water sometimes isn't enough because you lose essential electrolytes (sodium & potassium).

🧂 **Budget Student Electrolyte Solution (Hostel Kettle Recipe):**
- **500ml clean water** (room temp or cool)
- **1/4 tsp pink salt or table salt** (for sodium balance)
- **Squeeze of 1/2 fresh lemon** (potassium & vitamin C)
- **1 tsp honey or raw sugar** (glucose facilitates faster cellular water uptake)

⚡ **When to drink:** Sip this right before afternoon lectures or after your dorm workout to banish brain fog instantly!`,
          actionLabel: 'Check Daily Wellness Routine',
          actionNavigate: 'activities'
        };
      }

      // 5B. Chai / Coffee / Energy Drinks vs Water
      if (prompt.includes('coffee') || prompt.includes('tea') || prompt.includes('chai') || prompt.includes('caffeine') || prompt.includes('energy drink') || prompt.includes('soda')) {
        return {
          text: `Great question, ${name}! While chai and coffee give an alertness spike, caffeine is a mild diuretic and can mask chronic dehydration.

☕ **The 1:1 Student Coffee Rule:**
1. For every cup of coffee/chai, drink **1 full glass (250ml) of pure water** within 30 minutes.
2. Avoid using coffee as your primary study fluid—caffeine dehydration causes headaches, eye dryness, and 4 PM crashes.
3. Keep a 1-liter bottle at your desk and sip after each study Pomodoro (every 25 minutes).

💧 *Pro-Tip:* Try drinking a glass of water *before* your morning coffee. It kickstarts blood flow to your brain!`,
          actionLabel: 'Explore Focus Stretches',
          actionActivityId: 'act-5-3'
        };
      }

      // 5C. General / Daily Water Calculation & Strategy
      const estTargetLiters = stage === 'Advanced' ? '3.2 to 3.8' : (stage === 'Intermediate' ? '2.8 to 3.2' : '2.5 to 3.0');
      return {
        text: `Hey ${name}, staying hydrated is one of the highest ROI habits for students! A mere **2% drop in hydration reduces short-term memory and focus by up to 15%**.

💧 **Your Recommended Daily Target:** **${estTargetLiters} Liters** (tailored to your *${stage}* activity profile).

📅 **The 3-Bottle Student Hydration Blueprint:**
- 🌅 **Bottle 1 (Morning to 12 PM):** Drink 500ml right after waking up to rehydrate your brain, and finish the rest before lunch.
- ☀️ **Bottle 2 (12 PM to 5 PM):** Keep this bottle on your desk during lectures or study sessions.
- 🌙 **Bottle 3 (5 PM to 9 PM):** Drink during and after workouts; taper off 1 hour before bed to prevent sleep-disrupting bathroom trips.

💡 *Self-Check:* Your urine should be pale straw/light yellow. If it looks dark amber, drink a 300ml glass immediately!`,
        actionLabel: 'View Activity Timers',
        actionNavigate: 'activities'
      };
    }

    // 6. Wellness, Sleep, Exam Anxiety, Procrastination, Motivation
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
      prompt.includes('awake') ||
      prompt.includes('lazy') ||
      prompt.includes('procrastinat') ||
      prompt.includes('motivat') ||
      prompt.includes('burnout') ||
      prompt.includes('breathe') ||
      prompt.includes('breathwork');

    if (hasWellnessIntent) {
      // 6A. Exam Stress & Academic Anxiety Relief
      if (prompt.includes('stress') || prompt.includes('anxiety') || prompt.includes('panic') || prompt.includes('nervous') || prompt.includes('viva') || prompt.includes('exam')) {
        return {
          text: `Exam stress triggers your body's sympathetic "fight-or-flight" response, raising cortisol and narrowing cognitive focus. Let's immediately downregulate your nervous system, ${name}:

🌬️ **The Double Physiological Sigh (Fastest Stress Eraser):**
1. Take **two quick inhales through your nose** (one deep inhale, followed immediately by a sharp top-off sniff).
2. Exhale slowly and completely through your mouth with a long sigh (takes 6 seconds).
3. Repeat 3 to 4 times. This rapidly pops open collapsed alveoli in lungs and reduces heart rate within 30 seconds!

💡 *Exam Tip:* Take a 5-minute movement break between study blocks. Movement stimulates Brain-Derived Neurotrophic Factor (BDNF), which directly cements memory retention!`,
          actionLabel: 'Focus-Restoring Yoga Flow',
          actionActivityId: 'act-10-3'
        };
      }

      // 6B. Sleep hygiene & Late night wind down
      if (prompt.includes('sleep') || prompt.includes('insomnia') || prompt.includes('night') || prompt.includes('bed') || prompt.includes('awake') || prompt.includes('cant sleep') || prompt.includes('wind down')) {
        return {
          text: `Staring at code or textbooks late into the night bombards your eyes with blue light, delaying melatonin release. Here is your student sleep prep routine:

🌙 **The 10-Minute Hostel Sleep Protocol:**
1. **The 4-7-8 Breathing Trick:** Inhale quietly through nose for 4s, hold breath for 7s, exhale completely through mouth with a whoosh for 8s. Repeat 4 cycles.
2. **Viparita Karani (Legs Up The Wall):** Lie on your bed, swing legs up against the wall for 3 minutes. It drops blood pooling from your legs and activates your parasympathetic calm state.
3. **Screen Curfew:** Switch phone to warm night-mode and place face-down 15 minutes before closing your eyes.`,
          actionLabel: 'Hostel Bedside Mobility & Sleep Prep',
          actionActivityId: 'act-5-4'
        };
      }

      // 6C. Motivation & Beating Procrastination
      if (prompt.includes('motivat') || prompt.includes('lazy') || prompt.includes('procrastinat') || prompt.includes('start') || prompt.includes('habit')) {
        return {
          text: `You don't need willpower, ${name}—you just need momentum!

⚡ **The 2-Minute Fitness Rule for Students:**
> *"Tell yourself you're only going to do 2 minutes of stretching or 10 bodyweight squats."*

Once you start moving, dopamine kicks in and the friction disappears. You already have a **🔥 ${streak}-day streak** going and **${workoutsCount} workouts logged** in AayuMove! Don't break the chain.

Give yourself just **one 5-minute session** today. Your future self during finals will thank you!`,
          actionLabel: 'Do a 5-Min Express Move',
          actionActivityId: 'act-5-2'
        };
      }

      // 6D. Focus & Breathwork
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

    // 7. Workouts, Exercises, Muscle Groups & Fitness
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
      prompt.includes('bicep') ||
      prompt.includes('tricep') ||
      prompt.includes('shoulder') ||
      prompt.includes('glute') ||
      prompt.includes('stamina') ||
      prompt.includes('gym') ||
      prompt.includes('dorm') ||
      prompt.includes('hostel') ||
      prompt.includes('5-min') ||
      prompt.includes('5 min') ||
      prompt.includes('10 min') ||
      prompt.includes('15 min') ||
      prompt.includes('30 min');

    if (hasWorkoutIntent) {
      // 7A. Chest / Push-ups / Upper body
      if (prompt.includes('chest') || prompt.includes('pushup') || prompt.includes('push up') || prompt.includes('tricep') || prompt.includes('upper body')) {
        const act = findMatchingActivity(a => a.id === 'act-10-4' || a.id === 'act-15-1');
        return {
          text: `Building upper body strength in a dorm room is completely doable using bodyweight leverage, ${name}!

💥 **Hostel Upper Body / Chest Progression:**
1. **Standard or Incline Push-Ups (3 sets of 8-12):** Hands slightly wider than shoulders, keep elbows tucked at a 45° angle.
2. **Chair / Bed Tricep Dips (3 sets of 10-12):** Hands on edge of sturdy chair, lower hips till elbows hit 90°.
3. **Pike Push-Ups (3 sets of 6-8):** Hips in high V-shape; great for building boulder shoulders and upper chest.
4. **Doorframe Bodyweight Rows (3 sets of 10):** Grip a sturdy doorframe, lean back, and pull your chest to the frame for back & bicep balance.

💡 *Form Cue:* Keep your core and glutes locked like a rigid plank during every push-up!`,
          actionLabel: `Start: ${act.title}`,
          actionActivityId: act.id
        };
      }

      // 7B. Core / Abs / Flat belly
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

      // 7C. Legs / Glutes / Lower Body
      if (prompt.includes('leg') || prompt.includes('glute') || prompt.includes('quad') || prompt.includes('thigh') || prompt.includes('hamstring') || prompt.includes('squat') || prompt.includes('lunge')) {
        const act = findMatchingActivity(a => a.id === 'act-15-4' || a.id === 'act-10-4');
        return {
          text: `Sitting in lectures for hours deactivates your glutes ("glute amnesia") and tightens hip flexors. Let's wake up your lower body, ${name}!

🦵 **Express Dorm Leg & Glute Builder:**
1. **Air Squats (3 sets of 15):** Sit hips back like reaching for a low chair, drive up through your heels.
2. **Reverse Lunges (3 sets of 10/leg):** Stepping back protects your knees and focuses tension on glutes.
3. **Bulgarian Split Squats (2 sets of 8/leg):** Rest rear foot on your hostel bed/chair for intense unilateral quad development.
4. **Wall Sit (60s hold):** Back flat against the wall, thighs parallel to floor. Feel the burn!`,
          actionLabel: `Start: ${act.title}`,
          actionActivityId: act.id
        };
      }

      // 7D. Cardio / HIIT / Burn Fat in small space without noise
      if (prompt.includes('cardio') || prompt.includes('hiit') || prompt.includes('fat burn') || prompt.includes('sweat') || prompt.includes('stamina') || prompt.includes('jumping') || prompt.includes('quiet') || prompt.includes('2x2') || prompt.includes('noise')) {
        const act = findMatchingActivity(a => a.id === 'act-10-2' || a.id === 'act-15-2' || a.id === 'act-5-2');
        return {
          text: `You don't need a treadmill or a big running track to build great cardiovascular stamina, ${name}!

⚡ **Quiet Dorm HIIT Circuit (Roommate-Friendly):**
- **0:00 - 1:00:** Shadow boxing with high knee marching (rhythmic & silent)
- **1:00 - 2:30:** Fast speed squats (40s work / 20s rest)
- **2:30 - 4:00:** Low-impact speed skaters (side-to-side bounds on soft toes)
- **4:00 - 5:30:** Mountain climbers in rigid high plank
- **5:30 - 7:00:** Step-out burpees (no slamming on the floor)

Spikes your heart rate, torches calories, and floods your brain with fresh oxygen for exams!`,
          actionLabel: `Start: ${act.title}`,
          actionActivityId: act.id
        };
      }

      // 7E. 5-Minute Quick Energy Burst
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

      // 7F. General workout recommendation matching user profile
      const matchedAct = findMatchingActivity(a => a.difficulty === stage || a.goal === goal);
      return {
        text: `Awesome commitment, ${name}! For your **${stage}** fitness stage and goal to **${goal}**, here is your tailored student session:

📋 **Recommended Session:**
- **Activity:** **${matchedAct.title}** (${matchedAct.duration} mins)
- **Focus:** ${matchedAct.shortDescription}
- **Calories Burned:** ~${matchedAct.burnedCalories} kcal
- **Space Needed:** ${matchedAct.spaceNeeded}

Consistency beats intensity every single time. Doing this ${matchedAct.duration}-min routine today keeps your **${streak}-day streak** glowing!`,
        actionLabel: `Start ${matchedAct.title}`,
        actionActivityId: matchedAct.id
      };
    }

    // =========================================================================
    // 8. DYNAMIC ADAPTIVE FALLBACK FOR ANY OTHER QUESTION
    // =========================================================================
    const topicKeywords = rawPrompt
      .replace(/[^a-zA-Z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 3 && !['what', 'when', 'where', 'which', 'should', 'could', 'would', 'have', 'with', 'about', 'from', 'this', 'that', 'your', 'please'].includes(w.toLowerCase()));

    const keyTopicStr = topicKeywords.slice(0, 3).join(' ') || 'fitness & wellness';

    // Find the closest related activity based on text matching
    let bestActivity = activitiesData.find(a => 
      prompt.split(' ').some(word => word.length > 3 && (a.title.toLowerCase().includes(word) || a.category.toLowerCase().includes(word) || a.goal.toLowerCase().includes(word)))
    ) || activitiesData[1];

    return {
      text: `Thanks for asking about **${keyTopicStr}**, ${name}!

Here is how to approach this effectively as a student aiming to **${goal}** with a **${stage}** routine:

1. 🎯 **The Core Principle:** Keep healthy habits low-friction. Don't let busy class schedules or hostel limitations stop you from moving or fueling your body properly.
2. ⚡ **Practical Action Plan:** Squeeze in intentional micro-habits—whether it's a **${availableTime}** movement burst, keeping a water bottle at your study desk, or prioritizing clean **${diet}** fuel.
3. 🧠 **Mind-Body Benefit:** Small daily physical resets reduce exam cortisol and significantly increase cognitive focus for your assignments.

Would you like a specific step-by-step workout routine or nutrition recipe for this?`,
      actionLabel: `Try: ${bestActivity.title}`,
      actionActivityId: bestActivity.id
    };
  }
}
