// AayuMove Structured Exercise Visual Library
// Dedicated, accurate biomechanical visuals and animations for every student exercise.
// Includes movement kinematics, joint angles, active muscle focus, and fallback schematics.

export const EXERCISE_VISUAL_REGISTRY = [
  // --- SPECIFIC PUSH-UP VARIATIONS (Checked before generic push-up) ---
  {
    id: 'pushup-pike',
    name: 'Pike Push-Ups (Shoulder Builder)',
    match: ['pike push-ups', 'pike push-up', 'pike'],
    targetMuscles: ['Anterior & Lateral Deltoids', 'Upper Trapezius', 'Triceps'],
    formCue: 'Hips held high in inverted V-shape • Lower crown of head toward floor in front of hands',
    tempo: '2s Controlled Descent • 1s Drive Up',
    icon: '⛰️',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-pushup-pike">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="pike-body-group">
          <!-- Inverted V Pike -->
          <circle cx="95" cy="100" r="14" fill="#f97316" class="anim-head"/>
          <!-- Torso Inverted -->
          <line x1="105" y1="95" x2="160" y2="45" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <!-- Active Shoulder Highlight -->
          <circle cx="108" cy="92" r="9" fill="#f43f5e" class="muscle-glow"/>
          <!-- Arms Pressing -->
          <polyline points="108,92 90,120 80,150" stroke="#fbbf24" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="pike-arm-flex" fill="none"/>
          <!-- Legs in V-Shape -->
          <line x1="160" y1="45" x2="225" y2="150" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round"/>
          <circle cx="80" cy="150" r="6" fill="#f97316"/>
          <circle cx="225" cy="150" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Hips High • Crown of Head Forward to Hands</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="150" x2="290" y2="150" stroke="#64748b" stroke-width="2"/>
        <polyline points="80,150 160,45 225,150" stroke="#38bdf8" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: PIKE PUSH-UP</text>
      </svg>
    `
  },
  {
    id: 'pushup-diamond',
    name: 'Diamond / Close-Grip Push-Ups',
    match: ['diamond push-up', 'diamond pushups', 'diamond'],
    targetMuscles: ['Triceps Brachii', 'Inner Pectorals', 'Anterior Deltoids'],
    formCue: 'Thumbs and index fingers touching in diamond shape • Tuck elbows tight against ribs',
    tempo: '2s Down • 1s Pause • 1s Explosive Press',
    icon: '💎',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-pushup-diamond">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="diamond-pushup-group">
          <circle cx="85" cy="80" r="14" fill="#f97316"/>
          <line x1="95" y1="88" x2="200" y2="118" stroke="#38bdf8" stroke-width="14" stroke-linecap="round"/>
          <line x1="105" y1="90" x2="160" y2="108" stroke="#ec4899" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <!-- Diamond Arm Placement -->
          <polyline points="105,92 100,125 90,150" stroke="#fbbf24" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="diamond-arm-flex" fill="none"/>
          <polygon points="90,150 96,144 102,150 96,156" fill="#ec4899"/>
          <line x1="200" y1="118" x2="270" y2="148" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round"/>
          <circle cx="270" cy="148" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Narrow Hand Diamond • Peak Triceps Contraction</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="150" x2="290" y2="150" stroke="#64748b" stroke-width="2"/>
        <line x1="85" y1="90" x2="270" y2="145" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
        <circle cx="80" cy="80" r="12" fill="#f97316"/>
        <polygon points="90,150 96,144 102,150 96,156" fill="#ec4899"/>
        <text x="160" y="30" text-anchor="middle" fill="#ec4899" font-size="12" font-weight="700">FORM BLUEPRINT: DIAMOND PUSH-UP</text>
      </svg>
    `
  },
  {
    id: 'pushup-wall',
    name: 'Wall Push-Ups to Arm Swings',
    match: ['wall push-ups', 'wall push-up', 'wall push'],
    targetMuscles: ['Chest', 'Shoulder Girdle', 'Upper Thoracic'],
    formCue: 'Stand 2 feet from wall • Press smoothly and fluidly transition to expansive arm swings',
    tempo: 'Smooth Rhythmic Reps',
    icon: '🧱',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-wall-pushup">
        <!-- Wall -->
        <line x1="70" y1="20" x2="70" y2="155" stroke="#64748b" stroke-width="6" stroke-linecap="round"/>
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="wall-body-group">
          <circle cx="120" cy="45" r="14" fill="#f97316"/>
          <line x1="125" y1="58" x2="175" y2="120" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <polyline points="125,62 95,75 70,80" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="wall-arm-flex" fill="none"/>
          <line x1="175" y1="120" x2="205" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <circle cx="70" cy="80" r="5" fill="#f97316"/>
          <circle cx="205" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Low-Impact Press • Fluid Shoulder Circles</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="70" y1="20" x2="70" y2="155" stroke="#64748b" stroke-width="4"/>
        <line x1="120" y1="50" x2="190" y2="155" stroke="#38bdf8" stroke-width="6"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: WALL PUSH-UP</text>
      </svg>
    `
  },
  {
    id: 'pushup-deficit',
    name: 'Slow Tempo Deficit Push-Ups (Books/Blocks)',
    match: ['deficit push-ups', 'deficit', 'slow tempo deficit'],
    targetMuscles: ['Deep Pectoral Stretch', 'Triceps', 'Shoulders'],
    formCue: 'Hands elevated on textbooks/blocks • Lower chest below hand plane for full muscle stretch',
    tempo: '3s Lower • 1s Pause • 1s Press',
    icon: '📚',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-pushup-deficit">
        <!-- Elevated Blocks/Books -->
        <rect x="65" y="135" width="30" height="15" fill="#475569" rx="2"/>
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="pushup-deficit-group">
          <circle cx="80" cy="85" r="14" fill="#f97316"/>
          <line x1="90" y1="92" x2="195" y2="118" stroke="#38bdf8" stroke-width="14" stroke-linecap="round"/>
          <line x1="100" y1="95" x2="165" y2="110" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <polyline points="100,95 85,115 80,135" stroke="#fbbf24" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="pushup-arm-flex" fill="none"/>
          <line x1="195" y1="118" x2="265" y2="148" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round"/>
          <circle cx="80" cy="135" r="5" fill="#f97316"/>
          <circle cx="265" cy="148" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Elevated Hands • Deep Chest Deficit Stretch</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <rect x="65" y="135" width="30" height="15" fill="#475569"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: DEFICIT PUSH-UP</text>
      </svg>
    `
  },
  {
    id: 'pushup-standard',
    name: 'Push-Up Variations (Standard, Incline, Knee)',
    match: ['push-up', 'pushup', 'push up', 'incline / knee / standard'],
    targetMuscles: ['Chest (Pectorals)', 'Triceps', 'Anterior Deltoids', 'Core'],
    formCue: 'Elbows at 45° angle • Maintain straight plank line from head to heels • Full ROM',
    tempo: '2s Lower • 1s Hold • 1s Press',
    icon: '💪',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-pushup-standard">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="6,6"/>
        <g class="pushup-pivot-group">
          <circle cx="85" cy="80" r="14" fill="#f97316" class="anim-head"/>
          <line x1="95" y1="88" x2="200" y2="118" stroke="#38bdf8" stroke-width="14" stroke-linecap="round"/>
          <line x1="105" y1="92" x2="170" y2="110" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <polyline points="105,92 90,122 80,150" stroke="#fbbf24" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="pushup-arm-flex" fill="none"/>
          <line x1="200" y1="118" x2="270" y2="148" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round"/>
          <circle cx="80" cy="150" r="6" fill="#f97316"/>
          <circle cx="270" cy="148" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Elbows 45° • Neutral Spine</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="150" x2="290" y2="150" stroke="#64748b" stroke-width="2"/>
        <line x1="85" y1="90" x2="270" y2="145" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
        <circle cx="80" cy="80" r="12" fill="#f97316"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">STATIC FORM BLUEPRINT: PUSH-UP</text>
      </svg>
    `
  },

  // --- SPECIFIC SQUATS & LEGS (Checked before generic squat) ---
  {
    id: 'squat-chair',
    name: 'Tempo Chair Squats',
    match: ['chair squats', 'chair squat', 'tempo chair squats'],
    targetMuscles: ['Glutes', 'Quadriceps', 'Hip Stabilizers'],
    formCue: 'Sit back gently until glutes tap chair edge • Do not rest weight • Stand immediately',
    tempo: '3s Down • 1s Touch • 1s Up',
    icon: '🪑',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-chair-squat">
        <rect x="90" y="105" width="35" height="6" fill="#64748b" rx="2"/>
        <line x1="95" y1="111" x2="95" y2="155" stroke="#64748b" stroke-width="4"/>
        <line x1="120" y1="111" x2="120" y2="155" stroke="#64748b" stroke-width="4"/>
        <line x1="90" y1="65" x2="90" y2="111" stroke="#64748b" stroke-width="4"/>
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="chair-squat-group">
          <circle cx="160" cy="50" r="14" fill="#f97316"/>
          <line x1="160" y1="64" x2="140" y2="110" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="160" y1="75" x2="195" y2="70" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
          <line x1="140" y1="110" x2="175" y2="125" stroke="#f43f5e" stroke-width="11" stroke-linecap="round" class="muscle-glow"/>
          <line x1="175" y1="125" x2="175" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <circle cx="175" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="180" y="24" text-anchor="middle" class="anim-cue-text">3-Second Controlled Descent • Tap & Explode</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <rect x="90" y="105" width="30" height="5" fill="#64748b"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: TEMPO CHAIR SQUAT</text>
      </svg>
    `
  },
  {
    id: 'squat-bulgarian',
    name: 'Bulgarian Split Squats (Bed or Chair)',
    match: ['bulgarian split squats', 'bulgarian split', 'bulgarian'],
    targetMuscles: ['Single-Leg Quadriceps', 'Glute Max & Medius', 'Adductors'],
    formCue: 'Rear foot elevated on bed/chair • Drop back knee toward floor • Front knee stacked over midfoot',
    tempo: '2s Down • 1s Hold • 1s Press Up',
    icon: '🪜',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-bulgarian-squat">
        <rect x="40" y="110" width="45" height="45" fill="#334155" rx="3" stroke="#475569" stroke-width="2"/>
        <line x1="20" y1="155" x2="300" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="bulgarian-group">
          <circle cx="170" cy="45" r="14" fill="#f97316"/>
          <line x1="170" y1="58" x2="170" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <polyline points="170,72 150,85 165,92" stroke="#fbbf24" stroke-width="6" stroke-linecap="round" fill="none"/>
          <polyline points="170,105 210,120 210,155" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" class="muscle-glow" fill="none"/>
          <polyline points="170,105 110,125 75,115" stroke="#0ea5e9" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <circle cx="210" cy="155" r="6" fill="#f97316"/>
          <circle cx="75" cy="115" r="5" fill="#f97316"/>
        </g>
        <text x="170" y="24" text-anchor="middle" class="anim-cue-text">Rear Foot Elevated • Drop Hip Straight Down</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <rect x="40" y="110" width="40" height="45" fill="#334155"/>
        <polyline points="170,105 210,120 210,155" stroke="#f43f5e" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: BULGARIAN SPLIT SQUAT</text>
      </svg>
    `
  },
  {
    id: 'squat-pistol',
    name: 'Pistol Squat / Archer Squat Progressions',
    match: ['pistol squat', 'archer squat', 'pistol'],
    targetMuscles: ['Unilateral Quads', 'Hip Flexors', 'Core Balance & Ankle Mobility'],
    formCue: 'Single leg squat with opposite leg extended straight out • Arms forward for balance',
    tempo: 'Slow, Controlled Descent',
    icon: '🎯',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-pistol-squat">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="pistol-group">
          <circle cx="150" cy="50" r="14" fill="#f97316"/>
          <line x1="150" y1="64" x2="135" y2="115" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="150" y1="75" x2="215" y2="70" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
          <polyline points="135,115 155,135 140,155" stroke="#f43f5e" stroke-width="11" stroke-linecap="round" class="muscle-glow" fill="none"/>
          <line x1="135" y1="115" x2="235" y2="130" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <circle cx="140" cy="155" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Full Single-Leg Extension • Core Engaged</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="135" y1="115" x2="235" y2="130" stroke="#0ea5e9" stroke-width="6"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: PISTOL SQUAT</text>
      </svg>
    `
  },
  {
    id: 'squat-jump',
    name: 'Squat Jumps / High-Burn Jumps',
    match: ['squat jumps', 'jump squats', 'jump squat'],
    targetMuscles: ['Fast-Twitch Quads', 'Calves', 'Cardiovascular System'],
    formCue: 'Coil down into quarter squat • Explode vertically through balls of feet • Land softly on toes',
    tempo: 'Explosive Spring & Cushion Landing',
    icon: '🚀',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-jump-squat">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <path d="M 120 130 L 120 70" stroke="#f97316" stroke-width="3" stroke-dasharray="4,4"/>
        <polygon points="120,60 115,72 125,72" fill="#f97316"/>
        <path d="M 200 130 L 200 70" stroke="#f97316" stroke-width="3" stroke-dasharray="4,4"/>
        <polygon points="200,60 195,72 205,72" fill="#f97316"/>
        <g class="jump-squat-group">
          <circle cx="160" cy="40" r="14" fill="#f97316" class="anim-head"/>
          <line x1="160" y1="54" x2="160" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <polyline points="160,65 130,45 120,25" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" fill="none"/>
          <polyline points="160,65 190,45 200,25" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" fill="none"/>
          <line x1="160" y1="105" x2="140" y2="145" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="muscle-glow"/>
          <line x1="160" y1="105" x2="180" y2="145" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="muscle-glow"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Explode High • Absorb Landing with Soft Knees</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="155" x2="290" y2="155" stroke="#64748b" stroke-width="2"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: JUMP SQUAT</text>
      </svg>
    `
  },
  {
    id: 'lunge-curtsy-sumo',
    name: 'Curtsy Lunges to Sumo Squat',
    match: ['curtsy lunges', 'curtsy lunge', 'curtsy', 'sumo squat', 'sumo'],
    targetMuscles: ['Gluteus Medius (Outer Hips)', 'Inner Adductors', 'Quads'],
    formCue: 'Step one leg diagonally behind the other • Lower into curtsy • Step wide into deep sumo squat',
    tempo: 'Fluid Rhythmic Switching',
    icon: '🩰',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-curtsy-sumo">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="curtsy-group">
          <circle cx="160" cy="40" r="14" fill="#f97316"/>
          <line x1="160" y1="54" x2="160" y2="100" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="160" y1="100" x2="125" y2="155" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="muscle-glow"/>
          <line x1="160" y1="100" x2="195" y2="155" stroke="#ec4899" stroke-width="10" stroke-linecap="round" class="muscle-glow"/>
          <circle cx="125" cy="155" r="5" fill="#f97316"/>
          <circle cx="195" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Cross Diagonal Behind • Fire Glute Medius & Adductors</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: CURTSY & SUMO</text>
      </svg>
    `
  },
  {
    id: 'wall-sit',
    name: 'Wall Sit Isometric Burnout',
    match: ['wall sit', 'wall sit isometric burnout & stretch'],
    targetMuscles: ['Isometric Quads', 'Glutes', 'Core Stability'],
    formCue: 'Back completely flat against wall • Thighs parallel to floor at 90° angle • Squeeze quads',
    tempo: 'Continuous Isometric Hold',
    icon: '🛑',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-wall-sit">
        <line x1="90" y1="20" x2="90" y2="155" stroke="#64748b" stroke-width="6" stroke-linecap="round"/>
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="wall-sit-group">
          <circle cx="105" cy="50" r="14" fill="#f97316"/>
          <line x1="102" y1="64" x2="102" y2="110" stroke="#38bdf8" stroke-width="14" stroke-linecap="round"/>
          <line x1="102" y1="110" x2="165" y2="110" stroke="#f43f5e" stroke-width="12" stroke-linecap="round" class="muscle-glow pulse-quads"/>
          <line x1="165" y1="110" x2="165" y2="155" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round"/>
          <circle cx="165" cy="155" r="6" fill="#f97316"/>
        </g>
        <text x="180" y="24" text-anchor="middle" class="anim-cue-text">Strict 90° Knee & Hip Angle • Breathe Deeply</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="102,60 102,110 165,110 165,155" stroke="#38bdf8" stroke-width="6" fill="none"/>
        <text x="180" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: WALL SIT</text>
      </svg>
    `
  },
  {
    id: 'squat-air',
    name: 'Bodyweight Air Squats & Fast Squats',
    match: ['air squat', 'fast bodyweight squats', 'bodyweight squats', 'squat pulses', 'lower body gauntlet'],
    targetMuscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings', 'Core'],
    formCue: 'Feet shoulder-width apart • Break at hips first • Knees track over 2nd toe • Drive up through heels',
    tempo: '2s Descent • 1s Hold • 1s Power Ascent',
    icon: '🏋️',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-squat-air">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <line x1="90" y1="110" x2="230" y2="110" stroke="rgba(20, 184, 166, 0.4)" stroke-width="2" stroke-dasharray="4,4"/>
        <g class="squat-body-group">
          <circle cx="150" cy="45" r="14" fill="#f97316" class="anim-head"/>
          <line x1="150" y1="58" x2="145" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round" class="squat-torso"/>
          <line x1="150" y1="70" x2="195" y2="65" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
          <line x1="145" y1="105" x2="180" y2="125" stroke="#f43f5e" stroke-width="11" stroke-linecap="round" class="squat-thigh muscle-glow"/>
          <line x1="180" y1="125" x2="180" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round" class="squat-shin"/>
          <circle cx="180" cy="155" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Hips Back & Down • Chest Up • Drive Heels</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="150,55 145,105 180,125 180,155" stroke="#38bdf8" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: AIR SQUAT</text>
      </svg>
    `
  },

  // --- SPECIFIC CORE & PLANK VARIATIONS (Checked before generic plank) ---
  {
    id: 'core-shoulder-taps',
    name: 'Plank Shoulder Taps to Bear Crawl Hold',
    match: ['shoulder taps', 'bear crawl', 'plank shoulder taps'],
    targetMuscles: ['Anti-Rotational Core', 'Shoulder Stabilizers', 'Hip Flexors'],
    formCue: 'Feet wide for stability • Tap opposite shoulder without rocking hips • Transition to 90° knee hover',
    tempo: '2s Controlled Tap • 0 Rocking',
    icon: '🐻',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-shoulder-taps">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="tap-group">
          <circle cx="95" cy="75" r="14" fill="#f97316"/>
          <line x1="105" y1="82" x2="200" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="110" y1="88" x2="110" y2="150" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
          <polyline points="110,88 135,92 115,85" stroke="#f43f5e" stroke-width="7" stroke-linecap="round" class="tapping-arm" fill="none"/>
          <line x1="200" y1="105" x2="260" y2="148" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <circle cx="110" cy="150" r="6" fill="#f97316"/>
          <circle cx="260" cy="148" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Hips Square & Motionless • Alternate Shoulder Taps</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: SHOULDER TAPS</text>
      </svg>
    `
  },
  {
    id: 'core-plank-dips',
    name: 'Elbow Plank & Hip Dips',
    match: ['elbow plank', 'hip dips', 'plank', 'isometric core finisher'],
    targetMuscles: ['Anterior Core', 'Obliques', 'Serratus Anterior', 'Glutes'],
    formCue: 'Forearms parallel • Body in rigid steel plank • Rotate hips side-to-side without sagging',
    tempo: 'Controlled Rhythmic Dip',
    icon: '🪵',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-plank-dips">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="plank-dip-group">
          <circle cx="85" cy="85" r="14" fill="#f97316"/>
          <line x1="95" y1="92" x2="200" y2="110" stroke="#38bdf8" stroke-width="13" stroke-linecap="round" class="plank-spine"/>
          <line x1="110" y1="95" x2="180" y2="107" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <polyline points="100,95 95,125 80,150" stroke="#fbbf24" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <line x1="200" y1="110" x2="265" y2="148" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round"/>
          <circle cx="80" cy="150" r="6" fill="#f97316"/>
          <circle cx="265" cy="148" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Rigid Core • Squeeze Glutes • Controlled Hip Dips</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="85" y1="90" x2="265" y2="148" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: FOREARM PLANK</text>
      </svg>
    `
  },

  // --- ROWS & PULLING ---
  {
    id: 'rows-doorframe',
    name: 'Doorframe / Backpack Bodyweight Rows',
    match: ['doorframe bodyweight rows', 'backpack / door rows', 'doorframe', 'rows'],
    targetMuscles: ['Latissimus Dorsi', 'Rhomboids', 'Rear Deltoids', 'Biceps'],
    formCue: 'Grip doorframe firmly • Lean back with rigid torso • Retract shoulder blades and pull chest in',
    tempo: '2s Pull • 1s Squeeze • 2s Controlled Release',
    icon: '🚪',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-door-row">
        <rect x="50" y="20" width="12" height="135" fill="#475569" rx="2"/>
        <line x1="20" y1="155" x2="300" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="row-body-group">
          <circle cx="150" cy="55" r="14" fill="#f97316"/>
          <line x1="145" y1="68" x2="100" y2="125" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="140" y1="75" x2="115" y2="110" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <polyline points="140,75 100,75 62,80" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="row-arm-pull" fill="none"/>
          <line x1="100" y1="125" x2="80" y2="155" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round"/>
          <circle cx="62" cy="80" r="5" fill="#f97316"/>
          <circle cx="80" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="175" y="24" text-anchor="middle" class="anim-cue-text">Squeeze Shoulder Blades • Pull Elbows Past Ribs</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <rect x="50" y="20" width="8" height="135" fill="#475569"/>
        <line x1="145" y1="65" x2="80" y2="155" stroke="#38bdf8" stroke-width="6"/>
        <text x="175" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: BODYWEIGHT ROW</text>
      </svg>
    `
  },

  // --- LUNGES & BRIDGES ---
  {
    id: 'lunge-reverse',
    name: 'Reverse Lunges with Knee Drive',
    match: ['reverse lunges with knee drive', 'reverse lunge', 'lunge'],
    targetMuscles: ['Glutes', 'Hamstrings', 'Quadriceps', 'Hip Flexors'],
    formCue: 'Step backward into 90° lunge • Drive through front heel to return • Power back knee up to hip level',
    tempo: '2s Step Back • 1s Knee Drive',
    icon: '🦵',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-lunge-drive">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="lunge-drive-group">
          <circle cx="150" cy="40" r="14" fill="#f97316"/>
          <line x1="150" y1="54" x2="150" y2="100" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <polyline points="150,100 190,118 190,155" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" class="muscle-glow" fill="none"/>
          <polyline points="150,100 100,125 90,152" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="lunge-rear-dynamic" fill="none"/>
          <circle cx="190" cy="155" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">90° Knee Angle • Explosive Forward Knee Drive</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="150,100 190,118 190,155" stroke="#f43f5e" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: REVERSE LUNGE</text>
      </svg>
    `
  },
  {
    id: 'bridge-glute',
    name: 'Single-Leg & Standard Glute Bridges',
    match: ['single-leg glute bridges', 'glute bridges to reverse crunch', 'glute bridges', 'bridge'],
    targetMuscles: ['Gluteus Maximus', 'Hamstrings', 'Lower Back / Posterior Chain'],
    formCue: 'Lie flat with feet flat • Drive through heels to lift hips high • Squeeze glutes 2s at peak',
    tempo: '2s Thrust • 2s Peak Squeeze • 2s Lower',
    icon: '🌉',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-glute-bridge">
        <line x1="20" y1="155" x2="300" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="bridge-pivot-group">
          <circle cx="75" cy="142" r="13" fill="#f97316"/>
          <line x1="88" y1="145" x2="175" y2="100" stroke="#38bdf8" stroke-width="13" stroke-linecap="round" class="bridge-torso"/>
          <circle cx="175" cy="100" r="10" fill="#f43f5e" class="muscle-glow pulse-glute"/>
          <polyline points="175,100 215,115 220,155" stroke="#fbbf24" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" class="bridge-leg" fill="none"/>
          <circle cx="220" cy="155" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Drive Heels • Full Pelvic Extension • Squeeze Glutes</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="75,145 175,100 220,155" stroke="#38bdf8" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: GLUTE BRIDGE</text>
      </svg>
    `
  },
  {
    id: 'calves-stretch',
    name: 'Calf Raises & Arm Stretches',
    match: ['calf raises & arm stretches', 'calf raises', 'calf raise'],
    targetMuscles: ['Gastrocnemius & Soleus (Calves)', 'Shoulder Flexors', 'Triceps'],
    formCue: 'Rise high onto balls of feet • Squeeze calves at peak • Reach arms overhead to lengthen spine',
    tempo: '2s Up • 1s Pause on Toes • 2s Down',
    icon: '🩰',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-calf-raises">
        <line x1="40" y1="155" x2="280" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="calf-body-group">
          <circle cx="160" cy="40" r="14" fill="#f97316"/>
          <line x1="160" y1="54" x2="160" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="160" y1="65" x2="140" y2="18" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
          <line x1="160" y1="65" x2="180" y2="18" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
          <line x1="160" y1="105" x2="160" y2="145" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round"/>
          <circle cx="160" cy="135" r="7" fill="#f43f5e" class="muscle-glow"/>
          <circle cx="160" cy="150" r="5" fill="#f97316" class="anim-tiptoe"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">High on Tiptoes • Peak Calf Contraction • Reach High</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="160" y1="20" x2="160" y2="150" stroke="#38bdf8" stroke-width="6"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: CALF RAISE</text>
      </svg>
    `
  },

  // --- ABDOMINALS & CORE ---
  {
    id: 'core-deadbugs',
    name: 'Deadbugs & Hollow Hold Prep',
    match: ['deadbugs & hollow hold prep', 'deadbugs', 'hollow hold prep'],
    targetMuscles: ['Transverse Abdominis (Deep Core)', 'Hip Flexors', 'Lumbar Stabilizers'],
    formCue: 'Press lower back flush against mat • Lower opposite arm and leg slowly • Never let back arch',
    tempo: '3s Slow Extension • 1s Return',
    icon: '🪲',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-deadbug">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="deadbug-group">
          <line x1="100" y1="140" x2="200" y2="140" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
          <circle cx="85" cy="138" r="13" fill="#f97316"/>
          <circle cx="150" cy="136" r="10" fill="#f43f5e" class="muscle-glow pulse-core"/>
          <line x1="120" y1="135" x2="70" y2="105" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" class="deadbug-arm-l"/>
          <line x1="120" y1="135" x2="120" y2="85" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" class="deadbug-arm-r"/>
          <polyline points="190,140 220,110 240,110" stroke="#0ea5e9" stroke-width="8" stroke-linecap="round" class="deadbug-leg-l" fill="none"/>
          <polyline points="190,140 230,135 270,140" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" class="deadbug-leg-r" fill="none"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Lower Back Glued to Floor • Opposite Arm/Leg Motion</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="100" y1="140" x2="200" y2="140" stroke="#38bdf8" stroke-width="6"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: DEADBUGS</text>
      </svg>
    `
  },
  {
    id: 'core-bicycle',
    name: 'Bicycle Crunches with 2s Pause',
    match: ['bicycle crunches with 2s pause', 'bicycle crunches', 'bicycle crunch', 'crunches'],
    targetMuscles: ['Internal & External Obliques', 'Rectus Abdominis'],
    formCue: 'Rotate through ribcage • Bring elbow to opposite knee • Hold 2 seconds at peak contraction',
    tempo: '2s Contraction • 1s Switch',
    icon: '🚴',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-bicycle-crunch">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="bicycle-group">
          <circle cx="95" cy="115" r="13" fill="#f97316" class="anim-head"/>
          <line x1="105" y1="120" x2="175" y2="140" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <circle cx="140" cy="125" r="10" fill="#ec4899" class="muscle-glow pulse-core"/>
          <polyline points="95,115 125,100 145,115" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" fill="none"/>
          <polyline points="175,140 160,105 130,95" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="bicycle-knee-in" fill="none"/>
          <line x1="175" y1="140" x2="250" y2="125" stroke="#0ea5e9" stroke-width="8" stroke-linecap="round" class="bicycle-leg-ext"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Rotate Ribcage to Knee • 2s Isometric Hold</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#ec4899" font-size="12" font-weight="700">FORM BLUEPRINT: BICYCLE CRUNCH</text>
      </svg>
    `
  },
  {
    id: 'core-sculpt-matrix',
    name: 'Core Sculpt Matrix (Russian Twists & Leg Raises)',
    match: ['core sculpt matrix', 'russian twists', 'leg raises'],
    targetMuscles: ['Obliques', 'Lower Rectus Abdominis', 'Hip Flexors'],
    formCue: 'V-sit position • Rotate torso side to side touching floor • Keep chest proud',
    tempo: 'Rhythmic Controlled Rotation',
    icon: '🌀',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-russian-twists">
        <line x1="30" y1="150" x2="290" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="twist-group">
          <circle cx="120" cy="55" r="14" fill="#f97316"/>
          <line x1="125" y1="68" x2="160" y2="135" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <circle cx="150" cy="120" r="10" fill="#ec4899" class="muscle-glow pulse-core"/>
          <polyline points="135,80 180,95 195,115" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" class="twist-arms" fill="none"/>
          <polyline points="160,135 205,105 240,115" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Elevated V-Sit • Full Oblique Torso Rotation</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#ec4899" font-size="12" font-weight="700">FORM BLUEPRINT: RUSSIAN TWIST V-SIT</text>
      </svg>
    `
  },
  {
    id: 'core-posterior-chain',
    name: 'Posterior Chain & Core Dominance (Superman & Bird-Dog)',
    match: ['posterior chain & core dominance', 'posterior chain', 'superman', 'bird-dog'],
    targetMuscles: ['Erector Spinae', 'Gluteus Maximus', 'Scapular Retractors'],
    formCue: 'Lie prone or on all-fours • Lift chest and thighs simultaneously • Squeeze entire back',
    tempo: '2s Lift • 2s Squeeze • 2s Lower',
    icon: '🦸',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-superman">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="superman-group">
          <path d="M 90 120 Q 160 145 230 120" stroke="#38bdf8" stroke-width="13" fill="none" stroke-linecap="round"/>
          <circle cx="75" cy="115" r="13" fill="#f97316"/>
          <line x1="85" y1="120" x2="40" y2="105" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
          <path d="M 110 128 Q 160 142 210 128" stroke="#f43f5e" stroke-width="5" fill="none" class="muscle-glow"/>
          <line x1="230" y1="120" x2="280" y2="105" stroke="#0ea5e9" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Lift Chest & Quads • Squeeze Glutes & Spinal Erectors</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <path d="M 90 120 Q 160 145 230 120" stroke="#38bdf8" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: SUPERMAN HOLD</text>
      </svg>
    `
  },

  // --- CARDIO & AGILITY ---
  {
    id: 'cardio-skaters',
    name: 'Speed Skaters / Lateral Bounds',
    match: ['speed skaters / lateral bounds', 'speed skaters', 'skaters', 'lateral bounds'],
    targetMuscles: ['Glute Medius', 'Quadriceps', 'Calves', 'Lateral Agility'],
    formCue: 'Bound laterally from side to side • Land softly on single bent leg • Sweep rear leg behind',
    tempo: 'Athletic Rhythmic Bounding',
    icon: '⛸️',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-skaters">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <path d="M 80 130 Q 160 70 240 130" stroke="rgba(20, 184, 166, 0.4)" stroke-width="2" stroke-dasharray="4,4" fill="none"/>
        <g class="skater-body-group">
          <circle cx="140" cy="50" r="14" fill="#f97316"/>
          <line x1="140" y1="64" x2="130" y2="110" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="140" y1="75" x2="190" y2="90" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" class="skater-arm-r"/>
          <line x1="140" y1="75" x2="90" y2="70" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" class="skater-arm-l"/>
          <polyline points="130,110 120,135 125,155" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="muscle-glow" fill="none"/>
          <line x1="130" y1="110" x2="210" y2="145" stroke="#0ea5e9" stroke-width="8" stroke-linecap="round" class="skater-trailing-leg"/>
          <circle cx="125" cy="155" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Athletic Low Stance • Side-to-Side Bounding Power</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: SPEED SKATERS</text>
      </svg>
    `
  },
  {
    id: 'cardio-climbers',
    name: 'Mountain Climbers (Rapid Knee Drives)',
    match: ['mountain climbers', 'climbers'],
    targetMuscles: ['Rectus Abdominis', 'Hip Flexors', 'Shoulders', 'Cardio Engine'],
    formCue: 'High plank position • Drive knees rapidly toward chest without bouncing hips',
    tempo: 'Fast Rhythmic Cadence',
    icon: '🧗',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-climbers">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="climber-group">
          <circle cx="85" cy="80" r="14" fill="#f97316"/>
          <line x1="95" y1="88" x2="190" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="100" y1="92" x2="90" y2="150" stroke="#fbbf24" stroke-width="9" stroke-linecap="round"/>
          <polyline points="190,105 135,115 110,135" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="climber-drive-l muscle-glow" fill="none"/>
          <line x1="190" y1="105" x2="260" y2="148" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round" class="climber-ext-r"/>
          <circle cx="90" cy="150" r="6" fill="#f97316"/>
          <circle cx="260" cy="148" r="6" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Hips Flat • Drive Knees Directly to Chest</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: MOUNTAIN CLIMBERS</text>
      </svg>
    `
  },
  {
    id: 'cardio-burpees',
    name: 'Burpee Step-Outs / Floor Touch Hops',
    match: ['burpee step-outs / floor touch hops', 'high-burn metabolic finisher', 'burpees', 'burpee'],
    targetMuscles: ['Full Body Compound', 'Cardiovascular System', 'Pectorals', 'Legs'],
    formCue: 'Drop hands to floor • Step or kick back to plank • Return to squat and jump tall with clap',
    tempo: 'Explosive Continuous Flow',
    icon: '⚡',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-burpees">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="burpee-group">
          <circle cx="160" cy="45" r="14" fill="#f97316" class="anim-head"/>
          <line x1="160" y1="58" x2="155" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round" class="burpee-spine"/>
          <polyline points="160,70 130,50 115,25" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" class="burpee-arms" fill="none"/>
          <polyline points="160,70 190,50 205,25" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" class="burpee-arms" fill="none"/>
          <line x1="155" y1="105" x2="135" y2="150" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="burpee-legs"/>
          <line x1="155" y1="105" x2="175" y2="150" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="burpee-legs"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Floor Touch • Plank Kickback • Explosive Stand</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: BURPEE FLOW</text>
      </svg>
    `
  },
  {
    id: 'cardio-boxing',
    name: 'Silent Shadow Boxing & March',
    match: ['silent shadow boxing & march', 'shadow boxing spurt & cool down', 'shadow boxing', 'boxing'],
    targetMuscles: ['Shoulders (Deltoids)', 'Core Rotators', 'Calves', 'Cardiovascular Stamina'],
    formCue: 'Athletic stance • March softly in place • Throw rhythmic 1-2 jab-cross punches rotating hips',
    tempo: 'Rhythmic Snap Punches (1-2 Combos)',
    icon: '🥊',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-boxing">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="boxer-group">
          <circle cx="130" cy="45" r="14" fill="#f97316"/>
          <line x1="130" y1="58" x2="125" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <polyline points="130,68 175,65 225,65" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="boxing-lead-punch muscle-glow" fill="none"/>
          <circle cx="228" cy="65" r="7" fill="#f97316" class="boxing-glove"/>
          <polyline points="125,70 110,85 120,60" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" fill="none"/>
          <line x1="125" y1="105" x2="100" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round" class="boxing-leg-l"/>
          <line x1="125" y1="105" x2="150" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round" class="boxing-leg-r"/>
          <circle cx="100" cy="155" r="5" fill="#f97316"/>
          <circle cx="150" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Snap Punches • Rotate from Hips • Light on Toes</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="700">FORM BLUEPRINT: SHADOW BOXING</text>
      </svg>
    `
  },
  {
    id: 'cardio-jacks-knees',
    name: 'Half-Jacks or Fast High Knees',
    match: ['half-jacks or fast high knees', 'high-knee jog to lateral shuffles', 'half-jacks', 'high knees', 'cardio interval'],
    targetMuscles: ['Calves', 'Quadriceps', 'Hip Flexors', 'Aerobic Engine'],
    formCue: 'Stay light on balls of feet • Drive knees to waist height or step side-to-side with rhythm',
    tempo: 'Quick Rhythmic Cadence',
    icon: '🏃',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-high-knees">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="jack-group">
          <circle cx="160" cy="40" r="14" fill="#f97316"/>
          <line x1="160" y1="54" x2="160" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="160" y1="65" x2="120" y2="40" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" class="cardio-arm-l"/>
          <line x1="160" y1="65" x2="200" y2="40" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" class="cardio-arm-r"/>
          <polyline points="160,105 130,115 130,155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round" class="knee-pump-l" fill="none"/>
          <polyline points="160,105 195,95 200,130" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="knee-pump-r muscle-glow" fill="none"/>
          <circle cx="130" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Light Footwork • Drive Knees Up • Keep Torso Tall</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: HIGH KNEES / JACKS</text>
      </svg>
    `
  },

  // --- MOBILITY & DESK RELIEF ---
  {
    id: 'mobility-neck-rolls',
    name: 'Seated Chin Tucks & Neck Rolls',
    match: ['seated chin tucks & neck rolls', 'chin tucks', 'neck rolls'],
    targetMuscles: ['Cervical Spine', 'Suboccipital Muscles', 'Upper Trapezius'],
    formCue: 'Sit upright • Gently retract chin inward like making a double chin • Roll head slowly ear-to-shoulder',
    tempo: 'Slow, Mindful 5-Second Rotations',
    icon: '🧘',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-neck-rolls">
        <line x1="100" y1="60" x2="100" y2="155" stroke="#64748b" stroke-width="4"/>
        <line x1="100" y1="120" x2="180" y2="120" stroke="#64748b" stroke-width="4"/>
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <ellipse cx="140" cy="50" rx="25" ry="12" stroke="rgba(20, 184, 166, 0.5)" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
        <g class="neck-body-group">
          <circle cx="140" cy="45" r="14" fill="#f97316" class="anim-neck-head"/>
          <circle cx="140" cy="58" r="9" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <line x1="140" y1="60" x2="140" y2="120" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <polyline points="140,75 165,90 155,115" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" fill="none"/>
          <line x1="140" y1="120" x2="165" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <circle cx="165" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Tuck Chin Back • Gentle Ear-to-Shoulder Roll</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: CHIN TUCK & NECK RELIEF</text>
      </svg>
    `
  },
  {
    id: 'mobility-spinal-twist',
    name: 'Seated Spinal Twist',
    match: ['seated spinal twist', 'spinal twist'],
    targetMuscles: ['Thoracic Spine', 'Obliques', 'Erector Spinae'],
    formCue: 'Sit tall • Grasp chair armrest or desk edge • Exhale and gently rotate torso looking over shoulder',
    tempo: 'Hold 30s Left • Hold 30s Right',
    icon: '🔄',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-seated-twist">
        <line x1="110" y1="60" x2="110" y2="155" stroke="#64748b" stroke-width="4"/>
        <line x1="110" y1="120" x2="180" y2="120" stroke="#64748b" stroke-width="4"/>
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="twist-body-group">
          <circle cx="150" cy="45" r="14" fill="#f97316"/>
          <line x1="150" y1="58" x2="150" y2="120" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="150" y1="75" x2="150" y2="110" stroke="#ec4899" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <polyline points="150,75 125,85 110,95" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" fill="none"/>
          <polyline points="150,75 175,85 160,110" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" fill="none"/>
          <line x1="150" y1="120" x2="175" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <circle cx="175" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Elongate Spine • Gentle Torso Rotation</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#ec4899" font-size="12" font-weight="700">FORM BLUEPRINT: SEATED SPINAL TWIST</text>
      </svg>
    `
  },
  {
    id: 'mobility-eagle-arms',
    name: 'Eagle Arm Shoulder Opener',
    match: ['eagle arm shoulder opener', 'eagle arm'],
    targetMuscles: ['Rhomboids', 'Posterior Deltoids', 'Upper Trapezius'],
    formCue: 'Wrap forearms together with palms pressing • Lift elbows to chin level • Feel shoulder blades separate',
    tempo: 'Hold 45s per Side • Deep Breaths',
    icon: '🦅',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-eagle-arms">
        <line x1="40" y1="155" x2="280" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="eagle-body-group">
          <circle cx="160" cy="45" r="14" fill="#f97316"/>
          <line x1="160" y1="58" x2="160" y2="115" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <circle cx="160" cy="70" r="12" fill="#8b5cf6" class="muscle-glow pulse-core"/>
          <path d="M 160 70 L 150 90 L 165 75 L 160 50" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" class="anim-eagle-lift"/>
          <line x1="160" y1="115" x2="140" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <line x1="160" y1="115" x2="180" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <circle cx="140" cy="155" r="5" fill="#f97316"/>
          <circle cx="180" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Wrap Forearms • Lift Elbows to Chin Level</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#8b5cf6" font-size="12" font-weight="700">FORM BLUEPRINT: EAGLE ARMS</text>
      </svg>
    `
  },
  {
    id: 'mobility-chest-expansion',
    name: 'Chest Expansion & Deep Rib Breathing',
    match: ['chest expansion & deep rib breathing', 'chest expansion'],
    targetMuscles: ['Pectoralis Major', 'Anterior Shoulder', 'Diaphragm & Intercostals'],
    formCue: 'Interlace fingers behind lower back • Puff chest forward and roll shoulders down • Take 5 deep belly breaths',
    tempo: '5 Slow Belly Breaths',
    icon: '🫁',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-chest-expand">
        <line x1="40" y1="155" x2="280" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <ellipse cx="170" cy="80" rx="30" ry="20" stroke="rgba(20, 184, 166, 0.4)" stroke-width="2" fill="none" class="anim-breath-pulse"/>
        <g class="chest-body-group">
          <circle cx="150" cy="45" r="14" fill="#f97316"/>
          <line x1="150" y1="58" x2="155" y2="115" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <circle cx="162" cy="75" r="10" fill="#14b8a6" class="muscle-glow"/>
          <polyline points="152,70 125,85 120,105" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" fill="none"/>
          <line x1="155" y1="115" x2="140" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <line x1="155" y1="115" x2="170" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Clasp Hands Behind • Expand Ribcage & Inhale Deep</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: CHEST EXPANSION</text>
      </svg>
    `
  },
  {
    id: 'mobility-palming-eyes',
    name: 'Palming & Distant Focus (Eye Reset)',
    match: ['palming & distant focus', 'palming'],
    targetMuscles: ['Extraocular Eye Muscles', 'Cranial Relaxation', 'Optic Nerve Relief'],
    formCue: 'Rub palms warm • Cup softly over closed eyes without pressing eyeballs • Take slow breaths into darkness',
    tempo: '60 Seconds Mindful Darkness',
    icon: '👁️',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-palming">
        <circle cx="160" cy="65" r="45" fill="rgba(99, 102, 241, 0.15)" class="anim-calm-orb"/>
        <g class="palming-group">
          <circle cx="160" cy="60" r="16" fill="#f97316"/>
          <polyline points="135,90 148,65 156,62" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <polyline points="185,90 172,65 164,62" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <line x1="160" y1="76" x2="160" y2="135" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Warm Cupped Palms • Total Darkness • 20-20-20 Rule</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#6366f1" font-size="12" font-weight="700">FORM BLUEPRINT: PALMING EYE RELIEF</text>
      </svg>
    `
  },
  {
    id: 'mobility-wrist-stretch',
    name: 'Wrist Flexor & Extensor Stretch',
    match: ['wrist flexor & extensor stretch', 'wrist flexor', 'wrist, elbow & shoulder conditioning', 'wrist flexor & extensor'],
    targetMuscles: ['Forearm Flexors & Extensors', 'Carpal Tunnel Decompression'],
    formCue: 'Extend arm straight • Gently pull fingers backward with other hand for 30s • Flip palm and press down',
    tempo: '30s Extension • 30s Flexion per Hand',
    icon: '🖐️',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-wrist-stretch">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="wrist-group">
          <circle cx="130" cy="50" r="14" fill="#f97316"/>
          <line x1="130" y1="64" x2="130" y2="120" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="130" y1="75" x2="220" y2="75" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
          <circle cx="175" cy="75" r="9" fill="#14b8a6" class="muscle-glow"/>
          <polyline points="220,75 220,55 210,65" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" fill="none" class="anim-wrist-pull"/>
          <line x1="130" y1="120" x2="150" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Elbow Straight • Gently Pull Fingers Back & Down</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: WRIST STRETCH</text>
      </svg>
    `
  },
  {
    id: 'mobility-cat-cow',
    name: 'Chair Cat-Cow Flow',
    match: ['chair cat-cow flow', 'cat-cow', 'cat cow'],
    targetMuscles: ['Full Spine Articulation', 'Thoracic Mobility', 'Pelvic Tilt'],
    formCue: 'Inhale: Arch spine forward, open chest (Cow) • Exhale: Round spine back, tuck chin (Cat)',
    tempo: 'Synchronized with Inhale / Exhale',
    icon: '🐈',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-cat-cow">
        <line x1="100" y1="60" x2="100" y2="155" stroke="#64748b" stroke-width="4"/>
        <line x1="100" y1="120" x2="175" y2="120" stroke="#64748b" stroke-width="4"/>
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="cat-cow-group">
          <circle cx="150" cy="45" r="14" fill="#f97316" class="anim-catcow-head"/>
          <path d="M 150 58 Q 130 90 150 120" stroke="#38bdf8" stroke-width="13" fill="none" stroke-linecap="round" class="anim-spine-wave"/>
          <polyline points="150,75 175,95 180,120" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" fill="none"/>
          <line x1="150" y1="120" x2="175" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Inhale Arch Forward • Exhale Round Spine Back</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: CHAIR CAT-COW</text>
      </svg>
    `
  },
  {
    id: 'mobility-side-reach',
    name: 'Standing Side Reach & Yawn',
    match: ['standing side reach & yawn', 'side reach'],
    targetMuscles: ['Latissimus Dorsi', 'Intercostal Muscles', 'Quadratus Lumborum'],
    formCue: 'Reach both arms high overhead • Gently lean torso to one side • Open lateral ribcage and breathe',
    tempo: '30s Left • 30s Right',
    icon: '🌱',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-side-reach">
        <line x1="40" y1="155" x2="280" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="side-reach-group">
          <circle cx="180" cy="40" r="14" fill="#f97316"/>
          <path d="M 180 54 Q 170 90 150 120" stroke="#38bdf8" stroke-width="13" fill="none" stroke-linecap="round"/>
          <path d="M 175 65 Q 165 92 145 118" stroke="#14b8a6" stroke-width="5" fill="none" class="muscle-glow"/>
          <path d="M 175 65 Q 210 30 225 15" stroke="#fbbf24" stroke-width="7" fill="none" stroke-linecap="round"/>
          <line x1="150" y1="120" x2="135" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <line x1="150" y1="120" x2="165" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Overhead Lateral Arc • Expand Ribcage & Breathe</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: SIDE REACH</text>
      </svg>
    `
  },

  // --- YOGA & RESTORATIVE ---
  {
    id: 'yoga-childs-pose',
    name: 'Kneeling Child’s Pose',
    match: ['kneeling child’s pose', "kneeling child's pose", 'child’s pose', "child's pose"],
    targetMuscles: ['Thoracolumbar Fascia', 'Latissimus Dorsi', 'Hip Flexors & Glutes'],
    formCue: 'Sit back on heels • Walk hands forward on mat • Rest forehead on ground and breathe into back ribs',
    tempo: 'Slow, Restorative Breathing',
    icon: '🧘‍♀️',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-childs-pose">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="child-group">
          <circle cx="85" cy="132" r="13" fill="#f97316"/>
          <path d="M 95 130 Q 140 115 190 130" stroke="#38bdf8" stroke-width="13" fill="none" stroke-linecap="round"/>
          <circle cx="160" cy="120" r="10" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <line x1="190" y1="130" x2="220" y2="148" stroke="#0ea5e9" stroke-width="11" stroke-linecap="round"/>
          <line x1="85" y1="135" x2="40" y2="145" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Hips to Heels • Forehead to Floor • Decompress Spine</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: CHILD'S POSE</text>
      </svg>
    `
  },
  {
    id: 'yoga-knee-chest',
    name: 'Supine Knee-to-Chest Hug',
    match: ['supine knee-to-chest hug', 'knee-to-chest'],
    targetMuscles: ['Lumbar Decompression', 'Glute Max', 'Hip Extensors'],
    formCue: 'Lie flat on back • Hug both knees gently to chest • Rock softly side-to-side to massage lower back',
    tempo: 'Gentle Restorative Rocking',
    icon: '🫂',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-knee-hug">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="knee-hug-group">
          <circle cx="85" cy="138" r="13" fill="#f97316"/>
          <line x1="95" y1="140" x2="185" y2="140" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <circle cx="150" cy="138" r="12" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <polyline points="185,140 180,105 150,100" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round" fill="none"/>
          <polyline points="120,135 150,95 170,105" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" fill="none"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Knees to Chest • Soft Side-to-Side Lumbar Rocking</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: KNEE-TO-CHEST HUG</text>
      </svg>
    `
  },
  {
    id: 'yoga-lying-twist',
    name: 'Lying Spinal Twist',
    match: ['lying spinal twist'],
    targetMuscles: ['Thoracic Spine', 'Piriformis & Glutes', 'Pectorals'],
    formCue: 'Arms outstretched in T-shape • Drop bent knees gently to right for 35s • Switch to left',
    tempo: '35s Right • 35s Left',
    icon: '🌀',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-lying-twist">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="lying-twist-group">
          <circle cx="95" cy="135" r="13" fill="#f97316"/>
          <line x1="105" y1="138" x2="185" y2="138" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <circle cx="160" cy="135" r="11" fill="#ec4899" class="muscle-glow pulse-core"/>
          <line x1="120" y1="138" x2="120" y2="90" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
          <polyline points="185,138 215,120 235,145" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round" fill="none" class="anim-twist-legs"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Arms Out Wide • Soft Knee Drop to Side</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#ec4899" font-size="12" font-weight="700">FORM BLUEPRINT: LYING SPINAL TWIST</text>
      </svg>
    `
  },
  {
    id: 'yoga-legs-wall',
    name: 'Legs Up Against Wall / Box Breathing',
    match: ['legs up against wall / box breathing', 'legs up against wall', 'legs up', 'box breathing', 'pranayama & centering meditation'],
    targetMuscles: ['Venous Return & Lymphatic Drainage', 'Parasympathetic Nervous System'],
    formCue: 'Rest legs vertically against wall • Inhale 4s • Hold 4s • Exhale 4s • Hold 4s',
    tempo: '4-4-4-4 Box Breathing Cycle',
    icon: '🧱',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-legs-wall">
        <line x1="220" y1="20" x2="220" y2="155" stroke="#64748b" stroke-width="6"/>
        <line x1="20" y1="155" x2="300" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <rect x="50" y="35" width="50" height="50" fill="none" stroke="#14b8a6" stroke-width="2" rx="4" class="anim-box-breath"/>
        <text x="75" y="64" text-anchor="middle" fill="#14b8a6" font-size="10" font-weight="800">4-4-4-4</text>
        <g class="legs-wall-group">
          <circle cx="100" cy="145" r="13" fill="#f97316"/>
          <line x1="110" y1="148" x2="210" y2="148" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="210" y1="148" x2="210" y2="40" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round"/>
          <circle cx="210" cy="40" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Elevated Legs • 4s Inhale • 4s Hold • 4s Exhale • 4s Hold</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: LEGS UP WALL</text>
      </svg>
    `
  },
  {
    id: 'yoga-down-dog-cobra',
    name: 'Downward Facing Dog to Cobra Flow',
    match: ['downward facing dog to cobra', 'downward facing dog', 'cobra', 'surya namaskar'],
    targetMuscles: ['Calves & Hamstrings', 'Shoulders & Spine', 'Abdominals'],
    formCue: 'Press heels to floor in inverted V (Down Dog) • Ripple spine forward into gentle Cobra backbend',
    tempo: 'Smooth Vinyasa Flow',
    icon: '🐕',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-downdog-cobra">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="dog-cobra-group">
          <circle cx="105" cy="115" r="13" fill="#f97316" class="anim-dog-head"/>
          <line x1="115" y1="110" x2="160" y2="55" stroke="#38bdf8" stroke-width="12" stroke-linecap="round" class="anim-dog-torso"/>
          <line x1="160" y1="55" x2="220" y2="148" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round" class="anim-dog-legs"/>
          <line x1="110" y1="115" x2="80" y2="150" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
          <circle cx="160" cy="55" r="7" fill="#f43f5e" class="muscle-glow"/>
          <circle cx="80" cy="150" r="5" fill="#f97316"/>
          <circle cx="220" cy="148" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Press Heels Down • Ripple into Gentle Cobra</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: DOWNWARD DOG & COBRA</text>
      </svg>
    `
  },
  {
    id: 'yoga-low-lunge-splits',
    name: 'Low Lunge to Half Splits Flow',
    match: ['low lunge to half splits flow', 'low lunge', 'half splits'],
    targetMuscles: ['Psoas / Hip Flexors', 'Hamstrings', 'Quadriceps'],
    formCue: 'Sink hips into deep low lunge (90s) • Shift weight back, straighten front leg into half splits',
    tempo: '90s Right Leg • 90s Left Leg',
    icon: '🧘',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-lunge-splits">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="splits-group">
          <circle cx="140" cy="45" r="14" fill="#f97316"/>
          <line x1="140" y1="58" x2="140" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="140" y1="68" x2="170" y2="35" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
          <polyline points="140,105 185,120 185,150" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" fill="none" class="muscle-glow"/>
          <polyline points="140,105 85,130 60,150" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round" fill="none"/>
          <circle cx="185" cy="150" r="6" fill="#f97316"/>
          <circle cx="60" cy="150" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Deep Hip Flexor Release • Shift Back for Hamstring Fold</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: LOW LUNGE TO SPLITS</text>
      </svg>
    `
  },
  {
    id: 'yoga-butterfly-fold',
    name: 'Seated Butterfly & Forward Fold',
    match: ['seated butterfly & forward fold', 'seated & floor hip openers', 'butterfly'],
    targetMuscles: ['Adductors (Inner Thighs)', 'Glutes', 'Lower Back'],
    formCue: 'Press soles of feet together • Let knees fall outward • Hinge from hips with straight spine',
    tempo: 'Slow Restorative Hold',
    icon: '🦋',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-butterfly">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="butterfly-group">
          <circle cx="160" cy="55" r="14" fill="#f97316" class="anim-fold-head"/>
          <line x1="160" y1="68" x2="160" y2="135" stroke="#38bdf8" stroke-width="13" stroke-linecap="round" class="anim-fold-spine"/>
          <circle cx="160" cy="130" r="12" fill="#ec4899" class="muscle-glow pulse-core"/>
          <path d="M 160 135 L 120 140 L 160 150" stroke="#0ea5e9" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 160 135 L 200 140 L 160 150" stroke="#0ea5e9" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="160" y1="80" x2="160" y2="150" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Soles Together • Gentle Hip Hinge • Release Inner Thighs</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#ec4899" font-size="12" font-weight="700">FORM BLUEPRINT: BUTTERFLY FOLD</text>
      </svg>
    `
  },
  {
    id: 'mobility-worlds-greatest',
    name: 'World’s Greatest Stretch Flow',
    match: ['world’s greatest stretch flow', "world's greatest stretch flow", 'world’s greatest stretch', "world's greatest stretch"],
    targetMuscles: ['Thoracic Spine', 'Hip Flexors', 'Hamstrings', 'Adductors'],
    formCue: 'Deep lunge • Bring inside elbow toward instep • Rotate arm and ribcage wide to the sky',
    tempo: '90s Right Side • 90s Left Side',
    icon: '🌍',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-worlds-greatest">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="greatest-group">
          <circle cx="120" cy="70" r="14" fill="#f97316"/>
          <line x1="125" y1="80" x2="175" y2="110" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
          <line x1="125" y1="80" x2="145" y2="20" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" class="anim-sky-reach"/>
          <polygon points="145,15 140,26 150,26" fill="#fbbf24"/>
          <line x1="125" y1="80" x2="105" y2="150" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
          <polyline points="175,110 135,130 135,150" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="muscle-glow" fill="none"/>
          <line x1="175" y1="110" x2="255" y2="148" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <circle cx="105" cy="150" r="5" fill="#f97316"/>
          <circle cx="135" cy="150" r="6" fill="#f97316"/>
          <circle cx="255" cy="148" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Elbow to Instep • Rotate Thoracic Spine to Sky</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="700">FORM BLUEPRINT: WORLD'S GREATEST STRETCH</text>
      </svg>
    `
  },
  {
    id: 'mobility-90-90-hips',
    name: '90/90 Hip Mobility Switches',
    match: ['90/90 hip mobility switches', 'warmup hip openers & good mornings', '90/90'],
    targetMuscles: ['Internal & External Hip Rotators', 'Glute Medius', 'Joint Capsule'],
    formCue: 'Sit with front leg and back leg at 90° angles • Smoothly rotate knees from right to left',
    tempo: 'Smooth Controlled Transition',
    icon: '📐',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-90-90">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="ninety-group">
          <circle cx="140" cy="50" r="14" fill="#f97316"/>
          <line x1="140" y1="64" x2="150" y2="120" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <circle cx="150" cy="120" r="12" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <polyline points="150,120 190,135 180,155" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round" fill="none"/>
          <polyline points="150,120 105,130 90,150" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" fill="none"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">90° Front & Back Angles • Upright Spine Hip Rotation</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: 90/90 HIP SWITCHES</text>
      </svg>
    `
  },
  {
    id: 'mobility-puppy-dog',
    name: 'Puppy Dog Shoulder Extension',
    match: ['puppy dog shoulder extension', 'puppy dog'],
    targetMuscles: ['Thoracic Spine', 'Latissimus Dorsi', 'Pectorals & Deltoids'],
    formCue: 'Keep hips stacked directly over knees • Walk hands forward and melt chest toward floor',
    tempo: 'Slow Restorative Breathing',
    icon: '🐶',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-puppy-dog">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="puppy-group">
          <circle cx="95" cy="125" r="13" fill="#f97316"/>
          <line x1="105" y1="125" x2="190" y2="70" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <circle cx="140" cy="100" r="11" fill="#8b5cf6" class="muscle-glow pulse-core"/>
          <line x1="190" y1="70" x2="200" y2="150" stroke="#0ea5e9" stroke-width="11" stroke-linecap="round"/>
          <line x1="95" y1="125" x2="45" y2="148" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Hips Over Knees • Melt Heart & Shoulders to Floor</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#8b5cf6" font-size="12" font-weight="700">FORM BLUEPRINT: PUPPY DOG EXTENSION</text>
      </svg>
    `
  },
  {
    id: 'mobility-pigeon-pose',
    name: 'Pigeon Pose / Figure-4 Stretch',
    match: ['pigeon pose / figure-4 stretch', 'pigeon pose', 'pigeon', 'figure-4'],
    targetMuscles: ['Deep Piriformis', 'Gluteus Medius', 'Iliotibial Band'],
    formCue: 'Place front shin at comfortable angle • Keep hips square • Gently fold torso forward',
    tempo: '90s Right Leg • 90s Left Leg',
    icon: '🕊️',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-pigeon-pose">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="pigeon-group">
          <circle cx="120" cy="80" r="14" fill="#f97316"/>
          <line x1="125" y1="90" x2="160" y2="135" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <circle cx="155" cy="130" r="12" fill="#ec4899" class="muscle-glow pulse-core"/>
          <polyline points="160,135 125,145 150,150" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" fill="none"/>
          <line x1="160" y1="135" x2="260" y2="148" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <line x1="125" y1="95" x2="110" y2="150" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Square Hips • Deep Piriformis & Glute Release</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#ec4899" font-size="12" font-weight="700">FORM BLUEPRINT: PIGEON POSE</text>
      </svg>
    `
  },
  {
    id: 'yoga-warrior-triangle',
    name: 'Warrior II & Triangle Standing Postures',
    match: ['warrior ii & triangle standing postures', 'warrior ii', 'warrior', 'triangle'],
    targetMuscles: ['Adductors', 'Quadriceps', 'Core Stability', 'Shoulders'],
    formCue: 'Deep 90° front knee bend • Arms outstretched horizontally • Ground back foot firmly at 45°',
    tempo: 'Strong Grounded Breath',
    icon: '⚔️',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-warrior">
        <line x1="20" y1="155" x2="300" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="warrior-group">
          <circle cx="160" cy="40" r="14" fill="#f97316"/>
          <line x1="160" y1="54" x2="160" y2="105" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="160" y1="65" x2="90" y2="65" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
          <line x1="160" y1="65" x2="230" y2="65" stroke="#fbbf24" stroke-width="8" stroke-linecap="round"/>
          <polyline points="160,105 210,120 210,155" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" fill="none" class="muscle-glow"/>
          <line x1="160" y1="105" x2="100" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <circle cx="210" cy="155" r="6" fill="#f97316"/>
          <circle cx="100" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Grounded Stance • Gaze Over Front Fingertips</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: WARRIOR II</text>
      </svg>
    `
  },
  {
    id: 'yoga-mountain-reach',
    name: 'Mountain Pose to Overhead Reach',
    match: ['mountain pose to overhead reach', 'mountain pose'],
    targetMuscles: ['Postural Aligners', 'Core Transverse', 'Shoulder Girdle'],
    formCue: 'Ground feet evenly • Tuck pelvis slightly • Reach fingertips to sky and lengthen entire spine',
    tempo: 'Full Inhale Elongation',
    icon: '🏔️',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-mountain-pose">
        <line x1="40" y1="155" x2="280" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="mountain-group">
          <circle cx="160" cy="40" r="14" fill="#f97316"/>
          <line x1="160" y1="54" x2="160" y2="110" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <line x1="160" y1="65" x2="135" y2="15" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
          <line x1="160" y1="65" x2="185" y2="15" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
          <line x1="160" y1="110" x2="145" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <line x1="160" y1="110" x2="175" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <circle cx="145" cy="155" r="5" fill="#f97316"/>
          <circle cx="175" cy="155" r="5" fill="#f97316"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Ground All 4 Foot Corners • Reach Tall to Ceiling</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: MOUNTAIN POSE</text>
      </svg>
    `
  },
  {
    id: 'yoga-savasana',
    name: 'Deep Savasana Recovery Breath',
    match: ['deep savasana recovery breath', 'guided body scan & savasana', 'full body cool down & guided breathing', 'savasana'],
    targetMuscles: ['Full Body Muscle Downregulation', 'Heart Rate Recovery', 'Nervous System'],
    formCue: 'Lie completely still • Let arms fall open • Release all muscle tension and focus on slow natural breathing',
    tempo: 'Complete Restful Stillness',
    icon: '✨',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-savasana">
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <ellipse cx="160" cy="140" rx="90" ry="25" fill="none" stroke="rgba(20, 184, 166, 0.35)" stroke-width="2" class="anim-savasana-pulse"/>
        <g class="savasana-group">
          <circle cx="75" cy="140" r="13" fill="#f97316"/>
          <line x1="88" y1="144" x2="250" y2="144" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
          <line x1="110" y1="144" x2="135" y2="146" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
          <line x1="220" y1="144" x2="270" y2="147" stroke="#0ea5e9" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Total Relaxation • Parasympathetic Recovery Glow</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: SAVASANA RECOVERY</text>
      </svg>
    `
  },
  {
    id: 'mobility-warmup-general',
    name: 'Dynamic Joint Mobility & Warmup',
    match: ['dynamic joint prep & heart rate ramp', 'dynamic joint prep', 'joint mobility & arm rotations', 'dynamic warmup & toe touches', 'progressive warmup & mobility', 'static recovery stretches & hydration', 'dynamic warmup', 'joint mobility'],
    targetMuscles: ['Synovial Fluid Circulation', 'Multi-Planar Joints', 'Hamstrings & Hips'],
    formCue: 'Fluid arm circles and gentle hip hinges to prepare connective tissue for movement',
    tempo: 'Smooth Dynamic Flow',
    icon: '🔄',
    renderSvg: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas anim-joint-warmup">
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <circle cx="160" cy="70" r="35" stroke="rgba(56, 189, 248, 0.35)" stroke-width="2" stroke-dasharray="4,4" fill="none" class="anim-orbit-ring"/>
        <g class="warmup-group">
          <circle cx="160" cy="40" r="14" fill="#f97316"/>
          <line x1="160" y1="54" x2="160" y2="110" stroke="#38bdf8" stroke-width="13" stroke-linecap="round"/>
          <polyline points="160,68 120,55 110,80" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" fill="none" class="anim-warmup-arm-l"/>
          <polyline points="160,68 200,55 210,80" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" fill="none" class="anim-warmup-arm-r"/>
          <line x1="160" y1="110" x2="135" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          <line x1="160" y1="110" x2="185" y2="155" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Multi-Planar Joint Circles • Elevate Heart Rate Smoothly</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: DYNAMIC MOBILITY</text>
      </svg>
    `
  }
];

