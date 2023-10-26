import { GameRuleFileHeader } from "./GameRuleFileHeader.js";

export enum ValidGameRules {
  MapOptions = "MapOptions",
  ApplySchematic = "ApplySchematic",
  GenerateStructure = "GenerateStructure",
  GenerateBox = "GenerateBox",
  PlaceBlock = "PlaceBlock",
  PlaceContainer = "PlaceContainer",
  PlaceSpawner = "PlaceSpawner",
  BiomeOverride = "BiomeOverride",
  StartFeature = "StartFeature",
  AddItem = "AddItem",
  AddEnchantment = "AddEnchantment",
  WeighedTreasureItem = "WeighedTreasureItem",
  RandomItemSet = "RandomItemSet",
  DistributeItems = "DistributeItems",
  WorldPosition = "WorldPosition",
  LevelRules = "LevelRules",
  NamedArea = "NamedArea",
  ActiveChunkArea = "ActiveChunkArea",
  TargetArea = "TargetArea",
  ScoreRing = "ScoreRing",
  ThermalArea = "ThermalArea",
  PlayerBoundsVolume = "PlayerBoundsVolume",
  Killbox = "Killbox",
  BlockLayer = "BlockLayer",
  UseBlock = "UseBlock",
  CollectItem = "CollectItem",
  CompleteAll = "CompleteAll",
  UpdatePlayer = "UpdatePlayer",
  OnGameStartSpawnPositions = "OnGameStartSpawnPositions",
  OnInitialiseWorld = "OnInitialiseWorld",
  SpawnPositionSet = "SpawnPositionSet",
  PopulateContainer = "PopulateContainer",
  DegradationSequence = "DegradationSequence",
  RandomDissolveDegrade = "RandomDissolveDegrade",
  DirectionalDegrade = "DirectionalDegrade",
  GrantPermissions = "GrantPermissions",
  AllowIn = "AllowIn",
  LayerGeneration = "LayerGeneration",
  LayerAsset = "LayerAsset",
  AnyCombinationOf = "AnyCombinationOf",
  CombinationDefinition = "CombinationDefinition",
  Variations = "Variations",
  BlockDef = "BlockDef",
  LayerSize = "LayerSize",
  UniformSize = "UniformSize",
  RandomizeSize = "RandomizeSize",
  LinearBlendSize = "LinearBlendSize",
  LayerShape = "LayerShape",
  BasicShape = "BasicShape",
  StarShape = "StarShape",
  PatchyShape = "PatchyShape",
  RingShape = "RingShape",
  SpiralShape = "SpiralShape",
  LayerFill = "LayerFill",
  BasicLayerFill = "BasicLayerFill",
  CurvedLayerFill = "CurvedLayerFill",
  WarpedLayerFill = "WarpedLayerFill",
  LayerTheme = "LayerTheme",
  NullTheme = "NullTheme",
  FilterTheme = "FilterTheme",
  ShaftsTheme = "ShaftsTheme",
  BasicPatchesTheme = "BasicPatchesTheme",
  BlockStackTheme = "BlockStackTheme",
  RainbowTheme = "RainbowTheme",
  TerracottaTheme = "TerracottaTheme",
  FunctionPatchesTheme = "FunctionPatchesTheme",
  SimplePatchesTheme = "SimplePatchesTheme",
  CarpetTrapTheme = "CarpetTrapTheme",
  MushroomBlockTheme = "MushroomBlockTheme",
  TextureTheme = "TextureTheme",
  SchematicTheme = "SchematicTheme",
  BlockCollisionException = "BlockCollisionException",
  Powerup = "Powerup",
  Checkpoint = "Checkpoint",
  CustomBeacon = "CustomBeacon",
  ActiveViewArea = "ActiveViewArea"
}

export enum CompressionLevel {
  None = 0,
  Compressed,
  CompressedRle,
  CompressedRleCrc
}

export enum CompressionType {
  /**
   * Zlib compression is used on PS Vita, Wii U and Nintendo Switch.
  */
  Zlib = 0,
  /**
   * Deflate compression is used on Play Station 3.
  */
  Deflate,
  /**
   * XMem compression is used on XBox 360.
  */
  XMem,
}

export class GameRuleFile {
  public readonly Root: GameRule = null;
  public readonly Header: GameRuleFileHeader = null;
  public readonly Compression: CompressionType;

  constructor();
  constructor(header: GameRuleFileHeader);
  constructor(header: GameRuleFileHeader, compressionType: CompressionType);
  constructor(header?: GameRuleFileHeader, compressionType?: CompressionType) {
    if (header === undefined && compressionType === undefined){
      return new new.target(new GameRuleFileHeader(0xffffffff,CompressionLevel.None),null);
    }

    if (header === undefined){
      throw new TypeError("Please provide a file header");
    }

    if (compressionType === undefined){
      return new new.target(header,CompressionType.Zlib);
    }

    this.Root = new GameRule("__ROOT__",null);
    this.Header = header;
    this.Compression = compressionType;
  }

  public AddGameRules(gameRules: Iterable<GameRule>): void {
    this.Root.ChildRules.push(...gameRules);
  }

  /**
   * Adds a new gamerule
   * 
   * @param gameRuleName Name of the game rule.
   * @param validate Whether to check the given gameRuleName.
   * @returns Added GameRule
  */
  public AddRule: typeof GameRule.prototype.AddRule = this.Root.AddRule;
}

