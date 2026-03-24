#!/usr/bin/env node
// ============================================================
// generate-drills.js
// 1. Parses Mauro's weekly email → MON_TUE + WED_THU sessions
// 2. Generates fresh WARMUP drills each week based on youth
//    soccer warmup best practices (not from the email)
// 3. Outputs src/drills.js
//
// Usage: node scripts/generate-drills.js <input.txt> <output.js>
// ============================================================

const fs = require("fs");
const path = require("path");

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error("Error: ANTHROPIC_API_KEY environment variable is required");
  process.exit(1);
}

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  console.error("Usage: node generate-drills.js <input-text-file> <output-drills.js>");
  process.exit(1);
}

const drillText = fs.readFileSync(inputPath, "utf-8").trim();
if (drillText.length < 20) {
  console.error("Error: Input text is too short to contain drill data");
  process.exit(1);
}

const now = new Date();
const weekLabel = now.toLocaleDateString("en-US", { month: "short", day: "numeric" });
// Use ISO week number to seed warmup variety
const weekNumber = Math.ceil(((now - new Date(now.getFullYear(), 0, 1)) / 86400000 + 1) / 7);

// ── Call Claude API helper ──────────────────────────────────
async function callClaude(system, user, maxTokens = 8000) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Claude API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  let text = data.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n");

  // Strip markdown fences
  text = text.replace(/^```(?:javascript|js)?\s*\n?/m, "").replace(/\n?```\s*$/m, "").trim();
  return text;
}

// ── STEP 1: Generate sessions from Mauro's email ────────────
async function generateSessions() {
  console.log("Step 1: Parsing Mauro's email into MON_TUE + WED_THU...");

  const systemPrompt = `You are a data extraction assistant for a youth soccer coaching app. You will receive a weekly practice email from Mauro Nobre (Technical Director, Sporting Kaw Valley).

Output ONLY valid JavaScript code. No markdown fences, no explanation.

Extract the MONDAY/TUESDAY drills (items 1-4) and WEDNESDAY/THURSDAY drills (items 1-4) from the email.

IMPORTANT: The first drill each day (item 1) is often a warmup/technique drill (e.g., "Basic Ball Skills", "Passing & Receiving Warmup"). Include ALL drills from the email (items 1-4) in the output — do not remove any. The warmup section of the app is handled separately.

Output this exact structure:

export const WEEK_LABEL = 'Week of ${weekLabel}';

export const MON_TUE = {
  title: 'Monday / Tuesday',
  subtitle: '[derive from microcycle focus]',
  color: '#185FA5',
  drills: [
    {
      id: 'm1',
      name: 'Drill Name',
      summary: 'Brief summary · use dot separators',
      detail: 'Full description with setup, rules, progressions.',
      points: ['Coaching point 1', 'Coaching point 2'],
      badge: 'Short label',
    },
  ],
};

export const WED_THU = {
  title: 'Wednesday / Thursday',
  subtitle: '[derive from microcycle focus]',
  color: '#534AB7',
  drills: [
    {
      id: 'wt1',
      name: 'Drill Name',
      summary: 'Brief summary',
      detail: 'Full description.',
      points: [],
      badge: 'Short label',
    },
  ],
};

RULES:
- IDs: Mon/Tue='m1','m2','m3','m4'; Wed/Thu='wt1','wt2','wt3','wt4'.
- Extract coaching points from the email body (KEY TECHNICAL POINTS, cycle of possession notes, inline instructions) and assign them to relevant drills.
- badge: 1-3 words. Common: 'Moves training', '1v1 dribbling', 'Possession', 'Scrimmage', 'Passing', 'Ball mastery', 'Tactical', 'Attack & defend', '1v1 + passing'.
- summary: <60 chars, use · separator.
- detail: full setup/rules from email + PDF attachments if available.
- The last drill is usually "2v2 Game" → badge 'Scrimmage'.
- subtitle: derive from microcycle focus (e.g., "Dribbling focus", "Passing & receiving focus").
- Use single quotes. Escape apostrophes with backslash.
- If the email mentions a week date (e.g., "week of August 25-28"), use it in WEEK_LABEL (e.g., 'Week of Aug 25').`;

  return await callClaude(systemPrompt, `Parse this email into MON_TUE and WED_THU. Output ONLY JavaScript:\n\n${drillText}`);
}

