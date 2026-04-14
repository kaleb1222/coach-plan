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
      summary: 'Bear crawls · lateral bounds · Frankenstein walks',
      detail: 'Set up 20-yard line. Players perform bear crawls for 10 yards (hands and feet, no knees), then lateral bounds side-to-side for 10 yards (explosive jumps left and right), then Frankenstein walks back (straight legs, reach for toes). Focus on controlled movements and full range of motion. Repeat 2-3 times.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble around grid · follow color commands',
      detail: 'Players dribble freely in 20x20 grid with their ball. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slow with small touches, RED = stop and put foot on ball. Add variations like PURPLE = juggle, BLUE = dribble with weak foot only. Keep players moving and reacting quickly to commands.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Passing And Receiving - Microcycle 2',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Pass Through Gates - Pairs',
      summary: 'Pairs passing through gates · Focus on technique',
      detail: 'Start with the pairs passing through a single gate without dribbling to other gates. Focus on the correct technique and body shape - foot position, follow through, etc.',
      points: [
        'Plant non-kicking foot side-by-side with ball',
        'Turn knee and toes of kicking foot to the side at 90 degrees',
        'Make contact with solid flat side of heel',
        'Push through ball with exaggerated follow-through'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: '3v1 possession · Keep the ball',
      detail: '3v1 Possession Game focusing on maintaining possession while applying passing and receiving principles.',
      points: [
        'Pop away to create time and space',
        'Soft, short first touch',
        'Turn on first touch every time',
        'Accurate pass to feet'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '3+1v1 · Pass and support movement',
      detail: '3+1v1 Pass And Support exercise focusing on passing combinations and supporting movements.',
      points: [
        'After passing move to space',
        'Give teammates passing options',
        'Take what defenders give you',
        'Pass to player with most time and space'
      ],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Extra player support',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: [
        'No one touch play allowed',
        'Emphasize cycle of possession',
        'Pop away before receiving',
        'Turn body to face field of play'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Passing And Receiving - Microcycle 2',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Passing & Receiving Warmup 2',
      summary: 'Warmup · Multiple areas for touches',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on passing and receiving technique.',
      points: [
        'Toes pointing up when using inside of foot',
        'Toe down when using outside of foot',
        'Don\'t jab kicking foot down on ground',
        'Swing kicking leg up when passing'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: '3v1 possession · Maintain control',
      detail: '3V1 Possession Game focusing on maintaining possession while applying passing and receiving principles.',
      points: [
        'Pop away to create time and space',
        'Good first touch creates time and space',
        'Escape pressure to create passing options',
        'Accurate pass to feet'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 · Target players support',
      detail: '2v2 + 2 Target Players exercise combining possession with target player support.',
      points: [
        'Cue to run when player takes preparation touch',
        'Pass when runner starts the run',
        'Always pass to feet unless runner is moving',
        'Ball meets feet when passing to runner'
      ],
      badge: 'Attack & defend',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Extra player advantage',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: [
        'Attackers must read what defenders give',
        'Take what they give you',
        'Start coaching points in warmup',
        'Carry points throughout progression'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

