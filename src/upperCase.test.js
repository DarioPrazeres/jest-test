const upperLetter = require('./upperCase');

test('adds 1 + 2 to equal 3', () => {
  expect(upperLetter('dario')).toBe('DARIO');
});