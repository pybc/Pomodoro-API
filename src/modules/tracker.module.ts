import { Module } from '@nestjs/common';
import { TrackerController } from '../controllers/tracker.controller';
import { TrackerService } from '../services/tracker.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackerSchema } from '../models/tracker';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'src/config/configuration';
interface config {
  username: string;
  token: string;
}
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'tracker',
        schema: TrackerSchema,
      },
    ]),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [TrackerController],
  providers: [TrackerService],
})
export class TrackerModule {
  static config: config
  constructor(private configService: ConfigService) {
    TrackerModule.config = this.configService.get<config>('config');
  }
}
