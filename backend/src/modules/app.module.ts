import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataModule } from './data/data.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { defaultDatabaseConfig } from 'src/db/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(defaultDatabaseConfig),
    ConfigurationModule,
    DataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
