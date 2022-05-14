import { guarantee } from 'bossy-boots';
import { JSDOM } from 'jsdom';

import { toggleClass } from '../../src/classes/toggleClass';

beforeEach(() => {
    const { window } = new JSDOM(
        `<!DOCTYPE html>
            <div class="target qux quux"></div>
            `
    );

    // Ensure that required globals are set.
    global.document = window.document;
});

test('Given a single token that does not exist, adds token and returns true', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = toggleClass(target, 'foo');

    expect(target.className).toBe('target qux quux foo');
    expect(result).toBe(true);
});

test('Given multiple tokens that do no exist, adds tokens and returns true', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = toggleClass(target, 'foo bar');

    expect(target.className).toBe('target qux quux foo bar');
    expect(result).toBe(true);
});

test('Given multiple tokens with excess whitespace, adds tokens and returns true', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = toggleClass(target, 'foo     bar');

    expect(target.className).toBe('target qux quux foo bar');
    expect(result).toBe(true);
});

test('Given a single token that already exists, removes token and returns false', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = toggleClass(target, 'qux');

    expect(target.className).toBe('target quux');
    expect(result).toBe(false);
});

test('Given multiple tokens that already exist, removes tokens and returns false', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = toggleClass(target, 'qux quux');

    expect(target.className).toBe('target');
    expect(result).toBe(false);
});

test('Given multiple tokens, some of which already exist, toggles tokens and returns false', () => {
    const target = guarantee(document.querySelector('.target'));
    const result = toggleClass(target, 'foo qux');

    expect(target.className).toBe('target quux foo');
    expect(result).toBe(false);
});
