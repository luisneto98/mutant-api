import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('User', table => {
    table
      .integer('id')
      .primary()
      .unique();
    table.string('name', 100).notNullable();
    table
      .string('username', 50)
      .notNullable()
      .unique();
    table
      .integer('contactId')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('Contact');
    table
      .integer('addressId')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('Address');
    table
      .integer('companyId')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('Company');

  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('User');
}
