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
      summary: 'Carioca · hip openers · lateral bounds · backpedal',
      detail: 'Set up cones 15 yards apart. Players perform carioca (side-stepping crossovers) down and back. Next, hip openers - lift knee across body, open hip outward, step forward. Then lateral bounds - jump side to side with single leg landings. Finish with controlled backpedal focusing on staying low and pumping arms.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble around · freeze when music stops · grab any ball',
      detail: 'Place one less ball than number of players in center circle. Players dribble around the area. When coach stops "music" (or blows whistle), players must quickly control any ball and freeze. Player without a ball does 5 toe taps then rejoin. Reset and repeat. Keep it fun and energetic!',
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
      name: 'Rehearse Skill Moves in Open Area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Rehearse each of the moves in an open area (see video links). Focus on hook turn, drag-back, pull-push, and pull-cut. The coach demonstrates each move, players repeat it 10 times. Spend 15 minutes on this.',
      points: [
        'Use correct technique - small soft touches with shoe laces',
        'Keep toe straight down, quick feet and small steps',
        'Make the defender react to you, not the other way around',
        'Players must master the mechanics to beat defenders 9 out of 10 times'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to score by dribbling past end line',
      detail: '10x20 yard area. Players pass and play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender wins by forcing attacker out of bounds or winning ball and scoring.',
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
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through 3 defenders · beat each one in sequence',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders start at back line of their squares and cannot leave their sections.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed'
      ],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can have extra player · pass teammate in',
      detail: '20x30 yard area. Coach passes to far corner, receiver dribbles diagonally, teammate overlaps. Two defenders come in. Play continuous until ball out of bounds. Team with ball can have an extra player (pass a teammate in).',
      points: [
        'Dribble diagonally to create time and space',
        'Pass early, shoot early',
        'Quick transitions to defense and offense',
        'Look to combine with give-&-gos, overlaps, through balls'
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
      name: 'Rehearse Skill Moves in Open Area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Rehearse each of the moves in an open area (see video links). Focus on hook turn, drag-back, pull-push, and pull-cut. The coach demonstrates each move, players repeat it 10 times. Spend 15 minutes on this.',
      points: [
        'Use correct technique - small soft touches with shoe laces',
        'Keep toe straight down, quick feet and small steps',
        'Make the defender react to you, not the other way around',
        'Players must master the mechanics to beat defenders 9 out of 10 times'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to score by dribbling past end line',
      detail: '10x20 yard area. Players pass and play 1v1 until ball goes out of bounds. Score by dribbling with control past the opposite end line. Defender wins by forcing attacker out of bounds or winning ball and scoring.',
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
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through 3 defenders · beat each one in sequence',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders start at back line of their squares and cannot leave their sections.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed'
      ],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game (use poles for goals)',
      summary: 'Team should go against one of the other teams',
      detail: '20x30 yard area using poles to make the goals. Coach passes to far corner, receiver dribbles diagonally, teammate overlaps. Two defenders come in. Play continuous until ball out of bounds. For this exercise your team should go against one of the other teams.',
      points: [
        'Dribble diagonally to create time and space',
        'Pass early, shoot early',
        'Quick transitions to defense and offense',
        'Look to combine with give-&-gos, overlaps, through balls'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

