class MockImage {
    static decodeWillSucceed = false;

    public src?: string;

    public async decode(): Promise<void> {
        if (!MockImage.decodeWillSucceed) {
            throw new DOMException();
        }
    }
}

export { MockImage };
