import { PrismaService } from 'src/prismaService';
import { FlowersService } from './flowers.service';
import { ConfigService } from '@nestjs/config';

export class FlowersDynamicModule {
  static forRoot(options: any) {
    return {
      module: FlowersDynamicModule,
      providers: [FlowersService, PrismaService, ConfigService],
      exports: [FlowersService],
    };
  }
}
