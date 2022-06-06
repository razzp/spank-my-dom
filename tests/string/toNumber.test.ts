import { toNumber } from '../../src/string/toNumber';

test('Given a value that can be converted to a number, returns the parsed number', () => {
    expect(toNumber('1')).toBe(1);
    expect(toNumber(' 1 ')).toBe(1);
});

test('Given a value that cannot be converted to a number, returns `NaN``', () => {
    expect(toNumber('foo')).toBeNaN();
});
