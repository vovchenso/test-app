import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { Config } from 'src/db/entities/config.entity';
import { UpdateConfigurationRequest } from './requests/update-configuration.request';

@Controller('configuration')
export class ConfigurationController {
  constructor(private readonly configurationService: ConfigurationService) {}

  @Get()
  async getConfig(): Promise<Config[]> {
    return this.configurationService.getConfig();
  }

  @Post()
  async postConfig(
    @Body() body: UpdateConfigurationRequest[],
  ): Promise<{ result: string }> {
    await this.configurationService.updateConfig(body);
    return { result: 'success' };
  }
}
