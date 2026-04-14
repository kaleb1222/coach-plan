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
      summary: 'Frankenstein walks · lateral bounds · bear crawls',
      detail: 'Set up 20-yard line. Players perform Frankenstein walks (straight leg kicks) for 10 yards, then lateral bounds (jumping side to side) for 10 yards, followed by bear crawls back to start. Focus on controlled movements and proper form. Repeat 2-3 times.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops',
      detail: 'Each player starts with a ball in a 20x20 yard grid. Players dribble freely while music plays. When music stops, players must freeze in place with their ball. Any player moving after the freeze is out for 10 seconds. Add challenges like freeze in specific positions (one foot on ball, toe touches, etc.).',
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
        'Turn knee and toes of kicking foot to side at 90 degrees',
        'Contact ball with solid flat side of heel',
        'Push through ball with exaggerated follow-through'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small-sided possession · Focus on first touch',
      detail: '3v1 Possession Game to work on keeping the ball under pressure while focusing on passing and receiving fundamentals.',
      points: [
        'Soft, short 1st touch',
        'Turn on the 1st touch every time',
        'Pop away to create time and space',
        'Pass to player with most time and space'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '3+1v1 passing exercise · Support and movement',
      detail: '3+1v1 Pass And Support exercise focusing on movement off the ball and supporting the player in possession.',
      points: [
        'Get open - pop away from defender',
        'Good first touch to create space',
        'After passing move to space',
        'Always pass to feet unless runner starts run first'
      ],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game with extra players · Team with ball adds player',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game to two large goals.',
      points: [
        'No 1-touch play allowed',
        'Emphasize cycle of possession',
        'Take what defenders give you',
        'Pass to player with most time and space'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Passing and receiving technical focus',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Passing & Receiving Warmup 2',
      summary: 'Technical warmup · Multiple areas for touches',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on passing and receiving fundamentals.',
      points: [
        'Toes pointing up when using inside of foot',
        'Toe down when using outside of foot',
        'Turn body to open up to field',
        'Soft, short first touch'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Small-sided possession · Pressure situations',
      detail: '3V1 Possession Game to work on keeping the ball under pressure while focusing on passing and receiving fundamentals.',
      points: [
        'Pop away to create time and space',
        'Good first touch turning away from pressure',
        'Escape pressure by dribbling to space',
        'Accurate pass on ground'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target players · Support and passing options',
      detail: '2v2 + 2 Target Players exercise providing additional passing options and support.',
      points: [
        'Before receiving turn body to face field',
        'After passing move to give passing options',
        'Always be aware of what defenders give you',
        'Pass to feet unless runner starts first'
      ],
      badge: 'Attack & defend',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game with extra players · Team with ball adds player',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game to two large goals.',
      points: [
        'Emphasize 4 stages of possession cycle',
        'No 1-touch play during games',
        'Attackers aware of defender options',
        'Pass meets runner\'s feet'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

