import { IsEnum, IsNumber, IsString } from 'class-validator';
import { OnboardingComponentEnum } from 'src/db/entities/config.entity';

export class UpdateConfigurationRequest {
  @IsNumber()
  step: number;

  @IsString()
  @IsEnum(OnboardingComponentEnum)
  component: OnboardingComponentEnum;
}
