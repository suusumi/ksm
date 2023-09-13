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
    return `This action returns all inphographics`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} inphographic`;
  }

  async update(id: number, updateInphographicDto: UpdateInphographicDto) {
    return `This action updates a #${id} inphographic`;
  }

  async remove(id: number) {
    return `This action removes a #${id} inphographic`;
  }

  async removeAll() {
    return `This action removes all inphographics`;
  }
}
