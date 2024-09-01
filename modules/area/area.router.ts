import { z as zod } from 'zod';
import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { customErrorFormatter, hasRole } from '../../util/rpc';
import type { RouterContext } from '../../types';
import { Area, AreaLandmark, AreaType } from './area.schema';

export const z = zod;
export const t = initTRPC.context<RouterContext>().create();
export const router = t.router;
export const procedure = t.procedure;

export const createRouter = () =>
  router({
    getArea: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ areaId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Area.getArea as any)(input, ctx)),

    createArea: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(Area)
      .mutation(({ input, ctx }) => (ctx.app.service.Area.createArea as any)(input, ctx)),

    updateArea: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ areaId: z.string(), data: Area.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Area.updateArea as any)(input, ctx)),

    getAreaLandmark: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ areaLandmarkId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Area.getAreaLandmark as any)(input, ctx)),

    createAreaLandmark: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(AreaLandmark)
      .mutation(({ input, ctx }) => (ctx.app.service.Area.createAreaLandmark as any)(input, ctx)),

    updateAreaLandmark: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ areaLandmarkId: z.string(), data: AreaLandmark.partial() }))
      .mutation(({ input, ctx }) => (ctx.app.service.Area.updateAreaLandmark as any)(input, ctx)),

    getAreaType: procedure
      .use(hasRole('guest', t))
      .use(customErrorFormatter(t))
      .input(z.object({ areaTypeId: z.string() }))
      .query(({ input, ctx }) => (ctx.app.service.Area.getAreaType as any)(input, ctx)),

    createAreaType: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(AreaType)
      .mutation(({ input, ctx }) => (ctx.app.service.Area.createAreaType as any)(input, ctx)),

    updateAreaType: procedure
      .use(hasRole('admin', t))
      .use(customErrorFormatter(t))
      .input(z.object({ areaTypeId: z.string(), data: AreaType.partial() }))
      .output(AreaType.partial())
      .mutation(({ input, ctx }) => (ctx.app.service.Area.updateAreaType as any)(input, ctx)),
  });

export type Router = ReturnType<typeof createRouter>;
export type RouterInput = inferRouterInputs<Router>;
export type RouterOutput = inferRouterOutputs<Router>;
