type EventMapFor<T extends EventTarget> = T extends Window
    ? WindowEventMap
    : T extends Document
    ? DocumentEventMap
    : T extends HTMLElement
    ? HTMLElementEventMap
    : T extends Element
    ? ElementEventMap
    : T extends SVGElement
    ? SVGElementEventMap
    : Record<string, Event>;

export { EventMapFor };
