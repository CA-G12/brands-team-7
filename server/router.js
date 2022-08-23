const router = require('express').Router();
const { recieveData } = require('./controllers');

router.get('/', recieveData);
module.exports = router;
