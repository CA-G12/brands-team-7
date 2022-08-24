const { Pool } = require('pg');
require('dotenv').config();

let ssl;
let DATABASE_URL = '';
if (process.env.NODE_ENV === 'production') {
  DATABASE_URL = process.env.DATABASE_URL;
  ssl = {
    rejectUnauthorized: false,
  };
} else if (process.env.NODE_ENV === 'development') {
  DATABASE_URL = process.env.DB_URL_DEVELOPMENT;
  ssl = false;
} else if (process.env.NODE_ENV === 'test') {
  DATABASE_URL = process.env.DB_TESTING;
  ssl = false;
} else {
  throw new Error('GO TO HELL!!!!!!');
}
const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl,
});

module.exports = connection;
