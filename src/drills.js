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
      summary: 'Bear crawls · inch worms · lateral bounds · backpedal',
      detail: 'Set up 20-yard line. Bear crawls forward 10 yards, inch worms back 10 yards. Then lateral bounds right 10 yards, backpedal left 10 yards. Complete 2-3 rounds with 30 seconds rest between exercises. Focus on controlled movements and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag',
      summary: 'Dribble with ball · tagged players hold injury spot',
      detail: 'All players dribble in 30x20 yard area. 2-3 players are "doctors" without balls who chase others. When tagged, players must hold the spot where they were tagged with one hand while continuing to dribble. If tagged again, they hold both spots and become "patients" who can only walk. Doctors can "heal" patients by high-fiving them. Switch doctors every 2 minutes.',
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
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Open area rehearsal of skill moves: side-step, scissors, step-over, and add four new moves: hook turn, drag-back, pull-push, and pull-cut. Coach demonstrates each move, players repeat 10 times. Focus on proper technique with small soft touches using shoelaces.',
      points: ['Demonstrate each move correctly', 'Players repeat 10 times each', 'Master mechanics for game situations', 'Use correct technique - small soft touches with shoelaces'],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defenders · dribble past end line to score · accurate passing',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player at center, then play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by stealing ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start fakes immediately', 'Approach with control doing fakes', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through sections · score past end line',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. One attacker dribbles through and scores by dribbling past last end line. Must beat each defender in their respective squares. Defenders start at back line of their square, cannot leave their square. Defenders score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces to take on defenders', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can pass teammate in · extra player advantage',
      detail: '2v2 game with large goals. The team with the ball can have an extra player (pass a teammate in) for numerical advantage. Focus on quick combinations, dribbling diagonally to create time and space, and early passing and shooting.',
      points: ['Team with ball gets extra player', 'Dribble diagonally to create space', 'Pass early and shoot early', 'Look for give-&-gos and overlaps'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Open area rehearsal of skill moves: side-step, scissors, step-over, and add four new moves: hook turn, drag-back, pull-push, and pull-cut. Coach demonstrates each move, players repeat 10 times. Focus on proper technique with small soft touches using shoelaces.',
      points: ['Demonstrate each move correctly', 'Players repeat 10 times each', 'Master mechanics for game situations', 'Use correct technique - small soft touches with shoelaces'],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defenders · dribble past end line to score · accurate passing',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player at center, then play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by stealing ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start fakes immediately', 'Approach with control doing fakes', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through sections · score past end line',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. One attacker dribbles through and scores by dribbling past last end line. Must beat each defender in their respective squares. Defenders start at back line of their square, cannot leave their square. Defenders score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces to take on defenders', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Use poles for goals · team vs team · 30 minutes',
      detail: '2v2 game using poles to make goals. Teams play against each other for 30 minutes. Focus on dribbling to escape pressure, creating time and space, accurate passing, and quick transitions between attack and defense.',
      points: ['Use poles to make goals', 'Team should play against other teams', 'Focus on escaping pressure', 'Create time and space to pass or shoot'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

