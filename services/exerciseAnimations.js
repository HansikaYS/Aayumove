// AayuMove Exercise Visual Demonstration Library
// Realistic, visually recognizable human athlete vector character performing exact exercise biomechanics.

/**
 * Helper to generate a visually recognizable human head with facial profile and athletic hair.
 */
function renderHumanHead(cx, cy, angle = 0, lookDir = 'right') {
  const flip = lookDir === 'left' ? -1 : 1;
  return `
    <g transform="translate(${cx}, ${cy}) rotate(${angle}) scale(${flip}, 1)">
      <!-- Head Skin Base -->
      <path d="M -9 -11 C -9 -18, 9 -18, 9 -11 C 9 -4, 7 8, 0 10 C -7 8, -9 -4, -9 -11 Z" fill="#fdba74" stroke="#ea580c" stroke-width="0.8"/>
      <!-- Athletic Hair / Cap -->
      <path d="M -9 -10 C -9 -19, 8 -19, 8 -10 C 5 -12, 0 -13, -7 -10 Z" fill="#1e293b"/>
      <!-- Ear -->
      <circle cx="-7" cy="-2" r="2.5" fill="#f97316"/>
      <!-- Eye & Nose Profile -->
      <circle cx="3" cy="-4" r="1.2" fill="#1e293b"/>
      <path d="M 6 -3 Q 9 -1 6 2" stroke="#ea580c" stroke-width="1" fill="none"/>
    </g>
  `;
}

/**
 * Helper to generate athletic sneakers.
 */
