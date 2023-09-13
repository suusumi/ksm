import { Module } from '@nestjs/common';
import { InphographicsService } from './inphographics.service';
import { InphographicsController } from './inphographics.controller';

@Module({
  controllers: [InphographicsController],
  providers: [InphographicsService],
})
export class InphographicsModule {}
