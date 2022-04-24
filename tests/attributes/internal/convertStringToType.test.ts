import { convertStringToType } from '../../../src/attributes/internal/convertStringToType';

test('Values are successfully converted to boolean type', () => {
    const results = [
        convertStringToType('true', 'boolean'),
        convertStringToType('false', 'boolean'),
        convertStringToType('foo', 'boolean'),
    ];

    expect(results).toEqual([true, false, false]);
});

test('Values are successfully converted to number type', () => {
    const results = [
        convertStringToType('1', 'number'),
        convertStringToType('foo', 'number'),
    ];

    expect(results).toEqual([1, NaN]);
});

test('Unsupported type returns the original value', () => {
    const result = convertStringToType('foo', 'x' as any);

    expect(result).toBe('foo');
});
