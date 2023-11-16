const sum = require('./sum.js');

describe('Basic tests sum', () => {
  it('sum of empty array equal 0', () => {
    expect(sum([])).toEqual(0);
  });
  it('sum of arrays number positive and negative', () => {
    expect(sum([1, 5.2, 4, 0, -1])).toBe(9.2);
  });
});
