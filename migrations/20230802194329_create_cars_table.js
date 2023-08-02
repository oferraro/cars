/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments('id').primary();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.date('build_date').notNullable();
        table.integer('colour_id').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cars');
};
