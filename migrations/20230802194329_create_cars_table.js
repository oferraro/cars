/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments('ID').primary();
        table.string('Make').notNullable();
        table.string('Model').notNullable();
        table.date('BuildDate').notNullable();
        table.integer('ColourID').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cars');
};
