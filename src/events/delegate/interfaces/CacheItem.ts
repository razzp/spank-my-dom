import type { DelegateListenerOrListenerObj } from '../aliases/DelegateListenerOrListenerObj';
import type { SanitisedListenerOptions } from './SanitisedListenerOptions';

interface CacheItem {
    delegate: (event: Event) => void;
    listener: DelegateListenerOrListenerObj;
    options: SanitisedListenerOptions;
    remove: () => void;
    selectors: string;
    type: string;
}

export { CacheItem };
