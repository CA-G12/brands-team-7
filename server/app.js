const path = require('path');
const express = require('express');
const router = require('./router');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.static(path.join(__dirname, '..', 'client')),
);

app.use(router);
app.set('port', process.env.PORT || 8000);

module.exports = app;
