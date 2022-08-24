const { getBrands } = require('../databse/queries');

const recieveBrands = (req, res) => {
  getBrands()
    .then((data) => res.json(data.rows))
    .catch(() => res.send('JUST DIE'));
};
module.exports = recieveBrands;
