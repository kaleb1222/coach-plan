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
      detail: 'Set up a 20-yard line. Players perform Frankenstein walks (straight-leg kicks forward while walking), then lateral bounds (jumping side to side with control), followed by inch worms (walk hands out to plank, then feet to hands). Complete 2-3 rounds with light jog recovery between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · green/yellow/red commands',
      detail: 'Players dribble freely in a 20x20 yard grid. Coach calls out traffic signals: GREEN = dribble fast, YELLOW = slow dribbling with close control, RED = stop with foot on ball. Add variations like REVERSE (dribble backwards) or HORN (find a partner and high-five). Play for 3-4 minutes.',
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
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice 7 skill moves • Side-step • Scissors • Step-over • Hook turn • Drag-back • Pull-push • Pull-cut',
      detail: 'Rehearse each of the moves in an open area. Coach demonstrates each move, players repeat it 10 times. Focus on side-step, scissors, step-over, hook turn, drag-back, pull-push, and pull-cut. Use videos for reference.',
      points: ['Use correct technique', 'Take small soft touches with shoe laces', 'Point toe straight down', 'Quick feet and small steps', 'Make defender react to you'],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine • Skipping • High knees • Carioca • Lunges',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '10x20 area • Pass to start • Score by dribbling past end line',
      detail: '10x20 yard area. Players with balls on one corner, players without on opposite corner. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past the opposite end line.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately', 'Fake one way, change direction, change speed', 'Attack space with maximum speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 area • 3 sections • Beat each defender to score',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line. Must beat each defender. Defenders start at back line of their squares and cannot leave their square.',
      points: ['Dribble with shoelaces', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
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
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice 7 skill moves • Side-step • Scissors • Step-over • Hook turn • Drag-back • Pull-push • Pull-cut',
      detail: 'Rehearse each of the moves in an open area. Coach demonstrates each move, players repeat it 10 times. Focus on side-step, scissors, step-over, hook turn, drag-back, pull-push, and pull-cut. Use videos for reference.',
      points: ['Use correct technique', 'Take small soft touches with shoe laces', 'Point toe straight down', 'Quick feet and small steps', 'Make defender react to you'],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine • Skipping • High knees • Carioca • Lunges',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '10x20 area • Pass to start • Score by dribbling past end line',
      detail: '10x20 yard area. Players with balls on one corner, players without on opposite corner. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past the opposite end line.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately', 'Fake one way, change direction, change speed', 'Attack space with maximum speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 area • 3 sections • Beat each defender to score',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line. Must beat each defender. Defenders start at back line of their squares and cannot leave their square.',
      points: ['Dribble with shoelaces', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

