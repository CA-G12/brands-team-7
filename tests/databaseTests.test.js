/* eslint-disable no-undef */
const database = require('../server/databse/config/build');
const connection = require('../server/databse/config/connection');

const { getData } = require('../server/databse/queries');

beforeEach(() => database());

afterAll(() => connection.end());

// test('try', () => {
//   expect(5).toBe(5);
// });
// test('TEST get users', () => {
//   expect(getData().then((data) => data.rows.length)).toBe(4);
// });

test('TEST get users', () => getData()
  .then((data) => {
    expect(data.rows.length).toBe(4);
  }));
