import { createRouter } from './router';

// Imports
import * as Area from './modules/area';
import * as Asset from './modules/asset';
import * as Chain from './modules/chain';
import * as Character from './modules/character';
import * as Chat from './modules/chat';
import * as Collection from './modules/collection';
import * as Core from './modules/core';
import * as Game from './modules/game';
import * as Interface from './modules/interface';
import * as Item from './modules/item';
import * as Job from './modules/job';
import * as Market from './modules/market';
import * as Product from './modules/product';
import * as Profile from './modules/profile';
import * as Raffle from './modules/raffle';
import * as Skill from './modules/skill';
import * as Video from './modules/video';

// Exports
export * as Area from './modules/area';
export * as Asset from './modules/asset';
export * as Chain from './modules/chain';
export * as Character from './modules/character';
export * as Chat from './modules/chat';
export * as Collection from './modules/collection';
export * as Core from './modules/core';
export * as Game from './modules/game';
export * as Interface from './modules/interface';
export * as Item from './modules/item';
export * as Job from './modules/job';
export * as Market from './modules/market';
export * as Product from './modules/product';
export * as Profile from './modules/profile';
export * as Raffle from './modules/raffle';
export * as Skill from './modules/skill';
export * as Video from './modules/video';

export type * as Schema from './schema';

export type Router = ReturnType<typeof createRouter>;

export type ApplicationServiceType = Partial<{
  Area: Area.Service;
  Asset: Asset.Service;
  Chain: Chain.Service;
  Character: Character.Service;
  Chat: Chat.Service;
  Collection: Collection.Service;
  Core: Core.Service;
  Game: Game.Service;
  Interface: Interface.Service;
  Item: Item.Service;
  Job: Job.Service;
  Market: Market.Service;
  Product: Product.Service;
  Profile: Profile.Service;
  Raffle: Raffle.Service;
  Skill: Skill.Service;
  Video: Video.Service;
}>;

export type ApplicationModelType = Partial<
  Area.Types.Mappings &
    Asset.Types.Mappings &
    Chain.Types.Mappings &
    Character.Types.Mappings &
    Chat.Types.Mappings &
    Collection.Types.Mappings &
    Core.Types.Mappings &
    Game.Types.Mappings &
    Interface.Types.Mappings &
    Item.Types.Mappings &
    Job.Types.Mappings &
    Market.Types.Mappings &
    Product.Types.Mappings &
    Profile.Types.Mappings &
    Raffle.Types.Mappings &
    Skill.Types.Mappings &
    Video.Types.Mappings
>;

export interface Application {
  model: ApplicationModelType;
  service: ApplicationServiceType;
}

export type RouterClient = {
  socket: any;
  roles: string[];
};

export type RouterContext = {
  app: Application;
  client?: RouterClient;
  profile?: Profile.Types.Profile;
};

export interface Signature {
  hash?: string;
  address?: string;
}

export type Position = {
  x: number;
  y: number;
  z?: number;
};

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export enum GameEnum {
  Game1 = 1,
  Game2 = 2,
  Game3 = 3,
}

export enum ParamTypeEnum {
  Days = 'days',
  Value = 'value',
  Amount = 'amount',
  Skill = 'skill',
  Token = 'token',
  Type = 'type',
  SpellType = 'spellType',
  Effect = 'effect',
  Class = 'class',
  ItemType = 'itemType',
  RandomAttributeID = 'randomAttributeID',
  AttributeSlot = 'attributeSlot',
  AttributeID = 'attributeID',
  Target = 'target',
  Stat = 'stat',
  SetName = 'setName',
  Conditions = 'conditions',
  Mod = 'mod',
  Rarity = 'rarity',
  Gems = 'gems',
  Skills = 'skills',
  SkillMods = 'skillMods',
}

export enum NatureEnum {
  Mechanic = 'Mechanic',
  Neutral = 'Neutral',
  Buff = 'Buff',
  Debuff = 'Debuff',
  Requirement = 'Requirement',
  Conditional = 'Conditional',
  Container = 'Container',
}

export enum InfluenceEnum {
  Offense = 'Offense',
  Defense = 'Defense',
  Movement = 'Movement',
  Game = 'Game',
  Reward = 'Reward',
  Skill = 'Skill',
  Item = 'Item',
  All = 'All',
  Player = 'Player',
  Gameplay = 'Gameplay',
}

