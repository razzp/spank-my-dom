import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { emptyElement } from '../../src/manipulation/emptyElement';

beforeAll(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target">
            foo
            <div></div>
            <div></div>
        </div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given an element, remove all of its child nodes', () => {
    const target = guarantee(document.querySelector('.target'));

    // We use GTE here because breaks/spaces count as nodes.
    expect(target.childNodes.length).toBeGreaterThanOrEqual(3);

    emptyElement(target);

    expect(target.childNodes.length).toBe(0);
});
