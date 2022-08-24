/* eslint-disable no-unused-vars */
const router = require('express').Router();
const { recieveData, dataPost } = require('./controllers');

router.get('/', recieveData);
module.exports = router;
