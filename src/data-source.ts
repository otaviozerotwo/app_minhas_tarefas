import 'reflect-metadata';
import { DataSource } from "typeorm/browser";
import { Task } from './entities/Task';

export const AppDataSource = new DataSource({
  type: 'react-native',
  database: 'to_do_list.db',
  location: 'default',
  synchronize: true,
  logging: ['error', 'query', 'warn', 'info'],
  entities: [Task],
});