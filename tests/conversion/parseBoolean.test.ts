import { parseBoolean } from '../../src/conversion/parseBoolean';

test('Input is successfully parsed as a boolean', () => {
    expect(parseBoolean('true')).toBe(true);
    expect(parseBoolean(' true ')).toBe(true);
    expect(parseBoolean('false')).toBe(false);
    expect(parseBoolean('foo')).toBe(false);
    expect(parseBoolean('')).toBe(false);
});
