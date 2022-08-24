const connection = require('../config/connection');

const addUser = (name, img, description, price, brandId) => {
  const sql = {
    text: 'INSERT INTO products (product_name,img,product_description,price,brand_id)',
    values: [name, img, description, price, brandId],
  };
  return connection.query(sql);
};

module.exports = addUser;
