/**
 * Pick a random item from an array.
 *
 * @group Utils
 *
 * @param array - The array from which to pick.
 */
function pickRandom<T extends readonly unknown[]>(array: T): T[number] {
    return array[Math.floor(Math.random() * array.length)];
}

export { pickRandom };
