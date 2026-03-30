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
      summary: 'Lateral bounds · carioca · hip openers · inch worms',
      detail: 'Players perform 4 dynamic movements across 20-yard grid. Start with lateral bounds (side-to-side jumps), then carioca (crossover steps), hip openers (leg swings forward/back), and finish with inch worms (walk hands out to plank, walk feet to hands). Rest 30 seconds between exercises. Focus on controlled movement and proper form.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Ball Tag',
      summary: 'Dribble and tag other players · avoid being tagged',
      detail: 'All players dribble their ball in 30x20 yard grid. Players try to tag others with their hand while maintaining control of their own ball. When tagged, player does 5 toe taps then rejoins. Game runs for 2-3 minutes with different taggers. Emphasize close ball control, awareness, and quick changes of direction.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling · Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice moves in open area · hook turn, drag-back, pull-push, pull-cut',
      detail: 'Players practice all skill moves in an open area for 15 minutes. Focus on hook turn, drag-back, pull-push, and pull-cut. Each move should be repeated 10 times. Coach demonstrates each move or plays the videos. Players must use correct technique: small soft touches with shoe laces, quick feet and small steps.',
      points: [
        'Demonstrate each move correctly or use video links',
        'Each player repeats each move 10 times',
        'Use correct technique: shoe laces, toe straight down',
        'Quick feet and small steps for quick reactions'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: '1v1 battles · score by dribbling past end line',
      detail: '15 minutes in 10x20 yard area. Players with balls on one corner, players without on far corner. Blue player passes to red player, then 1v1 battle begins. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through sections to score',
      detail: '20 minutes in 10x36 yard area divided into three 10x12 sections with three defenders. Attacker must dribble through and score by dribbling past last end line, beating each defender along the way. Defenders start at back line of their squares and cannot leave their sections. Defenders score by winning ball and stopping it on front line.',
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
      summary: 'Team possession · extra player advantage allowed',
      detail: '20 minutes of 2v2 with large goals. The team with the ball can have an extra player (pass a teammate in). Focus on quick combinations, overlaps, and through balls. Players should dribble diagonally to create time and space, pass early, and shoot early.',
      points: [
        'Team with ball can bring in extra player',
        'Dribble diagonally to create time and space',
        'Look for give-and-gos, overlaps, through balls',
        'Quick transitions between offense and defense'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling · Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice moves in open area · hook turn, drag-back, pull-push, pull-cut',
      detail: 'Players practice all skill moves in an open area for 15 minutes. Focus on hook turn, drag-back, pull-push, and pull-cut. Each move should be repeated 10 times. Coach demonstrates each move or plays the videos. Players must use correct technique: small soft touches with shoe laces, quick feet and small steps.',
      points: [
        'Demonstrate each move correctly or use video links',
        'Each player repeats each move 10 times',
        'Use correct technique: shoe laces, toe straight down',
        'Quick feet and small steps for quick reactions'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: '1v1 battles · score by dribbling past end line',
      detail: '15 minutes in 10x20 yard area. Players with balls on one corner, players without on far corner. Blue player passes to red player, then 1v1 battle begins. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through sections to score',
      detail: '20 minutes in 10x36 yard area divided into three 10x12 sections with three defenders. Attacker must dribble through and score by dribbling past last end line, beating each defender along the way. Defenders start at back line of their squares and cannot leave their sections. Defenders score by winning ball and stopping it on front line.',
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
      detail: '30 minutes of 2v2 using poles to make goals. Teams should go against one of the other teams for competitive play. Focus on quick combinations, overlaps, and through balls. Players should dribble diagonally to create time and space, pass early, and shoot early.',
      points: [
        'Use poles to make goals',
        'Team should play against another team',
        'Dribble diagonally to create time and space',
        'Look for give-and-gos, overlaps, through balls'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

