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
      detail: 'Set up 20-yard line. Players start with bear crawls for 10 yards (hands and feet, keeping hips low). Transition to inch worms - walk hands forward into plank, then walk feet up to hands. Return with lateral bounds (side-to-side jumps on one foot, then the other). Finish with carioca - sideways running crossing feet over and under. Complete 2 rounds with 30-second rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · respond to color commands',
      detail: 'Each player with a ball in 20x20 yard area. Players dribble freely around the space. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slow with small touches, RED = stop ball with foot on top. Add variations: BLUE = sit on ball, ORANGE = juggle ball, PURPLE = dribble with weak foot only. Keep players moving and listening for 3-4 minutes.',
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
      summary: 'Practice skill moves · side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Hook turn: Using the sole of the foot on top of the ball, turn 180 degrees. Pull-push: Fake shot, pull ball backwards with sole, turn body 90 degrees, push ball away with inside of same foot. Pull-cut: Fake shot, pull ball back behind standing leg with sole, cut 90 degrees behind standing leg with inside of foot. The coach demonstrates each move, players repeat it 10 times.',
      points: ['Players must master all moves to beat defenders 9 out of 10 times', 'Use correct technique: small soft touches with shoe laces', 'Quick feet and small steps to react quickly', 'Make defender react to you, not the other way around'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Dynamic warm-up routine · skipping · high knees · carioca · lunges',
      detail: 'Dynamic stretching routine including: Skipping lap, High knees, Butt-kickers, Carioca, Forward lunge, Side lunge, Side squat, Knee to chest, Airplane, Toe touch, High kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · accurate pass to start · dribble past end line to score',
      detail: '10X20 yard area. Players in corners, one group with balls. Blue player passes to red player, they play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender wins by taking ball and scoring at opposite end or forcing attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately - don\'t wait for defender', 'Approach with control and fakes, fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through 3 defenders · beat each in their square · score past end line',
      detail: '10X36 yard area divided into three 10X12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders start at back line of their squares, cannot leave their squares. Defenders score by winning ball and stopping it dead on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball again when entering next square'],
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
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice skill moves · side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Hook turn: Using the sole of the foot on top of the ball, turn 180 degrees. Pull-push: Fake shot, pull ball backwards with sole, turn body 90 degrees, push ball away with inside of same foot. Pull-cut: Fake shot, pull ball back behind standing leg with sole, cut 90 degrees behind standing leg with inside of foot. The coach demonstrates each move, players repeat it 10 times.',
      points: ['Players must master all moves to beat defenders 9 out of 10 times', 'Use correct technique: small soft touches with shoe laces', 'Quick feet and small steps to react quickly', 'Make defender react to you, not the other way around'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Dynamic warm-up routine · skipping · high knees · carioca · lunges',
      detail: 'Dynamic stretching routine including: Skipping lap, High knees, Butt-kickers, Carioca, Forward lunge, Side lunge, Side squat, Knee to chest, Airplane, Toe touch, High kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · accurate pass to start · dribble past end line to score',
      detail: '10X20 yard area. Players in corners, one group with balls. Blue player passes to red player, they play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender wins by taking ball and scoring at opposite end or forcing attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately - don\'t wait for defender', 'Approach with control and fakes, fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through 3 defenders · beat each in their square · score past end line',
      detail: '10X36 yard area divided into three 10X12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders start at back line of their squares, cannot leave their squares. Defenders score by winning ball and stopping it dead on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball again when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

