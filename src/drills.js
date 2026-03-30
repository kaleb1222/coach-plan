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
      summary: 'Bear crawls · lateral bounds · hip openers · backpedal',
      detail: 'Set up cones 20 yards apart. Bear crawl 10 yards forward, then lateral bounds side to side for 10 yards. Walking hip openers back to start, then backpedal to finish. Focus on controlled movements and proper form. Repeat circuit 2-3 times.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Capture the Cone',
      summary: 'Teams steal cones · protect your pile · dribble only',
      detail: 'Two teams, each with a pile of cones in opposite corners. Players must dribble their ball to the other team\'s pile, steal one cone, and dribble back to add it to their pile. If tagged while stealing, return the cone and go back to start. Team with most cones after 3 minutes wins.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental dribbling skills & moves',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice all skill moves · Hook turn · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area (see video links below) - 15 minutes. Focus on side-step, scissors, step-over, hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times until mastered.',
      points: ['Demonstrate each move correctly', 'Players must master the mechanics', 'Use correct technique with shoe laces', 'Small soft touches with toe pointed down'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Battle to score by dribbling past end line · Beat defender',
      detail: '1v1 End Line Game - 15 minutes. 10x20 yard area. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line.',
      points: ['Accurate pass to the feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence · Score past end line',
      detail: 'Dribbling Gauntlet - 20 minutes. 10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line, must beat each defender.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Small sided game · Extra player advantage · Large goals',
      detail: '2V2 Game With Large Goals - 20 minutes. The team with the ball can have an extra player (pass a teammate in). Focus on dribbling skills in game context.',
      points: ['Use moves learned in practice', 'Create time and space', 'Beat defender 9 out of 10 times', 'Quick transitions'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental dribbling skills & moves',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse each of the moves in an open area',
      summary: 'Practice all skill moves · Hook turn · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area (see video links below) - 15 minutes. Focus on side-step, scissors, step-over, hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times until mastered.',
      points: ['Demonstrate each move correctly', 'Players must master the mechanics', 'Use correct technique with shoe laces', 'Small soft touches with toe pointed down'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Battle to score by dribbling past end line · Beat defender',
      detail: '1v1 End Line Game - 15 minutes. 10x20 yard area. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line.',
      points: ['Accurate pass to the feet', 'Good first touch - soft, short touch', 'Start doing fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders in sequence · Score past end line',
      detail: 'Dribbling Gauntlet - 20 minutes. 10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line, must beat each defender.',
      points: ['Dribble with shoelaces to take on defenders', 'Make your move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game (use poles to make the goals)',
      summary: 'Team vs team competition · Pole goals · Extended play',
      detail: '2V2 Game (use poles to make the goals) - 30 minutes. For this exercise your team should go against one of the other teams. Focus on applying dribbling skills in competitive game situations.',
      points: ['Apply moves learned in practice', 'Beat defenders in game context', 'Quick feet and small steps', 'Make defender react to you'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

