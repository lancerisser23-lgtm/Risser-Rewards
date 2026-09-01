Risser Rewards v48.1 — Clean World Background Fix

FIX:
The v48 world image files accidentally contained mockup UI text/icons. Because the live app
renders its own title, stats, progress bar, and icons on top, those elements appeared doubled.

v48.1 replaces ONLY the four world background assets with clean scenery:
- assets/noah-world.png — clean mountain landscape
- assets/eli-world.png — clean golden savanna landscape
- assets/shepherd-world.png — clean forest/creek landscape
- assets/juniper-world.png — clean meadow/rainbow landscape

No text, stat pills, progress bars, avatars, or UI controls are intentionally part of these
background files. The live app remains responsible for all interface content.

All v48 functionality is retained, including 🔥 Level Ups navigation and Settings quick nav.
Service worker cache bumped so devices fetch the corrected assets.

DEPLOYMENT:
Upload the full package contents to GitHub, including the assets folder.
No Firebase rules changes are needed.
