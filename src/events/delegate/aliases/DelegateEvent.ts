type DelegateEvent<T extends Event> = T & {
    originalTarget: EventTarget;
    stopDelegation: () => void;
};

export { DelegateEvent };
