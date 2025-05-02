import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  dueDate: string;

  @Column({ type: 'text', nullable: true })
  priority: string;

  @Column({ type: 'text', nullable: true })
  category: string;

  @Column({ type: 'text', default: 'pending' })
  status: 'pending' | 'completed';
}