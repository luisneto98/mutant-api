import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Address', table => {
    table.increments('id').primary();
    table.string('street', 100).notNullable();
    table.string('suite', 50).notNullable();
    table.string('city', 50).notNullable();
    table.string('zipcode', 25).notNullable();
    table.string('lat', 20).notNullable();
    table.string('lng', 20).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('Address');
}
