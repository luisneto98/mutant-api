import { Module, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import * as Knex from 'knex';
import * as Objection from 'objection';
import * as config from '../../knexfile';

@Module({})
export class DatabaseModule implements OnApplicationBootstrap, OnApplicationShutdown {
    private connection: Knex;
  
    public async onApplicationBootstrap() {
      this.connection = Knex(config);
      Objection.Model.knex(this.connection);
  
      await this.connection.migrate.latest();
  
      console.log('DATABASE READY');
    }
  
    public async onApplicationShutdown() {
      await this.connection.destroy();
    }
  }
  