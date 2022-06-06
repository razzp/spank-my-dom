# Spank my DOM 🔞

A tiny, modular set of DOM utilities, written in TypeScript.

## Installation

```shell
> npm install spank-my-dom
```

## Functions

* [toArray(iterable)](#toArray) ⇒ <code>Array.&lt;T&gt;</code>
* [toggleAttr(element, name, value, [force])](#toggleAttr) ⇒ <code>boolean</code>
* [setAttr(element, name, value)](#setAttr) ⇒ <code>void</code>
* [getAttr(element, name)](#getAttr) ⇒ <code>null</code> \| <code>string</code>
* [hasAttr(element, name)](#hasAttr) ⇒ <code>boolean</code>
* [removeAttr(element, name)](#removeAttr) ⇒ <code>void</code>
* [toggleAria(element, name, value, [force])](#toggleAria) ⇒ <code>boolean</code>
* [setAria(element, name, value)](#setAria) ⇒ <code>void</code>
* [getAria(element, name)](#getAria) ⇒ <code>null</code> \| <code>string</code>
* [hasAria(element, name)](#hasAria) ⇒ <code>boolean</code>
* [removeAria(element, name)](#removeAria) ⇒ <code>void</code>
* [toggleData(element, name, value, [force])](#toggleData) ⇒ <code>boolean</code>
* [setData(element, name, value)](#setData) ⇒ <code>void</code>
* [getData(element, name)](#getData) ⇒ <code>null</code> \| <code>string</code>
* [hasData(element, name)](#hasData) ⇒ <code>boolean</code>
* [removeData(element, name)](#removeData) ⇒ <code>void</code>
* [toggleClass(element, tokens, [force])](#toggleClass) ⇒ <code>boolean</code>
* [addClass(element, tokens)](#addClass) ⇒ <code>void</code>
* [removeClass(element, tokens)](#removeClass) ⇒ <code>void</code>
* [classesContaining(search, context, [ignoreCase])](#classesContaining) ⇒ <code>Array.&lt;string&gt;</code>
* [classesEndingWith(search, context, [ignoreCase])](#classesEndingWith) ⇒ <code>Array.&lt;string&gt;</code>
* [classesStartingWith(search, context, [ignoreCase])](#classesStartingWith) ⇒ <code>Array.&lt;string&gt;</code>
* [dispatch(target, type, [options])](#dispatch) ⇒ <code>boolean</code>
* [on(target, type, listener, [options])](#on) ⇒ <code>void</code>
* [off(target, type, listener, [options])](#off) ⇒ <code>void</code>
* [offDelegate(target, selectors, type, listener, [options])](#offDelegate) ⇒ <code>void</code>
* [onDelegate(target, selectors, type, listener, [options])](#onDelegate) ⇒ <code>void</code>
* [serialise(...items)](#serialise) ⇒ <code>string</code>
* [loadImage(path)](#loadImage) ⇒ <code>Promise.&lt;HTMLImageElement&gt;</code>
* [loadImages(...paths)](#loadImages) ⇒ <code>Promise.&lt;Array.&lt;HTMLImageElement&gt;&gt;</code>
* [create(tagName, [options])](#create) ⇒ <code>Element</code>
* [empty(element)](#empty) ⇒ <code>void</code>
* [replace(element, ...replacements)](#replace) ⇒ <code>void</code>
* [find(selectors, context)](#find) ⇒ <code>null</code> \| <code>Element</code>
* [findOrThrow(selectors, context)](#findOrThrow) ⇒ <code>Element</code>
* [findAll(selectors, context)](#findAll) ⇒ <code>Array.&lt;Element&gt;</code>
* [closest(element, selector)](#closest) ⇒ <code>null</code> \| <code>Element</code>
* [siblingsAfter(element, [selector])](#siblingsAfter) ⇒ <code>Array.&lt;Element&gt;</code>
* [siblingsBefore(element, [selector])](#siblingsBefore) ⇒ <code>Array.&lt;Element&gt;</code>
* [siblings(element, [selector])](#siblings) ⇒ <code>Array.&lt;Element&gt;</code>
* [convertString(input, type)](#convertString) ⇒ <code>boolean</code> \| <code>number</code>
* [parseJson(input, reviver)](#parseJson) ⇒ <code>object</code>

<a name="toArray"></a>

## toArray(iterable) ⇒ <code>Array.&lt;T&gt;</code>
Creates an array from an iterable object.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| iterable | <code>Iterable.&lt;T&gt;</code> \| <code>ArrayLike.&lt;T&gt;</code> | The iterable object to convert to an array. |

<a name="toggleAttr"></a>

## toggleAttr(element, name, value, [force]) ⇒ <code>boolean</code>
Toggle the attribute of an element. If force is included, turns the toggleinto a one way-only operation. If set to false, the attribute will only beremoved. If set to true, the attribute will only be added.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to toggle the attribute on. |
| name | <code>string</code> | The name of the attribute. |
| value | <code>string</code> \| <code>number</code> \| <code>boolean</code> | The value of the attribute. |
| [force] | <code>boolean</code> | Restrict toggle to a one-way operation only. |

<a name="setAttr"></a>

## setAttr(element, name, value) ⇒ <code>void</code>
Set an attribute on an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to set the attribute on. |
| name | <code>string</code> | The name of the attribute. |
| value | <code>unknown</code> | The value of the attribute. |

<a name="getAttr"></a>

## getAttr(element, name) ⇒ <code>null</code> \| <code>string</code>
Get the attribute from an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to retrieve the attribute from. |
| name | <code>string</code> | The name of the attribute. |

<a name="hasAttr"></a>

## hasAttr(element, name) ⇒ <code>boolean</code>
Check if an attribute exists on an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to check. |
| name | <code>string</code> | The name of the attribute. |

<a name="removeAttr"></a>

## removeAttr(element, name) ⇒ <code>void</code>
Remove an attribute from an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to remove the attribute from. |
| name | <code>string</code> | The name of the attribute. |

<a name="toggleAria"></a>

## toggleAria(element, name, value, [force]) ⇒ <code>boolean</code>
Toggle the aria attribute of an element. If force is included, turns the toggleinto a one way-only operation. If set to false, the aria attribute will only beremoved. If set to true, the aria attribute will only be added.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to toggle the aria attribute on. |
| name | <code>string</code> | The name of the aria attribute. |
| value | <code>unknown</code> | The value of the aria attribute. |
| [force] | <code>boolean</code> | Restrict toggle to a one-way operation only. |

<a name="setAria"></a>

## setAria(element, name, value) ⇒ <code>void</code>
Set an aria attribute on an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to set the aria attribute on. |
| name | <code>string</code> | The name of the aria attribute. |
| value | <code>unknown</code> | The value of the aria attribute. |

<a name="getAria"></a>

## getAria(element, name) ⇒ <code>null</code> \| <code>string</code>
Get the aria attribute from an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to retrieve the aria attribute from. |
| name | <code>string</code> | The name of the aria attribute. |

<a name="hasAria"></a>

## hasAria(element, name) ⇒ <code>boolean</code>
Check if an aria attribute exists on an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to check. |
| name | <code>string</code> | The name of the aria attribute. |

<a name="removeAria"></a>

## removeAria(element, name) ⇒ <code>void</code>
Remove a aria attribute from an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to remove the aria attribute from. |
| name | <code>string</code> | The name of the aria attribute. |

<a name="toggleData"></a>

## toggleData(element, name, value, [force]) ⇒ <code>boolean</code>
Toggle the data attribute of an element. If force is included, turns the toggleinto a one way-only operation. If set to false, the data attribute will only beremoved. If set to true, the data attribute will only be added.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to toggle the data attribute on. |
| name | <code>string</code> | The name of the data attribute. |
| value | <code>unknown</code> | The value of the data attribute. |
| [force] | <code>boolean</code> | Restrict toggle to a one-way operation only. |

<a name="setData"></a>

## setData(element, name, value) ⇒ <code>void</code>
Set a data attribute on an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to set the data attribute on. |
| name | <code>string</code> | The name of the data attribute. |
| value | <code>unknown</code> | The value of the data attribute. |

<a name="getData"></a>

## getData(element, name) ⇒ <code>null</code> \| <code>string</code>
Get the data attribute from an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to retrieve the data attribute from. |
| name | <code>string</code> | The name of the data attribute. |

<a name="hasData"></a>

## hasData(element, name) ⇒ <code>boolean</code>
Check if a data attribute exists on an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to check. |
| name | <code>string</code> | The name of the data attribute. |

<a name="removeData"></a>

## removeData(element, name) ⇒ <code>void</code>
Remove a data attribute from an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to remove the data attribute from. |
| name | <code>string</code> | The name of the data attribute. |

<a name="toggleClass"></a>

## toggleClass(element, tokens, [force]) ⇒ <code>boolean</code>
Toggle one or more classes of an element. If force is included, turns thetoggle into a one way-only operation. If set to false, the classes will onlybe removed. If set to true, the classes will only be added.

**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to toggle the class(es) on. |
| tokens | <code>string</code> | The class(es) to toggle. |
| [force] | <code>boolean</code> | Restrict toggle to a one-way operation only. |

<a name="addClass"></a>

## addClass(element, tokens) ⇒ <code>void</code>
Add one or more classes to an element.

**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to add the class(es) to. |
| tokens | <code>string</code> | The class(es) to add. |

<a name="removeClass"></a>

## removeClass(element, tokens) ⇒ <code>void</code>
Remove one or more classes from an element.

**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to remove the class(es) from. |
| tokens | <code>string</code> | The class(es) to remove. |

<a name="classesContaining"></a>

## classesContaining(search, context, [ignoreCase]) ⇒ <code>Array.&lt;string&gt;</code>
Get classes from an element or string that contain a specified string.

**Since**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| search | <code>string</code> |  | The string to search for. |
| context | <code>Element</code> \| <code>string</code> |  | The context to perform the search on. |
| [ignoreCase] | <code>boolean</code> | <code>false</code> | Set the case-sensitivity of the search. |

<a name="classesEndingWith"></a>

## classesEndingWith(search, context, [ignoreCase]) ⇒ <code>Array.&lt;string&gt;</code>
Get classes from an element or string that end with a specified string.

**Since**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| search | <code>string</code> |  | The string to search for. |
| context | <code>Element</code> \| <code>string</code> |  | The context to perform the search on. |
| [ignoreCase] | <code>boolean</code> | <code>false</code> | Set the case-sensitivity of the search. |

<a name="classesStartingWith"></a>

## classesStartingWith(search, context, [ignoreCase]) ⇒ <code>Array.&lt;string&gt;</code>
Get classes from an element or string that start with a specified string.

**Since**: 1.0.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| search | <code>string</code> |  | The string to search for. |
| context | <code>Element</code> \| <code>string</code> |  | The context to perform the search on. |
| [ignoreCase] | <code>boolean</code> | <code>false</code> | Set the case-sensitivity of the search. |

<a name="dispatch"></a>

## dispatch(target, type, [options]) ⇒ <code>boolean</code>
Dispatch a synthetic event to a target.

**Returns**: <code>boolean</code> - `false` if `event` is cancelable, and at least one of the eventhandlers which received `event` called `preventDefault()`. Otherwise `true`.  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to dispatch the event to. |
| type | <code>string</code> | The name of the event. |
| [options] | <code>CustomEventInit</code> \| <code>EventInit</code> | Additional event properties. |

<a name="on"></a>

## on(target, type, listener, [options]) ⇒ <code>void</code>
Add an event listener to the target.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to add the listener to. |
| type | <code>string</code> | The listener type. |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | The listener callback. |
| [options] | <code>boolean</code> \| <code>AddEventListenerOptions</code> | The listener options. |

<a name="off"></a>

## off(target, type, listener, [options]) ⇒ <code>void</code>
Remove an event listener from the target.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to remove the listener from. |
| type | <code>string</code> | The listener type. |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | The listener callback. |
| [options] | <code>boolean</code> \| <code>AddEventListenerOptions</code> | The listener options. |

<a name="offDelegate"></a>

## offDelegate(target, selectors, type, listener, [options]) ⇒ <code>void</code>
Remove a delegate listener from the target.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The target to remove the listener from. |
| selectors | <code>string</code> | The selectors that would have been matched against. |
| type | <code>string</code> | The listener type. |
| listener | <code>EventListener</code> \| <code>EventListenerObject</code> | The listener callback. |
| [options] | <code>boolean</code> \| <code>AddEventListenerOptions</code> | The listener options. |

<a name="onDelegate"></a>

## onDelegate(target, selectors, type, listener, [options]) ⇒ <code>void</code>
Add a delegate event listener to the target. The callback argument will beinvoked when the event is dispatched on any descendant element that matchesthe given selectors.The `Event` object returned in the listener callback includes a non-standardmethod `stopDelegation()`, which stops any further traversal up the DOM treein search of matches.The listener callback includes a second argument `index`, which indicateshow many times the callback has been fired during the current event.

**Since**: 1.0.0  

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

<a name="loadImage"></a>

## loadImage(path) ⇒ <code>Promise.&lt;HTMLImageElement&gt;</code>
Load an image asynchronously.

**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | The image to load. |

<a name="loadImages"></a>

## loadImages(...paths) ⇒ <code>Promise.&lt;Array.&lt;HTMLImageElement&gt;&gt;</code>
Load one or more images asynchronously.

**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| ...paths | <code>Array.&lt;string&gt;</code> | The image(s) to load. |

<a name="create"></a>

## create(tagName, [options]) ⇒ <code>Element</code>
Creates an instance of the element for the specified tag, allowing you todefine attributes and content at the same time.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | The type of element to be created. |
| [options] | <code>Object</code> | Additional options. |
| [options.attributes] | <code>Object.&lt;string, (string\|number\|boolean)&gt;</code> | Attributes to be added to the element. |
| [options.children] | <code>Array.&lt;Element&gt;</code> | Child elements to append to the element. |
| [options.innerHTML] | <code>string</code> | Set the HTML of the element. |

<a name="empty"></a>

## empty(element) ⇒ <code>void</code>
Empty an element.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to empty. |

<a name="replace"></a>

## replace(element, ...replacements) ⇒ <code>void</code>
Replace the contents of an element with one or more items.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element to replace the contents of. |
| ...replacements | <code>Array.&lt;Node, string&gt;</code> | The new items to insert into the element. |

<a name="find"></a>

## find(selectors, context) ⇒ <code>null</code> \| <code>Element</code>
Returns the first element within context that matches the given selectors.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| selectors | <code>string</code> | The selectors to match against. |
| context | <code>Document</code> \| <code>DocumentFragment</code> \| <code>Element</code> | The context from which to search from. |

<a name="findOrThrow"></a>

## findOrThrow(selectors, context) ⇒ <code>Element</code>
Returns the first element within context that matches the given selectors.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| selectors | <code>string</code> | The selectors to match against. |
| context | <code>Document</code> \| <code>DocumentFragment</code> \| <code>Element</code> | The context from which to search from. |

<a name="findAll"></a>

## findAll(selectors, context) ⇒ <code>Array.&lt;Element&gt;</code>
Returns all descendant elements within context that match the given selectors.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| selectors | <code>string</code> | The selectors to match against. |
| context | <code>Document</code> \| <code>DocumentFragment</code> \| <code>Element</code> | The context from which to search from. |

<a name="closest"></a>

## closest(element, selector) ⇒ <code>null</code> \| <code>Element</code>
Returns the first ancestor that matches selector. Not inclusive of element.

**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element from which to search. |
| selector | <code>string</code> | Selector to match ancestors against. |

<a name="siblingsAfter"></a>

## siblingsAfter(element, [selector]) ⇒ <code>Array.&lt;Element&gt;</code>
Get the following siblings of an element, optionally filtered by a selector.

**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element whose siblings will be returned. |
| [selector] | <code>string</code> | Optional selector to match siblings against. |

<a name="siblingsBefore"></a>

## siblingsBefore(element, [selector]) ⇒ <code>Array.&lt;Element&gt;</code>
Get the preceding siblings of an element, optionally filtered by a selector.

**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element whose siblings will be returned. |
| [selector] | <code>string</code> | Optional selector to match siblings against. |

<a name="siblings"></a>

## siblings(element, [selector]) ⇒ <code>Array.&lt;Element&gt;</code>
Get the siblings of an element, optionally filtered by a selector.

**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element whose siblings will be returned. |
| [selector] | <code>string</code> | Optional selector to match siblings against. |

<a name="convertString"></a>

## convertString(input, type) ⇒ <code>boolean</code> \| <code>number</code>
Convert a string into another primitive type.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The string to convert. |
| type | <code>&#x27;boolean&#x27;</code> \| <code>&#x27;number&#x27;</code> | The type to convert to. |

<a name="parseJson"></a>

## parseJson(input, reviver) ⇒ <code>object</code>
Convert a JSON string into an object.

**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | A valid JSON string. |
| reviver | <code>function</code> | A function that transforms the results. |

