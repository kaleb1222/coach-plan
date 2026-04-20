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
      summary: 'Bear crawls · inch worms · lateral bounds · carioca',
      detail: 'Set up 20-yard line. Players perform: bear crawls (10 yards forward), inch worms (5 reps in place), lateral bounds (10 yards each direction), carioca/grapevine (10 yards each direction). Focus on controlled movements and proper form. Rest 30 seconds between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops',
      detail: 'Each player with a ball in 20x20 grid. Play music while players dribble freely using both feet. When music stops, players must freeze with ball controlled under foot. Add challenges: freeze in specific pose, find a partner, or control ball with specific body part. Restart music after 3-5 seconds.',
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
      summary: 'Carioca · toe touches · knee raises · high kicks',
      detail: 'Special dynamic stretching to prepare for shooting. All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Develops coordination needed for shooting', 'Opposite knees and arms in skipping', 'Diagonal leg swing in high kicks', 'Build power and coordination over season'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · touch to the side · shoot side-on',
      detail: 'Shooting drill focusing on dribbling, touching the ball to the side, and shooting while positioned side-on to the goal.',
      points: ['Approach ball at angle, side-on to goal', 'Plant non-kicking foot beside ball', 'Big back swing with bent knee', 'Lock ankle, strike with laces'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf'
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · touch to the side · shoot',
      detail: 'Shooting drill emphasizing the technique of dribbling, making a touch to the side, and taking a shot.',
      points: ['Chest leaning forward at contact', 'Full forward leg swing', 'Snap knee joint at contact', 'Swing leg toward target for direction'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf'
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn · body positioning',
      detail: 'Shooting drill that focuses on shooting while turning, emphasizing proper body positioning and technique when receiving the ball and shooting.',
      points: ['Create time and space before shooting', 'Good first touch to set up shot', 'Escape pressure by dribbling to space', 'Accurate shooting to target'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced shooting variations & game situations',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · toe touches · knee raises · high kicks',
      detail: 'Special dynamic stretching to prepare for shooting. All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Develops coordination needed for shooting', 'Opposite knees and arms in skipping', 'Diagonal leg swing in high kicks', 'Build power and coordination over season'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff · combination play',
      detail: 'Shooting drill focusing on receiving a layoff pass and shooting. Emphasizes combination play and finishing from passes.',
      points: ['Pop away to create space', 'Good first touch away from pressure', 'Quick shooting technique', 'Communication with passer'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf'
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · give & go · shot',
      detail: 'Advanced shooting drill involving double pass combination, give and go movement, and finishing with a shot.',
      points: ['Make run after giving pass', 'Time the run with preparation touch', 'Pass to meet runner\'s feet', 'Quick finish after receiving'],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf'
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 shooting scenarios',
      detail: 'Game-based shooting practice with various numerical advantages and scenarios. Practice shooting under pressure in 1v1, 2v1, and 2v2 situations.',
      points: ['Take what defenders give you', 'Create time and space to shoot', 'Attack quickly in numerical advantage', 'Shoot with power and accuracy'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf'
    }
  ]
};

