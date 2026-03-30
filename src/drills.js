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
      summary: 'Bear crawls · hip circles · lateral bounds · backpedal',
      detail: 'Set up 20-yard lines. Bear crawl forward 10 yards, then backward 10 yards focusing on core strength. Stand and perform 10 hip circles each direction with hands on hips. Lateral bound side to side across 15-yard width, landing softly on each foot. Finish with backpedal run for 20 yards, pumping arms and staying on balls of feet.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble and avoid taggers · hold injured body parts',
      detail: 'All players dribble balls in 30x20 yard area. 2-3 players are doctors (no balls). When a doctor tags a dribbler, that player must hold the tagged body part (shoulder, knee, ankle) while continuing to dribble with their free hand/arm. If tagged twice, player must lie down until another player (not doctor) dribbles over and \'heals\' them. Rotate doctors every 2 minutes.',
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
      name: 'Rehearse Each of the Moves in an Open Area',
      summary: 'Practice skill moves · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players should practice each move 10 times. Use video demonstrations to ensure correct technique.',
      points: ['Demonstrate each move correctly or use video links', 'Focus on mastering mechanics before speed', 'Hook turn: 180 degrees using sole of foot', 'Pull-push: Fake shot, pull back, push with inside', 'Pull-cut: Pull back behind standing leg, cut 90 degrees'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Carioca',
      detail: 'Dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battle · Score by dribbling past end line · Beat defender',
      detail: '10x20 yard area. Players start from opposite corners. Blue player passes to red player, then they play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed', 'Attack the space with maximum speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · Dribble through sections · Score at end',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past the last end line. Must beat each defender in their respective squares. Defenders cannot leave their squares and score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control the ball when entering next square'],
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
      name: 'Rehearse Each of the Moves in an Open Area',
      summary: 'Practice skill moves · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players should practice each move 10 times. Use video demonstrations to ensure correct technique.',
      points: ['Demonstrate each move correctly or use video links', 'Focus on mastering mechanics before speed', 'Hook turn: 180 degrees using sole of foot', 'Pull-push: Fake shot, pull back, push with inside', 'Pull-cut: Pull back behind standing leg, cut 90 degrees'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Carioca',
      detail: 'Dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battle · Score by dribbling past end line · Beat defender',
      detail: '10x20 yard area. Players start from opposite corners. Blue player passes to red player, then they play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed', 'Attack the space with maximum speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · Dribble through sections · Score at end',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past the last end line. Must beat each defender in their respective squares. Defenders cannot leave their squares and score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control the ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

