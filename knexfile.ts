/* eslint-disable @typescript-eslint/no-var-requires */
import 'dotenv/config';
import { parsed as dotenv } from 'dotenv/config';
import * as Knex from 'knex';
import * as path from 'path';
import * as fs from 'fs';

let migrationFolder = path.join(__dirname, 'src', 'database', 'migrations');

if (!fs.existsSync(migrationFolder)) {
  migrationFolder = path.join(__dirname, 'bin', 'database', 'migrations');
}

module.exports = {
  client: 'mysql',
  connection: {
    host: process.env.DATABASE_HOST || dotenv.DATABASE_HOST,
    database: process.env.DATABASE_DB || dotenv.DATABASE_DB,
    user: process.env.DATABASE_USER || dotenv.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD || dotenv.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT || dotenv.DATABASE_PORT
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: migrationFolder
  },
  seeds: {
    directory: path.join(migrationFolder, 'seeds')
  },
  debug: false
} as Knex.Config;