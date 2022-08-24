const { getProducts } = require('../databse/queries');

const recieveProducts = (req, res) => {
  getProducts()
    .then((data) => res.json(data.rows))
    .catch(() => res.send('JUST DIE'));
};
module.exports = recieveProducts;
