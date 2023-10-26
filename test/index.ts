import { readFile } from "node:fs/promises";
import { read } from "../src/index.js";

const GRF = new URL("./requiredGameRules-decompressed.grf",import.meta.url);

const data = await readFile(GRF);
console.log(data);

const grf = await read(data);
console.log(grf);