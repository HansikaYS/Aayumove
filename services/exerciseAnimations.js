// AayuMove Exercise Animation & Visual Form Guide
// Provides smooth, responsive, real-time exercise movement animations and GIFs for every exercise.
// Designed with crisp SVG biomechanics, joint articulation, movement paths, and active muscle focus cues.

export function getExerciseAnimationHtml(exerciseName, category = '', tips = '') {
  const norm = (exerciseName || '').toLowerCase();
  const cat = (category || '').toLowerCase();

  // 1. PUSH-UP VARIATIONS (Standard, Incline, Diamond, Pike, Deficit, Wall)
  if (norm.includes('push-up') || norm.includes('pushup') || norm.includes('push up') || norm.includes('dip')) {
    const isPike = norm.includes('pike');
    const isWall = norm.includes('wall');
    return `
      <div class="exercise-anim-visual anim-pushup ${isPike ? 'is-pike' : ''}">
        <svg viewBox="0 0 280 160" class="exercise-svg-canvas">
          <!-- Floor / Mat Grid -->
          <line x1="20" y1="140" x2="260" y2="140" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="6,6"/>
          <rect x="25" y="138" width="230" height="4" rx="2" fill="url(#matGrad)"/>
          
          <!-- Movement Target Indicator -->
          <path d="M 120 75 Q 120 120 120 135" stroke="rgba(249, 115, 22, 0.3)" stroke-width="2" stroke-dasharray="3,3" fill="none"/>
          
          <!-- Animated Pushup Body Group -->
          <g class="pushup-body-group">
            <!-- Torso & Head -->
            <circle cx="75" cy="85" r="14" class="anim-head" fill="#f97316"/>
            <!-- Torso line -->
            <line x1="85" y1="92" x2="175" y2="115" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
            <!-- Active Core Muscle Glow -->
            <line x1="95" y1="95" x2="155" y2="110" stroke="#f43f5e" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
            
            <!-- Arms / Press Action -->
            <polyline points="90,95 80,120 70,140" class="pushup-arm" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <!-- Legs & Feet -->
            <line x1="175" y1="115" x2="235" y2="138" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
            <!-- Feet pivot point -->
            <circle cx="236" cy="138" r="5" fill="#f97316"/>
            <!-- Hand anchor -->
            <circle cx="70" cy="140" r="5" fill="#f97316"/>
          </g>
          
          <!-- Cue Labels -->
          <text x="140" y="24" text-anchor="middle" class="anim-cue-text">Keep Core Rigid • Elbows 45°</text>
        </svg>
      </div>
    `;
  }

  // 2. SQUATS & LOWER BODY (Air Squats, Chair Squats, Squat Pulses, Jump Squats, Bulgarian Split Squats, Wall Sit)
  if (norm.includes('squat') || norm.includes('chair') || norm.includes('wall sit')) {
    const isWallSit = norm.includes('wall sit');
    return `
      <div class="exercise-anim-visual anim-squat">
        <svg viewBox="0 0 280 160" class="exercise-svg-canvas">
          <!-- Floor / Wall -->
          <line x1="30" y1="145" x2="250" y2="145" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
          <line x1="60" y1="20" x2="60" y2="145" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
          
          <!-- Squat Body Model -->
          <g class="squat-body-group">
            <!-- Head -->
            <circle cx="140" cy="45" r="14" class="anim-head" fill="#f97316"/>
            <!-- Torso -->
            <line x1="140" y1="58" x2="140" y2="100" class="squat-torso" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
            <!-- Arms forward balance -->
            <line x1="140" y1="68" x2="185" y2="68" class="squat-arms" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
            <!-- Upper Leg / Thigh -->
            <line x1="140" y1="100" x2="160" y2="120" class="squat-thigh" stroke="#f43f5e" stroke-width="10" stroke-linecap="round"/>
            <!-- Lower Leg / Shin -->
            <line x1="160" y1="120" x2="160" y2="145" class="squat-shin" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
            <!-- Foot -->
            <circle cx="160" cy="145" r="5" fill="#f97316"/>
          </g>
          
          <!-- Depth Guide Line -->
          <line x1="90" y1="102" x2="190" y2="102" stroke="rgba(20, 184, 166, 0.4)" stroke-width="1.5" stroke-dasharray="4,4"/>
          <text x="140" y="22" text-anchor="middle" class="anim-cue-text">${isWallSit ? '90° Thigh Angle • Back Flat' : 'Hips Back • Drive Through Heels'}</text>
        </svg>
      </div>
    `;
  }

  // 3. LUNGES (Reverse Lunges, Curtsy Lunges, Split Squat)
  if (norm.includes('lunge') || norm.includes('split')) {
    return `
      <div class="exercise-anim-visual anim-lunge">
        <svg viewBox="0 0 280 160" class="exercise-svg-canvas">
          <line x1="30" y1="145" x2="250" y2="145" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
          <g class="lunge-body-group">
            <!-- Head & Torso -->
            <circle cx="130" cy="40" r="14" class="anim-head" fill="#f97316"/>
            <line x1="130" y1="54" x2="130" y2="95" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
            <!-- Front Leg (90 deg bend) -->
            <polyline points="130,95 165,110 165,145" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <!-- Rear Leg (stepping back) -->
            <polyline points="130,95 85,120 70,145" class="lunge-rear-leg" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <!-- Hands on hips -->
            <polyline points="130,65 115,80 128,85" stroke="#fbbf24" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </g>
          <text x="140" y="22" text-anchor="middle" class="anim-cue-text">90° Knee Angle • Upright Torso</text>
        </svg>
      </div>
    `;
  }

  // 4. PLANKS, MOUNTAIN CLIMBERS, BURPEES, BEAR CRAWL, HOLLOW HOLD
  if (norm.includes('plank') || norm.includes('climber') || norm.includes('burpee') || norm.includes('bear crawl') || norm.includes('hollow')) {
    const isClimber = norm.includes('climber');
    return `
      <div class="exercise-anim-visual ${isClimber ? 'anim-climber' : 'anim-plank'}">
        <svg viewBox="0 0 280 160" class="exercise-svg-canvas">
          <line x1="20" y1="140" x2="260" y2="140" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
          
          <g class="plank-body-group">
            <!-- Head -->
            <circle cx="70" cy="80" r="14" class="anim-head" fill="#f97316"/>
            <!-- Torso Spine -->
            <line x1="80" y1="88" x2="180" y2="105" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
            <!-- Core Tension Glow -->
            <line x1="95" y1="92" x2="165" y2="103" stroke="#f43f5e" stroke-width="5" stroke-linecap="round"/>
            <!-- Arms / Forearms -->
            <polyline points="85,92 80,120 70,140" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            
            ${isClimber ? `
              <!-- Animated Climbing Legs -->
              <polyline points="180,105 130,115 110,135" class="climber-knee-left" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              <polyline points="180,105 215,125 240,140" class="climber-knee-right" stroke="#0ea5e9" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            ` : `
              <!-- Static Plank Legs -->
              <line x1="180" y1="105" x2="240" y2="138" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
              <circle cx="240" cy="138" r="5" fill="#f97316"/>
            `}
            <circle cx="70" cy="140" r="5" fill="#f97316"/>
          </g>
          
          <text x="140" y="22" text-anchor="middle" class="anim-cue-text">${isClimber ? 'Fast Knee Drives • Hips Flat' : 'Lock Core & Squeeze Glutes'}</text>
        </svg>
      </div>
    `;
  }

  // 5. CRUNCHES, ABS, DEADBUGS, GLUTE BRIDGES, LEG RAISES
  if (norm.includes('crunch') || norm.includes('abs') || norm.includes('deadbug') || norm.includes('bridge') || norm.includes('twist') || norm.includes('twist') || norm.includes('mat')) {
    const isBicycle = norm.includes('bicycle') || norm.includes('twist');
    const isBridge = norm.includes('bridge');
    return `
      <div class="exercise-anim-visual ${isBridge ? 'anim-bridge' : 'anim-crunch'}">
        <svg viewBox="0 0 280 160" class="exercise-svg-canvas">
          <line x1="20" y1="140" x2="260" y2="140" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
          <g class="crunch-body-group">
            <!-- Torso lying down with active curling -->
            <line x1="75" y1="130" x2="160" y2="130" class="crunch-torso" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
            <circle cx="65" cy="120" r="14" class="crunch-head" fill="#f97316"/>
            <!-- Hands behind head -->
            <polyline points="65,120 75,108 90,118" stroke="#fbbf24" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <!-- Active Abdominal Compression Indicator -->
            <circle cx="115" cy="125" r="18" fill="rgba(244, 63, 94, 0.25)" class="anim-pulse-orb"/>
            <!-- Dynamic Legs -->
            <polyline points="160,130 190,95 230,138" class="crunch-legs" stroke="#f43f5e" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </g>
          <text x="140" y="22" text-anchor="middle" class="anim-cue-text">${isBridge ? 'Drive Pelvis Up • Squeeze Glutes' : 'Exhale on Crunch • Ribs to Hips'}</text>
        </svg>
      </div>
    `;
  }

  // 6. CARDIO, JUMPING JACKS, HIGH KNEES, SPEED SKATERS, JOG
  if (norm.includes('jack') || norm.includes('knee') || norm.includes('skater') || norm.includes('jog') || norm.includes('cardio') || norm.includes('bound')) {
    return `
      <div class="exercise-anim-visual anim-cardio-jack">
        <svg viewBox="0 0 280 160" class="exercise-svg-canvas">
          <line x1="40" y1="145" x2="240" y2="145" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
          <g class="cardio-body-group">
            <!-- Head -->
            <circle cx="140" cy="35" r="14" class="anim-head" fill="#f97316"/>
            <!-- Torso -->
            <line x1="140" y1="48" x2="140" y2="95" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
            <!-- Jumping Arms (flapping up & down) -->
            <polyline points="140,55 105,40 85,25" class="cardio-arm-l" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <polyline points="140,55 175,40 195,25" class="cardio-arm-r" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <!-- Jumping Legs (spreading wide & together) -->
            <line x1="140" y1="95" x2="105" y2="145" class="cardio-leg-l" stroke="#f43f5e" stroke-width="9" stroke-linecap="round"/>
            <line x1="140" y1="95" x2="175" y2="145" class="cardio-leg-r" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          </g>
          <text x="140" y="18" text-anchor="middle" class="anim-cue-text">Light on Toes • Rhythmic Breathing</text>
        </svg>
      </div>
    `;
  }

  // 7. SHADOW BOXING & UPPER BODY AGILITY
  if (norm.includes('box') || norm.includes('punch') || norm.includes('arm swing') || norm.includes('windmill')) {
    return `
      <div class="exercise-anim-visual anim-boxing">
        <svg viewBox="0 0 280 160" class="exercise-svg-canvas">
          <line x1="40" y1="145" x2="240" y2="145" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
          <g class="boxing-body-group">
            <!-- Head & Torso with slight bobbing -->
            <circle cx="125" cy="40" r="14" class="anim-head" fill="#f97316"/>
            <line x1="125" y1="52" x2="120" y2="95" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
            <!-- Punching Lead Arm -->
            <polyline points="125,60 160,58 205,58" class="boxing-punch-arm" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="208" cy="58" r="6" fill="#f97316" class="boxing-glove"/>
            <!-- Guard Arm -->
            <polyline points="120,62 105,75 115,50" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <!-- Athletic Stance Legs -->
            <line x1="120" y1="95" x2="95" y2="145" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
            <line x1="120" y1="95" x2="145" y2="145" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
          </g>
          <text x="140" y="20" text-anchor="middle" class="anim-cue-text">Snap Punches • Rotate from Hips</text>
        </svg>
      </div>
    `;
  }

  // 8. YOGA & MOBILITY FLOWS (Down Dog, Cobra, Child's Pose, Butterfly, Sun Salutation, Warrior, Savasana)
  if (norm.includes('yoga') || norm.includes('dog') || norm.includes('cobra') || norm.includes('child') || norm.includes('butterfly') || norm.includes('sury') || norm.includes('warrior') || norm.includes('savasana') || norm.includes('pranayama')) {
    const isChild = norm.includes('child');
    return `
      <div class="exercise-anim-visual anim-yoga">
        <svg viewBox="0 0 280 160" class="exercise-svg-canvas">
          <line x1="20" y1="140" x2="260" y2="140" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
          <g class="yoga-body-group">
            ${isChild ? `
              <!-- Child's Pose Form -->
              <circle cx="75" cy="125" r="13" class="anim-head" fill="#f97316"/>
              <path d="M 85 125 Q 120 115 155 125" stroke="#38bdf8" stroke-width="12" fill="none" stroke-linecap="round"/>
              <line x1="155" y1="125" x2="175" y2="140" stroke="#0ea5e9" stroke-width="10" stroke-linecap="round"/>
              <line x1="75" y1="130" x2="45" y2="140" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>
            ` : `
              <!-- Downward Dog / Dynamic Flow V-shape -->
              <circle cx="95" cy="115" r="13" class="anim-head" fill="#f97316"/>
              <line x1="105" y1="110" x2="145" y2="55" stroke="#38bdf8" stroke-width="11" stroke-linecap="round"/>
              <line x1="145" y1="55" x2="195" y2="138" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
              <line x1="100" y1="115" x2="70" y2="140" stroke="#fbbf24" stroke-width="7" stroke-linecap="round"/>
              <circle cx="145" cy="55" r="5" fill="#f43f5e"/>
            `}
          </g>
          <!-- Mindful Breath Wave -->
          <path d="M 40 30 Q 140 10 240 30" stroke="rgba(20, 184, 166, 0.45)" stroke-width="2" fill="none" stroke-linecap="round" class="anim-breath-wave"/>
          <text x="140" y="22" text-anchor="middle" class="anim-cue-text">Deep Diaphragmatic Breath • Release Tension</text>
        </svg>
      </div>
    `;
  }

  // 9. POSTURE, DESK STRETCHES, NECK ROLLS, EYE RESET, WRISTS
  return `
    <div class="exercise-anim-visual anim-posture-reset">
      <svg viewBox="0 0 280 160" class="exercise-svg-canvas">
        <line x1="40" y1="145" x2="240" y2="145" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
        <g class="posture-body-group">
          <!-- Seated Chair Outline -->
          <line x1="90" y1="60" x2="90" y2="145" stroke="rgba(255,255,255,0.12)" stroke-width="3"/>
          <line x1="90" y1="110" x2="155" y2="110" stroke="rgba(255,255,255,0.12)" stroke-width="3"/>
          <!-- Student Posture -->
          <circle cx="130" cy="40" r="14" class="anim-head-roll" fill="#f97316"/>
          <line x1="130" y1="54" x2="130" y2="110" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
          <polyline points="130,68 155,75 140,95" class="anim-gentle-arms" stroke="#fbbf24" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <line x1="130" y1="110" x2="155" y2="145" stroke="#0ea5e9" stroke-width="9" stroke-linecap="round"/>
        </g>
        <text x="140" y="22" text-anchor="middle" class="anim-cue-text">Elongate Spine • Gentle Smooth Mobility</text>
      </svg>
    </div>
  `;
}
