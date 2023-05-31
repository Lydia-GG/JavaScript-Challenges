const sumStrings = require('./sumStrings.js');

describe('Tests', () => {
  it('test', () => {
    expect(sumStrings('123', '456')).toEqual('579');
  });
});
