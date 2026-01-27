import { PartialType } from '@nestjs/swagger';
import { IsInt, IsString, ValidateIf } from 'class-validator';

export class ActivityPayload {
  @IsString()
  name: string;

  @ValidateIf((_, value) => value !== null)
  @IsInt()
  group_id: number | null;
}

export class ActivityUpdatePayload extends PartialType(ActivityPayload) {}
