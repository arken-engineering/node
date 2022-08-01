import loki from 'lokijs'
import IncrementalIndexedDBAdapter from 'lokijs/src/incremental-indexeddb-adapter'
import { itemData, ItemAttributes, ItemAttributesById, ItemType, ItemRarity, ItemRarityNameById } from '../data/items'
import { ItemsMainCategoriesType } from '../data/items.type'

const average = (arr: any) => arr.reduce((p: any, c: any) => p + c, 0) / arr.length

const useLocalStorage = false
const useIndexedDb = false
const useLoki = true

let tokenCache = {}

const dbCon = new loki('rune.db', {
  adapter: typeof window !== 'undefined' ? new IncrementalIndexedDBAdapter() : new (require('lokijs/src/loki-fs-structured-adapter'))(), // typeof indexedDB !== 'undefined'
  autoload: true,
  autoloadCallback : databaseInitialize,
  autosave: true, 
  autosaveInterval: 4000
})

const db = {
  config: undefined,
  items: undefined
}

function databaseInitialize() {
  db.config = dbCon.getCollection('config')
  db.items = dbCon.getCollection('items')

  const cacheBreaker = 1658821631 * 1000
  const updatedAt = db.items?.data?.[0]?.meta?.created
  if (!updatedAt || updatedAt < cacheBreaker) {
    if (dbCon.getCollection('items')) {
      dbCon.getCollection('items').chain().remove()
    }
  }

  if (db.config === null) {
    db.config = dbCon.addCollection('config', {
      // clone: true,
      unique: 'key'
    })

    db.config.insert({
      key: 'updatedAt',
      value: cacheBreaker
    })
  }

  db.config.find({
    key: 'updatedAt'
  }).value = cacheBreaker

  if (db.items === null) {
    // Add a collection to the database
    db.items = dbCon.addCollection('items', {
      // clone: true,
      unique: 'tokenId'
    })
  }
}


export function getTokenCache() {
  // if (useLoki) {
  //   var db = new loki('rune.db')

  //   // Add a collection to the database
  //   var items = db.addCollection('items')
  // }

  // if (useIndexedDb) {
  //   // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
  //   // @ts-ignore
  //   var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

  //   // Open (or create) the database
  //   var open = indexedDB.open("RuneItems", 1);

  //   // Create the schema
  //   open.onupgradeneeded = function() {
  //     var db = open.result;
  //     var store = db.createObjectStore("TokenData", {keyPath: "tokenId"});
  //     // var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
  //   };

  //   open.onsuccess = function() {
  //     // Start a new transaction
  //     var db = open.result;
  //     var tx = db.transaction("TokenData", "readwrite");
  //     var store = tx.objectStore("TokenData");
  //     var index = store.index("NameIndex");

  //     // Query the data
  //     var getJohn = store.get(12345);
  //     // var getBob = index.get(["Smith", "Bob"]);

  //     getJohn.onsuccess = function() {
  //         console.log(getJohn.result.name.first);  // => "John"
  //     };
      
  //     // Close the db when the transaction is done
  //     tx.oncomplete = function() {
  //         db.close();
  //     };
  //   }
  // }

  return tokenCache
}

export function setTokenCache(_tokenCache) {
  tokenCache = tokenCache

  // if (useLoki) {
  //   const db = new loki('rune.db')

  //   // Add a collection to the database
  //   const items = db.addCollection('items')
  // }
  
  // if (useIndexedDb) {
  //   // This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
  //   // @ts-ignore
  //   var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

  //   // Open (or create) the database
  //   var open = indexedDB.open("RuneItems", 1);

  //   // Create the schema
  //   open.onupgradeneeded = function() {
  //     var db = open.result;
  //     var store = db.createObjectStore("TokenData", {keyPath: "tokenId"});
  //     // var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
  //   };

  //   open.onsuccess = function() {
  //     // Start a new transaction
  //     var db = open.result;
  //     var tx = db.transaction("TokenData", "readwrite");
  //     var store = tx.objectStore("TokenData");
  //     var index = store.index("NameIndex");

  //     // Add some data
  //     for (const item of _tokenCache) {
  //       store.put(item);
  //     }

  //     // Close the db when the transaction is done
  //     tx.oncomplete = function() {
  //         db.close();
  //     };
  //   }
  // }
}

