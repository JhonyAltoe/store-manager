const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'db',
  user: 'root',
  database: 'StoreManager',
  password: 'password',
  port: 3306,
});

module.exports = connection;