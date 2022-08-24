const connection = require('../config/connection');

const deleteQ = (id) => {
    const sql = `delete from products where id=${id};`;
    return connection.query(sql);
  };
  
module.exports = deleteQ ; 