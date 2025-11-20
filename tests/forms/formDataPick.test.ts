import { formDataPick } from '../../src/forms/formDataPick';

test('Form data successfully is successfully filtered', () => {
    const data = new FormData();

    data.set('foo', 'foo');
    data.set('bar', 'bar');
    data.set('baz', 'baz');

    const result = formDataPick(data, 'foo', 'baz');

    expect(result).toEqual({
        foo: 'foo',
        baz: 'baz',
    });
});

test("Trying to filter by keys that don't exist successfully throws", () => {
    const data = new FormData();

    expect(() => formDataPick(data, 'foo', 'baz')).toThrow();
});
