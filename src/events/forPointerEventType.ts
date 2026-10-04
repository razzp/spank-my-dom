/**
 * The pointer type that caused the event.
 */
type PointerEventType = 'mouse' | 'pen' | 'touch';

/**
 * Create a listener that only fires if the event
 * was caused by a specific pointer type.
 *
 * @param pointerType - The pointer type to use.
 * @param callback - The callback function.
 *
 * @example
 * ```ts
 * forPointerEventType('mouse', (event) => {
 *    // Event was caused by a mouse.
 * });
 * ```
 *
 * @public
 */
function forPointerEventType<T extends PointerEvent>(
    pointerType: PointerEventType,
    callback: (event: T) => void,
) {
    return (event: T): void => {
        if (event.pointerType === pointerType) {
            callback(event);
        }
    };
}

export { forPointerEventType, type PointerEventType };
