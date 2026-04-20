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
      summary: 'Hip openers · lateral bounds · inch worms · backpedal',
      detail: 'Players line up on sideline. Perform hip openers across 20 yards (step forward, lift knee, rotate hip out). Return with lateral bounds (jump sideways, land on one foot, push off for next jump). Next, inch worms (walk hands out to plank, walk feet to hands). Finish with backpedal focusing on staying low and pumping arms. Rest 30 seconds between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when it stops · last one moving sits out',
      detail: 'Each player starts with a ball in 20x20 yard grid. Play upbeat music while players dribble freely using different surfaces and moves. When music stops, players must freeze immediately with foot on ball. Any player still moving or whose ball is rolling must sit out for 10 seconds. Continue for 5-6 rounds, encouraging creativity and close control.',
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
      summary: 'Coordination exercises · carioca · high kicks · arm swings',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Develops coordination needed for efficient shooting', 'Opposite knee and arm coordination', 'Diagonal leg swing pattern', 'Build up to high power kicks'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · touch to side · shoot side-on',
      detail: 'Players practice shooting technique with dribble, touch to the side, and shooting side-on to the goal. Focus on proper body positioning and technique.',
      points: ['Approach ball at angle, side-on to goal', 'Plant non-kicking foot beside ball', 'Big back swing with bent knee', 'Lock ankle, strike with laces'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf'
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · touch to side · shoot',
      detail: 'Basic shooting drill with dribbling and touch to the side before shooting. Emphasize proper shooting technique and body positioning.',
      points: ['Side-on approach to ball', 'Chest leaning forward at contact', 'Full forward leg swing', 'Swing leg diagonally toward target'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf'
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn · body positioning',
      detail: 'Players practice shooting after turning with the ball. Focus on creating time and space before shooting and maintaining proper shooting technique.',
      points: ['Good first touch to create space', 'Turn away from pressure', 'Set up shooting angle', 'Snap knee joint at contact'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced shooting variations and game situations',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Coordination exercises · carioca · high kicks · arm swings',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Develops coordination needed for efficient shooting', 'Opposite knee and arm coordination', 'Diagonal leg swing pattern', 'Build up to high power kicks'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff · combination play',
      detail: 'Players practice shooting after receiving a layoff pass from a teammate. Focus on first touch and quick shooting technique.',
      points: ['Good first touch to set up shot', 'Quick transition from receiving to shooting', 'Communication with passer', 'Plant foot positioning'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf'
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · give and go · shot',
      detail: 'Advanced combination play with double pass, give and go movement, and finishing with a shot. Emphasizes movement off the ball and timing.',
      points: ['Timing of runs and passes', 'Sharp ground passes', 'Movement to create space', 'Quick shot after receiving'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf'
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: 'Game situations · 1v1 · 2v1 · 2v2 · shooting under pressure',
      detail: 'Small-sided games focusing on shooting in various numerical situations. Progress from 1v1 to 2v1 to 2v2. Players must create shooting opportunities under pressure.',
      points: ['Create time and space to shoot', 'Take what defenders give you', 'Pop away to get open', 'Accurate finishing under pressure'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf'
    }
  ]
};

