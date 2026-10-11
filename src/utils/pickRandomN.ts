/**
 * Pick a specified number of items from a randomised array.
 *
 * @remarks
 * Uses the {@link https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle | Fisher–Yates shuffle}, which runs in O(n) time.
 *
 * @param array - The array from which to pick.
 * @param amount - The number of items to pick.
 *
 * @public
 */
function pickRandomN<T extends readonly unknown[]>(
    array: T,
    amount: number,
): T[number][] {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.splice(0, amount);
}

export { pickRandomN };
