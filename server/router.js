/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { recieveBrands, dataPost } = require('./controllers');

router.get('/brands', recieveBrands);
module.exports = router;
