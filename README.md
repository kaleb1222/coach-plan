# Coach's Plan — iOS App (Windows Setup)

A real native iOS app built with Expo + React Native. No Mac needed.
Built in the cloud by Expo EAS, submitted to TestFlight from your browser.

---

## What you need (all free or already have)

- Windows PC
- Apple Developer account ($99/yr — you have this)
- Node.js installed → https://nodejs.org (download LTS)
- A free GitHub account → https://github.com
- A free Expo account → https://expo.dev

---

## ONE-TIME SETUP (~30 min)

### Step 1 — Install tools
Open Windows PowerShell and run:
```
npm install -g expo-cli eas-cli
```

### Step 2 — Put project on GitHub
1. Go to https://github.com → New repository → name it `coach-plan` → Create
2. Download this zip, unzip it
3. Open PowerShell in the unzipped folder and run:
```
git init
git add .
git commit -m "initial"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/coach-plan.git
git push -u origin main
```

### Step 3 — Set up Expo EAS
In the same folder run:
```
eas login
eas init
```
Copy the project ID it gives you and paste it into `app.json` where it says `YOUR_EAS_PROJECT_ID`.

### Step 4 — Configure your Apple info
Edit `eas.json` and fill in:
- `YOUR_APPLE_ID@email.com` → your Apple ID email
- `YOUR_TEAM_ID` → find this at https://developer.apple.com/account (top right)

Edit `app.json`:
- Change `com.yourname.coachplan` to something unique like `com.smithfamily.coachplan`

### Step 5 — First build & submit to TestFlight
```
eas build --platform ios --profile production
eas submit --platform ios --profile production
```
EAS builds in the cloud (takes ~10 min). You'll get an email when it's ready.

### Step 6 — Add yourself as TestFlight tester
1. Go to https://appstoreconnect.apple.com
2. Your app → TestFlight → Internal Testing → add your Apple ID
3. Open TestFlight on your iPhone → install Coach's Plan

---

## WEEKLY UPDATE WORKFLOW (~5 min)

Every week when you get new drills from Claude:

### 1. Claude gives you an updated `drills.js`
Just tell Claude: *"Here are next week's drills: [paste PDFs]. Give me an updated drills.js."*

### 2. Replace the file
Drop the new `drills.js` into the `src/` folder, replacing the old one.

### 3. Bump the build number
In `app.json`, change `"buildNumber": "1"` → `"buildNumber": "2"` (increment each week).

### 4. Push to GitHub
```
git add src/drills.js app.json
git commit -m "Week of Mar 31 drills"
git push
```

### 5. Build and submit
```
eas build --platform ios --profile production
eas submit --platform ios --profile production
```

### 6. Update on your phone
TestFlight will notify you. Tap Update.

---

## File structure — what each file does

```
CoachPlanApp/
├── App.js                  ← tab bar and header (don't touch)
├── src/
│   ├── drills.js           ← ★ ONLY FILE YOU EDIT EACH WEEK ★
│   ├── DrillCard.js        ← expandable drill UI (don't touch)
│   └── SessionScreen.js    ← session layout + notes (don't touch)
├── app.json                ← app name, bundle ID, build number
├── eas.json                ← build and submit config
└── package.json            ← dependencies (don't touch)
```

---

## Asking Claude for a weekly update

Say: *"Here are next week's drills: [attach PDFs or paste drill details]. Give me an updated drills.js file."*

Claude will output a ready-to-drop-in `drills.js` with all drill names, details, coaching points, and the correct week label already set.
