const squareDigits = require('./squareDigits.js');

describe('Basic tests squareDigits function', () => {
  it('return square number for every digit in the input', () => {
    expect(squareDigits(3212)).toBe(9414);
    expect(squareDigits(2112)).toBe(4114);
  });
  it('return zero when the input is zero', () => {
    expect(squareDigits(0)).toBe(0);
  });
});
