export default [
  {
    "id": 1,
    "name": "Steel",
    "icon": "https://rune.game/images/items/00001.png",
    "image": "https://dl.airtable.com/.attachments/ebfbefa243ac1c41b270a4aec7babccf/95d518ee/00001.png?ts=1657468499&userId=usrf0GZYc5zCl9Cv7&cs=24bc6cd160c60d93",
    "value": "0",
    "type": 1,
    "subType": 1,
    "specificType": 1,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": true,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 198,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "Night Blade",
      "Rune Word": "Tir El",
      "Distribution": "Crafted",
      "Date": "April 25, 2021 - June 3, 2021",
      "Max Supply": "Unknown"
    },
    "recipe": {
      "requirement": [
        {
          "id": 3,
          "quantity": 1
        },
        {
          "id": 1,
          "quantity": 1
        }
      ]
    },
    "description": "Made by Men, this blade is common but has minimal downsides.",
    "shortDescription": "",
    "visualDescription": "The most standard blade of silvery sheen, usually with a handguard and fuller.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "0-2",
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1001,
            "name": "PhysicalDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
            "paramType1": "value",
            "paramValue1": "0-35",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} physical damage",
            "param1": {
              "spec": [
                "3-12"
              ],
              "min": 3,
              "max": 3,
              "value": 3
            }
          },
          {
            "id": 1218,
            "name": "IncreaseDamageOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} damage on kill",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1222,
            "name": "IncreaseMovementSpeedOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} movement speed on kill",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 1011,
            "name": "CriticalHitChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} critical hit chance",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "12-21",
              "min": 12,
              "max": 21
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "7-9",
              "min": 7,
              "max": 9
            },
            "param2": {
              "spec": "AttackSpeed",
              "min": [
                4
              ],
              "max": [
                4
              ],
              "value": [
                4
              ],
              "map": {
                "4": [
                  "AttackSpeed"
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "StaggerChance",
              "min": null,
              "max": null
            },
            "param2": {
              "spec": "5-8",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Heavy Strike",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      490
    ],
    "materials": [
      1
    ],
    "category": "accessory"
  },
  {
    "id": 2,
    "name": "Fury",
    "icon": "https://rune.game/images/items/00002.png",
    "image": "https://dl.airtable.com/.attachments/c65b8688be512e02b41c66cda9a14441/b2011e75/00002.png?ts=1657468505&userId=usrf0GZYc5zCl9Cv7&cs=2c5af5b0500d8327",
    "value": "0",
    "type": 1,
    "subType": 1,
    "specificType": 2,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": true,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2205,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "War Sword",
      "Rune Word": "Nef Eld Tir El",
      "Distribution": "Crafted",
      "Date": "April 25, 2021 - June 3, 2021"
    },
    "recipe": {
      "requirement": [
        {
          "id": 4,
          "quantity": 1
        },
        {
          "id": 2,
          "quantity": 1
        },
        {
          "id": 3,
          "quantity": 1
        },
        {
          "id": 1,
          "quantity": 1
        }
      ]
    },
    "description": "Not much is known about this sword, other than the creator had gone mad.",
    "shortDescription": "",
    "visualDescription": "Both beautiful and frightening, this handle of this ornate long sword is wrapped with crimson cloth. The blade itself glows with faint traces of drifting red light.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "3-7",
              "min": 3,
              "max": 7
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "20-40",
              "min": 20,
              "max": 40
            }
          },
          {
            "id": 5,
            "name": "BurnEntireHarvest",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Chance To Burn Harvest",
            "param1": {
              "spec": "20-40",
              "min": 20,
              "max": 40
            }
          }
        ],
        "perfection": [
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1004,
            "name": "LightningDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/lightningdamage",
            "paramType1": "value",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} lightning damage",
            "param1": {
              "spec": [
                "8-12"
              ],
              "min": 8,
              "max": 8,
              "value": 8
            }
          },
          {
            "id": 1222,
            "name": "IncreaseMovementSpeedOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} movement speed on kill",
            "param1": {
              "spec": "10-30",
              "min": 10,
              "max": 30
            }
          },
          {
            "id": 1201,
            "name": "LeaderDeathPenaltyIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/leaderdeathpenaltyincrease",
            "paramType1": "percent",
            "nature": "Debuff",
            "influences": "Game",
            "description": "{parameter1} increase to points lost on death when leading",
            "param1": {
              "spec": "10-30",
              "min": 10,
              "max": 30
            }
          },
          {
            "id": 1218,
            "name": "IncreaseDamageOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} damage on kill",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 1204,
            "name": "LeaderMaxHealthDecrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/leadermaxhealthdecrease",
            "paramType1": "percent",
            "nature": "Debuff",
            "influences": "Defense",
            "description": "{parameter1} less maximum health when leader",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 1100,
            "name": "KilledPlayerPenaltyIncrease",
            "isEnabled": true,
            "nexusLink": "https://nexus.rune.game/item-attribute/killedplayerpenaltyincrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} greater point penalty for defeated opponents.",
            "param1": {
              "spec": "20-20",
              "min": 20,
              "max": 20,
              "value": 20
            }
          },
          {
            "id": 1011,
            "name": "CriticalHitChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} critical hit chance",
            "param1": {
              "spec": "3-3",
              "min": 3,
              "max": 3,
              "value": 3
            }
          },
          {
            "id": 1301,
            "name": "BecomeBloodDrunk",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/becomeblooddrunk",
            "paramType1": "percent",
            "paramValue1": "0-1",
            "nature": "Debuff",
            "influences": "Movement",
            "description": "Can become blood drunk.",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "14-18",
              "min": 14,
              "max": 18
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2903,
            "name": "IncreaseRankRewardBonus",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Increase to Rank Reward Bonuses",
            "param1": {
              "spec": "0-20",
              "min": 0,
              "max": 20
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "5-25",
              "min": 5,
              "max": 25
            }
          },
          {
            "id": 2949,
            "name": "IncreaseOnHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseonhit",
            "paramType1": "percent",
            "paramType2": "percent",
            "paramType3": "stat",
            "paramValue1": "0-100",
            "paramValue2": "0-200",
            "description": "{parameter1} chance for {parameter2 {parameter3} on hit",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            },
            "param2": {
              "spec": "3",
              "min": 3,
              "max": 3,
              "value": 3
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Breath of Fire",
              "min": [
                412
              ],
              "max": [
                412
              ],
              "value": [
                412
              ],
              "map": {
                "412": [
                  "Breath of Fire"
                ]
              }
            }
          },
          {
            "id": 3213,
            "name": "SelfEffectOnCondition",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "effect",
            "param1": {
              "spec": "Fire",
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      412
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 3,
    "name": "Lorekeeper",
    "icon": "https://rune.game/images/items/00003.png",
    "image": "https://dl.airtable.com/.attachments/229540c9004fb883f73320a9a28c7173/f03020d1/00003.png?ts=1657468511&userId=usrf0GZYc5zCl9Cv7&cs=814ec7ad66801e35",
    "value": "0",
    "type": 5,
    "subType": 10,
    "specificType": 3,
    "slots": [
      3
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": true,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 9,
    "attributes": [],
    "details": {
      "Type": "Helm",
      "Subtype": "Ancient Helm",
      "Rune Word": "Nef Tir",
      "Distribution": "Crafted",
      "Date": "April 25, 2021 - June 3, 2021"
    },
    "recipe": {
      "requirement": [
        {
          "id": 4,
          "quantity": 1
        },
        {
          "id": 3,
          "quantity": 1
        }
      ]
    },
    "description": "Forged in the darkest hour of the Reckoning; used to seek out Worldstone shards and powerful energy sources.",
    "shortDescription": "",
    "visualDescription": "An intricate silvery helm, inlaid with glittering azure gems: built more for beauty than actual defense.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "100-100",
              "min": 100,
              "max": 100,
              "value": 100
            }
          }
        ],
        "perfection": [
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "5-7"
              ],
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1102,
            "name": "DeathPenaltyAvoid",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltyavoid",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} to avoid losing points on death.",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 1169,
            "name": "ShardFindWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/shardfindwin",
            "paramType1": "percent",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to find a worldstone shard on win",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 1170,
            "name": "ShardFindItem",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/shardfinditem",
            "paramType1": "percent",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to find a worldstone shard on item pickup",
            "param1": {
              "spec": "0.1-0.1",
              "min": 0.1,
              "max": 0.1,
              "value": 0.1
            }
          },
          {
            "id": 1165,
            "name": "RandomRuneOnWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneonwin",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} of your win reward as a random rune",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1158,
            "name": "WinStreakMagicFindIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/winstreakmagicfindincrease",
            "param1": {
              "spec": "3-3",
              "min": 3,
              "max": 3,
              "value": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "5-7",
              "min": 5,
              "max": 7
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2903,
            "name": "IncreaseRankRewardBonus",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Increase to Rank Reward Bonuses",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Weakness",
              "min": [
                494
              ],
              "max": [
                494
              ],
              "value": [
                494
              ],
              "map": {
                "494": [
                  "Weakness"
                ]
              }
            }
          },
          {
            "id": 2900,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramType2": "rewardtype",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} {parameter2} Rewards on Win",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      494
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 4,
    "name": "Worldstone Shard",
    "icon": "https://rune.game/images/items/00004.png",
    "image": "https://dl.airtable.com/.attachments/9eab66558b3617afacbd471ac140ccb3/f766e001/Untitled-3.png?ts=1657468516&userId=usrf0GZYc5zCl9Cv7&cs=bd9a146e843db901",
    "value": "0",
    "type": 18,
    "subType": 11,
    "specificType": 4,
    "slots": [],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": true,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Type": "Ingredient",
      "Subtype": "Relic",
      "Distribution": "Claimable",
      "Date": "May 3, 2021 - Now"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Relics from a broken time.",
    "shortDescription": "",
    "visualDescription": "These multifaceted red crystals are found scattered across Haerra.",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [
      6
    ],
    "category": "accessory"
  },
  {
    "id": 5,
    "name": "Flash",
    "icon": "https://rune.game/images/items/00005.png",
    "image": "https://dl.airtable.com/.attachments/693a7f417b9c82bd8392a542e9180744/90cd77d5/00005.png?ts=1657468517&userId=usrf0GZYc5zCl9Cv7&cs=983871579483756e",
    "value": "0",
    "type": 11,
    "subType": 12,
    "specificType": 5,
    "slots": [
      12
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": true,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 550,
    "attributes": [],
    "details": {
      "Type": "Boot",
      "Subtype": "Astral Greaves",
      "Rune Word": "Ith Eld Ral Tal",
      "Distribution": "Crafted",
      "Date": "May 17, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 6,
          "quantity": 1
        },
        {
          "id": 2,
          "quantity": 1
        },
        {
          "id": 8,
          "quantity": 1
        },
        {
          "id": 7,
          "quantity": 1
        }
      ]
    },
    "description": "Forged from glittering blue metal, these greaves grant their wearer miraculous speed.",
    "shortDescription": "",
    "visualDescription": "These gold-accented greaves are made from an otherworldly azure metal, which is incredibly strong yet lighter than a feather.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "1-10",
              "min": 1,
              "max": 10
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          }
        ],
        "perfection": [
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1030,
            "name": "MovementSpeedIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} faster movement.",
            "param1": {
              "spec": [
                "1-10"
              ],
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 1222,
            "name": "IncreaseMovementSpeedOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} movement speed on kill",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 1223,
            "name": "EvolveMovementBurst",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/evolvemovementburst",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Mechanic",
            "influences": "Movement",
            "description": "{parameter1} temporary increase to movement speed on evolve",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 1103,
            "name": "CriticalPointsChanceIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalpointschanceincrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Mechanic",
            "influences": "Game",
            "description": "{parameter1} chance to receive critical bonus points.",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "4-10",
              "min": 4,
              "max": 10
            },
            "param2": {
              "spec": "MovementSpeed",
              "min": [
                3
              ],
              "max": [
                3
              ],
              "value": [
                3
              ],
              "map": {
                "3": [
                  "MovementSpeed"
                ]
              }
            }
          },
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2304,
            "name": "IncreaseResist",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Resistance",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            },
            "param2": {
              "spec": "Lightning",
              "min": 2,
              "max": 2,
              "value": 2,
              "map": {
                "2": "Lightning"
              }
            }
          },
          {
            "id": 3205,
            "name": "ChanceOnGetHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/chanceongethit",
            "paramType1": "percent",
            "paramType2": "skill",
            "paramValue1": "0-100",
            "paramValue2": "400-1000",
            "nature": "Buff",
            "description": "{parameter1} {parameter2} chance when hit",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            },
            "param2": {
              "spec": "Inspiration",
              "min": 476,
              "max": 476,
              "value": 476,
              "map": {
                "476": "Inspiration"
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Flash",
              "min": [
                480
              ],
              "max": [
                480
              ],
              "value": [
                480
              ],
              "map": {
                "480": [
                  "Flash"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      480
    ],
    "materials": [
      18,
      34
    ],
    "category": "accessory"
  },
  {
    "id": 6,
    "name": "Titan",
    "icon": "https://rune.game/images/items/00006.png",
    "image": "https://dl.airtable.com/.attachments/1d8fc14204bd0d3ea642017b9162d988/7501f4c1/00006.png?ts=1657468522&userId=usrf0GZYc5zCl9Cv7&cs=be5e694f2467e629",
    "value": "0",
    "type": 7,
    "subType": 13,
    "specificType": 6,
    "slots": [
      18
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": true,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 88,
    "attributes": [],
    "details": {
      "Type": "Body Armor",
      "Subtype": "Templar Forge",
      "Rune Word": "Tal Ort Thul Eld Nef",
      "Distribution": "Crafted",
      "Date": "May 24, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 7,
          "quantity": 1
        },
        {
          "id": 9,
          "quantity": 1
        },
        {
          "id": 10,
          "quantity": 1
        },
        {
          "id": 2,
          "quantity": 1
        },
        {
          "id": 4,
          "quantity": 1
        }
      ]
    },
    "description": "Crafted from astra-infused ingots, this armor absorbs blows that would obliterate any normal warrior.",
    "shortDescription": "",
    "visualDescription": "Forged from lightweight material and imbued with potent astra energy, this breastplate gleams with a pale radiance.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            }
          },
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "1-2",
              "min": 1,
              "max": 2
            }
          }
        ],
        "perfection": [
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "5-15"
              ],
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1219,
            "name": "IncreaseHealthOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasehealthonkill",
            "paramType1": "value",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} health on kill.",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "1-2",
              "min": 1,
              "max": 2
            }
          },
          {
            "id": 1150,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} win bonus",
            "param1": {
              "spec": "3-3",
              "min": 3,
              "max": 3,
              "value": 3
            }
          },
          {
            "id": 1104,
            "name": "CriticalPointsMultiplierIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalpointsmultiplierincrease",
            "paramType1": "percent",
            "paramValue1": "0-35",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} increase to critical bonus.",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2300,
            "name": "IncreaseHealth",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasehealth",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Health",
            "param1": {
              "spec": "5-8",
              "min": 5,
              "max": 8
            },
            "param2": {
              "spec": "All",
              "min": null,
              "max": null
            }
          },
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2304,
            "name": "IncreaseResist",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Resistance",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 3205,
            "name": "ChanceOnGetHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/chanceongethit",
            "paramType1": "percent",
            "paramType2": "skill",
            "paramValue1": "0-100",
            "paramValue2": "400-1000",
            "nature": "Buff",
            "description": "{parameter1} {parameter2} chance when hit",
            "param1": {
              "spec": "3-4",
              "min": 3,
              "max": 4
            },
            "param2": {
              "spec": "Defend",
              "min": 496,
              "max": 496,
              "value": 496,
              "map": {
                "496": "Defend"
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Howl",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      465
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 7,
    "name": "Smoke",
    "icon": "https://rune.game/images/items/00007.png",
    "image": "https://dl.airtable.com/.attachments/6402ec0b1b5fb7913ef336d62c0d38df/21df471d/00007.png?ts=1657468527&userId=usrf0GZYc5zCl9Cv7&cs=277d6cdf828294b7",
    "value": "0",
    "type": 9,
    "subType": 15,
    "specificType": 7,
    "slots": [
      9
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": true,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 380,
    "attributes": [],
    "details": {
      "Type": "Glove",
      "Subtype": "Shadow Wraps",
      "Rune Word": "Thul Ith Ort Ral",
      "Distribution": "Crafted",
      "Date": "May 25, 2021 - June 25, 2021"
    },
    "recipe": {
      "requirement": [
        {
          "id": 10,
          "quantity": 1
        },
        {
          "id": 6,
          "quantity": 1
        },
        {
          "id": 9,
          "quantity": 1
        },
        {
          "id": 8,
          "quantity": 1
        }
      ]
    },
    "description": "These handwraps have an unknown origin and emit a dark aura.",
    "shortDescription": "",
    "visualDescription": "Though these handwraps appear simple at first glance, a closer look would reveal faint black smoke snaking up from the cloth.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "25-100",
              "min": 25,
              "max": 100
            }
          },
          {
            "id": 9,
            "name": "UnstakeLocked",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/unstakelocked",
            "paramType1": "percent",
            "paramValue1": "100-100",
            "nature": "Debuff",
            "description": "Unstake Locked Until Completion",
            "param1": {
              "spec": "100-100",
              "min": 100,
              "max": 100,
              "value": 100
            }
          }
        ],
        "perfection": [
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "1-5"
              ],
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 1102,
            "name": "DeathPenaltyAvoid",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltyavoid",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} to avoid losing points on death.",
            "param1": {
              "spec": "1-25",
              "min": 1,
              "max": 25
            }
          },
          {
            "id": 1167,
            "name": "RunewordFindWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/runewordfindwin",
            "paramType1": "percent",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to find a random runeword on win",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 1173,
            "name": "StealVictimRewardsChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/stealvictimrewardschance",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to take a portion of a killed player's rewards for the round",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "7-10",
              "min": 7,
              "max": 10
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2903,
            "name": "IncreaseRankRewardBonus",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Increase to Rank Reward Bonuses",
            "param1": {
              "spec": "0-25",
              "min": 0,
              "max": 25
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Shuriken Dance",
              "min": [
                474
              ],
              "max": [
                474
              ],
              "value": [
                474
              ],
              "map": {
                "474": [
                  "Shuriken Dance"
                ]
              }
            }
          },
          {
            "id": 2602,
            "name": "ExtraProjectiles",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/extraprojectiles",
            "paramType1": "percent",
            "paramType2": "value",
            "paramValue1": "0-100",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} chance of {parameter2} extra projectile(s)",
            "param1": {
              "spec": "35",
              "min": 35,
              "max": 35,
              "value": 35
            },
            "param2": {
              "spec": "1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 2309,
            "name": "ReduceCost",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/reducecost",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "influences": "Defense",
            "description": "-{parameter1} Energy Cost",
            "param1": {
              "spec": "5-8",
              "min": 5,
              "max": 8
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      475
    ],
    "materials": [
      32
    ],
    "category": "accessory"
  },
  {
    "id": 10,
    "name": "Glory",
    "icon": "https://rune.game/images/items/00010.png",
    "image": "https://dl.airtable.com/.attachments/331c4d73d97137d13d6c97e8ec34611a/23d20f11/00010.png?ts=1657468531&userId=usrf0GZYc5zCl9Cv7&cs=4c9d971d5e29449e",
    "value": "0",
    "type": 2,
    "subType": 19,
    "specificType": 8,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2046,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Cloudstrike Sword",
      "Rune Word": "Sol Ral Ith Eld Ort",
      "Distribution": "Crafted",
      "Date": "June 1, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 12,
          "quantity": 1
        },
        {
          "id": 8,
          "quantity": 1
        },
        {
          "id": 6,
          "quantity": 1
        },
        {
          "id": 2,
          "quantity": 1
        },
        {
          "id": 9,
          "quantity": 1
        }
      ]
    },
    "description": "Crafted with the finest vira materials, this cloudstrike sword is imbued with the power of wind.",
    "shortDescription": "",
    "visualDescription": "Heavily detailed with gold accents and sparkling sapphires, the steel of this blade shimmers so brilliantly that it appears to glow in sunlight.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "10-40",
              "min": 10,
              "max": 40
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "TAL-ORT",
              "min": 6,
              "max": 8,
              "map": {
                "6": "TAL",
                "7": "RAL",
                "8": "ORT"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Whirlwind",
              "min": 409,
              "max": 409,
              "value": 409,
              "map": {
                "409": "Whirlwind"
              }
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Barbarian"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1001,
            "name": "PhysicalDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
            "paramType1": "value",
            "paramValue1": "0-35",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} physical damage",
            "param1": {
              "spec": [
                "5-20"
              ],
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1222,
            "name": "IncreaseMovementSpeedOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} movement speed on kill",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 1169,
            "name": "ShardFindWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/shardfindwin",
            "paramType1": "percent",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to find a worldstone shard on win",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 1300,
            "name": "MovementSpeedDecrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/movementspeeddecrease",
            "paramType1": "percent",
            "nature": "Debuff",
            "influences": "Movement",
            "description": "{parameter1} slower movement",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 1218,
            "name": "IncreaseDamageOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} damage on kill",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Furious Rush",
              "min": 201,
              "max": 201,
              "value": 201,
              "map": {
                "201": "Furious Rush"
              }
            }
          },
          {
            "id": 1327,
            "name": "SkillMod",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
            "paramType1": "value",
            "paramValue1": "0-5",
            "nature": "Buff",
            "influences": "Skill",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Barbarian",
              "min": null,
              "max": null
            }
          },
          {
            "id": 1165,
            "name": "RandomRuneOnWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneonwin",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} of your win reward as a random rune",
            "param1": {
              "spec": "3-3",
              "min": 3,
              "max": 3,
              "value": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "15-30",
              "min": 15,
              "max": 30
            },
            "param2": {
              "spec": "Physical\n",
              "map": {}
            }
          },
          {
            "id": 2601,
            "name": "IncreaseStatSkill",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestatskill",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "skill",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} to {parameter2} for {param3}",
            "param1": {
              "spec": "12-15",
              "min": 12,
              "max": 15
            },
            "param2": {
              "spec": "StaggerChance",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 2949,
            "name": "IncreaseOnHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseonhit",
            "paramType1": "percent",
            "paramType2": "percent",
            "paramType3": "stat",
            "paramValue1": "0-100",
            "paramValue2": "0-200",
            "description": "{parameter1} chance for {parameter2 {parameter3} on hit",
            "param1": {
              "spec": "25",
              "min": 25,
              "max": 25,
              "value": 25
            },
            "param2": {
              "spec": "2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 3213,
            "name": "SelfEffectOnCondition",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "effect",
            "param1": {
              "spec": "OnStagger",
              "map": {}
            },
            "param2": {
              "spec": "1",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Attack"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            },
            "param2": {
              "spec": "AttackSpeed",
              "min": [
                4
              ],
              "max": [
                4
              ],
              "value": [
                4
              ],
              "map": {
                "4": [
                  "AttackSpeed"
                ]
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Whirlwind",
              "min": [
                409
              ],
              "max": [
                409
              ],
              "value": [
                409
              ],
              "map": {
                "409": [
                  "Whirlwind"
                ]
              }
            }
          },
          {
            "id": 3803,
            "name": "UnlockSkillMod",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskillmod",
            "paramType1": "skill",
            "paramType2": "mod",
            "nature": "Buff",
            "influences": "Skill",
            "param1": {
              "spec": "Whirlwind",
              "min": 409,
              "max": 409,
              "value": 409,
              "map": {
                "409": "Whirlwind"
              }
            },
            "param2": {
              "spec": "1",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Barbarian",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      409
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 11,
    "name": "Grace",
    "icon": "https://rune.game/images/items/00011.png",
    "image": "https://dl.airtable.com/.attachments/4d646c400b38f8929f90245afff71e52/94f0b650/00011.png?ts=1657468535&userId=usrf0GZYc5zCl9Cv7&cs=2f36135ae9d86334",
    "value": "0",
    "type": 2,
    "subType": 8,
    "specificType": 9,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2046,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Sage Bow",
      "Rune Word": "Sol Ith Nef El Ort",
      "Distribution": "Crafted",
      "Date": "June 1, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 12,
          "quantity": 1
        },
        {
          "id": 6,
          "quantity": 1
        },
        {
          "id": 4,
          "quantity": 1
        },
        {
          "id": 1,
          "quantity": 1
        },
        {
          "id": 9,
          "quantity": 1
        }
      ]
    },
    "description": "Painstakingly constructed from druidic materials, this sage bow is imbued to seek out what is hidden.",
    "shortDescription": "",
    "visualDescription": "This longbow is intricately designed with bronze gilding, silvery strings, and colored yews weaved in beautiful knots.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "10-40",
              "min": 10,
              "max": 40
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "25-25",
              "min": 25,
              "max": 25,
              "value": 25
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "ORT-AMN",
              "min": 8,
              "max": 10,
              "map": {
                "8": "ORT",
                "9": "THUL",
                "10": "AMN"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Hidden Shot",
              "min": 410,
              "max": 410,
              "value": 410,
              "map": {
                "410": "Hidden Shot"
              }
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "3-3",
              "min": 3,
              "max": 3,
              "value": 3,
              "map": {
                "3": "Amazon"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1002,
            "name": "PoisonDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/poisondamage",
            "paramType1": "value",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} poison damage",
            "param1": {
              "spec": [
                "5-20"
              ],
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1222,
            "name": "IncreaseMovementSpeedOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} movement speed on kill",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 1169,
            "name": "ShardFindWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/shardfindwin",
            "paramType1": "percent",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to find a worldstone shard on win",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 1025,
            "name": "PoisonChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/poisonchance",
            "paramType1": "value",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} poison chance",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 1100,
            "name": "KilledPlayerPenaltyIncrease",
            "isEnabled": true,
            "nexusLink": "https://nexus.rune.game/item-attribute/killedplayerpenaltyincrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} greater point penalty for defeated opponents.",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 1327,
            "name": "SkillMod",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
            "paramType1": "value",
            "paramValue1": "0-5",
            "nature": "Buff",
            "influences": "Skill",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "7-7",
              "map": {}
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Amazon",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "10-25",
              "min": 10,
              "max": 25
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "7-7",
              "min": 7,
              "max": 7,
              "value": 7
            },
            "param2": {
              "spec": "AttackSpeed",
              "min": [
                4
              ],
              "max": [
                4
              ],
              "value": [
                4
              ],
              "map": {
                "4": [
                  "AttackSpeed"
                ]
              }
            }
          },
          {
            "id": 2602,
            "name": "ExtraProjectiles",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/extraprojectiles",
            "paramType1": "percent",
            "paramType2": "value",
            "paramValue1": "0-100",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} chance of {parameter2} extra projectile(s)",
            "param1": {
              "spec": "2",
              "min": 2,
              "max": 2,
              "value": 2
            },
            "param2": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Trueflight Arrow, Arrow Barrage",
              "min": [
                457,
                null
              ],
              "max": [
                457,
                null
              ],
              "value": [
                457,
                null
              ],
              "map": {
                "457,": [
                  "Trueflight Arrow",
                  null
                ]
              }
            }
          },
          {
            "id": 2373,
            "name": "IncreaseRandomStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
            "paramType1": "stats",
            "paramType2": "percent",
            "param1": {
              "spec": "CooldownTime, MovementSpeed, MaxEnergy",
              "min": [
                null,
                3,
                null
              ],
              "max": [
                null,
                3,
                null
              ],
              "value": [
                null,
                3,
                null
              ],
              "map": {
                ",3,": [
                  null,
                  "MovementSpeed",
                  null
                ]
              }
            },
            "param2": {
              "spec": "-10, 7, 8",
              "min": -10,
              "max": -10,
              "value": -10
            }
          },
          {
            "id": 3802,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "influences": "Skill",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Ranger",
              "min": null,
              "max": null
            }
          },
          {
            "id": 2914,
            "name": "DoublePickupChance",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} chance to double an item pickup",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 2900,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramType2": "rewardtype",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} {parameter2} Rewards on Win",
            "param1": {
              "spec": "0-20",
              "min": 0,
              "max": 20
            },
            "param2": {
              "spec": "runes",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      457,
      410,
      456
    ],
    "materials": [
      9
    ],
    "category": "accessory"
  },
  {
    "id": 12,
    "name": "Genesis",
    "icon": "https://rune.game/images/items/00012.png",
    "image": "https://dl.airtable.com/.attachments/3d0af73538086214f8e22ed706852ab6/33b7c4ac/00012.png?ts=1657468539&userId=usrf0GZYc5zCl9Cv7&cs=ba1d019d4e01f6a9",
    "value": "0",
    "type": 1,
    "subType": 5,
    "specificType": 10,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2232,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "Dimensional Dagger",
      "Rune Word": "Sol Thul Amn Ort",
      "Distribution": "Crafted",
      "Date": "June 1, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 12,
          "quantity": 1
        },
        {
          "id": 10,
          "quantity": 1
        },
        {
          "id": 11,
          "quantity": 1
        },
        {
          "id": 9,
          "quantity": 1
        }
      ]
    },
    "description": "Originally a faintly magical sacrifical tool, this dimensional dagger was locked away when suffused with twisted sacrificial power.",
    "shortDescription": "",
    "visualDescription": "With a white dragon-bone hilt, a purple gem that surges with energy, and a shimmering translucent blade, Genesis is truly a wondrous and odd dagger.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "10-40",
              "min": 10,
              "max": 40
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "1-2",
              "min": 1,
              "max": 2
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "THUL-SOL",
              "min": 9,
              "max": 11,
              "map": {
                "9": "THUL",
                "10": "AMN",
                "11": "SOL"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "6-6",
              "map": {}
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Sacrifice",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1001,
            "name": "PhysicalDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
            "paramType1": "value",
            "paramValue1": "0-35",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} physical damage",
            "param1": {
              "spec": [
                "5-10"
              ],
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1019,
            "name": "LifeSteal",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/lifesteal",
            "paramType1": "percent",
            "paramValue1": "0-30",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} life steal",
            "param1": {
              "spec": "20-30",
              "min": 20,
              "max": 30
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 1108,
            "name": "OrbPickupDamageIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/orbpickupdamageincrease",
            "description": "{parameter1} damage increase on orb pickup",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 1327,
            "name": "SkillMod",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
            "paramType1": "value",
            "paramValue1": "0-5",
            "nature": "Buff",
            "influences": "Skill",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "6-6",
              "map": {}
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Necromancer",
              "min": null,
              "max": null
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "10-14",
              "min": 10,
              "max": 14
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 1019,
            "name": "LifeSteal",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/lifesteal",
            "paramType1": "percent",
            "paramValue1": "0-30",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} life steal",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "EnergyRegen",
              "min": null,
              "max": null
            },
            "param2": {
              "spec": "7-10",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 2010,
            "name": "DamageTypeExchange",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagetypeexchange",
            "paramType1": "percent",
            "paramType2": "from",
            "paramType3": "to",
            "paramValue1": "0-100",
            "param1": {
              "spec": "25",
              "min": 25,
              "max": 25,
              "value": 25
            },
            "param2": {
              "spec": "Physical",
              "min": null,
              "max": null
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Ethereal Spear",
              "min": [
                455
              ],
              "max": [
                455
              ],
              "value": [
                455
              ],
              "map": {
                "455": [
                  "Ethereal Spear"
                ]
              }
            }
          },
          {
            "id": 3802,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "influences": "Skill",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Necromancer",
              "min": null,
              "max": null
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      411,
      455
    ],
    "materials": [
      3,
      7
    ],
    "category": "accessory"
  },
  {
    "id": 13,
    "name": "Destiny",
    "icon": "https://rune.game/images/items/00013.png",
    "image": "https://dl.airtable.com/.attachments/354746ccb047c8be47634cb2776661fd/f21110e7/00013.png?ts=1657468543&userId=usrf0GZYc5zCl9Cv7&cs=a9be4c97ba8d4da7",
    "value": "0",
    "type": 2,
    "subType": 7,
    "specificType": 11,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2046,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Chrono Staff",
      "Rune Word": "Sol Amn Ort Thul Ral",
      "Distribution": "Crafted",
      "Date": "June 1, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 12,
          "quantity": 1
        },
        {
          "id": 11,
          "quantity": 1
        },
        {
          "id": 9,
          "quantity": 1
        },
        {
          "id": 10,
          "quantity": 1
        },
        {
          "id": 8,
          "quantity": 1
        }
      ]
    },
    "description": "A mysterious staff with no defined origin, imbued with the power of time.",
    "shortDescription": "",
    "visualDescription": "Destiny is a chrome-encrusted ebony staff, crowned with an incredible amethyst. If eyed closely, a slightly glimmering star can be seen within the amethyst.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "10-40",
              "min": 10,
              "max": 40
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "THUL-SOL",
              "min": 9,
              "max": 11,
              "map": {
                "9": "THUL",
                "10": "AMN",
                "11": "SOL"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Time Warp",
              "min": 429,
              "max": 429,
              "value": 429,
              "map": {
                "429": "Time Warp"
              }
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2,
              "map": {
                "2": "Mage"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1007,
            "name": "ArcaneDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/arcanedamage",
            "paramType1": "value",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} arcane damage",
            "param1": {
              "spec": [
                "5-20"
              ],
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1022,
            "name": "SlowChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/slowchance",
            "paramType1": "value",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} slow chance",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 1218,
            "name": "IncreaseDamageOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} damage on kill",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 1237,
            "name": "CastOnKillChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/castonkillchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Skill",
            "description": "{parameter1} cast {CastOnKillEffect.Value} {CastOnKillType.Value} on kill",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 1201,
            "name": "LeaderDeathPenaltyIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/leaderdeathpenaltyincrease",
            "paramType1": "percent",
            "nature": "Debuff",
            "influences": "Game",
            "description": "{parameter1} increase to points lost on death when leading",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 1327,
            "name": "SkillMod",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
            "paramType1": "value",
            "paramValue1": "0-5",
            "nature": "Buff",
            "influences": "Skill",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "5-5",
              "map": {}
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Mage",
              "min": null,
              "max": null
            }
          },
          {
            "id": 1238,
            "name": "CastOnKillType",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/castonkilltype",
            "paramType1": "spelltype",
            "nature": "Mechanic",
            "influences": "Skill",
            "param1": {
              "spec": "3-3",
              "min": 3,
              "max": 3,
              "value": 3
            }
          },
          {
            "id": 1239,
            "name": "CastOnKillEffect",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/castonkilleffect",
            "paramType1": "effect",
            "nature": "Mechanic",
            "influences": "Skill",
            "param1": {
              "spec": "11-11",
              "min": 11,
              "max": 11,
              "value": 11,
              "map": {
                "11": "EvolveLock"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "5-20",
              "min": 5,
              "max": 20
            },
            "param2": {
              "spec": "Fire",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Fire"
              }
            }
          },
          {
            "id": 4156,
            "name": "EffectChanceOnHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/effectchanceonhit",
            "paramType1": "percent",
            "paramType2": "effect",
            "paramValue1": "0-100",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} chance of {parameter2} on hit.",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            },
            "param2": {
              "spec": "Slow",
              "min": null,
              "max": null,
              "map": {}
            }
          },
          {
            "id": 2002,
            "name": "IncreaseDamageOverTime",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertime",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} increase to {parameter2} damage over time",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            },
            "param2": {
              "spec": "Fire",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Fire"
              }
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "15-25",
              "min": 15,
              "max": 25
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "2-12",
              "min": 2,
              "max": 12
            },
            "param2": {
              "spec": "CastSpeed",
              "min": [
                6
              ],
              "max": [
                6
              ],
              "value": [
                6
              ],
              "map": {
                "6": [
                  "CastSpeed"
                ]
              }
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Fireball, Meteor",
              "map": {}
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Mage",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      429,
      447,
      445
    ],
    "materials": [
      7
    ],
    "category": "accessory"
  },
  {
    "id": 14,
    "name": "Wrath",
    "icon": "https://rune.game/images/items/00014.png",
    "image": "https://dl.airtable.com/.attachments/08afb500bafad147b184b5f96cc595b4/bab4e37f/00014.png?ts=1657468547&userId=usrf0GZYc5zCl9Cv7&cs=0e42396ce1db169f",
    "value": "0",
    "type": 1,
    "subType": 6,
    "specificType": 172,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1620,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "Unknown Claw",
      "Rune Word": "Shael Ith Dol Nef Sol",
      "Distribution": "Crafted",
      "Date": "June 11, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 13,
          "quantity": 1
        },
        {
          "id": 6,
          "quantity": 1
        },
        {
          "id": 14,
          "quantity": 1
        },
        {
          "id": 4,
          "quantity": 1
        },
        {
          "id": 12,
          "quantity": 1
        }
      ]
    },
    "description": "With seamless claws of unknown material and origin, these royal vira appear vicious despite their beauty.",
    "shortDescription": "",
    "visualDescription": "These strange, intricate gauntlets are entirely gold-plated, save for the central gem and claws affixed to the finger joints. The gems and claws are made of the same material: a shimmering purple-blue metal with a gem-like quality.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "2-7",
              "min": 2,
              "max": 7
            }
          },
          {
            "id": 19,
            "name": "CreateRandomRuneword",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/createrandomruneword",
            "paramType1": "chance",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Chance To Create Random Runeword",
            "param1": {
              "spec": "1-2",
              "min": 1,
              "max": 2
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "1-15",
              "min": 1,
              "max": 15
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "SOL-HEL",
              "min": 11,
              "max": 14,
              "map": {
                "11": "SOL",
                "12": "SHAEL",
                "13": "DOL",
                "14": "HEL"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Fade",
              "min": 430,
              "max": 430,
              "value": 430,
              "map": {
                "430": "Fade"
              }
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})"
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1006,
            "name": "RendingDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/rendingdamage",
            "paramType1": "value",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} rending damage",
            "param1": {
              "spec": [
                "4-12"
              ],
              "min": 4,
              "max": 4,
              "value": 4
            }
          },
          {
            "id": 1167,
            "name": "RunewordFindWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/runewordfindwin",
            "paramType1": "percent",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to find a random runeword on win",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 1011,
            "name": "CriticalHitChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} critical hit chance",
            "param1": {
              "spec": "1-15",
              "min": 1,
              "max": 15
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 1030,
            "name": "MovementSpeedIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} faster movement.",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 1327,
            "name": "SkillMod",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
            "paramType1": "value",
            "paramValue1": "0-5",
            "nature": "Buff",
            "influences": "Skill",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Fade",
              "min": 430,
              "max": 430,
              "value": 430,
              "map": {
                "430": "Fade"
              }
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Assassin",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "13-18",
              "min": 13,
              "max": 18
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 3807,
            "name": "IncreaseSkillPoints",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseskillpoints",
            "paramType1": "value",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Skill",
            "description": "{parameter1} skill points",
            "param1": {
              "spec": "1-2",
              "min": 1,
              "max": 2
            }
          },
          {
            "id": 1011,
            "name": "CriticalHitChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} critical hit chance",
            "param1": {
              "spec": "1-15",
              "min": 1,
              "max": 15
            }
          },
          {
            "id": 2373,
            "name": "IncreaseRandomStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
            "paramType1": "stats",
            "paramType2": "percent",
            "param1": {
              "spec": "AttackSpeed, CriticalHitMultiplier, MaxEnergy, AilmentChance",
              "min": [
                4,
                5,
                null,
                null
              ],
              "max": [
                4,
                5,
                null,
                null
              ],
              "value": [
                4,
                5,
                null,
                null
              ],
              "map": {
                "4,5,,": [
                  "AttackSpeed",
                  "CriticalHitMultiplier",
                  null,
                  null
                ]
              }
            },
            "param2": {
              "spec": "5, 7, 7, 5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 3213,
            "name": "SelfEffectOnCondition",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "effect",
            "param1": {
              "spec": "EnemyWithDoTNearby",
              "min": 21,
              "max": 21,
              "value": 21,
              "map": {
                "21": "EnemyWithDoTNearby"
              }
            },
            "param2": {
              "spec": "Physical",
              "min": null,
              "max": null,
              "map": {}
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Shuriken Throw",
              "min": [
                475
              ],
              "max": [
                475
              ],
              "value": [
                475
              ],
              "map": {
                "475": [
                  "Shuriken Throw"
                ]
              }
            }
          },
          {
            "id": 3802,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "influences": "Skill",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Rogue",
              "min": null,
              "max": null
            }
          },
          {
            "id": 2900,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramType2": "rewardtype",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} {parameter2} Rewards on Win",
            "param1": {
              "spec": "0-20",
              "min": 0,
              "max": 20
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      430,
      474,
      501
    ],
    "materials": [
      19
    ],
    "category": "accessory"
  },
  {
    "id": 15,
    "name": "Fortress",
    "icon": "https://rune.game/images/items/00015.png",
    "image": "https://dl.airtable.com/.attachments/5ebbe53d6a9614c94a6dc2628d7f8883/589dc158/00015.png?ts=1657468551&userId=usrf0GZYc5zCl9Cv7&cs=df2db0c99ee9b325",
    "value": "0",
    "type": 3,
    "subType": 9,
    "specificType": 13,
    "slots": [
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": true,
    "isPaused": false,
    "isRetired": true,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 7776,
    "attributes": [],
    "details": {
      "Type": "Shield",
      "Subtype": "Blessed Vira Shield",
      "Distribution": "Crafted",
      "Date": "June 11, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 13,
          "quantity": 1
        },
        {
          "id": 3,
          "quantity": 1
        },
        {
          "id": 14,
          "quantity": 1
        },
        {
          "id": 10,
          "quantity": 1
        },
        {
          "id": 4,
          "quantity": 1
        }
      ]
    },
    "description": "A shield designed for Vira royalty, it has been blessed with a protective aura.",
    "shortDescription": "",
    "visualDescription": "This unique, winged shield is gilded with gold and green accents, although the material appears to be some form of nearly impenetrable dragon bone.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 12,
            "name": "FindGuildToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Guild Token",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 47,
            "name": "ReduceBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Reduced Burn",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Sanctuary Aura",
              "min": 467,
              "max": 467,
              "value": 467,
              "map": {
                "467": "Sanctuary Aura"
              }
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Paladin",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "0-8"
              ],
              "min": 0,
              "max": 0,
              "value": 0
            }
          },
          {
            "id": 1030,
            "name": "MovementSpeedIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} faster movement.",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            }
          },
          {
            "id": 1101,
            "name": "DeathPenaltyDecrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltydecrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} reduction to points lost on death.",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 1327,
            "name": "SkillMod",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
            "paramType1": "value",
            "paramValue1": "0-5",
            "nature": "Buff",
            "influences": "Skill",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 1059,
            "name": "AilmentResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/ailmentresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} ailment resist",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Sanctuary Aura",
              "min": 467,
              "max": 467,
              "value": 467,
              "map": {
                "467": "Sanctuary Aura"
              }
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Paladin",
              "min": null,
              "max": null
            }
          },
          {
            "id": 1160,
            "name": "WinRewardsDecrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsdecrease",
            "paramType1": "percent",
            "nature": "Debuff",
            "influences": "Reward",
            "description": "{parameter1} win reward reduction",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "11-19",
              "min": 11,
              "max": 19
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2300,
            "name": "IncreaseHealth",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasehealth",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Health",
            "param1": {
              "spec": "5-8",
              "min": 5,
              "max": 8
            }
          },
          {
            "id": 3205,
            "name": "ChanceOnGetHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/chanceongethit",
            "paramType1": "percent",
            "paramType2": "skill",
            "paramValue1": "0-100",
            "paramValue2": "400-1000",
            "nature": "Buff",
            "description": "{parameter1} {parameter2} chance when hit",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "Defend",
              "min": 496,
              "max": 496,
              "value": 496,
              "map": {
                "496": "Defend"
              }
            }
          },
          {
            "id": 3213,
            "name": "SelfEffectOnCondition",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "effect",
            "param1": {
              "spec": "AttackDefended",
              "min": 24,
              "max": 24,
              "value": 24,
              "map": {
                "24": "AttackDefended"
              }
            }
          },
          {
            "id": 2304,
            "name": "IncreaseResist",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Resistance",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Charge",
              "min": [
                471
              ],
              "max": [
                471
              ],
              "value": [
                471
              ],
              "map": {
                "471": [
                  "Charge"
                ]
              }
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Paladin",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      471,
      414
    ],
    "materials": [
      3
    ],
    "category": "accessory"
  },
  {
    "id": 16,
    "name": "Elder",
    "icon": "https://rune.game/images/items/00016.png",
    "image": "https://dl.airtable.com/.attachments/a5f74e2d76feca6782e60291d719971e/d2033b37/00016.png?ts=1657468554&userId=usrf0GZYc5zCl9Cv7&cs=bdf7410f9806a4de",
    "value": "0",
    "type": 1,
    "subType": 2,
    "specificType": 14,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 5760,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "Worldstone Mace",
      "Rune Word": "Dol Amn Thul Ral Tal",
      "Distribution": "Crafted",
      "Date": "June 11, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 14,
          "quantity": 1
        },
        {
          "id": 11,
          "quantity": 1
        },
        {
          "id": 10,
          "quantity": 1
        },
        {
          "id": 8,
          "quantity": 1
        },
        {
          "id": 7,
          "quantity": 1
        }
      ]
    },
    "description": "Designed to kill the most powerful primordial elementals, slaying mere mortals with Elder is like cutting grass.",
    "shortDescription": "",
    "visualDescription": "Although rather simple at first glance, Elder's ebony handle and brass head are indestructible and beautifully made. Elder's most notable feature is the massive worldstone shard affixed to its base, one of the largest worldstone shards ever found.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "1-40",
              "min": 1,
              "max": 40
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "SOL-HEL",
              "min": 11,
              "max": 14,
              "map": {
                "11": "SOL",
                "12": "SHAEL",
                "13": "DOL",
                "14": "HEL"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Druid",
              "map": {}
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Druid",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1008,
            "name": "DamageTypeDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagetypedamage",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} {DamageType} damage",
            "param1": {
              "spec": [
                "7-10"
              ],
              "min": 7,
              "max": 7,
              "value": 7
            }
          },
          {
            "id": 1150,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} win bonus",
            "param1": {
              "spec": "1-20",
              "min": 1,
              "max": 20
            }
          },
          {
            "id": 4119,
            "name": "EggExperienceBonus",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/eggexperiencebonus",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 1009,
            "name": "DamageType",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagetype",
            "paramType1": "type",
            "paramValue1": "0-120",
            "nature": "Mechanic",
            "influences": "Offense",
            "description": "{parameter1} damage",
            "param1": {
              "spec": "1-4",
              "map": {}
            }
          },
          {
            "id": 1237,
            "name": "CastOnKillChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/castonkillchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Skill",
            "description": "{parameter1} cast {CastOnKillEffect.Value} {CastOnKillType.Value} on kill",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 1327,
            "name": "SkillMod",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
            "paramType1": "value",
            "paramValue1": "0-5",
            "nature": "Buff",
            "influences": "Skill",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Mystic Insight",
              "min": 11,
              "max": 11,
              "value": 11,
              "map": {
                "11": "Mystic Insight"
              }
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Druid",
              "min": null,
              "max": null
            }
          },
          {
            "id": 1238,
            "name": "CastOnKillType",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/castonkilltype",
            "paramType1": "spelltype",
            "nature": "Mechanic",
            "influences": "Skill",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 1239,
            "name": "CastOnKillEffect",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/castonkilleffect",
            "paramType1": "effect",
            "nature": "Mechanic",
            "influences": "Skill",
            "param1": {
              "spec": "101-101",
              "min": 101,
              "max": 101,
              "value": 101,
              "map": {
                "101": "Regeneration"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "12-15",
              "min": 12,
              "max": 15
            },
            "param2": {
              "spec": "Lightning",
              "min": 2,
              "max": 2,
              "value": 2,
              "map": {
                "2": "Lightning"
              }
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "1-20",
              "min": 1,
              "max": 20
            }
          },
          {
            "id": 3209,
            "name": "CastOnCondition",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/castoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "skill",
            "param1": {
              "spec": "AppliedAilment, SkillTypeNearby",
              "map": {}
            },
            "param2": {
              "spec": "Poison; Healing",
              "min": null,
              "max": null,
              "map": {}
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Voltaic Orb",
              "min": [
                481
              ],
              "max": [
                481
              ],
              "value": [
                481
              ],
              "map": {
                "481": [
                  "Voltaic Orb"
                ]
              }
            }
          },
          {
            "id": 2902,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "2-10",
              "min": 2,
              "max": 10
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "8",
              "min": 8,
              "max": 8,
              "value": 8
            },
            "param2": {
              "spec": "EnergyRegen",
              "min": [
                1
              ],
              "max": [
                1
              ],
              "value": [
                1
              ],
              "map": {
                "1": [
                  "EnergyRegen"
                ]
              }
            }
          },
          {
            "id": 3802,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "influences": "Skill",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Druid",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [
      6
    ],
    "category": "accessory"
  },
  {
    "id": 19,
    "name": "Pledge",
    "icon": "https://rune.game/images/items/00019.png",
    "image": "https://dl.airtable.com/.attachments/57a97c8952b5f5eb313ca3c294e8da1c/fe208e96/00019.png?ts=1657468557&userId=usrf0GZYc5zCl9Cv7&cs=2fa60c2a4f5a2075",
    "value": "0",
    "type": 5,
    "subType": 10,
    "specificType": 15,
    "slots": [
      3
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 900,
    "attributes": [],
    "details": {
      "Type": "Helm",
      "Subtype": "Warden Helm",
      "Rune Word": "Nef Tir Sol Ort",
      "Distribution": "Crafted",
      "Date": "June 3, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 4,
          "quantity": 1
        },
        {
          "id": 3,
          "quantity": 1
        },
        {
          "id": 12,
          "quantity": 1
        },
        {
          "id": 9,
          "quantity": 1
        }
      ]
    },
    "description": "A once unbreakable helm belonging to Lord Irondell, its best days have passed.",
    "shortDescription": "",
    "visualDescription": "A silver helm of elven make, this symbol of unity is enchanted with potent protective magic.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "1-15",
              "min": 1,
              "max": 15
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "0-6"
              ],
              "min": 0,
              "max": 0,
              "value": 0
            }
          },
          {
            "id": 1150,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} win bonus",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 1201,
            "name": "LeaderDeathPenaltyIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/leaderdeathpenaltyincrease",
            "paramType1": "percent",
            "nature": "Debuff",
            "influences": "Game",
            "description": "{parameter1} increase to points lost on death when leading",
            "param1": {
              "spec": "3-3",
              "min": 3,
              "max": 3,
              "value": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "0-6",
              "min": 0,
              "max": 6
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2006,
            "name": "IncreaseCriticalHitChance",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasecriticalhitchance",
            "paramType1": "percent",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1}  critical hit chance",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 2373,
            "name": "IncreaseRandomStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
            "paramType1": "stats",
            "paramType2": "percent",
            "param1": {
              "spec": "AttackSpeed, Health, Energy",
              "min": [
                4,
                7,
                null
              ],
              "max": [
                4,
                7,
                null
              ],
              "value": [
                4,
                7,
                null
              ],
              "map": {
                "4,7,": [
                  "AttackSpeed",
                  "Health",
                  null
                ]
              }
            },
            "param2": {
              "spec": "6, 8, 11",
              "min": 6,
              "max": 6,
              "value": 6
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "6-10",
              "min": 6,
              "max": 10
            },
            "param2": {
              "spec": "CriticalHitMultiplier",
              "min": [
                5
              ],
              "max": [
                5
              ],
              "value": [
                5
              ],
              "map": {
                "5": [
                  "CriticalHitMultiplier"
                ]
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Hell Fire Trap",
              "min": [
                460
              ],
              "max": [
                460
              ],
              "value": [
                460
              ],
              "map": {
                "460": [
                  "Hell Fire Trap"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      460
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 20,
    "name": "Flow",
    "icon": "https://rune.game/images/items/00020.png",
    "image": "https://dl.airtable.com/.attachments/5bc174cde3bb4cc184cef3d4e02a9355/1171703f/Untitled-31.png?ts=1657468559&userId=usrf0GZYc5zCl9Cv7&cs=ce7302f731cb5223",
    "value": "0",
    "type": 8,
    "subType": 16,
    "specificType": 16,
    "slots": [
      6
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 3200,
    "attributes": [],
    "details": {
      "Type": "Leg Armor",
      "Subtype": "Templar Chausses",
      "Rune Word": "Dol Io Hel Lum",
      "Distribution": "Crafted",
      "Date": "June 26, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 14,
          "quantity": 1
        },
        {
          "id": 16,
          "quantity": 1
        },
        {
          "id": 15,
          "quantity": 1
        },
        {
          "id": 17,
          "quantity": 1
        }
      ]
    },
    "description": "Fashioned from lightweight materials, these plated chausses allow the wearer to flow with the tide of battle.",
    "shortDescription": "",
    "visualDescription": "Made from purple-hued steel, these finely crafted chausses are kept in good condition despite their extensive use.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-10",
              "min": 1,
              "max": 10
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "1-10",
              "min": 1,
              "max": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "4-4",
              "min": 4,
              "max": 4,
              "value": 4
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 34,
            "name": "AvoidBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Avoid All Burns",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "1-10"
              ],
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 1030,
            "name": "MovementSpeedIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} faster movement.",
            "param1": {
              "spec": "1-10",
              "min": 1,
              "max": 10
            }
          },
          {
            "id": 1101,
            "name": "DeathPenaltyDecrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltydecrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} reduction to points lost on death.",
            "param1": {
              "spec": "4-4",
              "min": 4,
              "max": 4,
              "value": 4
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 1102,
            "name": "DeathPenaltyAvoid",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltyavoid",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} to avoid losing points on death.",
            "param1": {
              "spec": "1-2",
              "min": 1,
              "max": 2
            }
          },
          {
            "id": 1100,
            "name": "KilledPlayerPenaltyIncrease",
            "isEnabled": true,
            "nexusLink": "https://nexus.rune.game/item-attribute/killedplayerpenaltyincrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} greater point penalty for defeated opponents.",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "1-10",
              "min": 1,
              "max": 10
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "4-6",
              "min": 4,
              "max": 6
            },
            "param2": {
              "spec": "MovementSpeed",
              "min": [
                3
              ],
              "max": [
                3
              ],
              "value": [
                3
              ],
              "map": {
                "3": [
                  "MovementSpeed"
                ]
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Burst of Speed",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 2949,
            "name": "IncreaseOnHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseonhit",
            "paramType1": "percent",
            "paramType2": "percent",
            "paramType3": "stat",
            "paramValue1": "0-100",
            "paramValue2": "0-200",
            "description": "{parameter1} chance for {parameter2 {parameter3} on hit",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            },
            "param2": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 3806,
            "name": "IncreaseMaxSkillCharges",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemaxskillcharges",
            "paramType1": "value",
            "paramType2": "skill",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Skill",
            "description": "{parameter1} additional charges for {parameter 2} skill(s)",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            },
            "param2": {
              "spec": "Movement",
              "map": {}
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "3-6",
              "min": 3,
              "max": 6
            },
            "param2": {
              "spec": "CriticalHitMultiplier",
              "min": [
                5
              ],
              "max": [
                5
              ],
              "value": [
                5
              ],
              "map": {
                "5": [
                  "CriticalHitMultiplier"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 21,
    "name": "Guiding Light",
    "icon": "https://rune.game/images/items/00021.png",
    "image": "https://dl.airtable.com/.attachments/428efb0bac63d7b5bd2bdfd42b11af3d/dfc0b709/00021.png?ts=1657468562&userId=usrf0GZYc5zCl9Cv7&cs=3a5d6fb37811baf6",
    "value": "0",
    "type": 2,
    "subType": 19,
    "specificType": 17,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": true,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1155997722,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Moonlight Greatsword",
      "Rune Word": "Zod Zod Zod Zod Zod",
      "Distribution": "Crafted",
      "Date": "August 27, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        }
      ]
    },
    "description": "Forged for the great druid warrior Caietus in the war against elves, the now peaceful people have little need for it.",
    "shortDescription": "",
    "visualDescription": "A large sword with a handguard of blackwood and silver gilding, and a long blade of shimmering white metal and light.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "0-100",
              "min": 0,
              "max": 100
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-100",
              "min": 0,
              "max": 100
            }
          },
          {
            "id": 12,
            "name": "FindGuildToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Guild Token",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "0-50",
              "min": 0,
              "max": 50
            }
          },
          {
            "id": 5,
            "name": "BurnEntireHarvest",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Chance To Burn Harvest",
            "param1": {
              "spec": "1-2",
              "min": 1,
              "max": 2
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-100",
              "min": 0,
              "max": 100
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "0-100",
              "min": 0,
              "max": 100
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "9-11",
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1001,
            "name": "PhysicalDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
            "paramType1": "value",
            "paramValue1": "0-35",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} physical damage",
            "param1": {
              "spec": [
                "5-35"
              ],
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-100",
              "min": 0,
              "max": 100
            }
          },
          {
            "id": 1030,
            "name": "MovementSpeedIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} faster movement.",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 1169,
            "name": "ShardFindWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/shardfindwin",
            "paramType1": "percent",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to find a worldstone shard on win",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 1302,
            "name": "BecomeSacrificeOnLead",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/becomesacrificeonlead",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "influences": "Gameplay",
            "description": "{parameter1} chance of becoming sacrifice when taking the lead.",
            "param1": {
              "spec": "0-100",
              "min": 0,
              "max": 100
            }
          },
          {
            "id": 1115,
            "name": "SelfOrbTimeReduce",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/selforbtimereduce",
            "paramType1": "percent",
            "influences": "Game",
            "description": "{parameter1} less time before own orb manifests",
            "param1": {
              "spec": "0-100",
              "min": 0,
              "max": 100
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "20-36",
              "min": 20,
              "max": 36
            }
          },
          {
            "id": 1301,
            "name": "BecomeBloodDrunk",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/becomeblooddrunk",
            "paramType1": "percent",
            "paramValue1": "0-1",
            "nature": "Debuff",
            "influences": "Movement",
            "description": "Can become blood drunk.",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 1156,
            "name": "NoRewardsUnlessFirst",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/norewardsunlessfirst",
            "paramType1": "percent",
            "paramValue1": "0-50",
            "nature": "Debuff",
            "influences": "Reward",
            "description": "{parameter1} chance to receive no rewards for leaderboard positions below first.",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 1157,
            "name": "WinStreakRewardIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/winstreakrewardincrease",
            "paramType1": "percent",
            "paramValue1": "0-50",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} increase to win and item rewards with each consecutive win.",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1400,
            "name": "UnlockOnWins",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockonwins",
            "paramType1": "value",
            "param1": {
              "spec": "200-200",
              "min": 200,
              "max": 200,
              "value": 200
            }
          },
          {
            "id": 4010,
            "name": "TargetSkillUnlock",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/targetskillunlock",
            "nature": "Mechanic",
            "influences": "Progression",
            "param1": {
              "spec": "Moonlight Wave",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "0-20",
              "min": 0,
              "max": 20
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "0-20",
              "min": 0,
              "max": 20
            },
            "param2": {
              "spec": "Fire",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Fire"
              }
            }
          },
          {
            "id": 3204,
            "name": "ChanceOnHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/chanceonhit",
            "paramType1": "percent",
            "paramType2": "skill",
            "paramValue1": "0-100",
            "paramValue2": "400-1000",
            "nature": "Buff",
            "description": "{parameter1} {parameter2} chance on attack",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            },
            "param2": {
              "spec": "Earthquake",
              "map": {}
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            },
            "param2": {
              "spec": "EnergyRegen",
              "min": [
                1
              ],
              "max": [
                1
              ],
              "value": [
                1
              ],
              "map": {
                "1": [
                  "EnergyRegen"
                ]
              }
            }
          },
          {
            "id": 2914,
            "name": "DoublePickupChance",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} chance to double an item pickup",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 2903,
            "name": "IncreaseRankRewardBonus",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Increase to Rank Reward Bonuses",
            "param1": {
              "spec": "0-25",
              "min": 0,
              "max": 25
            }
          },
          {
            "id": 2902,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "10-25",
              "min": 10,
              "max": 25
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Moonlight Wave",
              "min": [
                419
              ],
              "max": [
                419
              ],
              "value": [
                419
              ],
              "map": {
                "419": [
                  "Moonlight Wave"
                ]
              }
            }
          },
          {
            "id": 3211,
            "name": "EnableOnCondition",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/enableoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "skill",
            "param1": {
              "spec": "RankAchieved",
              "min": 31,
              "max": 31,
              "value": 31,
              "map": {
                "31": "RankAchieved"
              }
            },
            "param2": {
              "spec": "Elite",
              "min": null,
              "max": null,
              "map": {}
            }
          },
          {
            "id": 3212,
            "name": "ReplaceOnCondition",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/replaceoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "skillpair",
            "param1": {
              "spec": "BuffActive",
              "map": {}
            },
            "param2": {
              "spec": "Hidden",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      419,
      462,
      481
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 22,
    "name": "Lionheart",
    "icon": "https://rune.game/images/items/00022.png",
    "image": "https://dl.airtable.com/.attachments/6cd0552a55e8ada08f5026d72f485a32/096ff9d5/00022.png?ts=1657468566&userId=usrf0GZYc5zCl9Cv7&cs=0ccf2945c4f2bc06",
    "value": "0",
    "type": 1,
    "subType": 1,
    "specificType": 18,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": true,
    "isPaused": true,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2200,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "Templar Broadsword",
      "Distribution": "Crafted",
      "Date": "August 27, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 14,
          "quantity": 1
        },
        {
          "id": 16,
          "quantity": 1
        },
        {
          "id": 17,
          "quantity": 1
        },
        {
          "id": 13,
          "quantity": 1
        },
        {
          "id": 18,
          "quantity": 1
        }
      ]
    },
    "description": "Taken from a paladin whose fall from grace was legendary, the glow of this weapon's blade promises courage and strength to its wielder.",
    "shortDescription": "",
    "visualDescription": "Lionheart is emblazoned with the sun symbol of Relia, and along with being a deadly and imposing weapon, it equips the wearer with undaunting courage and strength.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "3-12",
              "min": 3,
              "max": 12
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 12,
            "name": "FindGuildToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Guild Token",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 81,
            "name": "GuildTreasuryYieldBonus",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/guildtreasuryyieldbonus",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} yield bonus, sent to guild treasury.",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "SHAEL-HEL",
              "min": 12,
              "max": 14,
              "map": {
                "12": "SHAEL",
                "13": "DOL",
                "14": "HEL"
              }
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Paladin",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1001,
            "name": "PhysicalDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
            "paramType1": "value",
            "paramValue1": "0-35",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} physical damage",
            "param1": {
              "spec": [
                "3-12"
              ],
              "min": 3,
              "max": 3,
              "value": 3
            }
          },
          {
            "id": 1219,
            "name": "IncreaseHealthOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasehealthonkill",
            "paramType1": "value",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} health on kill.",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 1171,
            "name": "TokenFindWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/tokenfindwin",
            "paramType1": "percent",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to find a guild token on win",
            "param1": {
              "spec": "1-2",
              "min": 1,
              "max": 2
            }
          },
          {
            "id": 1162,
            "name": "GuildTreasuryWinBonus",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/guildtreasurywinbonus",
            "paramType1": "percent",
            "nature": "Debuff",
            "influences": "Reward",
            "description": "{parameter1} win reward as guild rewards",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": "-10-0",
              "min": -10,
              "max": -10,
              "value": -10
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "5-7",
              "min": 5,
              "max": 7
            }
          },
          {
            "id": 1327,
            "name": "SkillMod",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillmod",
            "paramType1": "value",
            "paramValue1": "0-5",
            "nature": "Buff",
            "influences": "Skill"
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "j.Paladin-j.Paladin",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "12-21",
              "min": 12,
              "max": 21
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 2949,
            "name": "IncreaseOnHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseonhit",
            "paramType1": "percent",
            "paramType2": "percent",
            "paramType3": "stat",
            "paramValue1": "0-100",
            "paramValue2": "0-200",
            "description": "{parameter1} chance for {parameter2 {parameter3} on hit",
            "param1": {
              "spec": "6-10",
              "min": 6,
              "max": 10
            },
            "param2": {
              "spec": "10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "5-8",
              "min": 5,
              "max": 8
            },
            "param2": {
              "spec": "StaggerChance",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "Health",
              "min": [
                7
              ],
              "max": [
                7
              ],
              "value": [
                7
              ],
              "map": {
                "7": [
                  "Health"
                ]
              }
            }
          },
          {
            "id": 2601,
            "name": "IncreaseStatSkill",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestatskill",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "skill",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} to {parameter2} for {param3}",
            "param1": {
              "spec": "11-15",
              "min": 11,
              "max": 15
            },
            "param2": {
              "spec": "Duration",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 2373,
            "name": "IncreaseRandomStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
            "paramType1": "stats",
            "paramType2": "percent",
            "param1": {
              "spec": "Health, Energy, CriticalHitChance",
              "min": [
                7,
                null,
                2
              ],
              "max": [
                7,
                null,
                2
              ],
              "value": [
                7,
                null,
                2
              ],
              "map": {
                "7,,2": [
                  "Health",
                  null,
                  "CriticalHitChance"
                ]
              }
            },
            "param2": {
              "spec": "8, 10, 7",
              "min": 8,
              "max": 8,
              "value": 8
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Leap",
              "min": [
                472
              ],
              "max": [
                472
              ],
              "value": [
                472
              ],
              "map": {
                "472": [
                  "Leap"
                ]
              }
            }
          },
          {
            "id": 1326,
            "name": "ClassRequirement",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/classrequirement",
            "paramType1": "class",
            "nature": "Requirement",
            "description": "{parameter1} required",
            "param1": {
              "spec": "Paladin",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      472
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 23,
    "name": "Pressure",
    "icon": "https://rune.game/images/items/00023.png",
    "image": "https://dl.airtable.com/.attachments/976171c280816e1f7c892827b1669a51/8cdc9af5/00023.png?ts=1657468568&userId=usrf0GZYc5zCl9Cv7&cs=7786b1ca7b97291f",
    "value": "0",
    "type": 9,
    "subType": 15,
    "specificType": 19,
    "slots": [
      9
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 660,
    "attributes": [],
    "details": {
      "Type": "Glove",
      "Subtype": "Astral Gauntlets",
      "Rune Word": "Ith Dol Ral Ko",
      "Distribution": "Crafted",
      "Date": "August 27, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 6,
          "quantity": 1
        },
        {
          "id": 14,
          "quantity": 1
        },
        {
          "id": 8,
          "quantity": 1
        },
        {
          "id": 18,
          "quantity": 1
        }
      ]
    },
    "description": "Masterfully crafted from an otherworldly blue metal and infused with astra energy, these gauntlets brim with untapped power.",
    "shortDescription": "",
    "visualDescription": "Forged from a mysterious blue metal, these ornate gauntlets are outfitted with gold gilding and enchanted with potent astra energy.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 19,
            "name": "CreateRandomRuneword",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/createrandomruneword",
            "paramType1": "chance",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Chance To Create Random Runeword",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "1-5"
              ],
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 1012,
            "name": "CriticalHitMultiplier",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitmultiplier",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} critical hit multiplier",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 1101,
            "name": "DeathPenaltyDecrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltydecrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} reduction to points lost on death.",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 1200,
            "name": "LeaderMovementSpeedDecrease",
            "isEnabled": true,
            "nexusLink": "https://nexus.rune.game/item-attribute/leadermovementspeeddecrease",
            "paramType1": "percent",
            "nature": "Debuff",
            "influences": "Movement",
            "description": "{parameter1} slower movement when leading",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1169,
            "name": "ShardFindWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/shardfindwin",
            "paramType1": "percent",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to find a worldstone shard on win",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "3-3",
              "min": 3,
              "max": 3,
              "value": 3
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Air Blast",
              "min": 215,
              "max": 215,
              "value": 215,
              "map": {
                "215": "Air Blast"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            },
            "param2": {
              "spec": "CriticalHitMultiplier",
              "min": [
                5
              ],
              "max": [
                5
              ],
              "value": [
                5
              ],
              "map": {
                "5": [
                  "CriticalHitMultiplier"
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            },
            "param2": {
              "spec": "AttackSpeed",
              "min": [
                4
              ],
              "max": [
                4
              ],
              "value": [
                4
              ],
              "map": {
                "4": [
                  "AttackSpeed"
                ]
              }
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Blade Barrier",
              "min": 495,
              "max": 495,
              "value": 495,
              "map": {
                "495": "Blade Barrier"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      495
    ],
    "materials": [
      18
    ],
    "category": "accessory"
  },
  {
    "id": 24,
    "name": "Zeal",
    "icon": "https://rune.game/images/items/00024.png",
    "image": "https://dl.airtable.com/.attachments/f57724359f175a2ae8c8ded01f5fe893/8d76ad4f/00024.png?ts=1657468570&userId=usrf0GZYc5zCl9Cv7&cs=e706375bb2673c79",
    "value": "0",
    "type": 24,
    "subType": 25,
    "specificType": 20,
    "slots": [],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": true,
    "isPaused": false,
    "isRetired": true,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1920,
    "attributes": [],
    "details": {
      "Type": "WristArmor",
      "Subtype": "Templar Armguards",
      "Distribution": "Crafted",
      "Date": "August 27, 2021 - August 30, 2021"
    },
    "recipe": {
      "requirement": [
        {
          "id": 1,
          "quantity": 1
        },
        {
          "id": 7,
          "quantity": 1
        },
        {
          "id": 13,
          "quantity": 1
        },
        {
          "id": 15,
          "quantity": 1
        }
      ]
    },
    "description": "While elegant on the exterior, these bracers drive the wearer to a barbarian-like frenzy when first entering battle.",
    "shortDescription": "",
    "visualDescription": "Forged from a shimmering silver metal alloy, these bracers are inlain with weaved lines of bronze, gold, and copper.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-10",
              "min": 1,
              "max": 10
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-15",
              "min": 0,
              "max": 15
            }
          },
          {
            "id": 71,
            "name": "RandomRuneSpecificWeapon",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomrunespecificweapon",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} increase to {weapon} yield bonus, given as a random rune",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 72,
            "name": "SpecificWeaponType",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
            "paramType1": "itemtype",
            "nature": "Mechanic",
            "description": "Bonus Weapon: {parameter1}",
            "param1": {
              "spec": "One-handed Sword",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "1-10"
              ],
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 1012,
            "name": "CriticalHitMultiplier",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitmultiplier",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} critical hit multiplier",
            "param1": {
              "spec": "0-15",
              "min": 0,
              "max": 15
            }
          },
          {
            "id": 1165,
            "name": "RandomRuneOnWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneonwin",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} of your win reward as a random rune",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1103,
            "name": "CriticalPointsChanceIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalpointschanceincrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Mechanic",
            "influences": "Game",
            "description": "{parameter1} chance to receive critical bonus points.",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2373,
            "name": "IncreaseRandomStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
            "paramType1": "stats",
            "paramType2": "percent",
            "param1": {
              "spec": "0-3",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            },
            "param2": {
              "spec": "CastSpeed, AttackSpeed, Health, Energy",
              "min": null,
              "max": null
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "0-15",
              "min": 0,
              "max": 15
            },
            "param2": {
              "spec": "CriticalHitMultiplier",
              "min": [
                5
              ],
              "max": [
                5
              ],
              "value": [
                5
              ],
              "map": {
                "5": [
                  "CriticalHitMultiplier"
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            },
            "param2": {
              "spec": "StaggerChance",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Deflect Sorcery",
              "min": [
                529
              ],
              "max": [
                529
              ],
              "value": [
                529
              ],
              "map": {
                "529": [
                  "Deflect Sorcery"
                ]
              }
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-8",
              "min": 0,
              "max": 8
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 25,
    "name": "Balance",
    "icon": "https://rune.game/images/items/00025.png",
    "image": "https://dl.airtable.com/.attachments/404b5a720df00dde2170d8992b5a3076/be437437/00025.png?ts=1657468572&userId=usrf0GZYc5zCl9Cv7&cs=d1a452632e7f7043",
    "value": "0",
    "type": 10,
    "subType": 26,
    "specificType": 21,
    "slots": [
      8
    ],
    "isNew": false,
    "isSecret": true,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 594,
    "attributes": [],
    "details": {
      "Type": "Belt",
      "Subtype": "Wyrmhide Belt",
      "Distribution": "Crafted",
      "Date": "August 27, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 1,
          "quantity": 1
        },
        {
          "id": 16,
          "quantity": 1
        },
        {
          "id": 15,
          "quantity": 1
        },
        {
          "id": 8,
          "quantity": 1
        }
      ]
    },
    "description": "This wyrmhide belt is made from the hide of an ancient greatwyrm, and affords the wearer significant power.",
    "shortDescription": "",
    "visualDescription": "Skillfully shaped from soft yet resilient wyrmhide, this rust-brown belt remains in perfect shape despite its age. ",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 74,
            "name": "RandomRuneExchangeSpecific",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchangespecific",
            "paramType1": "percent",
            "nature": "Mechanic",
            "description": "{parameter1} Chance That Random Rune Exchange Gives A Specific Rune (Not Implemented)",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          },
          {
            "id": 75,
            "name": "RandomRuneToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomrunetoken",
            "paramType1": "rune",
            "nature": "Mechanic",
            "description": "Random Exchange Target: {parameter1}",
            "param1": {
              "spec": "EL-SHAEL",
              "min": 0,
              "max": 12,
              "map": {
                "0": "EL",
                "1": "ELD",
                "2": "TIR",
                "3": "NEF",
                "4": "ETH",
                "5": "ITH",
                "6": "TAL",
                "7": "RAL",
                "8": "ORT",
                "9": "THUL",
                "10": "AMN",
                "11": "SOL",
                "12": "SHAEL"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "1-3"
              ],
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 1101,
            "name": "DeathPenaltyDecrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltydecrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} reduction to points lost on death.",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 1103,
            "name": "CriticalPointsChanceIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalpointschanceincrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Mechanic",
            "influences": "Game",
            "description": "{parameter1} chance to receive critical bonus points.",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 1151,
            "name": "ItemRewardsIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/itemrewardsincrease",
            "paramType1": "percent",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} item pickup bonus",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "1-13",
              "min": 1,
              "max": 13
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            },
            "param2": {
              "spec": "Health",
              "min": [
                7
              ],
              "max": [
                7
              ],
              "value": [
                7
              ],
              "map": {
                "7": [
                  "Health"
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            },
            "param2": {
              "spec": "CriticalHitChance",
              "min": [
                2
              ],
              "max": [
                2
              ],
              "value": [
                2
              ],
              "map": {
                "2": [
                  "CriticalHitChance"
                ]
              }
            }
          },
          {
            "id": 2901,
            "name": "ItemRewardsIncrease",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/itemrewardsincrease",
            "paramType1": "percent",
            "paramType2": "rewardtype",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} {parameter2} Rewards on Pickup",
            "param1": {
              "spec": "1-7",
              "min": 1,
              "max": 7
            }
          },
          {
            "id": 2903,
            "name": "IncreaseRankRewardBonus",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Increase to Rank Reward Bonuses",
            "param1": {
              "spec": "5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Flame Dash",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      450
    ],
    "materials": [
      8
    ],
    "category": "accessory"
  },
  {
    "id": 26,
    "name": "Eternity",
    "icon": "https://rune.game/images/items/00026.png",
    "image": "https://dl.airtable.com/.attachments/efd443c0c36a4cca523c01f6be6a3603/bcef7575/00026.png?ts=1657468576&userId=usrf0GZYc5zCl9Cv7&cs=e5be303f321f08dd",
    "value": "0",
    "type": 12,
    "subType": 14,
    "specificType": 22,
    "slots": [
      13,
      16,
      14
    ],
    "isNew": false,
    "isSecret": true,
    "isUltraSecret": false,
    "isPaused": true,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 120,
    "attributes": [],
    "details": {
      "Type": "Ring",
      "Subtype": "Inscribed Archon Band",
      "Distribution": "Crafted",
      "Date": "August 27, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 2,
          "quantity": 1
        },
        {
          "id": 11,
          "quantity": 1
        },
        {
          "id": 13,
          "quantity": 1
        },
        {
          "id": 16,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        }
      ]
    },
    "description": "The method and materials used to create this object of transcendant beauty and power have long been lost to the world.",
    "shortDescription": "",
    "visualDescription": "A beautifully crafted silver ring, inscribed with an ancient dialect lost to time. The ring is partitioned in two, allowing the inscribed part of the ring to magically spin at all times.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "2-4",
              "min": 2,
              "max": 4
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 19,
            "name": "CreateRandomRuneword",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/createrandomruneword",
            "paramType1": "chance",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Chance To Create Random Runeword",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 61,
            "name": "HarvestCritChance",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "{parameter1} Increased Chance To Critically Harvest Yield (Not Implemented)",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 35,
            "name": "EarlyAccess",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/earlyaccess",
            "paramType1": "minutes",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "Early Rune Access: {parameter1} Minutes",
            "param1": {
              "spec": "20-20",
              "min": 20,
              "max": 20,
              "value": 20
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "HEL-LUM",
              "min": 14,
              "max": 16,
              "map": {
                "14": "HEL",
                "15": "IO",
                "16": "LUM"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1030,
            "name": "MovementSpeedIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} faster movement.",
            "param1": {
              "spec": [
                "2-4"
              ],
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 4111,
            "name": "WinStreakRewardChanceIncrease",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/winstreakrewardchanceincrease",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 1222,
            "name": "IncreaseMovementSpeedOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} movement speed on kill",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1167,
            "name": "RunewordFindWin",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/runewordfindwin",
            "paramType1": "percent",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to find a random runeword on win",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 1011,
            "name": "CriticalHitChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} critical hit chance",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 4119,
            "name": "EggExperienceBonus",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/eggexperiencebonus",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 1156,
            "name": "NoRewardsUnlessFirst",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/norewardsunlessfirst",
            "paramType1": "percent",
            "paramValue1": "0-50",
            "nature": "Debuff",
            "influences": "Reward",
            "description": "{parameter1} chance to receive no rewards for leaderboard positions below first.",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 1155,
            "name": "EarlyItemRevealChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/earlyitemrevealchance",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Mechanic",
            "influences": "Reward",
            "description": "{parameter1} chance to see location of next item early.",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Dragonlight",
              "min": 213,
              "max": 213,
              "value": 213,
              "map": {
                "213": "Dragonlight"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            },
            "param2": {
              "spec": "CastSpeed",
              "min": [
                6
              ],
              "max": [
                6
              ],
              "value": [
                6
              ],
              "map": {
                "6": [
                  "CastSpeed"
                ]
              }
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "6-9",
              "min": 6,
              "max": 9
            }
          },
          {
            "id": 2303,
            "name": "EnergyRegen",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/energyregen",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "paramValue2": "0-60",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Energy Regeneration",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 2914,
            "name": "DoublePickupChance",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} chance to double an item pickup",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 1011,
            "name": "CriticalHitChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} critical hit chance",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 2015,
            "name": "IncreaseAilmentDuration",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseailmentduration",
            "paramType1": "percent",
            "paramType2": "ailment",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} {parameter2} duration",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 2903,
            "name": "IncreaseRankRewardBonus",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Increase to Rank Reward Bonuses",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Bone Prison",
              "min": [
                454
              ],
              "max": [
                454
              ],
              "value": [
                454
              ],
              "map": {
                "454": [
                  "Bone Prison"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      454
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 27,
    "name": "Instinct",
    "icon": "https://rune.game/images/items/00027.png",
    "image": "https://dl.airtable.com/.attachments/42584fe4a7c8b4441b4739bf93d9c3d7/9f3ab1e9/00027.png?ts=1657468580&userId=usrf0GZYc5zCl9Cv7&cs=e615f9c7f5ad7f4a",
    "value": "0",
    "type": 12,
    "subType": 14,
    "specificType": 23,
    "slots": [
      13,
      16,
      14
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1728,
    "attributes": [],
    "details": {
      "Type": "Ring",
      "Subtype": "Glimmering Band",
      "Rune Word": "Lum Dol Io Dol Lum",
      "Distribution": "Crafted",
      "Date": "August 27, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 17,
          "quantity": 1
        },
        {
          "id": 14,
          "quantity": 1
        },
        {
          "id": 16,
          "quantity": 1
        },
        {
          "id": 14,
          "quantity": 1
        },
        {
          "id": 17,
          "quantity": 1
        }
      ]
    },
    "description": "Wearers of this crude ring display a preternatural ability to find fortune and avoid harm.",
    "shortDescription": "",
    "visualDescription": "Instinct is a crudely crafted bronze ring, etched with strange, otherworldly symbols.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 12,
            "name": "FindGuildToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Guild Token",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 62,
            "name": "HarvestCritMultiplier",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritmultiplier",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "description": "{parameter1} Critical Harvest Bonus (Not Implemented)",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1222,
            "name": "IncreaseMovementSpeedOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemovementspeedonkill",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} movement speed on kill",
            "param1": {
              "spec": [
                "3-5"
              ],
              "min": 3,
              "max": 3,
              "value": 3
            }
          },
          {
            "id": 1101,
            "name": "DeathPenaltyDecrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltydecrease",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} reduction to points lost on death.",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1001,
            "name": "PhysicalDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
            "paramType1": "value",
            "paramValue1": "0-35",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} physical damage",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 1220,
            "name": "PassiveRegenOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/passiveregenonkill",
            "paramType1": "value",
            "nature": "Buff",
            "influences": "Game",
            "description": " {parameter1} regeneration on kill",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 1012,
            "name": "CriticalHitMultiplier",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitmultiplier",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} critical hit multiplier",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 1059,
            "name": "AilmentResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/ailmentresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} ailment resist",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            },
            "param2": {
              "spec": "AttackSpeed",
              "min": [
                4
              ],
              "max": [
                4
              ],
              "value": [
                4
              ],
              "map": {
                "4": [
                  "AttackSpeed"
                ]
              }
            }
          },
          {
            "id": 2300,
            "name": "IncreaseHealth",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasehealth",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Health",
            "param1": {
              "spec": "2-4",
              "min": 2,
              "max": 4
            }
          },
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 2902,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 1012,
            "name": "CriticalHitMultiplier",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalhitmultiplier",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} critical hit multiplier",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Inspiration",
              "min": [
                476
              ],
              "max": [
                476
              ],
              "value": [
                476
              ],
              "map": {
                "476": [
                  "Inspiration"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      476
    ],
    "materials": [
      9,
      34
    ],
    "category": "accessory"
  },
  {
    "id": 28,
    "name": "Beacon",
    "icon": "https://rune.game/images/items/00028.png",
    "image": "https://dl.airtable.com/.attachments/d0dbd48e6930237498b9422f311b8863/8b410c9e/00028.png?ts=1657468582&userId=usrf0GZYc5zCl9Cv7&cs=1403436d9e9a005b",
    "value": "0",
    "type": 13,
    "subType": 17,
    "specificType": 24,
    "slots": [
      5
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 648,
    "attributes": [],
    "details": {
      "Type": "Amulet",
      "Subtype": "Lodestar Amulet",
      "Rune Word": "Eld Lum Io Shael",
      "Distribution": "Crafted",
      "Date": "August 27, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 2,
          "quantity": 1
        },
        {
          "id": 17,
          "quantity": 1
        },
        {
          "id": 16,
          "quantity": 1
        },
        {
          "id": 13,
          "quantity": 1
        }
      ]
    },
    "description": "The light emitted from this brilliant stone highlights the latent arcane potential of objects in the environment.",
    "shortDescription": "",
    "visualDescription": "An amulet truly befitting of its name, this chain is fitted with a pulsing purple star, crackling with violent energy.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "1-4",
              "min": 1,
              "max": 4
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1001,
            "name": "PhysicalDamage",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/physicaldamage",
            "paramType1": "value",
            "paramValue1": "0-35",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} physical damage",
            "param1": {
              "spec": [
                "1-3"
              ],
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 1102,
            "name": "DeathPenaltyAvoid",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltyavoid",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} to avoid losing points on death.",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1150,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} win bonus",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 1151,
            "name": "ItemRewardsIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/itemrewardsincrease",
            "paramType1": "percent",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} item pickup bonus",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            }
          },
          {
            "id": 1201,
            "name": "LeaderDeathPenaltyIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/leaderdeathpenaltyincrease",
            "paramType1": "percent",
            "nature": "Debuff",
            "influences": "Game",
            "description": "{parameter1} increase to points lost on death when leading",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1164,
            "name": "DoublePickupChance",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} chance to double an item pickup",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1325,
            "name": "SkillUnlock",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skillunlock",
            "paramType1": "skill",
            "nature": "Mechanic",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Arcane Eye",
              "min": 214,
              "max": 214,
              "value": 214,
              "map": {
                "214": "Arcane Eye"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "6-8",
              "min": 6,
              "max": 8
            }
          },
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2007,
            "name": "IncreaseCriticalHitMultiplier",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasecriticalhitmultiplier",
            "paramType1": "percent",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1}  critical hit multiplier",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 2902,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "2-7",
              "min": 2,
              "max": 7
            }
          },
          {
            "id": 2309,
            "name": "ReduceCost",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/reducecost",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "influences": "Defense",
            "description": "-{parameter1} Energy Cost",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 3509,
            "name": "LightAura",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/lightaura",
            "paramType1": "value",
            "nature": "Mechanic",
            "description": "{parameter1} light radius",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Hellfire Trap",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      448
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 29,
    "name": "Dragonlight",
    "icon": "https://rune.game/images/items/00029.png",
    "image": "https://dl.airtable.com/.attachments/d235f466e1e662558a3801db5be596c5/29e18b3b/00029.png?ts=1657468585&userId=usrf0GZYc5zCl9Cv7&cs=491d9619755915e3",
    "value": "0",
    "type": 13,
    "subType": 17,
    "specificType": 173,
    "slots": [
      5
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 3472,
    "attributes": [],
    "details": {
      "Type": "Amulet",
      "Subtype": "Royal Archon Amulet",
      "Distribution": "Airdrop"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Infused with the breath of an ice dragon, this ancient amulet radiates a pale blue light and is searing cold to the touch.",
    "shortDescription": "",
    "visualDescription": "With a platinum chain affixed to a glittering platinum dragon wrapped about a massive aquamarine, this feat of jewelry emanates a frosty aura.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}",
            "param1": {
              "spec": "3-6",
              "min": 3,
              "max": 6,
              "map": {
                "3": "Mythic",
                "4": "Epic",
                "5": "Rare",
                "6": "Magical"
              }
            }
          },
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            }
          },
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "20-50",
              "min": 20,
              "max": 50
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "14-20",
              "min": 14,
              "max": 20
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked"
          },
          {
            "id": 2901,
            "name": "ItemRewardsIncrease",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/itemrewardsincrease",
            "paramType1": "percent",
            "paramType2": "rewardtype",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} {parameter2} Rewards on Pickup",
            "param1": {
              "spec": "4-10",
              "min": 4,
              "max": 10
            }
          },
          {
            "id": 2902,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "4-10",
              "min": 4,
              "max": 10
            }
          },
          {
            "id": 2303,
            "name": "EnergyRegen",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/energyregen",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "paramValue2": "0-60",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Energy Regeneration",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 30,
    "name": "Haze",
    "icon": "https://rune.game/images/items/00030.png",
    "image": "https://dl.airtable.com/.attachments/eed5c549dd22a7ab886eaedb0b957f01/73709995/00030.png?ts=1657468586&userId=usrf0GZYc5zCl9Cv7&cs=86b32f1899ef946f",
    "value": "0",
    "type": 5,
    "subType": 10,
    "specificType": 30,
    "slots": [
      3
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": true,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 576,
    "attributes": [],
    "details": {
      "Type": "Helm",
      "Subtype": "Shadow Veil",
      "Date": "October 31, 2021 - Now"
    },
    "recipe": {
      "requirement": [
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 19,
          "quantity": 1
        },
        {
          "id": 17,
          "quantity": 1
        },
        {
          "id": 3,
          "quantity": 1
        },
        {
          "id": 28,
          "quantity": 1
        }
      ]
    },
    "description": "A hood of unknown origin and fabric, beneath which an unnatural darkness clouds the appearance of the wearer.",
    "shortDescription": "",
    "visualDescription": "Simple and unassuming, this hood appears like any other cloth hood on Haerra. However, while worn, an inky darkness hides the appearance of the wearer; inspiring fear in those who peer too close.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 47,
            "name": "ReduceBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Reduced Burn",
            "param1": {
              "spec": "0-15",
              "min": 0,
              "max": 15
            }
          },
          {
            "id": 34,
            "name": "AvoidBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Avoid All Burns",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 61,
            "name": "HarvestCritChance",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "{parameter1} Increased Chance To Critically Harvest Yield (Not Implemented)",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 69,
            "name": "RandomRuneBonus",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomrunebonus",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "description": "{parameter1} Bonus Yield Given as a Random Rune (Not Implemented)",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "30-30",
              "min": 30,
              "max": 30,
              "value": 30
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "EL-TIR",
              "min": 0,
              "max": 2,
              "map": {
                "0": "EL",
                "1": "ELD",
                "2": "TIR"
              }
            }
          },
          {
            "id": 93,
            "name": "AttributeUnlockOnConsecutiveEquipTime",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/attributeunlockonconsecutiveequiptime",
            "paramType1": "hours",
            "nature": "Requirement",
            "description": "Must equip for {hours} consecutive hours to receive benefit of {TargetAttributeToUnlock}",
            "param1": {
              "spec": "336-336",
              "min": 336,
              "max": 336,
              "value": 336
            }
          },
          {
            "id": 94,
            "name": "TargetAttributeToUnlock",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/targetattributetounlock",
            "paramType1": "attributeslot",
            "paramValue1": "0-7",
            "nature": "Neutral",
            "description": "{parameter1} To Unlock",
            "param1": {
              "spec": "m1a-m1a",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "0-15"
              ],
              "min": 0,
              "max": 0,
              "value": 0
            }
          },
          {
            "id": 34,
            "name": "AvoidBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Avoid All Burns",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 61,
            "name": "HarvestCritChance",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "{parameter1} Increased Chance To Critically Harvest Yield (Not Implemented)",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 69,
            "name": "RandomRuneBonus",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomrunebonus",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "description": "{parameter1} Bonus Yield Given as a Random Rune (Not Implemented)",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "30-30",
              "min": 30,
              "max": 30,
              "value": 30
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "RAL-KO",
              "min": 7,
              "max": 17,
              "map": {
                "7": "RAL",
                "8": "ORT",
                "9": "THUL",
                "10": "AMN",
                "11": "SOL",
                "12": "SHAEL",
                "13": "DOL",
                "14": "HEL",
                "15": "IO",
                "16": "LUM",
                "17": "KO"
              }
            }
          },
          {
            "id": 93,
            "name": "AttributeUnlockOnConsecutiveEquipTime",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/attributeunlockonconsecutiveequiptime",
            "paramType1": "hours",
            "nature": "Requirement",
            "description": "Must equip for {hours} consecutive hours to receive benefit of {TargetAttributeToUnlock}",
            "param1": {
              "spec": "336-336",
              "min": 336,
              "max": 336,
              "value": 336
            }
          },
          {
            "id": 94,
            "name": "TargetAttributeToUnlock",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/targetattributetounlock",
            "paramType1": "attributeslot",
            "paramValue1": "0-7",
            "nature": "Neutral",
            "description": "{parameter1} To Unlock",
            "param1": {
              "spec": "m1a-m1a",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "3-6",
              "min": 3,
              "max": 6
            },
            "param2": {
              "spec": "CriticalHitChance",
              "min": [
                2
              ],
              "max": [
                2
              ],
              "value": [
                2
              ],
              "map": {
                "2": [
                  "CriticalHitChance"
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "EnergyRegen",
              "min": [
                1
              ],
              "max": [
                1
              ],
              "value": [
                1
              ],
              "map": {
                "1": [
                  "EnergyRegen"
                ]
              }
            }
          },
          {
            "id": 2902,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 4150,
            "name": "RuneOnWinChance",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/runeonwinchance",
            "paramType1": "percent",
            "paramType2": "rune",
            "paramValue1": "0-100",
            "paramValue2": "EL-ZOD",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} chance of receiving {parameter2} upon winning a match",
            "param1": {
              "spec": "5",
              "min": 5,
              "max": 5,
              "value": 5
            },
            "param2": {
              "spec": "LUM-FAL",
              "min": 16,
              "max": 18,
              "map": {
                "16": "LUM",
                "17": "KO",
                "18": "FAL"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [
      32
    ],
    "category": "accessory"
  },
  {
    "id": 31,
    "name": "Hellfire",
    "icon": "https://rune.game/images/items/00031.png",
    "image": "https://dl.airtable.com/.attachments/ef9ec698aa2ca75c4b23e1686274e7dd/6cd51a59/00031.png?ts=1657468588&userId=usrf0GZYc5zCl9Cv7&cs=e318b4e17f11405b",
    "value": "0",
    "type": 7,
    "subType": 13,
    "specificType": 26,
    "slots": [
      18
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2640,
    "attributes": [],
    "details": {
      "Type": "Body Armor",
      "Subtype": "Dragonforged Cuirass",
      "Rune Word": "Fal Mal Pul Um Zod"
    },
    "recipe": {
      "requirement": [
        {
          "id": 19,
          "quantity": 1
        },
        {
          "id": 23,
          "quantity": 1
        },
        {
          "id": 21,
          "quantity": 1
        },
        {
          "id": 22,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        }
      ]
    },
    "description": "Produced on one of the rare occasions that dragons lent their energies to crafting, this armor is always hot to the touch.",
    "shortDescription": "",
    "visualDescription": "Glimmering with a silver-blue hue, one might incorrectly assume this armor to be cool to the touch. However, this intricately carved breastplate radiates heat, searing all but the wearer.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 63,
            "name": "HarvestOverTime",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestovertime",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "Add {parameter1} To Harvest, Vested Over Time (Not Implemented)",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "5-15"
              ],
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 1219,
            "name": "IncreaseHealthOnKill",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasehealthonkill",
            "paramType1": "value",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} health on kill.",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 1303,
            "name": "RandomizedItemAttribute",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomizeditemattribute",
            "paramType1": "randomattributeid",
            "nature": "Mechanic",
            "influences": "All",
            "description": "{RandomAttributeID}.id.description",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1150,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} win bonus",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 1104,
            "name": "CriticalPointsMultiplierIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/criticalpointsmultiplierincrease",
            "paramType1": "percent",
            "paramValue1": "0-35",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} increase to critical bonus.",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 91,
            "name": "AttributeDebuffToBuffOnEquipTime",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/attributedebufftobuffonequiptime",
            "paramType1": "hours",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Requires {hours} hours to unlock full potential.",
            "param1": {
              "spec": "336-336",
              "min": 336,
              "max": 336,
              "value": 336
            }
          },
          {
            "id": 95,
            "name": "DebuffAttributeToChange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/debuffattributetochange",
            "paramType1": "attributeid",
            "nature": "Neutral",
            "param1": {
              "spec": "HarvestBurn",
              "min": null,
              "max": null
            }
          },
          {
            "id": 96,
            "name": "BuffAttributeToChange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/buffattributetochange",
            "paramType1": "attributeid",
            "nature": "Neutral",
            "param1": {
              "spec": "ReduceBurn",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2307,
            "name": "IncreaseAbsorb",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseabsorb",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Absorb",
            "param1": {
              "spec": "4-10",
              "min": 4,
              "max": 10
            },
            "param2": {
              "spec": "Fire",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Fire"
              }
            }
          },
          {
            "id": 2373,
            "name": "IncreaseRandomStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserandomstat",
            "paramType1": "stats",
            "paramType2": "percent",
            "param1": {
              "spec": "Health, Energy, MagicFind, MovementSpeed",
              "min": [
                7,
                null,
                null,
                3
              ],
              "max": [
                7,
                null,
                null,
                3
              ],
              "value": [
                7,
                null,
                null,
                3
              ],
              "map": {
                "7,,,3": [
                  "Health",
                  null,
                  null,
                  "MovementSpeed"
                ]
              }
            },
            "param2": {
              "spec": "14, 10, 10, 5",
              "min": 14,
              "max": 14,
              "value": 14
            }
          },
          {
            "id": 2014,
            "name": "IncreaseAilmentChance",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseailmentchance",
            "paramType1": "percent",
            "paramType2": "ailment",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} chance to apply {parameter2}",
            "param1": {
              "spec": "4-8",
              "min": 4,
              "max": 8
            },
            "param2": {
              "spec": "Burn",
              "min": null,
              "max": null
            }
          },
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "12-15",
              "min": 12,
              "max": 15
            },
            "param2": {
              "spec": "Fire",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Fire"
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Fire Nova, Infernal Cascade",
              "min": [
                516,
                451
              ],
              "max": [
                516,
                451
              ],
              "value": [
                516,
                451
              ],
              "map": {
                "516,451": [
                  "Fire Nova",
                  "Infernal Cascade"
                ]
              }
            }
          },
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "Fire",
              "min": null,
              "max": null
            }
          },
          {
            "id": 2902,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      451,
      516
    ],
    "materials": [
      21
    ],
    "category": "accessory"
  },
  {
    "id": 32,
    "name": "Luminous Flywings",
    "icon": "https://rune.game/images/items/00032.png",
    "image": "https://dl.airtable.com/.attachments/6db9f98edfe3161a2412c09af0e5f28a/6405cd46/00032.png?ts=1657468593&userId=usrf0GZYc5zCl9Cv7&cs=d4c9f2b89c62bf23",
    "value": "0",
    "type": 14,
    "subType": 32,
    "specificType": 171,
    "slots": [
      15,
      16,
      17
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 252,
    "attributes": [],
    "details": {
      "Type": "Trinket",
      "Subtype": "Glowfly Wings",
      "Distribution": "Airdrop",
      "Date": "November 11, 2021",
      "Max Supply": "1000"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Delicate and vibrant with color, these glowfly wings bestow the holder with periodic bursts of speed and agility.",
    "shortDescription": "",
    "visualDescription": "Ranging from yellow to red to pale blue, these delicate wings can be found in all manner of vibrant colors. Though not much larger than a human finger, these flywings are highly coveted by magic-users and fighters alike.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}",
            "param1": {
              "spec": "3-6",
              "min": 3,
              "max": 6,
              "map": {
                "3": "Mythic",
                "4": "Epic",
                "5": "Rare",
                "6": "Magical"
              }
            }
          },
          {
            "id": 34,
            "name": "AvoidBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Avoid All Burns",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 73,
            "name": "HarvestTheftDefense",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "14-20",
              "min": 14,
              "max": 20
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}",
            "param1": {
              "spec": [
                "3-6"
              ],
              "min": 3,
              "max": 3,
              "value": 3,
              "map": {
                "3": "Mythic"
              }
            }
          },
          {
            "id": 1030,
            "name": "MovementSpeedIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/movementspeedincrease",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Movement",
            "description": "{parameter1} faster movement.",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 1102,
            "name": "DeathPenaltyAvoid",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/deathpenaltyavoid",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "influences": "Game",
            "description": "{parameter1} to avoid losing points on death.",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "14-20",
              "min": 14,
              "max": 20
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 3512,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "rarity",
            "nature": "Mechanic",
            "param1": {
              "spec": "3-6",
              "min": 3,
              "max": 6
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            },
            "param2": {
              "spec": "Movement Speed",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "14-20",
              "min": 14,
              "max": 20
            }
          }
        ],
        "perfection": [
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 33,
    "name": "Growth",
    "icon": "https://rune.game/images/items/00033.png",
    "value": "0",
    "type": 3,
    "subType": 9,
    "specificType": 28,
    "slots": [
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 49500,
    "attributes": [],
    "details": {
      "Type": "Shield",
      "Subtype": "Ironwood Aegis",
      "Rune Word": "Lo"
    },
    "recipe": {
      "requirement": [
        {
          "id": 28,
          "quantity": 1
        }
      ]
    },
    "description": "Comparable in durability to even the strongest metals, this wooden shield was shaped and enchanted by druidic magic.",
    "shortDescription": "",
    "visualDescription": "Moreso grown than crafted, this beautiful ironwood shield is gnarled with knots and vines that cascade down its exterior.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 47,
            "name": "ReduceBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Reduced Burn",
            "param1": {
              "spec": "0-8",
              "min": 0,
              "max": 8
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "4-8",
              "min": 4,
              "max": 8
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            }
          },
          {
            "id": 12,
            "name": "FindGuildToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Guild Token",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 127,
            "name": "RaidTwoAttribute",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/raidtwoattribute",
            "paramType1": "value",
            "paramValue1": "0-100",
            "nature": "Neutral",
            "description": "[Hidden Attribute]",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 72,
            "name": "SpecificWeaponType",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
            "paramType1": "itemtype",
            "nature": "Mechanic",
            "description": "Bonus Weapon: {parameter1}",
            "param1": {
              "spec": "Mace-Axe",
              "min": null,
              "max": null
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Druid",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "4-10"
              ],
              "min": 4,
              "max": 4,
              "value": 4
            }
          },
          {
            "id": 47,
            "name": "ReduceBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Reduced Burn",
            "param1": {
              "spec": "2-8",
              "min": 2,
              "max": 8
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-8",
              "min": 5,
              "max": 8
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            }
          },
          {
            "id": 12,
            "name": "FindGuildToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Guild Token",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 4129,
            "name": "SkillLevel",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/skilllevel",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 72,
            "name": "SpecificWeaponType",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
            "paramType1": "itemtype",
            "nature": "Mechanic",
            "description": "Bonus Weapon: {parameter1}",
            "param1": {
              "spec": "Mace-Axe",
              "min": null,
              "max": null
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Druid",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "4-10",
              "min": 4,
              "max": 10
            }
          },
          {
            "id": 47,
            "name": "ReduceBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Reduced Burn",
            "param1": {
              "spec": "2-8",
              "min": 2,
              "max": 8
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-8",
              "min": 5,
              "max": 8
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            }
          },
          {
            "id": 12,
            "name": "FindGuildToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Guild Token",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 4129,
            "name": "SkillLevel",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/skilllevel",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 72,
            "name": "SpecificWeaponType",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
            "paramType1": "itemtype",
            "nature": "Mechanic",
            "description": "Bonus Weapon: {parameter1}",
            "param1": {
              "spec": "Mace-Axe",
              "min": null,
              "max": null
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Druid-",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      466
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 34,
    "name": "Blur",
    "icon": "https://rune.game/images/items/00034.png",
    "image": "https://dl.airtable.com/.attachments/01dc718ed88b8790d93a9a91c33060b0/baa39c08/00034.png?ts=1657468596&userId=usrf0GZYc5zCl9Cv7&cs=12f0004febc769fb",
    "value": "0",
    "type": 7,
    "subType": 13,
    "specificType": 29,
    "slots": [
      18
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 8712,
    "attributes": [],
    "details": {
      "Type": "Body Armor",
      "Subtype": "Drakehide Vestments",
      "Rune Word": "Pul Lo Um Zod"
    },
    "recipe": {
      "requirement": [
        {
          "id": 21,
          "quantity": 1
        },
        {
          "id": 28,
          "quantity": 1
        },
        {
          "id": 22,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        }
      ]
    },
    "description": "Enchanted with evasive magic, even the surest of strikes have trouble finding purchase on this finely-crafted armor.",
    "shortDescription": "",
    "visualDescription": "Made more for dexterity than pure physical defense, this light armor is weaved together from silvery pauldrons to drakehide leathers and straps.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 34,
            "name": "AvoidBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Avoid All Burns",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 62,
            "name": "HarvestCritMultiplier",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritmultiplier",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "description": "{parameter1} Critical Harvest Bonus (Not Implemented)",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Evasion",
              "min": [
                527
              ],
              "max": [
                527
              ],
              "value": [
                527
              ],
              "map": {
                "527": [
                  "Evasion"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist",
            "param1": {
              "spec": [
                "10-20"
              ],
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 34,
            "name": "AvoidBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Avoid All Burns",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 62,
            "name": "HarvestCritMultiplier",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritmultiplier",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "description": "{parameter1} Critical Harvest Bonus (Not Implemented)",
            "param1": {
              "spec": "4-10",
              "min": 4,
              "max": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 93,
            "name": "AttributeUnlockOnConsecutiveEquipTime",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/attributeunlockonconsecutiveequiptime",
            "paramType1": "hours",
            "nature": "Requirement",
            "description": "Must equip for {hours} consecutive hours to receive benefit of {TargetAttributeToUnlock}",
            "param1": {
              "spec": "168-168",
              "min": 168,
              "max": 168,
              "value": 168
            }
          },
          {
            "id": 94,
            "name": "TargetAttributeToUnlock",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/targetattributetounlock",
            "paramType1": "attributeslot",
            "paramValue1": "0-7",
            "nature": "Neutral",
            "description": "{parameter1} To Unlock",
            "param1": {
              "spec": "m3a-m3a",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2914,
            "name": "DoublePickupChance",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} chance to double an item pickup",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            },
            "param2": {
              "spec": "AttackSpeed",
              "min": [
                4
              ],
              "max": [
                4
              ],
              "value": [
                4
              ],
              "map": {
                "4": [
                  "AttackSpeed"
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "4-10",
              "min": 4,
              "max": 10
            },
            "param2": {
              "spec": "CriticalHitChance",
              "min": [
                2
              ],
              "max": [
                2
              ],
              "value": [
                2
              ],
              "map": {
                "2": [
                  "CriticalHitChance"
                ]
              }
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Arcane Orbs",
              "min": [
                499
              ],
              "max": [
                499
              ],
              "value": [
                499
              ],
              "map": {
                "499": [
                  "Arcane Orbs"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      499
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 35,
    "name": "Mercy",
    "icon": "https://rune.game/images/items/00035.png",
    "image": "https://dl.airtable.com/.attachments/300b9ba0445fed63fce7666e93abfb1d/b291cb49/00035.png?ts=1657468597&userId=usrf0GZYc5zCl9Cv7&cs=b19b67ba81279649",
    "value": "0",
    "type": 1,
    "subType": 5,
    "specificType": 31,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1296,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "Fanged Dagger",
      "Rune Word": "Thul El Sol Hel Tir"
    },
    "recipe": {
      "requirement": [
        {
          "id": 10,
          "quantity": 1
        },
        {
          "id": 1,
          "quantity": 1
        },
        {
          "id": 12,
          "quantity": 1
        },
        {
          "id": 15,
          "quantity": 1
        },
        {
          "id": 3,
          "quantity": 1
        }
      ]
    },
    "description": "An aura of menace surrounds this dagger, its prominent serrations promising a quick and bloody end to the foes of its wielder.",
    "shortDescription": "",
    "visualDescription": "A lethal dagger of intimidating proportions, this blade draws the ire of even the most experienced soldiers. With multiple serrated edges filing like waves along the blue-hued blade, it hurts far more coming out than going in.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "2-7",
              "min": 2,
              "max": 7
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 34,
            "name": "AvoidBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Avoid All Burns",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 19,
            "name": "CreateRandomRuneword",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/createrandomruneword",
            "paramType1": "chance",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Chance To Create Random Runeword",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "NEF-ITH",
              "min": 3,
              "max": 5,
              "map": {
                "3": "NEF",
                "4": "ETH",
                "5": "ITH"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Shadow Strike",
              "min": 526,
              "max": 526,
              "value": 526,
              "map": {
                "526": "Shadow Strike"
              }
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Assassin",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": [
                "2-7"
              ],
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 34,
            "name": "AvoidBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/avoidburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Avoid All Burns",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 19,
            "name": "CreateRandomRuneword",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/createrandomruneword",
            "paramType1": "chance",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Chance To Create Random Runeword",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "NEF-ITH",
              "min": 3,
              "max": 5,
              "map": {
                "3": "NEF",
                "4": "ETH",
                "5": "ITH"
              }
            }
          },
          {
            "id": 4129,
            "name": "SkillLevel",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/skilllevel",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Assassin",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 2002,
            "name": "IncreaseDamageOverTime",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertime",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} increase to {parameter2} damage over time",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            },
            "param2": {
              "spec": "Poison",
              "min": 7,
              "max": 7,
              "value": 7,
              "map": {
                "7": "Poison"
              }
            }
          },
          {
            "id": 2914,
            "name": "DoublePickupChance",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/doublepickupchance",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} chance to double an item pickup",
            "param1": {
              "spec": "1-2",
              "min": 1,
              "max": 2
            }
          },
          {
            "id": 3213,
            "name": "SelfEffectOnCondition",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "effect",
            "param1": {
              "spec": "EnemyWithDoTNearby",
              "min": 21,
              "max": 21,
              "value": 21,
              "map": {
                "21": "EnemyWithDoTNearby"
              }
            },
            "param2": {
              "spec": "Poison",
              "min": null,
              "max": null,
              "map": {}
            }
          },
          {
            "id": 2601,
            "name": "IncreaseStatSkill",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestatskill",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "skill",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} to {parameter2} for {param3}",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 4150,
            "name": "RuneOnWinChance",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/runeonwinchance",
            "paramType1": "percent",
            "paramType2": "rune",
            "paramValue1": "0-100",
            "paramValue2": "EL-ZOD",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} chance of receiving {parameter2} upon winning a match",
            "param1": {
              "spec": "5",
              "min": 5,
              "max": 5,
              "value": 5
            },
            "param2": {
              "spec": "NEF-ITH",
              "min": 3,
              "max": 5,
              "map": {
                "3": "NEF",
                "4": "ETH",
                "5": "ITH"
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Poison Nova",
              "min": [
                501
              ],
              "max": [
                501
              ],
              "value": [
                501
              ],
              "map": {
                "501": [
                  "Poison Nova"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      526
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 36,
    "name": "Edict",
    "icon": "https://rune.game/images/items/00036.png",
    "value": "0",
    "type": 3,
    "subType": 28,
    "specificType": 32,
    "slots": [
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1320,
    "attributes": [],
    "details": {
      "Type": "Shield",
      "Subtype": "Rune-Inscribed Tome"
    },
    "recipe": {
      "requirement": []
    },
    "description": "This leather-bound tome contains powerful incantations which give the bearer significant influence over the spirit world.",
    "shortDescription": "",
    "visualDescription": "With a giant skull emblazoned on the face of this dusty leather-bound volume, the necromantic purpose of this book is all too obvious.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            }
          },
          {
            "id": 61,
            "name": "HarvestCritChance",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "{parameter1} Increased Chance To Critically Harvest Yield (Not Implemented)",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "25-30",
              "min": 25,
              "max": 30
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 90,
            "name": "UnlockSkillMod",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskillmod",
            "nature": "Buff",
            "param1": {
              "spec": "4001-4005",
              "min": 4001,
              "max": 4005
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "DOL-KO",
              "min": 13,
              "max": 17,
              "map": {
                "13": "DOL",
                "14": "HEL",
                "15": "IO",
                "16": "LUM",
                "17": "KO"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 70,
            "name": "YieldBonusSpecificWeapon",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusspecificweapon",
            "paramType1": "percent",
            "paramValue1": "0-25",
            "nature": "Buff",
            "description": "{parameter1} increase to {weapon} harvest yield bonus",
            "param1": {
              "spec": [
                "2-5"
              ],
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 72,
            "name": "SpecificWeaponType",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
            "paramType1": "itemtype",
            "nature": "Mechanic",
            "description": "Bonus Weapon: {parameter1}",
            "param1": {
              "spec": "Dagger",
              "min": null,
              "max": null
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "15-30",
              "min": 15,
              "max": 30
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 4129,
            "name": "SkillLevel",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/skilllevel",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "DOL-IO",
              "min": 13,
              "max": 15,
              "map": {
                "13": "DOL",
                "14": "HEL",
                "15": "IO"
              }
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Necromancer",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 72,
            "name": "SpecificWeaponType",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificweapontype",
            "paramType1": "itemtype",
            "nature": "Mechanic",
            "description": "Bonus Weapon: {parameter1}",
            "param1": {
              "spec": "Dagger",
              "min": null,
              "max": null
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 4129,
            "name": "SkillLevel",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/skilllevel",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "Dol-Io",
              "map": {}
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Necromancer",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 37,
    "name": "Burial",
    "icon": "https://rune.game/images/items/00037.png",
    "image": "https://dl.airtable.com/.attachments/0de29c7c7e884f907019358f60e8d9de/57f294df/00037.png?ts=1657468600&userId=usrf0GZYc5zCl9Cv7&cs=6e3ab756a5c0574b",
    "value": "0",
    "type": 2,
    "subType": 21,
    "specificType": 33,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 10571,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Soulreaver Scythe",
      "Rune Word": "Mal Ist Zod Tal Eld"
    },
    "recipe": {
      "requirement": [
        {
          "id": 23,
          "quantity": 1
        },
        {
          "id": 24,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 7,
          "quantity": 1
        },
        {
          "id": 2,
          "quantity": 1
        }
      ]
    },
    "description": "Faint wisps of ichor energy endlessly drift from the scythe's blade, its necromantic enchantments trivializing the process of harvesting souls.",
    "shortDescription": "",
    "visualDescription": "While not particularly pretty, this massive scythe is purely practical. A gnarled and twisted handle of shadewood is affixed to a curved blade of muted and chipped steel. The edges of the long blade froth with necrotic energy, grasping towards living souls that pass by.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "0-30",
              "min": 0,
              "max": 30
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "40",
              "min": 40,
              "max": 40,
              "value": 40
            }
          },
          {
            "id": 119,
            "name": "YieldBonusFromHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusfromhiddenpool",
            "paramType1": "value",
            "nature": "Buff",
            "description": "{parameter1} Yield Bonus On Harvests From Hidden Pool",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-30",
              "min": 0,
              "max": 30
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "20",
              "min": 20,
              "max": 20,
              "value": 20
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "EL-TIR",
              "min": 0,
              "max": 2,
              "map": {
                "0": "EL",
                "1": "ELD",
                "2": "TIR"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Soul Reaver",
              "min": 19,
              "max": 19,
              "value": 19,
              "map": {
                "19": "Soul Reaver"
              }
            }
          },
          {
            "id": 21,
            "name": "SpecificClass",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/specificclass",
            "paramType1": "classId",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Class Only ({parameter1})",
            "param1": {
              "spec": "Necromancer",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "10-25",
              "min": 10,
              "max": 25
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "8-15",
              "min": 8,
              "max": 15
            }
          },
          {
            "id": 3200,
            "name": "IncreaseOnKill",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseonkill",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramValue1": "0-200",
            "nature": "Buff",
            "description": "{parameter1} {parameter2} on kill",
            "param1": {
              "spec": "20-25",
              "min": 20,
              "max": 25
            },
            "param2": {
              "spec": "Health",
              "min": [
                7
              ],
              "max": [
                7
              ],
              "value": [
                7
              ],
              "map": {
                "7": [
                  "Health"
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "13-18",
              "min": 13,
              "max": 18
            },
            "param2": {
              "spec": "EnergyRegen",
              "min": [
                1
              ],
              "max": [
                1
              ],
              "value": [
                1
              ],
              "map": {
                "1": [
                  "EnergyRegen"
                ]
              }
            }
          },
          {
            "id": 2902,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-25",
              "min": 5,
              "max": 25
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Haunting Spirit, Summon Gargoyle",
              "min": [
                493,
                535
              ],
              "max": [
                493,
                535
              ],
              "value": [
                493,
                535
              ],
              "map": {
                "493,535": [
                  "Haunting Spirit",
                  "Summon Gargoyle"
                ]
              }
            }
          },
          {
            "id": 2903,
            "name": "IncreaseRankRewardBonus",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Increase to Rank Reward Bonuses",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      535,
      493
    ],
    "materials": [
      37
    ],
    "category": "accessory"
  },
  {
    "id": 38,
    "name": "Shade",
    "icon": "https://rune.game/images/items/00038.png",
    "value": "0",
    "type": 11,
    "subType": 12,
    "specificType": 34,
    "slots": [
      12
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": false,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1728,
    "attributes": [],
    "details": {
      "Type": "Boot",
      "Subtype": "Whispertread Boots"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Designed by an Irondell craftswoman who claims to collaborate with fay creatures, these boots seem to naturally muffle the sound of every step.",
    "shortDescription": "",
    "visualDescription": "TBD",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 47,
            "name": "ReduceBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Reduced Burn",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "2-4",
              "min": 2,
              "max": 4
            }
          },
          {
            "id": 61,
            "name": "HarvestCritChance",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "{parameter1} Increased Chance To Critically Harvest Yield (Not Implemented)",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 66,
            "name": "HarvestTheft",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheft",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "Enable The Option To Sacrifice Up To {parameter1} of Your Harvest In Order To Steal {parameter1} of The Next Raider's Harvest From the Same Pool",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "LUM-IST",
              "min": 16,
              "max": 23,
              "map": {
                "16": "LUM",
                "17": "KO",
                "18": "FAL",
                "19": "LEM",
                "20": "PUL",
                "21": "UM",
                "22": "MAL",
                "23": "IST"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 88,
            "name": "FindFashionShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findfashionshard",
            "paramType1": "value",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Fashion Find",
            "param1": {
              "spec": [
                "20-20"
              ],
              "min": 20,
              "max": 20,
              "value": 20
            }
          },
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "6-6",
              "min": 6,
              "max": 6,
              "value": 6
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)"
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "20-20",
              "min": 20,
              "max": 20,
              "value": 20
            }
          },
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "6-6",
              "min": 6,
              "max": 6,
              "value": 6
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 39,
    "name": "Folly",
    "icon": "https://rune.game/images/items/00039.png",
    "value": "0",
    "type": 5,
    "subType": 10,
    "specificType": 35,
    "slots": [
      3
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": false,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Type": "Helm",
      "Subtype": "Mask of Irony"
    },
    "recipe": {
      "requirement": []
    },
    "description": "What is the state of mind that leads a person to strap a barrel's lid to their face for protection?",
    "shortDescription": "",
    "visualDescription": "Intricately crafted from the finest straight-grained Ashyran oaks, steepled with perfectly anomalous swirled knots, meticulously infused with the most premier burgundy coloration on its reverse side, and expertly conjoined with the highest-quality resins and organic straw.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 88,
            "name": "FindFashionShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findfashionshard",
            "paramType1": "value",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Fashion Find",
            "param1": {
              "spec": "35-35",
              "min": 35,
              "max": 35,
              "value": 35
            }
          },
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "6-6",
              "min": 6,
              "max": 6,
              "value": 6
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Jester's Folly",
              "min": 22,
              "max": 22,
              "value": 22,
              "map": {
                "22": "Jester's Folly"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Jester's Folly",
              "min": 22,
              "max": 22,
              "value": 22,
              "map": {
                "22": "Jester's Folly"
              }
            }
          }
        ],
        "perfection": [
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 40,
    "name": "Soulcord",
    "icon": "https://rune.game/images/items/00040.png",
    "value": "0",
    "type": 12,
    "subType": 14,
    "specificType": 36,
    "slots": [
      13,
      16,
      14
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": false,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 6000,
    "attributes": [],
    "details": {
      "Type": "Ring",
      "Subtype": "Darkblood Band"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Empowered by tethering tortured souls to your service, this demonbone ring provides capable necromancers with an endless fount of undead.",
    "shortDescription": "",
    "visualDescription": "This blood-tinged band of demonbone exudes a strange kind of spartan elegance despite its malevolent origin.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 118,
            "name": "YieldBonusToHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonustohiddenpool",
            "paramType1": "value",
            "nature": "Buff",
            "description": "{parameter1} yield bonus on harvests to hidden pool",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            }
          },
          {
            "id": 119,
            "name": "YieldBonusFromHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusfromhiddenpool",
            "paramType1": "value",
            "nature": "Buff",
            "description": "{parameter1} Yield Bonus On Harvests From Hidden Pool",
            "param1": {
              "spec": "0-15",
              "min": 0,
              "max": 15
            }
          },
          {
            "id": 90,
            "name": "UnlockSkillMod",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskillmod",
            "nature": "Buff",
            "param1": {
              "spec": "4011-4015",
              "min": 4011,
              "max": 4015
            }
          },
          {
            "id": 126,
            "name": "UnstakeLockedDurationFromHarvest",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/unstakelockeddurationfromharvest",
            "paramType1": "days",
            "nature": "Mechanic",
            "description": "Unstaking is locked for {parameter1} hours after harvest",
            "param1": {
              "spec": "7-21",
              "min": 7,
              "max": 21
            }
          },
          {
            "id": 100,
            "name": "RequireSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/requireskill",
            "paramType1": "skill",
            "nature": "Requirement",
            "param1": {
              "spec": "Soul Reaver",
              "min": 19,
              "max": 19,
              "value": 19,
              "map": {
                "19": "Soul Reaver"
              }
            }
          },
          {
            "id": 122,
            "name": "AttributeScaleWithHiddenPoolStake",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/attributescalewithhiddenpoolstake",
            "paramType1": "value",
            "nature": "Mechanic",
            "description": "Item attributes scale with amount staked in hidden pool. Target amount: {parameter1}.",
            "param1": {
              "spec": "250-250",
              "min": 250,
              "max": 250,
              "value": 250
            }
          },
          {
            "id": 121,
            "name": "AttributeUnlockWhenHiddenPoolStake",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/attributeunlockwhenhiddenpoolstake",
            "paramType1": "value",
            "nature": "Requirement",
            "description": "Must have {parameter1} tokens staked in hidden pool to use item's full potential",
            "param1": {
              "spec": "250-250",
              "min": 250,
              "max": 250,
              "value": 250
            }
          },
          {
            "id": 94,
            "name": "TargetAttributeToUnlock",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/targetattributetounlock",
            "paramType1": "attributeslot",
            "paramValue1": "0-7",
            "nature": "Neutral",
            "description": "{parameter1} To Unlock",
            "param1": {
              "spec": "m2a",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [
      38
    ],
    "category": "accessory"
  },
  {
    "id": 41,
    "name": "Windfall",
    "icon": "https://rune.game/images/items/00041.png",
    "value": "0",
    "type": 12,
    "subType": 14,
    "specificType": 37,
    "slots": [
      13,
      16,
      14
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": false,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 6480,
    "attributes": [],
    "details": {
      "Type": "Ring",
      "Subtype": "Prism Band"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Commissioned by a legendary Elysium Mage adventurer, this ring is designed to turn devastating blunders into minor errors.",
    "shortDescription": "",
    "visualDescription": "Several precious metals were melded together with arcane power to produce this ring. A hauntingly beautiful work, and eye-catching to even the most austere-minded.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 123,
            "name": "AvoidHarvestLossWithoutBonus",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/avoidharvestlosswithoutbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "description": "{parameter1} chance to avoid harvest loss effects, receiving harvest without bonuses",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "20-25",
              "min": 20,
              "max": 25
            }
          },
          {
            "id": 88,
            "name": "FindFashionShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findfashionshard",
            "paramType1": "value",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Fashion Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 84,
            "name": "RandomStaticAttribute",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomstaticattribute",
            "paramType1": "value",
            "nature": "Mechanic",
            "param1": {
              "spec": "801-820",
              "min": 801,
              "max": 820
            }
          },
          {
            "id": 5,
            "name": "BurnEntireHarvest",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Chance To Burn Harvest",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 73,
            "name": "HarvestTheftDefense",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 93,
            "name": "AttributeUnlockOnConsecutiveEquipTime",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/attributeunlockonconsecutiveequiptime",
            "paramType1": "hours",
            "nature": "Requirement",
            "description": "Must equip for {hours} consecutive hours to receive benefit of {TargetAttributeToUnlock}",
            "param1": {
              "spec": "168-168",
              "min": 168,
              "max": 168,
              "value": 168
            }
          },
          {
            "id": 94,
            "name": "TargetAttributeToUnlock",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/targetattributetounlock",
            "paramType1": "attributeslot",
            "paramValue1": "0-7",
            "nature": "Neutral",
            "description": "{parameter1} To Unlock",
            "param1": {
              "spec": "m2a",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield"
          },
          {
            "id": 30,
            "name": "HarvestLockedLp",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestlockedlp",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Neutral",
            "description": "{parameter1} Harvest Buy & Lock LP"
          }
        ],
        "perfection": [
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 30,
            "name": "HarvestLockedLp",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestlockedlp",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Neutral",
            "description": "{parameter1} Harvest Buy & Lock LP"
          }
        ],
        "perfection": [
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 43,
    "name": "Thunderchild",
    "icon": "https://rune.game/images/items/00043.png",
    "image": "https://dl.airtable.com/.attachments/1f66cfc1b91d6e2c7ed07436a79777a3/ce8da9de/00043.png?ts=1657468608&userId=usrf0GZYc5zCl9Cv7&cs=c1b6c9ec50df24fc",
    "value": "0",
    "type": 2,
    "subType": 38,
    "specificType": 158,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1728,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Fist of Eledon",
      "Rune Word": "Shael Ist Zod Mal Um"
    },
    "recipe": {
      "requirement": [
        {
          "id": 13,
          "quantity": 1
        },
        {
          "id": 24,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 23,
          "quantity": 1
        },
        {
          "id": 22,
          "quantity": 1
        }
      ]
    },
    "description": "Runic inscriptions have transformed this stone hammer into a brutal conduit of Eledon's divine will.",
    "shortDescription": "",
    "visualDescription": "Crudely crafted from a stone known for its indestructibility, Thunderchild thrums with the tune of a distant storm. Inscribed with numerous runes, this hammer is dedicated to Borial, Eledon's Divine Tempest. On impact, the hammer emits a thunderclap that deafens nearby enemies.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "15-30",
              "min": 15,
              "max": 30
            }
          },
          {
            "id": 141,
            "name": "RaidPending2",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/raidpending2",
            "param1": {
              "spec": "2-4",
              "min": 2,
              "max": 4
            }
          },
          {
            "id": 69,
            "name": "RandomRuneBonus",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomrunebonus",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "description": "{parameter1} Bonus Yield Given as a Random Rune (Not Implemented)",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "ITH-RAL",
              "min": 5,
              "max": 7,
              "map": {
                "5": "ITH",
                "6": "TAL",
                "7": "RAL"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Hidden Skill 1",
              "min": 26,
              "max": 26,
              "value": 26,
              "map": {
                "26": "Hidden Skill 1"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "20-30",
              "min": 20,
              "max": 30
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2013,
            "name": "EffectChanceOnCondition",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/effectchanceoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "effect",
            "paramValue1": "0-100",
            "param1": {
              "spec": "SkillHits",
              "min": 3,
              "max": 3,
              "value": 3,
              "map": {
                "3": "SkillHits"
              }
            },
            "param2": {
              "spec": "All, 1",
              "min": null,
              "max": null,
              "map": {}
            }
          },
          {
            "id": 3209,
            "name": "CastOnCondition",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/castoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "skill",
            "param1": {
              "spec": "SkillHits, AppliedAilment",
              "map": {}
            },
            "param2": {
              "spec": "Leap, 1; Stun",
              "min": null,
              "max": null,
              "map": {}
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            },
            "param2": {
              "spec": "EnergyRegen",
              "min": [
                1
              ],
              "max": [
                1
              ],
              "value": [
                1
              ],
              "map": {
                "1": [
                  "EnergyRegen"
                ]
              }
            }
          },
          {
            "id": 2903,
            "name": "IncreaseRankRewardBonus",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Increase to Rank Reward Bonuses",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 4155,
            "name": "IncreaseGuildPrestigeGain",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseguildprestigegain",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} increase to guild prestige gain following match.",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Storm Call, Leap",
              "min": [
                463,
                472
              ],
              "max": [
                463,
                472
              ],
              "value": [
                463,
                472
              ],
              "map": {
                "463,472": [
                  "Storm Call",
                  "Leap"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      463,
      482,
      483,
      491
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 44,
    "name": "Hellreaver",
    "icon": "https://rune.game/images/items/00044.png",
    "image": "https://dl.airtable.com/.attachments/05dc45bb336d198abed84cee6df55c6a/f745dddf/00044.png?ts=1657468611&userId=usrf0GZYc5zCl9Cv7&cs=dd87e5b1ebd89e9f",
    "value": "0",
    "type": 2,
    "subType": 39,
    "specificType": 159,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 14256,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Ancestral Axe",
      "Rune Word": "Ral Ist Zod Mal Um"
    },
    "recipe": {
      "requirement": [
        {
          "id": 8,
          "quantity": 1
        },
        {
          "id": 24,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 23,
          "quantity": 1
        },
        {
          "id": 22,
          "quantity": 1
        }
      ]
    },
    "description": "Passed down for generations among the barbaric Icefall Behemoths, Hellreaver embodies their vicious fighting style and terrifying war cry.",
    "shortDescription": "",
    "visualDescription": "Runic symbols etched across the blade describe its long, bloody history. Despite its extensive use, the metal gleams as if anxious to open the next violent chapter.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "30-35",
              "min": 30,
              "max": 35
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 66,
            "name": "HarvestTheft",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheft",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "Enable The Option To Sacrifice Up To {parameter1} of Your Harvest In Order To Steal {parameter1} of The Next Raider's Harvest From the Same Pool",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "EL-TIR",
              "min": 0,
              "max": 2,
              "map": {
                "0": "EL",
                "1": "ELD",
                "2": "TIR"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Hidden Skill 2",
              "min": 27,
              "max": 27,
              "value": 27,
              "map": {
                "27": "Hidden Skill 2"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "20-35",
              "min": 20,
              "max": 35
            }
          },
          {
            "id": 3213,
            "name": "SelfEffectOnCondition",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "effect",
            "param1": {
              "spec": "SkillTypeUsed",
              "min": 23,
              "max": 23,
              "value": 23,
              "map": {
                "23": "SkillTypeUsed"
              }
            },
            "param2": {
              "spec": "Warcry",
              "min": null,
              "max": null,
              "map": {}
            }
          },
          {
            "id": 2002,
            "name": "IncreaseDamageOverTime",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertime",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} increase to {parameter2} damage over time",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            },
            "param2": {
              "spec": "EnergyRegen",
              "min": [
                1
              ],
              "max": [
                1
              ],
              "value": [
                1
              ],
              "map": {
                "1": [
                  "EnergyRegen"
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            },
            "param2": {
              "spec": "Knockback",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 4150,
            "name": "RuneOnWinChance",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/runeonwinchance",
            "paramType1": "percent",
            "paramType2": "rune",
            "paramValue1": "0-100",
            "paramValue2": "EL-ZOD",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} chance of receiving {parameter2} upon winning a match",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            },
            "param2": {
              "spec": "LUM-UM",
              "min": 16,
              "max": 21,
              "map": {
                "16": "LUM",
                "17": "KO",
                "18": "FAL",
                "19": "LEM",
                "20": "PUL",
                "21": "UM"
              }
            }
          },
          {
            "id": 2902,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Grappling Hook, Ice Wall",
              "min": [
                517,
                null
              ],
              "max": [
                517,
                null
              ],
              "value": [
                517,
                null
              ],
              "map": {
                "517,": [
                  "Grappling Hook",
                  null
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 45,
    "name": "Phoenix",
    "icon": "https://rune.game/images/items/00045.png",
    "image": "https://dl.airtable.com/.attachments/a139169143fdf979277f00432227f0f6/d4eb2cf2/image.png?ts=1657468612&userId=usrf0GZYc5zCl9Cv7&cs=8c7486e742de56e0",
    "value": "0",
    "type": 2,
    "subType": 7,
    "specificType": 162,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 6696,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Beacon of Relia"
    },
    "recipe": {
      "requirement": []
    },
    "description": "A symbol of Relia favored by the League of Sol sits atop this staff, a brilliant representation of the kona energy infused within it.",
    "shortDescription": "",
    "visualDescription": "At the head of this tall staff perches the golden likeness of a phoenix: holy symbol of the League of Sol. The shaft is masterfully carved from a singular, long bough of rustwood. The staff is always warm to the touch, and occasionally emits showers of red-gold sparks.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "20-50",
              "min": 20,
              "max": 50
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "15-20",
              "min": 15,
              "max": 20
            }
          },
          {
            "id": 143,
            "name": "RaidPending4",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/raidpending4",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "EL-TIR",
              "min": 0,
              "max": 2,
              "map": {
                "0": "EL",
                "1": "ELD",
                "2": "TIR"
              }
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Hidden Skill 3",
              "min": 28,
              "max": 28,
              "value": 28,
              "map": {
                "28": "Hidden Skill 3"
              }
            }
          },
          {
            "id": 147,
            "name": "RaidPending8",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/raidpending8",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "15-20",
              "min": 15,
              "max": 20
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2002,
            "name": "IncreaseDamageOverTime",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertime",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} increase to {parameter2} damage over time",
            "param1": {
              "spec": "10",
              "min": 10,
              "max": 10,
              "value": 10
            },
            "param2": {
              "spec": "Fire",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Fire"
              }
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "12-15",
              "min": 12,
              "max": 15
            }
          },
          {
            "id": 2003,
            "name": "IncreaseDamageOverTimeLength",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertimelength",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} longer {parameter2} damage over time effects",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "Fire",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Fire"
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Fireball, Meteor",
              "min": [
                null,
                445
              ],
              "max": [
                null,
                445
              ],
              "value": [
                null,
                445
              ],
              "map": {
                ",445": [
                  null,
                  "Meteor"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 46,
    "name": "Ignition",
    "icon": "https://rune.game/images/items/00046.png",
    "image": "https://dl.airtable.com/.attachments/3a27ef8bdcef9580afcf61ce6d5d4f65/fea4088a/image.png?ts=1657468613&userId=usrf0GZYc5zCl9Cv7&cs=4dfd49a6f7089b07",
    "value": "0",
    "type": 11,
    "subType": 12,
    "specificType": 161,
    "slots": [
      12
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2640,
    "attributes": [],
    "details": {
      "Type": "Boot",
      "Subtype": "Sol Battlemage Footwraps",
      "Rune Word": "Zod Ist Mal"
    },
    "recipe": {
      "requirement": [
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 24,
          "quantity": 1
        },
        {
          "id": 23,
          "quantity": 1
        }
      ]
    },
    "description": "Silken footwraps of deep crimson, this footwear allows its bearer to streak across the battlefield like a blazing firebolt.",
    "shortDescription": "",
    "visualDescription": "These silken footwraps are favored by the League of Sol, as they are well-suited to a desert environment. Saturated red dye and an infusion of kona mark these as belonging to a disciple of Relia.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-10",
              "min": 1,
              "max": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 144,
            "name": "RaidPending5",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/raidpending5",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 142,
            "name": "RaidPending3",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/raidpending3",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "MovementSpeed",
              "min": [
                3
              ],
              "max": [
                3
              ],
              "value": [
                3
              ],
              "map": {
                "3": [
                  "MovementSpeed"
                ]
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Flaming Dash",
              "min": [
                450
              ],
              "max": [
                450
              ],
              "value": [
                450
              ],
              "map": {
                "450": [
                  "Flaming Dash"
                ]
              }
            }
          },
          {
            "id": 2304,
            "name": "IncreaseResist",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Resistance",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            },
            "param2": {
              "spec": "Fire",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Fire"
              }
            }
          },
          {
            "id": 2900,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramType2": "rewardtype",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} {parameter2} Rewards on Win",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            },
            "param2": {
              "spec": "Runes",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [
      20
    ],
    "category": "accessory"
  },
  {
    "id": 47,
    "name": "Corona",
    "icon": "https://rune.game/images/items/00047.png",
    "value": "0",
    "type": 7,
    "subType": 13,
    "specificType": 160,
    "slots": [
      18
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2160,
    "attributes": [],
    "details": {
      "Type": "Body Armor",
      "Subtype": "Sol Battlemage Tunic"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Worn by advanced mages in the League of Sol, these bright red silken robes exude Kona energy like brilliant sunbursts, and greatly increase the wearer's ability to manipulate fire. When worn above",
    "shortDescription": "",
    "visualDescription": "Masterfully weaved from threads of crimson and gold, these robes are truly befitting of royalty. The envy of all disciples of kona, this garb is emblazoned with brilliant markings of a long-forgotten language and subjected to the breath of a phoenix.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "20-25",
              "min": 20,
              "max": 25
            }
          },
          {
            "id": 127,
            "name": "RaidTwoAttribute",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/raidtwoattribute",
            "paramType1": "value",
            "paramValue1": "0-100",
            "nature": "Neutral",
            "description": "[Hidden Attribute]",
            "param1": {
              "spec": "15-20",
              "min": 15,
              "max": 20
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 5,
            "name": "BurnEntireHarvest",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Chance To Burn Harvest",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "10-13",
              "min": 10,
              "max": 13
            },
            "param2": {
              "spec": "All\n",
              "map": {}
            }
          },
          {
            "id": 2300,
            "name": "IncreaseHealth",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasehealth",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Health",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Fire Wall, Enkindle",
              "min": [
                448,
                427
              ],
              "max": [
                448,
                427
              ],
              "value": [
                448,
                427
              ],
              "map": {
                "448,427": [
                  "Fire Wall",
                  "Enkindle"
                ]
              }
            }
          },
          {
            "id": 2304,
            "name": "IncreaseResist",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Resistance",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            },
            "param2": {
              "spec": "Fire",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Fire"
              }
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "6-10",
              "min": 6,
              "max": 10
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [
      20
    ],
    "category": "accessory"
  },
  {
    "id": 48,
    "name": "Judgement",
    "icon": "https://rune.game/images/items/00048.png",
    "value": "0",
    "type": 2,
    "subType": 38,
    "specificType": 154,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": false,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Eledon's Truth"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 49,
    "name": "Purity",
    "icon": "https://rune.game/images/items/00049.png",
    "image": "https://dl.airtable.com/.attachments/f695da2c2131940349a2c693f6cd651a/a12a2e8f/image1.png?ts=1657468616&userId=usrf0GZYc5zCl9Cv7&cs=6a63602136867f3e",
    "value": "0",
    "type": 2,
    "subType": 4,
    "specificType": 153,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1386,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Archon's Lightlance"
    },
    "recipe": {
      "requirement": []
    },
    "description": "An advanced Archon weapon whose pointed tip crackles with divine Astra energy. Lightlances were given to only the most martially capable of Archons, making them both a signifier of prowess, and a salient threat to the chaospawn dregs.",
    "shortDescription": "",
    "visualDescription": "Of platinum gilding and silver make, this halberd is both awe-inspiring and terrifying. Wreathed in blinding astra energy, its multiple razor-edged blades are designed to purify through annihilation.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "20-40",
              "min": 20,
              "max": 40
            }
          },
          {
            "id": 12,
            "name": "FindGuildToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Guild Token",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          },
          {
            "id": 146,
            "name": "RaidPending7",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/raidpending7",
            "param1": {
              "spec": "10-10",
              "min": 10,
              "max": 10,
              "value": 10
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "THUL-SOL",
              "min": 9,
              "max": 11,
              "map": {
                "9": "THUL",
                "10": "AMN",
                "11": "SOL"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Hidden Skill 4",
              "min": 29,
              "max": 29,
              "value": 29,
              "map": {
                "29": "Hidden Skill 4"
              }
            }
          },
          {
            "id": 147,
            "name": "RaidPending8",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/raidpending8",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "15-25",
              "min": 15,
              "max": 25
            },
            "param2": {
              "spec": "Arcane",
              "min": 6,
              "max": 6,
              "value": 6,
              "map": {
                "6": "Arcane"
              }
            }
          },
          {
            "id": 2019,
            "name": "IgnoreArmor",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/ignorearmor",
            "paramType1": "value",
            "paramValue1": "0-50",
            "param1": {
              "spec": "50",
              "min": 50,
              "max": 50,
              "value": 50
            }
          },
          {
            "id": 2021,
            "name": "IncreaseMinimumDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseminimumdamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} to minimum damage",
            "param1": {
              "spec": "20",
              "min": 20,
              "max": 20,
              "value": 20
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Heavenly Thrust",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [
      23
    ],
    "category": "accessory"
  },
  {
    "id": 50,
    "name": "Greed",
    "icon": "https://rune.game/images/items/00050.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": false,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 51,
    "name": "Riptide",
    "icon": "https://rune.game/images/items/00051.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": false,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 52,
    "name": "Origin",
    "icon": "https://rune.game/images/items/00052.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": false,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Rune Word": "Eth Ohm Ber"
    },
    "recipe": {
      "requirement": [
        {
          "id": 5,
          "quantity": 1
        },
        {
          "id": 27,
          "quantity": 1
        },
        {
          "id": 30,
          "quantity": 1
        }
      ]
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 53,
    "name": "Fortitude",
    "icon": "https://rune.game/images/items/00053.png",
    "value": "0",
    "type": 7,
    "subType": 13,
    "specificType": 39,
    "slots": [
      18
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1584,
    "attributes": [],
    "details": {
      "Type": "Body Armor",
      "Subtype": "Steel Carapace"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "Despite clear wear and tear, this layered body armor offers reliable protection.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 73,
            "name": "HarvestTheftDefense",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}",
            "param1": {
              "spec": [
                "3-6"
              ],
              "min": 3,
              "max": 3,
              "value": 3,
              "map": {
                "3": "Mythic"
              }
            }
          }
        ],
        "perfection": [
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}",
            "param1": {
              "spec": "3-6",
              "min": 3,
              "max": 6,
              "map": {
                "3": "Mythic",
                "4": "Epic",
                "5": "Rare",
                "6": "Magical"
              }
            }
          },
          {
            "id": 4112,
            "name": "IncreaseLightningDamage",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/increaselightningdamage",
            "param1": {
              "spec": "1-12",
              "min": 1,
              "max": 12
            }
          },
          {
            "id": 4139,
            "name": "IncreaseMaxEnergy",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemaxenergy",
            "param1": {
              "spec": "20-20",
              "min": 20,
              "max": 20,
              "value": 20
            }
          },
          {
            "id": 4141,
            "name": "IncreaseMaxEnergyPercent",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemaxenergypercent",
            "param1": {
              "spec": "25-25",
              "min": 25,
              "max": 25,
              "value": 25
            }
          },
          {
            "id": 1328,
            "name": "SkillLevelUp",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/skilllevelup",
            "paramType1": "value",
            "nature": "Buff",
            "influences": "Skill",
            "description": "{parameter1} levels added to equipped skill(s)",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 54,
    "name": "Presence",
    "icon": "https://rune.game/images/items/00054.png",
    "value": "0",
    "type": 5,
    "subType": 10,
    "specificType": 40,
    "slots": [
      3
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 960,
    "attributes": [],
    "details": {
      "Type": "Helm",
      "Subtype": "Circlet of Exaltation"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "This platinum circlet seems to bestow upon its wearer an aura of unresistable charisma and authority.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 81,
            "name": "GuildTreasuryYieldBonus",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/guildtreasuryyieldbonus",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} yield bonus, sent to guild treasury.",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 12,
            "name": "FindGuildToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findguildtoken",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Guild Token",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Inspiring Presence",
              "min": 23,
              "max": 23,
              "value": 23,
              "map": {
                "23": "Inspiring Presence"
              }
            }
          },
          {
            "id": 62,
            "name": "HarvestCritMultiplier",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritmultiplier",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "description": "{parameter1} Critical Harvest Bonus (Not Implemented)",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}",
            "param1": {
              "spec": [
                "3-6"
              ],
              "min": 3,
              "max": 3,
              "value": 3,
              "map": {
                "3": "Mythic"
              }
            }
          }
        ],
        "perfection": [
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}",
            "param1": {
              "spec": "3-6",
              "min": 3,
              "max": 6,
              "map": {
                "3": "Mythic",
                "4": "Epic",
                "5": "Rare",
                "6": "Magical"
              }
            }
          },
          {
            "id": 4113,
            "name": "IncreaseDefensePercentage",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedefensepercentage",
            "param1": {
              "spec": "70-100",
              "min": 70,
              "max": 100
            }
          },
          {
            "id": 4120,
            "name": "IncreaseFrostDamagePercent",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/increasefrostdamagepercent",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 1019,
            "name": "LifeSteal",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/lifesteal",
            "paramType1": "percent",
            "paramValue1": "0-30",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} life steal",
            "param1": {
              "spec": "5-8",
              "min": 5,
              "max": 8
            }
          },
          {
            "id": 4114,
            "name": "EnergySteal",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/energysteal",
            "param1": {
              "spec": "5-8",
              "min": 5,
              "max": 8
            }
          },
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "14-20",
              "min": 14,
              "max": 20
            }
          },
          {
            "id": 2317,
            "name": "MagicDamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicdamagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} magic damage reduction",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "20-20",
              "min": 20,
              "max": 20,
              "value": 20
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [
      23
    ],
    "category": "accessory"
  },
  {
    "id": 55,
    "name": "Reave",
    "icon": "https://rune.game/images/items/00055.png",
    "image": "https://dl.airtable.com/.attachments/2ac48bac7517ce3e492571892f035477/2da3c0e0/boots_A_01.png?ts=1657468624&userId=usrf0GZYc5zCl9Cv7&cs=28df50bafc48c814",
    "value": "0",
    "type": 11,
    "subType": 12,
    "specificType": 27,
    "slots": [
      12
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 3456,
    "attributes": [],
    "details": {
      "Type": "Boot",
      "Subtype": "Raider Boots",
      "Rune Word": "Gul Lo Zod Ist"
    },
    "recipe": {
      "requirement": [
        {
          "id": 25,
          "quantity": 1
        },
        {
          "id": 28,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 24,
          "quantity": 1
        }
      ]
    },
    "description": "Shaped by the hands of a respected Barbarian artisan, these boots were designed to support a life of constant combat.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 63,
            "name": "HarvestOverTime",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestovertime",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "Add {parameter1} To Harvest, Vested Over Time (Not Implemented)",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 62,
            "name": "HarvestCritMultiplier",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritmultiplier",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "description": "{parameter1} Critical Harvest Bonus (Not Implemented)",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 74,
            "name": "RandomRuneExchangeSpecific",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchangespecific",
            "paramType1": "percent",
            "nature": "Mechanic",
            "description": "{parameter1} Chance That Random Rune Exchange Gives A Specific Rune (Not Implemented)",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 75,
            "name": "RandomRuneToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomrunetoken",
            "paramType1": "rune",
            "nature": "Mechanic",
            "description": "Random Exchange Target: {parameter1}",
            "param1": {
              "spec": "ELD-NEF",
              "min": 1,
              "max": 3,
              "map": {
                "1": "ELD",
                "2": "TIR",
                "3": "NEF"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 1060,
            "name": "DamageResist",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/damageresist",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} damage resist"
          }
        ],
        "perfection": [
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2304,
            "name": "IncreaseResist",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Resistance",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "4-7",
              "min": 4,
              "max": 7
            },
            "param2": {
              "spec": "MovementSpeed",
              "min": [
                3
              ],
              "max": [
                3
              ],
              "value": [
                3
              ],
              "map": {
                "3": [
                  "MovementSpeed"
                ]
              }
            }
          },
          {
            "id": 2303,
            "name": "EnergyRegen",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/energyregen",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "paramValue2": "0-60",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Energy Regeneration",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Charge",
              "min": [
                471
              ],
              "max": [
                471
              ],
              "value": [
                471
              ],
              "map": {
                "471": [
                  "Charge"
                ]
              }
            }
          },
          {
            "id": 1158,
            "name": "WinStreakMagicFindIncrease",
            "isEnabled": true,
            "game": "Evolution",
            "nexusLink": "https://nexus.rune.game/item-attribute/winstreakmagicfindincrease",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 56,
    "name": "Flare",
    "icon": "https://rune.game/images/items/00056.png",
    "image": "https://dl.airtable.com/.attachments/264b7064c7c2a7d51c55a5eb098f855c/10aa6323/image.png?ts=1657468625&userId=usrf0GZYc5zCl9Cv7&cs=c95bfdbb782a78b5",
    "value": "0",
    "type": 8,
    "subType": 16,
    "specificType": 181,
    "slots": [
      6
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1440,
    "attributes": [],
    "details": {
      "Type": "Leg Armor",
      "Subtype": "Sol Battlemage Leggings"
    },
    "recipe": {
      "requirement": []
    },
    "description": "A vibrant red skirt and leggings worn by advanced wielders of Kona in the league of Sol, matching their religious depictions of Relia and her closest followers. Compliments the use of fire-based magics.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-10",
              "min": 1,
              "max": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 63,
            "name": "HarvestOverTime",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestovertime",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "Add {parameter1} To Harvest, Vested Over Time (Not Implemented)",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 73,
            "name": "HarvestTheftDefense",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
            "param1": {
              "spec": "2-2",
              "min": 2,
              "max": 2,
              "value": 2
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "1-10",
              "min": 1,
              "max": 10
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "6-10",
              "min": 6,
              "max": 10
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Fire Wall",
              "min": [
                448
              ],
              "max": [
                448
              ],
              "value": [
                448
              ],
              "map": {
                "448": [
                  "Fire Wall"
                ]
              }
            }
          },
          {
            "id": 2014,
            "name": "IncreaseAilmentChance",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseailmentchance",
            "paramType1": "percent",
            "paramType2": "ailment",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} chance to apply {parameter2}",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            },
            "param2": {
              "spec": "Fire",
              "min": null,
              "max": null
            }
          },
          {
            "id": 3806,
            "name": "IncreaseMaxSkillCharges",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasemaxskillcharges",
            "paramType1": "value",
            "paramType2": "skill",
            "paramValue1": "0-10",
            "nature": "Buff",
            "influences": "Skill",
            "description": "{parameter1} additional charges for {parameter 2} skill(s)",
            "param1": {
              "spec": "1-1",
              "min": 1,
              "max": 1,
              "value": 1
            },
            "param2": {
              "spec": "Fire",
              "map": {}
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "3-6",
              "min": 3,
              "max": 6
            },
            "param2": {
              "spec": "EnergyRegen",
              "min": [
                1
              ],
              "max": [
                1
              ],
              "value": [
                1
              ],
              "map": {
                "1": [
                  "EnergyRegen"
                ]
              }
            }
          },
          {
            "id": 2304,
            "name": "IncreaseResist",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Resistance",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            },
            "param2": {
              "spec": "Fire",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Fire"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 109,
    "name": "Voidmaw",
    "icon": "https://rune.game/images/items/00109.png",
    "image": "https://dl.airtable.com/.attachments/d868f6955899d37816e85b87461ec9f7/85bc92ae/necklace_A_24.png?ts=1657468626&userId=usrf0GZYc5zCl9Cv7&cs=15a4e7e6f95b4ec2",
    "value": "0",
    "type": 13,
    "subType": 17,
    "specificType": 151,
    "slots": [
      5
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 275,
    "attributes": [],
    "details": {
      "Type": "Amulet",
      "Subtype": "Entropic Amulet"
    },
    "recipe": {
      "requirement": []
    },
    "description": "As though a piece of the abyss was seized and chained in physical form, this amulet consumes all light that falls upon it.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            }
          }
        ],
        "perfection": [
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2317,
            "name": "MagicDamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicdamagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} magic damage reduction",
            "param1": {
              "spec": "5-7",
              "min": 5,
              "max": 7
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2307,
            "name": "IncreaseAbsorb",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseabsorb",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Absorb",
            "param1": {
              "spec": "3-4",
              "min": 3,
              "max": 4
            },
            "param2": {
              "spec": "Magic",
              "map": {}
            }
          },
          {
            "id": 3205,
            "name": "ChanceOnGetHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/chanceongethit",
            "paramType1": "percent",
            "paramType2": "skill",
            "paramValue1": "0-100",
            "paramValue2": "400-1000",
            "nature": "Buff",
            "description": "{parameter1} {parameter2} chance when hit",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            },
            "param2": {
              "spec": "Block Sorcery",
              "min": 497,
              "max": 497,
              "value": 497,
              "map": {
                "497": "Block Sorcery"
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Gluttony",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 2900,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramType2": "rewardtype",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} {parameter2} Rewards on Win",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "Runes",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 110,
    "name": "Hoarfrost",
    "icon": "https://rune.game/images/items/00110.png",
    "image": "https://dl.airtable.com/.attachments/c0bff0357bb978db04c87af54f5b1225/dec09771/ring_A_11.png?ts=1657468626&userId=usrf0GZYc5zCl9Cv7&cs=bdcd78740131f929",
    "value": "0",
    "type": 12,
    "subType": 14,
    "specificType": 47,
    "slots": [
      13,
      16,
      14
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 4356,
    "attributes": [],
    "details": {
      "Type": "Ring",
      "Subtype": "Chillmetal Ring"
    },
    "recipe": {
      "requirement": []
    },
    "description": "As if it were an open door to a realm where cold reigns absolute, the sphere ",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 47,
            "name": "ReduceBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Reduced Burn",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 73,
            "name": "HarvestTheftDefense",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      452,
      514
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 111,
    "name": "Verdant",
    "icon": "https://rune.game/images/items/00111.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 112,
    "name": "Animus",
    "icon": "https://rune.game/images/items/00112.png",
    "image": "https://dl.airtable.com/.attachments/f33b5cb45e09563bb4c908d69da45096/28d33b85/00112.png?ts=1657468628&userId=usrf0GZYc5zCl9Cv7&cs=9b5e13c61392c4f4",
    "value": "0",
    "type": 12,
    "subType": 14,
    "specificType": 156,
    "slots": [
      13,
      16,
      14
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2475,
    "attributes": [],
    "details": {
      "Type": "Ring",
      "Subtype": "Overwrought Iron Ring",
      "Rune Word": "Pul Ith Mal Um Zod"
    },
    "recipe": {
      "requirement": [
        {
          "id": 21,
          "quantity": 1
        },
        {
          "id": 6,
          "quantity": 1
        },
        {
          "id": 23,
          "quantity": 1
        },
        {
          "id": 22,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        }
      ]
    },
    "description": "Forged by an ancient barbarian shaman, this  abrasive metal ring imbues its wearer with boundless aggression in battle, making them heedless of danger or pain.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 69,
            "name": "RandomRuneBonus",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomrunebonus",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "description": "{parameter1} Bonus Yield Given as a Random Rune (Not Implemented)",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "NEF-ITH",
              "min": 3,
              "max": 5,
              "map": {
                "3": "NEF",
                "4": "ETH",
                "5": "ITH"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "0-4",
              "min": 0,
              "max": 4
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            },
            "param2": {
              "spec": "EnergyRegen",
              "min": [
                1
              ],
              "max": [
                1
              ],
              "value": [
                1
              ],
              "map": {
                "1": [
                  "EnergyRegen"
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "AttackSpeed",
              "min": null,
              "max": null
            },
            "param2": {
              "spec": "1-5",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Berserker Soul",
              "min": [
                511
              ],
              "max": [
                511
              ],
              "value": [
                511
              ],
              "map": {
                "511": [
                  "Berserker Soul"
                ]
              }
            }
          },
          {
            "id": 2903,
            "name": "IncreaseRankRewardBonus",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Increase to Rank Reward Bonuses",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 2319,
            "name": "IncreaseDamageTaken",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamagetaken",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Debuff",
            "influences": "Defense",
            "description": "{parameter1} additional damage taken ({parameter2})",
            "param1": {
              "spec": "5-0",
              "min": 5,
              "max": 0
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      511
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 116,
    "name": "Doom",
    "icon": "https://rune.game/images/items/00116.png",
    "value": "0",
    "specificType": 49,
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Subtype": "Devilmaw Greataxe"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 124,
    "name": "Cleave",
    "icon": "https://rune.game/images/items/00124.png",
    "value": "0",
    "specificType": 50,
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Subtype": "Skullsplitter Greataxe"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 130,
    "name": "Breath of the Dying",
    "icon": "https://rune.game/images/items/00130.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 132,
    "name": "Seal of the {Guild Name}",
    "icon": "https://rune.game/images/items/00132.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 133,
    "name": "Guild Officer's Insignia",
    "icon": "https://rune.game/images/items/00133.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 134,
    "name": "Guild General's Insignia",
    "icon": "https://rune.game/images/items/00134.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 135,
    "name": "Salt Charm",
    "icon": "https://rune.game/images/items/00135.png",
    "value": "0",
    "specificType": 54,
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Subtype": "Salt Charm"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 138,
    "name": "Triumph",
    "icon": "https://rune.game/images/items/00138.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 182,
    "name": "Exile",
    "icon": "https://rune.game/images/items/00182.png",
    "value": "0",
    "type": 1,
    "subType": 1,
    "specificType": 104,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 5292,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "Thirsting Edge",
      "Rune Word": "Mal Um Zod Ist El"
    },
    "recipe": {
      "requirement": [
        {
          "id": 23,
          "quantity": 1
        },
        {
          "id": 22,
          "quantity": 1
        },
        {
          "id": 33,
          "quantity": 1
        },
        {
          "id": 24,
          "quantity": 1
        },
        {
          "id": 1,
          "quantity": 1
        }
      ]
    },
    "description": "This chaos-imbued blade thirsts for life to such an extent that even the wielder's is consumed once it is drawn.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "10-30",
              "min": 10,
              "max": 30
            }
          },
          {
            "id": 69,
            "name": "RandomRuneBonus",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomrunebonus",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Buff",
            "description": "{parameter1} Bonus Yield Given as a Random Rune (Not Implemented)",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-20",
              "min": 0,
              "max": 20
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "TAL-ORT",
              "min": 6,
              "max": 8,
              "map": {
                "6": "TAL",
                "7": "RAL",
                "8": "ORT"
              }
            }
          },
          {
            "id": 5,
            "name": "BurnEntireHarvest",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Chance To Burn Harvest",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Sating Rend",
              "min": 537,
              "max": 537,
              "value": 537,
              "map": {
                "537": "Sating Rend"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "24-36",
              "min": 24,
              "max": 36
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 3213,
            "name": "SelfEffectOnCondition",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/selfeffectoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "effect",
            "param1": {
              "spec": "SkillTypeUsed",
              "min": 23,
              "max": 23,
              "value": 23,
              "map": {
                "23": "SkillTypeUsed"
              }
            },
            "param2": {
              "spec": "Attack",
              "min": null,
              "max": null,
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      null
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 209,
    "name": "Icebrand",
    "icon": "https://rune.game/images/items/00209.png",
    "image": "https://dl.airtable.com/.attachments/9f3125cf2dd7e4a607e535c0f91adf61/ecd2c622/icebrand.png?ts=1657468634&userId=usrf0GZYc5zCl9Cv7&cs=e6668ff5eb2f8a33",
    "value": "0",
    "type": 1,
    "subType": 1,
    "specificType": 152,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 880,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "Coldforge Blade"
    },
    "recipe": {
      "requirement": []
    },
    "description": "The translucent material that comprises this blade shimmers like ice when exposed to the light. When drawn, the blade seems to scour the heat out of the surrounding air.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "15-30",
              "min": 15,
              "max": 30
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "15-15",
              "min": 15,
              "max": 15,
              "value": 15
            }
          },
          {
            "id": 145,
            "name": "RaidPending6",
            "isEnabled": false,
            "nexusLink": "https://nexus.rune.game/item-attribute/raidpending6",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "AMN-SHAEL",
              "min": 10,
              "max": 12,
              "map": {
                "10": "AMN",
                "11": "SOL",
                "12": "SHAEL"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Hidden Skill 7",
              "min": 32,
              "max": 32,
              "value": 32,
              "map": {
                "32": "Hidden Skill 7"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "9-18",
              "min": 9,
              "max": 18
            },
            "param2": {
              "spec": "Physical\n",
              "map": {}
            }
          },
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "9-18",
              "min": 9,
              "max": 18
            },
            "param2": {
              "spec": "Cold",
              "map": {}
            }
          },
          {
            "id": 2013,
            "name": "EffectChanceOnCondition",
            "isEnabled": false,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/effectchanceoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "effect",
            "paramValue1": "0-100",
            "param1": {
              "spec": "0-5",
              "map": {}
            },
            "param2": {
              "spec": "Freeze",
              "min": null,
              "max": null,
              "map": {}
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Ice Strike",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 2006,
            "name": "IncreaseCriticalHitChance",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasecriticalhitchance",
            "paramType1": "percent",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1}  critical hit chance",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      489
    ],
    "materials": [
      24
    ],
    "category": "accessory"
  },
  {
    "id": 222,
    "name": "Capacity",
    "icon": "https://rune.game/images/items/00222.png",
    "value": "0",
    "type": 7,
    "subType": 13,
    "specificType": 150,
    "slots": [
      18
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Type": "Body Armor",
      "Subtype": "Painted Robes of Welarah"
    },
    "recipe": {
      "requirement": []
    },
    "description": "A colorful homage to the goddess of Mana. These robes improve the wearer's ability to hold and channel energy, but provide little direct protection.",
    "shortDescription": "",
    "visualDescription": "A colorful homage to the goddess of Mana. These robes improve the wearer's ability to hold and channel energy, but provide little direct protection.",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 240,
    "name": "Ecliptic",
    "icon": "https://rune.game/images/items/00240.png",
    "value": "0",
    "type": 9,
    "subType": 15,
    "specificType": 166,
    "slots": [
      9
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 495,
    "attributes": [],
    "details": {
      "Type": "Glove",
      "Subtype": "Korryn's Dexterity"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 61,
            "name": "HarvestCritChance",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "{parameter1} Increased Chance To Critically Harvest Yield (Not Implemented)",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-2",
              "min": 0,
              "max": 2
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "CriticalHitChance",
              "min": [
                2
              ],
              "max": [
                2
              ],
              "value": [
                2
              ],
              "map": {
                "2": [
                  "CriticalHitChance"
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            },
            "param2": {
              "spec": "AttackSpeed",
              "min": [
                4
              ],
              "max": [
                4
              ],
              "value": [
                4
              ],
              "map": {
                "4": [
                  "AttackSpeed"
                ]
              }
            }
          },
          {
            "id": 2903,
            "name": "IncreaseRankRewardBonus",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaserankrewardbonus",
            "paramType1": "percent",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} Increase to Rank Reward Bonuses",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Gravity Tag",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 241,
    "name": "Pulsar",
    "icon": "https://rune.game/images/items/00241.png",
    "image": "https://dl.airtable.com/.attachments/1e38c4d58d046af1197b124912fde06f/27aed29e/ArcherBow_B_256_23.png?ts=1657468636&userId=usrf0GZYc5zCl9Cv7&cs=19bf055411784871",
    "value": "0",
    "type": 2,
    "subType": 8,
    "specificType": 157,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 7986,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Korryn's Lancer"
    },
    "recipe": {
      "requirement": []
    },
    "description": "This otherworldly weapon hums with imbued Astra energy, seemingly ready to release a cascade of holy fire upon slightest provocation.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "20-30",
              "min": 20,
              "max": 30
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "40-50",
              "min": 40,
              "max": 50
            }
          },
          {
            "id": 61,
            "name": "HarvestCritChance",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestcritchance",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "{parameter1} Increased Chance To Critically Harvest Yield (Not Implemented)",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Holy Bolt",
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "Arcane",
              "min": 6,
              "max": 6,
              "value": 6,
              "map": {
                "6": "Arcane"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            },
            "param2": {
              "spec": "CriticalHitMultiplier",
              "min": [
                5
              ],
              "max": [
                5
              ],
              "value": [
                5
              ],
              "map": {
                "5": [
                  "CriticalHitMultiplier"
                ]
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Immolation Arrow, Power Shot",
              "min": [
                null,
                433
              ],
              "max": [
                null,
                433
              ],
              "value": [
                null,
                433
              ],
              "map": {
                ",433": [
                  null,
                  "Power Shot"
                ]
              }
            }
          },
          {
            "id": 3210,
            "name": "ModOnCondition",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/modoncondition",
            "paramType1": "conditions",
            "paramType2": "conditionparams",
            "paramType3": "mod",
            "param1": {
              "spec": "SkillHit",
              "map": {}
            },
            "param2": {
              "spec": "1, Gravity Tag",
              "min": 1,
              "max": 1,
              "value": 1,
              "map": {
                "1": "Attack"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      500
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 264,
    "name": "Torrent",
    "icon": "https://rune.game/images/items/00264.png",
    "value": "0",
    "type": 2,
    "subType": 22,
    "specificType": 174,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 4536,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Tidal Bands"
    },
    "recipe": {
      "requirement": []
    },
    "description": "The inscribed bands of an Archon, used to transform the energies of the wielder into a certain form. These bands bear runic symbols resembling ocean waves.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "30-50",
              "min": 30,
              "max": 50
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 66,
            "name": "HarvestTheft",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheft",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "Enable The Option To Sacrifice Up To {parameter1} of Your Harvest In Order To Steal {parameter1} of The Next Raider's Harvest From the Same Pool",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "15-20",
              "min": 15,
              "max": 20
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "PUL-GUL",
              "min": 20,
              "max": 24,
              "map": {
                "20": "PUL",
                "21": "UM",
                "22": "MAL",
                "23": "IST",
                "24": "GUL"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage"
          }
        ],
        "perfection": [
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [
      510,
      492
    ],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 303,
    "name": "Diligence",
    "icon": "https://rune.game/images/items/00303.png",
    "value": "0",
    "type": 7,
    "subType": 13,
    "specificType": 170,
    "slots": [
      18
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Type": "Body Armor",
      "Subtype": "Witchhunter's Coat"
    },
    "recipe": {
      "requirement": []
    },
    "description": "A Witchhunter's religious zeal is only matched by their fervor for the erasure of chaospawn.",
    "shortDescription": "",
    "visualDescription": "A Witchhunter's religious zeal is only matched by their fervor for the erasure of chaospawn.",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 342,
    "name": "Nexus",
    "icon": "https://rune.game/images/items/00342.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": false,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Distribution": "Crafted",
      "Date": "March 28, 2021 - Now"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 562,
    "name": "Dragonheart",
    "icon": "https://rune.game/images/items/00562.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": false,
    "isRuneword": true,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Distribution": "Airdrop",
      "Date": "September 12, 2021",
      "Max Supply": "1000"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 610,
    "name": "Mimic",
    "icon": "https://rune.game/images/items/00610.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 615,
    "name": "Miasma",
    "icon": "https://rune.game/images/items/00615.png",
    "value": "0",
    "type": 2,
    "subType": 7,
    "specificType": 167,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 4356,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Darkgrowth Staff"
    },
    "recipe": {
      "requirement": []
    },
    "description": "A foreboding, noxious aura emanates from the top of this staff, fashioned of a branch harvested from the Hexgard druids' toxic groves.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "20-30",
              "min": 20,
              "max": 30
            }
          },
          {
            "id": 7,
            "name": "FindShard",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/findshard",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Chance To Find Worldstone Shard (Per Raid)",
            "param1": {
              "spec": "30-40",
              "min": 30,
              "max": 40
            }
          },
          {
            "id": 63,
            "name": "HarvestOverTime",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestovertime",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "Add {parameter1} To Harvest, Vested Over Time (Not Implemented)",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "RAL-THUL",
              "min": 7,
              "max": 9,
              "map": {
                "7": "RAL",
                "8": "ORT",
                "9": "THUL"
              }
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Hidden Skill 6",
              "min": 31,
              "max": 31,
              "value": 31,
              "map": {
                "31": "Hidden Skill 6"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2000,
            "name": "IncreaseDamage",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamage",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} Increased {parameter2} Damage",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            },
            "param2": {
              "spec": "EnergyRegen",
              "min": [
                1
              ],
              "max": [
                1
              ],
              "value": [
                1
              ],
              "map": {
                "1": [
                  "EnergyRegen"
                ]
              }
            }
          },
          {
            "id": 2002,
            "name": "IncreaseDamageOverTime",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasedamageovertime",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-200",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1} increase to {parameter2} damage over time",
            "param1": {
              "spec": "10",
              "min": 10,
              "max": 10,
              "value": 10
            },
            "param2": {
              "spec": "Poison",
              "min": 7,
              "max": 7,
              "value": 7,
              "map": {
                "7": "Poison"
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Poison Nova, Violent Growth",
              "min": [
                501,
                442
              ],
              "max": [
                501,
                442
              ],
              "value": [
                501,
                442
              ],
              "map": {
                "501,442": [
                  "Poison Nova",
                  "Violent Growth"
                ]
              }
            }
          },
          {
            "id": 2900,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramType2": "rewardtype",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} {parameter2} Rewards on Win",
            "param1": {
              "spec": "1-15",
              "min": 1,
              "max": 15
            },
            "param2": {
              "spec": "Runes",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 616,
    "name": "Horizon",
    "icon": "https://rune.game/images/items/00616.png",
    "value": "0",
    "type": 11,
    "subType": 12,
    "specificType": 168,
    "slots": [
      12
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1760,
    "attributes": [],
    "details": {
      "Type": "Boot",
      "Subtype": "Korryn's Stride"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "1-10",
              "min": 1,
              "max": 10
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 73,
            "name": "HarvestTheftDefense",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "5-7",
              "min": 5,
              "max": 7
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            },
            "param2": {
              "spec": "MovementSpeed",
              "min": [
                3
              ],
              "max": [
                3
              ],
              "value": [
                3
              ],
              "map": {
                "3": [
                  "MovementSpeed"
                ]
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Starstride",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 2600,
            "name": "IncreaseStat",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasestat",
            "paramType1": "percent",
            "paramType2": "stat",
            "paramType3": "statparams",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "General",
            "description": "{parameter1} {parameter2} {parameter3}",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            },
            "param2": {
              "spec": "EnergyRegen",
              "min": [
                1
              ],
              "max": [
                1
              ],
              "value": [
                1
              ],
              "map": {
                "1": [
                  "EnergyRegen"
                ]
              }
            }
          },
          {
            "id": 2900,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramType2": "rewardtype",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} {parameter2} Rewards on Win",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            },
            "param2": {
              "spec": "Runes",
              "min": null,
              "max": null
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 617,
    "name": "Star",
    "icon": "https://rune.game/images/items/00617.png",
    "value": "0",
    "type": 5,
    "subType": 10,
    "specificType": 169,
    "slots": [
      3
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2376,
    "attributes": [],
    "details": {
      "Type": "Helm",
      "Subtype": "Korryn's Vision"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Like the light from a star, Korryn's vision is boundless, ensuring no minions of chaos can escape his judgment.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "5-10",
              "min": 5,
              "max": 10
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 119,
            "name": "YieldBonusFromHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusfromhiddenpool",
            "paramType1": "value",
            "nature": "Buff",
            "description": "{parameter1} Yield Bonus On Harvests From Hidden Pool",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "5-7",
              "min": 5,
              "max": 7
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2006,
            "name": "IncreaseCriticalHitChance",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increasecriticalhitchance",
            "paramType1": "percent",
            "paramValue1": "0-200",
            "nature": "Buff",
            "influences": "Offense",
            "description": "{parameter1}  critical hit chance",
            "param1": {
              "spec": "3-5",
              "min": 3,
              "max": 5
            }
          },
          {
            "id": 2302,
            "name": "IncreaseEnergy",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseenergy",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} Maximum Energy",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Gravity Wave",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 3205,
            "name": "ChanceOnGetHit",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/chanceongethit",
            "paramType1": "percent",
            "paramType2": "skill",
            "paramValue1": "0-100",
            "paramValue2": "400-1000",
            "nature": "Buff",
            "description": "{parameter1} {parameter2} chance when hit",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            },
            "param2": {
              "spec": "Gravity Wave",
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 618,
    "name": "Unity",
    "icon": "https://rune.game/images/items/00618.png",
    "value": "0",
    "type": 12,
    "subType": 14,
    "specificType": 177,
    "slots": [
      13,
      16,
      14
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Type": "Ring",
      "Subtype": "Band of Bound Souls"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 627,
    "name": "Legacy",
    "icon": "https://rune.game/images/items/00627.png",
    "value": "0",
    "type": 5,
    "subType": 10,
    "specificType": 182,
    "slots": [
      3
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 864,
    "attributes": [],
    "details": {
      "Type": "Helm",
      "Subtype": "Ancestral Pelt"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Former head of the Great Bear Sokhe, this ancestral mark of leadership imbues the wearer with the combined ferocity of Legacy's past owners.",
    "shortDescription": "",
    "visualDescription": "Despite witnessing much blood and toil, this weathered and oily bear pelt embodies a brutal regality, fitting of only the fiercest and wisest barbarian chiefs.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          },
          {
            "id": 74,
            "name": "RandomRuneExchangeSpecific",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchangespecific",
            "paramType1": "percent",
            "nature": "Mechanic",
            "description": "{parameter1} Chance That Random Rune Exchange Gives A Specific Rune (Not Implemented)",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 628,
    "name": "Pillage",
    "icon": "https://rune.game/images/items/00628.png",
    "value": "0",
    "type": 1,
    "subType": 42,
    "specificType": 183,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 6912,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "Behemoth Grappler"
    },
    "recipe": {
      "requirement": []
    },
    "description": "One of the most brutal barbarian tools, this teeth studded, disembodied claw was devised to lock down even the slipperiest of opponents.",
    "shortDescription": "",
    "visualDescription": "Numerous razor-sharp teeth are embedded into a bloodied claw of unknown origin, affixed to a long, wrought iron chain. The savage appearance of this grappling weapon is only surpassed by the cruel fate that awaits those caught in Pillage's grasp.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "15-30",
              "min": 15,
              "max": 30
            }
          },
          {
            "id": 5,
            "name": "BurnEntireHarvest",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/burnentireharvest",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Chance To Burn Harvest",
            "param1": {
              "spec": "0-1",
              "min": 0,
              "max": 1
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "5-5",
              "min": 5,
              "max": 5,
              "value": 5
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 66,
            "name": "HarvestTheft",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheft",
            "paramType1": "percent",
            "paramValue1": "0-10",
            "nature": "Mechanic",
            "description": "Enable The Option To Sacrifice Up To {parameter1} of Your Harvest In Order To Steal {parameter1} of The Next Raider's Harvest From the Same Pool",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 629,
    "name": "Bloodline",
    "icon": "https://rune.game/images/items/00629.png",
    "value": "0",
    "type": 7,
    "subType": 13,
    "specificType": 184,
    "slots": [
      18
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2376,
    "attributes": [],
    "details": {
      "Type": "Body Armor",
      "Subtype": "Ancestral Warpaints"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Used to both intimidate enemies and signify allegiance, elder barbarians use these energy-infused warpaints to spark a trance-like rage.",
    "shortDescription": "",
    "visualDescription": "Though pigments of all types are used in this sacred pre-battle tradition, the most common warpaint among the Tribe of Carnage is fashioned with the blood of fallen enemies.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 74,
            "name": "RandomRuneExchangeSpecific",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchangespecific",
            "paramType1": "percent",
            "nature": "Mechanic",
            "description": "{parameter1} Chance That Random Rune Exchange Gives A Specific Rune (Not Implemented)",
            "param1": {
              "spec": "5-15",
              "min": 5,
              "max": 15
            }
          },
          {
            "id": 75,
            "name": "RandomRuneToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomrunetoken",
            "paramType1": "rune",
            "nature": "Mechanic",
            "description": "Random Exchange Target: {parameter1}",
            "param1": {
              "spec": "AMN-LO",
              "min": 10,
              "max": 27,
              "map": {
                "10": "AMN",
                "11": "SOL",
                "12": "SHAEL",
                "13": "DOL",
                "14": "HEL",
                "15": "IO",
                "16": "LUM",
                "17": "KO",
                "18": "FAL",
                "19": "LEM",
                "20": "PUL",
                "21": "UM",
                "22": "MAL",
                "23": "IST",
                "24": "GUL",
                "25": "VEX",
                "26": "OHM",
                "27": "LO"
              }
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 39,
            "name": "AddSkill",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/addskill",
            "paramType1": "skill",
            "paramValue1": "0-999",
            "nature": "Requirement",
            "description": "Use Skill: {parameter1} (SOON)",
            "param1": {
              "spec": "Ancestral Bond",
              "map": {}
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 2316,
            "name": "DamageReduce",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/damagereduce",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Damage Reduction",
            "param1": {
              "spec": "15-20",
              "min": 15,
              "max": 20
            },
            "param2": {
              "spec": "All",
              "min": 109,
              "max": 109,
              "value": 109,
              "map": {
                "109": "All"
              }
            }
          },
          {
            "id": 2304,
            "name": "IncreaseResist",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/increaseresist",
            "paramType1": "percent",
            "paramType2": "type",
            "paramValue1": "0-100",
            "paramValue2": "0-120",
            "nature": "Buff",
            "influences": "Defense",
            "description": "{parameter1} {parameter2} Resistance",
            "param1": {
              "spec": "5",
              "min": 5,
              "max": 5,
              "value": 5
            },
            "param2": {
              "spec": "Physical",
              "min": 9,
              "max": 9,
              "value": 9,
              "map": {
                "9": "Physical"
              }
            }
          },
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Flurry",
              "min": [
                401
              ],
              "max": [
                401
              ],
              "value": [
                401
              ],
              "map": {
                "401": [
                  "Flurry"
                ]
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 630,
    "name": "Frenzy",
    "icon": "https://rune.game/images/items/00630.png",
    "value": "0",
    "type": 8,
    "subType": 16,
    "specificType": 185,
    "slots": [
      6
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2970,
    "attributes": [],
    "details": {
      "Type": "Leg Armor",
      "Subtype": "Behemoth Hide Trousers"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Crafted from tanned behemoth hide and enchanted with ancient primal magic, these hide leggings allow the wearer's footfalls to shake the earth like a mighty behemoth.",
    "shortDescription": "",
    "visualDescription": "Composed of various tanned leathers and resilient cloths, these behemoth hide trousers show the evident wear and tear of many mighty generations.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "0-10",
              "min": 0,
              "max": 10
            }
          },
          {
            "id": 11,
            "name": "RandomRuneExchange",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/randomruneexchange",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Random Rune Exchange",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 13,
            "name": "MagicFind",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/magicfind",
            "paramType1": "percent",
            "paramValue1": "0-999",
            "nature": "Buff",
            "description": "{parameter1} Magic Find",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 73,
            "name": "HarvestTheftDefense",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
            "param1": {
              "spec": "2-4",
              "min": 2,
              "max": 4
            }
          },
          {
            "id": 6,
            "name": "HarvestBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Burn",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 631,
    "name": "Shroud",
    "icon": "https://rune.game/images/items/00631.png",
    "value": "0",
    "subType": 43,
    "specificType": 186,
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Subtype": "Chameleon Cloak"
    },
    "recipe": {
      "requirement": []
    },
    "description": "This leaf-adorned cloak is both stunning to behold and practical for making oneself invisible in the dense forests of Fayhelm.",
    "shortDescription": "",
    "visualDescription": "Made by esteemed elven weavers, the soft fabric of this cloak is interwoven with magically-preserved leaves. As the seasons change, so too do the color of the leaves: from deep emerald in the summer to gold and red in the autumn. While beautiful, it also remains purely practical; allowing elven hunters to conceal themselves year-round in the ever-changing woodland.",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 632,
    "name": "Conclave",
    "icon": "https://rune.game/images/items/00632.png",
    "value": "0",
    "type": 7,
    "subType": 13,
    "specificType": 187,
    "slots": [
      18
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 792,
    "attributes": [],
    "details": {
      "Type": "Body Armor",
      "Subtype": "Warden Garb"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Adorned with the sigil of a Warden commander, this prestigious ranger garb gifts its wearer the dexterity of a galewind.",
    "shortDescription": "",
    "visualDescription": "Created by the finest smiths and tailors in Irondell, this light and tactile armor bears the high-quality elements of both human and elven craftsmanship. Imbued with dyes found in Fayhelm and embellished with the Warden's silvery symbol, this garb was finally enchanted with druidic wind magic.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "10-15",
              "min": 10,
              "max": 15
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          },
          {
            "id": 119,
            "name": "YieldBonusFromHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusfromhiddenpool",
            "paramType1": "value",
            "nature": "Buff",
            "description": "{parameter1} Yield Bonus On Harvests From Hidden Pool",
            "param1": {
              "spec": "2-5",
              "min": 2,
              "max": 5
            }
          },
          {
            "id": 73,
            "name": "HarvestTheftDefense",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 633,
    "name": "Celerity",
    "icon": "https://rune.game/images/items/00633.png",
    "value": "0",
    "type": 9,
    "subType": 15,
    "specificType": 188,
    "slots": [
      9
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1350,
    "attributes": [],
    "details": {
      "Type": "Glove",
      "Subtype": "Basilisk Gauntlets"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Forged from the scales of a fallen basilisk, these gauntlets allow the wearer to strike with the petrifying venom of the legendary reptile.",
    "shortDescription": "",
    "visualDescription": "Though these basilisk scale gauntlets glitter a brilliant emerald green in direct sunlight, they are virtually invisible in the shade of the Fayhelm forests. Expertly replated as ranger gloves, these gauntlets provide both excellent offensive and defensive capabilities.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "1-15",
              "min": 1,
              "max": 15
            }
          },
          {
            "id": 118,
            "name": "YieldBonusToHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonustohiddenpool",
            "paramType1": "value",
            "nature": "Buff",
            "description": "{parameter1} yield bonus on harvests to hidden pool",
            "param1": {
              "spec": "1-5",
              "min": 1,
              "max": 5
            }
          },
          {
            "id": 73,
            "name": "HarvestTheftDefense",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvesttheftdefense",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} chance to defend harvest theft, taking the thief's runes instead",
            "param1": {
              "spec": "1-3",
              "min": 1,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 634,
    "name": "Slipstream",
    "icon": "https://rune.game/images/items/00634.png",
    "value": "0",
    "type": 2,
    "subType": 8,
    "specificType": 189,
    "slots": [
      1
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 2976,
    "attributes": [],
    "details": {
      "Type": "Two-Handed Weapon",
      "Subtype": "Dryad Bow"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Arrows shot from this elegant dryad bow are said to visibly cut the air as they fly, creating rippling airwaves in their wake.",
    "shortDescription": "",
    "visualDescription": "Gifted to the Wardens of Irondell by a dryad ally, this elegant wooden bow is one of the finest crafted in Haerra. Blessed with ancient fey magic lost to humanoids, Slipstream is virtually weightless and only requires the faintest effort to draw.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield",
            "param1": {
              "spec": "10-40",
              "min": 10,
              "max": 40
            }
          },
          {
            "id": 4,
            "name": "SendHarvestHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/sendharvesthiddenpool",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Mechanic",
            "description": "{parameter1} Chance To Send Harvest To Hidden Pool",
            "param1": {
              "spec": "30-45",
              "min": 30,
              "max": 45
            }
          },
          {
            "id": 119,
            "name": "YieldBonusFromHiddenPool",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/yieldbonusfromhiddenpool",
            "paramType1": "value",
            "nature": "Buff",
            "description": "{parameter1} Yield Bonus On Harvests From Hidden Pool",
            "param1": {
              "spec": "20-25",
              "min": 20,
              "max": 25
            }
          },
          {
            "id": 2,
            "name": "HarvestFee",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfee",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Debuff",
            "description": "{parameter1} Harvest Fee",
            "param1": {
              "spec": "20",
              "min": 20,
              "max": 20,
              "value": 20
            }
          },
          {
            "id": 3,
            "name": "HarvestFeeToken",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestfeetoken",
            "paramType1": "tokenId",
            "paramValue1": "0-999",
            "nature": "Mechanic",
            "description": "Harvest Fee Token: {parameter1}",
            "param1": {
              "spec": "MAL-GUL",
              "min": 22,
              "max": 24,
              "map": {
                "22": "MAL",
                "23": "IST",
                "24": "GUL"
              }
            }
          }
        ],
        "perfection": [
          null,
          null,
          null,
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 635,
    "name": "Myriad",
    "icon": "https://rune.game/images/items/00635.png",
    "value": "0",
    "subType": 44,
    "specificType": 190,
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Subtype": "Dryad Quiver"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Sister to the legendary bow Slipstream, this elegant wooden quiver enchants the arrows stored within: providing both true striking and incineration capabilities.",
    "shortDescription": "",
    "visualDescription": "Sharing both wood-carved sophistication and magical weightlessness with her sister bow Slipstream, Myriad is the envy of all archers. In addition to enchanting stored arrows, this quiver also prevents arrows from falling out during the wearer's acrobatic feats; only releasing if the owner draws from quiver directly.",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 637,
    "name": "Void",
    "icon": "https://rune.game/images/items/00637.png",
    "value": "0",
    "type": 5,
    "subType": 10,
    "specificType": 191,
    "slots": [
      3
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Type": "Helm",
      "Subtype": "Craven Cowl"
    },
    "recipe": {
      "requirement": []
    },
    "description": "\"Tell me: when you gaze into the empty eyes of a Craven, can you be certain it's a _thing _that gazes back?\"",
    "shortDescription": "",
    "visualDescription": "Brutally forged from hallowed brass, the Void mask embodies the depravity of the Cravens. When adorned alongside the energy-nullifying hat, this headgear serves as a sinister omen to passersby.",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 638,
    "name": "Lawmaker",
    "icon": "https://rune.game/images/items/00638.png",
    "value": "0",
    "type": 7,
    "subType": 13,
    "specificType": 192,
    "slots": [
      18
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 11,
    "attributes": [],
    "details": {
      "Type": "Body Armor",
      "Subtype": "Craven Coat"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Proudly displaying the tickets of victorious Craven hunts, this Craven coat is a symbol of order in the lawless lands of Woto Shonok. ",
    "shortDescription": "",
    "visualDescription": "Crammed with all manner of tinctures, scrolls, weapons, poisons, staves, nomicons, and many other hidden tools; Lawmaker exudes the preparedness and competence of a Craven hunter.",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 8,
            "name": "RemoveFees",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/removefees",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "Remove {parameter1} Fees",
            "param1": {
              "spec": "10-20",
              "min": 10,
              "max": 20
            }
          }
        ],
        "perfection": [
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 639,
    "name": "Flay",
    "icon": "https://rune.game/images/items/00639.png",
    "value": "0",
    "type": 1,
    "subType": 45,
    "specificType": 193,
    "slots": [
      1,
      2
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Type": "One-Handed Weapon",
      "Subtype": "Craven Piercer"
    },
    "recipe": {
      "requirement": []
    },
    "description": "The Craven's precision-weapon of choice, this legendary crossbow has witnessed the death and suffering of both men and monsters.",
    "shortDescription": "",
    "visualDescription": "Fashioned from rusted metal and polished silver, Flay marries the harsh ruggedness of a Craven with the precision of their craft. The crow-feathered bolts shot from this crossbow are fitted with all types of heads: from razor-sharp splitting heads to viciously-serrated shredding heads.",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 640,
    "name": "Lawbreaker",
    "icon": "https://rune.game/images/items/00640.png",
    "value": "0",
    "type": 11,
    "subType": 12,
    "specificType": 194,
    "slots": [
      12
    ],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Type": "Boot",
      "Subtype": "Craven Boots"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Used in close-quarters combat, the metallic spikes fitted to Lawbreaker's boot-ends are great for splitting kneecaps in a pinch.",
    "shortDescription": "",
    "visualDescription": "Crudely beautiful and viciously practical, the tips of these intimidating boots are fitted with silver staves. Made from sturdy hide and equipped with multi-purpose straps and pouches, these Craven boots often contain several knives hidden from view.",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 1000,
    "name": "Guild Token",
    "icon": "https://rune.game/images/items/01000.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 1001,
    "name": "Guild Scroll",
    "icon": "https://rune.game/images/items/01001.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {},
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 1100,
    "name": "Scroll of Reset",
    "icon": "https://rune.game/images/items/01100.png",
    "value": "0",
    "type": 15,
    "subType": 40,
    "specificType": 55,
    "slots": [],
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Type": "Consumable",
      "Subtype": "Scroll"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 58,
            "name": "ResetSockets",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/resetsockets",
            "paramType1": "value",
            "paramValue1": "100-100",
            "nature": "Buff",
            "description": "Resets Sockets"
          }
        ],
        "perfection": [
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 58,
            "name": "ResetSockets",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/resetsockets",
            "paramType1": "value",
            "paramValue1": "100-100",
            "nature": "Buff",
            "description": "Resets Sockets"
          }
        ],
        "perfection": [
          null
        ]
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 1200,
    "name": "Scholar's Codex",
    "icon": "https://rune.game/images/items/01200.png",
    "image": "https://dl.airtable.com/.attachments/6c1c3d34f9e888e2a598a1c589c70c71/aa69080a/01200.png?ts=1657468653&userId=usrf0GZYc5zCl9Cv7&cs=3ddaa0af13e387b1",
    "value": "0",
    "specificType": 58,
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Subtype": "Trinket",
      "Distribution": "Reward",
      "Date": "June 12, 2021 - June 12, 2021",
      "Max Supply": "Mythic: 2, Epic: 4, Rare: 10, Magical: 20"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Rewarded to Rune Scholars for their noble service.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}"
          },
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield"
          }
        ],
        "perfection": [
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}"
          },
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield"
          }
        ],
        "perfection": [
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}"
          },
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield"
          }
        ],
        "perfection": [
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 1201,
    "name": "General's Medallion",
    "icon": "https://rune.game/images/items/01201.png",
    "image": "https://dl.airtable.com/.attachments/0bf8fad8be2a36247308e7d3ac37821b/4a41bfa0/01201.png?ts=1657468654&userId=usrf0GZYc5zCl9Cv7&cs=f53ed2c7ca5bdbf7",
    "value": "0",
    "specificType": 58,
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Subtype": "Trinket",
      "Max Supply": "Mythic: 5, Epic: 10, Rare: 20, Magical: 30"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Rewarded to Rune Generals for their valiant service.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}"
          },
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield"
          }
        ],
        "perfection": [
          null,
          null
        ]
      },
      "2": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}"
          },
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield"
          }
        ],
        "perfection": [
          null,
          null
        ]
      },
      "3": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}"
          },
          {
            "id": 1,
            "name": "HarvestYield",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/harvestyield",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Increased Harvest Yield"
          }
        ],
        "perfection": [
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 1202,
    "name": "Crafting Competition Winner",
    "icon": "https://rune.game/images/items/01202.png",
    "image": "https://dl.airtable.com/.attachments/5c87c5ade082437af456133529e895fa/2215384d/01202.png?ts=1657468654&userId=usrf0GZYc5zCl9Cv7&cs=82f521a82da4431f",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Distribution": "Reward",
      "Date": "June 12, 2021 - Now",
      "Max Supply": "Unknown"
    },
    "recipe": {
      "requirement": []
    },
    "description": "Given as a token of excellence in crafting.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 1203,
    "name": "Seed of Rebirth",
    "icon": "https://rune.game/images/items/01203.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Date": "June 12, 2021 - June 12, 2021",
      "Max Supply": "Mythic: 1, Epic: 5, Rare: 20, Magical: 50"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 1204,
    "name": "Spire Seed",
    "icon": "https://rune.game/images/items/01204.png",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": false,
    "isTransferable": false,
    "isUpgradable": false,
    "isPublishable": false,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Date": "June 12, 2021 - June 12, 2021",
      "Max Supply": "Mythic: 1, Epic: 5, Rare: 20, Magical: 50"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 1205,
    "name": "Founder's Cube",
    "icon": "https://rune.game/images/items/01205.png",
    "image": "https://dl.airtable.com/.attachments/c5d9253c088ac3f19a25dac871228e03/6d5cad59/01205.png?ts=1657468655&userId=usrf0GZYc5zCl9Cv7&cs=e6c48a03d2206330",
    "value": "0",
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": false,
    "isUnequipable": false,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": false,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 1,
    "attributes": [],
    "details": {
      "Distribution": "Fundraiser",
      "Date": "September 12, 2021 - TBD",
      "Max Supply": "1000"
    },
    "recipe": {
      "requirement": []
    },
    "description": "",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [],
        "perfection": []
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [],
        "perfection": []
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  },
  {
    "id": 1207,
    "name": "Black Drake Scale",
    "icon": "https://rune.game/images/items/01207.png",
    "image": "https://dl.airtable.com/.attachments/31aa2ffe51756c646155900059e04d1e/f3d08805/01207.png?ts=1657468655&userId=usrf0GZYc5zCl9Cv7&cs=d4038354bc93152a",
    "value": "0",
    "specificType": 195,
    "isNew": false,
    "isSecret": false,
    "isUltraSecret": false,
    "isPaused": false,
    "isRetired": false,
    "isDisabled": false,
    "isCraftable": false,
    "isEnabled": true,
    "isEquipable": true,
    "isUnequipable": true,
    "isTradeable": true,
    "isTransferable": true,
    "isUpgradable": true,
    "isPublishable": true,
    "isRuneword": false,
    "createdDate": 0,
    "hotness": 0,
    "numPerfectionRolls": 24,
    "attributes": [],
    "details": {
      "Subtype": "Dragon Scale",
      "Distribution": "Evolution Battles",
      "Date": "September 12, 2021 - TBD"
    },
    "recipe": {
      "requirement": []
    },
    "description": "A rigid, fire resistant plate that once protected the body of a mature black drake. The circumstances of the drake's death have left this scale and its defensive properties well preserved- an uncommon occurrence.",
    "shortDescription": "",
    "visualDescription": "",
    "branches": {
      "1": {
        "attributes": [
          {
            "id": 40,
            "name": "Rarity",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/rarity",
            "paramType1": "value",
            "paramValue1": "0-999",
            "nature": "Neutral",
            "description": "{parameter1}",
            "param1": {
              "spec": "1-6",
              "min": 1,
              "max": 6,
              "map": {
                "1": "Legendary",
                "2": "Unique",
                "3": "Mythic",
                "4": "Epic",
                "5": "Rare",
                "6": "Magical"
              }
            }
          },
          {
            "id": 47,
            "name": "ReduceBurn",
            "isEnabled": true,
            "game": "Raid",
            "nexusLink": "https://nexus.rune.game/item-attribute/reduceburn",
            "paramType1": "percent",
            "paramValue1": "0-100",
            "nature": "Buff",
            "description": "{parameter1} Reduced Burn",
            "param1": {
              "spec": "0-3",
              "min": 0,
              "max": 3
            }
          }
        ],
        "perfection": [
          null,
          null
        ]
      },
      "2": {
        "attributes": [],
        "perfection": []
      },
      "3": {
        "attributes": [
          {
            "id": 3801,
            "name": "UnlockSkills",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/unlockskills",
            "paramType1": "skills",
            "nature": "Mechanic",
            "influences": "Skill",
            "description": "{parameter1} unlocked",
            "param1": {
              "spec": "Drakeskin Blessing",
              "min": [
                null
              ],
              "max": [
                null
              ],
              "value": [
                null
              ],
              "map": {
                "": [
                  null
                ]
              }
            }
          },
          {
            "id": 2900,
            "name": "WinRewardsIncrease",
            "isEnabled": true,
            "game": "Infinite",
            "nexusLink": "https://nexus.rune.game/item-attribute/winrewardsincrease",
            "paramType1": "percent",
            "paramType2": "rewardtype",
            "paramValue1": "0-20",
            "nature": "Buff",
            "influences": "Reward",
            "description": "{parameter1} {parameter2} Rewards on Win",
            "param1": {
              "spec": "0-5",
              "min": 0,
              "max": 5
            }
          }
        ],
        "perfection": [
          null,
          null
        ]
      },
      "4": {
        "attributes": [],
        "perfection": []
      },
      "5": {
        "attributes": [],
        "perfection": []
      }
    },
    "skills": [],
    "materials": [],
    "category": "accessory"
  }
]