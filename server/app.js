const express = require('express');
const router = require('./router');

const app = express();
require('dotenv').config();

app.use(router);
app.set('port', process.env.PORT || 8000);

module.exports = app;
