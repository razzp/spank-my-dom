import type { DelegateListener } from '../aliases/DelegateListener';
import type { SanitisedListenerOptions } from './SanitisedListenerOptions';

interface CacheItem {
    delegate: (event: Event) => void;
    listener: DelegateListener;
    options: SanitisedListenerOptions;
    remove: () => void;
    selectors: string;
    type: string;
}

export { CacheItem };
