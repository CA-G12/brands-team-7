const connection = require('../config/connection');

const getProducts = (id) => {
    const sql = `select * from products where id=${id};`;
    return connection.query(sql);
  };
  
module.exports = getProducts;  