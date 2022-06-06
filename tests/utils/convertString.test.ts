import { convertString } from '../../src/utils/convertString';

test('Converting values to `boolean` returns expected results', () => {
    expect(convertString('true', 'boolean')).toBe(true);
    expect(convertString('True', 'boolean')).toBe(true);
    expect(convertString(' true ', 'boolean')).toBe(true);

    expect(convertString('false', 'boolean')).toBe(false);
    expect(convertString('False', 'boolean')).toBe(false);
    expect(convertString(' false ', 'boolean')).toBe(false);
});

test('Converting values to `number` returns expected results', () => {
    expect(convertString('1', 'number')).toBe(1);
    expect(convertString(' 1 ', 'number')).toBe(1);

    expect(convertString('foo', 'number')).toBeNaN();
});

test('Converting to an invalid type throws', () => {
    expect(() => convertString('', 'foo' as any)).toThrowError();
});
