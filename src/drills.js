// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Mar 30';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Lateral bounds · carioca · hip openers · inch worms',
      detail: 'Set up 20-yard line. Players perform lateral bounds (side-to-side jumps) for 10 yards, then carioca (crossover steps) for 10 yards. Next, hip openers (leg swings forward/back and side-to-side) for 30 seconds each leg. Finish with inch worms - hands walk forward to plank, then feet walk up to hands. Complete 2 rounds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in grid · green/yellow/red commands',
      detail: 'Players dribble freely in 20x20 yard grid with their ball. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slow with close touches, RED = stop ball with foot and freeze. Add variations: PURPLE = switch feet rapidly, BLUE = turn around, ORANGE = sit on ball. Keep players moving and listening for 3-4 minutes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling fundamentals · skill moves',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse moves in open area',
      summary: 'Practice all skill moves · 15 minutes',
      detail: 'Rehearse each of the moves in an open area (see video links) - 15 minutes. Focus on side-step, scissors, step-over, hook turn, drag-back, pull-push, and pull-cut.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Dribbling to beat defender · end line scoring',
      detail: '1v1 End Line Game - 15 minutes. Players pass to start, then play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line.',
      points: ['Accurate pass to the feet', 'Good first touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat multiple defenders · sequential 1v1',
      detail: 'Dribbling Gauntlet - 20 minutes. Attacker dribbles through three sections, beating each defender to score by dribbling past the end line.',
      points: ['Dribble with shoelaces', 'Make your move early', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Small-sided game · extra player rule',
      detail: '2V2 Game With Large Goals - 20 minutes. The team with the ball can have an extra player (pass a teammate in).',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling fundamentals · skill moves',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse moves in open area',
      summary: 'Practice all skill moves · 15 minutes',
      detail: 'Rehearse each of the moves in an open area (see video links) - 15 minutes. Focus on side-step, scissors, step-over, hook turn, drag-back, pull-push, and pull-cut.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Dribbling to beat defender · end line scoring',
      detail: '1v1 End Line Game - 15 minutes. Players pass to start, then play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line.',
      points: ['Accurate pass to the feet', 'Good first touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat multiple defenders · sequential 1v1',
      detail: 'Dribbling Gauntlet - 20 minutes. Attacker dribbles through three sections, beating each defender to score by dribbling past the end line.',
      points: ['Dribble with shoelaces', 'Make your move early', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game (use poles for goals)',
      summary: 'Small-sided game · team vs team',
      detail: '2V2 Game (use poles to make the goals) - 30 minutes. For this exercise your team should go against one of the other teams.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

