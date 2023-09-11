import {Injectable} from '@nestjs/common';
import {CreateSpecialistDto} from './dto/create-specialist.dto';
import {UpdateSpecialistDto} from './dto/update-specialist.dto';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class SpecialistsService {
  constructor(private readonly databaseService: DatabaseService) {
  }

  async create(createSpecialistDto: CreateSpecialistDto) {
    try {
      return await this.databaseService.specialists.create({
        data: createSpecialistDto,
      }); // Возврат созданного
    } catch (error) {
      console.error("Ошибка при создании специалиста:", error);
      throw error;
    }
  }

  async findAll() {
    const res = await this.databaseService.specialists.count();
    return `This action returns all specialists number ` + res;
  }

  async findOne(id: number) {
    const res = await this.databaseService.specialists.findMany({
      where: {
        id: id
      }
    })
    return res;
  }

  async update(id: number, updateSpecialistDto: UpdateSpecialistDto) {
    try {
      const updatedSpecialist = await this.databaseService.specialists.update({
        where: { id },
        data: updateSpecialistDto,
      });

      if (!updatedSpecialist) {
        throw new Error(`Специалист с ID ${id} не найден`);
      }

      return updatedSpecialist;
    } catch (error) {
      // Обработка ошибок, если они возникнут
      console.error(`Ошибка при обновлении специалиста с ID ${id}:`, error);
      throw error;
    }
  }


  async remove(id: number) {
    try {
      const deletedSpecialist = await this.databaseService.specialists.delete({
        where: {
          id: id
        }
      });

      if (!deletedSpecialist) {
        throw new Error(`Специалист с ID ${id} не найден`);
      }

      return deletedSpecialist;
    } catch (error) {
      console.error(`Ошибка при удалении специалиста с ID ${id}:`, error);
    }
  }

}
