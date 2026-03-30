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
      summary: 'Lateral bounds · carioca · hip circles · backpedal',
      detail: 'Set up two cones 15 yards apart. Players start with lateral bounds (jump sideways from foot to foot) to first cone. Then carioca (crossover steps) back to start. Next, hip circles (large leg swings in circles) at starting cone. Finish with backpedal to far cone. Complete 2 rounds with 30-second rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Pac-Man Dribbling',
      summary: 'Dribble on lines · avoid the Pac-Man',
      detail: 'Use penalty box or create 20x20 yard square with cones. All players must dribble only on the lines of the box. One player is Pac-Man without a ball who tries to tag dribblers. Tagged players become Pac-Men. Last player dribbling wins and becomes first Pac-Man for next round.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling fundamental skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back',
      detail: 'Players rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Hook turn: Using the sole of the foot on top of the ball, turn 180 degrees. Pull-push: Fake shot, pull ball backwards with sole, turn body 90 degrees, push ball away with inside of same foot. Pull-cut: Fake shot, pull ball back behind standing leg with sole, cut ball 90 degrees behind standing leg with inside of same foot. Scissors: Take a leap to the side moving foot in front of ball, push ball in opposite direction using outside of other foot.',
      points: [
        'Players must use correct technique when dribbling: small soft touches with shoe laces',
        'Quick feet and small steps to react quickly',
        'Make the defender react to you, not the other way around',
        'It will take time and many practices to master these moves'
      ],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · score by dribbling past opposite end line',
      detail: '10x20 yard area. One group of players with a ball each on one corner, a group of players on the far corner. The players in the front of each line move to the center. Blue player passes to red player. They play 1v1 until the ball goes out of bounds. The player with the ball scores by dribbling with control past the opposite end line. The defender must either win the ball and score by dribbling past the opposite end line, or by forcing the attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'The attacker must start doing fakes immediately',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · beat three defenders · score past end line',
      detail: '10x36 yard area, divided into three 10x12 sections. Three defenders, and a line of attackers. One attacker dribbles through and scores by dribbling past the last end line. On the way the attacker must beat each defender. Defenders must start at the back line of their respective squares. Defenders are not allowed outside their respective squares. Defenders score by winning the ball and stopping the ball dead on the front line of their square.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of the defender\'s reach',
        'Change direction, and accelerate away',
        'Attack the spaces behind the defender with speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2v2 Game With Large Goals',
      summary: 'Team with ball can have extra player · pass teammate in',
      detail: '2v2 game with large goals. The team with the ball can have an extra player (pass a teammate in). Play is continuous until the ball goes out of bounds.',
      points: [
        'Dribble diagonally to create time and space',
        'Pass early and shoot early',
        'Quick transitions to defense and offense',
        'Look to combine with give-and-gos and overlaps'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling fundamental skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back',
      detail: 'Players rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Hook turn: Using the sole of the foot on top of the ball, turn 180 degrees. Pull-push: Fake shot, pull ball backwards with sole, turn body 90 degrees, push ball away with inside of same foot. Pull-cut: Fake shot, pull ball back behind standing leg with sole, cut ball 90 degrees behind standing leg with inside of same foot. Scissors: Take a leap to the side moving foot in front of ball, push ball in opposite direction using outside of other foot.',
      points: [
        'Players must use correct technique when dribbling: small soft touches with shoe laces',
        'Quick feet and small steps to react quickly',
        'Make the defender react to you, not the other way around',
        'It will take time and many practices to master these moves'
      ],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · score by dribbling past opposite end line',
      detail: '10x20 yard area. One group of players with a ball each on one corner, a group of players on the far corner. The players in the front of each line move to the center. Blue player passes to red player. They play 1v1 until the ball goes out of bounds. The player with the ball scores by dribbling with control past the opposite end line. The defender must either win the ball and score by dribbling past the opposite end line, or by forcing the attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'The attacker must start doing fakes immediately',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · beat three defenders · score past end line',
      detail: '10x36 yard area, divided into three 10x12 sections. Three defenders, and a line of attackers. One attacker dribbles through and scores by dribbling past the last end line. On the way the attacker must beat each defender. Defenders must start at the back line of their respective squares. Defenders are not allowed outside their respective squares. Defenders score by winning the ball and stopping the ball dead on the front line of their square.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of the defender\'s reach',
        'Change direction, and accelerate away',
        'Attack the spaces behind the defender with speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2v2 Game (use poles to make the goals)',
      summary: 'Your team goes against one of the other teams',
      detail: '2v2 game using poles to make the goals. For this exercise your team should go against one of the other teams. Play is continuous until the ball goes out of bounds.',
      points: [
        'Dribble diagonally to create time and space',
        'Pass early and shoot early',
        'Quick transitions to defense and offense',
        'Look to combine with give-and-gos and overlaps'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