function getItemTokenCache(tokenId: string) {
  try {
    if (tokenCache[tokenId]) return tokenCache[tokenId]

    if (useLoki) {
      const result = db.items?.findOne({'tokenId': tokenId})

      if (result) {
        // console.log('Token found in cache', result)
        return result
      } else {
        // console.log('Token NOT found in cache', tokenId)
      }
    }

    if (useLocalStorage && window.localStorage) {
      const tokenCacheText = window.localStorage.getItem(`zzz_tokenCache_${tokenId}`)
    
      if (tokenCacheText) {
        let tokenCache = JSON.parse(tokenCacheText)
    
        const now = new Date()
        if (now.getTime() > tokenCache.expiry) {
          window.localStorage.removeItem(`zzz_tokenCache_${tokenId}`)
    
          return
        }
    
        return tokenCache.value
      }
    }
  } catch(e) {
    console.log(e, tokenId)
  }
}

function setItemTokenCache(item: any) {
  try {
    tokenCache[item.tokenId] = item

    if (useLoki) {
      // Find and update an existing document
      const result = db.items?.findOne({'tokenId': item.tokenId})
      
      if (result) {
        for (const key of Object.keys(item)) {
          result[key] = item[key]
        }

        // console.log('Updating item', item)
        db.items?.update(result)
      } else {
        try {
          // console.log('Inserting item', item)
          db.items?.insert(item)
        } catch(e) {
          db.items?.update(item)
        }
      }

      // db.saveDatabase()
    }

    if (useLocalStorage && window.localStorage) {
      const ttl = 3 * 24 * 60 * 60 * 1000

      localStorage.setItem(`zzz_tokenCache_${item.tokenId}`, JSON.stringify({
        expiry: (new Date()).getTime() + ttl,
        value: item
      }))
    }
  } catch(e) {
    console.log(e, item)
  }
}
export function decodeItem(tokenId: string) {
  const tokenCacheItem = getItemTokenCache(tokenId)
  if (tokenId && tokenCacheItem) return tokenCacheItem

  return normalizeItem(getItemFromTokenId(tokenId))
}

export function getItemFromTokenId(tokenId: string) {
  const tokenCacheItem = getItemTokenCache(tokenId)
  if (tokenId && tokenCacheItem) return tokenCacheItem

  const defaultItem = {
    tokenId,
    details: {},
    branches: {},
    shorthand: [],
    mods: [],
    attributes: [],
    perfection: null,
    category: ItemsMainCategoriesType.WEAPONS,
    slots: [],
    meta: {
      harvestYield: 0,
      harvestFeeToken: '',
      harvestFeePercent: 0,
      harvestFees: {},
      chanceToSendHarvestToHiddenPool: 0,
      chanceToLoseHarvest: 0,
      harvestBurn: 0,
    },
  }

  if (!tokenId || parseInt(tokenId) === 0 || Number.isNaN(parseInt(tokenId))) return defaultItem

  try {
    const version = parseInt(tokenId.slice(1, 4))
    const id = parseInt(tokenId.slice(4, 9))

    let type = 0
    let modStart = 9

    if (version === 1) {
      modStart = 9
    } else {
      type = parseInt(tokenId.slice(9, 11))
      modStart = 11
    }

    const mods = []

    let modIndex = modStart
    while (modIndex < tokenId.length) {
      const variant = parseInt(tokenId.slice(modIndex, modIndex + 1))

      if (variant === 2) {
        const attributeId = parseInt(tokenId.slice(modIndex + 1, modIndex + 4))
        const value = parseInt(tokenId.slice(modIndex + 4, modIndex + 7))

        if (Number.isNaN(value)) break

        mods.push({
          variant,
          attributeId,
          value,
        })

        modIndex += 7
      } else {
        const value = parseInt(tokenId.slice(modIndex + 1, modIndex + 4))

        if (Number.isNaN(value)) break

        mods.push({
          variant,
          value,
        })

        modIndex += 4
      }
    }

    const item: any = {
      ...defaultItem,
      id,
      // @ts-ignore
      ...JSON.parse(JSON.stringify(itemData[ItemsMainCategoriesType.OTHER].find((i: any) => i.id === id))),
      type,
      version,
      mods,
      tokenId,
      shortTokenId: `${tokenId.slice(0, 23)}...${tokenId.slice(-3)}`,
    }

    return item
  } catch (e) {
    // console.log('Token is invalid', tokenId)
    console.log(e)
  }

  return defaultItem
}

