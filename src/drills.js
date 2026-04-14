// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Apr 13-16';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Lateral bounds · carioca · hip circles · backpedal',
      detail: 'Set up cones 20 yards apart. Lateral bounds across (10 each leg), carioca back (facing same direction), hip circles at start (10 each direction), then backpedal to finish. Focus on controlled movements and proper form. 2-3 rounds with 30 second rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble around grid · find ball when music stops',
      detail: 'Place balls randomly in 20x20 yard grid (one less ball than players). Players dribble around freely. When coach stops music/whistle, players must quickly find and control any ball. Player without a ball does 5 toe taps before rejoining. Remove one more ball each round. Keep energy high and fun!',
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
      points: ['Plant non-kicking foot side-by-side with ball', 'Turn knee and toes 90 degrees to side', 'Point toe up', 'Contact with flat side of heel', 'Exaggerated follow-through'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small-sided possession · Creating time and space',
      detail: '3v1 possession game focusing on passing and receiving under pressure. Emphasize the cycle of possession and proper first touch.',
      points: ['Pop away to create space', 'Soft, short first touch', 'Turn away from pressure', 'Pass to player with most time and space'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: 'Pass and support · Creating passing options',
      detail: '3+1v1 exercise focusing on pass and support movement. Players must move to space after passing to give teammates options.',
      points: ['Move to space after passing', 'Create passing angles', 'Support the ball carrier', 'Quick combination play'],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: 'Small-sided game · Extra player support',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Focus on creating overloads and maintaining possession.',
      points: ['Use extra player effectively', 'Create overload situations', 'Quick passing combinations', 'Score in large goals'],
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
      summary: 'Warmup with lots of touches · No waiting in line',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on proper passing and receiving technique.',
      points: ['Plant foot side-by-side with ball', 'Toes up when using inside of foot', 'Toe down when using outside of foot', 'Push through ball with follow-through'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Possession under pressure · First touch emphasis',
      detail: '3v1 possession game with emphasis on proper first touch and maintaining possession. Players must turn on first touch every time.',
      points: ['Turn on first touch every time', 'Face the field of play', 'Pop away before receiving', 'No one-touch play allowed'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target support · Creating passing options',
      detail: '2v2 game with 2 target players providing additional passing options. Focus on using target players to maintain possession and create attacks.',
      points: ['Use target players effectively', 'Switch point of attack', 'Create passing triangles', 'Support after passing'],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: 'Small-sided game · Extra player support',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Focus on creating overloads and finishing in large goals.',
      points: ['Recognize when to bring extra player', 'Quick transition to attack', 'Maintain possession under pressure', 'Finish chances in large goals'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

