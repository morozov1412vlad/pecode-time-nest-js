import { Module } from '@nestjs/common';
import { ActivitiesController } from './activities.controller';
import { SubActivitiesController } from './sub-activities.controller';
import { ActivityGroupsController } from './activity-groups.controller';

@Module({
  controllers: [
    ActivitiesController,
    SubActivitiesController,
    ActivityGroupsController,
  ],
})
export class ActivitiesModule {}
