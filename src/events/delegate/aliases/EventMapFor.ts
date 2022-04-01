type EventMapFor<T extends EventTarget> = T extends Window
    ? WindowEventMap
    : T extends Document
    ? DocumentEventMap
    : T extends HTMLElement
    ? HTMLElementEventMap
    : T extends SVGElement
    ? SVGElementEventMap
    : never;

export { EventMapFor };
