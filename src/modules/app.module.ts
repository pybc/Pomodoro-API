import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UserModule } from './user.module';
import { TrackerModule } from './tracker.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/'), UserModule,TrackerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
