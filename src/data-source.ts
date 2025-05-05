import 'reflect-metadata';
import { DataSource } from "typeorm/browser";
import { Task } from './entities/Task';
import * as SQLite from 'expo-sqlite';

export const AppDataSource = new DataSource({
  type: 'expo',
  driver: SQLite,
  database: 'to_do_list.db',
  synchronize: true,
  logging: true,
  entities: [Task],
});