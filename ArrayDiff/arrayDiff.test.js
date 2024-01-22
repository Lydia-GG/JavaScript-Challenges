const arrayDiff = require('./arrayDiff.js');

describe('basic test for arrayDiff function', () => {
  it('remove all values from first array, which are present in second array', () => {
    expect(arrayDiff([1, 2], [1])).toEqual([2]);
    expect(arrayDiff([1, 2, 2], [1])).toEqual([2, 2]);
    expect(arrayDiff([1, 2, 2], [2])).toEqual([1]);
    expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
  });
  it('get empty array when first array empty', () => {
    expect(arrayDiff([], [1, 2])).toEqual([]);
  });
  it('get all values in first array when second array empty', () => {
    expect(arrayDiff([1, 2, 2], [])).toEqual([1, 2, 2]);
  });
});
