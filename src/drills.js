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
      summary: 'Bear crawls · inch worms · lateral bounds · carioca',
      detail: 'Set up 20-yard line. Players perform bear crawls for 10 yards (hands and feet only), then inch worms for 5 yards (walk hands forward to plank, walk feet to hands). Return with lateral bounds (side-to-side jumps) for 10 yards, then carioca (crossover steps) for final 10 yards. Rest 30 seconds, repeat 2-3 times.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in grid · follow color commands',
      detail: 'Set up 20x20 yard grid. All players dribble freely inside. Coach calls colors: GREEN = dribble fast, YELLOW = dribble slow with small touches, RED = stop and put foot on ball. Add variations: BLUE = dribble backwards, PURPLE = switch feet every touch. Play for 3-4 minutes with quick color changes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental Skills · Dribbling to beat defenders',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors, step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. See video links for proper technique.',
      points: ['Master mechanics of each move', 'Be able to execute against defenders 9/10 times', 'Use small soft touches with shoelaces', 'Change direction and speed to escape pressure'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Dribbling battles · score by beating the end line',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player, then they play 1v1. Score by dribbling past the opposite end line. Defender can win ball and score at opposite end or force attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · score by reaching end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders each in their square. Attacker must dribble through and beat each defender to score by crossing the end line. Defenders score by winning ball and stopping it on their front line.',
      points: ['Dribble with shoelaces', 'Make moves early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can pass teammate in for extra player',
      detail: '2v2 game with large goals. The team with the ball can have an extra player by passing a teammate in. Focus on quick combinations and taking advantage of numerical superiority.',
      points: ['Pass early when outnumbered', 'Shoot early when opportunity arises', 'Quick transitions', 'Look for give-and-gos and overlaps'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental Skills · Extended game situations',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors, step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. See video links for proper technique.',
      points: ['Master mechanics of each move', 'Be able to execute against defenders 9/10 times', 'Use small soft touches with shoelaces', 'Change direction and speed to escape pressure'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Dribbling battles · score by beating the end line',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player, then they play 1v1. Score by dribbling past the opposite end line. Defender can win ball and score at opposite end or force attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · score by reaching end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders each in their square. Attacker must dribble through and beat each defender to score by crossing the end line. Defenders score by winning ball and stopping it on their front line.',
      points: ['Dribble with shoelaces', 'Make moves early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Use poles for goals · team vs team competition',
      detail: '2v2 game using poles to make goals. Teams should go against one of the other teams for competitive play. Extended 30-minute session for more game-like experience.',
      points: ['Dribble diagonally to create space', 'Pass early when under pressure', 'Quick transitions between attack and defense', 'Take what the defender gives you'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

