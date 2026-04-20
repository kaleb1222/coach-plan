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
      summary: 'Carioca · hip openers · lateral bounds · bear crawls',
      detail: 'Set up a 20-yard line. Players perform carioca (side-stepping crossover) down and back, then hip openers (leg swings forward/back and side to side), lateral bounds (single-leg jumping side to side), and bear crawls (hands and feet only, knees off ground). Complete 2 rounds with 30 seconds rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops · last one out',
      detail: 'Every player has a ball in a 30x20 yard area. Play music while players dribble freely using different surfaces of their feet. When music stops, players must freeze with their ball. Last player to freeze or anyone still moving is out for that round. Restart with remaining players in a smaller area. Continue until one winner remains.',
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
      summary: 'Warmup · Carioca · High kicks · Coordination building',
      detail: 'Special dynamic stretching to prepare for shooting. All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently', 'These exercises will produce excellent coordination over the whole season and dramatically improve shooting'],
      badge: 'Shooting prep',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · Touch to the side · Shoot side-on',
      detail: 'Shooting Variation 2 - Dribble-Touch To The Side-Shoot Side-On. Focus on proper shooting technique with approach at angle, side-on to goal.',
      points: ['Approach the ball at an angle, side-on to the goal', 'Plant the non-kicking foot side by side with the ball, toe pointing towards target', 'Big back swing with bent knee', 'Lock ankle joint solid, point toes down', 'Strike with laces, snap knee at contact'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf'
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · Touch to the side · Shoot',
      detail: 'Shooting Variation 1 - Dribble-Touch To The Side-Shoot. Practice shooting technique with proper body shape and power.',
      points: ['Full forward leg swing so plant foot comes off ground', 'Swing leg diagonally, bringing knee under opposite armpit', 'Swing kicking leg in straight line toward target for direction control', 'Chest leaning forward at moment of contact'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf'
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn · Body shape · Power & accuracy',
      detail: 'Shooting Variation 3 - Shooting On The Turn. Focus on shooting technique when turning with the ball.',
      points: ['Create time and space with good first touch', 'Turn away from pressure', 'Maintain proper shooting form even when turning'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Shooting combinations & game situations',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Warmup · Carioca · High kicks · Coordination building',
      detail: 'Special dynamic stretching to prepare for shooting. All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently', 'These exercises will produce excellent coordination over the whole season and dramatically improve shooting'],
      badge: 'Shooting prep',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff · Combination play',
      detail: 'Shooting Variation 4 - Shooting Off The Layoff. You can repeat variations 2, 1 and 3 as alternatives. Focus on shooting from passes and layoffs.',
      points: ['Good first touch to set up shot', 'Quick shooting after receiving layoff', 'Maintain shooting technique under pressure'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf'
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · Give & go · Shot',
      detail: 'Shooting Variation 5 - Double Pass - Give & Go - Shot. Combination play leading to shooting opportunities.',
      points: ['Quick passing combinations', 'Movement after passing', 'Time the run for the return pass', 'Finish with proper shooting technique'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf'
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 · Game situations · Shooting practice',
      detail: 'Shooting Game 2 with 1v1, 2v1, and 2v2 variations. Game-like situations to practice shooting under pressure and in different numerical situations.',
      points: ['Create time and space to shoot', 'Take what the defenders give you', 'Shooting is basically passing into the goal', 'Get open - pop away from defender to create space'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf'
    }
  ]
};

