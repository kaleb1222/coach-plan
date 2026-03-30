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
      detail: 'Set up a 20-yard line. Players perform bear crawls for 10 yards, then inch worms for 10 yards. Return with lateral bounds (5 per leg), then carioca steps. Focus on controlled movements and proper form. Complete 2 rounds with 30-second rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Pac-Man Dribbling',
      summary: 'Dribble on grid lines · avoid getting tagged',
      detail: 'Create a 25x25 yard grid with cone markers forming a maze-like pattern. All players dribble their ball along the grid lines only. 2-3 players without balls are \'Pac-Man\' and try to tag the dribblers. Tagged players become Pac-Man. Switch roles every 90 seconds. Emphasize close ball control and awareness.',
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
      name: 'Rehearse Skill Moves in Open Area',
      summary: 'Practice side-step, scissors, step-over, hook turn, drag-back, pull-push, pull-cut',
      detail: 'Players practice each move in an open area. Coach demonstrates each move, players repeat 10 times each. Focus on side-step, scissors, step-over, plus new moves: hook turn, drag-back, pull-push, and pull-cut. Hook turn: using sole of foot on top of ball, turn 180 degrees. Pull-push: fake shot, pull ball back with sole, turn body 90 degrees, push away with inside of same foot. Pull-cut: fake shot, pull ball back behind standing leg with sole, cut 90 degrees with inside of same foot. Scissors: leap to side moving foot in front of ball, push ball opposite direction with outside of other foot.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up with skipping, high knees, butt-kickers, carioca, lunges',
      detail: 'Complete dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · Score by dribbling past end line · Use skill moves',
      detail: '10x20 yard area. Players in groups at opposite corners. Players move to center, blue passes to red, then 1v1 until ball goes out. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring at opposite end or forcing attacker out of bounds. Must use skill moves to beat defender.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start fakes immediately', 'Approach with control doing fakes', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · Beat 3 defenders in sequence · Use moves to escape',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past last end line. Must beat each defender in their square. Defenders start at back line of their square and cannot leave it. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
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
      name: 'Rehearse Skill Moves in Open Area',
      summary: 'Practice side-step, scissors, step-over, hook turn, drag-back, pull-push, pull-cut',
      detail: 'Players practice each move in an open area. Coach demonstrates each move, players repeat 10 times each. Focus on side-step, scissors, step-over, plus new moves: hook turn, drag-back, pull-push, and pull-cut. Hook turn: using sole of foot on top of ball, turn 180 degrees. Pull-push: fake shot, pull ball back with sole, turn body 90 degrees, push away with inside of same foot. Pull-cut: fake shot, pull ball back behind standing leg with sole, cut 90 degrees with inside of same foot. Scissors: leap to side moving foot in front of ball, push ball opposite direction with outside of other foot.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up with skipping, high knees, butt-kickers, carioca, lunges',
      detail: 'Complete dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '10x20 yard area · Score by dribbling past end line · Use skill moves',
      detail: '10x20 yard area. Players in groups at opposite corners. Players move to center, blue passes to red, then 1v1 until ball goes out. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring at opposite end or forcing attacker out of bounds. Must use skill moves to beat defender.',
      points: ['Accurate pass to feet', 'Good first touch - soft, short', 'Start fakes immediately', 'Approach with control doing fakes', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: '10x36 yard area · Beat 3 defenders in sequence · Use moves to escape',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. One attacker dribbles through and scores by dribbling past last end line. Must beat each defender in their square. Defenders start at back line of their square and cannot leave it. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces to take on defenders', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed', 'Control ball when entering next square'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

