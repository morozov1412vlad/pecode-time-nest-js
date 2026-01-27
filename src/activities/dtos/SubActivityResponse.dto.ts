import { Expose } from 'class-transformer';

export class SubActivityResponse {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  activity_id: number;
}
