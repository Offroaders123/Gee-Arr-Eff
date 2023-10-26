import type { GRF } from "./format.js";

export async function read(data: Uint8Array): Promise<GRF> {
  const view = new DataView(data.buffer,data.byteOffset,data.byteLength);
  let pointer: number = 16;
  const decoder = new TextDecoder();

  const tableSize = 2000 ?? view.getInt32((pointer+=4)-4);
  console.log(tableSize);

  const stringLookUpTable = Array<string>(tableSize);
  for (let i = 0; i < stringLookUpTable.length; i++){
    // ReadString
    const stringLength = view.getInt16((pointer+=2)-2);
    const string = decoder.decode(data.subarray(pointer,pointer+=stringLength));
    console.log(stringLength,string);
  }

  return {};
}