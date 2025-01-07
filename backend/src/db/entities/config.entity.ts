import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum OnboardingComponentEnum {
  AboutMe = 'AboutMe',
  Address = 'Address',
  Birthday = 'Birthday',
}

@Entity()
export class Config {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  step: number;

  @Column()
  component: OnboardingComponentEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
