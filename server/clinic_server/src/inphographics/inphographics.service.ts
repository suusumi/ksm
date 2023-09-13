import { Injectable } from '@nestjs/common';
import { CreateInphographicDto } from './dto/create-inphographic.dto';
import { UpdateInphographicDto } from './dto/update-inphographic.dto';

@Injectable()
export class InphographicsService {
  create(createInphographicDto: CreateInphographicDto) {
    return 'This action adds a new inphographic';
  }

  findAll() {
    return `This action returns all inphographics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inphographic`;
  }

  update(id: number, updateInphographicDto: UpdateInphographicDto) {
    return `This action updates a #${id} inphographic`;
  }

  remove(id: number) {
    return `This action removes a #${id} inphographic`;
  }
}
