// Laugh Track: The Crypto Trading Joke Contest
// Writes one one-line joke about crypto/trading life to /output/entry.txt.
// The joke (draft #17, 25/25 in drafts.md): the dip keeps dipping.
// Gate: 1-200 chars, UTF-8, not only whitespace — this entry is 64 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "I bought the dip. Then the dip bought a shovel and kept digging.";

// Sanity check the gate before writing: length must be 1..200.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error("joke fails the gate: length " + JOKE.length);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