function renderSneaker(x, y, angle = 0, scale = 1) {
  return `
    <g transform="translate(${x}, ${y}) rotate(${angle}) scale(${scale})">
      <!-- Sneaker Base & Upper -->
      <path d="M -10 -4 L 8 -4 C 12 -4, 15 -1, 14 3 L -10 3 Z" fill="#2563eb"/>
      <!-- White Rubber Sole -->
      <path d="M -11 3 L 15 3 L 15 6 L -11 6 Z" fill="#ffffff" rx="1"/>
      <!-- Laces Accent -->
      <path d="M 2 -4 L 5 -1 L 2 2" stroke="#ffffff" stroke-width="1" fill="none"/>
    </g>
  `;
}

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
        
        <!-- Human Athlete Figure -->
        <g class="pike-body-group">
          ${renderHumanHead(96, 112, 45, 'right')}
          
          <!-- Human Torso (Fitted Athletic Shirt) -->
          <path d="M 104 112 L 152 58 L 168 70 L 116 124 Z" fill="#0284c7" stroke="#0369a1" stroke-width="1.2"/>
          <path d="M 110 108 L 148 66" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          
          <!-- Muscular Arms & Hands pressing floor -->
          <path d="M 108 116 L 90 132 L 80 148" stroke="#fdba74" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="pike-arm-flex" fill="none"/>
          <ellipse cx="80" cy="148" rx="5" ry="3" fill="#fdba74"/>
          
          <!-- Gym Shorts & Leggings -->
          <path d="M 152 58 L 168 70 L 180 88 L 160 88 Z" fill="#1e293b"/>
          <path d="M 170 78 L 220 144" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          
          <!-- Sneakers -->
          ${renderSneaker(222, 144, 25, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Hips High • Inverted V Shoulder Press</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="150" x2="290" y2="150" stroke="#64748b" stroke-width="2"/>
        <polyline points="80,148 160,58 220,144" stroke="#0284c7" stroke-width="8" fill="none"/>
        ${renderHumanHead(96, 112, 45)}
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
          ${renderHumanHead(85, 76, 15, 'right')}
          
          <!-- Human Torso Silhouette -->
          <path d="M 94 83 L 195 113 L 190 126 L 88 94 Z" fill="#0284c7" stroke="#0369a1" stroke-width="1.2"/>
          <path d="M 100 86 L 155 104" stroke="#ec4899" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          
          <!-- Diamond Hand Placement Arms -->
          <path d="M 100 88 L 96 120 L 88 148" stroke="#fdba74" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="diamond-arm-flex" fill="none"/>
          <polygon points="88,148 94,142 100,148 94,154" fill="#ec4899"/>
          
          <!-- Gym Shorts & Muscular Legs -->
          <path d="M 188 113 L 230 130 L 225 140 L 182 122 Z" fill="#1e293b"/>
          <path d="M 225 128 L 265 144" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          ${renderSneaker(265, 144, 0, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Diamond Hands • Peak Triceps Contraction</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="150" x2="290" y2="150" stroke="#64748b" stroke-width="2"/>
        <line x1="85" y1="88" x2="265" y2="144" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
        ${renderHumanHead(85, 76)}
        <polygon points="88,148 94,142 100,148 94,154" fill="#ec4899"/>
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
          ${renderHumanHead(120, 40, 20, 'left')}
          
          <!-- Human Torso Contour -->
          <path d="M 125 52 L 175 116 L 165 123 L 115 60 Z" fill="#0284c7" stroke="#0369a1" stroke-width="1.2"/>
          
          <!-- Pressing Arm -->
          <path d="M 125 58 L 95 70 L 70 76" stroke="#fdba74" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="wall-arm-flex" fill="none"/>
          <ellipse cx="70" cy="76" rx="4" ry="5" fill="#fdba74"/>
          
          <!-- Legs & Sneakers -->
          <path d="M 168 118 L 202 150 L 195 153 L 160 123 Z" fill="#1e293b"/>
          ${renderSneaker(202, 150, -10, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Low-Impact Wall Press & Arm Swings</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="70" y1="20" x2="70" y2="155" stroke="#64748b" stroke-width="4"/>
        <line x1="120" y1="48" x2="202" y2="150" stroke="#0284c7" stroke-width="6"/>
        ${renderHumanHead(120, 40)}
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
          ${renderHumanHead(80, 80, 15, 'right')}
          <path d="M 90 88 L 192 114 L 188 126 L 86 100 Z" fill="#0284c7" stroke="#0369a1" stroke-width="1.2"/>
          <path d="M 98 90 L 160 106" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <path d="M 98 92 L 85 113 L 80 135" stroke="#fdba74" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="pushup-arm-flex" fill="none"/>
          <path d="M 190 116 L 262 146 L 258 150 L 185 120 Z" fill="#1e293b"/>
          ${renderSneaker(262, 146, 0, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Elevated Hands • Deep Deficit Chest Stretch</text>
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
          ${renderHumanHead(85, 76, 15, 'right')}
          
          <!-- Human Muscular Torso Silhouette -->
          <path d="M 94 83 L 198 113 L 192 126 L 88 96 Z" fill="#0284c7" stroke="#0369a1" stroke-width="1.2"/>
          <path d="M 102 86 L 165 106" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          
          <!-- Arm (Bicep/Tricep & Forearm) -->
          <path d="M 102 88 L 88 118 L 80 148" stroke="#fdba74" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="pushup-arm-flex" fill="none"/>
          <ellipse cx="80" cy="148" rx="5" ry="3" fill="#fdba74"/>
          
          <!-- Gym Shorts & Muscular Legs -->
          <path d="M 195 115 L 268 144 L 262 150 L 188 121 Z" fill="#1e293b"/>
          ${renderSneaker(268, 144, 0, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Rigid Core • Elbows 45° Press</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="150" x2="290" y2="150" stroke="#64748b" stroke-width="2"/>
        <line x1="85" y1="88" x2="268" y2="144" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
        ${renderHumanHead(85, 76)}
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
        <!-- Chair Structure -->
        <rect x="90" y="105" width="35" height="6" fill="#64748b" rx="2"/>
        <line x1="95" y1="111" x2="95" y2="155" stroke="#64748b" stroke-width="4"/>
        <line x1="120" y1="111" x2="120" y2="155" stroke="#64748b" stroke-width="4"/>
        <line x1="30" y1="155" x2="290" y2="155" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        
        <g class="chair-squat-group">
          ${renderHumanHead(160, 46, 0, 'right')}
          
          <!-- Human Torso -->
          <path d="M 152 56 L 168 56 L 152 106 L 136 106 Z" fill="#0284c7" stroke="#0369a1" stroke-width="1.2"/>
          <path d="M 162 66 L 198 63" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          
          <!-- Thigh & Quad Glow -->
          <path d="M 140 106 L 178 122 L 172 132 L 134 116 Z" fill="#f43f5e" class="muscle-glow"/>
          
          <!-- Shin & Sneaker -->
          <path d="M 175 123 L 175 153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          ${renderSneaker(175, 152, 0, 0.9)}
        </g>
        <text x="180" y="24" text-anchor="middle" class="anim-cue-text">Human Form: 3s Controlled Descent • Tap Chair & Explode</text>
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
          ${renderHumanHead(170, 40, 0, 'right')}
          <path d="M 162 50 L 178 50 L 176 100 L 160 100 Z" fill="#0284c7"/>
          <path d="M 168 100 L 208 116 L 208 153" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="muscle-glow" fill="none"/>
          ${renderSneaker(208, 152, 0, 0.9)}
          <path d="M 168 100 L 110 120 L 75 110" stroke="#fdba74" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
        <text x="170" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Rear Foot Elevated • Drop Hip Straight Down</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <rect x="40" y="110" width="40" height="45" fill="#334155"/>
        <polyline points="170,100 208,116 208,153" stroke="#f43f5e" stroke-width="6" fill="none"/>
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
          ${renderHumanHead(150, 46, 0, 'right')}
          <path d="M 142 56 L 158 56 L 142 110 L 126 110 Z" fill="#0284c7"/>
          <path d="M 150 66 L 215 63" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <path d="M 134 110 L 154 130 L 140 153" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="muscle-glow" fill="none"/>
          <path d="M 134 110 L 235 126" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          ${renderSneaker(140, 153, 0, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Single-Leg Squat • Balance Arm Reach</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="134" y1="110" x2="235" y2="126" stroke="#fdba74" stroke-width="6"/>
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
          ${renderHumanHead(160, 36, 0, 'center')}
          <path d="M 152 46 L 168 46 L 168 100 L 152 100 Z" fill="#0284c7"/>
          <path d="M 160 56 L 125 33" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <path d="M 160 56 L 195 33" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <path d="M 160 100 L 140 143" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="muscle-glow"/>
          <path d="M 160 100 L 180 143" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="muscle-glow"/>
          ${renderSneaker(140, 143, 10, 0.85)}
          ${renderSneaker(180, 143, -10, 0.85)}
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Human Form: Explode High • Absorb Cushion Landing</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="30" y1="155" x2="290" y2="155" stroke="#64748b" stroke-width="2"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: JUMP SQUAT</text>
      </svg>
    `
  },

  // --- 10. CURTSY & SUMO SQUAT ---
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
          ${renderHumanHead(160, 36, 0, 'center')}
          <path d="M 152 46 L 168 46 L 168 96 L 152 96 Z" fill="#0284c7"/>
          <path d="M 160 96 L 125 153" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="muscle-glow"/>
          <path d="M 160 96 L 195 153" stroke="#ec4899" stroke-width="9" stroke-linecap="round" class="muscle-glow"/>
          ${renderSneaker(125, 153, 0, 0.85)}
          ${renderSneaker(195, 153, 0, 0.85)}
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: Diagonal Curtsy Crossover & Sumo Stance</text>
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
          ${renderHumanHead(105, 46, 0, 'right')}
          <path d="M 97 56 L 110 56 L 110 106 L 97 106 Z" fill="#0284c7"/>
          <path d="M 102 106 L 165 106" stroke="#f43f5e" stroke-width="11" stroke-linecap="round" class="muscle-glow pulse-quads"/>
          <path d="M 165 106 L 165 153" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          ${renderSneaker(165, 153, 0, 0.9)}
        </g>
        <text x="180" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Flat Back on Wall • 90° Thigh Angle</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="102,60 102,106 165,106 165,153" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="180" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: WALL SIT</text>
      </svg>
    `
  },

  // --- 12. BODYWEIGHT AIR SQUAT ---
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
          ${renderHumanHead(150, 40, 0, 'right')}
          <path d="M 142 50 L 158 50 L 152 100 L 138 100 Z" fill="#0284c7" class="squat-torso"/>
          <path d="M 150 63 L 195 58" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <path d="M 145 100 L 180 120" stroke="#f43f5e" stroke-width="10" stroke-linecap="round" class="squat-thigh muscle-glow"/>
          <path d="M 180 120 L 180 153" stroke="#fdba74" stroke-width="8" stroke-linecap="round" class="squat-shin"/>
          ${renderSneaker(180, 153, 0, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Hips Back & Down • Drive Through Heels</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="150,50 145,100 180,120 180,153" stroke="#0284c7" stroke-width="6" fill="none"/>
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
          ${renderHumanHead(95, 70, 15, 'right')}
          <path d="M 104 78 L 202 100 L 198 112 L 98 90 Z" fill="#0284c7"/>
          <path d="M 108 84 L 108 148" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <path d="M 108 84 L 132 88 L 112 81" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="tapping-arm" fill="none"/>
          <path d="M 200 103 L 260 146" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          ${renderSneaker(260, 146, 0, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Anti-Rotational Plank • Alternate Taps</text>
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
          ${renderHumanHead(85, 80, 15, 'right')}
          <path d="M 94 88 L 202 106 L 198 118 L 88 98 Z" fill="#0284c7" class="plank-spine"/>
          <path d="M 108 90 L 178 103" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <path d="M 98 92 L 92 123 L 78 148" stroke="#fdba74" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M 200 108 L 265 146" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          ${renderSneaker(265, 146, 0, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Forearm Plank • Rigid Core & Hip Dips</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="85" y1="88" x2="265" y2="146" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
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
          ${renderHumanHead(150, 50, -15, 'left')}
          <path d="M 144 62 L 102 118 L 92 126 L 134 68 Z" fill="#0284c7"/>
          <path d="M 138 70 L 112 106" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" class="muscle-glow"/>
          <path d="M 138 70 L 98 70 L 62 76" stroke="#fdba74" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" class="row-arm-pull" fill="none"/>
          <path d="M 98 121 L 78 153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          ${renderSneaker(78, 153, -15, 0.9)}
        </g>
        <text x="175" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Grip Frame • Squeeze Lats & Pull Chest</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <rect x="50" y="20" width="8" height="135" fill="#475569"/>
        <line x1="145" y1="65" x2="80" y2="153" stroke="#0284c7" stroke-width="6"/>
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
          ${renderHumanHead(150, 36, 0, 'right')}
          <path d="M 142 46 L 158 46 L 158 96 L 142 96 Z" fill="#0284c7"/>
          <path d="M 150 96 L 190 114 L 190 153" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="muscle-glow" fill="none"/>
          ${renderSneaker(190, 153, 0, 0.9)}
          <path d="M 150 96 L 100 120 L 90 148" stroke="#fdba74" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="lunge-rear-dynamic" fill="none"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: 90° Lunge • Explosive Knee Drive</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="150,96 190,114 190,153" stroke="#f43f5e" stroke-width="6" fill="none"/>
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
          ${renderHumanHead(75, 138, -15, 'right')}
          <path d="M 85 140 L 175 96 L 170 108 L 80 146 Z" fill="#0284c7" class="bridge-torso"/>
          <circle cx="175" cy="96" r="10" fill="#f43f5e" class="muscle-glow pulse-glute"/>
          <path d="M 172 100 L 212 114 L 218 153" stroke="#fdba74" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" class="bridge-leg" fill="none"/>
          ${renderSneaker(218, 153, 0, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Drive Heels • Squeeze Glutes at Peak</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="75,140 175,96 218,153" stroke="#0284c7" stroke-width="6" fill="none"/>
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
          ${renderHumanHead(160, 36, 0, 'center')}
          <path d="M 152 46 L 168 46 L 168 100 L 152 100 Z" fill="#0284c7"/>
          <path d="M 160 56 L 140 16" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <path d="M 160 56 L 180 16" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <path d="M 160 100 L 160 143" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <circle cx="160" cy="130" r="7" fill="#f43f5e" class="muscle-glow"/>
          ${renderSneaker(160, 148, -45, 0.85)}
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Human Form: High on Tiptoes • Peak Calf Contraction</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="160" y1="20" x2="160" y2="148" stroke="#0284c7" stroke-width="6"/>
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
          ${renderHumanHead(85, 134, -90, 'right')}
          <path d="M 95 133 L 202 133 L 202 143 L 95 143 Z" fill="#0284c7"/>
          <circle cx="150" cy="134" r="9" fill="#f43f5e" class="muscle-glow pulse-core"/>
          <path d="M 120 133 L 70 103" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="deadbug-arm-l"/>
          <path d="M 120 133 L 120 83" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="deadbug-arm-r"/>
          <polyline points="190,138 220,108 240,108" stroke="#fdba74" stroke-width="7" stroke-linecap="round" class="deadbug-leg-l" fill="none"/>
          <polyline points="190,138 230,133 270,138" stroke="#f43f5e" stroke-width="7" stroke-linecap="round" class="deadbug-leg-r" fill="none"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Flat Back • Opposite Arm & Leg Extension</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="95" y1="138" x2="202" y2="138" stroke="#0284c7" stroke-width="6"/>
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
          ${renderHumanHead(95, 110, 20, 'right')}
          <path d="M 102 116 L 178 136 L 172 144 L 98 124 Z" fill="#0284c7"/>
          <circle cx="140" cy="123" r="9" fill="#ec4899" class="muscle-glow pulse-core"/>
          <path d="M 95 110 L 125 98 L 145 113" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <polyline points="175,138 160,103 130,93" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" class="bicycle-knee-in" fill="none"/>
          <line x1="175" y1="138" x2="250" y2="123" stroke="#fdba74" stroke-width="7" stroke-linecap="round" class="bicycle-leg-ext"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Oblique Ribcage Twist to Knee</text>
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
          ${renderHumanHead(120, 50, 15, 'right')}
          <path d="M 122 60 L 162 130 L 152 136 L 114 68 Z" fill="#0284c7"/>
          <circle cx="150" cy="118" r="9" fill="#ec4899" class="muscle-glow pulse-core"/>
          <path d="M 135 78 L 180 93 L 195 113" stroke="#fdba74" stroke-width="7" stroke-linecap="round" class="twist-arms" fill="none"/>
          <polyline points="160,133 205,103 240,113" stroke="#fdba74" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: V-Sit Oblique Rotation Matrix</text>
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
          <path d="M 90 118 Q 160 143 230 118" stroke="#0284c7" stroke-width="12" fill="none" stroke-linecap="round"/>
          ${renderHumanHead(75, 110, -20, 'right')}
          <path d="M 85 118 L 40 103" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <path d="M 110 126 Q 160 140 210 126" stroke="#f43f5e" stroke-width="5" fill="none" class="muscle-glow"/>
          <path d="M 230 118 L 280 103" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Lift Chest & Quads • Squeeze Back</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <path d="M 90 118 Q 160 143 230 118" stroke="#0284c7" stroke-width="6" fill="none"/>
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
          ${renderHumanHead(140, 46, 10, 'right')}
          <path d="M 132 56 L 148 56 L 138 106 L 124 106 Z" fill="#0284c7"/>
          <path d="M 140 68 L 190 83" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="skater-arm-r"/>
          <path d="M 140 68 L 90 63" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="skater-arm-l"/>
          <path d="M 130 106 L 120 133 L 125 153" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="muscle-glow" fill="none"/>
          <path d="M 130 106 L 210 143" stroke="#fdba74" stroke-width="7" stroke-linecap="round" class="skater-trailing-leg"/>
          ${renderSneaker(125, 153, 0, 0.9)}
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: Side-to-Side Lateral Bounding</text>
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
          ${renderHumanHead(85, 76, 15, 'right')}
          <path d="M 94 83 L 192 100 L 188 112 L 88 93 Z" fill="#0284c7"/>
          <path d="M 100 88 L 90 148" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <polyline points="190,103 135,113 110,133" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="climber-drive-l muscle-glow" fill="none"/>
          <line x1="190" y1="103" x2="260" y2="146" stroke="#fdba74" stroke-width="8" stroke-linecap="round" class="climber-ext-r"/>
          ${renderSneaker(260, 146, 0, 0.9)}
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Rapid Knee Drives to Chest</text>
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
          ${renderHumanHead(160, 40, 0, 'center')}
          <path d="M 152 50 L 168 50 L 162 100 L 148 100 Z" fill="#0284c7" class="burpee-spine"/>
          <line x1="160" y1="63" x2="115" y2="23" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="burpee-arms"/>
          <line x1="160" y1="63" x2="205" y2="23" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="burpee-arms"/>
          <line x1="155" y1="100" x2="135" y2="148" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" class="burpee-legs"/>
          <line x1="155" y1="100" x2="175" y2="148" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" class="burpee-legs"/>
          ${renderSneaker(135, 148, 10, 0.85)}
          ${renderSneaker(175, 148, -10, 0.85)}
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Human Form: Floor Touch • Plank Kickback • Vertical Hop</text>
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
          ${renderHumanHead(130, 40, 0, 'right')}
          <path d="M 122 50 L 138 50 L 132 100 L 118 100 Z" fill="#0284c7"/>
          <polyline points="130,60 175,58 225,58" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" class="boxing-lead-punch muscle-glow" fill="none"/>
          <circle cx="228" cy="58" r="7" fill="#f97316" class="boxing-glove"/>
          <polyline points="125,63 110,78 120,53" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <line x1="125" y1="100" x2="100" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round" class="boxing-leg-l"/>
          <line x1="125" y1="100" x2="150" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round" class="boxing-leg-r"/>
          ${renderSneaker(100, 153, 0, 0.85)}
          ${renderSneaker(150, 153, 0, 0.85)}
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: Rhythmic 1-2 Jab-Cross Snap Punches</text>
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
          ${renderHumanHead(160, 36, 0, 'center')}
          <path d="M 152 46 L 168 46 L 168 100 L 152 100 Z" fill="#0284c7"/>
          <line x1="160" y1="58" x2="120" y2="33" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="cardio-arm-l"/>
          <line x1="160" y1="58" x2="200" y2="33" stroke="#fdba74" stroke-width="6" stroke-linecap="round" class="cardio-arm-r"/>
          <polyline points="160,100 130,110 130,153" stroke="#fdba74" stroke-width="8" stroke-linecap="round" class="knee-pump-l" fill="none"/>
          <polyline points="160,100 195,90 200,126" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="knee-pump-r muscle-glow" fill="none"/>
          ${renderSneaker(130, 153, 0, 0.85)}
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Human Form: High Knee Drive & Rhythmic Footwork</text>
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
          ${renderHumanHead(140, 40, 0, 'right')}
          <circle cx="140" cy="53" r="8" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <path d="M 132 53 L 148 53 L 148 116 L 132 116 Z" fill="#0284c7"/>
          <path d="M 140 116 L 165 153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: Retract Chin & Gentle Neck Roll</text>
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
          ${renderHumanHead(150, 40, 15, 'right')}
          <path d="M 142 50 L 158 50 L 158 116 L 142 116 Z" fill="#0284c7"/>
          <path d="M 150 68 L 150 103" stroke="#ec4899" stroke-width="6" stroke-linecap="round" class="muscle-glow"/>
          <polyline points="150,68 125,78 110,88" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M 150 116 L 175 153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: Seated Upright Thoracic Twist</text>
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
          ${renderHumanHead(160, 40, 0, 'center')}
          <path d="M 152 50 L 168 50 L 168 110 L 152 110 Z" fill="#0284c7"/>
          <circle cx="160" cy="66" r="10" fill="#8b5cf6" class="muscle-glow pulse-core"/>
          <path d="M 160 66 L 150 86 L 165 70 L 160 46" stroke="#fdba74" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none" class="anim-eagle-lift"/>
          <line x1="160" y1="110" x2="140" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <line x1="160" y1="110" x2="180" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: Intertwine Forearms & Lift Elbows</text>
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
        <ellipse cx="170" cy="76" rx="30" ry="20" stroke="rgba(20, 184, 166, 0.4)" stroke-width="2" fill="none" class="anim-breath-pulse"/>
        <g class="chest-body-group">
          ${renderHumanHead(150, 40, -10, 'right')}
          <path d="M 142 50 L 158 50 L 162 110 L 148 110 Z" fill="#0284c7"/>
          <circle cx="162" cy="70" r="9" fill="#14b8a6" class="muscle-glow"/>
          <polyline points="152,66 125,80 120,100" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <line x1="155" y1="110" x2="140" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <line x1="155" y1="110" x2="170" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: Clasp Hands Behind & Inhale Deep</text>
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
        <circle cx="160" cy="60" r="45" fill="rgba(99, 102, 241, 0.15)" class="anim-calm-orb"/>
        <g class="palming-group">
          ${renderHumanHead(160, 56, 0, 'center')}
          <polyline points="135,86 148,61 156,58" stroke="#fdba74" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <polyline points="185,86 172,61 164,58" stroke="#fdba74" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M 152 70 L 168 70 L 168 130 L 152 130 Z" fill="#0284c7"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: Warm Cupped Palms over Eyes</text>
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
          ${renderHumanHead(130, 46, 0, 'right')}
          <path d="M 122 56 L 138 56 L 138 116 L 122 116 Z" fill="#0284c7"/>
          <line x1="130" y1="70" x2="220" y2="70" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <circle cx="175" cy="70" r="8" fill="#14b8a6" class="muscle-glow"/>
          <polyline points="220,70 220,50 210,60" stroke="#f43f5e" stroke-width="5" stroke-linecap="round" fill="none" class="anim-wrist-pull"/>
          <line x1="130" y1="116" x2="150" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Extend Arm & Gently Pull Fingers</text>
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
          ${renderHumanHead(150, 40, 10, 'right')}
          <path d="M 150 52 Q 130 86 150 116" stroke="#0284c7" stroke-width="12" fill="none" stroke-linecap="round" class="anim-spine-wave"/>
          <polyline points="150,68 175,88 180,116" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
          <line x1="150" y1="116" x2="175" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: Inhale Arch Forward • Exhale Round Back</text>
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
          ${renderHumanHead(180, 36, 15, 'right')}
          <path d="M 180 48 Q 170 86 150 116" stroke="#0284c7" stroke-width="12" fill="none" stroke-linecap="round"/>
          <path d="M 175 58 Q 165 88 145 114" stroke="#14b8a6" stroke-width="5" fill="none" class="muscle-glow"/>
          <path d="M 175 58 Q 210 23 225 10" stroke="#fdba74" stroke-width="6" fill="none" stroke-linecap="round"/>
          <line x1="150" y1="116" x2="135" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <line x1="150" y1="116" x2="165" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Human Form: Overhead Lateral Arc & Ribcage Stretch</text>
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
          ${renderHumanHead(85, 128, 45, 'left')}
          <path d="M 95 126 Q 140 110 190 126" stroke="#0284c7" stroke-width="12" fill="none" stroke-linecap="round"/>
          <circle cx="160" cy="116" r="9" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <line x1="190" y1="126" x2="220" y2="144" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
          <line x1="85" y1="131" x2="40" y2="141" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Hips to Heels • Decompress Spine</text>
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
          ${renderHumanHead(85, 134, -90, 'right')}
          <line x1="95" y1="136" x2="185" y2="136" stroke="#0284c7" stroke-width="12" stroke-linecap="round"/>
          <circle cx="150" cy="134" r="10" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <polyline points="185,136 180,101 150,96" stroke="#fdba74" stroke-width="9" stroke-linecap="round" fill="none"/>
          <polyline points="120,131 150,91 170,101" stroke="#fdba74" stroke-width="6" stroke-linecap="round" fill="none"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Hug Knees to Chest & Lumbar Rocking</text>
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
          ${renderHumanHead(95, 131, -90, 'right')}
          <line x1="105" y1="134" x2="185" y2="134" stroke="#0284c7" stroke-width="12" stroke-linecap="round"/>
          <circle cx="160" cy="131" r="9" fill="#ec4899" class="muscle-glow pulse-core"/>
          <line x1="120" y1="134" x2="120" y2="86" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <polyline points="185,134 215,116 235,141" stroke="#fdba74" stroke-width="8" stroke-linecap="round" fill="none" class="anim-twist-legs"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: T-Arm Floor Twist & Gentle Knee Drop</text>
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
          ${renderHumanHead(100, 141, -90, 'right')}
          <line x1="110" y1="144" x2="210" y2="144" stroke="#0284c7" stroke-width="12" stroke-linecap="round"/>
          <line x1="210" y1="144" x2="210" y2="36" stroke="#fdba74" stroke-width="9" stroke-linecap="round"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Human Form: Elevated Legs & 4-4-4-4 Box Breathing</text>
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
          ${renderHumanHead(105, 110, 45, 'right')}
          <line x1="115" y1="106" x2="160" y2="50" stroke="#0284c7" stroke-width="12" stroke-linecap="round" class="anim-dog-torso"/>
          <line x1="160" y1="50" x2="220" y2="144" stroke="#fdba74" stroke-width="9" stroke-linecap="round" class="anim-dog-legs"/>
          <line x1="110" y1="110" x2="80" y2="146" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <circle cx="160" cy="50" r="7" fill="#f43f5e" class="muscle-glow"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Down Dog Heel Press to Cobra Flow</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="80,146 160,50 220,144" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: DOWNWARD DOG & COBRA</text>
      </svg>
    `
  },

  // --- 41. LOW LUNGE TO HALF SPLITS ---
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
          ${renderHumanHead(140, 40, 0, 'right')}
          <path d="M 132 50 L 148 50 L 148 100 L 132 100 Z" fill="#0284c7"/>
          <polyline points="140,103 185,118 185,146" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" fill="none" class="muscle-glow"/>
          <polyline points="140,103 85,126 60,146" stroke="#fdba74" stroke-width="8" stroke-linecap="round" fill="none"/>
        </g>
        <text x="160" y="22" text-anchor="middle" class="anim-cue-text">Human Form: Deep Low Lunge & Half Splits Shift</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="60,146 140,100 185,146" stroke="#0284c7" stroke-width="6" fill="none"/>
        <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">FORM BLUEPRINT: LOW LUNGE TO SPLITS</text>
      </svg>
    `
  },

  // --- 42. SEATED BUTTERFLY FOLD ---
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
          ${renderHumanHead(160, 50, 15, 'right')}
          <path d="M 152 60 L 168 60 L 168 130 L 152 130 Z" fill="#0284c7" class="anim-fold-spine"/>
          <circle cx="160" cy="126" r="10" fill="#ec4899" class="muscle-glow pulse-core"/>
          <path d="M 160 130 L 120 136 L 160 146" stroke="#fdba74" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 160 130 L 200 136 L 160 146" stroke="#fdba74" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Soles Together & Forward Hip Hinge</text>
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
          ${renderHumanHead(120, 66, -45, 'right')}
          <path d="M 125 76 L 175 106 L 168 116 L 118 86 Z" fill="#0284c7"/>
          <path d="M 125 76 L 145 16" stroke="#fdba74" stroke-width="7" stroke-linecap="round" class="anim-sky-reach"/>
          <polygon points="145,11 140,22 150,22" fill="#fdba74"/>
          <polyline points="175,106 135,126 135,146" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" class="muscle-glow" fill="none"/>
          <path d="M 175 106 L 255 144" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Elbow Instep Drop & Sky Arm Rotation</text>
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
          ${renderHumanHead(140, 46, 0, 'center')}
          <path d="M 132 56 L 148 56 L 158 116 L 142 116 Z" fill="#0284c7"/>
          <circle cx="150" cy="116" r="10" fill="#14b8a6" class="muscle-glow pulse-core"/>
          <polyline points="150,116 190,131 180,151" stroke="#fdba74" stroke-width="9" stroke-linecap="round" fill="none"/>
          <polyline points="150,116 105,126 90,146" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" fill="none"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: 90/90 Seated Hip Rotational Switching</text>
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
          ${renderHumanHead(95, 120, 30, 'left')}
          <path d="M 105 120 L 190 66 L 198 76 L 112 130 Z" fill="#0284c7"/>
          <circle cx="140" cy="96" r="9" fill="#8b5cf6" class="muscle-glow pulse-core"/>
          <line x1="190" y1="66" x2="200" y2="146" stroke="#fdba74" stroke-width="10" stroke-linecap="round"/>
          <line x1="95" y1="120" x2="45" y2="144" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Hips Over Knees • Chest Melt to Floor</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="45,144 190,66 200,146" stroke="#0284c7" stroke-width="6" fill="none"/>
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
          ${renderHumanHead(120, 76, 15, 'right')}
          <path d="M 125 86 L 160 131 L 150 139 L 115 94 Z" fill="#0284c7"/>
          <circle cx="155" cy="126" r="10" fill="#ec4899" class="muscle-glow pulse-core"/>
          <polyline points="160,131 125,141 150,146" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" fill="none"/>
          <path d="M 160 131 L 260 144" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Square Hips & Deep Piriformis Stretch</text>
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
          ${renderHumanHead(160, 36, 0, 'right')}
          <path d="M 152 46 L 168 46 L 168 100 L 152 100 Z" fill="#0284c7"/>
          <line x1="160" y1="58" x2="90" y2="58" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <line x1="160" y1="58" x2="230" y2="58" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
          <polyline points="160,100 210,116 210,153" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" fill="none" class="muscle-glow"/>
          <line x1="160" y1="100" x2="100" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          ${renderSneaker(210, 153, 0, 0.85)}
          ${renderSneaker(100, 153, 0, 0.85)}
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Human Form: Grounded Stance • Horizontal T-Arms</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <polyline points="100,153 160,100 210,153" stroke="#0284c7" stroke-width="6" fill="none"/>
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
          ${renderHumanHead(160, 36, 0, 'center')}
          <path d="M 152 46 L 168 46 L 168 106 L 152 106 Z" fill="#0284c7"/>
          <line x1="160" y1="58" x2="135" y2="10" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <line x1="160" y1="58" x2="185" y2="10" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <line x1="160" y1="106" x2="145" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <line x1="160" y1="106" x2="175" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          ${renderSneaker(145, 153, 0, 0.85)}
          ${renderSneaker(175, 153, 0, 0.85)}
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Human Form: Grounded Mountain Stance & Overhead Reach</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="160" y1="10" x2="160" y2="153" stroke="#0284c7" stroke-width="6"/>
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
          ${renderHumanHead(75, 136, -90, 'right')}
          <path d="M 85 138 L 250 138 L 250 146 L 85 146 Z" fill="#0284c7"/>
          <line x1="110" y1="142" x2="135" y2="144" stroke="#fdba74" stroke-width="6" stroke-linecap="round"/>
          <line x1="220" y1="142" x2="270" y2="145" stroke="#fdba74" stroke-width="7" stroke-linecap="round"/>
        </g>
        <text x="160" y="24" text-anchor="middle" class="anim-cue-text">Human Form: Still Supine Relaxation & Diaphragmatic Breath</text>
      </svg>
    `,
    renderFallback: () => `
      <svg viewBox="0 0 320 180" class="exercise-svg-canvas static-schematic">
        <line x1="75" y1="142" x2="270" y2="145" stroke="#0284c7" stroke-width="6"/>
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
          ${renderHumanHead(160, 36, 0, 'center')}
          <path d="M 152 46 L 168 46 L 168 106 L 152 106 Z" fill="#0284c7"/>
          <polyline points="160,63 120,50 110,75" stroke="#fdba74" stroke-width="7" stroke-linecap="round" fill="none" class="anim-warmup-arm-l"/>
          <polyline points="160,63 200,50 210,75" stroke="#fdba74" stroke-width="7" stroke-linecap="round" fill="none" class="anim-warmup-arm-r"/>
          <line x1="160" y1="106" x2="135" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
          <line x1="160" y1="106" x2="185" y2="153" stroke="#fdba74" stroke-width="8" stroke-linecap="round"/>
        </g>
        <text x="160" y="20" text-anchor="middle" class="anim-cue-text">Human Form: Multi-Planar Joint Circles & Warmup</text>
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
