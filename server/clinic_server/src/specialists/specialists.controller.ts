import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {SpecialistsService} from './specialists.service';
import {CreateSpecialistDto} from './dto/create-specialist.dto';
import {UpdateSpecialistDto} from './dto/update-specialist.dto';

@Controller('specialists')
export class SpecialistsController {
  constructor(private readonly specialistsService: SpecialistsService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() createSpecialistDto: CreateSpecialistDto) {
    return await this.specialistsService.create(createSpecialistDto);
  }
  @Get()
  async findAll() {
    return this.specialistsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.specialistsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateSpecialistDto: UpdateSpecialistDto) {
    return this.specialistsService.update(+id, updateSpecialistDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.specialistsService.remove(+id);
  }
}
