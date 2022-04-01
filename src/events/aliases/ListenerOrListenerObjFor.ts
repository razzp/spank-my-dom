import type { EventMap } from './EventMap';

type EventListenerFor<
    TTarget extends EventTarget,
    TEventMap extends EventMap,
    TEventType extends keyof TEventMap
> = (this: TTarget, event: TEventMap[TEventType]) => unknown;

type EventListenerObjectFor<
    TEventMap extends EventMap,
    TEventType extends keyof TEventMap
> = {
    handleEvent(event: TEventMap[TEventType]): unknown;
};

type ListenerOrListenerObjFor<
    TTarget extends EventTarget,
    TEventMap extends EventMap,
    TEventType extends keyof TEventMap
> =
    | EventListenerFor<TTarget, TEventMap, TEventType>
    | EventListenerObjectFor<TEventMap, TEventType>;

export { ListenerOrListenerObjFor };
