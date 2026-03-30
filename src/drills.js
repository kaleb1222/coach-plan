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
      summary: 'Carioca · lateral bounds · hip openers · inch worms',
      detail: 'Set up two cones 20 yards apart. Players perform carioca (side-stepping with crossover steps) to first cone, lateral bounds (jumping side to side on one foot then the other) back to start, hip openers (walking with high knee pulls across body) to cone, then inch worms (walk hands forward to plank, walk feet to hands) back to start. Complete 2 rounds with 30-second rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in grid · respond to color commands',
      detail: 'All players dribble their ball freely in a 20x20 yard grid. Coach calls out colors: GREEN = dribble fast, YELLOW = slow dribbling, RED = stop with foot on ball, BLUE = pick up ball and run. Players must react quickly to commands. Add variations like specific body parts to stop the ball or different dribbling moves for each color.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling - Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back',
      detail: 'Open area or 20x20 yard area. Coach demonstrates each move, players repeat it 10 times. Focus on hook turn, drag-back, pull-push, and pull-cut. Full circle (360 degrees), side step, scissors, step-overs, Cruyff, twist, pull-push, pull-cut, hook turn, drag back, Maradona, sole delay.',
      points: ['Take small soft touches with shoelaces', 'Keep toe pointed down', 'Quick feet and small steps', 'Make defender react to you', 'Change direction and speed to escape pressure'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · score by dribbling past end line',
      detail: '10x20 yard area. Players split into two groups at opposite corners. Blue player passes to red player in center. Play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by getting ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short)', 'Start fakes immediately', 'Don\'t wait for defender to close down', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · beat three defenders in sequence',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by passing end line, must beat each defender. Defenders start at back line of their square, cannot leave their square. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can have extra player · pass teammate in',
      detail: '2v2 game with large goals. Special rule: the team with the ball can have an extra player (pass a teammate in). Focus on dribbling to create time and space, early passing, and quick transitions.',
      points: ['Dribble diagonally to create time and space', 'Pass early when possible', 'Quick transitions to defense and offense', 'Look for give-and-gos and overlaps', 'Take what the defender gives you'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling - Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back',
      detail: 'Open area or 20x20 yard area. Coach demonstrates each move, players repeat it 10 times. Focus on hook turn, drag-back, pull-push, and pull-cut. Full circle (360 degrees), side step, scissors, step-overs, Cruyff, twist, pull-push, pull-cut, hook turn, drag back, Maradona, sole delay.',
      points: ['Take small soft touches with shoelaces', 'Keep toe pointed down', 'Quick feet and small steps', 'Make defender react to you', 'Change direction and speed to escape pressure'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · score by dribbling past end line',
      detail: '10x20 yard area. Players split into two groups at opposite corners. Blue player passes to red player in center. Play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by getting ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short)', 'Start fakes immediately', 'Don\'t wait for defender to close down', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · beat three defenders in sequence',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by passing end line, must beat each defender. Defenders start at back line of their square, cannot leave their square. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'wt4',
      name: '2V2 Game (Poles for Goals)',
      summary: 'Use poles for goals · team goes against another team',
      detail: '2v2 game using poles to make goals. 30 minutes duration. For this exercise your team should go against one of the other teams. Focus on dribbling moves in game situation.',
      points: ['Dribble diagonally to create time and space', 'Pass early when possible', 'Quick transitions to defense and offense', 'Look for give-and-gos and overlaps', 'Use moves learned in practice'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

