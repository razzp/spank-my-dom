type DelegateListener =
    | ((event: Event | CustomEvent) => void)
    | { handleEvent(event: Event | CustomEvent): void };

export { DelegateListener };