export enum RaidsMechanic {
  HarvestYield = 1,
  HarvestFee = 2,
  HarvestFeeToken = 3,
  SendHarvestHiddenPool = 4,
  BurnEntireHarvest = 5,
  HarvestBurn = 6,
  FindShard = 7,
  RemoveFees = 8,
  UnstakeLocked = 9,
  EarlyUnstakeNoReward = 10,
  RandomRuneExchange = 11,
  FindGuildToken = 12,
  MagicFind = 13,
  FractureItem = 14,
  LaunchPoolReward = 15,
  LaunchPoolToken = 16,
  FreezeFees = 17,
  UnableUseRuneform = 18,
  CreateRandomRuneform = 19,
  SpecificGuild = 20,
  SpecificClass = 21,
  RemoveTransferFees = 22,
  HarvestFeeToRandomRaider = 23,
  ShardOnHarvest = 24,
  HarvestStartDelay = 25,
  HarvestClaimDelay = 26,
  EarlyUnstakeFee = 27,
  EarlyUnstakeFeeValue = 28,
  FreezeFeesValue = 29,
  HarvestLockedLp = 30,
  DepositLockedLp = 31,
  WithdrawLockedLp = 32,
  TransmuteItem = 33,
  AvoidBurn = 34,
  EarlyAccess = 35,
  NeverHarvestCurrentRaid = 36,
  GameLottery = 37,
  IncreasePoolMultiplier = 38,
  AddSkill = 39,
  Rarity = 40,
  GenericAttribute1 = 41,
  GenericAttribute2 = 42,
  RandomPerfection3 = 43,
  RandomPerfection4 = 44,
  RandomPerfection5 = 45,
  BurnReflect = 46,
  ReduceBurn = 47,
  GuildMemberCapacity = 48,
  GuildInventorySpaces = 49,
  GuildFarmingYield = 50,
  GuildTokenStakeRequired = 51,
  GuildTokenValueRequired = 52,
  GuildRuneStakeRequired = 53,
  PetAttributeBonus = 54,
  Sockets = 55,
  SpecificRuneRewardToken = 56,
  SpecificRuneRewardAmount = 57,
  ResetSockets = 58,
  CrafterCertificate = 59,
  AddSkillLevel = 60,
  HarvestCritChance = 61,
  HarvestCritMultiplier = 62,
  HarvestOverTime = 63,
  HarvestVestmentReduction = 64,
  HarvestVestmentIncrease = 65,
  HarvestTheft = 66,
  HarvestTheftMaxIncrease = 67,
  HarvestTheftMinDecrease = 68,
  RandomRuneBonus = 69,
  YieldBonusSpecificWeapon = 70,
  RandomRuneSpecificWeapon = 71,
  SpecificWeaponType = 72,
  HarvestTheftDefense = 73,
  RandomRuneExchangeSpecific = 74,
  RandomRuneToken = 75,
  SetBonusItems = 76,
  TwoItemSetBonus = 77,
  ThreeItemSetBonus = 78,
  FourItemSetBonus = 79,
  FiveItemSetBonus = 80,
  GuildTreasuryYieldBonus = 81,
  HarvestToTreasury = 82,
  GuildTreasuryAccessKey = 83,
  RandomStaticAttribute = 84,
  KarmicInfluence = 85,
  VestingUnequipLock = 86,
  RaidUnequipLockOnStake = 87,
  FindFashionShard = 88,
  AddSkillPoint = 89,
  UnlockSkillMod = 90,
  AttributeDebuffToBuffOnEquipTime = 91,
  AttributeUnlockOnEquipTime = 92,
  AttributeUnlockOnConsecutiveEquipTime = 93,
  TargetAttributeToUnlock = 94,
  DebuffAttributeToChange = 95,
  BuffAttributeToChange = 96,
  DebuffToBuffAttributeRange = 97,
  RequireAttributeID = 98,
  RequireAttributeValue = 99,
  RequireSkill = 100,
  CriticalCraftChance = 101,
  DisenchantmentBonus = 102,
  CriticalSlamChance = 103,
  RequireHarvestedRunes = 104,
  IgnoreTheftDefense = 105,
  HarvestSpeed = 106,
  StunOnHarvest = 107,
  StunRecovery = 108,
  FractureReduction = 109,
  LimitedDurability = 110,
  BeginRaidEnergy = 111,
  BeginRaidHealthIncrease = 112,
  EnergyTheftOnHarvest = 113,
  EnergyPoolMultiplierIncrease = 114,
  UnequipLockRaidDuration = 115,
  AttributeDebuffToBuffOnBurnedRunes = 116,
  AttributeDebuffToBuffOnHarvestedRunes = 117,
  YieldBonusToHiddenPool = 118,
  YieldBonusFromHiddenPool = 119,
  AttributeDebuffToBuffWhenHiddenPoolStake = 120,
  AttributeUnlockWhenHiddenPoolStake = 121,
  AttributeScaleWithHiddenPoolStake = 122,
  AvoidHarvestLossWithoutBonus = 123,
  HarvestFeeReductionPenalty = 124,
  HarvestYieldBonusWeapons = 125,
  UnstakeLockedDurationFromHarvest = 126, // Unstake Locked Duration From Harvest
  RaidTwoAttribute = 127, // Hidden Attribute
  RaidThreeAttribute = 128, // Hidden Attribute
  ChargeableLock = 129, //
  ChargeableBurn = 130, //
  ChargeableLockLP = 131, //
  ChargeableBurnLP = 132, //
  AddSkillWithParam = 137, // Add Skill With Param
  HarvestFeeWithParam = 138, // Harvest Fee With Param
  HarvestFeeGroup = 139, // Harvest Fee Group
}

