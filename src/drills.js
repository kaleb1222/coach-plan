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
      summary: 'Lateral bounds · hip openers · inch worms · backpedal',
      detail: 'Set up cones 15 yards apart. Players perform lateral bounds (jumping side to side on one foot, then the other) for 10 yards. At the end, do 5 hip openers (lift knee up and rotate out, then in). Return with inch worms - walk hands forward to plank, walk feet to hands, repeat. Finish with controlled backpedal to start.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Pac-Man Dribbling',
      summary: 'Dribble on lines · avoid Pac-Man taggers',
      detail: 'Create a large square grid with cones. All players with balls must dribble only on the lines of the grid (not inside squares). Choose 2-3 players without balls to be \'Pac-Man\' - they also move only on lines and try to kick other players\' balls off the lines. If your ball is kicked off, do 5 toe taps then rejoin. Switch Pac-Man players every 2 minutes.',
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
      summary: 'Carioca · toe touches · knee lifts · high kicks',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Builds coordination needed for efficient shooting', 'Opposite knee and arm movement', 'High kicks with maximum power and diagonal swing'],
      badge: 'Shooting prep',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · touch to side · shoot side-on',
      detail: 'Players dribble, touch the ball to the side, and shoot while positioned side-on to the goal.',
      points: ['Approach at angle, side-on to goal', 'Plant non-kicking foot beside ball', 'Strike with laces, ankle locked'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf'
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · touch to side · shoot',
      detail: 'Players dribble forward, touch the ball to the side, and shoot with proper technique.',
      points: ['Big back swing with bent knee', 'Snap knee joint at contact', 'Full forward leg swing'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf'
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn',
      detail: 'Players receive the ball and shoot while turning, focusing on proper body positioning and technique.',
      points: ['Chest leaning forward at contact', 'Swing leg diagonally under opposite armpit', 'Swing kicking leg in straight line toward target'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-3-Shooting-On-The-Turn.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Advanced shooting variations and game application',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dynamic Stretching Focused On Shooting Technique',
      summary: 'Carioca · toe touches · knee lifts · high kicks',
      detail: 'All players lined up side by side. 1) Carioca - 30 yards. 2) Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 3) Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 4) Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 5) High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. Your leg swing should have as much power as possible, and swing as high as possible, lifting you off the ground. 30 yards, 3 laps.',
      points: ['Builds coordination needed for efficient shooting', 'Opposite knee and arm movement', 'High kicks with maximum power and diagonal swing'],
      badge: 'Shooting prep',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff',
      detail: 'Players practice shooting after receiving a layoff pass, focusing on quick setup and accurate finishing.',
      points: ['Create time and space before shooting', 'Good first touch to set up shot', 'Lock ankle and strike with laces'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf'
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · give & go · shot',
      detail: 'Players execute a double pass combination, make a give and go run, then finish with a shot.',
      points: ['Pass to feet first', 'Time the give and go run', 'Shoot with power and accuracy'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf'
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 shooting scenarios',
      detail: 'Game-like shooting situations with different numerical advantages. Players practice shooting under pressure in 1v1, 2v1, and 2v2 scenarios.',
      points: ['Get open by popping away from defender', 'Escape pressure before shooting', 'Take what the defense gives you'],
      badge: 'Shooting game',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf'
    }
  ]
};

