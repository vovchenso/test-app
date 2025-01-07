import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { Data } from 'src/db/entities/data.entity';
import { User } from 'src/db/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data, User])],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
