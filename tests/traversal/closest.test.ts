import { JSDOM } from 'jsdom';

import { closest } from '../../src/traversal/closest';

let globalTarget: Element;

beforeAll(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="foo">
            <div>
                <div>
                    <div class="target"></div>
                </div>
            </div>
        </div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;

    const target = document.querySelector('.target');

    target && (globalTarget = target);
});

test('Given a selector that matches an ancestor, returns that element', () => {
    const result = closest(globalTarget, '.foo');

    expect(result).toBeDefined();
    expect(result?.classList.contains('foo')).toBe(true);
});

test('Given a selector that does not match any ancestors, returns null', () => {
    const result = closest(globalTarget, '.bar');

    expect(result).toBeNull();
});

test('Given an element which does not have a parent element, returns null', () => {
    // Brute force the `parentElement` property to undefined so that we can
    // test the optional chaining logic.
    Object.defineProperty(globalTarget, 'parentElement', {
        value: undefined,
    });

    const result = closest(globalTarget, '.bar');

    expect(result).toBeNull();
});
