import { IsEmail, IsString, MinLength } from 'class-validator';

export class DataRequest {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  zip: string;

  @IsString()
  birthday: string;

  @IsString()
  aboutMe: string;
}
