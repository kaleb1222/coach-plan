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
      summary: 'Hip openers · lateral bounds · inch worms · backpedal',
      detail: 'Set up 20-yard course. Players perform hip openers (leg swings forward/back and side to side) for 30 seconds, then lateral bounds across width of field (explosive side-to-side jumps), inch worms (walk hands forward to plank, walk feet to hands) for 10 reps, and backpedal the length maintaining good posture. Complete 2 rounds with 30-second rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble while avoiding tags · hold injured body parts',
      detail: 'All players dribble in 25x25 yard grid. 2-3 players are doctors without balls. When tagged by a doctor, player must hold the tagged body part (shoulder, knee, ankle) with one hand while continuing to dribble. If tagged again while injured, player must hold both spots and can only be healed by another injured player giving them a high-five. Switch doctors every 2 minutes.',
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
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area: hook turn, drag-back, pull-push, and pull-cut. Also review side-step, scissors and step-over from previous sessions. Each move should be practiced 10 times with proper technique.',
      points: [
        'Use correct technique - contact ball with shoe laces, toe pointed down',
        'Quick feet and small steps for quick reactions',
        'Master mechanics before attempting against defenders',
        'Change direction and speed to escape pressure'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to reach opposite end line',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player, then 1v1 battle begins. Score by dribbling with control past the opposite end line. Defender wins by stealing ball and scoring or forcing attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start fakes immediately, don\'t wait for defender to close down',
        'Approach with control, fake one way, change direction and speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence to score',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attackers must dribble through and score by beating each defender and crossing the final end line. Defenders stay in their squares and score by winning ball and stopping it on front line of their square.',
      points: [
        'Dribble with shoelaces when taking on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Small-sided game with extra player advantage',
      detail: '2v2 game with large goals. The team with the ball can have an extra player (pass a teammate in). Play until ball goes out of bounds or goal is scored.',
      points: [
        'Use numerical advantage effectively',
        'Quick combination play',
        'Support teammate with ball',
        'Quick transitions between attack and defense'
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
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut',
      detail: 'Rehearse each of the moves in an open area: hook turn, drag-back, pull-push, and pull-cut. Also review side-step, scissors and step-over from previous sessions. Each move should be practiced 10 times with proper technique.',
      points: [
        'Use correct technique - contact ball with shoe laces, toe pointed down',
        'Quick feet and small steps for quick reactions',
        'Master mechanics before attempting against defenders',
        'Change direction and speed to escape pressure'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to reach opposite end line',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player, then 1v1 battle begins. Score by dribbling with control past the opposite end line. Defender wins by stealing ball and scoring or forcing attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start fakes immediately, don\'t wait for defender to close down',
        'Approach with control, fake one way, change direction and speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence to score',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attackers must dribble through and score by beating each defender and crossing the final end line. Defenders stay in their squares and score by winning ball and stopping it on front line of their square.',
      points: [
        'Dribble with shoelaces when taking on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Small-sided game using poles for goals',
      detail: '2v2 game using poles to make goals. Teams should play against other teams in the program. Focus on applying dribbling skills learned in practice within game context.',
      points: [
        'Apply learned moves in game situations',
        'Quick transitions between attack and defense',
        'Support teammate with ball',
        'Use dribbling to create time and space'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

