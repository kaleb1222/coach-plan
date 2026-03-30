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
      summary: 'Hip openers · lateral bounds · inch worms · carioca',
      detail: 'Set up 20-yard line. Players perform each movement across: Hip openers (leg swings forward/back and side to side), lateral bounds (explosive side jumps landing on one foot), inch worms (walk hands out to plank, walk feet to hands), carioca (side steps crossing feet). Rest 30 seconds between exercises. Focus on controlled movements and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Pac-Man Dribbling',
      summary: 'Dribble on lines · avoid ghosts · collect power pellets',
      detail: 'Create grid with cones marking "paths" like Pac-Man maze. All players dribble balls along the lines. 2-3 coaches are "ghosts" trying to tag players (no tackling balls). Place small cones as "power pellets" - when collected, that player becomes invincible for 10 seconds and can chase ghosts. Ghosts must retreat to center when tagged. Rotate ghost roles every 2 minutes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling · Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice skill moves · side-step · scissors · step-over · hook turn',
      detail: 'Rehearse each of the moves in an open area - side-step, scissors, step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use video links for demonstration. 15 minutes.',
      points: [],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defender · dribble past end line · escape pressure',
      detail: '1v1 battles in 10x20 yard area. Player with ball scores by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds. Focus on using skill moves to beat defenders. 15 minutes.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat multiple defenders · progress through sections',
      detail: '10x36 yard area divided into three sections with three defenders. Attackers must beat each defender in their respective squares to score by dribbling past the end line. Defenders win by stopping ball on front line of their square. 20 minutes.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Small-sided game · team with ball gets extra player',
      detail: '2v2 game with large goals. Special rule: The team with the ball can have an extra player (pass a teammate in). Focus on combining dribbling skills with passing and teamwork. 20 minutes.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling · Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice skill moves · side-step · scissors · step-over · hook turn',
      detail: 'Rehearse each of the moves in an open area - side-step, scissors, step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use video links for demonstration. 15 minutes.',
      points: [],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defender · dribble past end line · escape pressure',
      detail: '1v1 battles in 10x20 yard area. Player with ball scores by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds. Focus on using skill moves to beat defenders. 15 minutes.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat multiple defenders · progress through sections',
      detail: '10x36 yard area divided into three sections with three defenders. Attackers must beat each defender in their respective squares to score by dribbling past the end line. Defenders win by stopping ball on front line of their square. 20 minutes.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Small-sided game · use poles for goals · vs other teams',
      detail: '2v2 game using poles to make the goals. Teams should go against one of the other teams. Focus on applying dribbling skills in game context with passing and combination play. 30 minutes.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

