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
      summary: 'Bear crawls · inch worms · lateral bounds · backpedal',
      detail: 'Set up 20-yard line. Players perform bear crawls for 10 yards, then inch worms for 5 yards. Return with lateral bounds (side-to-side jumps) for 10 yards, finish with backpedal to start. Focus on controlled movements, keep core engaged during bear crawls and inch worms.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops · last to stop eliminated',
      detail: 'All players dribble freely in 30x30 yard area. When music stops (or coach shouts "FREEZE"), players must immediately stop their ball and freeze. Last player to freeze is eliminated and does 5 toe taps on sideline. Restart music and continue until 3 players remain as winners.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental skills · Dribbling moves · Beat defenders',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse moves in open area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. Coach demonstrates each move or plays videos.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Carioca · Lunges',
      detail: 'Dynamic stretching routine including: Skipping lap, High knees, Butt-kickers, Carioca, Forward lunge, Side lunge, Side squat, Knee to chest, Airplane, Toe touch, High kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: 'Beat defender using moves · Score by dribbling past end line',
      detail: '1v1 battle starts with accurate pass to feet. Player with ball scores by dribbling with control past opposite end line using one of the skill moves. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender to close down',
        'Approach with control doing fakes, fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence · Use moves to escape pressure',
      detail: 'Attacker dribbles through 10x36 yard area divided into three sections with one defender per section. Must beat each defender to score by dribbling past final end line. Defenders stay in their squares and score by winning ball and stopping it on front line.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental skills · Dribbling moves · Beat defenders',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse moves in open area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. Coach demonstrates each move or plays videos.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Carioca · Lunges',
      detail: 'Dynamic stretching routine including: Skipping lap, High knees, Butt-kickers, Carioca, Forward lunge, Side lunge, Side squat, Knee to chest, Airplane, Toe touch, High kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: 'Beat defender using moves · Score by dribbling past end line',
      detail: '1v1 battle starts with accurate pass to feet. Player with ball scores by dribbling with control past opposite end line using one of the skill moves. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender to close down',
        'Approach with control doing fakes, fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence · Use moves to escape pressure',
      detail: 'Attacker dribbles through 10x36 yard area divided into three sections with one defender per section. Must beat each defender to score by dribbling past final end line. Defenders stay in their squares and score by winning ball and stopping it on front line.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

