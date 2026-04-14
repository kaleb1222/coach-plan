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
      summary: 'Lateral bounds · hip openers · inch worms',
      detail: 'Set up 20-yard line. Lateral bounds: bound sideways on one foot, then the other, covering ground laterally. Hip openers: step forward into lunge, lift back knee up and out to side, rotate hip. Inch worms: hands on ground, walk hands forward to plank, walk feet to hands. Complete 2 rounds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in grid · respond to color commands',
      detail: 'Players dribble freely in 20x20 grid with a ball each. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slow with lots of touches, RED = stop with foot on ball. Add fun variations like PURPLE = switch balls with someone, BLUE = dribble backwards. Keep players moving and listening.',
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
      summary: '3 attackers keep ball from 1 defender',
      detail: '3v1 Possession Game focusing on maintaining possession through accurate passing and receiving.',
      points: ['Pop away to create space', 'Soft first touch away from pressure', 'Pass to player with most time and space', 'Never allow 1-touch play'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '3 players plus 1 support vs 1 defender',
      detail: '3+1v1 Pass And Support exercise developing passing combinations and support play.',
      points: ['After passing move to space', 'Give teammates passing options', 'Face field of play when receiving', 'Turn on first touch every time'],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 with extra players · Two large goals',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played to two large goals.',
      points: ['Team with ball can bring extra player', 'Take what defenders give you', 'Accurate passing to feet', 'Escape pressure before passing'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Passing and receiving development',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Passing & Receiving Warmup 2',
      summary: 'Warmup focusing on passing technique',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on fundamental passing and receiving technique.',
      points: ['Toes up when using inside of foot', 'Toe down when using outside of foot', 'Don\'t jab foot down when passing', 'Swing kicking leg up through ball'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: '3 attackers keep ball from 1 defender',
      detail: '3V1 Possession Game focusing on maintaining possession through accurate passing and receiving.',
      points: ['Pop away to create space', 'Soft first touch away from pressure', 'Pass to player with most time and space', 'Never allow 1-touch play'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target players for support',
      detail: '2v2 + 2 Target Players exercise focusing on using support players and maintaining possession.',
      points: ['Use target players for support', 'Pop away before receiving', 'Turn body to face field', 'Run comes before pass'],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 with extra players · Two large goals',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played to two large goals.',
      points: ['Team with ball can bring extra player', 'Take what defenders give you', 'Accurate passing to feet', 'Escape pressure before passing'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

