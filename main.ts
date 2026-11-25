import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "Miscast";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
