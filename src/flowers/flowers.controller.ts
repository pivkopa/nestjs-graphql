import { Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/pipe';
import { AuthGuard } from 'src/conception/guard';
import { LogingInterceptor } from 'src/conception/interceptor';

@Controller('flowers')
@UseInterceptors(LogingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) { }

  @Get('')
  @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }
}
