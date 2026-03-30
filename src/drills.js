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
      summary: 'Bear crawls · lateral bounds · Frankenstein walks',
      detail: 'Set up 20-yard line. Players perform bear crawls for 10 yards (hands and feet only, knees off ground). Then lateral bounds for 10 yards (jump side to side on one foot, then the other). Finish with Frankenstein walks back - straight leg kicks while walking forward, reaching opposite hand to toe. Complete 2-3 rounds with 30-second rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble freely · freeze when music stops · find new ball',
      detail: 'Place one less ball than players in center circle. Players dribble around the area with music playing. When music stops, players must leave their ball and quickly find a new one to stand behind (without touching). Player without a ball does 5 toe taps before next round. Play 5-6 rounds, removing one more ball each time.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling Microcycle 2 - Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice skill moves · side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. See video links provided. 10 repetitions of each move.',
      points: ['Use correct technique - small soft touches with shoe laces', 'Practice makes perfect - these moves should be part of every pre-game warmup', 'Players should master mechanics and execute against defenders'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · skipping · high knees · carioca · lunges',
      detail: 'Dynamic stretching including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · score by dribbling past end line · accurate passing',
      detail: '10X20 yard area. Players in lines at opposite corners. Blue player passes to red player, then 1v1 until ball goes out. Score by dribbling with control past opposite end line. Defender can win ball and score or force attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · score by reaching end line · change direction & speed',
      detail: '10X36 yard area divided into three 10X12 sections. Three defenders each in their square, line of attackers. Attacker must beat each defender to score by dribbling past last end line. Defenders start at back line of their squares, cannot leave their area.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling Microcycle 2 - Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice skill moves · side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. See video links provided. 10 repetitions of each move.',
      points: ['Use correct technique - small soft touches with shoe laces', 'Practice makes perfect - these moves should be part of every pre-game warmup', 'Players should master mechanics and execute against defenders'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · skipping · high knees · carioca · lunges',
      detail: 'Dynamic stretching including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · score by dribbling past end line · accurate passing',
      detail: '10X20 yard area. Players in lines at opposite corners. Blue player passes to red player, then 1v1 until ball goes out. Score by dribbling with control past opposite end line. Defender can win ball and score or force attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game (use poles to make the goals)',
      summary: 'Team vs team scrimmage · 30 minutes · use poles for goals',
      detail: 'Dribbling Gauntlet for 20 minutes, then 2V2 Game using poles to make goals for 30 minutes total. Your team should go against one of the other teams for this exercise.',
      points: ['Continue focus on dribbling skills learned', 'Apply moves in game situations', 'Work on escaping pressure to create time and space'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

