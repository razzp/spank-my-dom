import { formDataToSearchParams } from '../../src/forms/formDataToSearchParams';

test('Successfully returns populated URLSearchParams instance', () => {
    const formData = new FormData();

    formData.append('foo', 'bar');

    const searchParams = formDataToSearchParams(formData);

    expect(searchParams).toBeInstanceOf(URLSearchParams);
    expect(searchParams.get('foo')).toBe('bar');
});

test('File is successfully handled using the default handler', () => {
    const formData = new FormData();
    const file = new File([], 'bar');

    formData.append('foo', file);

    const searchParams = formDataToSearchParams(formData);

    expect(searchParams).toBeInstanceOf(URLSearchParams);
    expect(searchParams.get('foo')).toBe('bar');
});

test('File is successfully handles using a custom handler', () => {
    const formData = new FormData();
    const file = new File([], 'bar');

    formData.append('foo', file);

    const searchParams = formDataToSearchParams(formData, () => 'baz');

    expect(searchParams).toBeInstanceOf(URLSearchParams);
    expect(searchParams.get('foo')).toBe('baz');
});
