const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('./connection');

const database = () => {
  const sql = readFileSync(join(__dirname, '..', 'build.sql'));
  return connection.query(sql.toString());
};

module.exports = database;
