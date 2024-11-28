/**
 * @jest-environment jsdom
 */

import { assertIsNotNull } from 'bossy-boots';

import { toggleClass } from '../../src/classes/toggleClass';

beforeEach(() => {
    document.body.innerHTML = '<div class="target qux quux"></div>';
});

test('Given a single token that does not exist, adds token and returns true', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = toggleClass(target, 'foo');

    expect(target.className).toBe('target qux quux foo');
    expect(result).toBe(true);
});

test('Given space-separated tokens that do no exist, splits then adds tokens and returns true', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = toggleClass(target, 'foo bar');

    expect(target.className).toBe('target qux quux foo bar');
    expect(result).toBe(true);
});

test('Given space-separated tokens with excess whitespace, splits then adds tokens and returns true', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = toggleClass(target, 'foo     bar');

    expect(target.className).toBe('target qux quux foo bar');
    expect(result).toBe(true);
});

test('Given a single token that already exists, removes token and returns false', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = toggleClass(target, 'qux');

    expect(target.className).toBe('target quux');
    expect(result).toBe(false);
});

test('Given space-separated tokens that already exist, splits then removes tokens and returns false', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = toggleClass(target, 'qux quux');

    expect(target.className).toBe('target');
    expect(result).toBe(false);
});

test('Given space-separated tokens, some of which already exist, splits then toggles tokens and returns false', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = toggleClass(target, 'foo qux');

    expect(target.className).toBe('target quux foo');
    expect(result).toBe(false);
});

test('Given an array of tokens that do no exist, adds tokens and returns true', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = toggleClass(target, ['foo', 'bar']);

    expect(target.className).toBe('target qux quux foo bar');
    expect(result).toBe(true);
});

test('Given an array of tokens that already exist, removes tokens and returns false', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = toggleClass(target, ['qux', 'quux']);

    expect(target.className).toBe('target');
    expect(result).toBe(false);
});

test('Given an array of tokens, some of which already exist, toggles tokens and returns false', () => {
    const target = document.querySelector('.target');

    assertIsNotNull(target);

    const result = toggleClass(target, ['foo', 'qux']);

    expect(target.className).toBe('target quux foo');
    expect(result).toBe(false);
});
