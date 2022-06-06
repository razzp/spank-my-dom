import { strConvert } from '../../src/utils/strConvert';

test('Converting values to `boolean` returns expected results', () => {
    expect(strConvert('true', 'boolean')).toBe(true);
    expect(strConvert('True', 'boolean')).toBe(true);
    expect(strConvert(' true ', 'boolean')).toBe(true);

    expect(strConvert('false', 'boolean')).toBe(false);
    expect(strConvert('False', 'boolean')).toBe(false);
    expect(strConvert(' false ', 'boolean')).toBe(false);
});

test('Converting values to `number` returns expected results', () => {
    expect(strConvert('1', 'number')).toBe(1);
    expect(strConvert(' 1 ', 'number')).toBe(1);

    expect(strConvert('foo', 'number')).toBeNaN();
});

test('Converting to an invalid type throws', () => {
    expect(() => strConvert('', 'foo' as any)).toThrowError();
});