/**
 * Resolves dedicated exercise visual data with matching verification.
 */
export function getExerciseVisualData(exerciseName = '', category = '', tips = '') {
  const norm = (exerciseName || '').toLowerCase().trim();
  const cat = (category || '').toLowerCase().trim();

  // 1. Direct Specific Keyword Match (Ordered from specific to general)
  for (const entry of EXERCISE_VISUAL_REGISTRY) {
    for (const kw of entry.match) {
      if (norm.includes(kw.toLowerCase())) {
        return {
          ...entry,
          isExactMatch: true,
          matchedKeyword: kw
        };
      }
    }
  }

  // 2. Secondary Category Fallbacks
  if (norm.includes('stretch') || cat.includes('stretch') || cat.includes('mobility')) {
    const fallback = EXERCISE_VISUAL_REGISTRY.find(e => e.id === 'mobility-warmup-general');
    return { ...fallback, isExactMatch: true, matchedKeyword: 'mobility-fallback' };
  }

  if (norm.includes('cardio') || norm.includes('hiit') || cat.includes('cardio') || cat.includes('hiit')) {
    const fallback = EXERCISE_VISUAL_REGISTRY.find(e => e.id === 'cardio-jacks-knees');
    return { ...fallback, isExactMatch: true, matchedKeyword: 'cardio-fallback' };
  }

  if (cat.includes('yoga')) {
    const fallback = EXERCISE_VISUAL_REGISTRY.find(e => e.id === 'yoga-childs-pose');
    return { ...fallback, isExactMatch: true, matchedKeyword: 'yoga-fallback' };
  }

  // Default Universal Fallback
  const defaultEntry = EXERCISE_VISUAL_REGISTRY.find(e => e.id === 'pushup-standard') || EXERCISE_VISUAL_REGISTRY[0];
  return { ...defaultEntry, isExactMatch: false, matchedKeyword: 'default' };
}

