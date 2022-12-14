/* eslint-disable no-unused-vars */
const { addProduct } = require('../databse/queries');

const addProductToDataBase = (req, res) => {

  const {
    name, image, description, price, brandid,
  } = req.body;
  // console.log(111111);
  addProduct(name, image, description, price, brandid).then((data) => {
    const productId = data.rows[0].id
    res.status(201).json({
      message: 'success',
      data: data.rows[0],
    })
  })
    .catch((err) => console.log(err));
};

module.exports = addProductToDataBase;
