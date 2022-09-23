import { RelationMappings, JSONSchema } from 'objection';
import BaseModel from './base';
export default class Chain extends BaseModel {
    name: string;
    icon: string;
    shortName: string;
    networkName: string;
    networkId: number;
    type: string;
    chainId: number;
    blockNumber: number;
    static get tableName(): string;
    static get timestamps(): boolean;
    static get jsonSchema(): JSONSchema;
    static get relationMappings(): RelationMappings;
}
