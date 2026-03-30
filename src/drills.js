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
      summary: 'Carioca · hip openers · lateral bounds · bear crawls',
      detail: 'Set up cones 20 yards apart. Players perform carioca (side steps crossing feet) to first cone, hip openers (leg swings forward/back, side to side) at cone, lateral bounds (jumping side to side on one foot then other) to next cone, then bear crawls (hands and feet, knees off ground) back to start. Complete 2-3 rounds with 30 seconds rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in area · respond to color commands',
      detail: 'All players dribble freely in 20x20 yard area. Coach calls out colors: GREEN = dribble fast, YELLOW = slow dribbling with small touches, RED = stop ball with foot and freeze. Add variations like BLUE = sit on ball, ORANGE = juggle ball with hands. Keep players moving and reacting quickly to commands for 3-4 minutes.',
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
      summary: 'Practice side-step · scissors · step-over · hook turn',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use an open area or 20x20 yard area. Coach demonstrates each move, players repeat it 10 times. Focus on mastering the mechanics of each move.',
      points: [
        'Demonstrate each move correctly or use video links',
        'Players repeat each move 10 times',
        'Focus on correct technique and execution',
        'These moves should be part of every pre-game warmup'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up with skipping · high knees · carioca · lunges',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battle · beat defender · score by crossing end line',
      detail: '10x20 yard area. Players start from opposite corners. Blue player passes to red player, then they play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender can win ball and score by dribbling past opposite end line or forcing attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender',
        'Approach defender with control and fakes',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: '2v2 with extra player · team with ball gets +1 player',
      detail: '2V2 Game with large goals. The team with the ball can have an extra player (pass a teammate in). Focus on combination play and quick transitions.',
      points: [
        'Team with ball gets extra player advantage',
        'Focus on combination play',
        'Quick transitions between attack and defense',
        'Look for give-&-gos, overlaps, and through balls'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
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
      summary: 'Practice side-step · scissors · step-over · hook turn',
      detail: 'Rehearse the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Use an open area or 20x20 yard area. Coach demonstrates each move, players repeat it 10 times. Focus on mastering the mechanics of each move.',
      points: [
        'Demonstrate each move correctly or use video links',
        'Players repeat each move 10 times',
        'Focus on correct technique and execution',
        'These moves should be part of every pre-game warmup'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up with skipping · high knees · carioca · lunges',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battle · beat defender · score by crossing end line',
      detail: '10x20 yard area. Players start from opposite corners. Blue player passes to red player, then they play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender can win ball and score by dribbling past opposite end line or forcing attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately - don\'t wait for defender',
        'Approach defender with control and fakes',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · dribble through sections · score',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past the last end line. Must beat each defender. Defenders start at back line of their squares and cannot leave their sections. Defenders score by winning ball and stopping it on front line.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

