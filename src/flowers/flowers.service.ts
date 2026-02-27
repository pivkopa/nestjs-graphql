import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
  findAll() {
    return [
      {
        name: 'rose',
        price: 10,
        color: 'red'
      },
      {
        name: 'tulip',
        price: 10,
        color: 'red'
      },
      {
        name: 'lily',
        price: 10,
        color: 'red'
      }
    ]
  }
}
