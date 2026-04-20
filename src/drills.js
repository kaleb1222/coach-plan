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
      detail: 'Set up 20-yard line. Bear crawls down (10 yards), inch worms back (walk hands out, walk feet to hands). Then lateral bounds across width (10 big bounds each direction). Finish with backpedal jog for 20 yards. Focus on controlled movements and proper form. Complete 2-3 rounds with 30-second rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Musical Balls',
      summary: 'Dribble to music · freeze when music stops',
      detail: 'Each player with a ball in 20x20 grid. Play music while players dribble freely around the area. When music stops, players must freeze with ball under their foot. Last player to freeze does 5 toe taps before next round. Add challenges: freeze in different positions (one foot on ball, ball between feet, sitting on ball). Play 5-6 rounds.',
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
      summary: 'Carioca · toe touches · high knees · power kicks',
      detail: 'Special dynamic stretching to prepare for shooting. Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently. 1. All players lined up side by side. 2. Carioca - 30 yards. 3. Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 4. Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 5. Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 6. High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Develop coordination for shooting', 'Opposite knee and arm movement', 'Diagonal leg swing pattern', 'Maximum power in high kicks'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Shooting Variation 2',
      summary: 'Dribble · touch to the side · shoot side-on',
      detail: 'Shooting Variation 2 - Dribble-Touch To The Side-Shoot Side-On. Focus on proper body shape and technique for shooting with power and accuracy.',
      points: ['Approach ball at angle, side-on to goal', 'Plant non-kicking foot beside ball', 'Big backswing with bent knee', 'Lock ankle, strike with laces'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-2-Dribble-Touch-To-The-Side-Shoot-Side-On.pdf'
    },
    {
      id: 'm3',
      name: 'Shooting Variation 1',
      summary: 'Dribble · touch to the side · shoot',
      detail: 'Shooting Variation 1 - Dribble-Touch To The Side-Shoot. Work on creating time and space before shooting, emphasizing proper technique.',
      points: ['Touch to side to create space', 'Side-on approach to goal', 'Chest leaning forward at contact', 'Full forward leg swing'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-1-Dribble-Touch-To-The-Side-Shoot.pdf'
    },
    {
      id: 'm4',
      name: 'Shooting Variation 3',
      summary: 'Shooting on the turn · body shape · accuracy',
      detail: 'Shooting Variation 3 - Shooting On The Turn. Practice shooting while turning, maintaining proper body position and technique for power and accuracy.',
      points: ['Turn away from pressure', 'Maintain balance during turn', 'Quick shot after turn', 'Swing leg toward target for direction'],
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
      summary: 'Carioca · toe touches · high knees · power kicks',
      detail: 'Special dynamic stretching to prepare for shooting. Most players can\'t shoot well not because they lack muscle strength, but because they lack the coordination needed to shoot efficiently. 1. All players lined up side by side. 2. Carioca - 30 yards. 3. Walking, raise one arm horizontally, touch the opposite toes to your fingertips at each step. 30 yards. 4. Walking, raise your knee and touch it to the opposite armpit, with the opposite arm down in front of the knee. 30 yards. 5. Skipping - high knees, big arm swings. 30 yards, two laps. Make sure they are raising opposite knees and arms. 6. High Kick - jogging pace, swing and kick an imaginary ball with as much power as possible. Your leg swing should be diagonal, bringing your knee under the opposite armpit. 30 yards, 3 laps.',
      points: ['Develop coordination for shooting', 'Opposite knee and arm movement', 'Diagonal leg swing pattern', 'Maximum power in high kicks'],
      badge: 'Ball mastery',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Shooting Variation 4',
      summary: 'Shooting off the layoff · combination play',
      detail: 'Shooting Variation 4 - Shooting Off The Layoff. Practice shooting after receiving a layoff pass, focusing on quick preparation and accurate finishing.',
      points: ['Quick first touch after layoff', 'Immediate shooting preparation', 'Communication with layoff player', 'Snap knee joint at contact'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-4-Shooting-Off-The-Layoff.pdf'
    },
    {
      id: 'wt3',
      name: 'Shooting Variation 5',
      summary: 'Double pass · give & go · shot',
      detail: 'Shooting Variation 5 - Double Pass - Give & Go - Shot. Combination play leading to shooting opportunity through quick passing exchanges.',
      points: ['Quick passing exchanges', 'Movement after passing', 'Timing of runs and passes', 'Finish with proper technique'],
      badge: 'Shooting',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Variation-5-Double-Pass-Give-0-Go-Shot.pdf'
    },
    {
      id: 'wt4',
      name: 'Shooting Game 2 - 1v1, 2v1, 2v2 Variations',
      summary: '1v1 · 2v1 · 2v2 shooting games · finishing',
      detail: 'Shooting Game 2 with multiple variations including 1v1, 2v1, and 2v2 situations. Players practice shooting under pressure and in game-like scenarios.',
      points: ['Create time and space to shoot', 'Take what defenders give you', 'Quick decision making', 'Finish with power and accuracy'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Shooting-Game-2-1v1-J-2v1-J-2v2-Variations.pdf'
    }
  ]
};

