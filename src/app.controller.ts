import { Controller, Get, ParseArrayPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('pipe') // http://localhost:3000/pipe?ids=1,a,null,3
  public helloPipe(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ): number[] {
    return ids;
  }
}
