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
      detail: 'Set up a 20-yard line. Players start with lateral bounds (jumping side to side with single leg landings). Next, carioca (grapevine) down and back. Then hip openers (leg swings across body). Finish with inch worms (walk hands forward to plank, walk feet to hands). Complete 2 rounds with 30 seconds rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · follow color commands · keep control',
      detail: 'All players dribble in a 20x20 yard grid. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slow with more touches, RED = stop with foot on ball. Add variations like PURPLE = juggle, BLUE = sit on ball, ORANGE = toe taps. Players who lose control or react slowly do 5 jumping jacks then rejoin.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling microcycle - fundamental skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse skill moves in open area',
      summary: 'Practice all moves · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area (see video links below) - 15 minutes. Focus on hook turn, drag-back, pull-push, and pull-cut moves. The coach demonstrates each move, players repeat it 10 times.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to reach end line · Use skill moves',
      detail: '15 minutes. 10X20 yard area. Players play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Must use skill moves to beat defender.',
      points: ['Accurate pass to feet', 'Good first touch', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders in sequence · Use moves to attack spaces',
      detail: '20 minutes. 10X36 yard area divided into three 10X12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders must stay in their squares.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Small sided game · Team with ball can pass teammate in',
      detail: '20 minutes. 2V2 Game With Large Goals. The team with the ball can have an extra player (pass a teammate in). Focus on using dribbling skills learned in practice.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling microcycle - fundamental skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse skill moves in open area',
      summary: 'Practice all moves · Hook turn · Drag-back · Pull-push · Pull-cut',
      detail: 'Rehearse each of the moves in an open area (see video links below) - 15 minutes. Focus on hook turn, drag-back, pull-push, and pull-cut moves. The coach demonstrates each move, players repeat it 10 times.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: '1v1 End Line Game',
      summary: 'Beat defender to reach end line · Use skill moves',
      detail: '15 minutes. 10X20 yard area. Players play 1v1 until ball goes out of bounds. Player with ball scores by dribbling with control past opposite end line. Must use skill moves to beat defender.',
      points: ['Accurate pass to feet', 'Good first touch', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders in sequence · Use moves to attack spaces',
      detail: '20 minutes. 10X36 yard area divided into three 10X12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line, must beat each defender. Defenders must stay in their squares.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game (use poles to make goals)',
      summary: 'Team vs team scrimmage · 30 minutes',
      detail: '30 minutes. 2V2 Game using poles to make the goals. For this exercise your team should go against one of the other teams. Focus on applying dribbling skills in game situation.',
      points: [],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

