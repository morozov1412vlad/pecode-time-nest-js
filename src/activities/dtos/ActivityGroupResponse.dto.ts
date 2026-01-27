import { Expose } from 'class-transformer';

export class ActivityGroupResponse {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
