// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ default: false })
  isEmailVerified: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
