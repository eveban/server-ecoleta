import path from 'path';

module.exports = {
  client: 'mysql',
  connection: {
    host: '187.9.38.148',
    port: 14001,
    user: 'root',
    password: '123456',
    database: 'ecoleta',
  },
  useNullAsDefault: true,
  // connection: {
  //   filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
  // },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
};
