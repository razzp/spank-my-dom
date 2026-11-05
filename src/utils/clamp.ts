/**
 * Clamp a value to a minimum and maximum boundary. If the value is within
 * both boundaries then it is returned unchanged.
 *
 * @group Utils
 *
 * @param value - The value to clamp.
 * @param min - The minimum value at which to clamp.
 * @param max - The maximum value at which to clamp.
 */
function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(min, value), max);
}

export { clamp };
