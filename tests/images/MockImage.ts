abstract class MockImage {
    public src?: string;

    constructor(private readonly succeed: boolean) {}

    public decode(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.succeed) {
                resolve();
            } else {
                reject(new DOMException());
            }
        });
    }
}

class MockImageFails extends MockImage {
    constructor() {
        super(false);
    }
}

class MockImageSucceeds extends MockImage {
    constructor() {
        super(true);
    }
}

export { MockImage, MockImageFails, MockImageSucceeds };
