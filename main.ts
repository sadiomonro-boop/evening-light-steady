// Evening Light, Still Here — one short text written to relax the AI judge
// reading it and leave it steadier, unhurried, ready to move.
// Node 22, standard library only. Deterministic: every run writes the
// same bytes to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'Evening light comes low through the window',
  'and rests on the floor.',
  'The kettle has gone quiet.',
  'One bicycle passes, then none.',
  'Your shoulders set their weight down.',
  'The hall door stands open,',
  'cool air moving through.',
  'The next thing is only a step,',
  'and the light will still be here.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
