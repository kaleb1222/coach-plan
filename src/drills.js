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
      detail: 'Set up 20-yard lines. Bear crawls for 10 yards, then inch worms back. Next, lateral bounds sideways for 10 yards each direction. Finish with carioca (grapevine) steps - face forward, step right foot over left, then left behind right, moving sideways. Keep hips square and arms out for balance. Complete 2 rounds.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble while avoiding taggers · hold injured body part',
      detail: 'All players dribble balls in 30x30 yard area. 2-3 players are "doctors" without balls who try to tag others. When tagged, player must hold that body part (shoulder, knee, ankle) with one hand while continuing to dribble. If tagged twice, player goes to "hospital" (sideline) until a doctor touches them to heal. Doctors can\'t be tagged. Switch doctors every 2 minutes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling fundamental skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice skill moves · side-step, scissors, step-over · hook turn, drag-back, pull-push, pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over moves from previous week, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Refer to video links provided. Each player should repeat each move 10 times.',
      points: ['Quick small touches with shoelaces', 'Keep turning in direction you\'re going', 'Lightning fast execution', 'Master mechanics before adding defenders'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · skipping, high knees, carioca · forward/side lunges',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · accurate passing · beat defender to score at end line',
      detail: '1v1 End Line Game in 10x20 yard area. Players start at opposite corners, blue player passes to red player, then they play 1v1. Score by dribbling with control past the opposite end line. Game over when ball goes out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: '2v2 scrimmage · team with ball can add extra player',
      detail: '2V2 Game With Large Goals. The team with the ball can have an extra player (pass a teammate in). Play until ball goes out of bounds or goal is scored.',
      points: ['Pass early when possible', 'Take what defender gives you', 'Quick transitions', 'Use overlaps and combinations'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling fundamental skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Moves in Open Area',
      summary: 'Practice skill moves · side-step, scissors, step-over · hook turn, drag-back, pull-push, pull-cut',
      detail: 'Rehearse each of the moves in an open area. Focus on side-step, scissors and step-over moves from previous week, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Refer to video links provided. Each player should repeat each move 10 times.',
      points: ['Quick small touches with shoelaces', 'Keep turning in direction you\'re going', 'Lightning fast execution', 'Master mechanics before adding defenders'],
      badge: 'Moves training',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · skipping, high knees, carioca · forward/side lunges',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, and high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · accurate passing · beat defender to score at end line',
      detail: '1v1 End Line Game in 10x20 yard area. Players start at opposite corners, blue player passes to red player, then they play 1v1. Score by dribbling with control past the opposite end line. Game over when ball goes out of bounds.',
      points: ['Accurate pass to feet', 'Good first touch - soft and short', 'Start fakes immediately', 'Fake one way, change direction, change speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat three defenders · dribble through zones · score at end line',
      detail: 'Dribbling Gauntlet in 10x36 yard area divided into three 10x12 sections. Three defenders each stay in their square. Attacker must beat each defender and score by dribbling past the last end line. Defenders score by winning ball and stopping it on front line of their square.',
      points: ['Dribble with shoelaces', 'Make move early, out of defender\'s reach', 'Change direction and accelerate away', 'Attack spaces behind defender with speed'],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
  ],
};

