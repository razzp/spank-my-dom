type DelegateEvent<T extends Event> = T & {
    stopDelegation: () => void;
};

export { DelegateEvent };