/**
 * Validates that an exercise visual correctly corresponds to the exercise name.
 */
export function verifyExerciseVisual(exerciseName) {
  const visualData = getExerciseVisualData(exerciseName);
  return {
    verified: Boolean(visualData && visualData.id),
    exerciseName,
    visualName: visualData.name,
    targetMuscles: visualData.targetMuscles,
    id: visualData.id
  };
}

/**
 * Generates the full, rich, responsive exercise visual card HTML.
 */
export function getExerciseAnimationHtml(exerciseName, category = '', tips = '', options = {}) {
  const data = getExerciseVisualData(exerciseName, category, tips);
  const showFallback = options.fallbackOnly || false;

  const visualContent = showFallback ? data.renderFallback() : data.renderSvg();

  return `
    <div class="exercise-anim-visual-wrapper" id="exercise-visual-${data.id}">
      <!-- Biomechanical Visual Frame -->
      <div class="exercise-anim-visual">
        ${visualContent}
        
        <!-- Interactive Fallback Blueprint Switcher -->
        <button class="exercise-fallback-toggle-btn" 
                onclick="window.AayuApp.toggleExerciseVisualMode('${data.id}')"
                title="Toggle Form Blueprint / Motion Animation">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <line x1="9" y1="3" x2="9" y2="21"/>
          </svg>
          <span class="fallback-toggle-label">Form Blueprint</span>
        </button>
      </div>

      <!-- Form Intelligence Specs Bar -->
      <div class="exercise-form-meta-bar">
        <div class="exercise-form-target-muscles">
          <span class="muscle-pill-label">🎯 Active Focus:</span>
          ${data.targetMuscles.slice(0, 3).map(m => `
            <span class="muscle-tag">${m}</span>
          `).join('')}
        </div>
        
        <div class="exercise-form-tempo-badge" title="Cadence / Tempo Guidance">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
          ${data.tempo}
        </div>
      </div>

      <!-- Biomechanical Precision Cue -->
      <div class="exercise-form-cue-box">
        <div class="cue-bullet">✦</div>
        <div class="cue-text"><strong>Proper Form:</strong> ${data.formCue}</div>
      </div>
    </div>
  `;
}
