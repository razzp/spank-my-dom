import { escapeRegExp } from '../../src/utils/escapeRegExp';

test('Special characters are successfully escaped', () => {
    expect(escapeRegExp('-[]{}()*+?.,^$|')).toBe(
        '\\-\\[\\]\\{\\}\\(\\)\\*\\+\\?\\.\\,\\^\\$\\|',
    );
});
