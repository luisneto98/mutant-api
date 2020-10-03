import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Contact', table => {
    table.increments('id').primary();
    table.string('phone', 30).notNullable();
    table.string('website', 40).nullable();
    table.string('email', 50).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('Contact');
}
