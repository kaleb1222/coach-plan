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
      summary: 'Lateral bounds · hip openers · inch worms · backpedal',
      detail: 'Set up 20-yard line. Lateral bounds (side to side jumps) for 10 yards, then hip openers (leg swings) for 10 steps each leg. Next, inch worms (walk hands forward to plank, walk feet to hands) for 5 reps. Finish with controlled backpedal for 20 yards. Complete 2 rounds with 30-second rest between.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Traffic Light Dribbling',
      summary: 'Dribble freely · green/yellow/red commands · react quickly',
      detail: 'Each player with a ball in 20x20 yard grid. Players dribble freely around the area. Coach calls out colors: GREEN = dribble fast, YELLOW = dribble slow with close touches, RED = stop ball with foot on top. Add variations: PURPLE = toe touches, ORANGE = bottom of foot only. Play for 3-4 minutes, emphasizing quick reactions and ball control.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: 'Dribbling Microcycle 2 - Fundamental Skills',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Rehearse Each Move in Open Area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Rehearse each of the moves in an open area. Focus on the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. Coach demonstrates each move or use video links provided.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'm2',
      name: 'Dynamic Stretching',
      summary: 'Skipping · high knees · carioca · lunges · stretching',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'm3',
      name: '1v1 End Line Game',
      summary: '1v1 battle · score by dribbling past end line',
      detail: '10x20 yard area. Players with balls on one corner, players without on far corner. Blue player passes to red player. They play 1v1 until ball goes out of bounds. Score by dribbling with control past opposite end line. Defender wins ball and scores same way or forces attacker out of bounds.',
      points: [
        'Accurate pass to the feet',
        'Good first touch (soft, short touch)',
        'Start doing fakes immediately',
        'Fake one way, change direction, change speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/1v1-End-Line-Game.pdf',
    },
    {
      id: 'm4',
      name: '2V2 Game With Large Goals',
      summary: 'Team with ball can have extra player · pass teammate in',
      detail: '2V2 Game with Large Goals. The team with the ball can have an extra player (pass a teammate in). Play continuous until ball goes out of bounds.',
      points: [
        'Dribble diagonally to create time and space',
        'Pass early, shoot early',
        'Quick transitions to defense and offense',
        'Look to combine with give-&-gos, overlaps, through balls'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: 'Dribbling Microcycle 2 - Fundamental Skills',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Rehearse Each Move in Open Area',
      summary: 'Practice hook turn · drag-back · pull-push · pull-cut moves',
      detail: 'Rehearse each of the moves in an open area. Focus on the side-step, scissors and step-over, and add four new skill moves: hook turn, drag-back, pull-push, and pull-cut. Players repeat each move 10 times. Coach demonstrates each move or use video links provided.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
    {
      id: 'wt2',
      name: 'Dynamic Stretching',
      summary: 'Skipping · high knees · carioca · lunges · stretching',
      detail: 'Dynamic stretching routine including: skipping lap, high knees, butt-kickers, carioca, forward lunge, side lunge, side squat, knee to chest, airplane, toe touch, high kick.',
      points: [],
      badge: 'Warm-up',
      pdfUrl: null,
    },
    {
      id: 'wt3',
      name: 'Dribbling Gauntlet',
      summary: '10x36 area · beat 3 defenders · score past end line',
      detail: '10X36 yard area, divided into three 10X12 sections. Three defenders, and a line of attackers. One attacker dribbles through and scores by dribbling past the last end line. On the way the attacker must beat each defender. Defenders must start at the back line of their respective squares and are not allowed outside their respective squares.',
      points: [
        'Dribble with shoelaces to take on defenders',
        'Make your move early, out of defender\'s reach',
        'Change direction, and accelerate away',
        'Attack the spaces behind the defender with speed'
      ],
      badge: '1v1 dribbling',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/Dribbling-Gauntlet.pdf',
    },
    {
      id: 'wt4',
      name: '2V2 Game',
      summary: 'Use poles for goals · team vs team competition',
      detail: '2V2 Game using poles to make the goals. For this exercise your team should go against one of the other teams. Play continuous until ball goes out of bounds.',
      points: [
        'Dribble diagonally to create time and space',
        'Pass early, shoot early',
        'Quick transitions to defense and offense',
        'Look to combine with give-&-gos, overlaps, through balls'
      ],
      badge: 'Scrimmage',
      pdfUrl: 'https://raw.githubusercontent.com/kaleb1222/coach-plan/main/pdfs/2V2-Game.pdf',
    },
  ],
};

