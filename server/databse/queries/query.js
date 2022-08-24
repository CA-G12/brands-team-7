const connection = require('../config/connection');

const getBrands = () => {
  const sql = 'select * from brands;';
  return connection.query(sql);
};

module.exports = getBrands;
