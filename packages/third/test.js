const third = require('.');

describe('third', () => {
  it('should return correct message', () => {
    const result = third();
    expect(result).toBe('Hi from new third module');
  });
});
