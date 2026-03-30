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
      summary: 'Inch worms · lateral bounds · carioca · backpedal',
      detail: 'Set up 20-yard line. Players start with inch worms (walk hands out to plank, walk feet to hands). Then lateral bounds across field (explosive side jumps). Return with carioca (side steps crossing feet over/under). Finish with controlled backpedal. Repeat circuit 2-3 times with rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble freely · freeze when music stops · grab any ball',
      detail: 'Place one fewer ball than players in center of area. Players dribble around the space. When coach stops "music" (whistle/clap), players must quickly grab any ball and sit down. Player without a ball does 5 toe taps before next round. Remove one more ball each round until final winner.',
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
      name: 'Rehearse Skill Moves in Open Area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Players rehearse each of the moves in an open area. Focus on dribbling and skill moves to beat defenders and to escape from pressure. Study the video links provided. Players should master these moves with correct technique, timing, and execution against defenders.',
      points: [],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Standard dynamic warm-up routine · 5 minutes',
      detail: 'Complete dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battle · score by dribbling past end line · 15 minutes',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player, then play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender can win ball and score or force attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately - don\'t wait for defender', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through 3 defenders · beat each in their square · 20 minutes',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past the last end line, must beat each defender. Defenders start at back line of their squares and cannot leave their squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
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
      name: 'Rehearse Skill Moves in Open Area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Players rehearse each of the moves in an open area. Focus on dribbling and skill moves to beat defenders and to escape from pressure. Study the video links provided. Players should master these moves with correct technique, timing, and execution against defenders.',
      points: [],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Standard dynamic warm-up routine · 5 minutes',
      detail: 'Complete dynamic stretching routine including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battle · score by dribbling past end line · 15 minutes',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player, then play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender can win ball and score or force attacker out of bounds.',
      points: ['Accurate pass to the feet', 'Good first touch (soft, short touch)', 'Start doing fakes immediately - don\'t wait for defender', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through 3 defenders · beat each in their square · 20 minutes',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past the last end line, must beat each defender. Defenders start at back line of their squares and cannot leave their squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

