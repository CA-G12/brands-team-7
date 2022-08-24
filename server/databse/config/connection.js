const { Pool } = require('pg');
require('dotenv').config();

// const { DB_URL_DEVELOPMENT } = process.env;

// if (!DB_URL_DEVELOPMENT) {
//   throw new Error('GO TO HELL');
// }
console.log(process.env.NODE_ENV);
let ssl;
let DATABASE_URL = '';
if (process.env.NODE_ENV === 'production') {
  DATABASE_URL = process.env.DB_PRODUCTION;
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
  throw new Error('GO TO HELL');
}

const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl,
});

module.exports = connection;
