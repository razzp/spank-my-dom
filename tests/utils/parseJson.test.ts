import { parseJson } from '../../src/utils/parseJson';

test('Given a valid JSON string, parses and returns the value', () => {
    const obj = {
        foo: 'bar',
    };

    expect(parseJson(JSON.stringify(obj))).toEqual(obj);
});

test('Given a reviver function, transforms the parsed value before returning', () => {
    const obj = {
        foo: 'bar',
    };

    expect(
        parseJson(JSON.stringify(obj), (key, value) =>
            key === 'foo' ? 'baz' : value
        )
    ).toEqual({
        foo: 'baz',
    });
});

test('Given an invalid input, throws', () => {
    expect(() => parseJson('#')).toThrow(SyntaxError);
});
