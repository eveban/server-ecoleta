import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('points_items', table => {
    table.increments('id').primary();
    /** mysql */
    // table.integer('points_id').notNullable().unsigned();
    /** sqlite3 */
    table.integer('points_id').notNullable();
    table.foreign('points_id').references('id').inTable('points');

    /** sqlite3 */
    table.integer('items_id').notNullable();
    // mysql
    // table.integer('items_id').notNullable().unsigned();
    table.foreign('items_id').references('id').inTable('items');
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable('items');
}
