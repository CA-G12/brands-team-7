/* eslint-disable indent */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
const database = require('../server/databse/config/build');
const connection = require('../server/databse/config/connection');

const { getBrands, addProduct } = require('../server/databse/queries');

beforeEach(() => database());

afterAll(() => connection.end());

test('TEST', () => {
  return getBrands()
  .then((data) => {
  expect(data.rows.length).toBe(4);
    });
});

test('TEST INSERTION', () => {
  return addProduct('gucci', 'blabla.com', 'blablablablablabla', 656565, 2)
    .then((data) => {
      expect(data.rows[0].product_name).toBe('gucci');
    });
});
