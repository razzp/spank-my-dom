import type { DelegateEvent } from './DelegateEvent';
import type { EventMap } from '../../aliases/EventMap';

type DelegateEventListenerFor<
    TTarget extends EventTarget,
    TEventMap extends EventMap,
    TEventType extends keyof TEventMap
> = (
    this: TTarget,
    event: DelegateEvent<TEventMap[TEventType]>,
    index: number
) => unknown;

type DelegateEventListenerObjectFor<
    TEventMap extends EventMap,
    TEventType extends keyof TEventMap
> = {
    handleEvent(
        event: DelegateEvent<TEventMap[TEventType]>,
        index: number
    ): unknown;
};

type DelegateListenerOrListenerObjFor<
    TTarget extends EventTarget,
    TEventMap extends EventMap,
    TEventType extends keyof TEventMap
> =
    | DelegateEventListenerFor<TTarget, TEventMap, TEventType>
    | DelegateEventListenerObjectFor<TEventMap, TEventType>;

export { DelegateListenerOrListenerObjFor };
