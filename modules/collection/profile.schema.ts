import { z, ObjectId, Entity } from '../../schema/zod';

export const CollectibleCollection = Entity.merge(
  z.object({
    hype: z.number().optional(),
    value: z.number().optional(),
  })
);

export const CollectibleCardBox = Entity.merge(
  z.object({
    collectibleCollectionId: ObjectId,
    franchise: z.string().nonempty(),
  })
);

export const CollectibleCardPack = Entity.merge(
  z.object({
    collectibleCollectionId: ObjectId,
    franchise: z.string().nonempty(),
    ungraded: z.number().optional(),
    grade10: z.number().optional(),
    grade9: z.number().optional(),
    grade8: z.number().optional(),
    grade7: z.number().optional(),
    grade6: z.number().optional(),
    grade5: z.number().optional(),
    grade4: z.number().optional(),
    grade3: z.number().optional(),
    grade2: z.number().optional(),
    grade1: z.number().optional(),
    additional: z.string().optional(),
    code: z.string().optional(),
    hype: z.number().optional(),
    series: z.string().optional(),
    category: z.string().optional(),
    year: z.number().optional(),
  })
);

export const CollectibleCard = Entity.merge(
  z.object({
    collectibleCollectionId: ObjectId,
    franchise: z.string().nonempty(),
    ungraded: z.number().optional(),
    grade10: z.number().optional(),
    grade9: z.number().optional(),
    grade8: z.number().optional(),
    grade7: z.number().optional(),
    grade6: z.number().optional(),
    grade5: z.number().optional(),
    grade4: z.number().optional(),
    grade3: z.number().optional(),
    grade2: z.number().optional(),
    grade1: z.number().optional(),
    additional: z.string().optional(),
    code: z.string().optional(),
    hype: z.number().optional(),
    series: z.string().optional(),
    category: z.string().optional(),
    year: z.number().optional(),
  })
);
