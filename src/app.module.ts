import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookServiceService } from './book-service/book-service.service';
import { BookControllerController } from './book-controller/book-controller.controller';
import { DBService } from './db.service';

@Module({
  imports: [],
  controllers: [AppController, BookControllerController],
  providers: [AppService, BookServiceService, DBService],
})
export class AppModule {}
