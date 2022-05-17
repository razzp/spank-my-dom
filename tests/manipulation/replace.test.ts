import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { replace } from '../../src/manipulation/replace';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target">
            <div>foo</div>
        </div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
    global.Node = window.Node;
});

test('Given an HTML string, successfully replaces element contents with it', () => {
    const target = guarantee(document.querySelector('.target'));

    replace(target, '<div>bar</div>');

    expect(target.childElementCount).toBe(1);
    expect(target.firstElementChild?.innerHTML).toBe('bar');
});

test('Given a `Node`, successfully replaces element contents with it', () => {
    const target = guarantee(document.querySelector('.target'));
    const newElement = document.createElement('div');

    replace(target, newElement);

    expect(target.childElementCount).toBe(1);
    expect(target.firstElementChild).toBe(newElement);
});

test('Given multiple replacements, successfully replaces element contents with them', () => {
    const target = guarantee(document.querySelector('.target'));
    const newElement = document.createElement('div');

    replace(target, '<div>bar</div>', newElement);

    expect(target.childElementCount).toBe(2);
    expect(target.children[0]?.innerHTML).toBe('bar');
    expect(target.children[1]).toBe(newElement);
});
