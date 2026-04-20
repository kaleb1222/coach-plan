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
      summary: 'Hip openers · lateral bounds · inch worms · backpedal',
      detail: 'Set up 20-yard line. Players start with hip openers (leg swings forward/back, side to side). Then lateral bounds across - explosive sideways jumps landing on one foot. Return with inch worms - walk hands forward to plank, walk feet to hands. Finish with backpedal maintaining athletic position. Complete 2-3 rounds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · respond to color calls',
      detail: 'Each player with a ball in 20x20 yard grid. Players dribble freely while coach calls colors: GREEN = dribble fast, YELLOW = slow dribbling, RED = stop with foot on ball. Add variations: PURPLE = dribble backward, ORANGE = juggling, BLUE = sit on ball. Keep players moving and listening for 3-4 minutes.',
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
      summary: 'Coordination warmup · Carioca · High kicks · Build shooting power',
      detail: 'Special dynamic stretching to prepare for shooting. Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently. 1. All players lined up side by side. 2. Carioca - 30 yards. 3. Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 4. Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 5. Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 6. High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Diagonal leg swing brings knee under opposite armpit', 'High kicks should lift player off ground', 'Opposite knees and arms during skipping', 'Build coordination for efficient shooting'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · Touch to side · Shoot side-on',
      detail: 'Shooting variation focusing on dribble-touch to the side-shoot side-on technique. Practice proper approach angle, plant foot positioning, and shooting technique with power and accuracy.',
      points: ['Approach ball at angle, side-on to goal', 'Plant non-kicking foot beside ball, toe pointing to target', 'Big back swing with bent knee', 'Lock ankle solid, strike with laces'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf',
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · Touch to side · Shoot with power',
      detail: 'Shooting variation focusing on dribble-touch to the side-shoot technique. Emphasize proper body shape, approach angle, and shooting mechanics for power and accuracy.',
      points: ['Side-on approach to goal', 'Chest leaning forward at contact', 'Full forward leg swing', 'Swing leg diagonally toward target for direction control'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf',
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn · Create time & space',
      detail: 'Shooting variation focusing on shooting on the turn. Practice receiving, turning away from pressure, and shooting quickly while maintaining proper technique.',
      points: ['Pop away to create time and space', 'Good first touch turning away from pressure', 'Snap knee joint at moment of contact', 'Plant foot comes off ground on follow through'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf',
    }
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Shooting progression & game situations',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Coordination warmup · Carioca · High kicks · Build shooting power',
      detail: 'Special dynamic stretching to prepare for shooting. Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently. 1. All players lined up side by side. 2. Carioca - 30 yards. 3. Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 4. Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 5. Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 6. High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Diagonal leg swing brings knee under opposite armpit', 'High kicks should lift player off ground', 'Opposite knees and arms during skipping', 'Build coordination for efficient shooting'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff · Quick finish',
      detail: 'Shooting variation focusing on shooting off the layoff. Practice receiving a layoff pass and shooting quickly with proper technique. Can repeat variations 2, 1 and 3 as alternatives.',
      points: ['Quick first touch to set up shot', 'Maintain shooting technique under pressure', 'Create time and space before shooting', 'Accurate finish to goal'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf',
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · Give & go · Shot finish',
      detail: 'Shooting variation focusing on double pass - give and go - shot combination. Practice creating space through passing combinations before shooting.',
      points: ['Execute clean give and go combination', 'Time the run for the return pass', 'Shoot quickly after receiving', 'Use proper shooting technique for accuracy'],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf',
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 shooting situations · Game application',
      detail: 'Shooting game with multiple variations - 1v1, 2v1, and 2v2 situations. Apply shooting technique in game-like scenarios with defenders. Focus on creating shooting opportunities and finishing under pressure.',
      points: ['Create time and space to shoot', 'Take what defenders give you', 'Shooting is basically passing into goal', 'Apply proper shooting technique under pressure'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf',
    }
  ],
};

