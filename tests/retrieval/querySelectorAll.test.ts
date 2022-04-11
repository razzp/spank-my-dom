import { JSDOM } from 'jsdom';
import { querySelectorAll } from '../../src/retrieval/querySelectorAll';

let jsdomDocument: Document;

beforeAll(() => {
    const { window: jsdomWindow } = new JSDOM(
        `<!DOCTYPE html>
        <div class="target target-1"></div>
        <div class="target target-2"></div>
        `
    );

    jsdomDocument = jsdomWindow.document;

    // Ensure that required globals are available.
    global.document = jsdomWindow.document;
});

test('Given a valid string, returns all matches', () => {
    const result = querySelectorAll('.target');

    expect(result.length).toBe(2);
});

test('Given a valid string and context, returns all matches within the context', () => {
    const result = querySelectorAll('.target', jsdomDocument);

    expect(result.length).toBe(2);
});

test('Given a valid but non-matching string, returns an empty array', () => {
    const result = querySelectorAll('.foo');

    expect(result).toEqual([]);
});

test('Given an invalid string, throws an error', () => {
    expect(() => querySelectorAll('.')).toThrowError();
});
