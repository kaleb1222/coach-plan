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
      summary: 'Carioca · hip openers · lateral bounds · backpedal',
      detail: 'Set up 20-yard line. Carioca sideways crossing feet over, then hip openers (leg swings forward/back and side to side), lateral bounds jumping side to side on one foot then the other, finish with controlled backpedal. Focus on smooth movement and body control. 2 rounds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in grid · react to color commands',
      detail: 'All players dribble in 20x20 yard grid. Green = dribble freely, Yellow = slow dribbling with small touches, Red = stop with foot on ball and freeze. Add movements: Blue = sit on ball, Purple = juggle. Coach calls colors randomly. Keep ball close and heads up to avoid collisions.',
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
      name: 'Rehearse Skill Moves',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Open area practice of individual skill moves. Focus on hook turn, drag-back, pull-push, and pull-cut. Each player repeats moves 10 times. Coach demonstrates correct technique.',
      points: [
        'Take small soft touches with shoe laces',
        'Quick feet and small steps for quick reactions',
        'Make defender react to you, not the other way around',
        'Use correct surface of foot - inside of heel'
      ],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to score by dribbling past end line',
      detail: '10x20 yard area. Players pass to opponent, then play 1v1. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: [
        'Accurate pass to feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through 3 defenders in sequence to score',
      detail: '10x36 yard area divided into three 10x12 sections. Attacker must beat each defender in their square to score by dribbling past end line. Defenders stay in their squares.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed'
      ],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Small-sided game · team with ball can add extra player',
      detail: '2v2 game with large goals. The team with the ball can have an extra player pass a teammate in. Focus on dribbling skills in game context.',
      points: [
        'Use dribbling moves learned in practice',
        'Look for opportunities to beat defenders',
        'Quick transitions when losing possession'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Skill moves application in game situations',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Open area practice of individual skill moves. Focus on hook turn, drag-back, pull-push, and pull-cut. Each player repeats moves 10 times. Coach demonstrates correct technique.',
      points: [
        'Take small soft touches with shoe laces',
        'Quick feet and small steps for quick reactions',
        'Make defender react to you, not the other way around',
        'Use correct surface of foot - inside of heel'
      ],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to score by dribbling past end line',
      detail: '10x20 yard area. Players pass to opponent, then play 1v1. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: [
        'Accurate pass to feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through 3 defenders in sequence to score',
      detail: '10x36 yard area divided into three 10x12 sections. Attacker must beat each defender in their square to score by dribbling past end line. Defenders stay in their squares.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed'
      ],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Small-sided game using poles for goals vs other teams',
      detail: '2v2 game using poles to make goals. Teams play against other teams for 30 minutes. Focus on applying dribbling skills in competitive game situations.',
      points: [
        'Apply skill moves learned in practice',
        'Beat defenders 9 out of 10 times in game situation',
        'Change direction and speed to create time and space'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

