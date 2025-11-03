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

function waitForReadyState(
    state: DocumentReadyState,
): Promise<DOMHighResTimeStamp> {
    const numericalState = toNumerical(state);
    const controller = new AbortController();

    return new Promise((resolve) => {
        const check = () => {
            if (toNumerical(document.readyState) >= numericalState) {
                controller.abort();
                resolve(window.performance.now());
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

// TODO: JSDOC
