// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Apr 6';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Lateral bounds · carioca · hip openers · bear crawls',
      detail: 'Set up 20-yard straight line. Players perform lateral bounds (side-to-side hops) for 10 yards, then carioca (crossover steps) for 10 yards back. Next, hip openers (leg swings forward and back) in place for 10 reps each leg. Finish with bear crawls across 15 yards - hands and feet only, keep core tight.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble in grid · respond to color commands',
      detail: 'All players dribble freely in 20x20 yard grid with a ball. Coach calls out colors: GREEN = dribble fast, YELLOW = slow dribble with close touches, RED = stop ball with foot and freeze. Add fun variations like BLUE = sit on ball, PURPLE = juggle in place. Keep players moving and listening while developing ball control.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Passing and receiving focus',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Dribble-Skill-Pass',
      summary: 'Focus on side-step · scissors · Iniesta · step-overs',
      detail: 'The player with the ball dribbles with the laces toward the middle cone, performs a designated skill move, takes a touch to the side, and passes to the opposite player. He then follows the pass and runs to the opposite side. The receiver does a good first touch, and repeats the process in the other direction.',
      points: ['Dribble with the laces, toes pointing down, small quick touches', 'Do the designated move early - don\'t get too close to the middle cone (=defender)', 'Take a touch straight to the side to create space to pass', 'Make an accurate pass (swing your passing leg straight toward the target player)', 'Spring to the opposite line (take the place of the receiver)'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribble-Skill-Pass.pdf'
    },
    {
      id: 'm2',
      name: '3v1 Possession Game',
      summary: 'Attackers score every 5 passes · defenders dribble out',
      detail: 'Play 3v1 until attackers or defenders get three points. Attackers score every 5 consecutive passes. Defenders score by dribbling out of the square through one side designated by the coach.',
      points: ['Take a touch to the side before passing to create space', 'Pass to the feet', 'Whenever a pass is made the third attacker must run to provide a passing option on the right or left of the ball', 'Pass to the player with the most time and space', 'Turn on the 1st touch', 'Use deception (fakes)'],
      badge: 'Possession',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3v1-Possession-Game.pdf'
    },
    {
      id: 'm3',
      name: '3+1v1 Pass And Support',
      summary: '4 passes minimum before long ball · defender chases',
      detail: 'Play 3v1 possession. Players must make a minimum of 4 passes (more or less as needed) before they can play a long ball to the target player. The defender then chases the ball to the other side, and two attacking players must then run to the opposite side to support their target player. They try to get 4 passes and send a long pass the other way again. They get a point for successfully passing to the target player. The defender gets a point by winning the ball and passing to the target player.',
      points: ['Move off the ball to provide passing options - safe angle and maximum distance', 'Don\'t force the pass - be patient and make safe passes, until it is safe to pass to the target'],
      badge: '1v1 + passing',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/3-1-V-1-Pass-And-Support.pdf'
    },
    {
      id: 'm4',
      name: '2v2+1+1 Game 2 Large Goals',
      summary: 'Start 2v2 · team with ball can pass in extra player',
      detail: 'The coach passes the ball to the center, toward one team. The attacking team overlaps: the far player takes the ball and dribbles diagonally toward the coach. The player near the coach overlaps to the far side. THE TEAM IN POSSESSION CAN HAVE ONE EXTRA PLAYER, so they can turn and pass a teammate in. That makes it 3v2. If the defenders win the ball they can pass two players in, making it 4v3.',
      points: ['Dribble and pass with the correct technique', 'Don\'t wait for the defender to close you down - pass early', 'Get a numbers advantage by passing someone in early', 'Priority: 1. shoot; 2. pass; 3. dribble', 'Create width and depth when attacking'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Passing and receiving focus',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Dribble-Skill-Pass',
      summary: 'Focus on side-step · scissors · Iniesta · step-overs',
      detail: 'The player with the ball dribbles with the laces toward the middle cone, performs a designated skill move, takes a touch to the side, and passes to the opposite player. He then follows the pass and runs to the opposite side. The receiver does a good first touch, and repeats the process in the other direction.',
      points: ['Dribble with the laces, toes pointing down, small quick touches', 'Do the designated move early - don\'t get too close to the middle cone (=defender)', 'Take a touch straight to the side to create space to pass', 'Make an accurate pass (swing your passing leg straight toward the target player)', 'Spring to the opposite line (take the place of the receiver)'],
      badge: 'Moves training',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribble-Skill-Pass.pdf'
    },
    {
      id: 'wt2',
      name: '3V1 Passing Game',
      summary: 'Possession game with passing focus',
      detail: 'Play 3v1 until attackers or defenders get three points. Focus on passing and receiving with proper technique and body positioning.',
      points: [],
      badge: 'Passing',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '2v2 + 2 Target Players',
      summary: 'Score by passing to targets · receive back · pass opposite',
      detail: 'Play 2v2 in the middle. The team in possession scores by passing to the outside target players, receiving the ball back, and passing to the opposite target player without losing possession. When a team scores 3 points the losing team becomes target players.',
      points: ['Escape the pressure by dribbling to the side', 'Look up and scan the field to find your team mate', 'Pass to the feet', 'Turn on the 1st touch', 'Move off the ball to get open', 'Create maximum width', 'When you play to the target both inside players must move wide to create time and space', 'One defender MUST try to win the ball when it is played to a target player', 'Target players must move laterally to provide safe passing angles'],
      badge: 'Tactical',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M-2-Target-Players.pdf'
    },
    {
      id: 'wt4',
      name: '2v2+1+1 Game 2 Large Goals',
      summary: 'Start 2v2 · team with ball can pass in extra player',
      detail: 'The coach passes the ball to the center, toward one team. The attacking team overlaps: the far player takes the ball and dribbles diagonally toward the coach. The player near the coach overlaps to the far side. THE TEAM IN POSSESSION CAN HAVE ONE EXTRA PLAYER, so they can turn and pass a teammate in. That makes it 3v2. If the defenders win the ball they can pass two players in, making it 4v3.',
      points: ['Dribble and pass with the correct technique', 'Don\'t wait for the defender to close you down - pass early', 'Get a numbers advantage by passing someone in early', 'Priority: 1. shoot; 2. pass; 3. dribble', 'Create width and depth when attacking'],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2v2-M1-M1-.-Game-2-Large-Goals.pdf'
    }
  ]
};

