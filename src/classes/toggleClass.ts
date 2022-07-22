/**
 * Toggle one or more classes of an element. If force is included, turns the
 * toggle into a one way-only operation. If set to false, the classes will only
 * be removed. If set to true, the classes will only be added.
 * @since 0.2.0
 *
 * @param {Element} element The element to toggle the class(es) on.
 * @param {string|string[]} tokens The class(es) to toggle.
 * @param {boolean} [force] Restrict toggle to a one-way operation only.
 *
 * @returns {boolean}
 */
function toggleClass(
    element: Element,
    tokens: string | string[],
    force?: boolean
): boolean {
    const normalised = Array.isArray(tokens) ? tokens : [tokens];

    const results = normalised.flatMap((token) =>
        token
            .split(/\s+/)
            .map((token) => element.classList.toggle(token, force))
    );

    // Return true or false depending on whether every token was added or not.
    return results.every(Boolean);
}

export { toggleClass };
