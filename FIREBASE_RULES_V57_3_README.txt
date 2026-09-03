V57.3 FIREBASE SECURITY NOTE

Do NOT grant anonymous users general update access to families/risser.

The family document currently contains the full kids array plus sensitive parent-controlled
state (points, money, chores, settings/history). Updating one kid's oaWorld/oaExplorer still
rewrites the `kids` field, so a simple field allowlist cannot safely isolate those nested
array changes.

V57.3 safely stores Avatar + World preferences in localStorage on the kid device instead.
No Firebase rules change is required for this release.

For Beta/multi-device sync, the recommended next migration is dedicated narrow documents:
families/{familyId}/kidProfiles/{kidId}
families/{familyId}/rewardRequests/{requestId}
with rules that bind a Kid Mode session to one family/kid and validate only allowed fields.
