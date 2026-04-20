// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Apr 20';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Bear crawls · inch worms · lateral bounds · backpedal',
      detail: 'Set up a 20-yard line. Players start with bear crawls for 10 yards (hands and feet only, knees off ground). Then inch worms for 10 yards (walk hands forward to plank, walk feet to hands). Return with lateral bounds (big side steps, land on outside foot) for 10 yards each direction. Finish with backpedal for 20 yards, staying low and pumping arms.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Capture the Cone',
      summary: 'Two teams · dribble to center · steal opponent cones',
      detail: 'Create a 30x20 grid with a center line. Place 5 cones on each end line. Split players into two teams, each with a ball. On "GO", players dribble across to the opponent\'s end line, grab a cone, and dribble back without losing their ball. If tagged by a defender while carrying a cone, they must return it and start over. First team to capture all opponent cones wins. Play 3-minute rounds.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Shooting technique & coordination',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · toe touches · knee to armpit · skipping · high kicks',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently', 'These exercises will produce excellent coordination over the whole season and dramatically improve shooting'],
      badge: 'Shooting prep',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · touch to the side · shoot side-on',
      detail: 'Shooting variation focusing on dribbling, touching the ball to the side, and shooting from a side-on position.',
      points: ['Approach the ball at an angle, side-on to the goal', 'Plant the non-kicking foot side by side with the ball', 'Big back swing, with bent knee', 'Strike the ball with the laces, ankle locked'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf'
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · touch to the side · shoot',
      detail: 'Shooting variation focusing on dribbling, touching the ball to the side, and shooting.',
      points: ['Lock the ankle joint solid for the most power, pointing the toes down', 'Snap the knee joint at the moment of contact', 'Chest leaning forward at the moment of contact', 'Full forward leg swing, so your plant foot comes off the ground'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf'
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn',
      detail: 'Shooting variation focusing on receiving the ball and shooting while turning.',
      points: ['Swing your leg diagonally, bringing your knee under the opposite armpit', 'Swing the kicking leg in a straight line toward the target - that is how you control the direction of the shot'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced shooting & game situations',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · toe touches · knee to armpit · skipping · high kicks',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently', 'These exercises will produce excellent coordination over the whole season and dramatically improve shooting'],
      badge: 'Shooting prep',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff',
      detail: 'Shooting variation focusing on receiving a layoff pass and shooting. You can repeat variations 2, 1 and 3 as alternatives.',
      points: ['Get open - pop away from the defender to create time and space', 'Good first touch - small touch, turning away from pressure', 'Create time and space in order to shoot'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf'
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · give & go · shot',
      detail: 'Shooting variation focusing on double pass combination play, give and go movement, and finishing with a shot.',
      points: ['Escape the pressure from a defender by dribbling to space', 'Four ways to escape: touch to the side, skill move, turn and face away, sole delay', 'Accurate pass - pass to the feet, on the ground and sharp'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf'
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 shooting game variations',
      detail: 'Game-based shooting practice with multiple variations: 1v1, 2v1, and 2v2 situations leading to shooting opportunities.',
      points: ['Attackers must always be aware what options the defenders are taking away', 'Take what they give you', 'Shooting is basically passing into the goal - same principles apply'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf'
    }
  ]
};

