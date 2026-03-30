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
      summary: 'Lateral bounds · carioca · hip openers · inch worms',
      detail: 'Set up cones 15 yards apart. Start with lateral bounds - explosive jumps side to side with soft landings. Next, carioca (grapevine) facing forward while moving sideways, crossing one foot over and behind the other. Then hip openers - high knee lifts while rotating knee out to open hip. Finish with inch worms - walk hands out to plank, walk feet to hands, repeat.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble around grid · if tagged hold body part · 3 tags = hospital',
      detail: 'All players dribble in 20x20 yard grid. 2-3 players are "doctors" without balls who try to tag dribblers. When tagged, player must hold that body part (shoulder, knee, elbow) with one hand while continuing to dribble. If tagged 3 times, player goes to "hospital" (outside grid) and does 5 toe taps before returning. Switch doctors every 2 minutes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental dribbling skills · Beat defenders',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors, step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. Use correct technique: small soft touches with shoe laces, quick feet and small steps.',
      points: ['Take small soft touches with shoe laces', 'Quick feet and small steps for quick reactions', 'Make defender react to you', 'Change direction and speed to escape pressure'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defender · dribble past end line to score',
      detail: '10x20 yard area. Players start at opposite corners. Blue passes to red, then 1v1 until ball goes out. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start faking immediately', 'Fake one way, change direction and speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence · score at end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders each in their square. Attacker must dribble through and beat each defender to score at end line. Defenders start at back line of their square and cannot leave their area.',
      points: ['Dribble with shoelaces when taking on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can add extra player · pass teammate in',
      detail: '2v2 game with large goals. Special rule: the team with the ball can have an extra player (pass a teammate in). Focus on quick combinations, give-and-gos, overlaps, and through balls. Play is continuous.',
      points: ['Pass early when you have advantage', 'Shoot early when opportunity arises', 'Quick transitions to defense and offense', 'Take what the defender gives you'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental dribbling skills · Beat defenders',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors, step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. Use correct technique: small soft touches with shoe laces, quick feet and small steps.',
      points: ['Take small soft touches with shoe laces', 'Quick feet and small steps for quick reactions', 'Make defender react to you', 'Change direction and speed to escape pressure'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defender · dribble past end line to score',
      detail: '10x20 yard area. Players start at opposite corners. Blue passes to red, then 1v1 until ball goes out. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start faking immediately', 'Fake one way, change direction and speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence · score at end line',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders each in their square. Attacker must dribble through and beat each defender to score at end line. Defenders start at back line of their square and cannot leave their area.',
      points: ['Dribble with shoelaces when taking on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Use poles for goals · play against other teams',
      detail: '2v2 game using poles to make goals. Teams should play against one of the other teams for competition. Focus on dribbling to escape pressure, create time and space for safe passes or shots. Emphasize quick combinations and transitions.',
      points: ['Dribble diagonally to create time and space', 'Look to combine with give-and-gos and overlaps', 'Be aware what defender is taking away', 'Quick transitions between attack and defense'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

