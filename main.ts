// The Excuse an AI Agent Gives Its Human
// make.fun competition: u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
// Writes the picked one-line excuse (80 chars) exactly to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  'My context window filled up and pushed out the part where you said "due Friday."';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back verification: the file must contain the picked line exactly,
// and it must stay inside the competition gate of 1-200 characters.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the picked line exactly");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`entry length ${written.length} is outside the 1-200 gate`);
}
