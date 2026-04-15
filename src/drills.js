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
      summary: 'Hip openers · lateral bounds · inch worms · backpedal',
      detail: 'Players perform 4 dynamic movements across 20-yard grid: 1) Hip openers - step forward, lift knee up and out to open hip, alternate legs. 2) Lateral bounds - bound side to side with big steps, land softly. 3) Inch worms - walk hands forward to plank, walk feet to hands. 4) Backpedal - run backwards maintaining good posture. Rest 30 seconds between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops · last to freeze sits out',
      detail: 'All players dribble their ball freely in 30x30 yard area while music plays. When music stops, players must freeze with foot on ball. Coach removes music for shorter periods each round. Last player to freeze sits out one round. Restart music and continue. Emphasize close control, looking up, and quick reactions to stop.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Passing and Receiving - Technical Focus',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Pass Through Gates - Pairs',
      summary: 'Pairs passing through gates · Focus on technique · Body shape',
      detail: 'Start with the pairs passing through a single gate without dribbling to other gates. Focus on the correct technique and body shape - foot position, follow through, etc.',
      points: ['Plant non-kicking foot side-by-side with ball', 'Turn knee and toes at 90 degrees', 'Contact with flat side of heel', 'Push through ball with follow-through'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: '3 attackers vs 1 defender · Maintain possession · Quick passing',
      detail: '3v1 possession exercise focusing on quick passing and receiving. Players work to maintain possession against a single defender while applying the cycle of possession principles.',
      points: ['Pop away to create space', 'Soft first touch', 'Pass to player with most space', 'Move after passing'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '3 plus 1 vs 1 · Passing support · Overload situations',
      detail: 'Passing and support exercise with 3 players plus 1 supporting player against 1 defender. Focus on creating passing options and supporting the player with the ball.',
      points: ['Create passing angles', 'Support the ball carrier', 'Quick decision making', 'Accurate passing to feet'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 plus neutral players · Two large goals · Team with ball adds player',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played with two large goals focusing on possession and finishing.',
      points: ['Use extra player advantage', 'Quick transitions', 'Maintain possession', 'Clinical finishing'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Passing and Receiving - Technical Progression',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Passing & Receiving Warmup 2',
      summary: 'Technical warmup · Lots of touches · No waiting in line',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on passing and receiving technique with proper body shape and ball contact.',
      points: ['Toes up for inside foot contact', 'Plant foot beside ball', 'Soft first touch', 'Turn on first touch every time'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: '3 attackers vs 1 defender · Maintain possession · Quick passing',
      detail: '3v1 possession exercise focusing on quick passing and receiving. Players work to maintain possession against a single defender while applying the cycle of possession principles.',
      points: ['Pop away to create space', 'Good first touch creates time/space', 'Escape pressure by dribbling', 'Accurate pass to feet'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target players · Passing to targets · Support play',
      detail: '2v2 game with 2 target players. Teams work to pass to their target players while defending against opponents. Focus on creating passing lanes and supporting teammates.',
      points: ['Pass to target players', 'Create passing angles', 'Support after passing', 'Defend passing lanes'],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 plus neutral players · Two large goals · Team with ball adds player',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played with two large goals focusing on possession and finishing.',
      points: ['Exploit numerical advantage', 'Quick ball movement', 'Clinical finishing', 'Defensive transitions'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

