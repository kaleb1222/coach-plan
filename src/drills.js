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
      summary: 'Lateral bounds · carioca · hip openers · inch worms',
      detail: 'Set up 15-yard line. Players perform: lateral bounds (side to side jumps), carioca (sideways crossover steps), hip openers (leg swings across body), and inch worms (walk hands forward to plank, walk feet to hands). Complete 2 rounds with 30-second rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble around · music stops · find a ball quickly',
      detail: 'Place one fewer ball than players in center circle. Players dribble their balls around the area while music plays. When music stops, players must quickly leave their ball and find any ball in the center. Player without a ball does 5 jumping jacks then rejoins. Remove one ball each round.',
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
        'Plant non-kicking foot side-by-side with the ball',
        'Turn knee and toes of kicking foot to side at 90 degrees',
        'Make contact with solid flat side of heel',
        'Push through ball with exaggerated follow-through'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small-sided possession with numerical advantage',
      detail: '3v1 Possession Game focusing on maintaining possession and quick passing.',
      points: [
        'Pop away to create time and space',
        'Good first touch turning away from pressure',
        'Accurate pass to player with most time and space',
        'Never allow 1 touch play at this stage'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: 'Passing with support player · Decision making',
      detail: '3+1v1 Pass And Support exercise focusing on passing decisions and support play.',
      points: [
        'Support player provides passing options',
        'Make runs when player takes preparation touch',
        'Pass to feet unless runner is making a run',
        'Take what the defenders give you'
      ],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: 'Small-sided game · Extra player support',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: [
        'Team with ball can use extra player',
        'Apply cycle of possession principles',
        'Move to space after passing',
        'Focus on accurate passing under pressure'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced passing and receiving patterns',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Passing & Receiving Warmup 2',
      summary: 'Technical warmup · Multiple touches',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on passing and receiving technique.',
      points: [
        'Soft, short first touch',
        'Turn on first touch every time',
        'Point toes up when using inside of foot',
        'Point toe down when using outside of foot'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Possession focus · Quick decision making',
      detail: '3V1 Possession Game emphasizing quick passing and maintaining possession under pressure.',
      points: [
        'Pop away from defender before receiving',
        'Turn body to face field of play',
        'Escape pressure by dribbling to space',
        'Pass to player with most time and space'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target support · Passing options',
      detail: '2v2 + 2 Target Players exercise providing additional passing options and support.',
      points: [
        'Use target players to maintain possession',
        'Create passing angles and support',
        'Switch point of attack through target players',
        'Focus on accurate passing to feet'
      ],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: 'Game situation · Extra player advantage',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: [
        'Utilize numerical advantage effectively',
        'Apply all four stages of possession cycle',
        'Make runs when teammate takes preparation touch',
        'Maintain possession through accurate passing'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

