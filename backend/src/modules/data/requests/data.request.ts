import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  ValidateIf,
} from 'class-validator';

export class DataRequest {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  @IsOptional()
  @ValidateIf((o) => o.street !== undefined)
  street: string;

  @IsString()
  @IsOptional()
  @ValidateIf((o) => o.city !== undefined)
  city: string;

  @IsString()
  @IsOptional()
  @ValidateIf((o) => o.state !== undefined)
  state: string;

  @IsString()
  @IsOptional()
  @ValidateIf((o) => o.zip !== undefined)
  zip: string;

  @IsDateString()
  @IsOptional()
  @ValidateIf((o) => o.birthday !== undefined)
  birthday: string;

  @IsString()
  @IsOptional()
  @ValidateIf((o) => o.aboutMe !== undefined)
  aboutMe: string;
}
