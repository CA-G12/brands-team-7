/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { recieveBrands, addProductToDataBase, recieveProducts,remove } = require('./controllers');

router.get('/brands', recieveBrands);
router.post('/brands', addProductToDataBase);
router.get('/products', recieveProducts);
router.post('/remove',remove)
module.exports = router;