// ── STEP 2: Generate fresh warmup drills ────────────────────
async function generateWarmup() {
  console.log("Step 2: Generating fresh warmup drills for this week...");

  const systemPrompt = `You are a youth soccer warmup designer for a coaching app called "Coach's Plan" (Sporting Kaw Valley, Lawrence KS).

Generate TWO warmup drills for this week's practices. These warmups are performed before every session (~10 min total).

REQUIREMENTS:
- One drill should be a DYNAMIC MOVEMENT exercise (no ball): jog variations, high knees, butt kicks, shuffles, carioca, leg swings, hip openers, skipping, bounding, etc. Draw from the FIFA 11+ Kids program, US Soccer best practices, and general youth athletic development. Vary it each week — don't always use the same movements.
- One drill should be a FUN GAME WITH THE BALL: a tag/chase/keep-away game that gets players moving with the ball. Examples: Sharks & Minnows, Freeze Tag with Ball, Hospital Tag with Dribbling, Tail Tag with Dribbling, Blob Tag, Pac-Man Dribbling, Traffic Light Dribbling, Musical Balls, Capture the Cone, Treasure Island, Pirate Ship, Fox Tails, Ball Tag, Kick-Out, Dribble Knockout, King of the Ring, etc. Pick a DIFFERENT game each week for variety.

This is week ${weekNumber} of the year — use this to ensure you don't repeat the same warmup as recent weeks. Pick different movements and a different game than you would for weeks ${weekNumber - 1} or ${weekNumber - 2}.

Output ONLY valid JavaScript code — no markdown, no explanation. The exact format:

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

STYLE RULES:
- summary: brief (<60 chars), use · separator.
- detail: 2-4 sentences. Setup, how to play, progressions.
- points: empty array [] (warmups don't need coaching points in this app).
- badge: 'Injury prevention' for the dynamic movement drill, 'Ball mastery' or 'Fun' for the game.
- Use single quotes, escape apostrophes.
- The dynamic movement drill is always id:'w1', the game is always id:'w2'.
- Be specific about movements and rules — the coach reads this on the field.`;

  return await callClaude(
    systemPrompt,
    `Generate two fresh warmup drills for week ${weekNumber}. Output ONLY JavaScript:`,
    2000
  );
}

// ── STEP 3: Combine and write ───────────────────────────────
async function main() {
  console.log(`Generating drills.js for week ${weekNumber} (${weekLabel})...`);
  console.log(`Input: ${drillText.length} characters\n`);

  // Run both API calls in parallel
  const [sessionsCode, warmupCode] = await Promise.all([
    generateSessions(),
    generateWarmup(),
  ]);

  // Extract WEEK_LABEL from sessions output
  const weekLabelMatch = sessionsCode.match(/export const WEEK_LABEL\s*=\s*'[^']+';/);
  const weekLabelLine = weekLabelMatch
    ? weekLabelMatch[0]
    : `export const WEEK_LABEL = 'Week of ${weekLabel}';`;

  // Extract WARMUP block
  const warmupBlock = warmupCode.includes("export const WARMUP")
    ? warmupCode
    : `export const WARMUP = ${warmupCode}`;

  // Extract MON_TUE and WED_THU from sessions
  const monTueMatch = sessionsCode.match(/export const MON_TUE\s*=\s*\{[\s\S]*?\n\};/);
  const wedThuMatch = sessionsCode.match(/export const WED_THU\s*=\s*\{[\s\S]*?\n\};/);

  if (!monTueMatch || !wedThuMatch) {
    console.error("❌ Could not extract MON_TUE or WED_THU from Claude output");
    console.error("Sessions output (first 500 chars):\n" + sessionsCode.substring(0, 500));
    process.exit(1);
  }

  // Assemble the final file
  const header = `// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────`;

  const finalOutput = [
    header,
    "",
    weekLabelLine,
    "",
    warmupBlock,
    "",
    monTueMatch[0],
    "",
    wedThuMatch[0],
    "",
  ].join("\n");

  // ── Validate ──────────────────────────────────────────
  console.log("\nValidating combined output...");

  const requiredExports = ["WEEK_LABEL", "WARMUP", "MON_TUE", "WED_THU"];
  const missing = requiredExports.filter((n) => !finalOutput.includes(`export const ${n}`));
  if (missing.length > 0) {
    console.error(`❌ Missing exports: ${missing.join(", ")}`);
    process.exit(1);
  }

  // Syntax check
  const tmpPath = path.join(__dirname, "_tmp_validate.mjs");
  fs.writeFileSync(tmpPath, finalOutput);
  try {
    const { execSync } = require("child_process");
    execSync(`node --input-type=module --check < "${tmpPath}"`, { stdio: "pipe" });
    console.log("✅ JavaScript syntax valid");
  } catch (e) {
    // Try trailing comma fix
    let fixed = finalOutput.replace(/,(\s*[}\]])/g, "$1");
    fs.writeFileSync(tmpPath, fixed);
    try {
      const { execSync } = require("child_process");
      execSync(`node --input-type=module --check < "${tmpPath}"`, { stdio: "pipe" });
      console.log("✅ Syntax valid after auto-fix");
      fs.writeFileSync(outputPath, fixed + "\n", "utf-8");
      return reportSuccess(fixed);
    } catch (e2) {
      console.error("❌ Syntax check failed:\n" + (e2.stderr?.toString() || e2.message));
      process.exit(1);
    }
  } finally {
    try { fs.unlinkSync(tmpPath); } catch (e) {}
  }

  fs.writeFileSync(outputPath, finalOutput + "\n", "utf-8");
  reportSuccess(finalOutput);
}

function reportSuccess(code) {
  const drillCount = (code.match(/id:\s*'/g) || []).length;
  console.log(`📋 Total drills: ${drillCount}`);
  if (drillCount < 4) {
    console.error("❌ Too few drills (" + drillCount + ")");
    process.exit(1);
  }

  // Verify colors
  if (!code.includes("'#1D9E75'")) console.warn("⚠️ Missing WARMUP color #1D9E75");
  if (!code.includes("'#185FA5'")) console.warn("⚠️ Missing MON_TUE color #185FA5");
  if (!code.includes("'#534AB7'")) console.warn("⚠️ Missing WED_THU color #534AB7");

  console.log(`✅ Written to ${outputPath} (${code.length} bytes)`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
