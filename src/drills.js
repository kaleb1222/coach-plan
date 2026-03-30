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
      summary: 'Bear crawls · inch worms · hip circles · carioca',
      detail: 'Set up 20-yard grid. Bear crawls across (hands and feet only). Inch worms back (walk hands out to plank, walk feet to hands). Hip circles at midline (10 each direction). Finish with carioca runs along sideline (crossover steps, face same direction).',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble around · freeze when music stops',
      detail: 'Every player has a ball in 20x20 grid. Players dribble freely while music plays. When music stops, players must freeze with ball under control (foot on ball). Last player to freeze does 5 toe taps. Add variations: freeze in different positions (sitting, one foot, etc.).',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut',
      detail: 'Open area or 20x20 yard area. Coach demonstrates each move, players repeat 10 times. Focus on hook turn (180 degree turn using sole), pull-push (fake shot, pull back, turn 90 degrees, push with inside), pull-cut (fake shot, pull behind standing leg, cut 90 degrees), and drag-back (180 degree turn dragging straight back).',
      points: ['Use correct technique - small soft touches with shoelaces', 'Quick feet and small steps to react quickly', 'Make defender react to you', 'Change direction and speed to escape pressure'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: '10x20 area · beat defender to reach end line',
      detail: '10X20 yard area. Players pass to start 1v1 battle. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds. Game ends when ball goes out.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: '10x36 area · beat 3 defenders in sections',
      detail: '10X36 yard area divided into three 10X12 sections with three defenders. Attacker must beat each defender in their square to score by reaching end line. Defenders start at back line and cannot leave their square. Defenders score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Control ball when entering next square'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can add extra player',
      detail: '2V2 game with large goals. Special rule: the team with possession can have an extra player pass a teammate in to create temporary numerical advantage. Focus on dribbling, quick combinations, and transitions.',
      points: ['Use skill moves to beat defenders', 'Quick transitions between attack and defense', 'Take advantage of numerical superiority', 'Shoot early when opportunity arises'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut',
      detail: 'Open area or 20x20 yard area. Coach demonstrates each move, players repeat 10 times. Focus on hook turn (180 degree turn using sole), pull-push (fake shot, pull back, turn 90 degrees, push with inside), pull-cut (fake shot, pull behind standing leg, cut 90 degrees), and drag-back (180 degree turn dragging straight back).',
      points: ['Use correct technique - small soft touches with shoelaces', 'Quick feet and small steps to react quickly', 'Make defender react to you', 'Change direction and speed to escape pressure'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: '10x20 area · beat defender to reach end line',
      detail: '10X20 yard area. Players pass to start 1v1 battle. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds. Game ends when ball goes out.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: '10x36 area · beat 3 defenders in sections',
      detail: '10X36 yard area divided into three 10X12 sections with three defenders. Attacker must beat each defender in their square to score by reaching end line. Defenders start at back line and cannot leave their square. Defenders score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Control ball when entering next square'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Use poles for goals · compete against other teams',
      detail: '2V2 game using poles to make goals. Teams should play against one of the other teams for competition. Focus on applying skill moves in game situations and quick transitions between attack and defense.',
      points: ['Execute skill moves under pressure', 'Quick transitions to attack and defense', 'Compete with intensity', 'Apply moves learned in practice'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf'
    }
  ]
};

