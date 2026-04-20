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
      summary: 'Lateral bounds · carioca · hip openers · bear crawls',
      detail: 'Set up 20-yard course. Players perform lateral bounds (side-to-side jumps) for 10 yards, then carioca (crossover steps) back. Next, hip openers (leg swings forward/back, side-to-side) at cones. Finish with bear crawls across 10 yards - hands and feet only, keep hips low.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in grid · react to color commands',
      detail: '20x20 yard grid, each player with ball. Coach calls colors: GREEN = dribble fast, YELLOW = dribble slow with close touches, RED = stop ball with foot on top. Add challenges: BLUE = sit on ball, PURPLE = juggle ball, ORANGE = around the world with ball.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Shooting fundamentals · Power & accuracy',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · Walking touches · High kicks · Coordination',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently', 'These dynamic stretching exercises will produce excellent coordination over the whole season', 'Will dramatically improve their shooting when done every practice'],
      badge: 'Warmup',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · Touch to the side · Shoot side-on',
      detail: 'Shooting variation focusing on dribble-touch to the side-shoot side-on technique. Players practice the proper body position and technique for shooting after a lateral touch.',
      points: ['Approach the ball at an angle, side-on to the goal', 'Plant the non-kicking foot side by side with the ball', 'Big back swing, with bent knee', 'Lock the ankle joint solid for the most power', 'Strike the ball with the laces, ankle locked'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf'
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · Touch to the side · Shoot',
      detail: 'Shooting variation focusing on dribble-touch to the side-shoot technique. Players work on creating space with a lateral touch before shooting.',
      points: ['Snap the knee joint at the moment of contact', 'Chest leaning forward at the moment of contact', 'Full forward leg swing, so your plant foot comes off the ground', 'Swing your leg diagonally, bringing your knee under the opposite armpit'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf'
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn · Body shape · Accuracy',
      detail: 'Shooting variation focusing on shooting on the turn. Players practice receiving the ball and turning to shoot in one fluid motion while maintaining proper shooting technique.',
      points: ['Swing the kicking leg in a straight line toward the target - that is how you control the direction of the shot', 'Before receiving pop away and turn your body to open yourself up to face the field of play', 'Good first touch should create time and space'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced shooting · Combination play',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · Walking touches · High kicks · Coordination',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently', 'These dynamic stretching exercises will produce excellent coordination over the whole season', 'Will dramatically improve their shooting when done every practice'],
      badge: 'Warmup',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff · Combination play',
      detail: 'Shooting variation focusing on shooting off the layoff. Players practice receiving a layoff pass and immediately shooting while maintaining proper technique and body position.',
      points: ['The cue to make a run is when the player with the ball takes a preparation touch and looks up', 'The cue to pass is when the runner starts the run', 'Always pass to the feet when passing to the runner'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf'
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · Give & go · Shot',
      detail: 'Shooting variation focusing on double pass - give and go - shot combination. Players work on quick passing combinations leading to shooting opportunities.',
      points: ['After passing move to space to give your team mates passing options', 'Emphasize the cycle of possession: Pop away, good first touch, escape the pressure, accurate pass', 'Pass to the player with the most time and space'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf'
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 · Shooting under pressure',
      detail: 'Game-based shooting practice with multiple variations: 1v1, 2v1, and 2v2 situations. Players practice shooting under pressure while defenders try to prevent shots. Focus on creating time and space before shooting.',
      points: ['Attackers must always be aware what options the defenders are taking away', 'Take what the defenders give you', 'You must create time and space in order to shoot', 'Shooting is basically passing into the goal'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf'
    }
  ]
};

