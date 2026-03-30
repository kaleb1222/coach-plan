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
      summary: 'Hip openers · lateral bounds · inch worms',
      detail: 'Set up 20-yard line. Players perform hip openers (leg swings forward/back and side to side), then lateral bounds across the field (explosive side-to-side jumps), followed by inch worms (walk hands out to plank, walk feet to hands). Complete 2 rounds with light jog recovery between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · follow color commands',
      detail: 'All players dribble in 20x20 grid. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slow with close touches, RED = stop ball with sole and freeze. Add fun variations like PURPLE = spin move, BLUE = switch feet quickly. Keep players moving for 3-4 minutes with quick command changes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling - Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Open area rehearsal of skill moves. Focus on hook turn (sole of foot 180° turn), drag-back (pull ball straight back), pull-push (fake shot, pull back 90°, push with inside), and pull-cut (fake shot, pull behind standing leg, cut 90°). Players repeat each move 10 times with proper technique.',
      points: [
        'Use correct technique - small soft touches with shoe laces',
        'Quick feet and small steps for quick reactions',
        'Make defender react to you, not the other way around',
        'Players must master these moves to beat defenders 9 out of 10 times'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Battle to score by dribbling past opposite end line',
      detail: '10x20 yard area. Players line up in corners. Blue passes to red, then 1v1 battle begins. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds. Game ends when ball goes out.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately - don\'t wait for defender',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders in sequence to score past end line',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attacker must beat each defender in their square to score by dribbling past final end line. Defenders start at back line of their square and cannot leave it. Defenders score by winning ball and stopping it on front line.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can add extra player for advantage',
      detail: '2v2 game with large goals. Special rule: the team with possession can have an extra player join (pass a teammate in) to create numerical advantage. Focus on quick combination play and maintaining possession.',
      points: [
        'Use numerical advantage effectively',
        'Quick transitions between attack and defense',
        'Look for combination plays and overlaps',
        'Take what the defender gives you'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling - Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Open area rehearsal of skill moves. Focus on hook turn (sole of foot 180° turn), drag-back (pull ball straight back), pull-push (fake shot, pull back 90°, push with inside), and pull-cut (fake shot, pull behind standing leg, cut 90°). Players repeat each move 10 times with proper technique.',
      points: [
        'Use correct technique - small soft touches with shoe laces',
        'Quick feet and small steps for quick reactions',
        'Make defender react to you, not the other way around',
        'Players must master these moves to beat defenders 9 out of 10 times'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Battle to score by dribbling past opposite end line',
      detail: '10x20 yard area. Players line up in corners. Blue passes to red, then 1v1 battle begins. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds. Game ends when ball goes out.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately - don\'t wait for defender',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders in sequence to score past end line',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attacker must beat each defender in their square to score by dribbling past final end line. Defenders start at back line of their square and cannot leave it. Defenders score by winning ball and stopping it on front line.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Use poles for goals · team vs team competition',
      detail: '2v2 game using poles to make goals. Teams should play against other teams for competition. Focus on quick combination play, transitions, and tactical awareness. Longer duration allows for more tactical development.',
      points: [
        'Quick transitions to defense and offense',
        'Look to combine with give-and-gos and overlaps',
        'Be aware what defender is taking away vs giving you',
        'Shoot early when opportunity presents'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

