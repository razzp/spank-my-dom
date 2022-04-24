import { JSDOM } from 'jsdom';

import { getAttribute } from '../../src/attributes/getAttribute';

let globalTarget: Element;

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" foo="bar" baz="1" qux="true" quux="false"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;

    const target = document.querySelector('.target');

    target && (globalTarget = target);
});

test('Given an attribute that exists, returns the value', () => {
    const result = getAttribute(globalTarget, 'foo');

    expect(result).toBe('bar');
});

test('Given an attribute name that does not exist, returns null', () => {
    const result = getAttribute(globalTarget, 'nope');

    expect(result).toBeNull();
});

test('Converting values to numbers yields the expected results', () => {
    const results = [
        getAttribute(globalTarget, 'foo', 'number'),
        getAttribute(globalTarget, 'baz', 'number'),
    ];

    expect(results).toEqual([NaN, 1]);
});

test('Converting values to booleans yields the expected results', () => {
    const results = [
        getAttribute(globalTarget, 'qux', 'boolean'),
        getAttribute(globalTarget, 'quux', 'boolean'),
    ];

    expect(results).toEqual([true, false]);
});

test('Attempting to convert to an unsupported type returns the original value', () => {
    const result1 = getAttribute(globalTarget, 'foo', 'x' as any);

    expect(result1).toBe('bar');
});
