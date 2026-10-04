// AayuMove Realistic Human Fitness Photo Demonstration Library
// Renders professional, high-definition real human fitness demonstration photos.
// NO animations, NO videos, NO SVGs, NO stick figures, NO circles, NO skeletons, NO diagrams.

export const EXERCISE_PHOTO_REGISTRY = [
  // --- 1. PIKE PUSH-UP ---
  {
    id: 'pushup-pike',
    name: 'Pike Push-Ups (Shoulder Builder)',
    match: ['pike push-ups', 'pike push-up', 'pike'],
    photoPath: 'assets/photos/pushup-pike.jpg',
    targetMuscles: ['Anterior & Lateral Deltoids', 'Upper Trapezius', 'Triceps'],
    formCue: 'Hips held high in inverted V-shape • Lower crown of head toward floor in front of hands',
    tempo: '2s Controlled Descent • 1s Drive Up',
    icon: '⛰️'
  },

  // --- 2. DIAMOND PUSH-UP ---
  {
    id: 'pushup-diamond',
    name: 'Diamond / Close-Grip Push-Ups',
    match: ['diamond push-up', 'diamond pushups', 'diamond'],
    photoPath: 'assets/photos/pushup-diamond.jpg',
    targetMuscles: ['Triceps Brachii', 'Inner Pectorals', 'Anterior Deltoids'],
    formCue: 'Thumbs and index fingers touching in diamond shape • Tuck elbows tight against ribs',
    tempo: '2s Down • 1s Pause • 1s Explosive Press',
    icon: '💎'
  },

  // --- 3. WALL PUSH-UP ---
  {
    id: 'pushup-wall',
    name: 'Wall Push-Ups to Arm Swings',
    match: ['wall push-up', 'wall pushups', 'wall push'],
    photoPath: 'assets/photos/pushup-wall.jpg',
    targetMuscles: ['Chest', 'Shoulders', 'Core Stabilizers'],
    formCue: 'Stand arm length from wall • Press chest to wall with core rigid and heels grounded',
    tempo: '2s Inhale Down • 1s Exhale Press',
    icon: '🧱'
  },

  // --- 4. DEFICIT PUSH-UP ---
  {
    id: 'pushup-deficit',
    name: 'Slow Tempo Deficit Push-Ups (Books/Blocks)',
    match: ['deficit push-up', 'deficit pushups', 'books/blocks', 'deficit'],
    photoPath: 'assets/photos/pushup-deficit.jpg',
    targetMuscles: ['Pectoralis Major Stretch', 'Anterior Deltoids', 'Triceps'],
    formCue: 'Place hands on elevated blocks for full chest stretch at bottom of rep',
    tempo: '3s Eccentric Descent • 1s Bottom Stretch • 1s Explosive Drive',
    icon: '📚'
  },

  // --- 5. STANDARD PUSH-UP ---
  {
    id: 'pushup-standard',
    name: 'Push-Up Variations (Standard, Incline, Knee)',
    match: ['push-up', 'pushups', 'push up', 'standard push-up', 'incline push-up', 'knee push-up'],
    photoPath: 'assets/photos/pushup-standard.jpg',
    targetMuscles: ['Pectoralis Major', 'Triceps Brachii', 'Anterior Deltoid', 'Core'],
    formCue: 'Plank body line from head to heels • Lower chest to 2 inches from floor • Elbows at 45°',
    tempo: '2s Lowering • 1s Press Up',
    icon: '💪'
  },

  // --- 6. TEMPO CHAIR SQUAT ---
  {
    id: 'squat-chair',
    name: 'Tempo Chair Squats',
    match: ['chair squat', 'chair squats', 'tempo chair'],
    photoPath: 'assets/photos/squat-chair.jpg',
    targetMuscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings'],
    formCue: 'Tap glutes softly to chair seat without resting weight • Drive through heels to stand',
    tempo: '3s Slow Sit • 1s Light Tap • 1s Stand',
    icon: '🪑'
  },

  // --- 7. BULGARIAN SPLIT SQUAT ---
  {
    id: 'squat-bulgarian',
    name: 'Bulgarian Split Squats (Bed or Chair)',
    match: ['bulgarian split squat', 'split squats', 'bulgarian'],
    photoPath: 'assets/photos/squat-bulgarian.jpg',
    targetMuscles: ['Unilateral Quads', 'Glute Medius & Maximus', 'Hamstrings'],
    formCue: 'Rear foot elevated on bench/chair • Descend vertically until front thigh is parallel',
    tempo: '2s Lowering • 1s Pause • 1s Drive',
    icon: '🦵'
  },

  // --- 8. PISTOL SQUAT ---
  {
    id: 'squat-pistol',
    name: 'Pistol Squat / Archer Squat Progressions',
    match: ['pistol squat', 'archer squat', 'single-leg squat'],
    photoPath: 'assets/photos/squat-pistol.jpg',
    targetMuscles: ['Quads', 'Glutes', 'Ankle Dorsiflexion', 'Core Balance'],
    formCue: 'Extend non-working leg forward • Keep working heel flat on floor • Control balance',
    tempo: '3s Controlled Drop • 1s Drive Up',
    icon: '🎯'
  },

  // --- 9. SQUAT JUMPS ---
  {
    id: 'squat-jump',
    name: 'Squat Jumps / High-Burn Jumps',
    match: ['squat jump', 'squat jumps', 'high-burn jumps'],
    photoPath: 'assets/photos/squat-jump.jpg',
    targetMuscles: ['Fast-Twitch Quads', 'Calves', 'Glutes', 'Cardiovascular System'],
    formCue: 'Deep squat load • Explosive vertical takeoff • Soft toe-to-heel landing transition',
    tempo: 'Explosive Continuous Reps',
    icon: '⚡'
  },

  // --- 10. CURTSY TO SUMO SQUAT ---
  {
    id: 'lunge-curtsy-sumo',
    name: 'Curtsy Lunges to Sumo Squat',
    match: ['curtsy', 'sumo squat', 'curtsy lunges'],
    photoPath: 'assets/photos/lunge-curtsy-sumo.jpg',
    targetMuscles: ['Gluteus Medius', 'Adductors (Inner Thighs)', 'Quads'],
    formCue: 'Cross rear leg diagonally behind • Transition directly into wide stance sumo squat',
    tempo: '2s Flowing Rhythm',
    icon: '🔄'
  },

  // --- 11. WALL SIT ISOMETRIC ---
  {
    id: 'wall-sit',
    name: 'Wall Sit Isometric Burnout',
    match: ['wall sit', 'wall-sit'],
    photoPath: 'assets/photos/wall-sit.jpg',
    targetMuscles: ['Quadriceps Endurance', 'Glutes', 'Core Stability'],
    formCue: 'Back flat against wall • Thighs parallel to floor at 90° angle • Hands off thighs',
    tempo: 'Isometric Static Hold',
    icon: '🧱'
  },

  // --- 12. BODYWEIGHT AIR SQUATS ---
  {
    id: 'squat-air',
    name: 'Bodyweight Air Squats & Fast Squats',
    match: ['squat', 'squats', 'air squats', 'fast squats', 'bodyweight squats'],
    photoPath: 'assets/photos/squat-air.jpg',
    targetMuscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings', 'Core'],
    formCue: 'Feet shoulder-width apart • Knees tracking over toes • Chest upright • Hip hinge depth',
    tempo: '2s Down • 1s Up',
    icon: '🏋️'
  },

  // --- 13. PLANK SHOULDER TAPS ---
  {
    id: 'core-shoulder-taps',
    name: 'Plank Shoulder Taps to Bear Crawl Hold',
    match: ['shoulder taps', 'bear crawl hold', 'plank shoulder taps'],
    photoPath: 'assets/photos/core-shoulder-taps.jpg',
    targetMuscles: ['Anti-Rotational Core', 'Deltoids', 'Transverse Abdominis'],
    formCue: 'Wide foot stance for anti-rotation • Tap opposite shoulder without swaying hips',
    tempo: '1s Controlled Alternate Taps',
    icon: '🛡️'
  },

  // --- 14. ELBOW PLANK & HIP DIPS ---
  {
    id: 'core-plank-dips',
    name: 'Elbow Plank & Hip Dips',
    match: ['elbow plank', 'plank dips', 'hip dips'],
    photoPath: 'assets/photos/core-plank-dips.jpg',
    targetMuscles: ['Obliques', 'Rectus Abdominis', 'Shoulder Girdle'],
    formCue: 'Forearms parallel • Rotate hips side-to-side hovering 1 inch off mat',
    tempo: 'Smooth Rhythmic Arc',
    icon: '🌊'
  },

  // --- 15. DOORFRAME / BACKPACK ROWS ---
  {
    id: 'rows-doorframe',
    name: 'Doorframe / Backpack Bodyweight Rows',
    match: ['doorframe', 'backpack rows', 'bodyweight rows', 'towel rows'],
    photoPath: 'assets/photos/rows-doorframe.jpg',
    targetMuscles: ['Latissimus Dorsi', 'Rhomboids', 'Rear Deltoids', 'Biceps'],
    formCue: 'Grip doorframe or towel • Lean back with straight spine • Pull chest to hands',
    tempo: '2s Squeeze Pull • 2s Slow Release',
    icon: '🚪'
  },

  // --- 16. REVERSE LUNGES WITH KNEE DRIVE ---
  {
    id: 'lunge-reverse',
    name: 'Reverse Lunges with Knee Drive',
    match: ['reverse lunge', 'reverse lunges', 'knee drive', 'lunge'],
    photoPath: 'assets/photos/lunge-reverse.jpg',
    targetMuscles: ['Glutes', 'Quads', 'Hip Flexors', 'Balance'],
    formCue: 'Step backward into 90/90 lunge • Drive back knee explosively up toward chest',
    tempo: '2s Lunge Down • 1s Explosive Drive Up',
    icon: '🏹'
  },

  // --- 17. GLUTE BRIDGES ---
  {
    id: 'bridge-glute',
    name: 'Single-Leg & Standard Glute Bridges',
    match: ['glute bridge', 'glute bridges', 'single-leg bridge', 'bridge'],
    photoPath: 'assets/photos/bridge-glute.jpg',
    targetMuscles: ['Gluteus Maximus', 'Hamstrings', 'Lower Back Stabilizers'],
    formCue: 'Drive through heels to lift hips • Squeeze glutes hard at top without arching lower back',
    tempo: '2s Up • 2s Peak Squeeze Hold • 1s Down',
    icon: '🌉'
  },

  // --- 18. CALF RAISES & ARM STRETCHES ---
  {
    id: 'calves-stretch',
    name: 'Calf Raises & Arm Stretches',
    match: ['calf raises', 'calf raise', 'arm stretches'],
    photoPath: 'assets/photos/calves-stretch.jpg',
    targetMuscles: ['Gastrocnemius', 'Soleus', 'Shoulder Mobility'],
    formCue: 'Rise tall onto ball of foot • Pause at peak contraction • Lower heels under control',
    tempo: '1s Up • 2s Squeeze • 2s Down',
    icon: '🦶'
  },

  // --- 19. DEADBUGS & HOLLOW HOLD PREP ---
  {
    id: 'core-deadbugs',
    name: 'Deadbugs & Hollow Hold Prep',
    match: ['deadbug', 'deadbugs', 'hollow hold'],
    photoPath: 'assets/photos/core-deadbugs.jpg',
    targetMuscles: ['Deep Core', 'Transverse Abdominis', 'Coordination'],
    formCue: 'Press lower back flush against floor • Extend opposite arm and leg simultaneously',
    tempo: '2s Controlled Extension • 1s Return',
    icon: '🪲'
  },

  // --- 20. BICYCLE CRUNCHES WITH 2S PAUSE ---
  {
    id: 'core-bicycle',
    name: 'Bicycle Crunches with 2s Pause',
    match: ['bicycle crunches', 'bicycle crunch', 'bicycle'],
    photoPath: 'assets/photos/core-bicycle.jpg',
    targetMuscles: ['Internal & External Obliques', 'Rectus Abdominis'],
    formCue: 'Rotate shoulder to opposite knee • Hold rotation 2s • Keep lower back pressed down',
    tempo: '2s Rotation Hold Each Side',
    icon: '🚴'
  },

  // --- 21. CORE SCULPT MATRIX ---
  {
    id: 'core-sculpt-matrix',
    name: 'Core Sculpt Matrix (Russian Twists & Leg Raises)',
    match: ['russian twists', 'leg raises', 'core sculpt', 'twists'],
    photoPath: 'assets/photos/core-sculpt-matrix.jpg',
    targetMuscles: ['Transverse Abdominis', 'Obliques', 'Lower Abs'],
    formCue: 'Seated V-sit angle • Rotate torso with ribs engaged • Lower legs without arching lower back',
    tempo: '2s Rhythmic Control',
    icon: '🌪️'
  },

  // --- 22. POSTERIOR CHAIN & SUPERMAN ---
  {
    id: 'core-posterior-chain',
    name: 'Posterior Chain & Core Dominance (Superman & Bird-Dog)',
    match: ['superman', 'bird-dog', 'bird dog', 'posterior chain'],
    photoPath: 'assets/photos/core-posterior-chain.jpg',
    targetMuscles: ['Erector Spinae', 'Glutes', 'Rear Deltoids', 'Core Balance'],
    formCue: 'Lie prone • Lift chest, arms, and legs 2 inches off mat • Keep neck neutral looking down',
    tempo: '2s Hold Peak Lift • 1s Release',
    icon: '🦸'
  },

  // --- 23. SPEED SKATERS ---
  {
    id: 'cardio-skaters',
    name: 'Speed Skaters / Lateral Bounds',
    match: ['skaters', 'speed skaters', 'lateral bounds'],
    photoPath: 'assets/photos/cardio-skaters.jpg',
    targetMuscles: ['Glute Medius', 'Lateral Leg Power', 'Cardio Stamina'],
    formCue: 'Bound side-to-side landing softly on single bent leg • Sweep rear leg behind',
    tempo: 'Fluid Lateral Bounds',
    icon: '⛸️'
  },

  // --- 24. MOUNTAIN CLIMBERS ---
  {
    id: 'cardio-climbers',
    name: 'Mountain Climbers (Rapid Knee Drives)',
    match: ['mountain climbers', 'mountain climber', 'climbers'],
    photoPath: 'assets/photos/cardio-climbers.jpg',
    targetMuscles: ['Hip Flexors', 'Rectus Abdominis', 'Cardio', 'Shoulder Endurance'],
    formCue: 'High plank position • Drive knees rapidly toward chest without bouncing hips high',
    tempo: 'Fast Rhythmic Piston Motion',
    icon: '🏃'
  },

  // --- 25. BURPEES ---
  {
    id: 'cardio-burpees',
    name: 'Burpee Step-Outs / Floor Touch Hops',
    match: ['burpee', 'burpees', 'floor touch hops'],
    photoPath: 'assets/photos/cardio-burpees.jpg',
    targetMuscles: ['Full Body Conditioning', 'Chest', 'Quads', 'Core'],
    formCue: 'Squat to place hands down • Step or jump to plank • Return to squat • Jump vertical reach',
    tempo: 'Smooth Continuous Flow',
    icon: '🔥'
  },

  // --- 26. SHADOW BOXING ---
  {
    id: 'cardio-boxing',
    name: 'Silent Shadow Boxing & March',
    match: ['shadow boxing', 'boxing', 'silent march'],
    photoPath: 'assets/photos/cardio-boxing.jpg',
    targetMuscles: ['Deltoids', 'Rotator Cuff', 'Core Rotation', 'Aerobic Metabolism'],
    formCue: 'Athletic boxer stance • Throw jab-cross-hook combinations with quick recoil',
    tempo: 'Fast Light-Footed Rhythm',
    icon: '🥊'
  },

  // --- 27. HIGH KNEES / HALF JACKS ---
  {
    id: 'cardio-jacks-knees',
    name: 'Half-Jacks or Fast High Knees',
    match: ['high knees', 'half-jacks', 'jumping jacks', 'jacks'],
    photoPath: 'assets/photos/cardio-jacks-knees.jpg',
    targetMuscles: ['Cardiovascular System', 'Calves', 'Hip Flexors'],
    formCue: 'Stay light on balls of feet • Drive knees to waist height with upright posture',
    tempo: 'Quick Agility Cadence',
    icon: '✨'
  },

  // --- 28. SEATED NECK ROLLS ---
  {
    id: 'mobility-neck-rolls',
    name: 'Seated Chin Tucks & Neck Rolls',
    match: ['neck rolls', 'chin tucks', 'neck stretch'],
    photoPath: 'assets/photos/mobility-neck-rolls.jpg',
    targetMuscles: ['Cervical Spine Flexors', 'Upper Trapezius', 'Levator Scapulae'],
    formCue: 'Sit upright • Gently roll chin toward chest and ear to shoulder • Never force backward',
    tempo: '4s Slow Decompression Circle',
    icon: '🧘'
  },

  // --- 29. SEATED SPINAL TWIST ---
  {
    id: 'mobility-spinal-twist',
    name: 'Seated Spinal Twist',
    match: ['spinal twist', 'seated twist', 'spine stretch'],
    photoPath: 'assets/photos/mobility-spinal-twist.jpg',
    targetMuscles: ['Thoracic Spine Mobility', 'Obliques', 'Back Extensors'],
    formCue: 'Inhale to lengthen spine tall • Exhale to twist from chest holding chair backrest',
    tempo: '3s Hold Each Exhale',
    icon: '🌀'
  },

  // --- 30. EAGLE ARMS ---
  {
    id: 'mobility-eagle-arms',
    name: 'Eagle Arm Shoulder Opener',
    match: ['eagle arms', 'shoulder opener', 'eagle'],
    photoPath: 'assets/photos/mobility-eagle-arms.jpg',
    targetMuscles: ['Rhomboids', 'Infraspinatus', 'Scapular Stretch'],
    formCue: 'Wrap elbows and forearms together • Lift elbows parallel to shoulders',
    tempo: '15s Static Hold',
    icon: '🦅'
  },

  // --- 31. CHEST EXPANSION ---
  {
    id: 'mobility-chest-expansion',
    name: 'Chest Expansion & Deep Rib Breathing',
    match: ['chest expansion', 'rib breathing', 'chest opener'],
    photoPath: 'assets/photos/mobility-chest-expansion.jpg',
    targetMuscles: ['Pectoralis Minor', 'Intercostal Muscles', 'Diaphragm'],
    formCue: 'Interlace fingers behind lower back • Open collarbones and expand ribs on deep inhale',
    tempo: '4s Inhale • 4s Exhale',
    icon: '🫁'
  },

  // --- 32. PALMING EYES ---
  {
    id: 'mobility-palming-eyes',
    name: 'Palming & Distant Focus (Eye Reset)',
    match: ['palming', 'eye reset', 'eye stretch'],
    photoPath: 'assets/photos/mobility-palming-eyes.jpg',
    targetMuscles: ['Extraocular Eye Muscles', 'Ciliary Relaxation', 'Vagus Nerve Reset'],
    formCue: 'Rub palms warm • Cupping warm palms gently over closed eyes without pressure',
    tempo: 'Continuous Soothing Rest',
    icon: '👁️'
  },

  // --- 33. WRIST STRETCH ---
  {
    id: 'mobility-wrist-stretch',
    name: 'Wrist Flexor & Extensor Stretch',
    match: ['wrist stretch', 'wrist flexor', 'wrist extensor'],
    photoPath: 'assets/photos/mobility-wrist-stretch.jpg',
    targetMuscles: ['Forearm Flexors & Extensors', 'Carpal Tunnel Decompression'],
    formCue: 'Extend arm straight forward • Gently draw fingers back toward chest with opposite hand',
    tempo: '10s Per Side Hold',
    icon: '🖐️'
  },

  // --- 34. CHAIR CAT-COW ---
  {
    id: 'mobility-cat-cow',
    name: 'Chair Cat-Cow Flow',
    match: ['cat-cow', 'cat cow', 'chair cat cow'],
    photoPath: 'assets/photos/mobility-cat-cow.jpg',
    targetMuscles: ['Full Spine Articulation', 'Thoracic & Lumbar Mobility'],
    formCue: 'Inhale curve spine forward lift chest (Cow) • Exhale round spine tucked chin (Cat)',
    tempo: '4s Breath Rhythmic Flow',
    icon: '🐈'
  },

  // --- 35. STANDING SIDE REACH ---
  {
    id: 'mobility-side-reach',
    name: 'Standing Side Reach & Yawn',
    match: ['side reach', 'standing side reach', 'lateral stretch'],
    photoPath: 'assets/photos/mobility-side-reach.jpg',
    targetMuscles: ['Latissimus Dorsi', 'Intercostals', 'Quadratus Lumborum'],
    formCue: 'Reach arm overhead and arch laterally • Keep both feet rooted evenly into floor',
    tempo: '3s Hold Each Lateral Bend',
    icon: '🌾'
  },

  // --- 36. CHILD’S POSE ---
  {
    id: 'yoga-childs-pose',
    name: 'Kneeling Child’s Pose',
    match: ["child's pose", 'childs pose', 'child pose'],
    photoPath: 'assets/photos/yoga-childs-pose.jpg',
    targetMuscles: ['Latissimus Dorsi', 'Lumbar Spine', 'Hip Adductors'],
    formCue: 'Kneel with big toes touching • Sit hips back onto heels • Extend arms far forward',
    tempo: 'Deep Relaxed Hold',
    icon: '🌙'
  },

  // --- 37. KNEE TO CHEST ---
  {
    id: 'yoga-knee-chest',
    name: 'Supine Knee-to-Chest Hug',
    match: ['knee-to-chest', 'knee to chest', 'supine hug'],
    photoPath: 'assets/photos/yoga-knee-chest.jpg',
    targetMuscles: ['Lower Back Decompression', 'Glutes', 'Hip Flexors'],
    formCue: 'Lie flat on back • Hug both knees gently into chest • Relax shoulders to mat',
    tempo: 'Continuous Gentle Rocking',
    icon: '🤗'
  },

  // --- 38. LYING SPINAL TWIST ---
  {
    id: 'yoga-lying-twist',
    name: 'Lying Spinal Twist',
    match: ['lying spinal twist', 'lying twist', 'supine twist'],
    photoPath: 'assets/photos/yoga-lying-twist.jpg',
    targetMuscles: ['Lumbar-Thoracic Spine', 'Chest', 'Glute Stretch'],
    formCue: 'Guide knees over to side while keeping opposite shoulder flat on mat',
    tempo: 'Deep Breath Hold',
    icon: '☯️'
  },

  // --- 39. LEGS UP WALL ---
  {
    id: 'yoga-legs-wall',
    name: 'Legs Up Against Wall / Box Breathing',
    match: ['legs up', 'legs-up', 'legs up against wall'],
    photoPath: 'assets/photos/yoga-legs-wall.jpg',
    targetMuscles: ['Venous Return Enhancement', 'Hamstrings', 'Central Nervous System Reset'],
    formCue: 'Swing legs upright vertically against wall • Rest arms by sides palms up',
    tempo: 'Restorative Stillness',
    icon: '🪵'
  },

  // --- 40. DOWNWARD DOG TO COBRA ---
  {
    id: 'yoga-down-dog-cobra',
    name: 'Downward Facing Dog to Cobra Flow',
    match: ['downward dog', 'down dog', 'cobra flow', 'down dog to cobra'],
    photoPath: 'assets/photos/yoga-down-dog-cobra.jpg',
    targetMuscles: ['Posterior Chain', 'Abdominals', 'Shoulder Girdle'],
    formCue: 'Press hips high in Down Dog • Transition smoothly through plank into chest-up Cobra',
    tempo: '3s Per Pose Transition',
    icon: '🐕'
  },

  // --- 41. LOW LUNGE TO HALF SPLITS ---
  {
    id: 'yoga-low-lunge-splits',
    name: 'Low Lunge to Half Splits Flow',
    match: ['low lunge', 'half splits', 'lunge to splits'],
    photoPath: 'assets/photos/yoga-low-lunge-splits.jpg',
    targetMuscles: ['Hip Flexors', 'Hamstrings', 'Ankle Mobility'],
    formCue: 'Sink hips forward in low lunge • Shift hips back extending front knee for hamstring stretch',
    tempo: 'Controlled Flowing Transition',
    icon: '🏹'
  },

  // --- 42. SEATED BUTTERFLY FOLD ---
  {
    id: 'yoga-butterfly-fold',
    name: 'Seated Butterfly & Forward Fold',
    match: ['butterfly', 'butterfly fold', 'forward fold'],
    photoPath: 'assets/photos/yoga-butterfly-fold.jpg',
    targetMuscles: ['Inner Thigh Adductors', 'Groin', 'Lower Back Extension'],
    formCue: 'Soles of feet together • Hinge forward at hips keeping chest open',
    tempo: 'Deep Relaxed Hold',
    icon: '🦋'
  },

  // --- 43. WORLD’S GREATEST STRETCH ---
  {
    id: 'mobility-worlds-greatest',
    name: 'World’s Greatest Stretch Flow',
    match: ["world's greatest", 'worlds greatest', 'greatest stretch'],
    photoPath: 'assets/photos/mobility-worlds-greatest.jpg',
    targetMuscles: ['Hip Flexors', 'Thoracic Spine', 'Hamstrings', 'Ankle'],
    formCue: 'Deep runner lunge • Drop inside elbow toward floor • Rotate arm high to sky',
    tempo: 'Rhythmic Mobility Flow',
    icon: '🌍'
  },

  // --- 44. 90/90 HIP SWITCHES ---
  {
    id: 'mobility-90-90-hips',
    name: '90/90 Hip Mobility Switches',
    match: ['90/90', 'hip switches', '90 90'],
    photoPath: 'assets/photos/mobility-90-90-hips.jpg',
    targetMuscles: ['Hip Internal & External Rotation', 'Glute Medius'],
    formCue: 'Seated with both knees bent at 90° angles • Rotate knees side-to-side without hands',
    tempo: 'Smooth Controlled Rotation',
    icon: '⚙️'
  },

  // --- 45. PUPPY DOG SHOULDER EXTENSION ---
  {
    id: 'mobility-puppy-dog',
    name: 'Puppy Dog Shoulder Extension',
    match: ['puppy dog', 'puppy pose', 'shoulder extension'],
    photoPath: 'assets/photos/mobility-puppy-dog.jpg',
    targetMuscles: ['Thoracic Extension', 'Lats', 'Shoulders'],
    formCue: 'Hips stacked over knees • Walk hands forward lowering forehead and chest to mat',
    tempo: 'Static Deep Melt',
    icon: '🐶'
  },

  // --- 46. PIGEON POSE ---
  {
    id: 'mobility-pigeon-pose',
    name: 'Pigeon Pose / Figure-4 Stretch',
    match: ['pigeon pose', 'pigeon stretch', 'figure-4'],
    photoPath: 'assets/photos/mobility-pigeon-pose.jpg',
    targetMuscles: ['Glute Deep Rotators', 'Piriformis', 'Hip Capsule'],
    formCue: 'Front shin angled across mat • Square hips to floor • Lower chest forward over shin',
    tempo: '15s Per Side Static Release',
    icon: '🕊️'
  },

  // --- 47. WARRIOR II & TRIANGLE ---
  {
    id: 'yoga-warrior-triangle',
    name: 'Warrior II & Triangle Standing Postures',
    match: ['warrior ii', 'warrior 2', 'triangle pose', 'warrior'],
    photoPath: 'assets/photos/yoga-warrior-triangle.jpg',
    targetMuscles: ['Quads', 'Adductors', 'Side Obliques', 'Balance'],
    formCue: 'Front knee over ankle at 90° • Arms extended parallel • Reach and hinge for Triangle',
    tempo: 'Grounded Strong Hold',
    icon: '🤺'
  },

  // --- 48. MOUNTAIN POSE ---
  {
    id: 'yoga-mountain-reach',
    name: 'Mountain Pose to Overhead Reach',
    match: ['mountain pose', 'mountain reach', 'tadasana'],
    photoPath: 'assets/photos/yoga-mountain-reach.jpg',
    targetMuscles: ['Postural Alignment', 'Core Base', 'Shoulder Lengthening'],
    formCue: 'Ground all 4 corners of feet • Engage core • Reach arms high toward ceiling',
    tempo: 'Steady Deep Respiration',
    icon: '🏔️'
  },

  // --- 49. SAVASANA ---
  {
    id: 'yoga-savasana',
    name: 'Deep Savasana Recovery Breath',
    match: ['savasana', 'corpse pose', 'relaxation'],
    photoPath: 'assets/photos/yoga-savasana.jpg',
    targetMuscles: ['Parasympathetic Recovery', 'Full Body Relaxation'],
    formCue: 'Lie fully flat on back • Feet floppy • Palms facing up • Breathe slowly into belly',
    tempo: 'Deep Calming Rhythm',
    icon: '✨'
  },

  // --- 50. GENERAL DYNAMIC WARMUP ---
  {
    id: 'mobility-warmup-general',
    name: 'Dynamic Joint Mobility & Warmup',
    match: ['warmup', 'warm-up', 'mobility flow', 'general warmup'],
    photoPath: 'assets/photos/mobility-warmup-general.jpg',
    targetMuscles: ['Full Body Joints', 'Synovial Fluid Activation', 'Core Temperature'],
    formCue: 'Continuous low-impact arm circles, hip openers, and torso twists to prepare body',
    tempo: 'Rhythmic Warmup Cadence',
    icon: '🔥'
  }
];

