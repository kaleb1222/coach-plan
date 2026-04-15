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
      detail: 'Set up 20-yard line. Hip openers: face sideways, lift knee across body and step out wide (10 each leg). Lateral bounds: explosive side-to-side jumps, landing softly (10 each direction). Inch worms: walk hands out to plank, walk feet to hands, repeat down the line. Focus on controlled movements and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Treasure Island',
      summary: 'Dribble around islands · collect treasure cones',
      detail: 'Set up 30x20 yard area with cones as \'islands\' scattered throughout. Place small cones (treasure) around each island. Players dribble around collecting treasure without touching the islands. When all treasure is collected from an island, that island sinks (remove it). Last island standing wins! Emphasize close control and awareness.',
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
      summary: 'Pairs passing through gates · Focus on technique & body shape',
      detail: 'Start with the pairs passing through a single gate without dribbling to other gates. Focus on the correct technique and body shape - foot position, follow through, etc.',
      points: ['Plant non-kicking foot side-by-side with ball', 'Turn knee and toes of kicking foot to side at 90 degrees', 'Point toe up', 'Make contact with solid flat side of heel', 'Push through ball with exaggerated follow-through'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: '3v1 possession · Focus on passing & receiving fundamentals',
      detail: '3v1 Possession Game focusing on the cycle of possession and passing/receiving technique.',
      points: ['Pop away to create time and space', 'Soft, short first touch', 'Turn on first touch every time', 'Accurate pass to feet', 'Pass to player with most time and space'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '3+1v1 · Pass and support with numerical advantage',
      detail: '3+1v1 Pass And Support exercise focusing on supporting the player with the ball.',
      points: ['Get open - pop away from defender', 'Good first touch turning away from pressure', 'After passing move to space to give options', 'Pass to player with most time and space'],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Team with ball can pass in extra player',
      detail: '2v2+1+1. Game 2 Large Goals - Start 2v2 and the team with the ball can pass in an extra player.',
      points: ['No one-touch play allowed', 'Focus on cycle of possession', 'Take what defenders give you', 'Pass to feet unless runner is making a run'],
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
      summary: 'Passing & receiving warmup · Set up multiple areas',
      detail: 'Passing & Receiving Warmup 2 - set up two or more areas so all players get lots of touches, no waiting in line.',
      points: ['Plant non-kicking foot side-by-side with ball', 'Turn knee and toes at 90 degrees, toe up', 'Soft, short first touch', 'Turn on first touch every time', 'Push through ball with follow-through'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: '3v1 possession · Focus on passing & receiving cycle',
      detail: '3V1 Possession Game focusing on the cycle of possession and passing/receiving technique.',
      points: ['Pop away to create time and space', 'Good first touch turning away from pressure', 'Escape pressure by dribbling to space', 'Accurate pass to feet', 'Pass to player with most time and space'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target players · Focus on finding support',
      detail: '2v2 + 2 Target Players exercise focusing on finding and using target players for support.',
      points: ['Before receiving, pop away and open body to face field', 'Turn on first touch to create time and space', 'After passing move to space to give options', 'Use target players to maintain possession'],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Team with ball can pass in extra player',
      detail: '2v2+1+1. Game 2 Large Goals - Start 2v2 and the team with the ball can pass in an extra player.',
      points: ['No one-touch play allowed', 'Cue to run is when player takes preparation touch and looks up', 'Cue to pass is when runner starts run', 'Always be aware what options defenders give you'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

