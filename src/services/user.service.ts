import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../models/user'

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private userModel: Model<UserDocument>) {}

  async createUser(userData): Promise<User>{
      try {
          return await this.userModel.create(userData);
      } catch (error) {
          console.log('[Error] UserService-createUser error ->', error.message);
      }
  }

  async getAllUser(): Promise<User[]> {
    try {
        return await this.userModel.find();
    } catch (error) {
        console.log('[Error] UserService-getAllUser error ->', error.message);
    }
  }

  async getUserByUid(userId: String): Promise<User> {
    try {
        return await this.userModel.findOne(userId);
    } catch (error) {
        console.log('[Error] UserService-getUserByUid error ->', error.message);
    }
  }

}
