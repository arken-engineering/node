import * as mongo from '../../util/mongo';
import type * as Types from './job.types';

// Job

export const JobSchema = mongo.createSchema<Types.JobDocument>(
  'Job',
  {
    mod: { type: String, required: true },
    startDate: { type: Date },
    expireDate: { type: Date },
  },
  {
    indexes: [{ applicationId: 1, mod: 1, key: 1 }],
  }
);

export const Job = mongo.createModel<Types.JobDocument>('Job', JobSchema);
