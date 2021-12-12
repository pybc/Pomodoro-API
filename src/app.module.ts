import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user.module';
import { TrackerModule } from './modules/tracker.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/'),
    UserModule,
    TrackerModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
