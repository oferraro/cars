/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('colours').del()
  await knex('colours').insert([
    {id: 1, name: 'red'},
    {id: 2, name: 'blue'},
    {id: 3, name: 'white'},
    {id: 4, name: 'black'}
  ]);
};
