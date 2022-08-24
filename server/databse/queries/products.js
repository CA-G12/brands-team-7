const connection = require('../config/connection');

const getProducts = () => {
  const sql = 'select products.id,products.product_name,products.img,products.product_description,products.price,brands.brand_name from products join brands on products.brand_id=brands.id;';
  return connection.query(sql);
};

module.exports = getProducts;
