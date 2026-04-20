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
      summary: 'Bear crawls · lateral bounds · hip openers · backpedal',
      detail: 'Set up cones 15 yards apart. Players perform bear crawls for 10 yards, then lateral bounds (5 each direction), hip openers in place (10 each leg), and backpedal to starting position. Complete 2-3 rounds with 30-second rest between rounds. Focus on controlled movements and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble freely · freeze when music stops · last to stop is out',
      detail: 'Each player starts with a ball in a 25x25 yard grid. Players dribble freely while music plays or coach counts aloud. When music stops or coach shouts "FREEZE!", players must stop their ball as quickly as possible using sole of foot. Last player to freeze sits out one round. Add variations like freezing in specific poses or using only weak foot.',
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
      summary: 'Carioca · toe touches · knee touches · skipping · high kicks',
      detail: 'Special dynamic stretching to prepare for shooting. All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Improves coordination for shooting', 'Diagonal leg swing brings knee under opposite armpit', 'High kicks should lift player off ground', 'Opposite arms and legs during skipping'],
      badge: 'Shooting prep',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · touch to the side · shoot side-on',
      detail: 'Shooting variation focusing on dribbling, touching the ball to the side, and shooting while positioned side-on to the goal.',
      points: ['Approach ball at angle, side-on to goal', 'Plant non-kicking foot beside ball', 'Big back swing with bent knee', 'Lock ankle joint, toes pointing down', 'Strike with laces', 'Snap knee joint at contact', 'Chest leaning forward at contact'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf',
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · touch to the side · shoot',
      detail: 'Shooting variation focusing on dribbling technique, touching the ball to the side, and shooting with proper body positioning and technique.',
      points: ['Full forward leg swing, plant foot comes off ground', 'Swing leg diagonally toward opposite armpit', 'Swing kicking leg in straight line toward target', 'Lock ankle solid for maximum power'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf',
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn',
      detail: 'Shooting variation focusing on receiving the ball and shooting while turning, emphasizing proper body positioning and shooting technique.',
      points: ['Create time and space before shooting', 'Good first touch to set up the shot', 'Escape pressure by dribbling to space', 'Maintain shooting technique while turning'],
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
      summary: 'Carioca · toe touches · knee touches · skipping · high kicks',
      detail: 'Special dynamic stretching to prepare for shooting. All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Improves coordination for shooting', 'Diagonal leg swing brings knee under opposite armpit', 'High kicks should lift player off ground', 'Opposite arms and legs during skipping'],
      badge: 'Shooting prep',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff',
      detail: 'Shooting variation focusing on receiving a layoff pass and shooting with proper technique. Can repeat variations 2, 1 and 3 as alternatives.',
      points: ['Good first touch to control layoff', 'Quick setup for shot', 'Maintain shooting technique under pressure', 'Create time and space for accurate shot'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf',
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · give & go · shot',
      detail: 'Advanced shooting variation incorporating double pass combination play, give and go movement, and finishing with a shot.',
      points: ['Quick passing combinations', 'Movement after passing', 'Create shooting opportunities through combination play', 'Accurate final pass to set up shot'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf',
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 shooting games with variations',
      detail: 'Small-sided shooting games with multiple variations: 1v1, 2v1, and 2v2 situations. Focus on applying shooting technique in game situations while creating and finishing scoring opportunities.',
      points: ['Apply shooting technique in game situations', 'Create time and space to shoot', 'Take what defenders give you', 'Shoot with power and accuracy under pressure'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf',
    },
  ],
};

