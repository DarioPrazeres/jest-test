const swiftString = require('./ceasearCifer');

test('swift Character', () => {
  expect(swiftString('dario', 1)).toBe('ebsjp');
  expect(swiftString('mauro', 2)).toBe('ocwtq');
  expect(swiftString('ze', 1)).toBe('af');
  expect(swiftString('ze', 2)).toBe('bg');
});