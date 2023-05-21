const { getLogger, logger } = require('../src');

describe('logger', () => {
  it('should give a default instance', () => {
    expect(logger).toBeDefined();
  });
  it('Should return default instance when name is not provided', () => {
    const actual = getLogger();
    expect(actual).toBe(logger);
  });
  it('Should return different instances for different names', () => {
    const logger1 = getLogger('test1');
    const logger2 = getLogger('test2');
    expect(logger1).not.toBe(logger2);
  });
  it('Should return same instance for same name', () => {
    const logger1 = getLogger('test1');
    const logger2 = getLogger('test1');
    expect(logger1).toBe(logger2);
  });
});
