function delegate<T extends EventTarget, U extends Event | CustomEvent>(
    selectors: string,
    func: (
        this: T,
        data: { delegateTarget: Element; event: U; stopDelegation: () => void },
    ) => unknown,
) {
    return function (this: T, event: U) {
        let current = event.target;
        let stopped = false;

        while (
            !stopped &&
            current instanceof Element &&
            current !== event.currentTarget
        ) {
            if (current.matches(selectors)) {
                func.call(this, {
                    delegateTarget: current,
                    event,
                    stopDelegation: () => {
                        stopped = true;
                    },
                });
            }

            current = current.parentElement;
        }
    };
}

export { delegate };

document.addEventListener(
    'click',
    delegate('.foo', ({ delegateTarget, event, stopDelegation }) => {
        //
    }),
);

// TODO: JSDOC
