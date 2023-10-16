import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe, ParseEnumPipe
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import {ServiceType} from "@prisma/client";

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() createServiceDto: CreateServiceDto) {
    return await this.servicesService.create(createServiceDto);
  }

  @Get()
  async findAll() {
    return await this.servicesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.servicesService.findOne(+id);
  }

  @Get('getbyservice/:service_type')
  async findServicesByServiceType(@Param('service_type') service_type: string) {
    return await this.servicesService.findServicesByServiceType(service_type);
  }

  @Get('getbycategory/:category_type')
  async findServicesByCategoryType(@Param('category_type') category_type: string) {
    return await this.servicesService.findServicesByCategoryType(category_type);
  }

  @UsePipes(new ValidationPipe())
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateServiceDto: UpdateServiceDto) {
    return await this.servicesService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.servicesService.remove(+id);
  }
}
