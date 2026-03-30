// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of March 30';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Hip openers · lateral bounds · inch worms · backpedal',
      detail: 'Set up a 20-yard line. Players start with hip openers (leg swings forward/back, side to side). Then lateral bounds across the field (jump side to side with control). Follow with inch worms (walk hands out to plank, walk feet to hands). Finish with controlled backpedal to starting position. Complete 2 rounds with 30 seconds rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops',
      detail: 'Every player has a ball in a 20x20 yard grid. Players dribble freely around the space while music plays. When music stops, players must freeze with their foot on top of the ball. Last player to freeze or anyone moving during the freeze does 5 toe taps. Restart music and repeat. Add challenges like \'freeze in pairs\' or \'freeze on one foot\'.',
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
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use open area or 20x20 yard area. Coach demonstrates each move, players repeat it 10 times. Critical that all players learn these basic skills/moves. These moves should be part of every pre-game warmup.',
      points: ['Demonstrate each move correctly', 'Players repeat each move 10 times', 'Use correct technique with shoe laces', 'Quick feet and small steps'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine including skipping · high knees · carioca',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · score by dribbling past end line · accurate passing',
      detail: '10x20 yard area. Players with balls on one corner, players without on far corner. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender must win ball and score by dribbling past opposite end line, or force attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through sections · score past end line',
      detail: '10x36 yard area, divided into three 10x12 sections. Three defenders, and a line of attackers. One attacker dribbles through and scores by dribbling past the last end line. Must beat each defender. Defenders start at back line of their squares and cannot leave their squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling Microcycle 2: Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use open area or 20x20 yard area. Coach demonstrates each move, players repeat it 10 times. Critical that all players learn these basic skills/moves. These moves should be part of every pre-game warmup.',
      points: ['Demonstrate each move correctly', 'Players repeat each move 10 times', 'Use correct technique with shoe laces', 'Quick feet and small steps'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine including skipping · high knees · carioca',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · score by dribbling past end line · accurate passing',
      detail: '10x20 yard area. Players with balls on one corner, players without on far corner. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender must win ball and score by dribbling past opposite end line, or force attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through sections · score past end line',
      detail: '10x36 yard area, divided into three 10x12 sections. Three defenders, and a line of attackers. One attacker dribbles through and scores by dribbling past the last end line. Must beat each defender. Defenders start at back line of their squares and cannot leave their squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

