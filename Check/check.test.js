const check = require('./check.js');

describe('Basic tests check values of array', () => {
  it('if the array includes the value return true', () => {
    expect(check([66, 101], 66)).toBe(true);
    expect(check(['t', 'e', 's', 't'], 'e')).toBeTruthy();
    expect(check([101, 45, 75, 105, 99, 107], 107)).toBeTruthy();
  });
  it("if the array doesn't include the value return false", () => {
    expect(check(['what', 'a', 'great', 'kata'], 'kat')).toBeFalsy();
  });
});
