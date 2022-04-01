interface DelegateListener {
    (event: Event, index: number): void;
}

interface DelegateListenerObject {
    handleEvent(event: Event, index: number): void;
}

type DelegateListenerOrListenerObj = DelegateListener | DelegateListenerObject;

export { DelegateListenerOrListenerObj };
