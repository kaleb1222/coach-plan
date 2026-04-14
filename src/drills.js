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
      summary: 'Lateral bounds · hip circles · inch worms · backpedal',
      detail: 'Set up 20-yard line. Players start with lateral bounds (10 each direction), then hip circles (5 forward, 5 backward each leg), inch worms across 10 yards, and backpedal to start. Focus on controlled movements and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble around · when music stops find any ball',
      detail: 'Place one fewer ball than players in center of grid. Players dribble around the area while music plays. When music stops, players must quickly find any ball and stand on it. Player without a ball does 5 juggling attempts before next round. Remove one more ball each round.',
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
      summary: 'Pairs passing through gates · Focus technique & body shape',
      detail: 'Start with the pairs passing through a single gate without dribbling to other gates. Focus on the correct technique and body shape - foot position, follow through, etc.',
      points: [
        'Plant non-kicking foot side-by-side with ball',
        'Turn knee and toes of kicking foot 90 degrees to side',
        'Contact ball with solid flat side of heel',
        'Push through ball with exaggerated follow-through'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Pass-Through-Gates-Pairs.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Small-sided possession · Apply passing under pressure',
      detail: '3v1 Possession Game to work on keeping the ball under pressure while focusing on passing and receiving technique.',
      points: [
        'Pop away to create time and space',
        'Soft, short first touch',
        'Turn on first touch every time',
        'Accurate pass to player with most time and space'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: 'Passing with support · Creating passing options',
      detail: '3+1v1 Pass And Support exercise to work on creating and using passing options while maintaining possession.',
      points: [
        'After passing, move to space to give teammates options',
        'Before receiving, open body to face field of play',
        'Take what defenders give you',
        'Pass to feet unless runner makes cued run'
      ],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 with extra players · Game application of skills',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Game situation to apply passing and receiving skills.',
      points: [
        'Never allow 1 touch play at this stage',
        'Must make soft, short first touch to keep possession',
        'Emphasize cycle of possession throughout',
        'Pass to player with most time and space'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Passing and receiving under pressure',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Passing & Receiving Warmup 2',
      summary: 'Technical warmup · Multiple areas for maximum touches',
      detail: 'Set up two or more areas so all players get lots of touches, no waiting in line. Focus on passing and receiving technique.',
      points: [
        'Toes pointing up when using inside of foot',
        'Toe pointing down when using outside of foot',
        'Don\'t jab kicking foot down, swing leg up',
        'Control direction by swinging kicking leg toward target'
      ],
      badge: 'Passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Passing-Receiving-Warmup-2.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Possession Game',
      summary: 'Possession under pressure · Technical application',
      detail: '3V1 Possession Game to continue working on passing and receiving under defensive pressure.',
      points: [
        'Pop away to create time and space',
        'Good first touch to turn away from pressure',
        'Escape pressure by dribbling to space',
        'Accurate pass to feet'
      ],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '2v2 with targets · Passing options & support',
      detail: '2v2 + 2 Target Players to work on finding and using target players while maintaining possession.',
      points: [
        'Cue to run is when player takes preparation touch and looks up',
        'Cue to pass is when runner starts the run',
        'Pass so ball meets runner\'s feet',
        'Always be aware what options defenders give you'
      ],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: '2v2 with extra players · Game situation practice',
      detail: 'Start 2v2 and the team with the ball can pass in an extra player. Apply all passing and receiving skills in game context.',
      points: [
        'Start coaching points in warmup, carry through progression',
        'Emphasize four stages of cycle of possession',
        'No 1 touch play - must take soft first touch',
        'Pass must be on ground and sharp'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

