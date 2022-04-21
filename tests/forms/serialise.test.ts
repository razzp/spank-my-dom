import { JSDOM } from 'jsdom';

import { serialise } from '../../src/forms/serialise';

function makeDOM(html: string): void {
    const { window } = new JSDOM(html);

    // Ensure that required globals are set.
    global.document = window.document;
    global.FormData = window.FormData;
    global.URLSearchParams = window.URLSearchParams;
    global.HTMLFormElement = window.HTMLFormElement;
}

test('Given a form element, serialises its form data into a valid query string', () => {
    makeDOM(`<!DOCTYPE html>
        <form>
            <input type="text" name="foo" value="1">
            <input type="hidden" name="bar" value="2">
        </form>
    `);

    const form = document.querySelector<HTMLFormElement>('form');

    if (!form) {
        throw new Error('Element not found');
    }

    const serialised = serialise(form);

    expect(serialised).toEqual('foo=1&bar=2');
});

test('Given an object, serialises it into a valid query string', () => {
    const serialised = serialise({
        foo: 1,
        bar: '2',
        baz: [1, 2, 3],
        qux: null,
        quux: undefined,
    });

    expect(decodeURIComponent(serialised)).toEqual(
        'foo=1&bar=2&baz=1,2,3&qux=null&quux=undefined'
    );
});

test('Given an array of key/value pairs, serialises it into a valid query string', () => {
    const serialised = serialise([
        ['foo', 1],
        ['bar', '2'],
        ['baz', [1, 2, 3]],
        ['qux', null],
        ['quux', undefined],
    ]);

    expect(decodeURIComponent(serialised)).toEqual(
        'foo=1&bar=2&baz=1,2,3&qux=null&quux=undefined'
    );
});

test('Special characters are successfully encoded', () => {
    const serialised = serialise([['foo', [1, 2, 3]]]);

    expect(serialised).toEqual('foo=1%2C2%2C3');
});

test('Given multiple items, concatenates and serialises them into a valid query string', () => {
    makeDOM(`<!DOCTYPE html>
        <form>
            <input type="text" name="foo" value="1">
        </form>
        <form>
            <input type="hidden" name="bar" value="2">
        </form>
    `);

    const forms = document.querySelectorAll<HTMLFormElement>('form');
    const serialised = serialise(...forms, [['baz', 3]], { qux: 4 });

    expect(serialised).toEqual('foo=1&bar=2&baz=3&qux=4');
});
