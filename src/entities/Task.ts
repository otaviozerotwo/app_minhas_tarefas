import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  task: string;

  @Column({ type: 'text', default: 'pending' })
  status: 'pending' | 'completed';
}