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
      summary: 'Bear crawls · inch worms · hip openers · lateral bounds',
      detail: 'Set up 20-yard course. Players perform bear crawls for 10 yards (hands and feet, knees off ground), then inch worms (walk hands out to plank, walk feet to hands) for 5 yards. Add hip openers (leg circles) and lateral bounds (side-to-side jumping) on return. Focus on controlled movements and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble freely · freeze when music stops · find empty ball',
      detail: 'Each player starts with a ball in 20x20 grid. Players dribble freely while music plays. When music stops, players must quickly leave their ball and find a different ball to stand next to. Remove one ball each round. Last players standing win. Emphasizes quick decision making and ball control.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental Skills · Dribbling Moves',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves',
      summary: 'Open area practice · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Players rehearse skill moves in an open area for 15 minutes. Focus on hook turn (180° turn using sole of foot), drag-back (drag ball straight back with sole), pull-push (fake shot, pull back, turn 90°, push away), and pull-cut (fake shot, pull back behind standing leg, cut 90° with inside foot). Coach demonstrates each move, players repeat 10 times.',
      points: ['Use correct technique with sole of foot', 'Lightning fast hook turns', 'Pull-push draws letter "L" shape', 'Pull-cut goes behind standing leg'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Preparation · High knees · Butt-kickers · Carioca · Lunges',
      detail: 'Dynamic stretching routine for 5 minutes including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Preparation',
      pdfUrl: null
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '10x20 area · Dribble past end line · Accurate passing to feet',
      detail: '1v1 battles in 10x20 yard area for 15 minutes. Blue player passes to red player, then 1v1 until ball goes out. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start faking immediately', 'Fake one way, change direction and speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 area · Beat 3 defenders · Attack spaces with speed',
      detail: 'Dribbling Gauntlet for 20 minutes. 10x36 yard area divided into three sections with three defenders. Attacker must beat each defender to score by dribbling past end line. Defenders stay in their squares and score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces', 'Make move early, out of reach', 'Change direction and accelerate', 'Attack spaces behind defender'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental Skills · Extended Game Play',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Open area practice · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Players rehearse skill moves in an open area for 15 minutes. Focus on hook turn (180° turn using sole of foot), drag-back (drag ball straight back with sole), pull-push (fake shot, pull back, turn 90°, push away), and pull-cut (fake shot, pull back behind standing leg, cut 90° with inside foot). Coach demonstrates each move, players repeat 10 times.',
      points: ['Use correct technique with sole of foot', 'Lightning fast hook turns', 'Pull-push draws letter "L" shape', 'Pull-cut goes behind standing leg'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Preparation · High knees · Butt-kickers · Carioca · Lunges',
      detail: 'Dynamic stretching routine for 5 minutes including skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Preparation',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '10x20 area · Dribble past end line · Accurate passing to feet',
      detail: '1v1 battles in 10x20 yard area for 15 minutes. Blue player passes to red player, then 1v1 until ball goes out. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start faking immediately', 'Fake one way, change direction and speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Use poles for goals · 30 minutes · Team vs team competition',
      detail: '2v2 games using poles to make goals for 30 minutes. Teams should play against one of the other teams. Extended game play to practice dribbling skills in game situations.',
      points: ['Apply dribbling moves in game context', 'Beat defender 9 out of 10 times', 'Change direction and speed to escape pressure'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

