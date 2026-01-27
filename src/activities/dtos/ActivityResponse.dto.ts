import { Expose, Type } from 'class-transformer';
import { ActivityGroupResponse } from './ActivityGroupResponse.dto';

export class ActivityResponse {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  @Type(() => ActivityGroupResponse)
  group: ActivityGroupResponse;
}
