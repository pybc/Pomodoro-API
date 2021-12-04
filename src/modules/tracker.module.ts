import { Module } from '@nestjs/common';
import { TrackerController } from '../controllers/tracker.controller';
import { TrackerService } from '../services/tracker.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackerSchema } from '../models/tracker';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'tracker',
        schema: TrackerSchema,
      },
    ]),
  ],
  controllers: [TrackerController],
  providers: [TrackerService],
})
export class TrackerModule {}
