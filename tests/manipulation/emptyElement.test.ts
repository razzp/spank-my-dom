/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { emptyElement } from '../../src/manipulation/emptyElement';

beforeAll(() => {
    document.body.innerHTML = `
        <div class="target">
            foo
            <div></div>
            <div></div>
        </div>
    `;
});

test('Given an element, remove all of its child nodes', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    // We use GTE here because breaks/spaces count as nodes.
    expect(target.childNodes.length).toBeGreaterThanOrEqual(3);

    emptyElement(target);

    expect(target.childNodes.length).toBe(0);
});
