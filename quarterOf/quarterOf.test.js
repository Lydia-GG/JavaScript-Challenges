const quarterOf = require('./quarterOf.js');

describe('basic test for quarterOf function', () => {
  it('test right input between 1 and 12', () => {
    expect(quarterOf(3)).toEqual(1);
    expect(quarterOf(8)).toEqual(3);
    expect(quarterOf(11)).toEqual(4);
  });
  it('test wrong input', () => {
    expect(quarterOf(14)).toBe('not a valid input');
  });
});
