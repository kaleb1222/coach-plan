// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Apr 20';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Inch worms · lateral bounds · carioca · hip openers',
      detail: 'Set up 20-yard line. Players start with inch worms - walk hands out to plank, walk feet to hands. Then lateral bounds across the width, jumping side to side with control. Carioca down the line crossing feet over and under. Finish with hip openers, lifting knees high and opening hips outward as they walk.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble and avoid taggers · hold injured body parts',
      detail: 'All players dribble in 20x20 grid. 2-3 players are doctors without balls. When tagged, player must hold the body part that was touched while continuing to dribble (hand on head, ankle, etc.). Only doctors can heal by high-fiving the injured spot. Rotate doctors every 90 seconds.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Shooting technique & coordination',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · opposite toe touches · knee to armpit · skipping',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Builds coordination needed for efficient shooting', 'Opposite knee and arm movement', 'High kick with diagonal leg swing under opposite armpit'],
      badge: 'Warmup',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · touch to the side · shoot side-on',
      detail: 'Players practice shooting technique with emphasis on side-on approach to goal, proper plant foot placement, and shooting with laces.',
      points: ['Approach ball at angle, side-on to goal', 'Plant non-kicking foot beside ball, toe pointing to target', 'Lock ankle, strike with laces', 'Full forward leg swing'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf',
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · touch to the side · shoot',
      detail: 'Basic shooting drill focusing on dribbling, taking a touch to the side to create space, then shooting with proper technique.',
      points: ['Big back swing with bent knee', 'Snap knee joint at moment of contact', 'Chest leaning forward at contact', 'Swing leg diagonally toward target'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf',
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn · create time and space',
      detail: 'Players practice receiving the ball and shooting while turning, emphasizing first touch to create time and space before shooting.',
      points: ['Good first touch turning away from pressure', 'Create time and space before shooting', 'Pop away from defender', 'Escape pressure by dribbling to space'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced shooting variations & game application',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · opposite toe touches · knee to armpit · skipping',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Builds coordination needed for efficient shooting', 'Opposite knee and arm movement', 'High kick with diagonal leg swing under opposite armpit'],
      badge: 'Warmup',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff · combination play',
      detail: 'Players practice shooting after receiving a layoff pass, focusing on quick first touch and immediate shot with proper technique.',
      points: ['Quick first touch to set up shot', 'Immediate shooting after layoff', 'Communication between players', 'Proper shooting technique under pressure'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf',
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · give and go · shot',
      detail: 'Advanced combination play involving double pass (give and go) movement before shooting, emphasizing timing and movement off the ball.',
      points: ['Timing of give and go movement', 'Sharp passes on the ground', 'Run after passing to create options', 'Shot after receiving return pass'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf',
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 shooting games · create opportunities',
      detail: 'Small-sided games with various numerical advantages/disadvantages focusing on creating and finishing shooting opportunities in game-like situations.',
      points: ['Create shooting opportunities in small spaces', 'Take what defenders give you', 'Quick decision making', 'Apply shooting technique under pressure'],
      badge: 'Game application',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf',
    },
  ],
};