export enum EvolutionMechanic {
  PhysicalDamage = 1001, // Physical Damage
  PoisonDamage = 1002, // Poison Damage
  FireDamage = 1003, // Fire Damage
  LightningDamage = 1004, // Lightning Damage
  FrostDamage = 1005, // Frost Damage
  RendingDamage = 1006, // Rending Damage
  ArcaneDamage = 1007, // Arcane Damage
  DamageTypeDamage = 1008, // Damage Type Damage
  DamageType = 1009, // Damage Type
  IncreaseDamage = 1010, // Increase Damage
  CriticalHitChance = 1011, // Critical Hit Chance
  CriticalHitMultiplier = 1012, // Critical Hit Multiplier
  CriticalHitAilmentChance = 1013, // Critical Hit Ailment Chance
  PoisonDamageExchange = 1014, // Poison Damage Exchange
  FireDamageExchange = 1015, // Fire Damage Exchange
  LightningDamageExchange = 1016, // Lightning Damage Exchange
  FrostDamageExchange = 1017, // Frost Damage Exchange
  RendingDamageExchange = 1018, // Rending Damage Exchange
  LifeSteal = 1019, // Life Steal
  AttackSpeed = 1020, // Attack Speed
  AilmentChance = 1021, // Ailment Chance
  SlowChance = 1022, // Slow Chance
  StunChance = 1023, // Stun Chance
  BleedChance = 1024, // Bleed Chance
  PoisonChance = 1025, // Poison Chance
  BurnChance = 1026, // Burn Chance
  SilenceChance = 1027, // Silence Chance
  SickChance = 1028, // Sick Chance
  SacrificeChance = 1029, // Sacrifice Chance
  MovementSpeedIncrease = 1030, // Movement Burst Increase
  MaximumHealthIncrease = 1050, // Maximum Health Increase
  ArcaneResist = 1051, // Arcane Resist
  LightningResist = 1052, // Lightning Resist
  IceResist = 1053, // Ice Resist
  PoisonResist = 1054, // Poison Resist
  RendResist = 1055, // Rend Resist
  FireResist = 1056, // Fire Resist
  FreezeResist = 1057, // Freeze Resist
  StunResist = 1058, // Stun Resist
  AilmentResist = 1059, // Ailment Resist
  DamageResist = 1060, // Damage Resist
  LightReflect = 1061, // Light Reflect
  DarkReflect = 1062, // Dark Reflect
  FireReflect = 1063, // Fire Reflect
  IceReflect = 1064, // Ice Reflect
  LightningReflect = 1065, // Lightning Reflect
  RendReflect = 1066, // Rend Reflect
  PoisonReflect = 1067, // Poison Reflect
  ArcaneReflect = 1068, // Arcane Reflect
  AilmentReflect = 1069, // Ailment Reflect
  PhysicalReflect = 1070, // Physical Reflect
  FireAbsorb = 1071, // Fire Absorb
  IceAbsorb = 1072, // Ice Absorb
  LightningAbsorb = 1073, // Lightning Absorb
  ArcaneAbsorb = 1074, // Arcane Absorb
  PoisonAbsorb = 1075, // Poison Absorb
  LightAbsorb = 1076, // Light Absorb
  DarkAbsorb = 1077, // Dark Absorb
  KilledPlayerPenaltyIncrease = 1100, // Killed Player Penalty Increase
  DeathPenaltyDecrease = 1101, // Death Penalty Decrease
  DeathPenaltyAvoid = 1102, // Death Penalty Avoid
  EnergyDecayDecrease = 1104, // Energy Decay Decrease
  EnergyDecayIncrease = 1105, // Energy Decay Increase
  EarlyOrbRevealChance = 1106, // Early Orb Reveal Chance
  OrbTimeReduce = 1107, // Orb Time Reduce
  OrbPickupDamageIncrease = 1108, // Orb Pickup Damage Increase
  OrbPickupHealthIncrease = 1109, // Orb Pickup Health Increase
  OrbPickupMovementSpeedIncrease = 1110, // Orb Pickup Movement Speed Increase
  OrbPickupCritChance = 1111, // Orb Pickup Crit Chance
  OrbTimeIncrease = 1112, // Orb Time Increase
  OrbNoPointsChance = 1113, // Orb No Points Chance
  EarlyOrbPickup = 1114, // Early Orb Pickup
  SelfOrbTimeReduce = 1115, // Self Orb Time Reduce
  SelfOrbTimeIncrease = 1116, // Self Orb Time Increase
  SpriteFuelIncrease = 1117, // Sprite Fuel Increase
  SpriteFuelDecrease = 1118, // Sprite Fuel Decrease
  CriticalPointsChanceIncrease = 1119, // Critical Points Chance Increase
  CriticalPointsMultiplierIncrease = 1120, // Critical Points Multiplier Increase
  WinRewardsIncrease = 1150, // Win Rewards Increase
  ItemRewardsIncrease = 1151, // Item Rewards Increase
  MagicFind = 1152, // Magic Find
  EarlyItemRevealChance = 1155, // Early Item Reveal Chance
  NoRewardsUnlessFirst = 1156, // No Rewards Unless First
  WinStreakRewardIncrease = 1157, // Win Streak Reward Increase
  WinStreakMagicFindIncrease = 1158, // Win Streak Magic Find Increase
  WinRewardsDecrease = 1160, // Win Rewards Decrease
  ItemRewardsDecrease = 1161, // Item Rewards Decrease
  GuildTreasuryWinBonus = 1162, // Guild Treasury Win Bonus
  GuildTreasuryItemBonus = 1163, // Guild Treasury Item Bonus
  DoublePickupChance = 1164, // Double Pickup Chance
  RandomRuneOnWin = 1165, // Random Rune On Win
  TargetItemType = 1166, // Target Item Type
  RuneformFindWin = 1167, // Runeform Find Win
  RuneformFindItem = 1168, // Runeform Find Item
  ShardFindWin = 1169, // Shard Find Win
  ShardFindItem = 1170, // Shard Find Item
  TokenFindWin = 1171, // Token Find Win
  TokenFindItem = 1172, // Token Find Item
  StealVictimRewardsChance = 1173, // Steal Victim Rewards Chance
  ExpBonus = 1174, // Exp Bonus
  LeaderMovementSpeedDecrease = 1200, // Leader Movement Speed Decrease
  LeaderDeathPenaltyIncrease = 1201, // Leader Death Penalty Increase
  LeaderSkillPenalty = 1202, // Leader Skill Penalty
  LeaderDamageResistanceDecrease = 1203, // Leader Damage Resistance Decrease
  LeaderMaxHealthDecrease = 1204, // Leader Max Health Decrease
  LeaderMaxEnergyDecrease = 1205, // Leader Max Energy Decrease
  LeaderDamageDecrease = 1206, // Leader Damage Decrease
  NotLeaderMovementSpeedIncrease = 1207, // Not Leader Movement Speed Increase
  NotLeaderDamageResistanceIncrease = 1208, // Not Leader Damage Resistance Increase
  NotLeaderDamageIncrease = 1209, // Not Leader Damage Increase
  NotLeaderSkillBonus = 1210, // Not Leader Skill Bonus
  IncreaseAttackSpeedOnOrb = 1211, // Increase Attack Speed On Orb
  IncreaseCritChanceOnOrb = 1212, // Increase Crit Chance On Orb
  IncreaseDamageOnOrb = 1213, // Increase Damage On Orb
  IncreaseHealthOnOrb = 1214, // Increase Health On Orb
  PassiveRegenOnOrb = 1215, // Passive Regen On Orb
  IncreaseAttackSpeedOnKill = 1216, // Increase Attack Speed On Kill
  IncreaseCritChanceOnKill = 1217, // Increase Crit Chance On Kill
  IncreaseDamageOnKill = 1218, // Increase Damage On Kill
  IncreaseHealthOnKill = 1219, // Increase Health On Kill
  PassiveRegenOnKill = 1220, // Passive Regen On Kill
  ReduceEnergyConsumptionOnKill = 1221, // Reduce Energy Consumption On Kill
  IncreaseMovementSpeedOnKill = 1222, // Increase Movement Speed On Kill
  EvolveMovementBurst = 1223, // Evolve Movement Burst
  EvolveMovementBurstIncrease = 1224, // Evolve Movement Burst Increase
  EvolveEnergyRegen = 1225, // Evolve Energy Regen
  EvolveReduceEnergyDecay = 1226, // Evolve Reduce Energy Decay
  EvolveAttackSpeed = 1227, // Evolve Attack Speed
  EvolveAttackSpeedIncrease = 1228, // Evolve Attack Speed Increase
  EvolveCooldown = 1229, // Evolve Cooldown
  EvolveCooldownReduction = 1230, // Evolve Cooldown Reduction
  EvolveCrit = 1231, // Evolve Crit
  EvolveCritIncrease = 1232, // Evolve Crit Increase
  EvolveDamage = 1233, // Evolve Damage
  EvolveDamageIncrease = 1234, // Evolve Damage Increase
  EvolveArcane = 1235, // Evolve Arcane
  EvolveArcaneDamage = 1236, // Evolve Arcane Damage
  EvolvePhysicalDamage = 1237, // Evolve Physical Damage
  EvolveElementalDamage = 1238, // Evolve Elemental Damage
  EvolveLifeSteal = 1239, // Evolve Life Steal
  EvolveLifeStealIncrease = 1240, // Evolve Life Steal Increase
  EvolveDamageReduction = 1241, // Evolve Damage Reduction
  EvolveDamageReductionIncrease = 1242, // Evolve Damage Reduction Increase
  EvolveMovementSpeed = 1243, // Evolve Movement Speed
  EvolveMovementSpeedIncrease = 1244, // Evolve Movement Speed Increase
  EvolveExtraMovePoints = 1245, // Evolve Extra Move Points
  EvolveExtraMovePointsIncrease = 1246, // Evolve Extra Move Points Increase
  EvolveHealth = 1247, // Evolve Health
  EvolveHealthIncrease = 1248, // Evolve Health Increase
  EvolveHealthRegen = 1249, // Evolve Health Regen
  EvolveHealthRegenIncrease = 1250, // Evolve Health Regen Increase
  EvolveEnergyRegenIncrease = 1251, // Evolve Energy Regen Increase
  EvolveArcaneAbsorb = 1252, // Evolve Arcane Absorb
  EvolveLightningAbsorb = 1253, // Evolve Lightning Absorb
  EvolveIceAbsorb = 1254, // Evolve Ice Absorb
  EvolveFireAbsorb = 1255, // Evolve Fire Absorb
  EvolvePoisonAbsorb = 1256, // Evolve Poison Absorb
  EvolvePhysicalAbsorb = 1257, // Evolve Physical Absorb
  EvolveReflect = 1258, // Evolve Reflect
  EvolveReflectDamage = 1259, // Evolve Reflect Damage
  EvolveReflectChance = 1260, // Evolve Reflect Chance
  IncreaseMovementSpeed = 1261, // Increase Movement Speed
  EvolveDamageTypeBonus = 1262, // Evolve Damage Type Bonus
  EvolveDamageType = 1263, // Evolve Damage Type
  PassiveRegenOnKillStack = 1264, // Passive Regen On Kill Stack
  EvolveLifeStealStack = 1265, // Evolve Life Steal Stack
  EvolveCritChanceStack = 1266, // Evolve Crit Chance Stack
  EvolveDamageStack = 1267, // Evolve Damage Stack
  EvolveCooldownStack = 1268, // Evolve Cooldown Stack
  EvolveEnergyRegenStack = 1269, // Evolve Energy Regen Stack
  EvolveElementalStack = 1270, // Evolve Elemental Stack
  EvolveArcaneStack = 1271, // Evolve Arcane Stack
  EvolvePhysicalStack = 1272, // Evolve Physical Stack
  EvolveElementalDamageStack = 1273, // Evolve Elemental Damage Stack
  EvolveArcaneDamageStack = 1274, // Evolve Arcane Damage Stack
  EvolvePhysicalDamageStack = 1275, // Evolve Physical Damage Stack
  EvolveMoveSpeedStack = 1276, // Evolve Move Speed Stack
  EvolveAttackSpeedStack = 1277, // Evolve Attack Speed Stack
  EvolveCritStack = 1278, // Evolve Crit Stack
  EvolveDamageStackIncrease = 1279, // Evolve Damage Stack Increase
  IncreaseEnergyRegen = 1280, // Increase Energy Regen
  DecreaseEnergyDecay = 1281, // Decrease Energy Decay
  IncreaseHealthRegen = 1282, // Increase Health Regen
  IncreaseHealth = 1283, // Increase Health
  IncreaseEnergy = 1284, // Increase Energy
  IncreaseLifeSteal = 1285, // Increase Life Steal
  IncreaseReflect = 1286, // Increase Reflect
  IncreaseCooldownReduction = 1287, // Increase Cooldown Reduction
  IncreaseAttackSpeed = 1288, // Increase Attack Speed
  IncreaseCritChance = 1289, // Increase Crit Chance
  // IncreaseDamage = 1290, // Increase Damage
  IncreaseArcaneDamage = 1291, // Increase Arcane Damage
  IncreasePhysicalDamage = 1292, // Increase Physical Damage
  IncreaseElementalDamage = 1293, // Increase Elemental Damage
  IncreaseElemental = 1294, // Increase Elemental
  IncreaseArcane = 1295, // Increase Arcane
  IncreasePhysical = 1296, // Increase Physical
  IncreaseMoveSpeed = 1297, // Increase Move Speed
  IncreaseExtraMovePoints = 1298, // Increase Extra Move Points
  DecreaseEnergyDecayIncrease = 1299, // Decrease Energy Decay Increase
  IncreaseEnergyRegenIncrease = 1300, // Increase Energy Regen Increase
  IncreaseHealthRegenIncrease = 1301, // Increase Health Regen Increase
  IncreaseHealthIncrease = 1302, // Increase Health Increase
  IncreaseEnergyIncrease = 1303, // Increase Energy Increase
  IncreaseLifeStealIncrease = 1304, // Increase Life Steal Increase
  IncreaseReflectIncrease = 1305, // Increase Reflect Increase
  IncreaseCooldownReductionIncrease = 1306, // Increase Cooldown Reduction Increase
  IncreaseAttackSpeedIncrease = 1307, // Increase Attack Speed Increase
  IncreaseCritChanceIncrease = 1308, // Increase Crit Chance Increase
  IncreaseDamageIncrease = 1309, // Increase Damage Increase
  IncreaseArcaneDamageIncrease = 1310, // Increase Arcane Damage Increase
  IncreasePhysicalDamageIncrease = 1311, // Increase Physical Damage Increase
  IncreaseElementalDamageIncrease = 1312, // Increase Elemental Damage Increase
  IncreaseElementalIncrease = 1313, // Increase Elemental Increase
  IncreaseArcaneIncrease = 1314, // Increase Arcane Increase
  IncreasePhysicalIncrease = 1315, // Increase Physical Increase
  IncreaseMoveSpeedIncrease = 1316, // Increase Move Speed Increase
  IncreaseExtraMovePointsIncrease = 1317, // Increase Extra Move Points Increase
}
