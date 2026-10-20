/**
 * Generate a random integer within a specified range.
 *
 * @remarks
 * If you want to allow floating-point numbers,
 * consider using {@link randomNumber} instead.
 *
 * @group Utils
 *
 * @param min - The minimum integer to generate.
 * @param max - The maximum integer to generate.
 *
 * @example
 * Generate a random integer.
 * ```ts
 * const result = randomInt(-10, 10);
 * ```
 */
function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { randomInt };
