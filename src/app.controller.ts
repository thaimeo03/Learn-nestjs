import { Controller, Get, Post } from '@nestjs/common';
import { AppService, IHello } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello') // route
  getHello(): IHello {
    const hello = this.appService.getHello();
    return hello;
  }

  @Post('cat')
  getCat(): string {
    return this.appService.getCat();
  }
}
