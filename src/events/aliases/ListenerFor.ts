type ListenerFor<T extends Event | CustomEvent = Event> =
    | ((this: EventTarget, event: T, index: number) => void)
    | { handleEvent(event: T, index: number): void };

export { ListenerFor };
