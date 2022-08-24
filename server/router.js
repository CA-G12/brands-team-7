/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { recieveBrands, addProductToDataBase, recieveProducts } = require('./controllers');

router.get('/brands', recieveBrands);
router.post('/brands', addProductToDataBase);
router.get('/products', recieveProducts);
module.exports = router;
