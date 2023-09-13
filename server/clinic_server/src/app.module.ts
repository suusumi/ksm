import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SpecialistsModule } from './specialists/specialists.module';
import { BannersModule } from './banners/banners.module';
import { InphographicsModule } from './inphographics/inphographics.module';

@Module({
  imports: [DatabaseModule, SpecialistsModule, BannersModule, InphographicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
