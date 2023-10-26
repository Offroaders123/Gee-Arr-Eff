import { readFile } from "node:fs/promises";
import { read } from "nbtify";

const GRF = new URL("./requiredGameRules-decompressed.grf",import.meta.url);

const data = await readFile(GRF);
console.log(data);

for (let i = 0; i < data.byteLength; i++){
  try {
    console.log(await read(data.subarray(i),{ name: true, compression: null, bedrockLevel: null, strict: false }));
    console.log(`Byte offset: ${i}`);
  } catch {
    continue;
  }
}