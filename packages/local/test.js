const local = require('.');

describe('local', () => {
  it('should return correct message', () => {
    const result = firlocalst();
    expect(result).toBe('Hi from the local module');
  });
});
