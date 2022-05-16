import type { DelegateEvent } from './DelegateEvent';

type DelegateListenerOrListenerObjFor<T extends Event | CustomEvent = Event> =
    | ((this: EventTarget, event: DelegateEvent<T>, index: number) => void)
    | { handleEvent(event: DelegateEvent<T>, index: number): void };

export { DelegateListenerOrListenerObjFor };
