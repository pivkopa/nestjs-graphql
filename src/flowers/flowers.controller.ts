import { Body, Controller, Get, Post, Query, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/pipe';
import { AuthGuard } from 'src/conception/guard';
import { LogingInterceptor } from 'src/conception/interceptor';
import { PrismaService } from 'src/prismaService';
import { FlowersCreateDto } from './flowers.dto';

@Controller('flowers')
@UseInterceptors(LogingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) { }

  @Get('')
  @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }

  @Post('')
  @UseGuards(AuthGuard)
  create(@Body() dto: FlowersCreateDto) {
    return this.flowersService.create(dto);
  }
}
