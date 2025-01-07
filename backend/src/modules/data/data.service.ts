import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data } from 'src/db/entities/data.entity';
import { User } from 'src/db/entities/user.entity';
import { DataRequest } from './requests/data.request';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Data)
    private readonly dataRepository: Repository<Data>,
  ) {}

  async getData(): Promise<Data[]> {
    return this.dataRepository.find({
      relations: ['user'],
      order: { createdAt: 'DESC' },
    });
  }

  async saveUserData(request: DataRequest): Promise<void> {
    const userExists = await this.checkUserExists(request.email);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const user = await this.saveUser(request);
    await this.saveData(user, request);
  }

  private async checkUserExists(email: string): Promise<boolean> {
    return await this.userRepository.existsBy({ email });
  }

  private saveUser(request: DataRequest): Promise<User> {
    const user = new User();
    user.email = request.email;
    user.password = request.password;
    return this.userRepository.save(user);
  }

  private saveData(user: User, request: DataRequest): Promise<Data> {
    const data = new Data();
    data.userId = user.id;
    data.street = request.street;
    data.city = request.city;
    data.state = request.state;
    data.zip = request.zip;
    data.birthday = request.birthday;
    data.aboutMe = request.aboutMe;

    return this.dataRepository.save(data);
  }
}
