import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaService';
import { FlowersCreateDto } from './flowers.dto';

@Injectable()
export class FlowersService {
  constructor(private readonly prismaService: PrismaService) { }
  async findAll() {
    return await this.prismaService.flower.findMany()
  }

  async create(dto: FlowersCreateDto) {
    return await this.prismaService.flower.create({
      data: dto,
    })
  }
}
