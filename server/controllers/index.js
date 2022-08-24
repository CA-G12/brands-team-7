const recieveBrands = require('./getData');
const addProductToDataBase = require('./dataPost');
const recieveProducts = require('./getProducts');
const remove=require('./delete')

module.exports = { recieveBrands, addProductToDataBase, recieveProducts,remove };
