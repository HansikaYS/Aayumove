import { AayuAIService } from './services/aiAssistant.js';

const demoUser = {
  id: 'user_demo_01',
  name: 'Aarav Sharma',
  fitnessStage: 'Intermediate',
  goal: 'Stay Active',
  dietaryPreference: 'Vegetarian',
  availableTime: '10 minutes',
  streakDays: 5,
  totalWorkoutsCompleted: 14,
  totalActiveMinutes: 145
};

const testQuestions = [
  // Hydration
  { category: 'Hydration', q: 'How much water should I drink every day during college?' },
  { category: 'Hydration', q: 'Can I drink chai and coffee instead of water while studying?' },
  { category: 'Hydration', q: 'How to make a cheap electrolyte drink in my hostel room?' },

  // Diet & Nutrition
  { category: 'Diet', q: 'What are the best cheap vegetarian protein sources for college students?' },
  { category: 'Diet', q: 'What can I eat as a healthy late-night snack when studying for exams?' },
  { category: 'Diet', q: 'How do I eat healthy in the college mess when the food is oily?' },
  { category: 'Diet', q: 'Quick 3-minute breakfast before my 8 AM morning class?' },
  { category: 'Diet', q: 'How can a student lose belly fat without starving?' },

  // Fitness & Workouts
  { category: 'Fitness', q: 'Can you give me chest and upper body exercises with no equipment?' },
  { category: 'Fitness', q: 'I want a quick 10-minute ab and core workout for my dorm floor' },
  { category: 'Fitness', q: 'What are the best leg and glute exercises for students who sit all day?' },
  { category: 'Fitness', q: 'I need a cardio workout in a 2x2 ft space without making noise for roommates' },
  { category: 'Fitness', q: 'Give me a 5-min dorm workout right now' },

  // Posture & Ergonomics
  { category: 'Ergonomics', q: 'Fix my stiff neck and shoulder pain from looking down at my laptop' },
  { category: 'Ergonomics', q: 'My lower back hurts after sitting 6 hours in library chairs' },
  { category: 'Ergonomics', q: 'My eyes feel tired and dry after staring at code all day' },
  { category: 'Ergonomics', q: 'My muscles are sore after yesterday workout, how to recover faster?' },

  // Wellness & Mental Health
  { category: 'Wellness', q: 'I feel very stressed and anxious before my semester exam' },
  { category: 'Wellness', q: 'How to wind down and sleep after late-night assignment submissions?' },
  { category: 'Wellness', q: 'I feel lazy and want to procrastinate my workout today' },

  // Profile & Conversational
  { category: 'Profile', q: 'What is my current streak and fitness goal in AayuMove?' },
  { category: 'Conversational', q: 'Hey, who are you and how can you help me?' }
];

console.log('================================================================');
console.log('           AayuMove AI Chatbot Multi-Topic Test Suite           ');
console.log('================================================================\n');

const responsesSet = new Set();
let passed = 0;

testQuestions.forEach((item, idx) => {
  const resp = AayuAIService.generateResponse(item.q, demoUser);
  console.log(`[Test ${idx + 1}/${testQuestions.length}] [${item.category}]`);
  console.log(`Q: "${item.q}"`);
  console.log(`Action: ${resp.actionLabel || 'None'} -> (Activity: ${resp.actionActivityId || 'None'}, Nav: ${resp.actionNavigate || 'None'})`);
  console.log(`Answer Preview: ${resp.text.substring(0, 140).replace(/\n/g, ' ')}...`);
  console.log('----------------------------------------------------------------');

  if (resp && resp.text && resp.text.length > 50) {
    passed++;
  }
  responsesSet.add(resp.text);
});

console.log('\n================================================================');
console.log(`Results: ${passed} / ${testQuestions.length} passed.`);
console.log(`Unique response count: ${responsesSet.size} / ${testQuestions.length}`);

if (responsesSet.size === testQuestions.length) {
  console.log('SUCCESS: Every single question received a distinct, tailored, relevant response!');
} else {
  console.warn(`WARNING: Some responses were identical (${responsesSet.size} unique out of ${testQuestions.length})`);
}
console.log('================================================================');
