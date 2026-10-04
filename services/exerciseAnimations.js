// AayuMove Structured Exercise Visual Library - Human Demonstration Engine
// Replaces stick figures with detailed contoured human body visual demonstrations.
// Includes movement kinematics, joint angles, active muscle focus, and fallback schematics.

export const EXERCISE_VISUAL_REGISTRY = [
  // --- 1. PIKE PUSH-UP ---
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
        <!-- Floor Mat -->
        <rect x="25" y="148" width="270" height="4" rx="2" fill="rgba(56, 189, 248, 0.25)"/>
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="6,6"/>
        
        <!-- Human Figure Group -->
        <g class="pike-body-group">
          <!-- Head & Hair -->
          <ellipse cx="98" cy="115" rx="10" ry="11" fill="#ffedd5" class="anim-head"/>
          <path d="M 90 110 Q 98 100 106 110 Q 102 104 94 105 Z" fill="#1e293b"/>
          
          <!-- Inverted Torso (T-Shirt Contour) -->
          <path d="M 106 112 L 155 60 L 170 72 L 118 124 Z" fill="#0284c7" rx="3"/>
          <path d="M 112 110 L 150 68" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          
          <!-- Pressing Arm (Bicep / Forearm Contour) -->
          <path d="M 110 118 L 92 135 L 82 150" stroke="#fdba74" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="pike-arm-flex" fill="none"/>
          <circle cx="82" cy="150" r="5" fill="#1e293b"/>
          
          <!-- Legs (Athletic Shorts & Legging Contours) -->
          <path d="M 155 60 L 170 72 L 220 142 L 210 148 Z" fill="#1e293b"/>
          <path d="M 170 72 L 220 142" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          
          <!-- Sneaker Footwear -->
          <path d="M 215 145 L 230 148 L 230 152 L 210 152 Z" fill="#3b82f6"/>
          <line x1="210" y1="152" x2="230" y2="152" stroke="#ffffff" stroke-width="1.5"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Hips High • Crown of Head Forward to Hands</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="150" x2="290" y2="150" stroke="#64748b" stroke-width="2"/>
        <polyline points="82,150 162,55 220,150" stroke="#0284c7" stroke-width="8" fill="none"/>
        <circle cx="98" cy="115" r="10" fill="#ffedd5"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: PIKE PUSH-UP</text>
      </svg>
    `
  },

  // --- 2. DIAMOND PUSH-UP ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="diamond-pushup-group">
          <!-- Head & Profile -->
          <ellipse cx="85" cy="78" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 78 72 Q 85 64 92 72 Q 88 67 80 68 Z" fill="#1e293b"/>
          
          <!-- Human Torso Silhouette -->
          <path d="M 94 85 L 195 115 L 190 128 L 90 96 Z" fill="#0284c7"/>
          <path d="M 100 88 L 155 106" stroke="#ec4899" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          
          <!-- Diamond Hand Placement Arms -->
          <path d="M 102 90 L 98 122 L 90 150" stroke="#fdba74" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="diamond-arm-flex" fill="none"/>
          <polygon points="90,150 96,144 102,150 96,156" fill="#ec4899"/>
          
          <!-- Muscular Legs & Shorts -->
          <path d="M 190 115 L 265 145 L 260 152 L 185 125 Z" fill="#1e293b"/>
          <path d="M 195 117 L 265 145" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <path d="M 260 143 L 275 146 L 275 150 L 255 150 Z" fill="#3b82f6"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Narrow Hand Diamond • Peak Triceps Contraction</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="150" x2="290" y2="150" stroke="#64748b" stroke-width="2"/>
        <line x1="85" y1="90" x2="265" y2="145" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
        <circle cx="85" cy="78" r="10" fill="#ffedd5"/>
        <polygon points="90,150 96,144 102,150 96,156" fill="#ec4899"/>
        <text x="160" y="30" text-anchor="middle" fill="#ec4899" font-size="12" font-weight="700">FORM BLUEPRINT: DIAMOND PUSH-UP</text>
      </svg>
    `
  },

  // --- 3. WALL PUSH-UP ---
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
        <line x1="70" y1="20" x2="70" y2="155" stroke="#64748b" stroke-width="6" stroke-linecap="round"/>
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="wall-body-group">
          <!-- Head -->
          <ellipse cx="120" cy="42" rx="10" ry="11" fill="#ffedd5"/>
          <!-- Human Torso Silhouette -->
          <path d="M 125 54 L 175 118 L 165 125 L 115 62 Z" fill="#0284c7"/>
          <!-- Pressing Arm -->
          <path d="M 125 60 L 95 72 L 70 78" stroke="#fdba74" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="wall-arm-flex" fill="none"/>
          <!-- Legs & Sneakers -->
          <path d="M 168 120 L 202 152 L 195 155 L 160 125 Z" fill="#1e293b"/>
          <path d="M 198 150 L 212 153 L 212 155 L 192 155 Z" fill="#3b82f6"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Low-Impact Press • Fluid Shoulder Circles</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="70" y1="20" x2="70" y2="155" stroke="#64748b" stroke-width="4"/>
        <line x1="120" y1="50" x2="198" y2="152" stroke="#0284c7" stroke-width="6"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: WALL PUSH-UP</text>
      </svg>
    `
  },

  // --- 4. DEFICIT PUSH-UP ---
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
        <rect x="65" y="135" width="30" height="15" fill="#475569" rx="2"/>
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="pushup-deficit-group">
          <ellipse cx="80" cy="82" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 90 90 L 192 116 L 188 128 L 86 102 Z" fill="#0284c7"/>
          <path d="M 98 92 L 160 108" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <path d="M 98 94 L 85 115 L 80 135" stroke="#fdba74" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="pushup-arm-flex" fill="none"/>
          <path d="M 190 118 L 262 148 L 258 152 L 185 122 Z" fill="#1e293b"/>
          <path d="M 258 145 L 272 148 L 272 152 L 252 152 Z" fill="#3b82f6"/>
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

  // --- 5. STANDARD PUSH-UP ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="6,6"/>
        <g class="pushup-pivot-group">
          <!-- Head -->
          <ellipse cx="85" cy="78" rx="10" ry="11" fill="#ffedd5" class="anim-head"/>
          <!-- Muscular Torso Contour -->
          <path d="M 94 85 L 198 115 L 192 128 L 88 98 Z" fill="#0284c7"/>
          <path d="M 102 88 L 165 108" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <!-- Arm (Bicep/Tricep & Forearm) -->
          <path d="M 102 90 L 88 120 L 80 150" stroke="#fdba74" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="pushup-arm-flex" fill="none"/>
          <!-- Legs (Shorts & Tights) -->
          <path d="M 195 117 L 268 146 L 262 152 L 188 123 Z" fill="#1e293b"/>
          <path d="M 262 145 L 276 148 L 276 152 L 256 152 Z" fill="#3b82f6"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Elbows 45° • Neutral Spine</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="150" x2="290" y2="150" stroke="#64748b" stroke-width="2"/>
        <line x1="85" y1="90" x2="268" y2="146" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
        <circle cx="85" cy="78" r="10" fill="#ffedd5"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">STATIC FORM BLUEPRINT: PUSH-UP</text>
      </svg>
    `
  },

  // --- 6. TEMPO CHAIR SQUATS ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="chair-squat-group">
          <!-- Head -->
          <ellipse cx="160" cy="48" rx="10" ry="11" fill="#ffedd5"/>
          <!-- Torso -->
          <path d="M 152 58 L 168 58 L 152 108 L 136 108 Z" fill="#0284c7"/>
          <!-- Balance Arm Extended -->
          <path d="M 162 68 L 198 65" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <!-- Thigh / Quad Contour -->
          <path d="M 140 108 L 178 124 L 172 134 L 134 118 Z" fill="#f43f5e" class="muscle-glow"/>
          <!-- Shin & Foot -->
          <path d="M 175 125 L 175 155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <path d="M 170 152 L 185 152 L 185 155 L 168 155 Z" fill="#3b82f6"/>
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

  // --- 7. BULGARIAN SPLIT SQUAT ---
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
        <line x1="20" y1="155" x2="300" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="bulgarian-group">
          <ellipse cx="170" cy="42" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 162 52 L 178 52 L 176 102 L 160 102 Z" fill="#0284c7"/>
          <!-- Front Working Leg (Deep 90 deg) -->
          <path d="M 168 102 L 208 118 L 208 155" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="muscle-glow" fill="none"/>
          <path d="M 202 152 L 216 152 L 216 155 L 198 155 Z" fill="#3b82f6"/>
          <!-- Rear Elevated Leg -->
          <path d="M 168 102 L 110 122 L 75 112" stroke="#fdba74" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
        <text x="170" y="24" text-anchor="middle" class="anim-cue-text">Rear Foot Elevated • Drop Hip Straight Down</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <rect x="40" y="110" width="40" height="45" fill="#334155"/>
        <polyline points="170,102 208,118 208,155" stroke="#f43f5e" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: BULGARIAN SPLIT SQUAT</text>
      </svg>
    `
  },

  // --- 8. PISTOL SQUAT ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="pistol-group">
          <ellipse cx="150" cy="48" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 142 58 L 158 58 L 142 112 L 126 112 Z" fill="#0284c7"/>
          <path d="M 150 68 L 215 65" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <path d="M 134 112 L 154 132 L 140 155" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="muscle-glow" fill="none"/>
          <path d="M 134 112 L 235 128" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Full Single-Leg Extension • Core Engaged</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="134" y1="112" x2="235" y2="128" stroke="#fdba74" stroke-width="6"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: PISTOL SQUAT</text>
      </svg>
    `
  },

  // --- 9. JUMP SQUAT ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <path d="M 120 130 L 120 70" stroke="#f97316" stroke-width="2.5" stroke-dasharray="4,4"/>
        <polygon points="120,60 115,72 125,72" fill="#f97316"/>
        <g class="jump-squat-group">
          <ellipse cx="160" cy="38" rx="10" ry="11" fill="#ffedd5" class="anim-head"/>
          <path d="M 152 48 L 168 48 L 168 102 L 152 102 Z" fill="#0284c7"/>
          <path d="M 160 58 L 125 35" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <path d="M 160 58 L 195 35" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <path d="M 160 102 L 140 145" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="muscle-glow"/>
          <path d="M 160 102 L 180 145" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="muscle-glow"/>
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

  // --- 10. CURTSY & SUMO ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="curtsy-group">
          <ellipse cx="160" cy="38" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 152 48 L 168 48 L 168 98 L 152 98 Z" fill="#0284c7"/>
          <path d="M 160 98 L 125 155" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="muscle-glow"/>
          <path d="M 160 98 L 195 155" stroke="#ec4899" stroke-width="9" stroke-linecap="round" class="muscle-glow"/>
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

  // --- 11. WALL SIT ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="wall-sit-group">
          <ellipse cx="105" cy="48" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 97 58 L 110 58 L 110 108 L 97 108 Z" fill="#0284c7"/>
          <path d="M 102 108 L 165 108" stroke="#f43f5e" stroke-width="11" stroke-linecap="round" class="muscle-glow pulse-quads"/>
          <path d="M 165 108 L 165 155" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <path d="M 160 152 L 175 152 L 175 155 L 158 155 Z" fill="#3b82f6"/>
        </g>
        <text x="180" y="24" text-anchor="middle" class="anim-cue-text">Strict 90° Knee & Hip Angle • Breathe Deeply</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="102,60 102,108 165,108 165,155" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="180" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: WALL SIT</text>
      </svg>
    `
  },

  // --- 12. AIR SQUAT ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="squat-body-group">
          <ellipse cx="150" cy="42" rx="10" ry="11" fill="#ffedd5" class="anim-head"/>
          <path d="M 142 52 L 158 52 L 152 102 L 138 102 Z" fill="#0284c7" class="squat-torso"/>
          <path d="M 150 65 L 195 60" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <path d="M 145 102 L 180 122" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="squat-thigh muscle-glow"/>
          <path d="M 180 122 L 180 155" stroke="#fdba74" stroke-width="8" stroke-linecap="round" class="squat-shin"/>
          <path d="M 175 152 L 190 152 L 190 155 L 173 155 Z" fill="#3b82f6"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Hips Back & Down • Chest Up • Drive Heels</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="150,52 145,102 180,122 180,155" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: AIR SQUAT</text>
      </svg>
    `
  },

  // --- 13. SHOULDER TAPS ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="tap-group">
          <ellipse cx="95" cy="72" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 104 80 L 202 102 L 198 114 L 98 92 Z" fill="#0284c7"/>
          <path d="M 108 86 L 108 150" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <path d="M 108 86 L 132 90 L 112 83" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="tapping-arm" fill="none"/>
          <path d="M 200 105 L 260 148" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
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

  // --- 14. FOREARM PLANK ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="plank-dip-group">
          <ellipse cx="85" cy="82" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 94 90 L 202 108 L 198 120 L 88 100 Z" fill="#0284c7" class="plank-spine"/>
          <path d="M 108 92 L 178 105" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <path d="M 98 94 L 92 125 L 78 150" stroke="#fdba74" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M 200 110 L 265 148" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Rigid Core • Squeeze Glutes • Controlled Hip Dips</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="85" y1="90" x2="265" y2="148" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: FOREARM PLANK</text>
      </svg>
    `
  },

  // --- 15. DOORFRAME ROW ---
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
        <line x1="20" y1="155" x2="300" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="row-body-group">
          <ellipse cx="150" cy="52" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 144 64 L 102 120 L 92 128 L 134 70 Z" fill="#0284c7"/>
          <path d="M 138 72 L 112 108" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" class="muscle-glow"/>
          <path d="M 138 72 L 98 72 L 62 78" stroke="#fdba74" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" class="row-arm-pull" fill="none"/>
          <path d="M 98 123 L 78 155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="175" y="24" text-anchor="middle" class="anim-cue-text">Squeeze Shoulder Blades • Pull Elbows Past Ribs</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <rect x="50" y="20" width="8" height="135" fill="#475569"/>
        <line x1="145" y1="65" x2="80" y2="155" stroke="#0284c7" stroke-width="6"/>
        <text x="175" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: BODYWEIGHT ROW</text>
      </svg>
    `
  },

  // --- 16. REVERSE LUNGE ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="lunge-drive-group">
          <ellipse cx="150" cy="38" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 142 48 L 158 48 L 158 98 L 142 98 Z" fill="#0284c7"/>
          <path d="M 150 98 L 190 116 L 190 155" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="muscle-glow" fill="none"/>
          <path d="M 150 98 L 100 122 L 90 150" stroke="#fdba74" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="lunge-rear-dynamic" fill="none"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">90° Knee Angle • Explosive Forward Knee Drive</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="150,98 190,116 190,155" stroke="#f43f5e" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: REVERSE LUNGE</text>
      </svg>
    `
  },

  // --- 17. GLUTE BRIDGE ---
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
        <line x1="20" y1="155" x2="300" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="bridge-pivot-group">
          <ellipse cx="75" cy="140" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 85 142 L 175 98 L 170 110 L 80 148 Z" fill="#0284c7" class="bridge-torso"/>
          <circle cx="175" cy="98" r="10" fill="#f43f5e" class="muscle-glow pulse-glute"/>
          <path d="M 172 102 L 212 116 L 218 155" stroke="#fdba74" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="bridge-leg" fill="none"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Drive Heels • Full Pelvic Extension • Squeeze Glutes</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="75,142 175,98 218,155" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: GLUTE BRIDGE</text>
      </svg>
    `
  },

  // --- 18. CALF RAISES ---
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
        <line x1="40" y1="155" x2="280" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="calf-body-group">
          <ellipse cx="160" cy="38" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 152 48 L 168 48 L 168 102 L 152 102 Z" fill="#0284c7"/>
          <path d="M 160 58 L 140 18" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <path d="M 160 58 L 180 18" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <path d="M 160 102 L 160 145" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <circle cx="160" cy="132" r="7" fill="#f43f5e" class="muscle-glow"/>
          <circle cx="160" cy="150" r="5" fill="#1e293b" class="anim-tiptoe"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">High on Tiptoes • Peak Calf Contraction • Reach High</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="160" y1="20" x2="160" y2="150" stroke="#0284c7" stroke-width="6"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: CALF RAISE</text>
      </svg>
    `
  },

  // --- 19. DEADBUGS ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="deadbug-group">
          <ellipse cx="85" cy="136" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 95 135 L 202 135 L 202 145 L 95 145 Z" fill="#0284c7"/>
          <circle cx="150" cy="136" r="9" fill="#f43f5e" class="muscle-glow pulse-core"/>
          <path d="M 120 135 L 70 105" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="deadbug-arm-l"/>
          <path d="M 120 135 L 120 85" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="deadbug-arm-r"/>
          <polyline points="190,140 220,110 240,110" stroke="#fdba74" stroke-width="7" stroke-linecap="round" class="deadbug-leg-l" fill="none"/>
          <polyline points="190,140 230,135 270,140" stroke="#f43f5e" stroke-width="7" stroke-linecap="round" class="deadbug-leg-r" fill="none"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Lower Back Glued to Floor • Opposite Arm/Leg Motion</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="95" y1="140" x2="202" y2="140" stroke="#0284c7" stroke-width="6"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: DEADBUGS</text>
      </svg>
    `
  },

  // --- 20. BICYCLE CRUNCHES ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="bicycle-group">
          <ellipse cx="95" cy="112" rx="10" ry="11" fill="#ffedd5" class="anim-head"/>
          <path d="M 102 118 L 178 138 L 172 146 L 98 126 Z" fill="#0284c7"/>
          <circle cx="140" cy="125" r="9" fill="#ec4899" class="muscle-glow pulse-core"/>
          <path d="M 95 112 L 125 100 L 145 115" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <polyline points="175,140 160,105 130,95" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" class="bicycle-knee-in" fill="none"/>
          <line x1="175" y1="140" x2="250" y2="125" stroke="#fdba74" stroke-width="7" stroke-linecap="round" class="bicycle-leg-ext"/>
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

  // --- 21. RUSSIAN TWISTS ---
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
        <line x1="30" y1="150" x2="290" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="twist-group">
          <ellipse cx="120" cy="52" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 122 62 L 162 132 L 152 138 L 114 70 Z" fill="#0284c7"/>
          <circle cx="150" cy="120" r="9" fill="#ec4899" class="muscle-glow pulse-core"/>
          <path d="M 135 80 L 180 95 L 195 115" stroke="#fdba74" stroke-width="7" stroke-linecap="round" class="twist-arms" fill="none"/>
          <polyline points="160,135 205,105 240,115" stroke="#fdba74" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
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

  // --- 22. SUPERMAN HOLD ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="superman-group">
          <path d="M 90 120 Q 160 145 230 120" stroke="#0284c7" stroke-width="12" fill="none" stroke-linecap="round"/>
          <ellipse cx="75" cy="112" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 85 120 L 40 105" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <path d="M 110 128 Q 160 142 210 128" stroke="#f43f5e" stroke-width="5" fill="none" class="muscle-glow"/>
          <path d="M 230 120 L 280 105" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Lift Chest & Quads • Squeeze Glutes & Spinal Erectors</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <path d="M 90 120 Q 160 145 230 120" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: SUPERMAN HOLD</text>
      </svg>
    `
  },

  // --- 23. SPEED SKATERS ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <path d="M 80 130 Q 160 70 240 130" stroke="rgba(20, 184, 166, 0.4)" stroke-width="2" stroke-dasharray="4,4" fill="none"/>
        <g class="skater-body-group">
          <ellipse cx="140" cy="48" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 132 58 L 148 58 L 138 108 L 124 108 Z" fill="#0284c7"/>
          <path d="M 140 70 L 190 85" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="skater-arm-r"/>
          <path d="M 140 70 L 90 65" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="skater-arm-l"/>
          <path d="M 130 108 L 120 135 L 125 155" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="muscle-glow" fill="none"/>
          <path d="M 130 108 L 210 145" stroke="#fdba74" stroke-width="7" stroke-linecap="round" class="skater-trailing-leg"/>
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

  // --- 24. MOUNTAIN CLIMBERS ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="climber-group">
          <ellipse cx="85" cy="78" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 94 85 L 192 102 L 188 114 L 88 95 Z" fill="#0284c7"/>
          <path d="M 100 90 L 90 150" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <polyline points="190,105 135,115 110,135" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="climber-drive-l muscle-glow" fill="none"/>
          <line x1="190" y1="105" x2="260" y2="148" stroke="#fdba74" stroke-width="8" stroke-linecap="round" class="climber-ext-r"/>
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

  // --- 25. BURPEES ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="burpee-group">
          <ellipse cx="160" cy="42" rx="10" ry="11" fill="#ffedd5" class="anim-head"/>
          <path d="M 152 52 L 168 52 L 162 102 L 148 102 Z" fill="#0284c7" class="burpee-spine"/>
          <line x1="160" y1="65" x2="115" y2="25" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="burpee-arms"/>
          <line x1="160" y1="65" x2="205" y2="25" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="burpee-arms"/>
          <line x1="155" y1="102" x2="135" y2="150" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" class="burpee-legs"/>
          <line x1="155" y1="102" x2="175" y2="150" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" class="burpee-legs"/>
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

  // --- 26. SHADOW BOXING ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="boxer-group">
          <ellipse cx="130" cy="42" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 122 52 L 138 52 L 132 102 L 118 102 Z" fill="#0284c7"/>
          <polyline points="130,62 175,60 225,60" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" class="boxing-lead-punch muscle-glow" fill="none"/>
          <circle cx="228" cy="60" r="7" fill="#f97316" class="boxing-glove"/>
          <polyline points="125,65 110,80 120,55" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <line x1="125" y1="102" x2="100" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round" class="boxing-leg-l"/>
          <line x1="125" y1="102" x2="150" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round" class="boxing-leg-r"/>
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

  // --- 27. HIGH KNEES / HALF-JACKS ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="jack-group">
          <ellipse cx="160" cy="38" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 152 48 L 168 48 L 168 102 L 152 102 Z" fill="#0284c7"/>
          <line x1="160" y1="60" x2="120" y2="35" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="cardio-arm-l"/>
          <line x1="160" y1="60" x2="200" y2="35" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="cardio-arm-r"/>
          <polyline points="160,102 130,112 130,155" stroke="#fdba74" stroke-width="8" stroke-linecap="round" class="knee-pump-l" fill="none"/>
          <polyline points="160,102 195,92 200,128" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="knee-pump-r muscle-glow" fill="none"/>
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

  // --- 28. CHIN TUCKS & NECK ROLLS ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="neck-body-group">
          <ellipse cx="140" cy="42" rx="10" ry="11" fill="#ffedd5" class="anim-neck-head"/>
          <circle cx="140" cy="55" r="8" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <path d="M 132 55 L 148 55 L 148 118 L 132 118 Z" fill="#0284c7"/>
          <path d="M 140 118 L 165 155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
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

  // --- 29. SEATED SPINAL TWIST ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="twist-body-group">
          <ellipse cx="150" cy="42" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 142 52 L 158 52 L 158 118 L 142 118 Z" fill="#0284c7"/>
          <path d="M 150 70 L 150 105" stroke="#ec4899" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <polyline points="150,70 125,80 110,90" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 150 118 L 175 155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
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

  // --- 30. EAGLE ARMS ---
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
        <line x1="40" y1="155" x2="280" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="eagle-body-group">
          <ellipse cx="160" cy="42" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 152 52 L 168 52 L 168 112 L 152 112 Z" fill="#0284c7"/>
          <circle cx="160" cy="68" r="10" fill="#8b5cf6" class="muscle-glow pulse-core"/>
          <path d="M 160 68 L 150 88 L 165 72 L 160 48" stroke="#fdba74" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" class="anim-eagle-lift"/>
          <line x1="160" y1="112" x2="140" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <line x1="160" y1="112" x2="180" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
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

  // --- 31. CHEST EXPANSION ---
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
        <line x1="40" y1="155" x2="280" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <ellipse cx="170" cy="78" rx="30" ry="20" stroke="rgba(20, 184, 166, 0.4)" stroke-width="2" fill="none" class="anim-breath-pulse"/>
        <g class="chest-body-group">
          <ellipse cx="150" cy="42" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 142 52 L 158 52 L 162 112 L 148 112 Z" fill="#0284c7"/>
          <circle cx="162" cy="72" r="9" fill="#14b8a6" class="muscle-glow"/>
          <polyline points="152,68 125,82 120,102" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <line x1="155" y1="112" x2="140" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <line x1="155" y1="112" x2="170" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
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

  // --- 32. PALMING EYE RESET ---
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
        <circle cx="160" cy="62" r="45" fill="rgba(99, 102, 241, 0.15)" class="anim-calm-orb"/>
        <g class="palming-group">
          <ellipse cx="160" cy="58" rx="12" ry="13" fill="#ffedd5"/>
          <polyline points="135,88 148,63 156,60" stroke="#fdba74" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <polyline points="185,88 172,63 164,60" stroke="#fdba74" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M 152 72 L 168 72 L 168 132 L 152 132 Z" fill="#0284c7"/>
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

  // --- 33. WRIST STRETCH ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="wrist-group">
          <ellipse cx="130" cy="48" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 122 58 L 138 58 L 138 118 L 122 118 Z" fill="#0284c7"/>
          <line x1="130" y1="72" x2="220" y2="72" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <circle cx="175" cy="72" r="8" fill="#14b8a6" class="muscle-glow"/>
          <polyline points="220,72 220,52 210,62" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" fill="none" class="anim-wrist-pull"/>
          <line x1="130" y1="118" x2="150" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
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

  // --- 34. CHAIR CAT-COW ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="cat-cow-group">
          <ellipse cx="150" cy="42" rx="10" ry="11" fill="#ffedd5" class="anim-catcow-head"/>
          <path d="M 150 54 Q 130 88 150 118" stroke="#0284c7" stroke-width="12" fill="none" stroke-linecap="round" class="anim-spine-wave"/>
          <polyline points="150,70 175,90 180,118" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <line x1="150" y1="118" x2="175" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
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

  // --- 35. SIDE REACH ---
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
        <line x1="40" y1="155" x2="280" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="side-reach-group">
          <ellipse cx="180" cy="38" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 180 50 Q 170 88 150 118" stroke="#0284c7" stroke-width="12" fill="none" stroke-linecap="round"/>
          <path d="M 175 60 Q 165 90 145 116" stroke="#14b8a6" stroke-width="5" fill="none" class="muscle-glow"/>
          <path d="M 175 60 Q 210 25 225 12" stroke="#fdba74" stroke-width="6" fill="none" stroke-linecap="round"/>
          <line x1="150" y1="118" x2="135" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <line x1="150" y1="118" x2="165" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
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

  // --- 36. CHILD'S POSE ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="child-group">
          <ellipse cx="85" cy="130" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 95 128 Q 140 112 190 128" stroke="#0284c7" stroke-width="12" fill="none" stroke-linecap="round"/>
          <circle cx="160" cy="118" r="9" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <line x1="190" y1="128" x2="220" y2="146" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <line x1="85" y1="133" x2="40" y2="143" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
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

  // --- 37. KNEE TO CHEST ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="knee-hug-group">
          <ellipse cx="85" cy="136" rx="10" ry="11" fill="#ffedd5"/>
          <line x1="95" y1="138" x2="185" y2="138" stroke="#0284c7" stroke-width="12" stroke-linecap="round"/>
          <circle cx="150" cy="136" r="10" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <polyline points="185,138 180,103 150,98" stroke="#fdba74" stroke-width="9" stroke-linecap="round" fill="none"/>
          <polyline points="120,133 150,93 170,103" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
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

  // --- 38. LYING SPINAL TWIST ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="lying-twist-group">
          <ellipse cx="95" cy="133" rx="10" ry="11" fill="#ffedd5"/>
          <line x1="105" y1="136" x2="185" y2="136" stroke="#0284c7" stroke-width="12" stroke-linecap="round"/>
          <circle cx="160" cy="133" r="9" fill="#ec4899" class="muscle-glow pulse-core"/>
          <line x1="120" y1="136" x2="120" y2="88" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <polyline points="185,136 215,118 235,143" stroke="#fdba74" stroke-width="8" stroke-linecap="round" fill="none" class="anim-twist-legs"/>
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

  // --- 39. LEGS UP WALL ---
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
        <line x1="20" y1="155" x2="300" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <rect x="50" y="35" width="50" height="50" fill="none" stroke="#14b8a6" stroke-width="2" rx="4" class="anim-box-breath"/>
        <text x="75" y="64" text-anchor="middle" fill="#14b8a6" font-size="10" font-weight="800">4-4-4-4</text>
        <g class="legs-wall-group">
          <ellipse cx="100" cy="143" rx="10" ry="11" fill="#ffedd5"/>
          <line x1="110" y1="146" x2="210" y2="146" stroke="#0284c7" stroke-width="12" stroke-linecap="round"/>
          <line x1="210" y1="146" x2="210" y2="38" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
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

  // --- 40. DOWNWARD DOG TO COBRA ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="dog-cobra-group">
          <ellipse cx="105" cy="112" rx="10" ry="11" fill="#ffedd5" class="anim-dog-head"/>
          <line x1="115" y1="108" x2="160" y2="52" stroke="#0284c7" stroke-width="12" stroke-linecap="round" class="anim-dog-torso"/>
          <line x1="160" y1="52" x2="220" y2="146" stroke="#fdba74" stroke-width="9" stroke-linecap="round" class="anim-dog-legs"/>
          <line x1="110" y1="112" x2="80" y2="148" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <circle cx="160" cy="52" r="7" fill="#f43f5e" class="muscle-glow"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Press Heels Down • Ripple into Gentle Cobra</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="80,148 160,52 220,146" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: DOWNWARD DOG & COBRA</text>
      </svg>
    `
  },

  // --- 41. LOW LUNGE TO SPLITS ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="splits-group">
          <ellipse cx="140" cy="42" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 132 52 L 148 52 L 148 102 L 132 102 Z" fill="#0284c7"/>
          <polyline points="140,105 185,120 185,148" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" fill="none" class="muscle-glow"/>
          <polyline points="140,105 85,128 60,148" stroke="#fdba74" stroke-width="8" stroke-linecap="round" fill="none"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Deep Hip Flexor Release • Shift Back for Hamstring Fold</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="60,148 140,102 185,148" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: LOW LUNGE TO SPLITS</text>
      </svg>
    `
  },

  // --- 42. BUTTERFLY FOLD ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="butterfly-group">
          <ellipse cx="160" cy="52" rx="10" ry="11" fill="#ffedd5" class="anim-fold-head"/>
          <path d="M 152 62 L 168 62 L 168 132 L 152 132 Z" fill="#0284c7" class="anim-fold-spine"/>
          <circle cx="160" cy="128" r="10" fill="#ec4899" class="muscle-glow pulse-core"/>
          <path d="M 160 132 L 120 138 L 160 148" stroke="#fdba74" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 160 132 L 200 138 L 160 148" stroke="#fdba74" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
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

  // --- 43. WORLD'S GREATEST STRETCH ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="greatest-group">
          <ellipse cx="120" cy="68" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 125 78 L 175 108 L 168 118 L 118 88 Z" fill="#0284c7"/>
          <path d="M 125 78 L 145 18" stroke="#fdba74" stroke-width="7" stroke-linecap="round" class="anim-sky-reach"/>
          <polygon points="145,13 140,24 150,24" fill="#fdba74"/>
          <polyline points="175,108 135,128 135,148" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="muscle-glow" fill="none"/>
          <path d="M 175 108 L 255 146" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
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

  // --- 44. 90/90 HIP SWITCHES ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="ninety-group">
          <ellipse cx="140" cy="48" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 132 58 L 148 58 L 158 118 L 142 118 Z" fill="#0284c7"/>
          <circle cx="150" cy="118" r="10" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <polyline points="150,118 190,133 180,153" stroke="#fdba74" stroke-width="9" stroke-linecap="round" fill="none"/>
          <polyline points="150,118 105,128 90,148" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" fill="none"/>
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

  // --- 45. PUPPY DOG EXTENSION ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="puppy-group">
          <ellipse cx="95" cy="122" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 105 122 L 190 68 L 198 78 L 112 132 Z" fill="#0284c7"/>
          <circle cx="140" cy="98" r="9" fill="#8b5cf6" class="muscle-glow pulse-core"/>
          <line x1="190" y1="68" x2="200" y2="148" stroke="#fdba74" stroke-width="10" stroke-linecap="round"/>
          <line x1="95" y1="122" x2="45" y2="146" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Hips Over Knees • Melt Heart & Shoulders to Floor</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="45,146 190,68 200,148" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#8b5cf6" font-size="12" font-weight="700">FORM BLUEPRINT: PUPPY DOG EXTENSION</text>
      </svg>
    `
  },

  // --- 46. PIGEON POSE ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="pigeon-group">
          <ellipse cx="120" cy="78" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 125 88 L 160 133 L 150 141 L 115 96 Z" fill="#0284c7"/>
          <circle cx="155" cy="128" r="10" fill="#ec4899" class="muscle-glow pulse-core"/>
          <polyline points="160,133 125,143 150,148" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" fill="none"/>
          <path d="M 160 133 L 260 146" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
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

  // --- 47. WARRIOR II ---
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
        <line x1="20" y1="155" x2="300" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="warrior-group">
          <ellipse cx="160" cy="38" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 152 48 L 168 48 L 168 102 L 152 102 Z" fill="#0284c7"/>
          <line x1="160" y1="60" x2="90" y2="60" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <line x1="160" y1="60" x2="230" y2="60" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <polyline points="160,102 210,118 210,155" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" fill="none" class="muscle-glow"/>
          <line x1="160" y1="102" x2="100" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Grounded Stance • Gaze Over Front Fingertips</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="100,155 160,102 210,155" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: WARRIOR II</text>
      </svg>
    `
  },

  // --- 48. MOUNTAIN POSE ---
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
        <line x1="40" y1="155" x2="280" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <g class="mountain-group">
          <ellipse cx="160" cy="38" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 152 48 L 168 48 L 168 108 L 152 108 Z" fill="#0284c7"/>
          <line x1="160" y1="60" x2="135" y2="12" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <line x1="160" y1="60" x2="185" y2="12" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <line x1="160" y1="108" x2="145" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <line x1="160" y1="108" x2="175" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Ground All 4 Foot Corners • Reach Tall to Ceiling</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="160" y1="12" x2="160" y2="155" stroke="#0284c7" stroke-width="6"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: MOUNTAIN POSE</text>
      </svg>
    `
  },

  // --- 49. SAVASANA ---
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
        <line x1="20" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <ellipse cx="160" cy="140" rx="90" ry="25" fill="none" stroke="rgba(20, 184, 166, 0.35)" stroke-width="2" class="anim-savasana-pulse"/>
        <g class="savasana-group">
          <ellipse cx="75" cy="138" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 85 140 L 250 140 L 250 148 L 85 148 Z" fill="#0284c7"/>
          <line x1="110" y1="144" x2="135" y2="146" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <line x1="220" y1="144" x2="270" y2="147" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Total Relaxation • Parasympathetic Recovery Glow</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="75" y1="144" x2="270" y2="144" stroke="#0284c7" stroke-width="6"/>
        <text x="160" y="30" text-anchor="middle" fill="#14b8a6" font-size="12" font-weight="700">FORM BLUEPRINT: SAVASANA RECOVERY</text>
      </svg>
    `
  },

  // --- 50. DYNAMIC WARMUP ---
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
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <circle cx="160" cy="70" r="35" stroke="rgba(56, 189, 248, 0.35)" stroke-width="2" stroke-dasharray="4,4" fill="none" class="anim-orbit-ring"/>
        <g class="warmup-group">
          <ellipse cx="160" cy="38" rx="10" ry="11" fill="#ffedd5"/>
          <path d="M 152 48 L 168 48 L 168 108 L 152 108 Z" fill="#0284c7"/>
          <polyline points="160,65 120,52 110,77" stroke="#fdba74" stroke-width="7" stroke-linecap="round" fill="none" class="anim-warmup-arm-l"/>
          <polyline points="160,65 200,52 210,77" stroke="#fdba74" stroke-width="7" stroke-linecap="round" fill="none" class="anim-warmup-arm-r"/>
          <line x1="160" y1="108" x2="135" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <line x1="160" y1="108" x2="185" y2="155" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Multi-Planar Joint Circles • Elevate Heart Rate Smoothly</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <circle cx="160" cy="70" r="30" stroke="#38bdf8" stroke-width="2" fill="none"/>
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
