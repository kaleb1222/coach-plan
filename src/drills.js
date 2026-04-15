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
      detail: 'Set up 20-yard line. Players perform bear crawls for 10 yards (hands and feet only, knees off ground), then lateral bounds side to side for 10 yards (big explosive jumps), followed by Frankenstein walks back (straight leg kicks while walking forward, reaching for toes). Complete 2-3 rounds with light jogging recovery between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Green = dribble fast · yellow = slow · red = freeze',
      detail: 'All players dribble their ball in a 20x20 yard grid. Coach calls out traffic signals: GREEN light = dribble as fast as possible, YELLOW light = slow dribbling with close control, RED light = stop and put foot on ball. Add fun variations like "construction zone" (dribble backwards) or "school zone" (dribble with weak foot only). Play for 3-4 minutes.',
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
        'Turn knee and toes of kicking foot to the side at 90 degrees',
        'Make contact with solid flat side of the heel',
        'Push through the ball with exaggerated follow-through'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Three attackers vs one defender · Keep possession',
      detail: '3v1 Possession Game focusing on passing and receiving under pressure.',
      points: [
        'Pop away from defender to create time and space',
        'Soft, short first touch turning away from pressure',
        'Accurate pass to feet on the ground',
        'Never allow 1 touch play at this stage'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: 'Three plus one vs one · Passing with support',
      detail: '3+1v1 Pass And Support drill developing passing options and movement off the ball.',
      points: [
        'After passing move to space to give teammates options',
        'Pop away and turn body to open up to field',
        'Take what the defenders give you',
        'Pass to player with most time and space'
      ],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game with extra players · Two large goals',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played to two large goals.',
      points: [
        'Team with ball can bring in extra player',
        'Emphasize cycle of possession',
        'Run first, then pass - cue to pass is when runner starts',
        'Always pass to feet unless runner is making a run'
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
      summary: 'Warmup with passing and receiving · Multiple areas',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on proper passing and receiving technique.',
      points: [
        'Toes pointing up when using inside of foot',
        'Toe down when using outside of foot',
        'Turn on first touch every time',
        'Start coaching points here and carry throughout progression'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Three attackers vs one defender · Keep possession',
      detail: '3V1 Possession Game focusing on passing and receiving under pressure.',
      points: [
        'Pop away from defender to create time and space',
        'Soft, short first touch turning away from pressure',
        'Accurate pass to feet on the ground',
        'Never allow 1 touch play at this stage'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target players · Passing options',
      detail: '2v2 + 2 Target Players drill providing additional passing options and support.',
      points: [
        'Use target players as passing options',
        'Before receiving pop away and open body to field',
        'Escape pressure by dribbling to space',
        'Pass to player with most time and space'
      ],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game with extra players · Two large goals',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played to two large goals.',
      points: [
        'Team with ball can bring in extra player',
        'Emphasize cycle of possession',
        'Run first, then pass - cue to pass is when runner starts',
        'Always pass to feet unless runner is making a run'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

