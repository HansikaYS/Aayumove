// Aayu AI - Personalized Student Fitness & Wellness Reasoning Engine
// Provides dynamic, tailored, empathetic, and concise responses based on user context.
// DISCLAIMER: Wellness suggestions only. Not medical or clinical advice.

export class AayuAIService {
  static getGreeting(user) {
    const name = user?.name ? user.name.split(' ')[0] : 'fellow student';
    const goal = user?.goal || 'stay healthy';
    const time = user?.availableTime || '10 minutes';
    return `Hey ${name}! 👋 I'm **Aayu AI**, your adaptable student fitness & wellness buddy. I know your goal is to **${goal}** and you usually have **${time}** between classes. How can I help you move or recharge right now?`;
  }

  static getQuickPrompts(user) {
    return [
      '⚡ Need a 5-min dorm workout right now',
      '🥗 Quick late-night study snack (no guilt)',
      '🧘 Fix my stiff neck from laptop study',
      '🔥 Quick hostel room core exercise',
      '😴 How to wind down after late night assignments',
      '🎯 Stay motivated when exam stress hits'
    ];
  }

  static generateResponse(userPrompt, user) {
    const prompt = userPrompt.toLowerCase();
    const name = user?.name ? user.name.split(' ')[0] : 'Friend';
    const stage = user?.fitnessStage || 'Beginner';
    const goal = user?.goal || 'Stay Active';
    const diet = user?.dietaryPreference || 'Vegetarian';
    const availableTime = user?.availableTime || '10 minutes';

    // 1. Stiff neck / posture / desk pain
    if (prompt.includes('neck') || prompt.includes('posture') || prompt.includes('back') || prompt.includes('spine') || prompt.includes('hunch')) {
      return {
        text: `Hey ${name}, long hours over books or laptops tighten your suboccipital muscles and upper traps. Here is an instant 3-minute desk reset:

1. **Chin Tucks (30s):** Look straight ahead, gently slide your chin straight backward as if making a double chin. Hold 3s, repeat 5 times.
2. **Chair Cat-Cow (60s):** Hands on thighs; inhale and arch your chest forward, exhale and round your back.
3. **Eagle Arm Stretch (60s):** Cross right elbow over left, interlace forearms, and gently lift elbows to shoulder height.

💡 *Aayu Tip:* Try our **"Desk Neck & Spine Decompression"** in the Activities tab for full guided timing!`,
        actionLabel: 'Launch 5-min Desk Reset',
        actionActivityId: 'act-5-1'
      };
    }

    // 2. 5-min or quick dorm workout
    if (prompt.includes('5-min') || prompt.includes('5 min') || prompt.includes('quick workout') || prompt.includes('dorm') || prompt.includes('break')) {
      return {
        text: `Perfect, ${name}! You don't need gym gear or a lot of space. Given your **${stage}** stage, here is an express circuit you can do in a 2x2 ft area:

- **0:00 - 1:00:** Silent shadow boxing with high-knee march
- **1:00 - 2:30:** 20 Bodyweight squats or chair pulses
- **2:30 - 4:00:** Incline push-ups against your desk edge or wall
- **4:00 - 5:00:** Standing side bends & 3 deep diaphragmatic breaths

You'll elevate heart rate, pump oxygen to your prefrontal cortex, and avoid post-lunch sluggishness!`,
        actionLabel: 'Start 5-min Dorm Energy Burst',
        actionActivityId: 'act-5-2'
      };
    }

    // 3. Late night snack / food / diet / kettle
    if (prompt.includes('snack') || prompt.includes('food') || prompt.includes('diet') || prompt.includes('eat') || prompt.includes('kettle') || prompt.includes('hungry')) {
      let snackIdea = 'roasted makhana (fox nuts) with a dash of chaat masala and peanuts';
      if (diet.includes('Egg')) {
        snackIdea = 'two boiled eggs with black salt and lemon juice (quick 12g protein)';
      } else if (diet.includes('Vegan')) {
        snackIdea = 'crunchy moong sprouts with pomegranate and lemon juice';
      }

      return {
        text: `Studying burns glucose, so midnight cravings are super real! Since your preference is **${diet}**, try this:

🍴 **Smart Pick:** Go for **${snackIdea}** or a cup of warm milk/oats from your kettle.
⚠️ **Avoid:** Sugary packaged noodles or deep-fried chips—they cause an insulin spike followed by an energy crash that ruins your memory retention.
💧 **Pro-Tip:** Drink a glass of room-temperature water first. Often, study dehydration masks itself as hunger!`,
        actionLabel: 'View Student Diet Section',
        actionNavigate: 'diet'
      };
    }

    // 4. Core / abs / belly
    if (prompt.includes('core') || prompt.includes('abs') || prompt.includes('belly') || prompt.includes('plank')) {
      return {
        text: `Strong abs are essential for students, ${name}, because they support your lower back when sitting on uncomfortable library chairs!

Try this quick **Dorm Floor Core Triad**:
1. **Deadbugs (45s):** Keeps the lumbar spine safely glued to the floor.
2. **Bicycle Crunches (45s):** Controlled rotation to target obliques.
3. **Forearm Plank (30s hold):** Squeeze your glutes and push the floor away.

No noise, no jumping, and 100% floor-friendly!`,
        actionLabel: 'Open Hostel Core & Abs Blaster',
        actionActivityId: 'act-10-1'
      };
    }

    // 5. Sleep / relax / insomnia / night routine
    if (prompt.includes('sleep') || prompt.includes('night') || prompt.includes('relax') || prompt.includes('tired') || prompt.includes('stress') || prompt.includes('anxiety')) {
      return {
        text: `After staring at code or textbooks all day, your brain's beta waves are still buzzing. Let's downregulate your sympathetic nervous system:

🌙 **The 4-7-8 Breathing Trick:**
Inhale through nose for 4s, hold breath for 7s, exhale slowly through mouth with a whoosh for 8s. Repeat 4 cycles.

🛌 **Physical Reset:**
Lie on your bed, swing your legs up against the wall (Viparita Karani) for 3 minutes. It drops blood pooling in your legs and lowers resting heart rate.`,
        actionLabel: 'Bedside Mobility Routine',
        actionActivityId: 'act-5-4'
      };
    }

    // 6. Motivation / exams / consistency
    if (prompt.includes('motivat') || prompt.includes('lazy') || prompt.includes('exam') || prompt.includes('study') || prompt.includes('tired') || prompt.includes('streak')) {
      return {
        text: `Remember the AayuMove mantra, ${name}:
> *"Fitness that adapts to your day, not the other way around."*

You don't need a grueling 60-minute gym workout to be fit. Doing just **5 to 10 minutes** of intentional movement:
1. Clears cortisol (the stress hormone from exams).
2. Increases Brain-Derived Neurotrophic Factor (BDNF) which directly aids exam recall!
3. Keeps your **${user?.streakDays || 1}-day streak** alive!

Give yourself permission to do just **one 5-minute move** today. You've got this!`,
        actionLabel: 'Do a 5-min Move',
        actionActivityId: 'act-5-2'
      };
    }

    // Default intelligent fallback tailored to profile
    return {
      text: `Great question, ${name}! As a student aiming to **${goal}** with a **${stage}** routine, the key is keeping your habits friction-free.

Here is what I recommend for you today:
- **Movement:** Squeeze in a **${availableTime}** routine between your study blocks. Even a brief session boosts academic focus.
- **Nutrition:** Stick to clean, brain-boosting **${diet}** fuel to avoid sluggishness during lectures.
- **Consistency:** Small daily moves compound into incredible health and mental resilience.

Is there a specific workout or nutrition tip you'd like guidance on right now?`,
      actionLabel: 'Explore Recommended Activities',
      actionNavigate: 'activities'
    };
  }
}
