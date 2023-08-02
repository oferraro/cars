import { createPool } from 'mysql2/promise';

const dbConfig = {
  host: '127.0.0.1',
  port: 33060,
  user: 'root',
  password: 'secret',
  database: 'cars',
};

const pool = createPool(dbConfig);

export default pool;
