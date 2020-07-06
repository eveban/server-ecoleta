"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

async function up(knex) {
  return knex.schema.createTable('points_items', table => {
    table.increments('id').primary();
    table.integer('points_id').notNullable();
    table.foreign('points_id').references('id').inTable('points');
    table.integer('items_id').notNullable();
    table.foreign('items_id').references('id').inTable('items');
  });
}

async function down(knex) {
  return knex.schema.dropTable('items');
}