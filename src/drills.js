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
      summary: 'Carioca · lateral bounds · inch worms · backpedal',
      detail: 'Set up 30-yard line. Players perform carioca (side steps crossing feet) for 15 yards, then lateral bounds (explosive side-to-side jumps) for 15 yards. At end line, do 5 inch worms (walk hands forward to plank, walk feet to hands). Return with backpedal. Complete 2 rounds, focusing on proper form and controlled movements.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Green = dribble · Yellow = slow · Red = stop & balance',
      detail: 'Each player with a ball in 20x20 grid. Coach calls out colors: GREEN = dribble freely around grid, YELLOW = dribble slowly with small touches, RED = stop ball with foot and balance on one leg. Add fun variations like PURPLE = spin with ball, BLUE = dribble backwards. Keep players moving and listening for 3-4 minutes.',
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
      summary: 'Practice skill moves · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use video links for demonstration. Players repeat each move 10 times in an open area or 20x20 yard area. Coach demonstrates each move. Focus on proper technique: hook turn (using sole of foot, turn 180 degrees), pull-push (fake shot, pull back with sole, turn 90 degrees, push with inside), pull-cut (fake shot, pull behind standing leg, cut 90 degrees), scissors (leap to side, push ball opposite direction with outside of other foot).',
      points: [
        'Use correct technique for each move',
        'Players must master mechanics to beat defenders 9 out of 10 times',
        'Take small soft touches with shoe laces',
        'Keep toe pointed straight down'
      ],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Carioca · Lunges',
      detail: 'Complete dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · Accurate pass · Escape pressure · Score by dribbling',
      detail: '10x20 yard area. Players with balls in one corner, players without balls in far corner. Players move to center, blue passes to red, then play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately - don\'t wait for defender',
        'Approach with control, fake one way, change direction and speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · Attack spaces · Control through sections',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders start at back line of their squares, cannot leave their squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: '1v1 dribbling',
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
      summary: 'Practice skill moves · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use video links for demonstration. Players repeat each move 10 times in an open area or 20x20 yard area. Coach demonstrates each move. Focus on proper technique: hook turn (using sole of foot, turn 180 degrees), pull-push (fake shot, pull back with sole, turn 90 degrees, push with inside), pull-cut (fake shot, pull behind standing leg, cut 90 degrees), scissors (leap to side, push ball opposite direction with outside of other foot).',
      points: [
        'Use correct technique for each move',
        'Players must master mechanics to beat defenders 9 out of 10 times',
        'Take small soft touches with shoe laces',
        'Keep toe pointed straight down'
      ],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · Skipping · High knees · Carioca · Lunges',
      detail: 'Complete dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · Accurate pass · Escape pressure · Score by dribbling',
      detail: '10x20 yard area. Players with balls in one corner, players without balls in far corner. Players move to center, blue passes to red, then play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately - don\'t wait for defender',
        'Approach with control, fake one way, change direction and speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · Attack spaces · Control through sections',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders start at back line of their squares, cannot leave their squares. Defenders score by winning ball and stopping it on front line of their square.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

