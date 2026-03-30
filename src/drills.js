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
      summary: 'Bear crawls · lateral bounds · hip openers · inch worms',
      detail: 'Set up a 20-yard line. Players perform bear crawls for 10 yards, then lateral bounds (5 each direction), hip openers (leg swings forward/back and side-to-side), and inch worms (walk hands out to plank, walk feet to hands). Complete 2 rounds with 30-second rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops',
      detail: 'Each player has a ball in a 20x20 yard grid. Play music while players dribble freely using different surfaces (inside, outside, sole). When music stops, players must freeze with ball under control. Add variations: freeze in specific position (sitting on ball, balancing on one foot), or perform skill when frozen (toe taps, pull-backs).',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling Microcycle 2 - Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice side-step, scissors, step-over, hook turn, drag-back, pull-push, pull-cut',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use video links provided. Players repeat each move 10 times. Focus on correct technique: small soft touches with shoe laces, quick feet and small steps.',
      points: ['Demonstrate each move correctly or use videos', 'Players must master these moves for game situations', 'Use correct technique: shoe laces, quick feet, small steps'],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Skipping, high knees, butt-kickers, carioca, lunges, stretches',
      detail: 'Dynamic warm-up including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm up',
      pdfUrl: null
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '10x20 area · Pass to start · Score by dribbling past end line',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 area · Beat 3 defenders · Score past end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line. Must beat each defender. Defenders start at back line of their squares and cannot leave their square. Defenders score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling Microcycle 2 - Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice side-step, scissors, step-over, hook turn, drag-back, pull-push, pull-cut',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use video links provided. Players repeat each move 10 times. Focus on correct technique: small soft touches with shoe laces, quick feet and small steps.',
      points: ['Demonstrate each move correctly or use videos', 'Players must master these moves for game situations', 'Use correct technique: shoe laces, quick feet, small steps'],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Skipping, high knees, butt-kickers, carioca, lunges, stretches',
      detail: 'Dynamic warm-up including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm up',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '10x20 area · Pass to start · Score by dribbling past end line',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 area · Beat 3 defenders · Score past end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line. Must beat each defender. Defenders start at back line of their squares and cannot leave their square. Defenders score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

