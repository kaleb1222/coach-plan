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
      summary: 'Carioca · lateral bounds · inch worms · hip circles',
      detail: 'Set up 20-yard line. Players perform carioca (side-stepping crossover) down and back. Next, lateral bounds - explosive side-to-side jumps on one foot, then other foot. Follow with inch worms - walk hands forward to plank, walk feet to hands. Finish with standing hip circles - hands on hips, make big circles with hips each direction.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in grid · follow color commands · fun reactions',
      detail: 'Players dribble freely in 20x20 yard grid. Coach calls colors: GREEN = dribble fast, YELLOW = dribble slowly, RED = stop with foot on ball. Add fun variations: PURPLE = sit on ball, ORANGE = juggle, BLUE = dribble with weak foot only. Keep players moving and laughing while touching ball frequently.',
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
      name: 'Rehearse skill moves in open area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area (see video links below) - 15 minutes. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up preparation for training session',
      detail: 'Dynamic Stretching - 5 minutes. Include skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: 'One vs one battles to beat defender and dribble past end line',
      detail: '1v1 End Line Game - 15 minutes. Players play 1v1 until ball goes out of bounds. The player with the ball scores by dribbling with control past the opposite end line. The defender must either win the ball and score by dribbling past the opposite end line, or by forcing the attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately - do not wait for defender to close down', 'Approach defender with control doing fakes, fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through three defenders in sequence to score',
      detail: 'Dribbling Gauntlet - 20 minutes. One attacker dribbles through and scores by dribbling past the last end line. On the way the attacker must beat each defender. Defenders must start at the back line of their respective squares. Defenders are not allowed outside their respective squares.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction, and accelerate away', 'Attack the spaces behind the defender with speed', 'Control the ball again when you enter the next square'],
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
      name: 'Rehearse skill moves in open area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area (see video links below) - 15 minutes. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up preparation for training session',
      detail: 'Dynamic Stretching - 5 minutes. Include skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: 'One vs one battles to beat defender and dribble past end line',
      detail: '1v1 End Line Game - 15 minutes. Players play 1v1 until ball goes out of bounds. The player with the ball scores by dribbling with control past the opposite end line. The defender must either win the ball and score by dribbling past the opposite end line, or by forcing the attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately - do not wait for defender to close down', 'Approach defender with control doing fakes, fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through three defenders in sequence to score',
      detail: 'Dribbling Gauntlet - 20 minutes. One attacker dribbles through and scores by dribbling past the last end line. On the way the attacker must beat each defender. Defenders must start at the back line of their respective squares. Defenders are not allowed outside their respective squares.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction, and accelerate away', 'Attack the spaces behind the defender with speed', 'Control the ball again when you enter the next square'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

