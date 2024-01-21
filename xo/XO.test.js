const XO = require('./XO.js');

describe("basic tests for xo function to check the number of 'x's and 'o's in a string", () => {
  it('the number of x equals o in string', () => {
    expect(XO('xo')).toBeTruthy();
    expect(XO('xxOo')).toBeTruthy();
  });
  it('the dose not number of x equal o in string ', () => {
    expect(XO('xxxm')).toBeFalsy();
    expect(XO('Oo')).toBeFalsy();
    expect(XO('ooom')).toBeFalsy();
  });
});
