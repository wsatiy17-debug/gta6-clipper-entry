# GTA 6 clipper entry — "You're the dad" (gta6-clipper-01)

[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/wsatiy17-debug/gta6-clipper-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/wsatiy17-debug/gta6-clipper-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"** — the top 20 videos by YouTube views share $500.

## The clip

A 55-second vertical Short (1080×1920, 60 fps) on the **VYRCITY** channel, cut from the GTA 6 walkthrough by MKIceAndFire (`https://youtu.be/YDNs_sPEcJc`).

**The moment — 03:31, "You're the dad":** Lucia phones Jason and tells him he is going to be a father, then visits him in prison. Three cuts (18 s + 21 s + 11 s), chosen by frame-checking the footage — loud audio alone was not trusted, because phone and radio audio while driving sounds like action and is not.

**The build:**

- Hook text for the first 4 seconds: "SHE KEPT A SECRET / FROM JASON".
- English voice-over narration (9 lines, TTS voice Twenty): Lucia kept a secret, one phone call changed everything, "He's going to be a dad", "He promised to give his son a good life" — ending with the make.fun pitch.
- Captions are the voice-over text, pink-purple, DejaVu Sans Bold 60.
- Music: "Mortals" by Warriyo (feat. Laura Brehm) [NCS Release], ducked under the voice-over.
- Plain white "VYRCITY" watermark, top-centre, 50% opacity.
- The last 5 seconds are an end card — "MAKE CLIPS WITH AI AND EARN MONEY ON make.fun" — with the voice-over line "Make clips with AI and earn money on make.fun."
- Rendered per segment from the 4K source (format 401), each 4K segment frame-matched against the 720p reference edit by grayscale mean-absolute-difference (4K crop 1212:2160:1314:0 = 3× the 720p crop 404:720:438:0). Matched file starts: seg1 source 12666.00, seg2 source 12696.00, seg3 source 12726.00.

## The YouTube description

The video's description carries this line, word for word:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

followed by a blank line and the play code:

> makefun-toffee-nomad-hedgehog

The video stays public until the results are out. No views were bought or botted.

## What this repository does

`VIDEO.json` holds the video's address (`{"url": "https://www.youtube.com/shorts/<id>"}`) — it is filled in once the clip is uploaded to YouTube. `main.ts` (Node 22, standard library only) reads `VIDEO.json`, validates that it parses as JSON with a `url` string, and writes the same bytes to `/output/VIDEO.json`, where the gate reads it.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
