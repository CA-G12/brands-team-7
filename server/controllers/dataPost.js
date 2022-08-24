/* eslint-disable no-unused-vars */
const { addProduct } = require('../databse/queries');

const addProductToDataBase = (req, res) => {
  console.log(req.body);

  const {
    name, image, description, price, brandid,
  } = req.body;
  // console.log(111111);
  addProduct(name, image, description, price, brandid).then((data) => res.status(201).json({
    message: 'success',
    data: data.rows[0],
  }))
    .catch((err) => console.log(err));
};

module.exports = addProductToDataBase;
