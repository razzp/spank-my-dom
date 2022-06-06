import { toBoolean } from '../../src/string/toBoolean';

test('Given a value that can be narrowed to "true", returns `true`', () => {
    expect(toBoolean('true')).toBe(true);
    expect(toBoolean('True')).toBe(true);
    expect(toBoolean(' true ')).toBe(true);
});

test('Given a value that cannot be narrowed to "true", returns `false`', () => {
    expect(toBoolean('false')).toBe(false);
    expect(toBoolean('False')).toBe(false);
    expect(toBoolean(' false ')).toBe(false);
    expect(toBoolean('')).toBe(false);
    expect(toBoolean('foo')).toBe(false);
});
