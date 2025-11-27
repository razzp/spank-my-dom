/**
 * A tiny, modular set of DOM utilities, written in TypeScript.
 *
 * @packageDocumentation
 */

// Conversion

export { parseBoolean } from './conversion/parseBoolean';
export { parseJson } from './conversion/parseJson';

// Events

export { type DelegateEvent, delegate } from './events/delegate';
export {
    type OnElementAddedOptions,
    onElementAdded,
} from './events/onElementAdded';
export {
    type OnElementIntersectedInfo,
    type OnElementIntersectedOptions,
    onElementIntersected,
} from './events/onElementIntersected';
export {
    type OnElementResizedInfo,
    type OnElementResizedOptions,
    onElementResized,
} from './events/onElementResized';
export {
    type OnPixelRatioChangedOptions,
    onPixelRatioChanged,
} from './events/onPixelRatioChanged';

// Forms

export { formDataOmit } from './forms/formDataOmit';
export { formDataPick } from './forms/formDataPick';
export {
    type FormDataToSearchParamsOptions,
    formDataToSearchParams,
} from './forms/formDataToSearchParams';
export { type GetFormDataOptions, getFormData } from './forms/getFormData';

// Images

export { loadImage } from './images/loadImage';

// Manipulation

export {
    type CreateElementOptions,
    createElement,
} from './manipulation/createElement';
export { emptyElement } from './manipulation/emptyElement';
export { hideElement } from './manipulation/hideElement';
export { setGlobalCSSVariable } from './manipulation/setGlobalCSSVariable';
export { showElement } from './manipulation/showElement';

// Retrieval

export { find } from './retrieval/find';
export { findAll } from './retrieval/findAll';
export { findOrThrow } from './retrieval/findOrThrow';
export { getData } from './retrieval/getData';
export { getDataOrThrow } from './retrieval/getDataOrThrow';
export { getPartialClasses } from './retrieval/getPartialClasses';

// Traversal

export { getClosest } from './traversal/getClosest';
export { getSiblings } from './traversal/getSiblings';

// Utils

export { type TimedResult, timed } from './utils/timed';
export { waitAtLeast } from './utils/waitAtLeast';
export { waitForReadyState } from './utils/waitForReadyState';
