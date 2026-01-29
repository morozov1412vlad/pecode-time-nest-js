import { Expose } from 'class-transformer';

export class UserResponse {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  username: string;

  @Expose()
  first_name: string;

  @Expose()
  last_name: string;
}
