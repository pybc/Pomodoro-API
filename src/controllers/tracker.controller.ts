import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Tracker } from '../models/tracker';
import { TrackerService } from '../services/tracker.service';

@Controller('tracker')
export class TrackerController {
  constructor(private trackerService: TrackerService) {}
  @Get('/')
  async createTask(@Body() taskData: Tracker): Promise<Tracker> {
    return this.trackerService.createTask(taskData);
  }

  @Get('/:userId')
  async getTaskByUserId(@Param('userId') id: String): Promise<any> {
    return this.trackerService.getTaskByUserId(id);
  }

  @Patch('/')
  async updateTask(@Body() taskData: Tracker): Promise<Tracker> {
    return this.trackerService.updateTask(taskData);
  }
}
