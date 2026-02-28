import { Module } from '@nestjs/common';
import { FlowersGraphqlService } from './flowers-graphql.service';
import { FlowersGraphqlResolver } from './flowers-graphql.resolver';
import { FlowersService } from 'src/flowers/flowers.service';
import { PrismaService } from 'src/prismaService';

@Module({
  providers: [
    FlowersGraphqlResolver,
    FlowersGraphqlService,
    FlowersService,
    PrismaService],
})
export class FlowersGraphqlModule { }
