# Spank my DOM 🔞

A tiny, modular set of DOM utilities, written in TypeScript.

## Installation

```shell
> npm install spank-my-dom
```

## Functions

* [arrayFrom(iterable)](#arrayFrom) ⇒ <code>Array.&lt;T&gt;</code>
* [getClassesEndingWith(search, context, [ignoreCase])](#getClassesEndingWith) ⇒ <code>Array.&lt;string&gt;</code>
* [getClassesContaining(search, context, [ignoreCase])](#getClassesContaining) ⇒ <code>Array.&lt;string&gt;</code>
* [getClassesStartingWith(search, context, [ignoreCase])](#getClassesStartingWith) ⇒ <code>Array.&lt;string&gt;</code>
* [addEventListener(target, type, listener, [options])](#addEventListener) ⇒ <code>void</code>
* [removeEventListener(target, type, listener, [options])](#removeEventListener) ⇒ <code>void</code>
* [removeDelegateEventListener(target, selectors, type, listener, [options])](#removeDelegateEventListener) ⇒ <code>void</code>
* [addDelegateEventListener(target, selectors, type, listener, [options])](#addDelegateEventListener) ⇒ <code>void</code>
* [serialise(...items)](#serialise) ⇒ <code>string</code>
* [createElement(tagName, [options])](#createElement) ⇒ <code>Element</code>
* [emptyElement(element)](#emptyElement) ⇒ <code>void</code>
* [querySelector(selectors, context)](#querySelector) ⇒ <code>null</code> \| <code>Element</code>
* [querySelectorAll(selectors, context)](#querySelectorAll) ⇒ <code>Array.&lt;Element&gt;</code>

<a name="arrayFrom"></a>

## arrayFrom(iterable) ⇒ <code>Array.&lt;T&gt;</code>
Creates an array from an iterable object.

**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Iterable.&lt;T&gt;</code> \| <code>ArrayLike.&lt;T&gt;</code> | The iterable object to convert to an array. |

<a name="getClassesEndingWith"></a>

## getClassesEndingWith(search, context, [ignoreCase]) ⇒ <code>Array.&lt;string&gt;</code>
Get classes from an element or string that end with a specified string.

**Since**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| search | <code>string</code> |  | The string to search for. |
| context | <code>Element</code> \| <code>string</code> |  | The context to perform the search on. |
| [ignoreCase] | <code>boolean</code> | <code>false</code> | Set the case-sensitivity of the search. |

<a name="getClassesContaining"></a>

## getClassesContaining(search, context, [ignoreCase]) ⇒ <code>Array.&lt;string&gt;</code>
Get classes from an element or string that contain a specified string.

**Since**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| search | <code>string</code> |  | The string to search for. |
| context | <code>Element</code> \| <code>string</code> |  | The context to perform the search on. |
| [ignoreCase] | <code>boolean</code> | <code>false</code> | Set the case-sensitivity of the search. |

<a name="getClassesStartingWith"></a>

## getClassesStartingWith(search, context, [ignoreCase]) ⇒ <code>Array.&lt;string&gt;</code>
Get classes from an element or string that start with a specified string.

**Since**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| search | <code>string</code> |  | The string to search for. |
| context | <code>Element</code> \| <code>string</code> |  | The context to perform the search on. |
| [ignoreCase] | <code>boolean</code> | <code>false</code> | Set the case-sensitivity of the search. |

<a name="addEventListener"></a>

## addEventListener(target, type, listener, [options]) ⇒ <code>void</code>
Add an event listener to the target.

**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to add the listener to. |
| type | <code>string</code> | The listener type. |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | The listener callback. |
| [options] | <code>boolean</code> \| <code>AddEventListenerOptions</code> | The listener options. |

<a name="removeEventListener"></a>

## removeEventListener(target, type, listener, [options]) ⇒ <code>void</code>
Remove an event listener from the target.

**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to remove the listener from. |
| type | <code>string</code> | The listener type. |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | The listener callback. |
| [options] | <code>boolean</code> \| <code>AddEventListenerOptions</code> | The listener options. |

<a name="removeDelegateEventListener"></a>

## removeDelegateEventListener(target, selectors, type, listener, [options]) ⇒ <code>void</code>
Remove a delegate listener from the target.

**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to remove the listener from. |
| selectors | <code>string</code> | The selectors that would have been matched against. |
| type | <code>string</code> | The listener type. |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | The listener callback. |
| [options] | <code>boolean</code> \| <code>AddEventListenerOptions</code> | The listener options. |

<a name="addDelegateEventListener"></a>

## addDelegateEventListener(target, selectors, type, listener, [options]) ⇒ <code>void</code>
Add a delegate event listener to the target. The callback argument will beinvoked when the event is dispatched on any descendant element that matchesthe given selectors.The `Event` object returned in the listener callback includes a non-standardmethod `stopDelegation()`, which stops any further traversal up the DOM treein search of matches.The listener callback includes a second argument `index`, which indicateshow many times the callback has been fired during the current event.

**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to add the listener to. |
| selectors | <code>string</code> | The selectors to match against when an event is dispatched. |
| type | <code>string</code> | The listener type. |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | The listener callback. |
| [options] | <code>boolean</code> \| <code>AddEventListenerOptions</code> | The listener options. |

<a name="serialise"></a>

## serialise(...items) ⇒ <code>string</code>
Encode one or more serialisable items as a query string. This is aimedprimarily, but not exclusively, at form elements.

**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| ...items | <code>HTMLFormElement</code> \| <code>Object.&lt;string, any&gt;</code> \| <code>Array.&lt;Array.&lt;string, any&gt;&gt;</code> | The item(s) to encode. |

<a name="createElement"></a>

## createElement(tagName, [options]) ⇒ <code>Element</code>
Creates an instance of the element for the specified tag, allowing you todefine attributes and content at the same time.

**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | The type of element to be created. |
| [options] | <code>Object</code> | Additional options. |
| [options.attributes] | <code>Object.&lt;string, string&gt;</code> | Attributes to be added to the element. |
| [options.classes] | <code>Array.&lt;string&gt;</code> | Classes to be added to the element. |
| [options.children] | <code>Array.&lt;Element&gt;</code> | Child elements to append to the element. |
| [options.innerHTML] | <code>string</code> | Set the HTML of the element. |

<a name="emptyElement"></a>

## emptyElement(element) ⇒ <code>void</code>
Empty an element.

**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to empty. |

<a name="querySelector"></a>

## querySelector(selectors, context) ⇒ <code>null</code> \| <code>Element</code>
Returns the first element within context that matches the given selectors.

**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| selectors | <code>string</code> | The selectors to match against. |
| context | <code>Document</code> \| <code>DocumentFragment</code> \| <code>Element</code> | The context from which to search from. |

<a name="querySelectorAll"></a>

## querySelectorAll(selectors, context) ⇒ <code>Array.&lt;Element&gt;</code>
Returns all descendant elements within context that match the given selectors.

**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| selectors | <code>string</code> | The selectors to match against. |
| context | <code>Document</code> \| <code>DocumentFragment</code> \| <code>Element</code> | The context from which to search from. |

