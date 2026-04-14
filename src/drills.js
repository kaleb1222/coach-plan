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
      detail: 'Set up a 20-yard course. Players perform hip openers (leg swings forward/back and side-to-side) for 10 yards, then lateral bounds (jumping sideways from foot to foot) for the next section. Follow with inch worms (walk hands out to plank, walk feet to hands) for 5 reps, then backpedal to the start. Complete 2 rounds with 30-second rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble while avoiding taggers · hold \'injured\' body part',
      detail: 'All players dribble in a 30x20 yard grid. Start with 2-3 taggers (no balls). When tagged, players must hold the ball and place one hand on the body part where they were tagged (shoulder, knee, etc.) while continuing to dribble with their feet only. Tagged players can be \'healed\' by other players dribbling through their legs. Switch taggers every 2 minutes.',
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
        'Turn knee and toes 90 degrees to the side',
        'Contact with flat side of heel, not big toe',
        'Push through ball with exaggerated follow-through'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small sided possession · Apply passing technique',
      detail: '3v1 Possession Game to practice passing and receiving under pressure.',
      points: [
        'Pop away to create time and space',
        'Soft, short first touch',
        'Turn on first touch every time',
        'Pass to player with most time and space'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: 'Passing with support · Create passing options',
      detail: '3+1v1 Pass And Support exercise to work on creating passing options and supporting teammates.',
      points: [
        'After passing move to space',
        'Give teammates passing options',
        'Face field of play when receiving',
        'Take what defenders give you'
      ],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Team with ball can pass in extra player',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played to two large goals.',
      points: [
        'No one touch play - must take first touch',
        'Cue to run is when player takes prep touch',
        'Pass to feet unless runner is making run',
        'Always be aware of what defenders give you'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Passing and receiving fundamentals',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Passing & Receiving Warmup 2',
      summary: 'Warmup drill · Multiple areas for maximum touches',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on passing and receiving technique.',
      points: [
        'Toes pointing up when using inside of foot',
        'Toe down when using outside of foot',
        'Don\'t jab kicking foot down after pass',
        'Turn body to face field when receiving'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Small sided possession · Apply passing technique',
      detail: '3V1 Possession Game to practice passing and receiving under pressure.',
      points: [
        'Pop away to create time and space',
        'Soft, short first touch',
        'Turn on first touch every time',
        'Pass to player with most time and space'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with target players · Practice passing options',
      detail: '2v2 + 2 Target Players exercise to work on finding passing options and maintaining possession.',
      points: [
        'Use target players to maintain possession',
        'Create time and space with first touch',
        'Pass accurately to feet',
        'Move after passing to support'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 game · Team with ball can pass in extra player',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game played to two large goals.',
      points: [
        'No one touch play - must take first touch',
        'Cue to run is when player takes prep touch',
        'Pass to feet unless runner is making run',
        'Always be aware of what defenders give you'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

