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
      summary: 'Hip openers · lateral bounds · inch worms',
      detail: 'Set up 20-yard line. Players perform hip openers (leg swings forward/back and side to side), lateral bounds (jumping sideways with control), and inch worms (walk hands out to plank, walk feet to hands). Complete 2 rounds, focusing on controlled movements and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble around grid · stop/go on commands',
      detail: 'Players dribble freely in 20x20 grid. Green light = dribble fast, Yellow light = slow dribbling, Red light = stop with foot on ball. Add moves: Green = right foot only, Yellow = left foot only, Red = sit on ball. Keep players moving and listening for 3-4 minutes.',
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
      summary: 'Pairs passing through gates · Focus on technique',
      detail: 'Start with the pairs passing through a single gate without dribbling to other gates. Focus on the correct technique and body shape - foot position, follow through, etc.',
      points: ['Plant non-kicking foot side-by-side with ball', 'Turn knee and toes 90 degrees to side', 'Contact with flat side of heel', 'Push through ball with follow-through'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small-sided possession · Cycle of possession practice',
      detail: '3v1 Possession Game focusing on the cycle of possession: get open, good first touch, escape pressure, accurate pass.',
      points: ['Pop away to create time and space', 'Soft, short first touch', 'Turn on first touch every time', 'Pass to feet with sharp, ground passes'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: 'Pass and support with numbers up · Movement off ball',
      detail: '3+1v1 Pass And Support drill emphasizing movement to space after passing and creating passing options.',
      points: ['Move to space after passing', 'Open body to face field of play', 'Pass before under pressure', 'Take what defenders give you'],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game with extra players · Large goals',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: ['No one-touch play allowed', 'Cue to run: preparation touch and look up', 'Pass to runner so ball meets feet', 'Emphasize cycle of possession'],
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
      summary: 'Technical warmup · Lots of touches for all players',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on proper passing and receiving technique.',
      points: ['Toes up when using inside of foot', 'Toe down when using outside of foot', 'Don\'t jab kicking foot down', 'Turn body to open up field view'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Small-sided possession · Cycle of possession practice',
      detail: '3V1 Possession Game focusing on the cycle of possession: get open, good first touch, escape pressure, accurate pass.',
      points: ['Pop away to create time and space', 'Soft, short first touch', 'Turn on first touch every time', 'Pass to feet with sharp, ground passes'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target players · Switching point of attack',
      detail: '2v2 + 2 Target Players drill focusing on switching the point of attack and using support players.',
      points: ['Pass to player with most time and space', 'Run first, then pass follows', 'Always be aware of defensive options', 'Create passing options after receiving'],
      badge: 'Attack & defend',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game with extra players · Large goals',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: ['No one-touch play allowed', 'Cue to run: preparation touch and look up', 'Pass to runner so ball meets feet', 'Emphasize cycle of possession'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

