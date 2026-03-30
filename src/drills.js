// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Mar 30';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Lateral bounds · hip openers · inch worms · backpedal',
      detail: 'Players perform 4 dynamic movements across 20-yard grid. Start with lateral bounds (jumping side to side), then hip openers (leg swings forward and across body), inch worms (walk hands out to plank, walk feet to hands), finish with backpedal. Rest 30 seconds between exercises. Focus on controlled movement and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · respond to color commands',
      detail: 'Players dribble freely in 30x30 yard grid with their ball. Coach calls out colors: GREEN = dribble fast, YELLOW = slow dribbling, RED = stop with foot on ball. Add variations like BLUE = sit on ball, PURPLE = juggle, ORANGE = dribble with weak foot. Keep players moving and engaged with quick color changes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental dribbling skills & moves',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice skill moves · Side-step · Scissors · Step-over · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Each player repeats each move 10 times. Use video links for proper technique demonstration.',
      points: ['Demonstrate each move correctly', 'Use small soft touches with shoe laces', 'Quick feet and small steps for reaction', 'Point toe straight down when dribbling'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Attack vs defend · Score by dribbling past end line · Use skill moves',
      detail: '10x20 yard area. Players start from opposite corners. Blue passes to red, then 1v1 battle begins. Score by dribbling with control past the opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · Dribble through sections · Score at end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders each in their square. Attacker must dribble through and beat each defender to score by crossing the end line. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Small-sided game · Team with ball can have extra player · Pass teammate in',
      detail: '2v2 game with large goals. The team with the ball can have an extra player (pass a teammate in). Focus on dribbling skills learned in practice while playing in game situation.',
      points: ['Use dribbling moves in game context', 'Create time and space', 'Quick transitions', 'Support the ball carrier'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental dribbling skills & moves',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice skill moves · Side-step · Scissors · Step-over · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Each player repeats each move 10 times. Use video links for proper technique demonstration.',
      points: ['Demonstrate each move correctly', 'Use small soft touches with shoe laces', 'Quick feet and small steps for reaction', 'Point toe straight down when dribbling'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Attack vs defend · Score by dribbling past end line · Use skill moves',
      detail: '10x20 yard area. Players start from opposite corners. Blue passes to red, then 1v1 battle begins. Score by dribbling with control past the opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · Dribble through sections · Score at end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders each in their square. Attacker must dribble through and beat each defender to score by crossing the end line. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Small-sided game · Use poles for goals · Play against other teams',
      detail: '2v2 game using poles to make the goals. For this exercise your team should go against one of the other teams. Focus on applying dribbling moves learned in practice during game situations.',
      points: ['Use moves in game context', 'Beat defender 9 out of 10 times', 'Change direction and speed', 'Create time and space'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

