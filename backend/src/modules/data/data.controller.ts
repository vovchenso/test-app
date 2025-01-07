import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataService } from './data.service';
import { Data } from 'src/db/entities/data.entity';
import { DataRequest } from './requests/data.request';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getData(): Promise<Data[]> {
    return this.dataService.getData();
  }

  @Post()
  async saveOnboardingData(
    @Body() body: DataRequest,
  ): Promise<{ result: string }> {
    await this.dataService.saveUserData(body);
    return { result: 'success' };
  }
}
