// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 33060,
      database: 'cars',
      user:     'root',
      password: 'secret',
      createDatabase: true
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

};