/**
 * Contains all valid Parameter names.
*/
export enum ValidParameters {
  plus_x = "plus_x",
  minus_x = "minus_x",
  plus_z = "plus_z",
  minus_z = "minus_z",
  omni_plus_x = "omni_plus_x",
  omni_minus_x = "omni_minus_x",
  omni_plus_z = "omni_plus_z",
  omni_minus_z = "omni_minus_z",
  none = "none",
  plus_y = "plus_y",
  minus_y = "minus_y",
  // plus_x = "plus_x", // Duplicates
  // minus_x = "minus_x",
  // plus_z = "plus_z",
  // minus_z = "minus_z",
  descriptionName = "descriptionName",
  promptName = "promptName",
  dataTag = "dataTag",
  enchantmentId = "enchantmentId",
  enchantmentLevel = "enchantmentLevel",
  itemId = "itemId",
  quantity = "quantity",
  auxValue = "auxValue",
  slot = "slot",
  name = "name",
  food = "food",
  health = "health",
  blockId = "blockId",
  useCoords = "useCoords",
  seed = "seed",
  flatworld = "flatworld",
  filename = "filename",
  rot = "rot",
  data = "data",
  block = "block",
  entity = "entity",
  facing = "facing",
  edgeBlock = "edgeBlock",
  fillBlock = "fillBlock",
  skipAir = "skipAir",
  x = "x",
  x0 = "x0",
  x1 = "x1",
  y = "y",
  y0 = "y0",
  y1 = "y1",
  z = "z",
  z0 = "z0",
  z1 = "z1",
  chunkX = "chunkX",
  chunkZ = "chunkZ",
  yRot = "yRot",
  xRot = "xRot",
  spawnX = "spawnX",
  spawnY = "spawnY",
  spawnZ = "spawnZ",
  orientation = "orientation",
  dimension = "dimension",
  topblockId = "topblockId",
  biomeId = "biomeId",
  feature = "feature",
  minCount = "minCount",
  maxCount = "maxCount",
  weight = "weight",
  id = "id",
  probability = "probability",
  method = "method",
  hasBeenInCreative = "hasBeenInCreative",
  cloudHeight = "cloudHeight",
  fogDistance = "fogDistance",
  dayTime = "dayTime",
  target = "target",
  speed = "speed",
  dir = "dir",
  type = "type",
  pass = "pass",
  for = "for",
  random = "random",
  blockAux = "blockAux",
  size = "size",
  scale = "scale",
  freq = "freq",
  func = "func",
  upper = "upper",
  lower = "lower",
  dY = "dY",
  thickness = "thickness",
  points = "points",
  holeSize = "holeSize",
  variant = "variant",
  startHeight = "startHeight",
  pattern = "pattern",
  colour = "colour",
  primary = "primary",
  laps = "laps",
  liftForceModifier = "liftForceModifier",
  staticLift = "staticLift",
  targetHeight = "targetHeight",
  speedBoost = "speedBoost",
  boostDirection = "boostDirection",
  condition_type = "condition_type",
  condition_value_0 = "condition_value_0",
  condition_value_1 = "condition_value_1",
  beam_length = "beam_length"
}

export class GameRule {
  public Name: string = "";
  public readonly Parent: GameRule = null;
  public Parameters: Map<string,string> = new Map<string,string>();
  public ChildRules: Array<GameRule> = [];

  constructor(name: string, parent: GameRule) {
    this.Name = name;
    this.Parent = parent;
  }

  /**
   * Adds a new gamerule
   * 
   * @param gameRuleName Name of the game rule.
   * @param validate Whether to check the given gameRuleName.
   * @returns Added GameRule
  */
  public AddRule(gameRuleName: string): GameRule;
  /**
   * Adds a new gamerule
   * 
   * @param gameRuleName Name of the game rule.
   * @param validate Whether to check the given gameRuleName.
   * @returns Added GameRule
  */
  public AddRule(gameRuleName: string, validate: boolean): GameRule;
  /**
   * Adds a new gamerule
   * 
   * @param gameRuleName Name of the game rule.
   * @param validate Whether to check the given gameRuleName.
   * @returns Added GameRule
  */
  public AddRule(gameRuleName: string, parameters: Map<string,string>[]): GameRule;
  /**
   * Adds a new gamerule
   * 
   * @param gameRuleName Name of the game rule.
   * @param validate Whether to check the given gameRuleName.
   * @returns Added GameRule
  */
  public AddRule(gameRuleName: string, validateOrParams?: boolean | Map<string,string>[]): GameRule {
    if (validateOrParams === undefined){
      return this.AddRule(gameRuleName,false);
    }

    if (typeof validateOrParams === "boolean"){
      if (validateOrParams === true && !(gameRuleName in ValidGameRules)){
        throw new Error(`${gameRuleName} is not a valid rule name.`);
      }

      const rule = new GameRule(gameRuleName,this);
      this.ChildRules.push(rule);
      return rule;
    } else {
      const rule = this.AddRule(gameRuleName);

      // I'm not totally sure about this check
      if (rule === null){
        throw new TypeError(`Game rule name '${gameRuleName}' is not valid.`);
      }

      for (const param of Object.entries(validateOrParams)){
        rule.Parameters[param[0]] = param[1];
      }

      return rule;
    }
  }
}