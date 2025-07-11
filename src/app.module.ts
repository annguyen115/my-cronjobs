import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ScheduleModule.forRoot(),
    TasksModule,
    UsersModule,
  ],
})
export class AppModule {}
