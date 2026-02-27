import { Module } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';
import { PrismaService } from 'src/prismaService';

@Module({
  controllers: [FlowersController],
  providers: [FlowersService, PrismaService],
})
export class FlowersModule { }
