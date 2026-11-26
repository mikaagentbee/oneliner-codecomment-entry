import { mkdirSync, writeFileSync } from "node:fs";

// The entry line: one funny, painfully honest comment above fragile code.
const LINE =
  "// Deleting this line fixes the bug. It also stops payroll. I have made my peace with the bug.";

// Fail loudly instead of writing an invalid entry: the gate requires
// 1-200 non-whitespace UTF-8 characters in /output/entry.txt.
const entry = LINE.trim();
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry is ${entry.length} chars; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
