const second = require('.');

describe('second', () => {
  it('should return correct message', () => {
    const result = second();
    expect(result).toBe('Hi from updated second module');
  });
});
