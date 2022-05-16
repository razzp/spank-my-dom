import type { DelegateEvent } from './DelegateEvent';

type DelegateListenerFor<T extends Event | CustomEvent = Event> =
    | ((this: EventTarget, event: DelegateEvent<T>, index: number) => void)
    | { handleEvent(event: DelegateEvent<T>, index: number): void };

export { DelegateListenerFor };
