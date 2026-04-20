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
      detail: 'Set up a 20-yard line. Players start with bear crawls for 10 yards (hands and feet only, knees off ground). Then inch worms - walk hands forward to plank, walk feet to hands. Next, lateral bounds side to side with big jumps. Finish with backpedal focusing on staying low and pumping arms. Repeat circuit 2-3 times.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble and avoid taggers · hold injured body parts',
      detail: 'All players dribble in a 20x30 yard area. 2-3 players are doctors (no ball). When a doctor tags a dribbler, that player must hold the body part that was tagged (shoulder, knee, etc.) while continuing to dribble. If tagged again, they become a doctor. Doctors try to tag everyone. Switch roles every 2 minutes.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Shooting technique and coordination',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · toe touches · knee to armpit · skipping · power kicks',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Build coordination needed for efficient shooting', 'Opposite knee and arm movement in skipping', 'Diagonal leg swing in high kicks', 'Full power swing lifting off the ground'],
      badge: 'Shooting prep',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · touch to the side · shoot side-on',
      detail: 'Shooting practice focusing on dribbling, touching the ball to the side, and shooting while positioned side-on to the goal.',
      points: ['Approach ball at angle, side-on to goal', 'Plant non-kicking foot beside ball', 'Lock ankle, strike with laces', 'Full forward leg swing'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf',
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · touch to the side · shoot',
      detail: 'Basic shooting variation focusing on dribbling the ball, making a touch to the side, and finishing with a shot.',
      points: ['Big back swing with bent knee', 'Snap knee joint at moment of contact', 'Chest leaning forward at contact', 'Swing leg diagonally toward target'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf',
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn',
      detail: 'Shooting practice that focuses on receiving the ball and shooting while turning, developing the ability to shoot quickly after receiving.',
      points: ['Good first touch to create space', 'Turn away from pressure', 'Quick shot after turn', 'Maintain shooting technique'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced shooting variations and game situations',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · toe touches · knee to armpit · skipping · power kicks',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Build coordination needed for efficient shooting', 'Opposite knee and arm movement in skipping', 'Diagonal leg swing in high kicks', 'Full power swing lifting off the ground'],
      badge: 'Shooting prep',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff',
      detail: 'Shooting practice involving layoff passes and quick shots, developing the ability to shoot immediately after receiving a layoff from a teammate.',
      points: ['Quick first touch after layoff', 'Immediate shooting preparation', 'Communication with layoff player', 'Accurate finishing'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf',
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · give and go · shot',
      detail: 'Advanced shooting variation involving double passes, give and go combinations, and finishing with a shot.',
      points: ['Timing of give and go runs', 'Quick passing combinations', 'Movement after passing', 'Clinical finishing'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf',
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 shooting games with multiple variations',
      detail: 'Game-based shooting practice with multiple variations including 1v1, 2v1, and 2v2 situations, focusing on creating and finishing scoring opportunities.',
      points: ['Create time and space to shoot', 'Take what defenders give you', 'Pop away from defenders', 'Escape pressure before shooting'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf',
    },
  ],
};

