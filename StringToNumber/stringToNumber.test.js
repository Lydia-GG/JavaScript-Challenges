const stringToNumber = require('./stringToNumber.js');

describe('stringToNumber', function () {
  it('should change string type to number', function () {
    expect(stringToNumber('1234')).toBe(1234);
    expect(stringToNumber('605')).toEqual(605);
    expect(stringToNumber('1405')).toEqual(1405);
    expect(stringToNumber('-7')).toEqual(-7);
  });
});
