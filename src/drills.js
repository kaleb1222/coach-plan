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
      summary: 'Hip openers · lateral bounds · bear crawls',
      detail: 'Set up in a line. First, perform 10 hip openers each leg (lift knee to chest, open to side, step forward). Next, do 8 lateral bounds each direction (jump sideways, land on one foot, absorb). Finish with bear crawls for 15 yards (hands and feet only, keep core tight). Rest 30 seconds between exercises. Complete 2 rounds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble around grid · follow color commands',
      detail: 'Each player with a ball in 20x20 yard grid. Green light = dribble fast anywhere. Yellow light = dribble slowly in place. Red light = stop ball with sole of foot and freeze. Coach calls colors randomly. Add fun variations: Blue = dribble with weak foot only, Purple = do a turn or trick. Keep players moving and listening for 4-5 minutes.',
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
        'Turn knee and toes 90 degrees to side, toe up',
        'Contact with flat side of heel, not big toe',
        'Push through ball with exaggerated follow-through'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small sided possession · Keep the ball',
      detail: '3v1 Possession Game focusing on maintaining possession through proper passing and receiving.',
      points: [
        'Pop away to create time and space',
        'Soft, short first touch turning away from pressure',
        'Pass to player with most time and space',
        'Pass to feet, sharp ground passes only'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '3+1 vs 1 · Passing with numerical advantage',
      detail: '3+1v1 Pass And Support exercise developing passing and support play with numerical advantage.',
      points: [
        'After passing move to space for passing options',
        'Open body to face field and teammates',
        'Take what defenders give you',
        'Never allow 1 touch play at this stage'
      ],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Team with ball adds extra player',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: [
        'Cycle of possession: pop away, first touch, escape pressure, accurate pass',
        'Run comes first, then pass to meet the feet',
        'Pass so ball meets runner\'s feet',
        'Emphasize technical points throughout'
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
        'Toes pointing up when using inside of foot',
        'Toe down when using outside of foot',
        'Turn on first touch every time',
        'Start coaching points in warmup, carry throughout'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Small sided possession · Maintain possession',
      detail: '3V1 Possession Game focusing on maintaining possession through proper passing and receiving.',
      points: [
        'Four stages of possession cycle',
        'Everyone off ball pops away when ball moves',
        'Escape pressure: touch to side, skill move, turn away, sole delay',
        'Pass to player with most time and space'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with targets · Support and combination play',
      detail: '2v2 + 2 Target Players exercise developing support play and combination passing with target players.',
      points: [
        'Use target players to maintain possession',
        'Create time and space through movement',
        'Pass accurately to feet',
        'Move after passing to create options'
      ],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Team with ball adds extra player',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: [
        'Apply all technical and tactical points',
        'Awareness of defensive options',
        'Cue to run: prep touch and look up',
        'Cue to pass: when runner starts run'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

