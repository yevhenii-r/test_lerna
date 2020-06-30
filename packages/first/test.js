const first = require('.');

describe('first', () => {
  it('should return correct message', () => {
    const result = first();
    expect(result).toBe('Hi from updated first module');
  });
});
