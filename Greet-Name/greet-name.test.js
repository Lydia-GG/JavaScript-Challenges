const greet = require('./greet-name.js');

describe('Basic tests for greet function', () => {
  it('should return correct texts with the input name', () => {
    expect(greet('Ryan')).toBe('Hello, Ryan how are you doing today?');
    expect(greet('Shingles')).toBe('Hello, Shingles how are you doing today?');
  });
});
