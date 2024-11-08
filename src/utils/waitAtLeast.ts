function waitAtLeast<T>(
    minimumWaitMs: number,
    promise: Promise<T> | PromiseLike<T>,
): Promise<T> {
    return new Promise((resolve, reject) => {
        Promise.all([
            promise,
            new Promise((resolve) => window.setTimeout(resolve, minimumWaitMs)),
        ])
            .then(([awaited]) => resolve(awaited))
            .catch(reject);
    });
}

export { waitAtLeast };

// TODO: JSDOC
