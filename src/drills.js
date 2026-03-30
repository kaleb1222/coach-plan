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
      summary: 'Hip openers · lateral bounds · bear crawls · backpedal',
      detail: 'Set up a 20-yard course. Start with hip openers (lift knee across body, step out wide) for 10 yards. Add lateral bounds (jump side to side on one foot, then other) for 10 yards. Bear crawl forward 10 yards keeping hips low. Finish with backpedal focusing on staying on balls of feet. Rest 30 seconds, repeat 2 times.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Treasure Island Dribbling',
      summary: 'Dribble around cones · collect treasure · return to base',
      detail: 'Create a large grid with cones scattered inside as \'treasure islands\'. Each player has a ball and starts at one edge. On \'GO!\', players dribble to different cones to collect imaginary treasure, touching the cone with their hand while maintaining ball control. After collecting from 3 cones, return to the starting line. First player back wins the round. Play 3-4 rounds with different challenges like using only left foot or specific moves.',
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
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on the side-step, scissors and step-over from previous week, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Each player should repeat each move 10 times to build muscle memory and technique.',
      points: ['Take small soft touches with shoe laces', 'Quick feet and small steps for reaction', 'Make defender react to you', 'Change direction and speed to create space'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Skipping lap · high knees · butt-kickers · carioca · lunges · stretches',
      detail: 'Dynamic warm-up routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · dribble past end line to score · accurate passing',
      detail: '10x20 yard area. Players in lines at opposite corners. Blue player passes to red player, then 1v1 battle begins. Score by dribbling with control past the opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can have extra player · pass teammate in',
      detail: '2v2 game with large goals. Special rule: the team with the ball can have an extra player (pass a teammate in) to create numerical advantage and encourage quick passing and movement.',
      points: ['Dribble diagonally to create space', 'Pass early when possible', 'Quick transitions', 'Use overlaps and combinations'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
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
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on the side-step, scissors and step-over from previous week, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Each player should repeat each move 10 times to build muscle memory and technique.',
      points: ['Take small soft touches with shoe laces', 'Quick feet and small steps for reaction', 'Make defender react to you', 'Change direction and speed to create space'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Skipping lap · high knees · butt-kickers · carioca · lunges · stretches',
      detail: 'Dynamic warm-up routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · dribble past end line to score · accurate passing',
      detail: '10x20 yard area. Players in lines at opposite corners. Blue player passes to red player, then 1v1 battle begins. Score by dribbling with control past the opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · 3 sections · beat each defender to score',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attacker must dribble through and score by dribbling past the end line, beating each defender in their respective squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

