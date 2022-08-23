const { Pool } = require('pg');
require('dotenv').config();

const { HEROKU_POSTGRESQL_YELLOW_URL } = process.env;

if (!HEROKU_POSTGRESQL_YELLOW_URL) {
  throw new Error('GO TO HELL');
}

const connection = new Pool({
  connectionString: HEROKU_POSTGRESQL_YELLOW_URL,
  ssl: false,
});

module.exports = connection;
