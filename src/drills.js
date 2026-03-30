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
      summary: 'Bear crawls · inch worms · lateral bounds',
      detail: 'Start with light jogging for 30 seconds. Then perform bear crawls forward for 10 yards - hands and feet only, keep hips low. Next, inch worms - walk hands forward to plank, walk feet to hands. Finish with lateral bounds - explosive side jumps landing on outside foot, 5 each direction.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Treasure Island',
      summary: 'Dribble to collect cones · pirates try to steal',
      detail: 'Set up scattered cones (treasure) in a 20x20 yard grid. Players dribble around collecting treasure by touching cones with their hand while maintaining ball control. 2-3 pirates without balls try to kick treasure hunters\' balls out of the grid. If your ball goes out, do 5 jumping jacks to get back in. Switch pirates every 2 minutes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling · Skill moves to beat defenders',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice skill moves · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use open area or 20x20 yard area, no need to use a line of cones. The coach demonstrates each move, players repeat it 10 times.',
      points: [
        'Hook turn: Using the sole of the foot on top of the ball, turn 180 degrees',
        'Pull-push: Fake shot, pull ball back with sole, turn body 90 degrees, push away with inside',
        'Pull-cut: Fake shot, pull ball back behind standing leg with sole, cut 90 degrees with inside',
        'Drag back: 180 degree turn, drag ball straight back using sole of foot'
      ],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warmup preparation · Skipping · High knees · Carioca',
      detail: 'Dynamic stretching routine including: Skipping lap, High knees, Butt-kickers, Carioca, Forward lunge, Side lunge, Side squat, Knee to chest, Airplane, Toe touch, High kick.',
      points: [],
      badge: 'Warmup',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · Beat defender with moves · Score by dribbling past end line',
      detail: '10X20 yard area. Players in corners, blue player passes to red player. They play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender must win ball and score or force attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)', 
        'Start doing fakes immediately - don\'t wait for defender to close down',
        'Approach with control and fakes, fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat multiple defenders · Dribble through sections · Attack spaces',
      detail: '10X36 yard area divided into three 10X12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line. Must beat each defender. Defenders start at back line of their squares and cannot leave their squares.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control the ball when entering next square'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling · Skill moves to beat defenders',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice skill moves · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use open area or 20x20 yard area, no need to use a line of cones. The coach demonstrates each move, players repeat it 10 times.',
      points: [
        'Hook turn: Using the sole of the foot on top of the ball, turn 180 degrees',
        'Pull-push: Fake shot, pull ball back with sole, turn body 90 degrees, push away with inside',
        'Pull-cut: Fake shot, pull ball back behind standing leg with sole, cut 90 degrees with inside',
        'Drag back: 180 degree turn, drag ball straight back using sole of foot'
      ],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warmup preparation · Skipping · High knees · Carioca',
      detail: 'Dynamic stretching routine including: Skipping lap, High knees, Butt-kickers, Carioca, Forward lunge, Side lunge, Side squat, Knee to chest, Airplane, Toe touch, High kick.',
      points: [],
      badge: 'Warmup',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · Beat defender with moves · Score by dribbling past end line',
      detail: '10X20 yard area. Players in corners, blue player passes to red player. They play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender must win ball and score or force attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender to close down',
        'Approach with control and fakes, fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game (use poles to make the goals)',
      summary: 'Team vs team · 30 minutes · Compete against other teams',
      detail: '2V2 Game using poles to make the goals. For this exercise your team should go against one of the other teams. Play is continuous with quick transitions between offense and defense.',
      points: [
        'Dribble diagonally to create time and space',
        'Pass early and shoot early',
        'Quick transitions to defense and offense',
        'Look to combine with give-&-gos, overlaps, and through balls',
        'Be aware what defender is taking away and what he\'s giving you'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

