import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Data {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'about_me', nullable: true })
  aboutMe: string | null;

  @Column({ nullable: true })
  birthday: string | null;

  @Column({ nullable: true })
  street: string | null;

  @Column({ nullable: true })
  city: string | null;

  @Column({ nullable: true })
  state: string | null;

  @Column({ nullable: true })
  zip: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
