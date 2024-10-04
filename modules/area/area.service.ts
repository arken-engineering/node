import type { Area, AreaLandmark, AreaType, RouterInput, RouterOutput, RouterContext } from './area.types';
import { getFilter } from '../../util/api';

export class Service {
  async getArea(input: RouterInput['getArea'], ctx: RouterContext): Promise<RouterOutput['getArea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.getArea', input.query);

    const filter = getFilter(input.query);
    const area = await ctx.app.model.Area.findOne(filter).lean().exec();
    if (!area) throw new Error('Area not found');

    return area as Area;
  }

  async getAreaLandmark(
    input: RouterInput['getAreaLandmark'],
    ctx: RouterContext
  ): Promise<RouterOutput['getAreaLandmark']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.getAreaLandmark', input.query);

    const filter = getFilter(input.query);
    const areaLandmark = await ctx.app.model.AreaLandmark.findOne(filter).lean().exec();
    if (!areaLandmark) throw new Error('AreaLandmark not found');

    return areaLandmark as AreaLandmark;
  }

  async getAreaType(input: RouterInput['getAreaType'], ctx: RouterContext): Promise<RouterOutput['getAreaType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.getAreaType', input.query);

    const filter = getFilter(input.query);
    const areaType = await ctx.app.model.AreaType.findOne(filter).lean().exec();
    if (!areaType) throw new Error('AreaType not found');

    return areaType as AreaType;
  }

  async createArea(input: RouterInput['createArea'], ctx: RouterContext): Promise<RouterOutput['createArea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.createArea', input.data);

    const area = await ctx.app.model.Area.create(input.data);
    return area as Area;
  }

  async createAreaLandmark(
    input: RouterInput['createAreaLandmark'],
    ctx: RouterContext
  ): Promise<RouterOutput['createAreaLandmark']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.createAreaLandmark', input.data);

    const areaLandmark = await ctx.app.model.AreaLandmark.create(input.data);
    return areaLandmark as AreaLandmark;
  }

  async createAreaType(
    input: RouterInput['createAreaType'],
    ctx: RouterContext
  ): Promise<RouterOutput['createAreaType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.createAreaType', input.data);

    const areaType = await ctx.app.model.AreaType.create(input.data);
    return areaType as AreaType;
  }

  async updateArea(input: RouterInput['updateArea'], ctx: RouterContext): Promise<RouterOutput['updateArea']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.updateArea', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedArea = await ctx.app.model.Area.findOneAndUpdate(filter, input.data, { new: true }).lean().exec();
    if (!updatedArea) throw new Error('Area update failed');

    return updatedArea as Area;
  }

  async updateAreaLandmark(
    input: RouterInput['updateAreaLandmark'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateAreaLandmark']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.updateAreaLandmark', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedAreaLandmark = await ctx.app.model.AreaLandmark.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedAreaLandmark) throw new Error('AreaLandmark update failed');

    return updatedAreaLandmark as AreaLandmark;
  }

  async updateAreaType(
    input: RouterInput['updateAreaType'],
    ctx: RouterContext
  ): Promise<RouterOutput['updateAreaType']> {
    if (!input) throw new Error('Input should not be void');
    console.log('Area.Service.updateAreaType', input.query, input.data);

    const filter = getFilter(input.query);
    const updatedAreaType = await ctx.app.model.AreaType.findOneAndUpdate(filter, input.data, { new: true })
      .lean()
      .exec();
    if (!updatedAreaType) throw new Error('AreaType update failed');

    return updatedAreaType as AreaType;
  }
}
