function toNumerical(state: DocumentReadyState): number {
    switch (state) {
        case 'complete':
            return 2;
        case 'interactive':
            return 1;
        default:
            return 0;
    }
}

/**
 * Create a `Promise` that will resolve once the document reaches the
 * specified `readyState`, or immediately if it already has.
 *
 * @param state - The state to wait for.
 *
 * @example
 * Wait for the document `readyState` to reach `interactive`. This can be
 * used as an alternative to the `DOMContentLoaded` event.
 * ```ts
 * await waitForReadyState('interactive');
 * ```
 *
 * @example
 * Wait for the document `readyState` to reach `complete`. This can be
 * used as an alternative to the `load` event.
 * ```ts
 * await waitForReadyState('complete');
 * ```
 *
 * @public
 */
function waitForReadyState(state: DocumentReadyState): Promise<void> {
    const numericalState = toNumerical(state);
    const controller = new AbortController();

    return new Promise((resolve) => {
        const check = () => {
            if (toNumerical(document.readyState) >= numericalState) {
                controller.abort();
                resolve();
            }
        };

        check();

        if (!controller.signal.aborted) {
            document.addEventListener('readystatechange', () => check(), {
                signal: controller.signal,
            });
        }
    });
}

export { waitForReadyState };
