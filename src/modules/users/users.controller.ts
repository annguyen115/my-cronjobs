import { Controller, Get } from '@nestjs/common';
import { User, UserDocument } from './users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Controller('users')
export class UsersController {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  @Get()
  async getHello(): Promise<void> {
    await this.userModel.create([
      {
        email: 'test@example.com',
        isEmailVerified: false,
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
      },
      {
        email: 'test1@example.com',
        isEmailVerified: false,
        createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
      },
    ]);
  }
}
