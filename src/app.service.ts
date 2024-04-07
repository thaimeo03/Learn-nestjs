import { Injectable } from '@nestjs/common';

export interface IHello {
  name: string;
  age: number;
}

@Injectable()
export class AppService {
  getHello(): IHello {
    return {
      name: 'Thai',
      age: 18,
    };
  }

  getCat(): string {
    return 'cat';
  }
}
