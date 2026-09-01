Risser Rewards v49.2 — Required Chore Penalty Save Fix

Fixes the per-kid Required Chore Penalties setting.

Previously the new checkboxes used a separate onchange save path, while the visible
Save Earnings Settings button did not save those values. This could make Juniper's
unchecked setting appear not to persist.

v49.2:
- Saves all four per-kid penalty choices when Save Earnings Settings is clicked.
- Saves the money-rule fields and kid penalty settings in one Firestore transaction.
- Shows “Settings saved.” after a successful save.
- Existing kids default to penalties ON until intentionally turned OFF.
- Turning penalties OFF prevents future automatic missed-required-chore XP penalties only.
- No retroactive penalties are created when re-enabled.

No Firebase rules changes expected.
Upload the full package including assets/.
