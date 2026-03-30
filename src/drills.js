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
      summary: 'Lateral bounds · hip openers · bear crawls · backpedal',
      detail: 'Set up 20-yard line. Players perform lateral bounds (jumping side to side on one foot, then the other) for 10 yards. Next, hip openers (walking while bringing knee up and rotating hip outward) for 10 yards. Then bear crawls (hands and feet, keep knees off ground) for 10 yards. Finish with backpedal for 10 yards. Rest 30 seconds, repeat 2-3 times.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble and avoid taggers · hold injured body parts',
      detail: '20x30 yard grid. All players dribble with a ball. 2-3 players are doctors (no ball). Remaining players dribble around avoiding doctors. When tagged by a doctor, player must hold the tagged body part (shoulder, knee, ankle) with one hand while continuing to dribble. If tagged again on different body part, hold both spots. Third tag sends player to hospital (outside grid) for 5 jumping jacks before returning. Rotate doctors every 90 seconds.',
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
      name: 'Rehearse moves in open area',
      summary: 'Side-step · scissors · step-over · hook turn · drag-back',
      detail: 'Rehearse each of the moves in an open area: side-step, scissors, step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Coach demonstrates each move, players repeat 10 times each.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defender · escape pressure · change direction',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player, then 1v1 battle. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch (soft, short)', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through sections',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders stay in their squares, score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can have extra player pass in',
      detail: '2v2 game with large goals. The team with the ball can have an extra player (pass a teammate in). Play continues until ball goes out of bounds.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse moves in open area',
      summary: 'Side-step · scissors · step-over · hook turn · drag-back',
      detail: 'Rehearse each of the moves in an open area: side-step, scissors, step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Coach demonstrates each move, players repeat 10 times each.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defender · escape pressure · change direction',
      detail: '10x20 yard area. Players start at opposite corners. Blue player passes to red player, then 1v1 battle. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch (soft, short)', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through sections',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders stay in their squares, score by winning ball and stopping it on front line.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Use poles for goals · team vs other teams',
      detail: '2V2 Game using poles to make the goals. For this exercise your team should go against one of the other teams. Play for 30 minutes.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

