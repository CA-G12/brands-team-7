const connection = require('../config/connection');

const getData = () => {
  const sql = 'select * from brands;';
  return connection.query(sql);
};

module.exports = getData;
