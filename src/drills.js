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
      summary: 'Lateral bounds · carioca · hip openers · inch worms',
      detail: 'Set up 20-yard line. Players perform: lateral bounds (5 each direction, explosive side-to-side jumps), carioca (sideways crossover steps, hips facing forward), hip openers (leg swings forward/back and side-to-side), inch worms (walk hands forward to plank, walk feet to hands). Complete 2 rounds with 30-second rest between exercises.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · react to color commands',
      detail: 'Each player with a ball in 20x20 grid. Coach calls colors: GREEN = dribble fast, YELLOW = slow dribbling with close touches, RED = stop and put foot on ball, BLUE = sit on ball, PURPLE = juggle the ball. Players must react quickly while maintaining control. Add creativity by letting players suggest new colors and actions.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling & fundamental skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut',
      detail: 'Open area rehearsal of skill moves. Coach demonstrates each move, players repeat 10 times each. Focus on hook turn, drag-back, pull-push, and pull-cut moves. Use correct technique: small soft touches with shoe laces, toe pointed down, quick feet and small steps.',
      points: [
        'Use correct technique - small soft touches with shoe laces',
        'Quick feet and small steps for quick reactions',
        'Master mechanics before adding pressure',
        'Practice all moves with both feet'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · skipping · high knees · carioca',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · dribble past end line to score',
      detail: '10x20 yard area. Players start at opposite corners. Blue passes to red, then 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Game over when ball is out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · dribble through sections',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line. Must beat each defender in their square. Defenders score by winning ball and stopping it on front line of their square.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    }
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling & fundamental skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Skill Moves',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut',
      detail: 'Open area rehearsal of skill moves. Coach demonstrates each move, players repeat 10 times each. Focus on hook turn, drag-back, pull-push, and pull-cut moves. Use correct technique: small soft touches with shoe laces, toe pointed down, quick feet and small steps.',
      points: [
        'Use correct technique - small soft touches with shoe laces',
        'Quick feet and small steps for quick reactions',
        'Master mechanics before adding pressure',
        'Practice all moves with both feet'
      ],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Warm-up routine · skipping · high knees · carioca',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: '1v1 End Line Game',
      summary: '1v1 battles · dribble past end line to score',
      detail: '10x20 yard area. Players start at opposite corners. Blue passes to red, then 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Game over when ball is out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch - soft, short touch',
        'Start doing fakes immediately',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'wt4',
      name: 'Dribbling Gauntlet',
      summary: 'Beat 3 defenders · dribble through sections',
      detail: '10x36 yard area divided into three 10x12 sections. Three defenders, line of attackers. Attacker dribbles through and scores by dribbling past last end line. Must beat each defender in their square. Defenders score by winning ball and stopping it on front line of their square.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction and accelerate away',
        'Attack spaces behind defender with speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    }
  ],
};

