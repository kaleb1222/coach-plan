#!/usr/bin/env node
// ============================================================
// generate-drills.js
// 1. Parses Mauro's email → MON_TUE + WED_THU with pdfUrl
// 2. Generates fresh WARMUP drills each week
// 3. Outputs src/drills.js
//
// Usage: node scripts/generate-drills.js <input.txt> <output.js> [pdf-mapping.json]
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
const pdfMappingPath = process.argv[4]; // optional

if (!inputPath || !outputPath) {
  console.error("Usage: node generate-drills.js <input.txt> <output.js> [pdf-mapping.json]");
  process.exit(1);
}

const drillText = fs.readFileSync(inputPath, "utf-8").trim();
if (drillText.length < 20) {
  console.error("Error: Input text is too short");
  process.exit(1);
}

// Load PDF mapping if provided
let pdfMapping = {};
if (pdfMappingPath && fs.existsSync(pdfMappingPath)) {
  try {
    const parsed = JSON.parse(fs.readFileSync(pdfMappingPath, "utf-8"));
    pdfMapping = parsed && typeof parsed === 'object' ? parsed : {};
    console.log(`Loaded ${Object.keys(pdfMapping).length} PDF mappings`);
  } catch (e) {
    console.warn("Could not parse PDF mapping file:", e.message);
    pdfMapping = {};
  }
}

const now = new Date();
const weekLabel = now.toLocaleDateString("en-US", { month: "short", day: "numeric" });
const weekNumber = Math.ceil(((now - new Date(now.getFullYear(), 0, 1)) / 86400000 + 1) / 7);

// ── Format PDF mapping for the prompt ───────────────────────
function buildPdfContext() {
  const entries = Object.entries(pdfMapping);
  if (entries.length === 0) return "";

  const lines = entries.map(([name, url]) => `  "${name}" → ${url}`);
  return `

PDF ATTACHMENTS AVAILABLE (add the matching pdfUrl to each drill):
${lines.join("\n")}

For each drill, if there is a PDF attachment whose filename matches or closely relates to the drill name, add a 'pdfUrl' field with the URL. Use fuzzy matching — for example:
- Drill "Dribbling – Multiple Gates" matches PDF "Dribbling - Multiple Gates.pdf"
- Drill "2v2 Game" matches PDF "2V2 Game.pdf"
- Drill "3v1 Possession Game" matches PDF "3v1 Possession Game.pdf"
If no PDF matches a drill, set pdfUrl to null.`;
}

// ── Claude API helper ───────────────────────────────────────
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

  return text.replace(/^```(?:javascript|js)?\s*\n?/m, "").replace(/\n?```\s*$/m, "").trim();
}

// ── STEP 1: Generate sessions from email ────────────────────
async function generateSessions() {
  console.log("Step 1: Parsing Mauro's email into MON_TUE + WED_THU...");

  const pdfContext = buildPdfContext();

  const systemPrompt = `You are a data extraction assistant for a youth soccer coaching app. You will receive a weekly practice email from Mauro Nobre (Technical Director, Sporting Kaw Valley).

Output ONLY valid JavaScript code. No markdown fences, no explanation.

Extract the MONDAY/TUESDAY drills (items 1-4) and WEDNESDAY/THURSDAY drills (items 1-4) from the email. Include ALL drills from the email in the output.

Each drill object must have these fields:
- id: string ('m1'-'m4' for Mon/Tue, 'wt1'-'wt4' for Wed/Thu)
- name: string
- summary: string (<60 chars, use · separator)
- detail: string (full description with setup, rules, progressions)
- points: array of strings (coaching points, or empty [])
- badge: string (1-3 words)
- pdfUrl: string or null (URL to the drill's PDF diagram)${pdfContext}

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
      summary: 'Brief summary',
      detail: 'Full description.',
      points: [],
      badge: 'Short label',
      pdfUrl: 'https://raw.githubusercontent.com/...' or null,
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
      pdfUrl: null,
    },
  ],
};

RULES:
- Use single quotes. Escape apostrophes with backslash.
- badge: common values: 'Moves training', '1v1 dribbling', 'Possession', 'Scrimmage', 'Passing', 'Ball mastery', 'Tactical', 'Attack & defend', '1v1 + passing'.
- The last drill is usually "2v2 Game" → badge 'Scrimmage'.
- subtitle: derive from microcycle focus.
- If the email mentions a week date, use it in WEEK_LABEL.`;

  return await callClaude(systemPrompt, `Parse this email. Output ONLY JavaScript:\n\n${drillText}`);
}

