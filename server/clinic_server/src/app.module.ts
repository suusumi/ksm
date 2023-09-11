import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SpecialistsModule } from './specialists/specialists.module';

@Module({
  imports: [DatabaseModule, SpecialistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
