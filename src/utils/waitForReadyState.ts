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
    timeoutMs?: number,
): Promise<DOMHighResTimeStamp> {
    const numericalState = toNumerical(state);
    const controller = new AbortController();

    return new Promise((resolve, reject) => {
        let timeout: number;

        const check = () => {
            if (toNumerical(document.readyState) >= numericalState) {
                window.clearTimeout(timeout);
                controller.abort();
                resolve(window.performance.now());
                return true;
            } else {
                return false;
            }
        };

        if (!check()) {
            document.addEventListener('readystatechange', () => check(), {
                signal: controller.signal,
            });

            if (timeoutMs) {
                timeout = window.setTimeout(() => {
                    controller.abort();
                    reject('TIMEOUT');
                }, timeoutMs);
            }
        }
    });
}

export { waitForReadyState };

// TODO: JSDOC
