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
      summary: 'Lateral bounds · carioca · hip openers · backpedal',
      detail: 'Set up two cones 20 yards apart. Players line up and perform each movement across: (1) Lateral bounds - jump side to side covering ground, (2) Carioca - crossover steps moving laterally, (3) Hip openers - high knee lifts with outward hip rotation, (4) Backpedal - running backwards with good posture. Walk back between each movement for recovery.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · green/yellow/red commands · ball control',
      detail: 'All players dribble their ball in a 20x20 yard grid. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slow with close touches, RED = stop with foot on ball and freeze. Mix in fake colors like PURPLE or ORANGE where players must ignore the command and keep dribbling. Play for 3-4 minutes with quick color changes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Shooting technique & power',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · toe touches · knee lifts · skipping · high kicks',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Focus on coordination for shooting efficiency', 'Opposite knee and arm movement', 'Diagonal leg swing under opposite armpit', 'Build up power through the progression'],
      badge: 'Warmup',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · touch to the side · shoot side-on',
      detail: 'Players dribble towards goal, make a touch to the side, and shoot while positioned side-on to the goal. Focus on proper body positioning and technique.',
      points: ['Approach at an angle, side-on to goal', 'Plant non-kicking foot beside ball', 'Lock ankle joint solid for power', 'Strike with laces, chest forward'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf',
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · touch to the side · shoot',
      detail: 'Basic shooting drill focusing on dribbling, taking a touch to the side to create space, and shooting with proper technique.',
      points: ['Big back swing with bent knee', 'Toes pointing down, ankle locked', 'Snap knee joint at contact', 'Full forward leg swing'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf',
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn · body positioning · technique',
      detail: 'Players receive the ball and shoot while turning. Emphasizes proper body mechanics and shooting technique when turning towards goal.',
      points: ['Turn away from pressure', 'Create time and space', 'Swing leg diagonally towards target', 'Plant foot comes off ground on follow-through'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Shooting combinations & game situations',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · toe touches · knee lifts · skipping · high kicks',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Focus on coordination for shooting efficiency', 'Opposite knee and arm movement', 'Diagonal leg swing under opposite armpit', 'Build up power through the progression'],
      badge: 'Warmup',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff · combination play',
      detail: 'Players work in pairs or small groups, with one player providing a layoff pass for the shooter. Focus on timing and quick shooting after receiving the layoff.',
      points: ['Good first touch to set up shot', 'Quick release after layoff', 'Proper shooting technique maintained', 'Communication between players'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf',
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · give & go · shot',
      detail: 'Combination play involving double pass (give and go) movement followed by a shot. Players must time their runs and passes to create shooting opportunities.',
      points: ['Timing of give and go movement', 'Sharp, accurate passes', 'Run to space after passing', 'Finish with quality shot'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf',
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 shooting scenarios · game situations',
      detail: 'Small-sided games focused on creating and finishing shooting opportunities. Progress through 1v1, 2v1, and 2v2 scenarios to practice shooting under pressure and in game-like situations.',
      points: ['Create time and space to shoot', 'Take what defenders give you', 'Quick decision making', 'Apply shooting technique under pressure'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf',
    },
  ],
};

