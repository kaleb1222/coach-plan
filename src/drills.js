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
      summary: 'Bear crawls · lateral bounds · hip openers · inch worms',
      detail: 'Set up 4 stations in a square (15 yards apart). Station 1: Bear crawls forward for 10 yards. Station 2: Lateral bounds - jump side to side with both feet, landing softly. Station 3: Hip openers - step forward into lunge, rotate hip in and out. Station 4: Inch worms - walk hands out to plank, walk feet to hands. Complete each station for 30 seconds, rest 15 seconds between stations. Complete 2 full circuits.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble while avoiding taggers · hold injured body part',
      detail: 'All players dribble in a 20x20 yard grid. Choose 2-3 players as doctors (no ball, wear pinnies). When a doctor tags a dribbling player, that player must hold the body part where they were tagged (shoulder, knee, ankle, etc.) while continuing to dribble with their free hand/arm. Players can only be healed by another dribbling player who stops and gives them a high-five. If tagged twice before being healed, player does 5 toe touches then re-enters. Play for 2-3 minutes, rotate doctors.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental dribbling skills & moves',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Each of the Moves',
      summary: 'Open area practice · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'In an open area, rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Coach demonstrates each move, players repeat 10 times each. Focus on proper technique with small soft touches using shoe laces.',
      points: ['Use correct technique - small soft touches with shoe laces', 'Point toe straight down', 'Quick feet and small steps to react quickly', 'Master mechanics before adding speed'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Movement preparation · High knees · Butt-kickers · Carioca',
      detail: 'Complete dynamic warm-up sequence including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: 'Beat defender to score · Dribble past end line · Good first touch',
      detail: '10x20 yard area. Players start at opposite corners. Blue passes to red, then 1v1 battle begins. Score by dribbling with control past opposite end line. Defender can win ball and score or force attacker out of bounds. Game ends when ball goes out.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball gets extra player · Pass teammate in · Large goals',
      detail: '2v2 game using large goals. The team with the ball can have an extra player by passing a teammate into play. Focus on quick transitions, early passing and shooting, and combining with give-and-gos and overlaps.',
      points: ['Team with ball can add extra player', 'Pass early and shoot early', 'Quick transitions to defense and offense', 'Look for combinations - give-and-gos, overlaps'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced dribbling application & games',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Each of the Moves',
      summary: 'Open area practice · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'In an open area, rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Coach demonstrates each move, players repeat 10 times each. Focus on proper technique with small soft touches using shoe laces.',
      points: ['Use correct technique - small soft touches with shoe laces', 'Point toe straight down', 'Quick feet and small steps to react quickly', 'Master mechanics before adding speed'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Movement preparation · High knees · Butt-kickers · Carioca',
      detail: 'Complete dynamic warm-up sequence including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: 'Beat defender to score · Dribble past end line · Good first touch',
      detail: '10x20 yard area. Players start at opposite corners. Blue passes to red, then 1v1 battle begins. Score by dribbling with control past opposite end line. Defender can win ball and score or force attacker out of bounds. Game ends when ball goes out.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders in sequence · Dribble through zones · Score at end',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attacker must dribble through and score by dribbling past the last end line, beating each defender. Defenders start at back line of their squares and cannot leave their zones.',
      points: ['Dribble with shoelaces when taking on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

