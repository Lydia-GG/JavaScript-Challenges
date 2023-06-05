const getCount = require('./getCount.js');

describe('Vowels Count Tests', function () {
  it("should return 5 for 'abracadabra'", function () {
    expect(getCount('abracadabra')).toEqual(5);
  });
  it("should return 4 for 'pear tree'", function () {
    expect(getCount('pear tree')).toEqual(4);
  });
  it("should return 13 for 'o a kak ushakov lil vo kashu kakao'", function () {
    expect(getCount('o a kak ushakov lil vo kashu kakao')).toEqual(13);
  });
  it("should return 0 for 'my pyx'", function () {
    expect(getCount('my pyx')).toEqual(0);
  });
});
