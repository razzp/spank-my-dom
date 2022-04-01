interface SanitisedListenerOptions extends AddEventListenerOptions {
    origOnce?: boolean;
    origSignal?: AbortSignal;
}

export { SanitisedListenerOptions };
