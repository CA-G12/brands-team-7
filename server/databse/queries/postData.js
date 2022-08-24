const connection = require('../config/connection');

const addProduct = (name, image, description, price, brandid) => connection.query(
  'INSERT INTO products (product_name,img,product_description,price, brand_id) values($1, $2, $3 ,$4 ,$5) returning *',
  [name, image, description, price, brandid],
);

module.exports = addProduct;
