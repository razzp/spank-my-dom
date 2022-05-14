import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { getData } from '../../../src/attributes/data/getData';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target" data-foo="bar"></div>
        `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given an data attribute that exists, returns the value', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(getData(target, 'foo')).toBe('bar');
});

test('Given an data attribute that does not exist, returns null', () => {
    const target = guarantee(document.querySelector('.target'));

    expect(getData(target, 'nope')).toBeNull();
});
