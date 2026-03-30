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
      detail: 'Set up a 20-yard line. Bear crawl 10 yards, then inch worms back. Next, lateral bounds sideways for 15 yards, then backpedal to start. Focus on controlled movements and proper form. Complete 2 rounds with 30-second rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag',
      summary: 'Dribble with ball · tagged players become patients',
      detail: 'All players dribble in 30x20 yard area. 2-3 players are doctors (no ball), rest have balls. When a doctor tags a dribbler, they become a patient and must sit down with their ball. Other dribblers can heal patients by gently touching them. Patients then rejoin the game. Switch doctors every 90 seconds.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling Microcycle 2: Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves in Open Area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Rehearse each of the moves in an open area. Focus on hook turn, drag-back, pull-push, and pull-cut. See video links provided. Individual ball skills in 20x20 yard area or open area, no need to use a line of cones. Coach demonstrates each move, players repeat it 10 times.',
      points: ['Use correct technique with shoe laces', 'Take small soft touches', 'Point toe straight down', 'Quick feet and small steps'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · skipping · high knees · carioca',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · dribble past end line · good first touch',
      detail: '10x20 yard area. Players in corners, one group with balls, one without. Blue player passes to red player, they play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by getting ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Don\'t wait for defender to close down'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · dribble through sections · score past end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders start at back line of their squares, cannot leave their squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling Microcycle 2: Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves in Open Area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Rehearse each of the moves in an open area. Focus on hook turn, drag-back, pull-push, and pull-cut. See video links provided. Individual ball skills in 20x20 yard area or open area, no need to use a line of cones. Coach demonstrates each move, players repeat it 10 times.',
      points: ['Use correct technique with shoe laces', 'Take small soft touches', 'Point toe straight down', 'Quick feet and small steps'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · skipping · high knees · carioca',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · dribble past end line · good first touch',
      detail: '10x20 yard area. Players in corners, one group with balls, one without. Blue player passes to red player, they play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by getting ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Don\'t wait for defender to close down'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · dribble through sections · score past end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders start at back line of their squares, cannot leave their squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

