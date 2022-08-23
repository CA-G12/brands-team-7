const { getData } = require('../databse/queries');

const recieveData = (req, res) => {
  getData()
    .then((data) => res.json(data.rows))
    .catch(() => res.send('JUST DIE'));
};
module.exports = recieveData;
