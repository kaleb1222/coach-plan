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
      summary: 'Hip openers · lateral bounds · inch worms',
      detail: 'Set up 20-yard line. Players perform: hip openers (10 each leg - lift knee to chest, rotate out), lateral bounds (bound side to side with control), inch worms (walk hands out to plank, walk feet to hands). Complete 2 rounds with light jog recovery between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · react to color commands',
      detail: 'Every player with a ball in 20x20 grid. Players dribble freely while coach calls colors: GREEN = dribble fast, YELLOW = dribble slow with close touches, RED = stop ball with sole and freeze. Add variations: BLUE = sit on ball, PURPLE = juggle in place. Play for 3-4 minutes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental Skills - Dribbling & Skill Moves',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves in Open Area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Players practice the four new skill moves (hook turn, drag-back, pull-push, and pull-cut) plus previously learned moves (side-step, scissors, step-over) in an open area. Coach demonstrates each move, players repeat 10 times each. Focus on correct technique and timing.',
      points: ['Demonstrate each move correctly', 'Players repeat each move 10 times', 'Focus on mechanics and timing', 'Use small soft touches with shoe laces'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up preparation with movement-based stretches',
      detail: 'Complete dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward/side lunges, side squat, knee to chest, airplane, toe touch, and high kick exercises.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: 'Beat defender using skill moves to cross end line',
      detail: '10x20 yard area. Players start from opposite corners. Blue player passes to red player, then they play 1v1. Score by dribbling with control past the opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch (soft, short)', 'Start fakes immediately', 'Fake one way, change direction and speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence using skill moves',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attacker must dribble through and beat each defender in their square. Defenders start at back line of their squares and cannot leave. Score by dribbling past final end line.',
      points: ['Dribble with shoelaces', 'Make moves early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental Skills - Dribbling & Skill Moves',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves in Open Area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Players practice the four new skill moves (hook turn, drag-back, pull-push, and pull-cut) plus previously learned moves (side-step, scissors, step-over) in an open area. Coach demonstrates each move, players repeat 10 times each. Focus on correct technique and timing.',
      points: ['Demonstrate each move correctly', 'Players repeat each move 10 times', 'Focus on mechanics and timing', 'Use small soft touches with shoe laces'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up preparation with movement-based stretches',
      detail: 'Complete dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward/side lunges, side squat, knee to chest, airplane, toe touch, and high kick exercises.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: 'Beat defender using skill moves to cross end line',
      detail: '10x20 yard area. Players start from opposite corners. Blue player passes to red player, then they play 1v1. Score by dribbling with control past the opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch (soft, short)', 'Start fakes immediately', 'Fake one way, change direction and speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Team vs team scrimmage using poles for goals',
      detail: '20x30 yard area (adjust for age group). Coach passes to far corner, receiver dribbles diagonally while teammate overlaps. Two defenders come in. Play continuous until ball out of bounds. Use poles to make goals. Team should play against another team.',
      points: ['Dribble diagonally to create time and space', 'Pass early, shoot early', 'Quick transitions to defense and offense', 'Look for give-&-gos, overlaps, through balls'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