// ── STEP 2: Generate fresh warmup drills ────────────────────
async function generateWarmup() {
  console.log("Step 2: Generating fresh warmup drills...");

  const systemPrompt = `You are a youth soccer warmup designer for a coaching app. Generate TWO warmup drills for this week.

REQUIREMENTS:
- w1: DYNAMIC MOVEMENT exercise (no ball) — vary each week. Draw from FIFA 11+ Kids, US Soccer best practices. Examples: A-skips, B-skips, lateral bounds, carioca, hip openers, bear crawls, inch worms, high knees, butt kicks, Frankenstein walks, lateral shuffles, backpedal.
- w2: FUN GAME WITH THE BALL — a different game each week. Examples: Sharks & Minnows, Freeze Tag, Treasure Island, Pac-Man Dribbling, Ball Tag, King of the Ring, Traffic Light Dribbling, Musical Balls, Blob Tag, Fox Tails, Capture the Cone, Hospital Tag.

This is week ${weekNumber} — pick DIFFERENT drills than weeks ${weekNumber - 1} or ${weekNumber - 2}.

Output ONLY valid JavaScript:

export const WARMUP = {
  title: 'Warmup — Every Session',
  subtitle: '~10 min · before all drills',
  color: '#1D9E75',
  drills: [
    {
      id: 'w1',
      name: 'Dynamic Movement Circuit',
      summary: 'Jog · high knees · butt kicks · shuffles',
      detail: 'Description of how to run it.',
      points: [],
      badge: 'Injury prevention',
      pdfUrl: null,
    },
    {
      id: 'w2',
      name: 'Sharks & Minnows (with ball)',
      summary: 'Dribble across grid · sharks kick balls out',
      detail: 'Description.',
      points: [],
      badge: 'Ball mastery',
      pdfUrl: null,
    },
  ],
};

Use single quotes. Escape apostrophes. pdfUrl is always null for warmups.`;

  return await callClaude(
    systemPrompt,
    `Generate two fresh warmup drills for week ${weekNumber}. Output ONLY JavaScript:`,
    2000
  );
}

// ── STEP 3: Combine and write ───────────────────────────────
async function main() {
  console.log(`Generating drills.js for week ${weekNumber} (${weekLabel})...`);
  console.log(`Input: ${drillText.length} chars, ${Object.keys(pdfMapping).length} PDFs\n`);

  const [sessionsCode, warmupCode] = await Promise.all([
    generateSessions(),
    generateWarmup(),
  ]);

  const weekLabelMatch = sessionsCode.match(/export const WEEK_LABEL\s*=\s*'[^']+';/);
  const weekLabelLine = weekLabelMatch
    ? weekLabelMatch[0]
    : `export const WEEK_LABEL = 'Week of ${weekLabel}';`;

  const warmupBlock = warmupCode.includes("export const WARMUP")
    ? warmupCode
    : `export const WARMUP = ${warmupCode}`;

  const monTueMatch = sessionsCode.match(/export const MON_TUE\s*=\s*\{[\s\S]*?\n\};/);
  const wedThuMatch = sessionsCode.match(/export const WED_THU\s*=\s*\{[\s\S]*?\n\};/);

  if (!monTueMatch || !wedThuMatch) {
    console.error("❌ Could not extract MON_TUE or WED_THU");
    console.error("Output (first 500 chars):\n" + sessionsCode.substring(0, 500));
    process.exit(1);
  }

  const header = `// ─────────────────────────────────────────────
//  WEEKLY DRILL DATA  —  edit this file each week
//  then run: eas build --platform ios --profile production
// ─────────────────────────────────────────────`;

  const finalOutput = [
    header, "", weekLabelLine, "", warmupBlock, "", monTueMatch[0], "", wedThuMatch[0], "",
  ].join("\n");

  // ── Validate ──────────────────────────────────────────
  console.log("\nValidating...");

  const required = ["WEEK_LABEL", "WARMUP", "MON_TUE", "WED_THU"];
  const missing = required.filter((n) => !finalOutput.includes(`export const ${n}`));
  if (missing.length > 0) {
    console.error(`❌ Missing exports: ${missing.join(", ")}`);
    process.exit(1);
  }

  const tmpPath = path.join(__dirname, "_tmp_validate.mjs");
  let code = finalOutput;

  fs.writeFileSync(tmpPath, code);
  try {
    const { execSync } = require("child_process");
    execSync(`node --input-type=module --check < "${tmpPath}"`, { stdio: "pipe" });
    console.log("✅ Syntax valid");
  } catch (e) {
    code = code.replace(/,(\s*[}\]])/g, "$1");
    fs.writeFileSync(tmpPath, code);
    try {
      const { execSync } = require("child_process");
      execSync(`node --input-type=module --check < "${tmpPath}"`, { stdio: "pipe" });
      console.log("✅ Syntax valid after auto-fix");
    } catch (e2) {
      console.error("❌ Syntax error:\n" + (e2.stderr?.toString() || e2.message));
      process.exit(1);
    }
  } finally {
    try { fs.unlinkSync(tmpPath); } catch (e) {}
  }

  const drillCount = (code.match(/id:\s*'/g) || []).length;
  const pdfCount = (code.match(/pdfUrl:\s*'https/g) || []).length;
  console.log(`📋 ${drillCount} drills, ${pdfCount} with PDF links`);

  if (drillCount < 4) {
    console.error("❌ Too few drills (" + drillCount + ")");
    process.exit(1);
  }

  fs.writeFileSync(outputPath, code + "\n", "utf-8");
  console.log(`✅ Written to ${outputPath} (${code.length} bytes)`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
