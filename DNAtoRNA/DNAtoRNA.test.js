const DNAtoRNA = require('./DNAtoRNA.js');

describe('Basic tests DNAtoRNA', () => {
  it('replace T to U', () => {
    expect(DNAtoRNA('TTTT')).toBe('UUUU');
    expect(DNAtoRNA('GCAT')).toEqual('GCAU');
    expect(DNAtoRNA('GACCGCCGCC')).toBe('GACCGCCGCC');
  });
});
