Oak & Arrow V58.2 — Confirmed Cross-Device Kid Profiles

Fix:
- Avatar/Explorer and World remain unique per child.
- Firestore is authoritative once a synced kidProfile exists.
- Local storage is now only a fallback.
- Each kid profile write includes the authenticated Firebase UID.
- Every change is read back from Firestore immediately after writing.
- If Firebase blocks a write, the app now says cross-device sync failed instead
  of silently looking successful because of localStorage.

No avatar art or World art changed.
V58.1 World-visibility transparency retained.
V58.0 five-button kid navigation and task-click handler retained.

REQUIRED:
Replace your V58.1 kidProfiles Firebase rules block with FIREBASE_RULES_V58_2.txt.
Do not loosen the main families/risser document rules.
