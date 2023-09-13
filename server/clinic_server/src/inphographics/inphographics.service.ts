import { Injectable } from '@nestjs/common';
import { CreateInphographicDto } from './dto/create-inphographic.dto';
import { UpdateInphographicDto } from './dto/update-inphographic.dto';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class InphographicsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createInphographicDto: CreateInphographicDto) {
    try {
      return await this.databaseService.infographics.create({
        data: createInphographicDto,
      }); // Возврат созданного
    } catch (error) {
      console.error("Ошибка при создании инфографики:", error);
    }
  }

  async findAll() {
    try {
      return await this.databaseService.infographics.findMany();
    } catch (error) {
      console.error("Ошибка при получении списка инфографики в БД:", error);
    }
  }

  async findOne(id: number) {
    try {
      const inphographics = await this.databaseService.infographics.findUnique({
        where: { id },
      });

      if (!inphographics) {
        throw new Error(`Инфографика с ID ${id} не найдена`);
      }

      return inphographics;
    } catch (error) {
      console.error(`Ошибка при поиске инфографики с ID ${id}:`, error);
    }
  }

  async update(id: number, updateInphographicDto: UpdateInphographicDto) {
    try {
      const updatedInphographics = await this.databaseService.infographics.update({
        where: { id },
        data: updateInphographicDto,
      });

      if (!updatedInphographics) {
        throw new Error(`Инфографика с ID ${id} не найдена`);
      }

      return updatedInphographics;
    } catch (error) {
      console.error(`Ошибка при обновлении инфографики с ID ${id}:`, error);
    }
  }

  async remove(id: number) {
    return `This action removes a #${id} inphographic`;
  }

  async removeAll() {
    return `This action removes all inphographics`;
  }
}
