// gta6-clipper-01 entry program (Node 22, standard library only).
// It reads VIDEO.json from the repository root, checks it is valid JSON with
// a "url" string, and writes the exact same bytes to /output/VIDEO.json,
// where the gate reads the video address. The entry itself is the YouTube
// Short: a 55-second vertical GTA 6 clip (the "You're the dad" reveal at
// 03:31 of the MKIceAndFire walkthrough) with an English voice-over, pink
// captions, and a closing pitch to make.fun, published on the VYRCITY
// channel. Nothing this program writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'VIDEO.json');
const targetPath = join(OUTPUT_DIR, 'VIDEO.json');

let bytes: Buffer;
try {
  bytes = readFileSync(sourcePath);
} catch (err) {
  console.error(`VIDEO.json could not be read from ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(bytes.toString('utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as Record<string, unknown>).url !== 'string'
) {
  console.error('VIDEO.json must be a JSON object with a "url" string.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(targetPath, bytes);
console.log(`Wrote ${targetPath}`);