export const EXERCISE_VISUAL_REGISTRY = EXERCISE_PHOTO_REGISTRY;

/**
 * Returns the HTML string for the Realistic Human Fitness Photo Demonstration.
 * Displays high-quality professional photography of a real athlete performing the movement.
 */
export function getExerciseAnimationHtml(exerciseName, categoryHint = '', tips = '', options = {}) {
  const normName = (exerciseName || '').toLowerCase().trim();

  let matchEntry = EXERCISE_PHOTO_REGISTRY.find(reg =>
    reg.match.some(m => normName.includes(m))
  );

  if (!matchEntry) {
    const slug = normName.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    matchEntry = {
      id: slug || 'general-exercise',
      name: exerciseName,
      photoPath: 'assets/photos/mobility-warmup-general.jpg',
      targetMuscles: ['Full Body Dynamics', 'Core Alignment'],
      formCue: tips || 'Maintain proper posture and steady breathing throughout the exercise.',
      tempo: 'Controlled Cadence • Smooth Motion',
      icon: '🏋️'
    };
  }

  const targetMusclesHtml = matchEntry.targetMuscles.map(m => `
    <span class="muscle-tag">${m}</span>
  `).join('');

  return `
    <div class="exercise-form-guide-card">
      <div class="exercise-photo-wrapper">
        <img 
          src="${matchEntry.photoPath}" 
          alt="${matchEntry.name} - Realistic Human Fitness Form Demonstration" 
          class="exercise-real-photo"
          loading="eager"
        />
        <div class="exercise-photo-overlay">
          <span class="exercise-photo-title">${matchEntry.name}</span>
        </div>
      </div>

      <div class="exercise-form-meta-bar">
        <div class="exercise-form-target-muscles">
          <span class="muscle-pill-label">Target:</span>
          ${targetMusclesHtml}
        </div>
        <div class="exercise-form-tempo-badge">
          <span>⏱️ ${matchEntry.tempo}</span>
        </div>
      </div>

      <div class="exercise-form-cue-box">
        <span class="cue-bullet">💡</span>
        <span><strong>Proper Form:</strong> ${matchEntry.formCue}</span>
      </div>
    </div>
  `;
}