export function normalizeItem(item: any) {
  try {
    const tokenCacheItem = getItemTokenCache(item.tokenId)
    if (item.tokenId && tokenCacheItem) return tokenCacheItem

    const branch = item.branches[1]
    const branchAttributes = branch ? JSON.parse(JSON.stringify(branch.attributes)) : []

    const actionMetadata: any = {
      harvestYield: 0,
      pending: 0,
      bonus: 0,
      harvestBurn: 0,
      chanceToSendHarvestToHiddenPool: 0,
      chanceToLoseHarvest: 0,
      guildId: null,
      characterId: null,
      itemIndex: 0,
      itemLength: 0,
      modIndex: 0,
      modLength: 0,
      rand: 0,
      removeFees: 0,
      freezeFees: 0,
      magicFind: 0,
      unableUseRuneword: null,
      currentRewardToken: null,
      hasEarlyUnstakeLocked: null,
      hasEarlyUnstakeNoReward: null,
      hiddenPoolPid: null,
      swapToken: null,
      swapAmount: null,
      feeToken: null,
      feeAmount: null,
      feeReduction: 0,
      unstakeLocked: false,
      classRequired: 0,
      harvestFeeToken: '',
      harvestFeePercent: 0,
      worldstoneShardChance: 0,
      randomRuneExchange: 0,
      harvestFees: {},
    }

    item.attributes = branchAttributes

    let prevMod = null

    if (item.id === 1) {
      item.mods[0].attributeId = ItemAttributes.HarvestYield.id
      item.mods[1].attributeId = ItemAttributes.HarvestFee.id
      item.mods[2].attributeId = ItemAttributes.HarvestFeeToken.id
    } else if (item.id === 2) {
      item.mods[0].attributeId = ItemAttributes.HarvestYield.id
      item.mods[1].attributeId = ItemAttributes.SendHarvestHiddenPool.id
      item.mods[2].attributeId = ItemAttributes.BurnEntireHarvest.id
    } else if (item.id === 3) {
      item.mods[0].attributeId = ItemAttributes.HarvestYield.id
      item.mods[1].attributeId = ItemAttributes.HarvestBurn.id
      item.mods[2].attributeId = ItemAttributes.FindShard.id
      delete item.mods[3]
      delete item.mods[4]
      delete item.mods[5]
      delete item.mods[6]

      item.mods[2].value = 100
    } else if (item.id === 4) {
      item.mods[0].attributeId = ItemAttributes.FindShard.id

      item.mods[0].value = 100
    }

    for (const i in item.mods) {
      const mod = item.mods[i]
      const branchAttribute = branchAttributes[i]

      if (!branchAttribute) {
        // console.log(`Branch attribute doesn't exist on item definition`, item, mod)
        continue
      }

      if (branchAttribute.value === undefined) {
        if (branchAttribute.min === branchAttribute.max) {
          branchAttribute.value = branchAttribute.min
        }
      }

      if (mod.attributeId === ItemAttributes.HarvestYield.id) {
        actionMetadata.harvestYield += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.HarvestFee.id) {
        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.HarvestFeeToken.id) {
        actionMetadata.harvestFees[branchAttribute.param1 ? branchAttribute.param1.map[mod.value] : branchAttribute.map[mod.value]] = prevMod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.SendHarvestHiddenPool.id) {
        actionMetadata.chanceToSendHarvestToHiddenPool += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.BurnEntireHarvest.id) {
        actionMetadata.chanceToLoseHarvest += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.HarvestBurn.id) {
        actionMetadata.harvestBurn += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.FindShard.id) {
        if (branchAttribute.value !== undefined) mod.value = branchAttribute.value

        actionMetadata.worldstoneShardChance += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.RemoveFees.id) {
        actionMetadata.feeReduction += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.RandomRuneExchange.id) {
        actionMetadata.randomRuneExchange += mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.UnstakeLocked.id) {
        actionMetadata.unstakeLocked = true

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.SpecificClass.id) {
        actionMetadata.classRequired = mod.value

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId === ItemAttributes.Rarity.id) {
        item.rarity = ItemRarity[ItemRarityNameById[mod.value]]

        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      } else if (mod.attributeId > 0 && ItemAttributesById[mod.attributeId]) {
        item.attributes[i] = {
          ...(item.attributes[i] || {}),
          ...ItemAttributesById[mod.attributeId],
          ...branchAttribute,
          ...mod,
        }
      }

      if (item.attributes[i]) {
        item.branches[1].attributes[i] = item.attributes[i]

        if (!item.branches[1].attributes[i].param1) {
          item.branches[1].attributes[i].param1 = {}
          item.branches[1].attributes[i].param1.min = item.branches[1].attributes[i].min
          item.branches[1].attributes[i].param1.max = item.branches[1].attributes[i].max
          item.branches[1].attributes[i].param1.value = item.branches[1].attributes[i].value
          item.branches[1].attributes[i].param1.map = item.branches[1].attributes[i].map
        } else {
          item.branches[1].attributes[i].param1.value = item.branches[1].attributes[i].value
          item.branches[1].attributes[i].min = item.branches[1].attributes[i].param1.min
          item.branches[1].attributes[i].max = item.branches[1].attributes[i].param1.max
          item.branches[1].attributes[i].map = item.branches[1].attributes[i].param1.map
        }
      }

      prevMod = mod
    }

    // if (item.tokenId === "100300016012001003200700120130022011003200201020030142039011202100700000115") debugger;

    if (actionMetadata.harvestYield) {
      item.meta.harvestYield = actionMetadata.harvestYield
    }
    if (Object.keys(actionMetadata.harvestFees).length > 0) {
      item.meta.harvestFees = actionMetadata.harvestFees
      item.meta.harvestFeeToken = Object.keys(actionMetadata.harvestFees)[0]
      item.meta.harvestFeePercent = actionMetadata.harvestFees[Object.keys(actionMetadata.harvestFees)[0]]
    }
    if (actionMetadata.chanceToSendHarvestToHiddenPool) {
      item.meta.chanceToSendHarvestToHiddenPool += actionMetadata.chanceToSendHarvestToHiddenPool
    }
    if (actionMetadata.chanceToLoseHarvest) {
      item.meta.chanceToLoseHarvest += actionMetadata.chanceToLoseHarvest
    }
    if (actionMetadata.harvestBurn) {
      item.meta.harvestBurn = actionMetadata.harvestBurn
    }
    if (actionMetadata.feeReduction) {
      item.meta.feeReduction = actionMetadata.feeReduction
    }
    if (actionMetadata.randomRuneExchange) {
      item.meta.randomRuneExchange = actionMetadata.randomRuneExchange
    }
    if (actionMetadata.worldstoneShardChance) {
      item.meta.worldstoneShardChance = actionMetadata.worldstoneShardChance
    }
    if (actionMetadata.unstakeLocked) {
      item.meta.unstakeLocked = actionMetadata.unstakeLocked
    }
    if (actionMetadata.classRequired) {
      item.meta.classRequired = actionMetadata.classRequired
    }

    if (branch?.perfection) {
      const perfection = [ ...branch.perfection ]
      const attributes = branch.attributes

      // if (item.tokenId === '1001000041000100015647') {
      //   console.log(perfection)
      //   console.log(item.attributes)
      //   console.log(branch.attributes)
      // }

      if (perfection.length) {
        const shorthand = []

        for (let i = 0; i < perfection.length; i++) {
          if (perfection[i] === undefined || perfection[i] === null || !attributes[i]) {
            perfection[i] = undefined
            continue
          }

          perfection[i] =
            perfection[i] === attributes[i].max
              ? perfection[i] - attributes[i].min === 0
                ? 1
                : (attributes[i].value - attributes[i].min) / (perfection[i] - attributes[i].min)
              : attributes[i].max - perfection[i] === 0
              ? 1
              : 1 - (attributes[i].value - perfection[i]) / (attributes[i].max - perfection[i])
        }

        item.perfection = average(perfection.filter((p) => p !== undefined && p !== null))

        // if (item.tokenId === '1001000041000100015647') {
        //   console.log(perfection, branch.attributes[0].max, perfection[0], 1)
        // }

        if (Number.isFinite(item.perfection) && item.perfection <= 1) {
          item.perfection = parseFloat((Math.floor(item.perfection * 100) / 100).toFixed(2))

          if (item.perfection < 0) {
            item.perfection = 0
          }
        } else {
          item.perfection = null
        }
      } else {
        item.perfection = null
      }
    }

    if (!item.meta) {
      item.meta = {
        harvestYield: 0,
        harvestFeeToken: '',
        harvestFeePercent: 0,
        harvestFees: {},
        chanceToSendHarvestToHiddenPool: 0,
        chanceToLoseHarvest: 0,
        harvestBurn: 0,
      }
    }
    // if (item.rarity && item.branches[1]?.presets) {
    //   for (const attributeIndex in item.attributes) {
    //     item.attributes[attributeIndex].value = item.branches[1].presets[item.rarity.id][attributeIndex]
    //   }
    // }

    // Normalize rarity based on perfection
    if (!item.rarity) {
      if (item.attributes.find((a) => a.id === 40)?.value) {
        item.rarity = ItemRarityNameById[item.attributes.find((a) => a.id === 40)?.value || 5]
      } else if (item.perfection === 1) {
        item.rarity = ItemRarity.Mythic
      } else if (item.perfection >= 0.9) {
        item.rarity = ItemRarity.Epic
      } else if (item.perfection >= 0.7) {
        item.rarity = ItemRarity.Rare
      } else if (item.perfection >= 0) {
        item.rarity = ItemRarity.Magical
      }
    }

    // Normalize perfection basd on rarity
    if (item.rarity && item.perfection === null) {
      if (item.rarity.id === ItemRarity.Mythic) {
        item.perfection = 1
      } else if (item.rarity.id === ItemRarity.Epic) {
        item.perfection = 0.9
      } else if (item.rarity.id === ItemRarity.Rare) {
        item.perfection = 0.7
      } else if (item.rarity.id === ItemRarity.Magical) {
        item.perfection = 0.35
      } else {
        item.perfection = 1
      }
    }

    if (item.branches) {
      // Set .value if .min and .max are same
      for (const bIndex of Object.keys(item.branches)) {
        const branchIndex = Number(bIndex)

        for (const attributeIndex in item.branches[branchIndex].attributes) {
          if (item.branches[branchIndex].attributes[attributeIndex].value === undefined) {
            if (item.branches[branchIndex].attributes[attributeIndex].min === item.branches[branchIndex].attributes[attributeIndex].max) {
              item.branches[branchIndex].attributes[attributeIndex].value = item.branches[branchIndex].attributes[attributeIndex].min

              if (branchIndex === 1) {
                item.attributes[attributeIndex].value = item.branches[branchIndex].attributes[attributeIndex].min
              }
            }
          }
        }

        // for (const attributeIndex in item.attributes) {
        //   // item.branches[branchIndex].attributes[i] = item.attributes[i]

        //   if (!item.branches[branchIndex].attributes[attributeIndex].param1) {
        //     item.branches[branchIndex].attributes[attributeIndex].param1 = {}
        //     item.branches[branchIndex].attributes[attributeIndex].param1.min = item.branches[branchIndex].attributes[attributeIndex].min
        //     item.branches[branchIndex].attributes[attributeIndex].param1.max = item.branches[branchIndex].attributes[attributeIndex].max
        //     item.branches[branchIndex].attributes[attributeIndex].param1.value = item.branches[branchIndex].attributes[attributeIndex].value
        //     item.branches[branchIndex].attributes[attributeIndex].param1.map = item.branches[branchIndex].attributes[attributeIndex].map
        //   } else {
        //     item.branches[branchIndex].attributes[attributeIndex].param1.value = item.branches[branchIndex].attributes[attributeIndex].value
        //     item.branches[branchIndex].attributes[attributeIndex].min = item.branches[branchIndex].attributes[attributeIndex].param1.min
        //     item.branches[branchIndex].attributes[attributeIndex].max = item.branches[branchIndex].attributes[attributeIndex].param1.max
        //     item.branches[branchIndex].attributes[attributeIndex].map = item.branches[branchIndex].attributes[attributeIndex].param1.map
        //   }

        //   if (branchIndex === 1) {
        //     if (!item.attributes[attributeIndex].param1) {
        //       item.attributes[attributeIndex].param1 = item.branches[branchIndex].attributes[attributeIndex].param1
        //     }
        //   }
        // }
      }

      // Set preset and attribute values based on rarity
      for (const bIndex of Object.keys(item.branches)) {
        const branchIndex = Number(bIndex)
        if (!item.branches[branchIndex].attributes) continue

        const presets = item.branches[branchIndex].presets
        if (!presets) {
          const perf = item.branches[branchIndex].perfection
          const attrs = item.branches[branchIndex].attributes

          // TODO: figure out if attribute min or max is best and push that into array of perfs (requires spec)
          // if (!perf) {
          //   perf = []

          //   for (const pp in item.branches[branchIndex].attributes) {
          //     perf.push(item.perfection)
          //   }
          // }

          item.branches[branchIndex].presets = {
            [ItemRarity.Magical.id]: [],
            [ItemRarity.Rare.id]: [],
            [ItemRarity.Epic.id]: [],
            [ItemRarity.Mythic.id]: [],
            [ItemRarity.Unique.id]: [],
          }

          for (const pIndex in perf) {
            if (perf[pIndex] === undefined || perf[pIndex] === null) continue

            item.branches[branchIndex].presets[ItemRarity.Magical.id][pIndex] = Math.floor(perf[pIndex] === attrs[pIndex].max ? (attrs[pIndex].max - attrs[pIndex].min) * 0.2 + attrs[pIndex].min : attrs[pIndex].max - ((attrs[pIndex].max - attrs[pIndex].min) * 0.2))
            item.branches[branchIndex].presets[ItemRarity.Rare.id][pIndex] = Math.floor(perf[pIndex] === attrs[pIndex].max ? (attrs[pIndex].max - attrs[pIndex].min) * 0.7 + attrs[pIndex].min : attrs[pIndex].max - ((attrs[pIndex].max - attrs[pIndex].min) * 0.7))
            item.branches[branchIndex].presets[ItemRarity.Epic.id][pIndex] = Math.floor(perf[pIndex] === attrs[pIndex].max ? (attrs[pIndex].max - attrs[pIndex].min) * 0.95 + attrs[pIndex].min : attrs[pIndex].max - ((attrs[pIndex].max - attrs[pIndex].min) * 0.95))
            item.branches[branchIndex].presets[ItemRarity.Mythic.id][pIndex] = perf[pIndex]
            item.branches[branchIndex].presets[ItemRarity.Unique.id][pIndex] = perf[pIndex]
          }
        }

        if (item.rarity) {
          for (const b2Index of Object.keys(item.branches)) {
            const branch2Index = Number(b2Index)

            if (!item.branches[branch2Index].presets?.[item.rarity.id]) continue
            
            for (const presetIndex in item.branches[branch2Index].presets[item.rarity.id]) {
              const preset = item.branches[branch2Index].presets[item.rarity.id][presetIndex]

              if (item.branches[branch2Index].attributes[presetIndex].value !== undefined) continue

              item.branches[branch2Index].attributes[presetIndex].value = preset

              if (branch2Index === 1) {
                item.attributes[presetIndex].value = preset
              }
            }
          }
        }
      }
    }

    // Normalize main branch map attribute values
    if (branch?.perfection) {
      for (const attributeIndex in branch.attributes) {
        const attribute = branch.attributes[attributeIndex]
        const perfection = branch.perfection[attributeIndex]
  
        if (perfection === undefined || perfection == null) {
          if (attribute.value === undefined && attribute.map) {
            attribute.value = attribute.min
            item.attributes[attributeIndex] = attribute
          }
        }
      }
    }

    if (item.branches) {
      // Normalize branch values and perfection
      for (const bIndex of Object.keys(item.branches)) {
        const branchIndex = Number(bIndex)
        if (branchIndex === 1) {
          continue
        }
        if (!item.branches[branchIndex].attributes) continue

        for (const attributeIndex in item.attributes) {
          if (
            !item.branches[1] ||
            !item.branches[1].perfection ||
            !item.branches[1].attributes ||
            !item.branches[branchIndex] ||
            !item.branches[branchIndex].attributes[attributeIndex]
          ) {
            break
          }

          if (item.branches[branchIndex].attributes[attributeIndex].value !== undefined) {
            continue
          }

          const originalAttributePerfection = item.branches[1].perfection[attributeIndex]
            ? item.branches[1].perfection[attributeIndex]
            : item.perfection

          const attributePerfection =
            originalAttributePerfection === item.attributes[attributeIndex].max
              ? originalAttributePerfection - item.attributes[attributeIndex].min === 0
                ? 1
                : (item.attributes[attributeIndex].value - item.attributes[attributeIndex].min) /
                  (originalAttributePerfection - item.attributes[attributeIndex].min)
              : item.attributes[attributeIndex].max - originalAttributePerfection === 0
              ? 1
              : 1 -
                (item.attributes[attributeIndex].value - originalAttributePerfection) /
                  (item.attributes[attributeIndex].max - originalAttributePerfection)
          
          if (!item.branches[branchIndex].perfection) {
            item.branches[branchIndex].perfection = []
          }
          if (item.branches[branchIndex].perfection[attributeIndex] === undefined) {
            item.branches[branchIndex].perfection[attributeIndex] = attributePerfection
          }

          if (item.branches[branchIndex].attributes[attributeIndex].value === undefined) {
            if (item.branches[branchIndex].attributes[attributeIndex].map) {
              const kindofClose = Math.floor(
                (item.branches[branchIndex].attributes[attributeIndex].max -
                  item.branches[branchIndex].attributes[attributeIndex].min) *
                  attributePerfection,
              )
              const closestKey = Object.keys(item.branches[branchIndex].attributes[attributeIndex].map).sort((a, b) => {
                return Math.abs(kindofClose - Number(a)) - Math.abs(kindofClose - Number(b))
              })[0]
  
              item.branches[branchIndex].attributes[attributeIndex].value = closestKey
            } else {
              const alignedValue = Math.floor(
                (item.branches[branchIndex].attributes[attributeIndex].max -
                  item.branches[branchIndex].attributes[attributeIndex].min) *
                  attributePerfection,
              )
              item.branches[branchIndex].attributes[attributeIndex].value =
                item.branches[branchIndex].attributes[attributeIndex].min + alignedValue
            }
          }
        }
      }
    }

    // Normalize shorthand
    if (branch?.perfection) {
      const perfection = [ ...branch.perfection ]
      const attributes = branch.attributes

      if (perfection.length) {
        const shorthand = []

        for (let i = 0; i < perfection.length; i++) {
          if (perfection[i] === undefined || perfection[i] === null || !attributes[i]) {
            continue
          }

          shorthand.push(
            (attributes[i].map ? attributes[i].map[attributes[i].value] : attributes[i].value) + '',
          )
        }

        item.shorthand = shorthand.join('-')
      }
    }

    // Normalize odds
    if (item.meta && item.branches?.[1]) {
      let odds = 1

      for (const attributeIndex in item.branches[1].attributes) {
        const attribute = item.branches[1].attributes[attributeIndex]

        if (attribute.min === undefined || attribute.max === undefined) continue
        if (attribute.min === attribute.max) continue
        if (attribute.map) continue
        if (attribute.id === ItemAttributes.RandomPerfection1.id || attribute.id === ItemAttributes.RandomPerfection2.id || attribute.id === ItemAttributes.RandomPerfection3.id || attribute.id === ItemAttributes.RandomPerfection4.id || attribute.id === ItemAttributes.RandomPerfection5.id) continue

        odds *= (attribute.max - attribute.min + 1)
      }

      if (odds > 1) {
        item.meta.odds = odds
      }
    }

    // Normalize perfection
    if (item.perfection === undefined || item.perfection === null) {
      item.perfection = 1
    }

    if (!item.tokenId) {
      item.tokenId = getTokenIdFromItem(item)
    }

    item.slug = item.name?.replace(/ /gi, '-').replace(/"/gi, '')

    if (item.tokenId === '100300014012001002201900120130012011001200200720030122039008202100600000875')
      item.perfection = -13
    if (item.tokenId === '100301201142040003200100520130200000000000000000000000000000000000000000001')
      item.branches[1].description[1] = '"So long, I barely knew thee."'
  } catch (e) {
    // console.log('Token is invalid', tokenId)
    console.log(e)
  }

  setItemTokenCache(item)

  return item
}

function pad(n, width, z = '0') {
  const nn = n + ''
  return nn.length >= width ? nn : new Array(width - nn.length + 1).join(z) + nn
}

export function getTokenIdFromItem(item, rand = 1) {
  const version = 3

  let attrs = ''

  for (let i = 0; i < 8; i++) {
    const attribute = item.attributes[i]

    if (attribute && attribute?.id) {
      attrs += '2' + pad(attribute?.id || 0, 3) + pad(attribute?.value || 0, 3)
    } else {
      attrs += '0' + pad(attribute?.id || 0, 3) + pad(attribute?.value || 0, 3)
    }
  }

  attrs += "00000"
  attrs += pad(rand, 3)

  return `1${pad(version, 3)}${pad(item.id, 5)}${pad(item.type, 2)}${attrs}`
}
