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
      detail: 'Set up a 20-yard line. Players perform bear crawls for 10 yards, then inch worms for 10 yards. Return with lateral bounds (5 each direction), then finish with backpedal. Focus on controlled movements and proper form. Complete 2 rounds with 30-second rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble on command · green/yellow/red signals',
      detail: 'All players with a ball in 20x20 grid. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slow with close touches, RED = stop and put foot on ball. Add variations like specific body parts to touch ground on red, or different moves on yellow. Play for 3-4 minutes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling & fundamental skills focus',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse moves in open area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area (see video links below). Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut.',
      points: ['Use correct technique - small soft touches with shoe laces', 'Point toe straight down', 'Quick feet and small steps for quick reactions', 'Make defender react to you'],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine with movement patterns',
      detail: 'Dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · score by dribbling past end line',
      detail: '1v1 End Line Game in 10x20 yard area. Players play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · score past end line',
      detail: 'Dribbling Gauntlet in 10x36 yard area divided into three sections. One attacker dribbles through and scores by dribbling past the last end line, must beat each defender in their respective squares.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling skills & small-sided games',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse moves in open area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area (see video links below). Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut.',
      points: ['Use correct technique - small soft touches with shoe laces', 'Point toe straight down', 'Quick feet and small steps for quick reactions', 'Make defender react to you'],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine with movement patterns',
      detail: 'Dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · score by dribbling past end line',
      detail: '1v1 End Line Game in 10x20 yard area. Players play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · score past end line',
      detail: 'Dribbling Gauntlet in 10x36 yard area divided into three sections. One attacker dribbles through and scores by dribbling past the last end line, must beat each defender in their respective squares.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

