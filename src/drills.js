// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Apr 6';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Hip openers · inch worms · lateral bounds',
      detail: 'Set up 20-yard line. Hip openers: walk forward lifting knee to chest, then rotate hip out to side (10 each leg). Inch worms: hands walk out to plank, feet walk to hands (5 reps). Lateral bounds: single-leg side jumps with balance pause (8 each side). Focus on control and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble around grid · follow color commands',
      detail: 'Players dribble freely in 20x20 yard grid with ball. Coach calls colors: Green = fast dribbling, Yellow = slow dribbling, Red = stop with foot on ball. Add fun variations: Blue = dribble backwards, Purple = juggle ball, Orange = switch balls with nearest player. Keep players moving and engaged.',
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
      name: 'Dribble-Skill-Pass',
      summary: 'Focus on side-step · scissors · Iniesta · step-overs',
      detail: 'Several lines with 3 cones each, 10 yards apart. One ball per line. Player dribbles with laces toward middle cone, performs skill move, takes touch to the side, passes to opposite player. Follow pass and run to opposite side. Receiver does good first touch and repeats.',
      points: ['Dribble with laces, toes down, small quick touches', 'Do skill move early - don\'t get too close to cone', 'Take touch straight to side to create space', 'Accurate pass - swing leg toward target', 'Sprint to opposite line'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribble-Skill-Pass.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: '10x10 squares · 3 attackers vs 1 defender',
      detail: '10x10 yard squares. 3 attackers vs 1 defender. Play until attackers or defenders get three points. Attackers score every 5 consecutive passes. Defenders score by dribbling out through designated side.',
      points: ['Take touch to side before passing', 'Pass to feet', 'Third attacker must run to provide option', 'Pass to player with most time and space', 'Turn on 1st touch', 'Use deception'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '15x20 area · minimum 4 passes before long ball',
      detail: '15x20 yard area with buffer zone. 3v1 on one side, 1 target on other. Make minimum 4 passes before playing long ball to target. Defender chases, two attackers support target. Get point for successful pass to target.',
      points: ['Move off ball to provide options', 'Safe angle and maximum distance', 'Don\'t force pass - be patient', 'Make safe passes until safe to pass to target'],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: 'Team with ball can pass extra player in · 30x30 area',
      detail: '30x30 yard area with two large goals. Coach passes ball to center. Attacking team overlaps - far player takes ball, near player overlaps. Team in possession can pass teammate in for 3v2. If defenders win ball they can pass two in for 4v3.',
      points: ['Don\'t wait for defender - pass early', 'Get numbers advantage by passing someone in', 'Priority: 1. shoot; 2. pass; 3. dribble', 'Create width and depth when attacking'],
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
      name: 'Dribble-Skill-Pass',
      summary: 'Focus on side-step · scissors · Iniesta · step-overs',
      detail: 'Several lines with 3 cones each, 10 yards apart. One ball per line. Player dribbles with laces toward middle cone, performs skill move, takes touch to the side, passes to opposite player. Follow pass and run to opposite side. Receiver does good first touch and repeats.',
      points: ['Dribble with laces, toes down, small quick touches', 'Do skill move early - don\'t get too close to cone', 'Take touch straight to side to create space', 'Accurate pass - swing leg toward target', 'Sprint to opposite line'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribble-Skill-Pass.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Passing Game',
      summary: '10x10 squares · 3 attackers vs 1 defender',
      detail: '10x10 yard squares. 3 attackers vs 1 defender. Play until attackers or defenders get three points. Attackers score every 5 consecutive passes. Defenders score by dribbling out through designated side.',
      points: ['Take touch to side before passing', 'Pass to feet', 'Third attacker must run to provide option', 'Pass to player with most time and space', 'Turn on 1st touch', 'Use deception'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: '20x20 area · score by connecting with target players',
      detail: '20x20 yard area. 3 teams of 2 players, one team as target players outside opposite ends. Play 2v2 in middle. Score by passing to target player, receiving back, and passing to opposite target without losing possession. When team scores 3 points, losing team becomes targets.',
      points: ['Escape pressure by dribbling to side', 'Look up and scan field', 'Pass to feet', 'Turn on 1st touch', 'Move off ball to get open', 'Create maximum width', 'Target players move laterally for safe angles'],
      badge: 'Attack & defend',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1. Game 2 Large Goals',
      summary: 'Team with ball can pass extra player in · 30x30 area',
      detail: '30x30 yard area with two large goals. Coach passes ball to center. Attacking team overlaps - far player takes ball, near player overlaps. Team in possession can pass teammate in for 3v2. If defenders win ball they can pass two in for 4v3.',
      points: ['Don\'t wait for defender - pass early', 'Get numbers advantage by passing someone in', 'Priority: 1. shoot; 2. pass; 3. dribble', 'Create width and depth when attacking'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

