/**
 * @jest-environment jsdom
 */

import { getPartialClasses } from '../../src/retrieval/getPartialClasses';

test('Successfully matches class names starting with value', () => {
    const element = document.createElement('div');

    element.classList = 'foo foobar barfoo barfoobar bar';

    const results = getPartialClasses('startingwith', element, 'foo');

    expect(Array.isArray(results)).toBe(true);
    expect(results).toEqual(['foobar']);
});

test('Successfully matches class names containing value', () => {
    const element = document.createElement('div');

    element.classList = 'foo foobar barfoo barfoobar bar';

    const results = getPartialClasses('containing', element, 'foo');

    expect(Array.isArray(results)).toBe(true);
    expect(results).toEqual(['barfoobar']);
});

test('Successfully matches class names ending with value', () => {
    const element = document.createElement('div');

    element.classList = 'foo foobar barfoo barfoobar bar';

    const results = getPartialClasses('endingwith', element, 'foo');

    expect(Array.isArray(results)).toBe(true);
    expect(results).toEqual(['barfoo']);
});

test('todo', () => {
    const element = document.createElement('div');

    element.classList = 'foo';

    // biome-ignore lint/suspicious/noExplicitAny: Testing incorrect input.
    const results = getPartialClasses('' as any, element, 'foo');

    expect(Array.isArray(results)).toBe(true);
    expect(results).toEqual([]);
});
