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
      summary: 'Bear crawls · inch worms · lateral bounds · carioca',
      detail: 'Set up 20-yard line. Players perform bear crawls for 10 yards, then inch worms for 10 yards. Return with lateral bounds (5 each direction), then carioca (shuffle sideways crossing feet). Focus on controlled movements and proper form. Complete 2 rounds with 30-second rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Treasure Island',
      summary: 'Dribble to collect cones · return to home base',
      detail: 'Create 20x20 yard grid with cones scattered in middle (treasure). Each player starts at edge with ball. On go, players dribble into grid to collect one cone, then return to starting line. After delivering treasure, they can go back for more. Add challenge: only use left foot, right foot, or outside touches only. Play for 3-4 minutes.',
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
      name: 'Rehearse Each Move in Open Area',
      summary: 'Practice skill moves · Side-step · Scissors · Step-over · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Coach demonstrates each move, players repeat it 10 times. Study the video links provided for proper technique.',
      points: [
        'Use correct technique when dribbling: small soft touches with shoe laces',
        'Quick feet and small steps to react quickly',
        'Make the defender react to you, not the other way around',
        'Players must master mechanics to beat defender 9 out of 10 times'
      ],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Skipping · High knees · Butt-kickers · Carioca · Lunges · Stretches',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · Score by dribbling past end line · Good first touch',
      detail: '10x20 yard area. Players line up on opposite corners. Blue player passes to red player, then they play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender wins by forcing attacker out of bounds or winning ball and scoring.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender to close down',
        'Approach with control, fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · Dribble through sections · Attack spaces',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders in their respective squares. Attackers must dribble through and score by dribbling past the last end line, beating each defender along the way. Defenders start at back line of their squares and cannot leave their area.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling Microcycle 2: Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Each Move in Open Area',
      summary: 'Practice skill moves · Side-step · Scissors · Step-over · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Coach demonstrates each move, players repeat it 10 times. Study the video links provided for proper technique.',
      points: [
        'Use correct technique when dribbling: small soft touches with shoe laces',
        'Quick feet and small steps to react quickly',
        'Make the defender react to you, not the other way around',
        'Players must master mechanics to beat defender 9 out of 10 times'
      ],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Skipping · High knees · Butt-kickers · Carioca · Lunges · Stretches',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · Score by dribbling past end line · Good first touch',
      detail: '10x20 yard area. Players line up on opposite corners. Blue player passes to red player, then they play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender wins by forcing attacker out of bounds or winning ball and scoring.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender to close down',
        'Approach with control, fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · Dribble through sections · Attack spaces',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders in their respective squares. Attackers must dribble through and score by dribbling past the last end line, beating each defender along the way. Defenders start at back line of their squares and cannot leave their area.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

