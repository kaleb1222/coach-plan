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
      detail: 'Set up 20-yard line. Players start with bear crawls for 10 yards (hands and feet, crawling forward). At halfway point, transition to inch worms - hands walk forward while keeping legs straight, then walk feet to hands. Return with lateral bounds (jumping side to side) for 10 yards, then backpedal to start. Complete 2-3 rounds with 30 seconds rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · follow color commands · keep ball close',
      detail: 'All players dribble in 20x20 yard grid. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slow with close touches, RED = stop with foot on ball and freeze. Add variations: PURPLE = sit on ball, BLUE = juggle ball with hands, ORANGE = dribble backwards. Players who don\'t follow commands quickly do 5 toe taps. Play for 4-5 minutes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Shooting technique & power development',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · toe touches · knee to armpit · skipping · power kicks',
      detail: 'Special dynamic stretching to prepare for shooting. 1) All players lined up side by side 2) Carioca - 30 yards 3) Walking, raise one arm horizontally, touch opposite toes to fingertips at each step - 30 yards 4) Walking, raise knee and touch to opposite armpit, with opposite arm down in front of knee - 30 yards 5) Skipping - high knees, big arm swings, 30 yards, two laps. Make sure they are raising opposite knees and arms 6) High Kick - jogging pace, swing and kick imaginary ball with maximum power. Leg swing should be diagonal, bringing knee under opposite armpit. Swing as high as possible, lifting off the ground - 30 yards, 3 laps.',
      points: [
        'Most players can\'t shoot well due to lack of coordination, not muscle strength',
        'These exercises produce excellent coordination over the season',
        'Will dramatically improve their shooting when done every practice'
      ],
      badge: 'Warmup',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · touch to the side · shoot side-on',
      detail: 'Shooting variation focused on dribbling, touching the ball to the side, and shooting while positioned side-on to the goal.',
      points: [
        'Approach the ball at an angle, side-on to the goal',
        'Plant non-kicking foot side by side with ball, toe pointing towards target',
        'Big back swing with bent knee, lock ankle solid for power',
        'Strike ball with laces, snap knee joint at contact'
      ],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf'
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · touch to the side · shoot',
      detail: 'Shooting variation emphasizing the dribble, touch to the side technique, and shooting with proper body positioning.',
      points: [
        'Chest leaning forward at moment of contact',
        'Full forward leg swing so plant foot comes off ground',
        'Swing leg diagonally, bringing knee under opposite armpit',
        'Swing kicking leg in straight line toward target for direction control'
      ],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf'
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn · body shape · accuracy',
      detail: 'Shooting variation focused on shooting while turning, emphasizing proper body shape and accuracy when shooting on the turn.',
      points: [
        'Create time and space before shooting',
        'Good first touch to set up the shot',
        'Escape pressure by dribbling to space',
        'Shooting is basically passing into the goal - same principles apply'
      ],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced shooting & game application',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · toe touches · knee to armpit · skipping · power kicks',
      detail: 'Special dynamic stretching to prepare for shooting. 1) All players lined up side by side 2) Carioca - 30 yards 3) Walking, raise one arm horizontally, touch opposite toes to fingertips at each step - 30 yards 4) Walking, raise knee and touch to opposite armpit, with opposite arm down in front of knee - 30 yards 5) Skipping - high knees, big arm swings, 30 yards, two laps. Make sure they are raising opposite knees and arms 6) High Kick - jogging pace, swing and kick imaginary ball with maximum power. Leg swing should be diagonal, bringing knee under opposite armpit. Swing as high as possible, lifting off the ground - 30 yards, 3 laps.',
      points: [
        'Most players can\'t shoot well due to lack of coordination, not muscle strength',
        'These exercises produce excellent coordination over the season',
        'Will dramatically improve their shooting when done every practice'
      ],
      badge: 'Warmup',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff · combination play',
      detail: 'Shooting variation focused on shooting off the layoff pass, emphasizing combination play and finishing. Can repeat variations 2, 1 and 3 as alternatives.',
      points: [
        'Get open - pop away from defender to create time and space',
        'Good first touch turning away from pressure',
        'Take what the defenders give you',
        'Pass must be on ground and sharp - no slow balls'
      ],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf'
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · give and go · shot',
      detail: 'Advanced shooting variation involving double pass combination, give and go movement, and finishing with a shot.',
      points: [
        'The cue to make a run is when player with ball takes preparation touch and looks up',
        'The cue to pass is when the runner starts the run - run comes first',
        'When passing to runner, pass so ball meets the feet',
        'Always pass to the feet unless runner is making a run'
      ],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf'
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 shooting games · multiple variations',
      detail: 'Game-based shooting practice with multiple variations: 1v1, 2v1, and 2v2 situations. Players practice shooting under pressure in realistic game scenarios.',
      points: [
        'Emphasize cycle of possession: pop away, good first touch, escape pressure, accurate pass',
        'After passing move to space to give teammates passing options',
        'Attackers must be aware what options defenders are taking away',
        'Start coaching points with warmup and carry throughout progression'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf'
    }
  ]
};

