import { formDataOmit } from '../../src/forms/formDataOmit';

test('Form data successfully has keys omitted', () => {
    const data = new FormData();

    data.set('foo', 'foo');
    data.set('bar', 'bar');
    data.set('baz', 'baz');

    const result = formDataOmit(data, 'foo', 'baz');

    expect(result).toEqual({
        bar: 'bar',
    });
});
