import { pickRandomN } from './pickRandomN';

/**
 * Pick a random item from an array.
 *
 * @remarks
 * Uses the {@link https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle | Fisher–Yates shuffle}, which runs in O(n) time.
 *
 * @group Utils
 *
 * @param array - The array from which to pick.
 */
function pickRandom<T extends readonly unknown[]>(array: T): T[number] {
    return pickRandomN(array, 1)[0];
}

export { pickRandom };
