// tasks.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/users.schema';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Chạy mỗi ngày lúc 0h
  @Cron(CronExpression.EVERY_10_SECONDS) // https://crontab.guru/#0_0_*_*_*
  async handleCleanupUnverifiedUsers() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const result = await this.userModel.deleteMany({
      isEmailVerified: false,
      createdAt: { $lte: sevenDaysAgo },
    });

    this.logger.log(`🧹 Đã xóa ${result.deletedCount} user chưa xác minh.`);
  }
}
