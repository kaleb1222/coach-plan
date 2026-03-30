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
      summary: 'Lateral bounds · carioca · hip openers · bear crawls',
      detail: 'Set up 20-yard line. Players perform lateral bounds (side-to-side jumps) for 10 yards, then carioca (crossover steps) back. Next, hip openers (leg swings forward/back, side-to-side) for 30 seconds each leg. Finish with bear crawls across 10 yards - hands and feet only, keep hips low and core engaged.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in grid · follow color commands · freeze on red',
      detail: 'All players dribble in 20x20 yard grid with a ball. Coach calls colors: GREEN = dribble normally, YELLOW = slow dribbling with sole of foot, RED = freeze with foot on ball. Add variations: BLUE = sit on ball, PURPLE = juggle, ORANGE = dribble backwards. Keep head up and avoid collisions.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice moves in open area · 15 minutes',
      detail: 'Rehearse each of the moves in an open area: side-step, scissors, step-over, hook turn, drag-back, pull-push, and pull-cut. Use video links for reference. Focus on proper technique and repetition.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to opposite end line · 15 minutes',
      detail: '10x20 yard area. Players pass to opponent and play 1v1. Score by dribbling past opposite end line. Must use skill moves immediately after receiving pass. Game ends when ball goes out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sections · 20 minutes',
      detail: '10x36 yard area divided into three 10x12 sections. Attacker dribbles through all sections to score. Must beat each defender in their square. Defenders cannot leave their sections.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate', 'Attack spaces behind defender'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can add extra player · 20 minutes',
      detail: '2v2 game with large goals. The team with possession can have an extra player join by passing a teammate in. Focus on quick combinations and shooting.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice moves in open area · 15 minutes',
      detail: 'Rehearse each of the moves in an open area: side-step, scissors, step-over, hook turn, drag-back, pull-push, and pull-cut. Use video links for reference. Focus on proper technique and repetition.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to opposite end line · 15 minutes',
      detail: '10x20 yard area. Players pass to opponent and play 1v1. Score by dribbling past opposite end line. Must use skill moves immediately after receiving pass. Game ends when ball goes out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sections · 20 minutes',
      detail: '10x36 yard area divided into three 10x12 sections. Attacker dribbles through all sections to score. Must beat each defender in their square. Defenders cannot leave their sections.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate', 'Attack spaces behind defender'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game (poles for goals)',
      summary: 'Play against other teams · 30 minutes',
      detail: '2v2 game using poles to make goals. Teams should play against one of the other teams. Focus on applying dribbling skills in game situations.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

