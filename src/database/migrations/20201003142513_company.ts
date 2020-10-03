import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Company', table => {
    table.increments('id').primary();
    table.string('name', 60).notNullable();
    table.string('catchPhrase', 100).notNullable();
    table.string('bs', 80).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('Company');
}
