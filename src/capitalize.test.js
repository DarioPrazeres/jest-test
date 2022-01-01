const firstLetter = require('./capitalize');

test('Capitalize String', () => {
  expect(firstLetter('dario')).toBe('Dario');
});