[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / CreateElementOptions

# Interface: CreateElementOptions\<T\>

An optional configuration object for `createElement`.

## Extends

- `ElementCreationOptions`

## Type Parameters

### T

`T` *extends* keyof `HTMLElementTagNameMap`

## Properties

### append?

> `optional` **append?**: `Node`[]

Nodes to append to the element.

***

### attributes?

> `optional` **attributes?**: \{ \[A in string \| number \| symbol\]?: HTMLElementTagNameMap\[T\]\[A\] \}

Attributes to add to the element.

***

### classes?

> `optional` **classes?**: `string`[]

Classes to add to the element.

***

### content?

> `optional` **content?**: `string`

Sets the `innerHTML` of the element.

***

### customElementRegistry?

> `optional` **customElementRegistry?**: `CustomElementRegistry` \| `null`

#### Inherited from

`ElementCreationOptions.customElementRegistry`

***

### data?

> `optional` **data?**: `object`

Data to add to the element.

#### Index Signature

\[`key`: `string`\]: `unknown`

***

### is?

> `optional` **is?**: `string`

#### Inherited from

`ElementCreationOptions.is`

***

### prepend?

> `optional` **prepend?**: `Node`[]

Nodes to prepend to the element.

***

### styles?

> `optional` **styles?**: `object`

Styles to add to the element.

#### Index Signature

\[`key`: `string`\]: `string`
