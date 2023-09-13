import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InphographicsService } from './inphographics.service';
import { CreateInphographicDto } from './dto/create-inphographic.dto';
import { UpdateInphographicDto } from './dto/update-inphographic.dto';

@Controller('inphographics')
export class InphographicsController {
  constructor(private readonly inphographicsService: InphographicsService) {}

  @Post()
  create(@Body() createInphographicDto: CreateInphographicDto) {
    return this.inphographicsService.create(createInphographicDto);
  }

  @Get()
  findAll() {
    return this.inphographicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inphographicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInphographicDto: UpdateInphographicDto) {
    return this.inphographicsService.update(+id, updateInphographicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inphographicsService.remove(+id);
  }
}
