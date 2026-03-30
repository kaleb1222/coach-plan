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
      summary: 'Bear crawls · inch worms · lateral bounds · carioca',
      detail: 'Set up 20-yard lines. Bear crawl to first cone (5 yards), inch worms to second cone (hands walk forward, feet follow), lateral bounds side-to-side to third cone (jump sideways off one foot), finish with carioca (side-stepping crossover steps). Walk back and repeat 2-3 times.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble around grid · freeze when music stops',
      detail: 'All players dribble freely in 20x20 yard grid with music playing. When music stops (or coach shouts "freeze"), players must stop their ball with sole of foot and freeze like a statue. Players who don\'t freeze quickly do 5 toe taps. Add variations: freeze in different poses, freeze with ball between feet, or freeze while balancing on one foot.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling & Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice moves in open area · side-step · scissors · step-over · hook turn',
      detail: 'Rehearse each of the moves in an open area: side-step, scissors, step-over, hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. Focus on proper technique with small soft touches using shoelaces.',
      points: ['Demonstrate each move correctly', 'Use correct technique - shoelaces with toe down', 'Small soft touches and quick feet', 'Practice all moves until mastered'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to reach end line · accurate passing · first touch',
      detail: '10x20 yard area. Players line up on opposite corners. Blue passes to red, then 1v1 battle. Score by dribbling past opposite end line. Defender wins by stealing ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders in sequence · change direction · accelerate away',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders each in their square. Attacker must beat each defender to score by dribbling past end line. Defenders score by winning ball and stopping it on their front line.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team possession · extra player advantage · large goals',
      detail: '2v2 game with large goals. The team with the ball can have an extra player (pass a teammate in). Focus on quick combinations, overlaps, and early shooting.',
      points: ['Team with ball gets extra player', 'Quick combinations and overlaps', 'Shoot early when opportunity arises', 'Quick transitions'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling & Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice moves in open area · side-step · scissors · step-over · hook turn',
      detail: 'Rehearse each of the moves in an open area: side-step, scissors, step-over, hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. Focus on proper technique with small soft touches using shoelaces.',
      points: ['Demonstrate each move correctly', 'Use correct technique - shoelaces with toe down', 'Small soft touches and quick feet', 'Practice all moves until mastered'],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to reach end line · accurate passing · first touch',
      detail: '10x20 yard area. Players line up on opposite corners. Blue passes to red, then 1v1 battle. Score by dribbling past opposite end line. Defender wins by stealing ball and scoring or forcing attacker out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders in sequence · change direction · accelerate away',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders each in their square. Attacker must beat each defender to score by dribbling past end line. Defenders score by winning ball and stopping it on their front line.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Team vs team competition · pole goals · tactical play',
      detail: '2v2 game using poles to make goals. Your team should go against one of the other teams. Focus on combination play with give-and-gos, overlaps, and through balls.',
      points: ['Use poles for goals', 'Play against other teams', 'Look for give-and-gos and overlaps', 'Be aware what defender gives you'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

