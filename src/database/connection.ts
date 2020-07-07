import knex from 'knex';
import path from 'path';

const connection = knex({
  // client: 'sqlite3',
  client: 'mysql',
  connection: {
    host: '187.9.38.148',
    port: 14001,
    user: 'root',
    password: '123456',
    database: 'ecoleta',
  },
  // connection: {
  //   filename: path.resolve(__dirname, 'database.sqlite'),
  // },
  useNullAsDefault: true,
});

export default connection;
