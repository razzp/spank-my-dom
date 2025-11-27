import { parseJson } from '../../src/conversion/parseJson';

test('Successfully parses JSON string', () => {
    const object = {
        foo: 'bar',
    };

    expect(parseJson(JSON.stringify(object))).toEqual(object);
});

test('Reviver successfully transforms results', () => {
    const object = {
        foo: 'bar',
        bar: 'baz',
    };

    expect(
        parseJson(JSON.stringify(object), (key, value) => {
            return key === 'foo' ? 'qux' : value;
        }),
    ).toEqual({
        foo: 'qux',
        bar: 'baz',
    });
});
