
import { Model, RelationMappings, JSONSchema } from 'objection'
import License from './license'
import Offer from './offer'
import Chain from './chain'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Asset extends BaseModel {
  public parentId!: number
  public score!: number
  public tokenId!: string
  public skin!: string
  public transmuteCount!: number
  public owner!: Profile

  public static get tableName(): string {
    return 'assets'
  }

  public static get timestamps(): boolean {
    return true
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: [],
      properties: {
      }
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      parent: {
        relation: Model.HasOneRelation,
        modelClass: Node,
        join: {
          from: 'assets.parentId',
          to: 'nodes.id'
        }
      },
      owner: {
        relation: Model.HasOneRelation,
        modelClass: Profile,
        join: {
          from: 'rewards.ownerId',
          to: 'profiles.id'
        }
      },
      license: {
        relation: Model.HasOneRelation,
        modelClass: License,
        join: {
          from: 'assets.licenseId',
          to: 'licenses.id'
        }
      },
      chain: {
        relation: Model.HasOneRelation,
        modelClass: Chain,
        join: {
          from: 'assets.chainId',
          to: 'chains.id'
        }
      },
      offers: {
        relation: Model.ManyToManyRelation,
        modelClass: Offer,
        filter: {
          relationKey: 'offers'
        },
        beforeInsert (model) {
          (model as Node).relationKey = 'offers'
        },
        join: {
          from: 'offers.id',
          to: 'communities.id',
          through: {
            from: 'nodes.fromOfferId',
            to: 'nodes.toCommunityId',
            extra: ['relationKey']
          }
        }
      }
    }
  }
}