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
      summary: 'Bear crawls · inch worms · hip openers · backpedal',
      detail: 'Set up a 20-yard line. Players start with bear crawls for 10 yards (hands and feet, hips up). At halfway point, transition to inch worms - hands walk forward into plank, then feet walk to hands. Continue with hip openers (leg swings forward/back and side to side). Finish with backpedal to starting line. Repeat 2-3 times, focusing on controlled movements and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in grid · react to color commands',
      detail: 'All players dribble freely in a 20x20 yard grid with their ball. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slowly with small touches, RED = stop and put foot on ball. Add variations like BLUE = sit on ball, PURPLE = juggle the ball. Keep players moving and reacting quickly. Play for 3-4 minutes, calling colors every 10-15 seconds.',
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
      summary: 'Pairs passing through gates · Focus on technique & body shape',
      detail: 'Start with the pairs passing through a single gate without dribbling to other gates. Focus on the correct technique and body shape - foot position, follow through, etc.',
      points: [
        'Plant non-kicking foot side-by-side with ball',
        'Turn knee and toes 90 degrees, point toe up',
        'Contact with solid flat side of heel only',
        'Push through ball with exaggerated follow-through'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small sided possession · Cycle of possession focus',
      detail: '3v1 possession game focusing on the cycle of possession: get open, good first touch, escape pressure, accurate pass.',
      points: [
        'Pop away to create time and space',
        'Soft, short first touch turning away from pressure',
        'Escape pressure by dribbling to space',
        'Pass to feet - ground passes only'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '3+1v1 passing support · Movement after pass',
      detail: '3+1v1 Pass And Support exercise emphasizing passing and supporting movement.',
      points: [
        'After passing move to space for passing options',
        'Open body to face field of play',
        'Pass to player with most time and space',
        'Never allow 1 touch play at this stage'
      ],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game with extra players · Start 2v2 then add support',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: [
        'Take what defenders give you',
        'Make run when ball carrier takes prep touch',
        'Pass when runner starts run',
        'Always be aware of defensive options'
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
      summary: 'Technical warmup · Multiple areas for active touches',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on passing and receiving technique.',
      points: [
        'Toes up when using inside of foot',
        'Toe down when using outside of foot',
        'Don\'t jab kicking foot down after pass',
        'Swing kicking leg up through the ball'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Small sided possession · Cycle of possession focus',
      detail: '3v1 possession game focusing on the cycle of possession: get open, good first touch, escape pressure, accurate pass.',
      points: [
        'Pop away to create time and space',
        'Soft, short first touch turning away from pressure',
        'Escape pressure by dribbling to space',
        'Pass to feet - ground passes only'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target players · Passing options & support',
      detail: '2v2 game with 2 target players providing additional passing options and support.',
      points: [
        'Use target players to maintain possession',
        'Create passing lanes to targets',
        'Move after passing to support',
        'Pass meets runner\'s feet when passing to space'
      ],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game with extra players · Start 2v2 then add support',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: [
        'Take what defenders give you',
        'Make run when ball carrier takes prep touch',
        'Pass when runner starts run',
        'Always be aware of defensive options'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

