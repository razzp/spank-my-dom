import { JSDOM } from 'jsdom';

import { asKeyValuePairs } from '../../../src/forms/internal/asKeyValuePairs';

beforeAll(() => {
    const { window } = new JSDOM(`<!DOCTYPE html>
        <form>
            <input type="text" name="foo" value="1">
            <input type="hidden" name="bar" value="2">
        </form>
    `);

    // Ensure that required globals are set.
    global.document = window.document;
    global.HTMLFormElement = window.HTMLFormElement;
    global.FormData = window.FormData;
});

test('Given a form element, returns an array of key/value pairs', () => {
    const form = document.querySelector<HTMLFormElement>('form');

    if (!form) {
        throw new Error('Element not found');
    }

    const pairs = asKeyValuePairs(form);

    expect(pairs).toEqual([
        ['foo', '1'],
        ['bar', '2'],
    ]);
});

test('Given an object, returns an array of key/value pairs', () => {
    const pairs = asKeyValuePairs({
        foo: '1',
        bar: '2',
    });

    expect(pairs).toEqual([
        ['foo', '1'],
        ['bar', '2'],
    ]);
});

test('Given an array of key/value pairs, returns an array of key/value pairs', () => {
    const pairs = asKeyValuePairs([
        ['foo', '1'],
        ['bar', '2'],
    ]);

    expect(pairs).toEqual([
        ['foo', '1'],
        ['bar', '2'],
    ]);
});

test('Given an array containing unsuitable members, returns a sanitised array of key/value pairs', () => {
    const pairs = asKeyValuePairs([
        'foo',
        ['bar', '1'],
        ['baz', '1', '2'],
    ] as any);

    expect(pairs).toEqual([['bar', '1']]);
});

test('Given an incompatible item, returns an empty array', () => {
    const pairs = asKeyValuePairs(null as any);

    expect(pairs).toEqual([]);
});
