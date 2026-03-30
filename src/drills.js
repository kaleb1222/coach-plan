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
      summary: 'Hip openers · lateral bounds · inch worms · backpedal',
      detail: 'Set up a 20-yard line. Players perform hip openers (leg swings forward/back and side to side) for 30 seconds. Then lateral bounds across the line (jump sideways, land on one foot, bound to other foot). Next, inch worms - walk hands forward to plank, walk feet to hands. Finish with backpedal across the line. Repeat circuit 2-3 times.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble while avoiding taggers · hold injured body part',
      detail: 'All players dribble their ball in a 20x20 yard grid. 2-3 players are designated as doctors (no ball). When a doctor tags a dribbler, that player must hold the tagged body part (shoulder, knee, elbow) with one hand while continuing to dribble with the other. If tagged again while injured, player does 5 jumping jacks then returns. Doctors rotate every 90 seconds.',
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
      summary: 'Practice skill moves · side-step · scissors · step-over · new moves',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use open area or 20x20 yard area. Coach demonstrates each move, players repeat it 10 times. Focus on mastering mechanics before moving to game situations.',
      points: ['Demonstrate moves correctly', 'Players repeat 10 times each', 'Master mechanics first', 'Use correct technique with shoelaces'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defender · dribble past end line · accurate passing',
      detail: '10X20 yard area. Players start from corners. Blue player passes to red player accurately to feet. Play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start fakes immediately', 'Fake one way, change direction and speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat multiple defenders · attack spaces · change direction',
      detail: '10X36 yard area divided into three 10X12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by beating each defender and dribbling past end line. Defenders start at back line of their squares, can\'t leave squares. Defenders score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can add extra player · pass teammate in',
      detail: '2v2 game with large goals. The team with the ball can have an extra player by passing a teammate into the game. Focus on quick combinations, early passing and shooting, and quick transitions between offense and defense.',
      points: ['Pass early and shoot early', 'Quick transitions', 'Look for give-and-gos and overlaps', 'Take what defender gives you'],
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
      summary: 'Practice skill moves · side-step · scissors · step-over · new moves',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use open area or 20x20 yard area. Coach demonstrates each move, players repeat it 10 times. Focus on mastering mechanics before moving to game situations.',
      points: ['Demonstrate moves correctly', 'Players repeat 10 times each', 'Master mechanics first', 'Use correct technique with shoelaces'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defender · dribble past end line · accurate passing',
      detail: '10X20 yard area. Players start from corners. Blue player passes to red player accurately to feet. Play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start fakes immediately', 'Fake one way, change direction and speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat multiple defenders · attack spaces · change direction',
      detail: '10X36 yard area divided into three 10X12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by beating each defender and dribbling past end line. Defenders start at back line of their squares, can\'t leave squares. Defenders score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game (Poles for Goals)',
      summary: 'Your team vs other teams · poles for goals · extended play',
      detail: '2v2 game using poles to make goals. For this exercise your team should go against one of the other teams. 30-minute session with continuous play, focusing on dribbling skills in game context and team vs team competition.',
      points: ['Use dribbling moves in game context', 'Focus on beating defenders', 'Quick transitions', 'Apply learned skills under pressure'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

