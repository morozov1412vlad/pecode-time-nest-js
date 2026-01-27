import { IsString } from 'class-validator';

export class ActivityGroupPayload {
  @IsString()
  name: string;
}
