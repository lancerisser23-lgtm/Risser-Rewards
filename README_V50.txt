Risser Rewards V50 — Simplification & Usability

SOURCE OF TRUTH
Built from V49.3 Sunday Earnings Check-In with the full V49 asset set preserved.

V50 KID EXPERIENCE
- Kid Mode hides Parent HQ, Settings, approval/configuration controls and parent payout controls.
- Parent Access is a small option on the family/name selector screen.
- Kid selects their avatar and lands in their world.
- Three equal-weight choices: Responsibilities, Jobs, Growth.
- Existing Level Ups / Challenges / Missions are presented as Growth Missions.
- Responsibilities = required household work.
- Jobs = optional household work, including paid jobs.
- Growth = existing challenge/Level Up engine and history.
- Kid can still see simple Money, XP, reward goal progress and recent activity.

SIMPLIFIED ECONOMY
- Visible kid economy is Money + XP only.
- Legacy rewardPoints/familyPoints fields and ledger rows are NOT deleted or rewritten.
- Those legacy fields continue silently powering existing reward progress so historical progress and redemptions do not break.
- Reward screens show progress percentages instead of a separate Points currency.
- Existing historical point data remains intact for backward compatibility.

REWARDS
- Focused on “What am I working toward?”
- One active personal goal per kid, selected from a short list.
- One Family Team Goal.
- No kid-facing reward store.
- Parent can complete a reached goal using the existing redemption transaction underneath.

PARENT HQ
- One unified Waiting for Approval area for Responsibilities, Jobs, Growth Missions and missed-responsibility excuse requests.
- Behavior tools, Growth awards, recent approvals and bulk excuses live under More Parent Tools.
- V49.3 Sunday Earnings Check-In remains intact.

SETTINGS
- Simple money setup first:
  1) Earn real money? Yes/No
  2) Weekly earning amount
  3) Save some to Future Fund? Yes/No + percentage
- Normal schedule choices are Every Day, Certain Days, Weekly and Anytime.
- Existing advanced schedules remain available under the Advanced option group.
- Advanced money, reward-goal, penalty and family mode controls remain underneath.
- Existing chore, Growth Mission, reward, earnings and Firebase document structures are preserved.

DATA / FIREBASE
- No destructive data migration.
- Existing family doc, kids, tasks, approvals, payments, futureFundDeposits, ledger,
  choreLibrary, challenges, challengeLogs, rewards and historical reward progress remain intact.
- Added optional family fields:
  moneyEnabled (defaults effectively to true when absent)
  v50Economy = "money_xp_visible"
- No Firebase rules changes expected.

DEPLOY
Upload the COMPLETE contents of this ZIP, including assets/, manifest.webmanifest and sw.js.
