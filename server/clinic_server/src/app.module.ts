import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SpecialistsModule } from './specialists/specialists.module';
import { BannersModule } from './banners/banners.module';
import { InphographicsModule } from './inphographics/inphographics.module';
import { ImagesControllerController } from './images-controller/images-controller.controller';

@Module({
  imports: [DatabaseModule, SpecialistsModule, BannersModule, InphographicsModule],
  controllers: [AppController, ImagesControllerController],
  providers: [AppService],
})
export class AppModule {}
