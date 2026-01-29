import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/activities.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ActivitiesModule, UsersModule],
})
export class AppModule {}
