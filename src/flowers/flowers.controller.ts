import { Body, Controller, Get, Post, Query, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/pipe';
import { AuthGuard } from 'src/conception/guard';
import { LogingInterceptor } from 'src/conception/interceptor';
import { PrismaService } from 'src/prismaService';
import { FlowersCreateDto } from './flowers.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('flowers')
@ApiTags('flowers')
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
  @ApiResponse({
    status: 201,
    description: 'Flower created successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request',
  })
  @ApiBody({
    type: FlowersCreateDto,
    description: 'Flower data',
  })
  create(@Body() dto: FlowersCreateDto) {
    return this.flowersService.create(dto);
  }

}
