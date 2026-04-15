// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Apr 13';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Bear crawls · inch worms · lateral bounds · backpedal',
      detail: 'Set up a 20-yard line. Players perform bear crawls for 10 yards, then inch worms for 10 yards going forward. Return with lateral bounds (5 each direction), then backpedal to start. Focus on controlled movements and full range of motion. Complete 2-3 rounds with 30 seconds rest between rounds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble around · music stops · find any ball',
      detail: 'Place one fewer ball than players in the center of a 20x20 grid. Players dribble their balls around the area while music plays. When music stops, players must leave their ball and quickly find any ball in the center. The player without a ball does 5 toe taps before the next round. Remove one ball each round until final winner.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Passing and receiving fundamentals',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Pass Through Gates - Pairs',
      summary: 'Pairs passing through gates · Focus technique & body shape',
      detail: 'Start with the pairs passing through a single gate without dribbling to other gates. Focus on the correct technique and body shape - foot position, follow through, etc.',
      points: [
        'Plant non-kicking foot side-by-side with ball',
        'Turn knee and toes 90 degrees to side, toe up',
        'Contact ball with flat side of heel',
        'Push through ball with follow-through'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small-sided possession · Apply passing principles',
      detail: '3v1 Possession Game focusing on the cycle of possession and accurate passing under pressure.',
      points: [
        'Pop away to create time and space',
        'Soft, short first touch turning away from pressure',
        'Accurate pass to feet on ground',
        'Never allow 1-touch play at this stage'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: 'Passing with support · Numerical advantage practice',
      detail: '3+1v1 Pass And Support exercise developing passing options and support play in advantageous situations.',
      points: [
        'After passing move to space for passing options',
        'Open body to face field of play',
        'Take what defenders give you',
        'Pass to player with most time and space'
      ],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Team with ball adds extra player',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played to two large goals.',
      points: [
        'Cue to run is when ball carrier takes prep touch and looks up',
        'Pass when runner starts the run',
        'Always be aware what options defenders give you',
        'Carry over all technical points from warmup'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Passing and receiving fundamentals',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Passing & Receiving Warmup 2',
      summary: 'Technical warmup · Multiple areas for maximum touches',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on correct passing and receiving technique.',
      points: [
        'Toes up when using inside of foot',
        'Toe down when using outside of foot',
        'Turn on first touch every time',
        'No 1-touch in games, only in warmup as challenge'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Small-sided possession · Apply passing principles',
      detail: '3V1 Possession Game focusing on the cycle of possession and accurate passing under pressure.',
      points: [
        'Pop away to create time and space',
        'Good first touch creates time and space',
        'Escape pressure by dribbling to space',
        'Accurate pass to feet, sharp and on ground'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with targets · Passing to supporting players',
      detail: '2v2 + 2 Target Players exercise focusing on passing options and support from target players.',
      points: [
        'Before receiving, open up to face field',
        'Face teammates to pass before pressure arrives',
        'Four ways to escape pressure depending on defender distance',
        'Pass to player with most time and space'
      ],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Team with ball adds extra player',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played to two large goals.',
      points: [
        'Emphasize complete cycle of possession',
        'Start coaching points in warmup, carry through progression',
        'Ball attracts defenders, escape to create time and space',
        'Pass meets runner\'s feet when passing to moving player'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

