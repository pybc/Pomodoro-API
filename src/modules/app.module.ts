import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  // imports: [MongooseModule.forRoot('')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
