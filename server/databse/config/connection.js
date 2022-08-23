const { Pool } = require('pg');
require('dotenv').config();

const { DB_URL_DEVELOPMENT } = process.env;

if (!DB_URL_DEVELOPMENT) {
  throw new Error('GO TO HELL');
}

const connection = new Pool({
  connectionString: DB_URL_DEVELOPMENT,
  ssl: false,
});

module.exports = connection;
