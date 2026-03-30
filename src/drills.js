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
      detail: 'Set up 20-yard line. Players perform each movement for 10 yards: Hip openers (leg swings forward/back and side to side), lateral bounds (jump side to side with good landing), inch worms (walk hands out to plank, walk feet to hands), finish with backpedal maintaining good posture. Rest 30 seconds between rounds, complete 2 rounds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble in grid · tagged players go to hospital · teammates rescue',
      detail: 'Set up 20x20 grid. All players dribble inside with a ball. 2-3 players are taggers (no ball). When tagged, player must go to designated "hospital" corner and perform 5 toe taps before returning. Teammates can rescue hospital players by dribbling to them and giving high-five. Switch taggers every 60 seconds. Play for 3-4 rounds.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling & fundamental skills development',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse moves in open area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Rehearse each of the moves in an open area. Focus on the four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. Hook turn: Using the sole of the foot on top of the ball, turn 180 degrees. Pull-push: Fake shot, pull ball back with sole, turn body 90 degrees, push ball away with inside of same foot. Pull-cut: Fake shot, pull ball back behind standing leg with sole, cut ball 90 degrees behind standing leg with inside of same foot. Scissors: Take a leap to the side moving foot in front of ball, push ball in opposite direction using outside of other foot.',
      points: ['Master the mechanics of each move', 'Execute moves against defenders', 'Time moves correctly', 'Change direction and speed to escape pressure'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'One-on-one battles · score by dribbling past end line',
      detail: '10x20 yard area. Players line up on opposite corners. Blue player passes to red player in center. Play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender must win ball and score by dribbling past opposite end line, or force attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start doing fakes immediately', 'Approach with control while faking', 'Change direction and speed to beat defender'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through sections',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past last end line. Must beat each defender in their square. Defenders start at back line of their squares and cannot leave their sections. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Small-sided game · team with ball gets extra player',
      detail: '2v2 game with large goals. The team with the ball can have an extra player (pass a teammate in). Play is continuous until ball goes out of bounds.',
      points: ['Pass early when possible', 'Shoot early when opportunity arises', 'Quick transitions to defense and offense', 'Look for give-and-gos and overlaps'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling & fundamental skills development',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse moves in open area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Rehearse each of the moves in an open area. Focus on the four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. Hook turn: Using the sole of the foot on top of the ball, turn 180 degrees. Pull-push: Fake shot, pull ball back with sole, turn body 90 degrees, push ball away with inside of same foot. Pull-cut: Fake shot, pull ball back behind standing leg with sole, cut ball 90 degrees behind standing leg with inside of same foot. Scissors: Take a leap to the side moving foot in front of ball, push ball in opposite direction using outside of other foot.',
      points: ['Master the mechanics of each move', 'Execute moves against defenders', 'Time moves correctly', 'Change direction and speed to escape pressure'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'One-on-one battles · score by dribbling past end line',
      detail: '10x20 yard area. Players line up on opposite corners. Blue player passes to red player in center. Play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Defender must win ball and score by dribbling past opposite end line, or force attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start doing fakes immediately', 'Approach with control while faking', 'Change direction and speed to beat defender'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through sections',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past last end line. Must beat each defender in their square. Defenders start at back line of their squares and cannot leave their sections. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game (use poles for goals)',
      summary: 'Small-sided game · team vs team competition',
      detail: '2v2 game using poles to make the goals. For this exercise your team should go against one of the other teams. Play is continuous until ball goes out of bounds.',
      points: ['Pass early when possible', 'Shoot early when opportunity arises', 'Quick transitions to defense and offense', 'Look for give-and-gos and overlaps'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

