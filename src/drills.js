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
      summary: 'Carioca · lateral bounds · inch worms · A-skips',
      detail: 'Set up a 20-yard line. Players perform carioca (side shuffles crossing feet) down and back. Next, lateral bounds - explosive jumps side to side down the line. Then inch worms - walk hands out to plank, walk feet to hands. Finish with A-skips - high knee marching with opposite arm drive. Complete 2 rounds with 30 seconds rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · follow color commands · keep control',
      detail: 'Each player with a ball in 20x20 grid. Players dribble freely while coach calls out colors: GREEN = dribble normally, YELLOW = slow dribbling with small touches, RED = stop and put foot on ball, BLUE = dribble backwards, PURPLE = sit on ball. Players must react quickly while maintaining ball control. Play for 3-4 minutes, mix up commands to keep players alert.',
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
      points: ['Plant non-kicking foot side-by-side with ball', 'Turn knee and toes 90 degrees to side', 'Contact with solid flat side of heel', 'Push through ball with follow-through'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: '3v1 possession · Cycle of possession focus',
      detail: '3v1 Possession Game focusing on the cycle of possession: get open, good first touch, escape pressure, accurate pass.',
      points: ['Pop away to create time and space', 'Soft, short 1st touch', 'Turn on 1st touch every time', 'Pass to player with most time and space'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '3+1v1 passing · Support and movement',
      detail: '3+1v1 Pass And Support exercise focusing on passing accuracy and player movement to support possession.',
      points: ['After passing move to space', 'Face the field when receiving', 'Pass to feet unless runner makes cue', 'Take what defenders give you'],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Extra player support',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: ['No 1 touch play allowed', 'Emphasize cycle of possession', 'Cue to run when ball carrier takes prep touch', 'Attackers read what defenders give'],
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
      summary: 'Passing warmup · Multiple areas setup',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on passing and receiving technique.',
      points: ['Toes pointing up when using inside of foot', 'Toe down when using outside of foot', 'Don\'t jab foot down when passing', 'Open body to face field when receiving'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: '3v1 possession · Technical focus',
      detail: '3V1 Possession Game with emphasis on technical execution of passing and receiving within the cycle of possession.',
      points: ['Get open - pop away from defender', 'Good first touch to create space', 'Escape pressure by dribbling to space', 'Accurate pass to feet'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with targets · Support play',
      detail: '2v2 + 2 Target Players focusing on passing to target players and maintaining possession through proper technique.',
      points: ['Pass must be on ground and sharp', 'No slow balls', 'Turn body to open up before receiving', 'Move to space after passing'],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Extra player support',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with 2 large goals.',
      points: ['Start coaching points in warmup', 'Carry points throughout progression', 'Ball meets feet when passing to runner', 'Always be aware of defender options'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

