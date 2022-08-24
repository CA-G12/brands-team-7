/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { recieveBrands, addProductToDataBase } = require('./controllers');

router.get('/brands', recieveBrands);
router.post('/brands', addProductToDataBase);
module.exports = router;
