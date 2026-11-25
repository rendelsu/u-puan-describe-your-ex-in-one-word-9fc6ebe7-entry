import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "Tutorial";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");

if (word.length < 1 || word.length > 111 || /\s/.test(word)) {
  throw new Error("entry must be exactly one word of 1-111 characters");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, word, "utf8");
chmodSync(outFile, 0o644);
