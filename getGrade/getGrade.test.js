const getGrade = require('./getGrade.js');

describe('grade book', function () {
  it('should return an A', () => {
    expect(getGrade(95, 90, 93)).toBe('A');
    expect(getGrade(100, 85, 96)).toBe('A');
    expect(getGrade(92, 93, 94)).toEqual('A');
  });
  it('should return a B', () => {
    expect(getGrade(70, 70, 100)).toEqual('B');
    expect(getGrade(82, 85, 87)).toEqual('B');
    expect(getGrade(84, 79, 85)).toEqual('B');
    expect(getGrade(89, 89, 90)).toEqual('B');
  });
  it('should return a C', function () {
    expect(getGrade(70, 70, 70)).toBe('C');
    expect(getGrade(75, 70, 79)).toBe('C');
    expect(getGrade(60, 82, 76)).toBe('C');
  });
  it('should return a D', function () {
    expect(getGrade(65, 70, 59)).toBe('D');
    expect(getGrade(66, 62, 68)).toBe('D');
    expect(getGrade(58, 62, 70)).toBe('D');
  });
  it('should return an F', function () {
    expect(getGrade(44, 55, 52)).toEqual('F');
    expect(getGrade(48, 55, 52)).toEqual('F');
    expect(getGrade(58, 59, 60)).toEqual('F');
  });
});
