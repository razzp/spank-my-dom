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
* [removeDelegateEventListener(target, selectors, type, listener, options)](#removeDelegateEventListener) ⇒ <code>void</code>
* [addDelegateEventListener(target, selectors, type, listener, [options])](#addDelegateEventListener) ⇒ <code>void</code>
* [createElement(tagName, [options])](#createElement) ⇒ <code>Element</code>
* [emptyElement(element)](#emptyElement) ⇒ <code>void</code>
* [querySelector(selectors, context)](#querySelector) ⇒ <code>null</code> \| <code>Element</code>
* [querySelectorAll(selectors, context)](#querySelectorAll) ⇒ <code>Array.&lt;Element&gt;</code>

## Typedefs

* [DelegateEvent](#DelegateEvent) : <code>object</code>
* [DelegateEventListenerObject](#DelegateEventListenerObject) : <code>object</code>
* [DelegateEventListener](#DelegateEventListener) : <code>function</code>

<a name="DelegateEvent"></a>

## DelegateEvent : <code>object</code>
A delegate event is identical to a native `Event`, but also includes a non-standard
method `stopDelegation()` which stops any further traversal through the DOM.

**Extends**: <code>Event</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| stopDelegation | <code>function</code> | Stop any further traversal through the DOM. |

<a name="DelegateEventListenerObject"></a>

## DelegateEventListenerObject : <code>object</code>
**Properties**

| Name | Type |
| --- | --- |
| handleEvent | [<code>DelegateEventListener</code>](#DelegateEventListener) | 

<a name="DelegateEventListener"></a>

## DelegateEventListener : <code>function</code>

| Param | Type |
| --- | --- |
| event | [<code>DelegateEvent</code>](#DelegateEvent) | 

<a name="arrayFrom"></a>

## arrayFrom(iterable) ⇒ <code>Array.&lt;T&gt;</code>
Creates an array from an iterable object.

**Category**: Array  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Iterable.&lt;T&gt;</code> \| <code>ArrayLike.&lt;T&gt;</code> | The iterable object to convert to an array. |

<a name="getClassesEndingWith"></a>

## getClassesEndingWith(search, context, [ignoreCase]) ⇒ <code>Array.&lt;string&gt;</code>
Get classes from an element or string that end with a specified string.

**Category**: Classes  
**Since**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| search | <code>string</code> |  | The string to search for. |
| context | <code>Element</code> \| <code>string</code> |  | The context to perform the search on. |
| [ignoreCase] | <code>boolean</code> | <code>false</code> | Set the case-sensitivity of the search. |

<a name="getClassesContaining"></a>

## getClassesContaining(search, context, [ignoreCase]) ⇒ <code>Array.&lt;string&gt;</code>
Get classes from an element or string that contain a specified string.

**Category**: Classes  
**Since**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| search | <code>string</code> |  | The string to search for. |
| context | <code>Element</code> \| <code>string</code> |  | The context to perform the search on. |
| [ignoreCase] | <code>boolean</code> | <code>false</code> | Set the case-sensitivity of the search. |

<a name="getClassesStartingWith"></a>

## getClassesStartingWith(search, context, [ignoreCase]) ⇒ <code>Array.&lt;string&gt;</code>
Get classes from an element or string that start with a specified string.

**Category**: Classes  
**Since**: 0.1.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| search | <code>string</code> |  | The string to search for. |
| context | <code>Element</code> \| <code>string</code> |  | The context to perform the search on. |
| [ignoreCase] | <code>boolean</code> | <code>false</code> | Set the case-sensitivity of the search. |

<a name="addEventListener"></a>

## addEventListener(target, type, listener, [options]) ⇒ <code>void</code>
Add an event listener to the target.

**Category**: Events  
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

**Category**: Events  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to remove the listener from. |
| type | <code>string</code> | The listener type. |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | The listener callback. |
| [options] | <code>boolean</code> \| <code>AddEventListenerOptions</code> | The listener options. |

<a name="removeDelegateEventListener"></a>

## removeDelegateEventListener(target, selectors, type, listener, options) ⇒ <code>void</code>
Remove a delegate listener from the target.

**Category**: Events  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to remove the listener from. |
| selectors | <code>string</code> | The selectors that would have been matched against. |
| type | <code>string</code> | The listener type. |
| listener | [<code>DelegateEventListener</code>](#DelegateEventListener) \| [<code>DelegateEventListenerObject</code>](#DelegateEventListenerObject) | The listener callback. |
| options | <code>boolean</code> \| <code>AddEventListenerOptions</code> | The listener options. |

<a name="addDelegateEventListener"></a>

## addDelegateEventListener(target, selectors, type, listener, [options]) ⇒ <code>void</code>
Add a delegate event listener to the target. The callback argument will beinvoked when the event is dispatched on any descendant element that matchesthe given selectors.

**Category**: Events  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to add the listener to. |
| selectors | <code>string</code> | The selectors to match against when an event is dispatched. |
| type | <code>string</code> | The listener type. |
| listener | [<code>DelegateEventListener</code>](#DelegateEventListener) \| [<code>DelegateEventListenerObject</code>](#DelegateEventListenerObject) | The listener callback. |
| [options] | <code>boolean</code> \| <code>AddEventListenerOptions</code> | The listener options. |

<a name="createElement"></a>

## createElement(tagName, [options]) ⇒ <code>Element</code>
Creates an instance of the element for the specified tag, allowing you todefine attributes and content at the same time.

**Category**: Manipulation  
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

**Category**: Manipulation  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to empty. |

<a name="querySelector"></a>

## querySelector(selectors, context) ⇒ <code>null</code> \| <code>Element</code>
Returns the first element within context that matches the given selectors.

**Category**: Retrieval  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| selectors | <code>string</code> | The selectors to match against. |
| context | <code>Document</code> \| <code>DocumentFragment</code> \| <code>Element</code> | The context from which to search from. |

<a name="querySelectorAll"></a>

## querySelectorAll(selectors, context) ⇒ <code>Array.&lt;Element&gt;</code>
Returns all descendant elements within context that match the given selectors.

**Category**: Retrieval  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| selectors | <code>string</code> | The selectors to match against. |
| context | <code>Document</code> \| <code>DocumentFragment</code> \| <code>Element</code> | The context from which to search from. |

