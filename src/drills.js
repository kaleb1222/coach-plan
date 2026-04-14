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
      summary: 'Bear crawls · inch worms · lateral bounds · hip openers',
      detail: 'Set up 20-yard line. Bear crawl 10 yards forward, then inch worm back 10 yards (walk hands out to plank, walk feet to hands). Next, lateral bounds side to side for 20 yards, then hip openers (leg swings forward/back and across body). Complete 2 rounds with 30-second rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops',
      detail: 'Each player with a ball in 30x30 yard area. Play music while players dribble freely using both feet. When music stops, players must freeze in place with foot on ball. Last player to freeze or anyone moving during freeze does 5 toe taps. Add challenges: freeze in specific poses, find a partner to freeze with, or freeze with ball between feet.',
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
      points: [
        'Plant non-kicking foot side-by-side with ball',
        'Turn knee and toes 90 degrees to side',
        'Contact ball with flat side of heel',
        'Push through ball with follow-through'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small-sided possession with numerical advantage',
      detail: '3v1 Possession Game - maintain possession against single defender.',
      points: [
        'Pop away to create time and space',
        'Soft, short first touch',
        'Pass to player with most time and space',
        'Never allow 1-touch play at this stage'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '3+1 vs 1 passing with support options',
      detail: '3+1v1 Pass And Support - passing exercise with numerical advantage and support play.',
      points: [
        'Turn on first touch every time',
        'After passing move to space for options',
        'Take what defenders give you',
        'Pass to feet, no slow balls'
      ],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Extra player can join attacking team',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played with 2 large goals.',
      points: [
        'Cycle of possession: pop away, first touch, escape pressure, accurate pass',
        'Cue to run is when ball carrier takes prep touch and looks up',
        'Pass so ball meets runner\'s feet',
        'Be aware of what options defenders give you'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Passing and receiving progression',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Passing & Receiving Warmup 2',
      summary: 'Technical warmup · Multiple areas for touches',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on passing and receiving technique.',
      points: [
        'Toes up when using inside of foot',
        'Toe down when using outside of foot',
        'Turn body to open up to field of play',
        'Swing kicking leg up, don\'t jab down'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Small-sided possession with numerical advantage',
      detail: '3V1 Possession Game - maintain possession against single defender.',
      points: [
        'Pop away to create time and space',
        'Soft, short first touch',
        'Pass to player with most time and space',
        'Never allow 1-touch play at this stage'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target players for support',
      detail: '2v2 + 2 Target Players - small-sided game with additional target players to provide passing options.',
      points: [
        'Use target players to maintain possession',
        'Create passing angles and support',
        'Quick combination play',
        'Switch point of attack through targets'
      ],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Extra player can join attacking team',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played with 2 large goals.',
      points: [
        'Cycle of possession: pop away, first touch, escape pressure, accurate pass',
        'Cue to run is when ball carrier takes prep touch and looks up',
        'Pass so ball meets runner\'s feet',
        'Be aware of what options defenders give you'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

