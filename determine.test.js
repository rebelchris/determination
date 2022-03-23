const {isNumber} = require('./determine');
test('Validate a number', () => {
    expect(isNumber(1)).toBeTruthy();
});
test('Invalidate a string', () => {
    expect(isNumber('ABC')).toBeFalsy();
});
