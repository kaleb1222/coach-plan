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
      detail: 'Start with light jog for 2 minutes. Then perform: Hip openers (10 each leg) - step out wide, lift knee to chest, open hip to side. Lateral bounds (10 each direction) - explosive side-to-side jumps landing on one foot. Inch worms (8 reps) - walk hands out to plank, walk feet to hands. Finish with backpedal run for 30 seconds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Green = dribble fast · Yellow = slow · Red = freeze with ball',
      detail: 'Each player with a ball in 20x20 yard grid. Coach calls out colors: Green light = dribble fast around the grid, Yellow light = dribble slowly, Red light = stop and put foot on ball. Add variations like \'Flat tire\' (hop on one foot while dribbling) or \'Car wash\' (dribble through legs). Play for 5-6 minutes with quick transitions between commands.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Passing and receiving - cycle of possession',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Pass Through Gates - Pairs',
      summary: 'Pairs passing through gates · focus on technique',
      detail: 'Start with the pairs passing through a single gate without dribbling to other gates. Focus on the correct technique and body shape - foot position, follow through, etc.',
      points: ['Plant non-kicking foot side-by-side with ball', 'Turn knee and toes 90 degrees to side', 'Make contact with solid flat side of heel', 'Push through ball with exaggerated follow-through'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small-sided possession with overload',
      detail: '3v1 Possession Game - focus on keeping possession and making accurate passes to teammates with time and space.',
      points: ['Pop away to create time and space', 'Soft, short first touch', 'Turn on first touch every time', 'Pass to player with most time and space'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '3+1v1 passing with support movement',
      detail: '3+1v1 Pass And Support - focus on passing and supporting movement to maintain possession.',
      points: ['After passing move to space', 'Give teammates passing options', 'Face field of play when receiving', 'Take what defenders give you'],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game with neutral players · large goals',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with two large goals.',
      points: ['Never allow 1 touch play', 'Cue to pass is when runner starts run', 'Pass must be on ground and sharp', 'Always pass to feet'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Passing and receiving - cycle of possession',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Passing & Receiving Warmup 2',
      summary: 'Passing warmup · multiple areas · no waiting',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on passing and receiving technique.',
      points: ['Toes pointing up when using inside of foot', 'Toe down when using outside of foot', 'Don\'t jab kicking foot down', 'Turn body to open up to field'],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Small-sided possession with overload',
      detail: '3V1 Possession Game - focus on keeping possession and making accurate passes to teammates with time and space.',
      points: ['Pop away to create time and space', 'Soft, short first touch', 'Turn on first touch every time', 'Pass to player with most time and space'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target players for support',
      detail: '2v2 + 2 Target Players - small-sided game with additional target players to provide passing options.',
      points: ['Attackers must read what defenders give', 'Pop away before receiving', 'Good first touch creates time and space', 'Accurate pass to feet'],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game with neutral players · large goals',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game with two large goals.',
      points: ['Never allow 1 touch play', 'Cue to pass is when runner starts run', 'Pass must be on ground and sharp', 'Always pass to feet'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

