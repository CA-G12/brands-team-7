/* eslint-disable no-unused-vars */
const { addUser } = require('../databse/queries');

const dataPost = (req, res) => {
  const {
    name, img, description, price, brandId,
  } = req.body;
  addUser(name, img, description, price, brandId)
    .then((data) => data.redirect('/'))
    .catch(() => console.log('GO TO HELL'));
};

module.exports = dataPost;
