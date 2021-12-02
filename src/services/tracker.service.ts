import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tracker, TrackerDocument } from '../models/tracker';

@Injectable()
export class TrackerService {
  constructor(
    @InjectModel('tracker') private trackerModel: Model<TrackerDocument>,
  ) {}

  async createTask(taskData): Promise<Tracker> {
    try {
      return await this.trackerModel.create(taskData);
    } catch (error) {
      console.log('[Error] UserService-createTask error ->', error.message);
    }
  }

  async getTaskByUserId(userId: String): Promise<Tracker[]> {
    try {
      return await this.trackerModel.find(userId);
    } catch (error) {
      console.log('[Error] UserService-getAllUser error ->', error.message);
    }
  }

  async updateTask(taskData): Promise<Tracker> {
    try {
      return await this.trackerModel.findOneAndUpdate(
        { ownerTaskId: taskData.ownerTaskId },
        {
          taskId: taskData.taskId,
          description: taskData.description,
          est: taskData.est,
        },
      );
    } catch (error) {
      console.log('[Error] UserService-updateTask error ->', error.message);
    }
  }

}
