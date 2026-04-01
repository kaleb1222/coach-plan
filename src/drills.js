// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of March 30';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Bear crawls · inch worms · lateral bounds · backpedal',
      detail: 'Set up 20-yard line. Bear crawl 10 yards keeping hips low and core engaged. Inch worm walk 10 yards - walk hands out to plank, walk feet to hands. Lateral bounds across width jumping side to side with control. Backpedal to start, maintaining good posture and quick feet.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops',
      detail: 'Players dribble freely around the area with their ball. When music stops (or coach calls "freeze"), players must stop their ball with their foot and hold a fun pose. Add challenges: freeze on one foot, freeze in a superhero pose, or freeze and balance ball on foot. Restart music and continue.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental dribbling skills & moves training',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice skill moves · Side-step · Scissors · Step-over · New moves',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Coach demonstrates each move, players repeat 10 times. Focus on correct technique using shoe laces, quick feet, small steps.',
      points: ['Take small soft touches with shoe laces', 'Quick feet and small steps', 'Make defender react to you', 'Master mechanics before game situations'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Carioca · Lunges',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · Dribbling past end line · Accurate passing start',
      detail: '10x20 yard area. Players line up at opposite corners. Blue player passes to red player, they play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by forcing attacker out of bounds or winning ball and scoring.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start faking immediately', 'Approach with control doing fakes', 'Change direction and speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · Sequential 1v1s · Dribble to end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker must beat each defender in sequence to score by dribbling past end line. Defenders start at back line of their squares, cannot leave their sections.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental dribbling skills & team play',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice skill moves · Side-step · Scissors · Step-over · New moves',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Coach demonstrates each move, players repeat 10 times. Focus on correct technique using shoe laces, quick feet, small steps.',
      points: ['Take small soft touches with shoe laces', 'Quick feet and small steps', 'Make defender react to you', 'Master mechanics before game situations'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Carioca · Lunges',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · Dribbling past end line · Accurate passing start',
      detail: '10x20 yard area. Players line up at opposite corners. Blue player passes to red player, they play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by forcing attacker out of bounds or winning ball and scoring.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start faking immediately', 'Approach with control doing fakes', 'Change direction and speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · Sequential 1v1s · Dribble to end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker must beat each defender in sequence to score by dribbling past end line. Defenders start at back line of their squares, cannot leave their sections.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

