import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { closest } from '../../src/traversal/closest';

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
        `,
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given a selector that matches an ancestor, returns that element', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = closest(target, '.foo');

    expect(result).toBeDefined();
    expect(result?.classList.contains('foo')).toBe(true);
});

test('Given a selector that does not match any ancestors, returns null', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(closest(target, '.bar')).toBeNull();
});

test('Given an element which does not have a parent element, returns null', () => {
    const target = guarantee(document.querySelector('.target'));

    // Brute force the `parentElement` property to undefined so that we can
    // test the optional chaining logic.
    Object.defineProperty(target, 'parentElement', {
        value: undefined,
    });

    expect(closest(target, '.bar')).toBeNull();
});
