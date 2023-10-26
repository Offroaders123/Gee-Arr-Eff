import { readFile } from "node:fs/promises";
import { inflateSync, inflateRawSync, gunzipSync } from "node:zlib";

const GRF = new URL("./requiredGameRules.grf",import.meta.url);

const data = await readFile(GRF);
console.log(data);

for (let i = 0; i < data.byteLength; i++){
  try {
    console.log(gunzipSync(data.subarray(i)));
    console.log(`Byte offset: ${i}`);
  } catch {
    continue;
  }
}