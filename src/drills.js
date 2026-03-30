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
      summary: 'Lateral bounds · carioca · bear crawls · inch worms',
      detail: 'Set up two cones 20 yards apart. Players start with lateral bounds (side-to-side jumps) for 10 yards, then carioca (crossover steps) for remaining distance. Return with bear crawls for 10 yards, then inch worms (walk hands out to plank, walk feet to hands) for final stretch. Focus on controlled movements and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble freely · when music stops freeze with ball',
      detail: 'Each player starts with a ball inside a 30x30 yard grid. Players dribble freely around the area while music plays or coach counts aloud. When music stops (or coach shouts \'FREEZE!\'), players must immediately stop and place one foot on their ball. Last player to freeze does 5 toe taps before play resumes. Variation: Remove one ball each round - players without balls become \'ball thieves\' who try to steal during freeze moments.',
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
      summary: 'Practice side-step · scissors · step-over · new moves',
      detail: 'Rehearse each of the moves in an open area (see video links below). Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times with correct technique.',
      points: [
        'Use small soft touches with the shoe laces (point your toe straight down)',
        'Quick feet and small steps so you can react quickly',
        'Master the mechanics of each move',
        'Execute moves against a defender with proper timing'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Full body warm-up · preparation for training',
      detail: 'Dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · dribbling to score · beat defenders',
      detail: '10x20 yard area. Players pass to start 1v1 battle. Score by dribbling with control past the opposite end line. Defender must win ball and score or force attacker out of bounds. Game over when ball is out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender to close down',
        'Approach with control, fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat multiple defenders · dribbling through sections',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders in respective squares. Attackers must beat each defender to score by dribbling past the end line. Defenders score by winning ball and stopping it on front line of their square.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control the ball when entering next square'
      ],
      badge: 'Moves training',
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
      name: 'Rehearse skill moves in open area',
      summary: 'Practice side-step · scissors · step-over · new moves',
      detail: 'Rehearse each of the moves in an open area (see video links below). Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times with correct technique.',
      points: [
        'Use small soft touches with the shoe laces (point your toe straight down)',
        'Quick feet and small steps so you can react quickly',
        'Master the mechanics of each move',
        'Execute moves against a defender with proper timing'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Full body warm-up · preparation for training',
      detail: 'Dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · dribbling to score · beat defenders',
      detail: '10x20 yard area. Players pass to start 1v1 battle. Score by dribbling with control past the opposite end line. Defender must win ball and score or force attacker out of bounds. Game over when ball is out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender to close down',
        'Approach with control, fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat multiple defenders · dribbling through sections',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders in respective squares. Attackers must beat each defender to score by dribbling past the end line. Defenders score by winning ball and stopping it on front line of their square.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control the ball when entering next square'
      ],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

