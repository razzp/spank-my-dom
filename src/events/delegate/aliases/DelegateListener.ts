type DelegateListener =
    | ((event: Event | CustomEvent, index: number) => void)
    | { handleEvent(event: Event | CustomEvent, index: number): void };

export { DelegateListener };