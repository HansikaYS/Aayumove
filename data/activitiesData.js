// AayuMove Activities Catalog - Tailored specifically for students
// Supports 5m, 10m, 15m, and 30+m durations for dorms, hostels, study desks, and home

export const activitiesData = [
  // --- 5 MINUTES ROUTINES ---
  {
    id: 'act-5-1',
    title: 'Desk Neck & Spine Decompression',
    duration: 5,
    difficulty: 'Beginner',
    category: 'Mobility & Stretching',
    goal: 'General Wellness',
    spaceNeeded: 'At Study Desk',
    burnedCalories: 18,
    shortDescription: 'Instant relief from laptop hunch and study neck stiffness.',
    benefits: [
      'Releases trapped tension in upper trapezius and suboccipital muscles',
      'Restores blood flow to brain for sharper exam study focus',
      'Requires zero equipment, can be done sitting in your study chair'
    ],
    instructions: [
      { step: 1, name: 'Seated Chin Tucks & Neck Rolls', durationSec: 60, tips: 'Gently tuck chin toward chest, roll slowly from ear to shoulder.' },
      { step: 2, name: 'Seated Spinal Twist', durationSec: 60, tips: 'Hold chair armrest or desk edge, twist gently left 30s, then right 30s.' },
      { step: 3, name: 'Eagle Arm Shoulder Opener', durationSec: 90, tips: 'Wrap elbows and forearms together, lift elbows to chin level to stretch upper back.' },
      { step: 4, name: 'Chest Expansion & Deep Rib Breathing', durationSec: 90, tips: 'Interlace fingers behind back, puff chest outward, take 5 slow belly breaths.' }
    ]
  },
  {
    id: 'act-5-2',
    title: '5-Min Dorm Energy Burst',
    duration: 5,
    difficulty: 'Beginner',
    category: 'Cardio',
    goal: 'Stay Active',
    spaceNeeded: 'Small Dorm Space (2x2 ft)',
    burnedCalories: 35,
    shortDescription: 'Quick cardiovascular wakeup when you feel sluggish before lectures.',
    benefits: [
      'Surges dopamine and endorphins to beat post-lunch study sleepiness',
      'Gets resting heart rate into active zone in under 3 minutes',
      'Silent footwork options so hostel roommates are not disturbed'
    ],
    instructions: [
      { step: 1, name: 'Silent Shadow Boxing & March', durationSec: 60, tips: 'Punch forward with rhythm while softly marching in place.' },
      { step: 2, name: 'Half-Jacks or Fast High Knees', durationSec: 60, tips: 'Step side to side rapidly or jog softly on toes.' },
      { step: 3, name: 'Air Squat Pulses', durationSec: 90, tips: 'Lower hips to chair height and pulse gently to fire up glutes and quads.' },
      { step: 4, name: 'Wall Push-ups to Arm Swings', durationSec: 90, tips: 'Press against wall or sturdy desk, followed by fluid arm circles.' }
    ]
  },
  {
    id: 'act-5-3',
    title: 'Study-Break Eye & Posture Reset',
    duration: 5,
    difficulty: 'Beginner',
    category: 'Desk Yoga',
    goal: 'General Wellness',
    spaceNeeded: 'At Study Desk',
    burnedCalories: 15,
    shortDescription: '20-20-20 eye relief, wrist mobility, and thoracic spine opener.',
    benefits: [
      'Prevents digital eye fatigue and headaches from prolonged screen time',
      'Alleviates mouse/keyboard repetitive wrist strain',
      'Calms study anxiety before quizzes and presentations'
    ],
    instructions: [
      { step: 1, name: 'Palming Eye Relaxation', durationSec: 45, tips: 'Rub palms together till warm, cup gently over closed eyes, breathe deeply.' },
      { step: 2, name: 'Distant Focus Eye Reset', durationSec: 45, tips: 'Gaze at an object 20+ feet away or look out the window to relax eye focus muscles.' },
      { step: 3, name: 'Wrist Flexor & Extensor Stretch', durationSec: 60, tips: 'Extend arm, gently pull fingers back 30s each hand.' },
      { step: 4, name: 'Chair Cat-Cow Flow', durationSec: 75, tips: 'Hands on knees; arch spine forward inhaling, round spine back exhaling.' },
      { step: 5, name: 'Standing Side Reach & Yawn', durationSec: 75, tips: 'Reach both arms overhead, bend sideways, open ribcage.' }
    ]
  },
  {
    id: 'act-5-4',
    title: 'Hostel Bedside Mobility & Sleep Prep',
    duration: 5,
    difficulty: 'Beginner',
    category: 'Mobility & Stretching',
    goal: 'General Wellness',
    spaceNeeded: 'Bed or Floor Mat',
    burnedCalories: 14,
    shortDescription: 'Gentle restorative movements to downregulate your nervous system before sleep.',
    benefits: [
      'Lowers cortisol and releases tight hip flexors from long hours sitting',
      'Improves deep sleep latency after late-night study sessions',
      'Gentle passive movements that relax muscles'
    ],
    instructions: [
      { step: 1, name: 'Kneeling Child’s Pose', durationSec: 75, tips: 'Sit on heels, extend arms forward on mattress or floor, forehead down.' },
      { step: 2, name: 'Supine Knee-to-Chest Hug', durationSec: 75, tips: 'Lie flat, gently pull knees toward chest, rock softly side to side.' },
      { step: 3, name: 'Lying Spinal Twist', durationSec: 75, tips: 'Arms out wide, drop knees to right 35s, then left 35s.' },
      { step: 4, name: 'Legs Up Against Wall / Box Breathing', durationSec: 75, tips: 'Elevate legs, inhale 4s, hold 4s, exhale 4s, hold 4s.' }
    ]
  },

  // --- 10 MINUTES ROUTINES ---
  {
    id: 'act-10-1',
    title: 'Hostel Core & Abs Blaster',
    duration: 10,
    difficulty: 'Intermediate',
    category: 'Strength',
    goal: 'Build Strength',
    spaceNeeded: '1 Floor Mat Area',
    burnedCalories: 68,
    shortDescription: 'Targeted midsection strengthening to protect student lower backs.',
    benefits: [
      'Builds strong lumbar support to eliminate slouching in lecture halls',
      'Zero gear required; quiet bodyweight moves',
      'Boosts core endurance and stability'
    ],
    instructions: [
      { step: 1, name: 'Deadbugs & Hollow Hold Prep', durationSec: 120, tips: 'Opposite arm and leg lower slowly without letting lower back arch.' },
      { step: 2, name: 'Bicycle Crunches with 2s Pause', durationSec: 150, tips: 'Focus on rotation from ribs, not pulling your neck.' },
      { step: 3, name: 'Elbow Plank & Hip Dips', durationSec: 150, tips: 'Keep body in straight rigid line, squeeze glutes and abs.' },
      { step: 4, name: 'Glute Bridges to Reverse Crunch', durationSec: 180, tips: 'Drive through heels to lift hips, then roll hips off ground.' }
    ]
  },
  {
    id: 'act-10-2',
    title: 'Express HIIT Study-Break Torch',
    duration: 10,
    difficulty: 'Intermediate',
    category: 'HIIT',
    goal: 'Lose Weight',
    spaceNeeded: 'Small Dorm Space',
    burnedCalories: 95,
    shortDescription: 'High-efficiency interval workout designed to spike metabolism fast.',
    benefits: [
      'Maximizes calorie burn in minimal student time window',
      'Triggers post-exercise oxygen consumption (EPOC)',
      'Sharpens cognitive stamina for upcoming assignments'
    ],
    instructions: [
      { step: 1, name: 'Warmup Jog & Arm Windmills', durationSec: 60, tips: 'Loosen up joints and bring body temperature up.' },
      { step: 2, name: 'Fast Bodyweight Squats (40s on / 20s rest x 2)', durationSec: 120, tips: 'Drop hips down to parallel, power up through heels.' },
      { step: 3, name: 'Speed Skaters / Lateral Bounds (40s on / 20s rest x 2)', durationSec: 120, tips: 'Hop side to side softly, activating stabilizing ankles and hips.' },
      { step: 4, name: 'Mountain Climbers (40s on / 20s rest x 2)', durationSec: 120, tips: 'Drive knees toward chest in high plank without bouncing hips.' },
      { step: 5, name: 'Shadow Boxing Spurt & Cool Down', durationSec: 180, tips: 'Fast 1-2 punch combos, followed by slow recovery breathing.' }
    ]
  },
  {
    id: 'act-10-3',
    title: 'Focus-Restoring Yoga Flow',
    duration: 10,
    difficulty: 'Beginner',
    category: 'Yoga',
    goal: 'General Wellness',
    spaceNeeded: 'Floor or Mat',
    burnedCalories: 40,
    shortDescription: 'Gentle dynamic sun salutations and hip openers to de-stress.',
    benefits: [
      'Dissolves tightness in hip flexors caused by all-day library sitting',
      'Harmonizes breath and movement to quiet academic anxiety',
      'Invigorates joints without needing athletic gear or showering afterward'
    ],
    instructions: [
      { step: 1, name: 'Mountain Pose to Overhead Reach', durationSec: 90, tips: 'Ground feet evenly, reach fingertips to ceiling, lengthen spine.' },
      { step: 2, name: 'Low Lunge to Half Splits Flow', durationSec: 180, tips: 'Step right foot forward for hip stretch 90s, switch to left foot 90s.' },
      { step: 3, name: 'Downward Facing Dog to Cobra', durationSec: 180, tips: 'Pedal heels down gently, ripple forward into soft backbend.' },
      { step: 4, name: 'Seated Butterfly & Forward Fold', durationSec: 150, tips: 'Soles of feet together, let knees drop, fold gently forward.' }
    ]
  },
  {
    id: 'act-10-4',
    title: 'Quick Dorm Push & Squat Calisthenics',
    duration: 10,
    difficulty: 'Beginner',
    category: 'Calisthenics',
    goal: 'Build Strength',
    spaceNeeded: 'Small Dorm Space',
    burnedCalories: 75,
    shortDescription: 'Compound foundational strength movements for upper and lower body.',
    benefits: [
      'Strengthens chest, triceps, shoulders, and legs simultaneously',
      'Great for beginners looking to build genuine functional strength',
      'No gym membership required'
    ],
    instructions: [
      { step: 1, name: 'Incline / Knee / Standard Push-Ups (3 sets of 8-12)', durationSec: 180, tips: 'Elbows at 45 degree angle, tight core throughout.' },
      { step: 2, name: 'Tempo Chair Squats (3 sets of 12)', durationSec: 180, tips: '3 seconds down, 1 second hold, explode up.' },
      { step: 3, name: 'Doorframe Bodyweight Rows (3 sets of 10)', durationSec: 150, tips: 'Grip sturdy doorframe, lean back, pull chest toward frame.' },
      { step: 4, name: 'Calf Raises & Arm Stretches', durationSec: 90, tips: 'Rise up high on toes, squeeze calves at top, shake out arms.' }
    ]
  },

  // --- 15 MINUTES ROUTINES ---
  {
    id: 'act-15-1',
    title: 'Dorm Room Calisthenics Power Circuit',
    duration: 15,
    difficulty: 'Intermediate',
    category: 'Calisthenics',
    goal: 'Build Strength',
    spaceNeeded: 'Dorm / Room Floor',
    burnedCalories: 120,
    shortDescription: 'Full-body muscle activation using bodyweight leverage and floor space.',
    benefits: [
      'Builds lean athletic muscle with zero equipment',
      'Progressive difficulty easily modified by leverage',
      'High muscle recruitment in an efficient 15-minute window'
    ],
    instructions: [
      { step: 1, name: 'Joint Mobility & Arm Rotations', durationSec: 90, tips: 'Warm up shoulders, wrists, and hips.' },
      { step: 2, name: 'Diamond / Standard Push-Up Circuit', durationSec: 210, tips: 'Perform 10-15 reps with controlled tempo, rest 30s.' },
      { step: 3, name: 'Bulgarian Split Squats (Bed or Chair)', durationSec: 240, tips: 'Rear foot elevated on bed/chair, 10 reps per leg x 2.' },
      { step: 4, name: 'Pike Push-ups (Shoulder Builder)', durationSec: 180, tips: 'Hips high in V-shape, lower crown of head toward floor.' },
      { step: 5, name: 'Plank Shoulder Taps to Bear Crawl Hold', durationSec: 180, tips: 'Keep hips square and motionless while tapping shoulders.' }
    ]
  },
  {
    id: 'act-15-2',
    title: '15-Min Fat-Burn Cardio Surge',
    duration: 15,
    difficulty: 'Intermediate',
    category: 'Cardio',
    goal: 'Lose Weight',
    spaceNeeded: 'Dorm / Hostel Space',
    burnedCalories: 145,
    shortDescription: 'Rhythmic athletic conditioning to torch calories and build stamina.',
    benefits: [
      'Elevates cardiovascular fitness and lung capacity',
      'Helps maintain healthy body composition during sedentary study periods',
      'Energizes the whole body without requiring a treadmill or track'
    ],
    instructions: [
      { step: 1, name: 'Dynamic Warmup & Toe Touches', durationSec: 120, tips: 'Get the blood moving through hamstrings and shoulders.' },
      { step: 2, name: 'Squat Jumps / Fast Squats', durationSec: 180, tips: 'Power off toes or stay low-impact with fast rhythmic air squats.' },
      { step: 3, name: 'Burpee Step-Outs / Floor Touch Hops', durationSec: 210, tips: 'Step hands to floor, kick back to plank, stand tall and clap.' },
      { step: 4, name: 'High-Knee Jog to Lateral Shuffles', durationSec: 210, tips: 'Keep chest upright, move with light springy feet.' },
      { step: 5, name: 'Cooling Down Stretches', durationSec: 180, tips: 'Quad stretches, hamstring fold, deep diaphragmatic breaths.' }
    ]
  },
  {
    id: 'act-15-3',
    title: 'Stress-Melting Deep Mobility Routine',
    duration: 15,
    difficulty: 'Beginner',
    category: 'Mobility & Stretching',
    goal: 'Improve Fitness',
    spaceNeeded: 'Floor or Mat',
    burnedCalories: 60,
    shortDescription: 'Full kinetic chain restorative mobility targeting hips, spine, and shoulders.',
    benefits: [
      'Reverses anterior pelvic tilt and forward head posture',
      'Restores full joint range of motion',
      'Provides mental clarity and emotional stress relief'
    ],
    instructions: [
      { step: 1, name: 'World’s Greatest Stretch Flow', durationSec: 210, tips: 'Deep lunge with thoracic arm rotation, 90s each side.' },
      { step: 2, name: '90/90 Hip Mobility Switches', durationSec: 210, tips: 'Sit on floor, rotate knees from right to left smoothly.' },
      { step: 3, name: 'Puppy Dog Shoulder Extension', durationSec: 180, tips: 'Hips over knees, melt chest and forehead to floor.' },
      { step: 4, name: 'Pigeon Pose / Figure-4 Stretch', durationSec: 210, tips: 'Stretch deep glutes and piriformis, 90s per leg.' },
      { step: 5, name: 'Deep Savasana Recovery Breath', durationSec: 90, tips: 'Complete muscle relaxation.' }
    ]
  },
  {
    id: 'act-15-4',
    title: 'Lower Body & Glutes Hostel Tone',
    duration: 15,
    difficulty: 'Intermediate',
    category: 'Strength',
    goal: 'Stay Active',
    spaceNeeded: 'Small Space',
    burnedCalories: 110,
    shortDescription: 'Wake up sleepy glutes, hamstrings, and quads after long hours sitting.',
    benefits: [
      'Combats "glute amnesia" from 6+ hours of consecutive sitting in classes',
      'Strengthens knee joints and improves posture stability',
      'Quiet and gentle on floors'
    ],
    instructions: [
      { step: 1, name: 'Warmup Hip Openers & Good Mornings', durationSec: 120, tips: 'Hinge at hips with straight spine to warm hamstrings.' },
      { step: 2, name: 'Reverse Lunges with Knee Drive', durationSec: 210, tips: 'Step backward, lower knee toward floor, drive knee forward.' },
      { step: 3, name: 'Single-Leg Glute Bridges', durationSec: 210, tips: 'Lift one leg, press through working heel to lift pelvis.' },
      { step: 4, name: 'Curtsy Lunges to Sumo Squat', durationSec: 210, tips: 'Target inner and outer thigh stabilizers.' },
      { step: 5, name: 'Wall Sit Isometric Burnout & Stretch', durationSec: 150, tips: 'Back against wall, knees at 90 degrees, hold 60s, then stretch quads.' }
    ]
  },

  // --- 30+ MINUTES ROUTINES ---
  {
    id: 'act-30-1',
    title: 'Full Body Student Athlete Circuit',
    duration: 30,
    difficulty: 'Advanced',
    category: 'Calisthenics',
    goal: 'Build Strength',
    spaceNeeded: 'Dorm / Room Space',
    burnedCalories: 260,
    shortDescription: 'Complete strength & endurance conditioning for committed student fitness.',
    benefits: [
      'Comprehensive athletic training covering push, pull, legs, and core',
      'Enhances stamina for long college days and sports activities',
      'Builds functional strength that carries into everyday posture and vitality'
    ],
    instructions: [
      { step: 1, name: 'Dynamic Joint Prep & Heart Rate Ramp', durationSec: 240, tips: 'Arm circles, torso twists, lunges, and jumping jacks.' },
      { step: 2, name: 'Push-Up Progression (Tempo, Wide, Diamond)', durationSec: 360, tips: '3 sets of 12-15 reps with 45s rest between variations.' },
      { step: 3, name: 'Lower Body Gauntlet (Squats, Lunges, Jump Squats)', durationSec: 420, tips: 'Continuous circuit moving between quad and hamstring exercises.' },
      { step: 4, name: 'Posterior Chain & Core Dominance', durationSec: 420, tips: 'Plank walks, superman holds, bird-dogs, and hollow body rocks.' },
      { step: 5, name: 'High-Burn Metabolic Finisher', durationSec: 240, tips: 'Burpees, mountain climbers, and fast high-knees intervals.' },
      { step: 6, name: 'Full Body Cool Down & Guided Breathing', durationSec: 120, tips: 'Slow stretches for chest, back, hamstrings, and quads.' }
    ]
  },
  {
    id: 'act-30-2',
    title: 'Complete Cardio Endurance & Core Blast',
    duration: 32,
    difficulty: 'Intermediate',
    category: 'Cardio',
    goal: 'Improve Fitness',
    spaceNeeded: 'Room Floor',
    burnedCalories: 290,
    shortDescription: 'Sustained endurance builder combining aerobic intervals with midsection work.',
    benefits: [
      'Boosts VO2 max and stamina without needing running tracks',
      'Burns high calories while strengthening abdominal wall',
      'Keeps mental energy high throughout grueling exam weeks'
    ],
    instructions: [
      { step: 1, name: 'Progressive Warmup & Mobility', durationSec: 240, tips: 'Light jog, jumping jacks, hip circles.' },
      { step: 2, name: 'Cardio Interval Round 1 (Fast paced)', durationSec: 480, tips: 'Skaters, butt kicks, shadow boxing, fast side hops.' },
      { step: 3, name: 'Core Sculpt Matrix', durationSec: 420, tips: 'Russian twists, leg raises, side planks, bicycle crunches.' },
      { step: 4, name: 'Cardio Interval Round 2 (Pyramid)', durationSec: 480, tips: 'Tabata style: 20s maximum effort, 10s recovery.' },
      { step: 5, name: 'Static Recovery Stretches & Hydration', durationSec: 300, tips: 'Slow down heart rate, stretch calves and hip flexors.' }
    ]
  },
  {
    id: 'act-30-3',
    title: 'Mind-Body Deep Yoga & Recovery Sanctuary',
    duration: 30,
    difficulty: 'Beginner',
    category: 'Yoga',
    goal: 'General Wellness',
    spaceNeeded: 'Mat Area',
    burnedCalories: 110,
    shortDescription: 'Complete immersive yoga session to reset academic burnout and body stiffness.',
    benefits: [
      'Profound relief from chronic study stress and academic pressure',
      'Systematic decompression of neck, shoulders, spine, and hips',
      'Deep parasympathetic nervous system activation for restful sleep'
    ],
    instructions: [
      { step: 1, name: 'Pranayama & Centering Meditation', durationSec: 300, tips: 'Deep belly breathing to disconnect from study screens.' },
      { step: 2, name: 'Surya Namaskar (Sun Salutations Flow)', durationSec: 480, tips: 'Fluid breath-synchronized movement through 5 rounds.' },
      { step: 3, name: 'Warrior II & Triangle Standing Postures', durationSec: 360, tips: 'Builds grounded focus and stability.' },
      { step: 4, name: 'Seated & Floor Hip Openers', durationSec: 360, tips: 'Pigeon pose, seated forward fold, butterfly.' },
      { step: 5, name: 'Guided Body Scan & Savasana', durationSec: 300, tips: 'Complete stillness and relaxation.' }
    ]
  },
  {
    id: 'act-30-4',
    title: 'Hostel Functional Strength & Hypertrophy',
    duration: 35,
    difficulty: 'Advanced',
    category: 'Strength',
    goal: 'Build Strength',
    spaceNeeded: 'Dorm Space',
    burnedCalories: 275,
    shortDescription: 'High-tension bodyweight hypertrophy training for real student muscle development.',
    benefits: [
      'Maximizes time under tension for muscle growth without heavy weights',
      'Teaches body mastery, balance, and core engagement',
      'Tailored for hostel/dorm life without needing dumbbells'
    ],
    instructions: [
      { step: 1, name: 'Wrist, Elbow & Shoulder Conditioning', durationSec: 300, tips: 'Crucial warmup for heavy bodyweight leverage.' },
      { step: 2, name: 'Slow Tempo Deficit Push-Ups (Books/Blocks)', durationSec: 480, tips: 'Hands elevated on textbooks for deep chest stretch.' },
      { step: 3, name: 'Pistol Squat / Archer Squat Progressions', durationSec: 480, tips: 'Unilateral leg strength building.' },
      { step: 4, name: 'Backpack / Door Rows & Handstand Prep', durationSec: 480, tips: 'Upper body pulling and overhead pressing.' },
      { step: 5, name: 'Isometric Core Finisher (L-sit / Plank)', durationSec: 300, tips: 'Maximum abdominal compression hold.' }
    ]
  }
];
