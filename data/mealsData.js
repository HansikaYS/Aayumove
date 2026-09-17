// AayuMove Student Nutrition & Fuel Catalog
// Student-friendly, budget-conscious, varied, and practical for dorms, hostels, and homes.
// DISCLAIMER: For general wellness only. Not medical or clinical nutrition claims.

export const mealsData = [
  // --- BREAKFAST ---
  {
    id: 'meal-b-1',
    title: 'Hostel Kettle Power Oatmeal',
    category: 'Breakfast',
    diet: 'Vegetarian',
    prepTime: '5 mins',
    caloriesEstimate: '~320 kcal',
    nutritionalPurpose: 'Slow-release complex carbs for steady lecture focus & morning satiety.',
    studentTip: 'Made using just an electric kettle in your dorm room! No stove required.',
    ingredients: [
      '1/2 cup rolled oats or quick oats',
      'Hot water or warm milk from kettle',
      '1 sliced banana',
      '1 tbsp peanut butter',
      'Pinch of cinnamon or crushed almonds'
    ],
    instructions: [
      'Pour boiling kettle water/milk over oats in a bowl or mug.',
      'Cover with a plate for 3 minutes to let oats soften.',
      'Stir in peanut butter for creamy protein and top with fresh banana slices.'
    ]
  },
  {
    id: 'meal-b-2',
    title: 'High-Protein Double Egg Bhurji & Toast',
    category: 'Breakfast',
    diet: 'Eggetarian',
    prepTime: '8 mins',
    caloriesEstimate: '~360 kcal',
    nutritionalPurpose: 'Complete amino acids and choline for memory retention and muscle repair.',
    studentTip: 'Super fast and budget-friendly for college students.',
    ingredients: [
      '2 whole eggs + 1 egg white (optional)',
      '1/2 finely chopped onion & 1 green chilli',
      'Pinch of turmeric, salt, and black pepper',
      '2 slices of whole wheat or multigrain bread',
      '1 tsp cooking oil or butter'
    ],
    instructions: [
      'Whisk eggs with turmeric, salt, and pepper in a cup.',
      'Saute onions and chilli in a pan for 1 minute.',
      'Pour in eggs, scramble over medium heat for 2 minutes, and serve with toasted bread.'
    ]
  },
  {
    id: 'meal-b-3',
    title: 'Sprouted Moong & Pomegranate Chaat',
    category: 'Breakfast',
    diet: 'Vegan',
    prepTime: '4 mins',
    caloriesEstimate: '~240 kcal',
    nutritionalPurpose: 'Micronutrient-dense plant protein and antioxidants with zero cooking.',
    studentTip: 'Buy pre-sprouted moong from local market or soak overnight in your dorm.',
    ingredients: [
      '1 cup green moong sprouts',
      '1/4 cup pomegranate seeds or chopped cucumber',
      '1 tbsp chopped coriander & squeeze of lemon juice',
      'Pinch of chaat masala and black salt'
    ],
    instructions: [
      'Combine sprouts, cucumber/pomegranate in a student bowl.',
      'Sprinkle chaat masala, squeeze fresh lemon, and toss well.',
      'Enjoy crisp, refreshing energy that does not make you sleepy in morning classes.'
    ]
  },
  {
    id: 'meal-b-4',
    title: 'Peanut Butter Banana Roti Roll',
    category: 'Breakfast',
    diet: 'Vegetarian',
    prepTime: '3 mins',
    caloriesEstimate: '~290 kcal',
    nutritionalPurpose: 'Pocket-friendly portable energy wrap for days you are rushing to 8 AM class.',
    studentTip: 'Use leftover mess chapati or whole wheat tortilla.',
    ingredients: [
      '1 whole wheat roti / chapati',
      '1.5 tbsp peanut butter',
      '1 ripe banana',
      'Drizzle of honey or chia seeds (optional)'
    ],
    instructions: [
      'Spread peanut butter evenly across the warm roti.',
      'Place whole banana along one edge, roll tightly into a wrap.',
      'Grab and eat on your walk to college!'
    ]
  },

  // --- LUNCH ---
  {
    id: 'meal-l-1',
    title: 'Paneer / Tofu Tikka Rice Bowl',
    category: 'Lunch',
    diet: 'Vegetarian',
    prepTime: '12 mins',
    caloriesEstimate: '~440 kcal',
    nutritionalPurpose: 'Balanced macro ratio (carbs, protein, healthy fats) to sustain afternoon labs.',
    studentTip: 'Paneer or firm tofu can be pan-seared in 4 minutes with basic pantry spices.',
    ingredients: [
      '100g paneer cubes (or firm tofu for vegan option)',
      '1 cup cooked basmati or brown rice (mess rice)',
      '1/2 sliced bell pepper and onions',
      '1 tbsp curd/yogurt + pinch of garam masala & chili powder'
    ],
    instructions: [
      'Coat paneer/tofu in curd and spices, sear on pan for 3-4 minutes until golden edges.',
      'Toss in sliced bell peppers for crunch.',
      'Layer over warm rice and serve with fresh cucumber slices.'
    ]
  },
  {
    id: 'meal-l-2',
    title: 'Mess Dal Booster with Soya Chunks',
    category: 'Lunch',
    diet: 'High-Protein Student',
    prepTime: '8 mins',
    caloriesEstimate: '~380 kcal',
    nutritionalPurpose: 'Doubles the protein of regular hostel dal without changing the mess menu.',
    studentTip: 'Keep a small pack of soya chunks in your room; boil in kettle for 5 mins!',
    ingredients: [
      '1 bowl of standard hostel/college mess dal',
      '1/2 cup mini soya chunks (boiled in water, squeezed dry)',
      '1 tsp ghee or lemon juice',
      'Side of 2 chapatis or salad'
    ],
    instructions: [
      'Boil soya chunks in kettle/pan for 5 minutes and squeeze out excess water.',
      'Mix warm soya chunks directly into the hot mess dal.',
      'Adds 15g+ of pure plant protein instantly to your ordinary mess meal!'
    ]
  },
  {
    id: 'meal-l-3',
    title: 'Student Grilled Chicken or Chickpea Wrap',
    category: 'Lunch',
    diet: 'Non-Vegetarian',
    prepTime: '10 mins',
    caloriesEstimate: '~420 kcal',
    nutritionalPurpose: 'High lean protein for muscle repair and prolonged fullness during study blocks.',
    studentTip: 'Shredded chicken breast or canned chickpeas both work wonderfully.',
    ingredients: [
      '100g cooked/boiled chicken breast (or boiled chickpeas)',
      '1 large whole wheat wrap or 2 parathas',
      'Shredded lettuce/cabbage and tomato slices',
      '1 tbsp yogurt-mint dip or mustard'
    ],
    instructions: [
      'Toss warm chicken/chickpeas with spices and yogurt-mint dip.',
      'Lay greens and sliced tomato onto wrap, spoon in filling.',
      'Roll tightly and slice in half.'
    ]
  },

  // --- SMART SNACKS & STUDY FUEL ---
  {
    id: 'meal-s-1',
    title: 'Late-Night Roasted Makhana & Peanut Crunch',
    category: 'Smart Snacks',
    diet: 'Budget-Friendly',
    prepTime: '4 mins',
    caloriesEstimate: '~170 kcal',
    nutritionalPurpose: 'Low-glycemic crunchy snack that satisfies midnight cravings without sleep disruption.',
    studentTip: 'Costs a fraction of potato chips and leaves you energized, not bloated.',
    ingredients: [
      '1.5 cups fox nuts (makhana)',
      '2 tbsp roasted peanuts',
      '1/2 tsp ghee or olive oil',
      'Pinch of turmeric, chaat masala, and pink salt'
    ],
    instructions: [
      'Toss makhana and peanuts in pan with 1/2 tsp ghee.',
      'Roast on low heat until crisp (3 mins).',
      'Dust with chaat masala and munch during late study sessions.'
    ]
  },
  {
    id: 'meal-s-2',
    title: 'Exam Focus Curd & Berry Parfait',
    category: 'Smart Snacks',
    diet: 'Vegetarian',
    prepTime: '2 mins',
    caloriesEstimate: '~190 kcal',
    nutritionalPurpose: 'Probiotics for gut health and tyrosine to support neurotransmitters during exam stress.',
    studentTip: 'Use simple fresh dahi (curd) readily available at any campus store.',
    ingredients: [
      '1 cup chilled fresh curd / Greek yogurt',
      '1 tsp honey or jaggery powder',
      'Handful of pomegranate seeds or chopped apple',
      '1 tbsp roasted pumpkin or sunflower seeds'
    ],
    instructions: [
      'Spoon curd into a glass or mug.',
      'Drizzle honey, top with fruit and crunchy seeds.',
      'Eat chilled for a fast mental recharge.'
    ]
  },
  {
    id: 'meal-s-3',
    title: 'Boiled Egg Chaat with Mint & Pepper',
    category: 'Smart Snacks',
    diet: 'Eggetarian',
    prepTime: '3 mins',
    caloriesEstimate: '~150 kcal',
    nutritionalPurpose: '12 grams of pure protein snack in 3 minutes to stop afternoon brain fog.',
    studentTip: 'Get boiled eggs from campus canteen or boil in dorm kettle.',
    ingredients: [
      '2 hard-boiled eggs',
      '1 tbsp chopped onion and green coriander',
      'Pinch of black salt, pepper, and chaat masala',
      'Juice of 1/4 lemon'
    ],
    instructions: [
      'Slice eggs into halves or quarters.',
      'Sprinkle onions, coriander, spices, and a squeeze of fresh lemon.',
      'Delicious, savory, and keeps energy rock-steady.'
    ]
  },

  // --- DINNER & RECOVERY ---
  {
    id: 'meal-d-1',
    title: 'Light Khichdi with Curd & Sauteed Veggies',
    category: 'Dinner',
    diet: 'Vegetarian',
    prepTime: '15 mins',
    caloriesEstimate: '~350 kcal',
    nutritionalPurpose: 'Easy on digestive tract, promotes melatonin release for deep restorative sleep.',
    studentTip: 'Comforting student staple that prevents bedtime acid reflux.',
    ingredients: [
      '1 bowl comforting moong dal khichdi',
      '1/2 cup fresh dahi (curd)',
      '1 roasted papad (optional)',
      'Squeeze of fresh lemon'
    ],
    instructions: [
      'Enjoy warm khichdi with a bowl of cooling curd.',
      'Ideal dinner after a busy day of lectures and evening workouts.'
    ]
  },
  {
    id: 'meal-d-2',
    title: 'Hostel Paneer / Egg Bhurji Roll with Salad',
    category: 'Dinner',
    diet: 'High-Protein Student',
    prepTime: '10 mins',
    caloriesEstimate: '~410 kcal',
    nutritionalPurpose: 'High casein/egg protein to repair muscles throughout the night while you sleep.',
    studentTip: 'Pair with raw cucumber and carrot sticks for hydration.',
    ingredients: [
      '80g crumbled paneer or 2 scrambled eggs',
      '2 whole wheat rotis',
      'Chopped onions, tomatoes, and pinch of oregano/jeera',
      'Cucumber slices on the side'
    ],
    instructions: [
      'Warm the rotis and roll the seasoned protein inside.',
      'Eat alongside sliced cucumbers for fiber and hydration.'
    ]
  }
];
