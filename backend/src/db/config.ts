import { DataSourceOptions } from 'typeorm';

export const defaultDatabaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  migrationsRun: true,
  migrations: [`${__dirname}/migrations/**`],
  entities: [`${__dirname}/entities/**`],
  synchronize: true,
};
