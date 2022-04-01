import type { DelegateListenerOrListenerObj } from '../aliases/DelegateListenerOrListenerObj';
import type { SanitisedListenerOptions } from './SanitisedListenerOptions';

interface CacheItem {
    delegate: (event: Event) => void;
    listener: DelegateListenerOrListenerObj;
    options: SanitisedListenerOptions;
    remove: () => void;
    selector: string;
    type: string;
}

export { CacheItem };
