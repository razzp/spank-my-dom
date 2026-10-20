/**
 * Generate a random number within a specified range.
 *
 * @remarks
 * Can return a floating-point number. If you want to ensure a whole number
 * is always generated, consider using {@link randomInt} instead.
 *
 * @group Utils
 *
 * @param min - The minimum number to generate.
 * @param max - The maximum number to generate.
 *
 * @example
 * Generate a random number.
 * ```ts
 * const result = randomNumber(-10, 10);
 * ```
 */
function randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export { randomNumber };
