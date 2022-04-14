/**
 * A delegate event is identical to a native `Event`, but also includes a non-standard
 * method `stopDelegation()` which stops any further traversal through the DOM.
 * @typedef DelegateEvent
 * @type {object}
 * @augments {Event}
 * @property {function} stopDelegation - Stop any further traversal through the DOM.
 */

/**
 * @typedef DelegateEventListenerObject
 * @type {object}
 * @property {DelegateEventListener} handleEvent
 */

/**
 * @typedef DelegateEventListener
 * @type {function}
 * @param {DelegateEvent} event
 */

/**
 * @typedef CreateElementOptions
 * @type {object}
 * @property {DelegateEventListener} handleEvent
 */
