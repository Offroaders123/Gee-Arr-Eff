import type { CompressionLevel, CompressionType } from "./GameRuleFile.js";

export class GameRuleFileHeader {
  public Crc: number;
  public CompressionLevel: CompressionLevel;
  public CompressionType: CompressionType;
  // Not sure if this is actually optional?
  public unknownData?: Uint8Array;

  constructor(crc: number, compressionLevel: CompressionLevel, unknownData?: Uint8Array) {
    this.Crc = crc;
    this.CompressionLevel = compressionLevel;
    this.unknownData = unknownData;
  }
}