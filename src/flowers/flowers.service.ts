import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaService';
import { FlowersCreateDto } from './flowers.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from 'src/types';

@Injectable()
export class FlowersService {
  constructor(private readonly prismaService: PrismaService, private readonly configService: ConfigService) { }
  async findAll() {
    console.log(this.configService.get<EnumAppMode>('mode'))
    return await this.prismaService.flower.findMany()
  }

  async create(dto: FlowersCreateDto) {
    return await this.prismaService.flower.create({
      data: dto,
    })
  }
}
