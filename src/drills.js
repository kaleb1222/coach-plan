// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Apr 20-23';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Lateral bounds · hip openers · inch worms · backpedal',
      detail: 'Set up 20-yard line. Players start with lateral bounds (side-to-side jumping) for 10 yards. At cone, perform 5 hip openers each leg (lift knee up and out, then in). Continue with inch worms (walk hands forward to plank, walk feet to hands) for 10 yards. Finish with backpedal to start. Rest 30 seconds, repeat 2-3 times.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Capture the Cone',
      summary: 'Dribble to center · steal cones · return to base',
      detail: 'Create 20x20 grid with cone pile in center. Split into two teams on opposite sides. Each player has a ball. On "GO!", players dribble to center, grab ONE cone with their hand while keeping ball close, then dribble back to their team\'s side. Defenders can try to kick opponent\'s balls out (but can\'t steal cones from hands). Team with most cones after 3 minutes wins.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Shooting technique and accuracy',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Coordination warmup · Carioca · High kicks · Shooting prep',
      detail: 'Special dynamic stretching to prepare for shooting. Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently. 1. All players lined up side by side. 2. Carioca - 30 yards. 3. Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 4. Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 5. Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 6. High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Develop shooting coordination', 'Diagonal leg swing', 'Knee under opposite armpit', 'High power kicks'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble-Touch To The Side-Shoot Side-On',
      detail: 'Shooting variation focusing on side-on approach and shooting technique. Players practice touching the ball to the side and shooting from a side-on position to the goal.',
      points: ['Approach ball at angle', 'Side-on to goal', 'Plant foot beside ball', 'Lock ankle solid'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf'
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble-Touch To The Side-Shoot',
      detail: 'Basic shooting variation where players dribble, touch the ball to the side, and shoot. Focus on proper body shape and shooting technique.',
      points: ['Big back swing with bent knee', 'Strike with laces', 'Snap knee joint at contact', 'Full forward leg swing'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf'
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting On The Turn',
      detail: 'Players practice shooting while turning, focusing on creating time and space before shooting. Emphasizes proper body positioning and shooting technique when turning with the ball.',
      points: ['Turn away from pressure', 'Create time and space', 'Chest forward at contact', 'Swing leg toward target'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced shooting variations and games',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Coordination warmup · Carioca · High kicks · Shooting prep',
      detail: 'Special dynamic stretching to prepare for shooting. Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently. 1. All players lined up side by side. 2. Carioca - 30 yards. 3. Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 4. Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 5. Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 6. High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Develop shooting coordination', 'Diagonal leg swing', 'Knee under opposite armpit', 'High power kicks'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting Off The Layoff',
      detail: 'Players practice shooting after receiving a layoff pass. Focus on first touch to set up the shot and proper shooting technique. Can repeat variations 2, 1 and 3 as needed.',
      points: ['Good first touch to create space', 'Quick setup for shot', 'Strike with power and accuracy', 'Follow through toward target'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf'
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double Pass - Give & Go - Shot',
      detail: 'Advanced shooting variation involving double pass combination play. Players execute give and go passing before shooting, emphasizing timing and quick finishing.',
      points: ['Quick passing combination', 'Time the run perfectly', 'First touch to shoot', 'Finish with composure'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf'
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: 'Game situations · 1v1 · 2v1 · 2v2 · Shooting opportunities',
      detail: 'Shooting game with multiple variations including 1v1, 2v1, and 2v2 situations. Players practice shooting under pressure and creating shooting opportunities in game-like scenarios.',
      points: ['Create shooting opportunities', 'Shoot under pressure', 'Work as team to create chances', 'Take what defenders give you'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf'
    }
  ]
};

