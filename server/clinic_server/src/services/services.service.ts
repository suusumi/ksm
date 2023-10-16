import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import {DatabaseService} from "../database/database.service";
import {CategoryType, ServiceType} from '@prisma/client';

@Injectable()
export class ServicesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createServiceDto: CreateServiceDto) {
    try {
      return await this.databaseService.services.create({
        data: createServiceDto,
      }); // Возврат созданного
    } catch (error) {
      throw new HttpException(`Ошибка при созданиии услуги` + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return await this.databaseService.services.findMany();
    } catch (error) {
      throw new HttpException(`Ошибка при получения списка услуг с БД:` + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try {
      const service = await this.databaseService.services.findUnique({
        where: { id },
      });

      if (!service) {
        throw new Error(`Услуга с ID ${id} не найдена`);
      }

      return service;
    } catch (error) {
      throw new HttpException(`Ошибка при поиске услуги с ID ${id}:` + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findServicesByServiceType(service_type: string) {
    try {
      const enum_service = service_type as ServiceType;
      const service = await this.databaseService.services.findMany({
        where: { type: enum_service },
      });

      if (!service) {
        throw new Error(`Услуги с видом услуг ${service_type} не найдены`);
      }

      return service;
    } catch (error) {
      throw new HttpException(`Ошибка при поиске услуг с видом услуг ${service_type}:` + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findServicesByCategoryType(category_type: string) {
    try {
      const enum_category = category_type as CategoryType;
      const service = await this.databaseService.services.findMany({
        where: { category: enum_category },
      });

      if (!service) {
        throw new Error(`Услуги с категорией ${category_type} не найдены`);
      }

      return service;
    } catch (error) {
      throw new HttpException(`Ошибка при поиске услуг с категорией ${category_type}:` + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    try {
      const updatedService = await this.databaseService.services.update({
        where: { id },
        data: updateServiceDto,
      });

      if (!updatedService) {
        throw new Error(`Услуга с ID ${id} не найдена`);
      }

      return updatedService;
    } catch (error) {
      throw new HttpException(`Ошибка при обновлении услуги с ID ${id}:` + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    try {
      const deletedService = await this.databaseService.services.delete({
        where: {
          id: id
        }
      });

      if (!deletedService) {
        throw new Error(`Услуга с ID ${id} не найдена`);
      }

      return deletedService;
    } catch (error) {
      throw new HttpException(`Ошибка при удалении услуги с ID ${id}:` + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
