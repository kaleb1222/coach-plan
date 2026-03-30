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
      detail: 'Set up 20-yard line. Players perform bear crawls across (10 yards), then inch worms back to start. Next, lateral bounds across (staying low, explosive jumps sideways), then backpedal to start. Complete 2-3 rounds with 30-second rest between exercises. Focus on proper form and controlled movements.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops',
      detail: 'Every player has a ball in 20x20 yard grid. Players dribble freely while music plays (or coach counts/claps rhythm). When music stops, players must freeze with ball under control. Add challenges: freeze in different positions (one foot on ball, sit on ball, ball between feet). Players who don\'t freeze or lose control do 5 toe taps before rejoining.',
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
      summary: 'Practice skill moves: hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area (see video links below). Practice the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. The coach demonstrates each move, players repeat it 10 times. Focus on correct technique with small soft touches using shoe laces.',
      points: [
        'Point your toe straight down when using shoe laces',
        'Quick feet and small steps for quick reactions',
        'Make the defender react to you, not the other way around',
        'Players must master these moves to beat defenders 9 out of 10 times'
      ],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Players play 1v1 · score by dribbling past opposite end line',
      detail: '1v1 End Line Game in a 10X20 yard area. Players in front of each line move to center. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past the opposite end line. Defender must win ball and score by dribbling past opposite end line, or force attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender to close you down',
        'Approach defender with control, fake one way, change direction and speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence · score by dribbling past end line',
      detail: 'Dribbling Gauntlet in 10X36 yard area, divided into three 10X12 sections. Three defenders, and a line of attackers. One attacker dribbles through and scores by dribbling past the last end line. On the way the attacker must beat each defender. Defenders must start at back line of their respective squares and cannot leave their squares.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of the defender\'s reach',
        'Change direction and accelerate away',
        'Attack the spaces behind the defender with speed',
        'Control the ball again when you enter the next square'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can have extra player · pass teammate in',
      detail: '2V2 Game With Large Goals. The team with the ball can have an extra player (pass a teammate in). Play is continuous until ball is out of bounds. Focus on dribbling diagonally to create time and space, quick transitions, and combinations like give-&-gos and overlaps.',
      points: [
        'Dribble diagonally to create time and space',
        'Pass early and shoot early',
        'Quick transitions to defense and offense',
        'Look to combine with give-&-gos, overlaps, and through balls',
        'Be aware what the defender is taking away and take what he gives you'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
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
      summary: 'Practice skill moves: hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area (see video links below). Practice the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. The coach demonstrates each move, players repeat it 10 times. Focus on correct technique with small soft touches using shoe laces.',
      points: [
        'Point your toe straight down when using shoe laces',
        'Quick feet and small steps for quick reactions',
        'Make the defender react to you, not the other way around',
        'Players must master these moves to beat defenders 9 out of 10 times'
      ],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Players play 1v1 · score by dribbling past opposite end line',
      detail: '1v1 End Line Game in a 10X20 yard area. Players in front of each line move to center. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past the opposite end line. Defender must win ball and score by dribbling past opposite end line, or force attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender to close you down',
        'Approach defender with control, fake one way, change direction and speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence · score by dribbling past end line',
      detail: 'Dribbling Gauntlet in 10X36 yard area, divided into three 10X12 sections. Three defenders, and a line of attackers. One attacker dribbles through and scores by dribbling past the last end line. On the way the attacker must beat each defender. Defenders must start at back line of their respective squares and cannot leave their squares.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of the defender\'s reach',
        'Change direction and accelerate away',
        'Attack the spaces behind the defender with speed',
        'Control the ball again when you enter the next square'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'wt4',
      name: '2V2 Game (use poles to make the goals)',
      summary: 'Your team should go against one of the other teams',
      detail: '2V2 Game using poles to make the goals. For this exercise your team should go against one of the other teams. Play is continuous until ball is out of bounds. Focus on dribbling diagonally to create time and space, quick transitions, and combinations like give-&-gos and overlaps.',
      points: [
        'Dribble diagonally to create time and space',
        'Pass early and shoot early',
        'Quick transitions to defense and offense',
        'Look to combine with give-&-gos, overlaps, and through balls',
        'Be aware what the defender is taking away and take what he gives you'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

