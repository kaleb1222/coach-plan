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
      summary: 'Lateral bounds · carioca · hip openers · A-skips',
      detail: 'Set up 20-yard line. Players start with lateral bounds (5 each direction), then carioca across the line, followed by hip openers (leg swings), and finish with A-skips back to start. Focus on controlled movements and proper form. 2-3 rounds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble on command · green/yellow/red signals',
      detail: 'Each player with a ball in 20x20 grid. Green light = dribble fast, Yellow light = slow dribbling with ball control, Red light = stop with foot on ball. Coach calls out colors randomly. Add challenges like specific touches or body parts to stop the ball.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental Skills & Skill Moves',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice skill moves · Side-step · Scissors · Step-over · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Players rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use video demonstrations for proper technique.',
      points: ['Master mechanics of each move', 'Execute against defenders', 'Time moves correctly', 'Change direction and speed', 'Beat defender 9 out of 10 times'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Carioca · Lunges',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · Pass to start · Score by dribbling past end line',
      detail: '10x20 yard area. Players in front of each line move to center. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch (soft, short)', 'Start faking immediately', 'Don\'t wait for defender to close down', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · Beat three defenders · Score past end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past last end line. Must beat each defender. Defenders start at back line of their squares, cannot leave their squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental Skills & Skill Moves',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice skill moves · Side-step · Scissors · Step-over · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Players rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use video demonstrations for proper technique.',
      points: ['Master mechanics of each move', 'Execute against defenders', 'Time moves correctly', 'Change direction and speed', 'Beat defender 9 out of 10 times'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Carioca · Lunges',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · Pass to start · Score by dribbling past end line',
      detail: '10x20 yard area. Players in front of each line move to center. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch (soft, short)', 'Start faking immediately', 'Don\'t wait for defender to close down', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · Beat three defenders · Score past end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past last end line. Must beat each defender. Defenders start at back line of their squares, cannot leave their squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

