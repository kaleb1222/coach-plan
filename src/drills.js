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
      summary: 'Lateral bounds · carioca · bear crawls · backpedal',
      detail: 'Set up 20-yard course. Lateral bounds across (5 bounds each direction), carioca down one side, bear crawls across opposite end, backpedal to start. Focus on controlled movements and proper form. Complete 2-3 rounds with 30-second rest between rounds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · respond to color commands',
      detail: 'Players dribble freely in 20x20 grid with their ball. Coach calls out colors: GREEN = dribble fast, YELLOW = slow dribbling, RED = stop and put foot on ball. Add variations: PURPLE = change direction, BLUE = sit on ball, ORANGE = juggle in place. Keep players moving and listening for 3-4 minutes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling microcycle 2 - fundamental skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice skill moves · Side-step · Scissors · Step-over · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. See video links for demonstrations. Players should repeat each move 10 times.',
      points: [],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Butt-kickers · Carioca · Lunges',
      detail: 'Dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · Players score by dribbling past end line · Good first touch essential',
      detail: '10x20 yard area. Players in corners move to center. Blue passes to red, they play 1v1 until ball goes out. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately - don\'t wait for defender to close down', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · Three sections · Beat each defender · Control through squares',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders start at back line of their squares and cannot leave their square. Defenders score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling microcycle 2 - fundamental skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice skill moves · Side-step · Scissors · Step-over · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. See video links for demonstrations. Players should repeat each move 10 times.',
      points: [],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Butt-kickers · Carioca · Lunges',
      detail: 'Dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · Players score by dribbling past end line · Good first touch essential',
      detail: '10x20 yard area. Players in corners move to center. Blue passes to red, they play 1v1 until ball goes out. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately - don\'t wait for defender to close down', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · Three sections · Beat each defender · Control through squares',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders start at back line of their squares and cannot leave their square. Defenders score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

