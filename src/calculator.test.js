const sum = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.sum(1, 2)).toEqual(3);
});
test('adds 2 * 2 to equal 4', () => {
    expect(calculator.mult(2, 2)).toBe(4);
});
test('adds 2 - 2 to equal 0', () => {
    expect(calculator.subctract(2, 2)).toEqual(0);
});
test('adds 2 / 2 to equal 1', () => {
    expect(calculator.div(2, 2)).toEqual(1);
});