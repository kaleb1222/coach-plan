// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────

export const WEEK_LABEL = 'Week of Mar 30';

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Lateral bounds · carioca · bear crawls · inch worms',
      detail: 'Set up cones 20 yards apart. Players perform lateral bounds (jumping side to side) for 10 yards, then carioca (crossover steps) for 10 yards. Return with bear crawls for 10 yards, then inch worms (walk hands out to plank, walk feet to hands) for final 10 yards. Complete 2-3 rounds with 30-second rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Hospital Tag (with ball)',
      summary: 'Dribble in grid · tagged players freeze · teammates heal',
      detail: 'All players dribble in 30x30 yard grid. 2-3 players are "doctors" without balls who try to tag dribblers. When tagged, players must freeze with ball above head and spread legs. To be "healed," another dribbler must crawl through their legs. Game continues for 2-3 minutes, rotate doctors.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Fundamental dribbling skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse moves in open area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Players practice individual ball skills in open area or 20x20 yard area. Coach demonstrates each move, players repeat 10 times. Focus on hook turn (180 degree turn with sole), pull-push (fake shot, pull back, push with inside), pull-cut (fake shot, pull back behind standing leg, cut 90 degrees), and scissors (leap to side, push ball opposite direction with outside of other foot).',
      points: [
        'Use correct technique - small soft touches with shoe laces',
        'Quick feet and small steps to react quickly',
        'Make defender react to you, not the other way around',
        'Dribble diagonally to get defender to move laterally'
      ],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up exercises · skipping · high knees · butt-kickers · carioca',
      detail: '5 minutes of dynamic stretching including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: 'Beat defender to score by dribbling past end line',
      detail: '10x20 yard area. Players line up on opposite corners. Blue player passes to red player in center, then 1v1 battle begins. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds. Game ends when ball goes out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately - don\'t wait for defender to close down',
        'Approach with control, fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through three defenders in separate zones',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attackers must dribble through and score by dribbling past the last end line, beating each defender in their respective squares. Defenders start at back line of their square and cannot leave their zone. Defenders score by winning ball and stopping it on front line of their square.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Fundamental dribbling skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse moves in open area',
      summary: 'Practice side-step · scissors · step-over · hook turn · drag-back · pull-push · pull-cut',
      detail: 'Players practice individual ball skills in open area or 20x20 yard area. Coach demonstrates each move, players repeat 10 times. Focus on hook turn (180 degree turn with sole), pull-push (fake shot, pull back, push with inside), pull-cut (fake shot, pull back behind standing leg, cut 90 degrees), and scissors (leap to side, push ball opposite direction with outside of other foot).',
      points: [
        'Use correct technique - small soft touches with shoe laces',
        'Quick feet and small steps to react quickly',
        'Make defender react to you, not the other way around',
        'Dribble diagonally to get defender to move laterally'
      ],
      badge: 'Moves training',
      pdfUrl: null
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up exercises · skipping · high knees · butt-kickers · carioca',
      detail: '5 minutes of dynamic stretching including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: 'Beat defender to score by dribbling past end line',
      detail: '10x20 yard area. Players line up on opposite corners. Blue player passes to red player in center, then 1v1 battle begins. Score by dribbling with control past opposite end line. Defender wins by taking ball and scoring or forcing attacker out of bounds. Game ends when ball goes out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately - don\'t wait for defender to close down',
        'Approach with control, fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf'
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Dribble through three defenders in separate zones',
      detail: '10x36 yard area divided into three 10x12 sections with three defenders. Attackers must dribble through and score by dribbling past the last end line, beating each defender in their respective squares. Defenders start at back line of their square and cannot leave their zone. Defenders score by winning ball and stopping it on front line of their square.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed',
        'Control ball when entering next square'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf'
    }
  ]
};

