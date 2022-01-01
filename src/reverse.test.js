const reverseString = require('./reverse');

test('Capitalize String', () => {
    expect(reverseString('dario')).toMatch('oirad');
    expect(reverseString('Dario')).toBe('oiraD')
});