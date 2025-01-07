import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Config } from 'src/db/entities/config.entity';
import { UpdateConfigurationRequest } from './requests/update-configuration.request';

@Injectable()
export class ConfigurationService {
  constructor(
    @InjectRepository(Config)
    private readonly configRepository: Repository<Config>,
  ) {}

  async getConfig(): Promise<Config[]> {
    return this.configRepository.find();
  }

  async updateConfig(config: UpdateConfigurationRequest[]): Promise<void> {
    await this.configRepository.softDelete({});
    const configEntities = this.convertToConfigEntity(config);
    await this.configRepository.insert(configEntities);
  }

  private convertToConfigEntity(
    configs: UpdateConfigurationRequest[],
  ): Config[] {
    return configs.map((config) => {
      const configEntity = new Config();
      configEntity.step = config.step;
      configEntity.component = config.component;
      return configEntity;
    });
  }
}
