// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Mar 24';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Jog · high knees · butt kicks · shuffles · leg swings',
      detail: 'One pass across the grid for each movement. Start slow, build intensity. Progress from jogging to higher-effort runs by the end.',
      points: [],
      badge: 'Injury prevention',
    },
    {
      id: 'w2',
      name: 'Sharks & Minnows (with ball)',
      summary: 'Dribble across grid · sharks kick balls out',
      detail: 'Every player dribbles across the grid. 1–2 "sharks" try to kick balls out. Eliminated players become additional sharks. Last minnow with a ball wins.',
      points: [],
      badge: 'Ball mastery',
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling focus',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Basic Ball Skills',
      summary: 'Side step · Scissors · Stepovers',
      detail: 'Follow video links for demonstrations. Focus on clean technique before speed.',
      points: [],
      badge: 'Moves training',
    },
    {
      id: 'm2',
      name: 'Dribbling – Multiple Gates',
      summary: '30×40 area · 1v1 · score through cone gates',
      detail: 'Multiple cone gates scattered throughout. Dribbler scores by passing through any gate. Defender denies without stealing. 1–2 min rounds, switch roles, keep score.',
      points: [
        'Soft short touches — keep ball "tied" to feet',
        'Quick choppy steps, constant direction changes',
        'Bait defender to one gate, then attack another',
        'Use every surface of both feet',
        'Variation: allow defenders to win the ball',
      ],
      badge: '1v1 dribbling',
    },
    {
      id: 'm3',
      name: 'Dribbling – Four Goals',
      summary: '20×20 · 4 goals · coach plays diagonal ball',
      detail: '4 small goals (one per side). Coach plays a diagonal ball — attacker runs to far goal, defender to near goal. Score by dribbling through or shooting. Rotate after all go.',
      points: [
        'Attacker: get there first, touch toward one goal to bait, then attack opposite',
        'Defender: close fast, stay on toes, shuffle — don\'t dive in',
        'Defender: be patient, wait for a mistake, counterattack quickly',
      ],
      badge: 'Attack & defend',
    },
    {
      id: 'm4',
      name: '2v2 Game',
      summary: 'Pair up against another full team',
      detail: 'Full scrimmage. Pair up your players and compete against another pair from the opposing team.',
      points: [],
      badge: 'Scrimmage',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Possession & 1v1 focus',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Basic Ball Skills',
      summary: 'Side step · Scissors · Stepovers',
      detail: 'Follow video links for demonstrations. Focus on clean technique before speed.',
      points: [],
      badge: 'Moves training',
    },
    {
      id: 'wt2',
      name: 'Multiple 1v1s – Dribble-Pass',
      summary: '20×30 · 1v1 pairs · pass to target players on sides',
      detail: 'Two teams, target players on opposite sides. Multiple 1v1s inside. Keep ball from defender, pass to your target player — then swap positions. Defender follows the ball.',
      points: [
        'Never face the defender — turn and dribble out',
        'Pass early, accurate passes to the feet',
        'Call the target\'s name so they\'re ready',
        'Target: good first touch into space, accelerate away',
        'Pass from distance — don\'t drag defender near the target',
      ],
      badge: '1v1 + passing',
    },
    {
      id: 'wt3',
      name: 'Possession Knockout Game',
      summary: '6–10 vs 2 sharks · 20×30 · 2–3 balls in play',
      detail: 'Possession team plays with 2–3 balls simultaneously. Two "sharks" hunt the balls. Can stipulate no double-teaming. Last ball kept = win.',
      points: [
        'Escape pressure quickly — don\'t hold the ball',
        'Pass early, accurate passes to the feet',
        'Players off the ball must move to create time and space',
      ],
      badge: 'Possession',
    },
    {
      id: 'wt4',
      name: '2v2 Game',
      summary: 'Pair up against another full team',
      detail: 'Full scrimmage. Pair up your players and compete against another pair from the opposing team.',
      points: [],
      badge: 'Scrimmage',
    },
  ],
};
