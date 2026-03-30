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
      summary: 'Frankenstein walks · lateral bounds · inch worms',
      detail: 'Set up 20-yard line. Players perform Frankenstein walks (straight leg swings forward while walking), then lateral bounds (explosive side-to-side jumps), followed by inch worms (walk hands out to plank, walk feet to hands). Complete 2 rounds with 30-second rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when it stops · last one wins',
      detail: 'Each player starts with a ball in 20x20 grid. Play music while players dribble freely around the area. When music stops, players must freeze with ball under control using sole of foot. Last player to freeze is out. Remove one ball each round until one winner remains.',
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
      name: 'Rehearse Skill Moves',
      summary: 'Practice basic moves in open area · side-step · scissors · step-over · new moves',
      detail: 'Rehearse each of the moves in an open area (see video links below) - 15 minutes. Practice side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: '1v1 battles · score by dribbling past end line · good first touch',
      detail: '1v1 End Line Game - 15 minutes. Players battle 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender must win ball and score or force attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through 3 defenders · beat each in their square · score at end',
      detail: 'Dribbling Gauntlet - 20 minutes. 10x36 yard area divided into three sections with three defenders. Attackers must beat each defender and score by dribbling past last end line. Defenders start at back line and cannot leave their squares.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: '2v2 with extra player rule · team with ball can pass teammate in',
      detail: '2V2 Game With Large Goals - 20 minutes. The team with the ball can have an extra player (pass a teammate in). Play continuous until ball is out of bounds.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling fundamental skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice basic moves in open area · side-step · scissors · step-over · new moves',
      detail: 'Rehearse each of the moves in an open area (see video links below) - 15 minutes. Practice side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: '1v1 battles · score by dribbling past end line · good first touch',
      detail: '1v1 End Line Game - 15 minutes. Players battle 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender must win ball and score or force attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through 3 defenders · beat each in their square · score at end',
      detail: 'Dribbling Gauntlet - 20 minutes. 10x36 yard area divided into three sections with three defenders. Attackers must beat each defender and score by dribbling past last end line. Defenders start at back line and cannot leave their squares.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: '2v2 with pole goals · 30 minutes · team vs team competition',
      detail: '2V2 Game (use poles to make the goals) - 30 minutes. For this exercise your team should go against one of the other teams. Play continuous until ball is out of bounds.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

