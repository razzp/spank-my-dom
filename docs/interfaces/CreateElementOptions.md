[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / CreateElementOptions

# Interface: CreateElementOptions\<T\>

Defined in: [src/manipulation/createElement.ts:6](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/manipulation/createElement.ts#L6)

An optional configuration object for `createElement`.

## Extends

- `ElementCreationOptions`

## Type Parameters

### T

`T` *extends* keyof `HTMLElementTagNameMap`

## Properties

### append?

> `optional` **append?**: `Node`[]

Defined in: [src/manipulation/createElement.ts:33](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/manipulation/createElement.ts#L33)

Nodes to append to the element.

***

### attributes?

> `optional` **attributes?**: \{ \[A in string \| number \| symbol\]?: HTMLElementTagNameMap\[T\]\[A\] \}

Defined in: [src/manipulation/createElement.ts:15](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/manipulation/createElement.ts#L15)

Attributes to add to the element.

***

### classes?

> `optional` **classes?**: `string`[]

Defined in: [src/manipulation/createElement.ts:21](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/manipulation/createElement.ts#L21)

Classes to add to the element.

***

### content?

> `optional` **content?**: `string`

Defined in: [src/manipulation/createElement.ts:11](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/manipulation/createElement.ts#L11)

Sets the `innerHTML` of the element.

***

### customElementRegistry?

> `optional` **customElementRegistry?**: `CustomElementRegistry` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:694

#### Inherited from

`ElementCreationOptions.customElementRegistry`

***

### data?

> `optional` **data?**: `object`

Defined in: [src/manipulation/createElement.ts:29](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/manipulation/createElement.ts#L29)

Data to add to the element.

#### Index Signature

\[`key`: `string`\]: `unknown`

***

### is?

> `optional` **is?**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:695

#### Inherited from

`ElementCreationOptions.is`

***

### prepend?

> `optional` **prepend?**: `Node`[]

Defined in: [src/manipulation/createElement.ts:37](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/manipulation/createElement.ts#L37)

Nodes to prepend to the element.

***

### styles?

> `optional` **styles?**: `object`

Defined in: [src/manipulation/createElement.ts:25](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/manipulation/createElement.ts#L25)

Styles to add to the element.

#### Index Signature

\[`key`: `string`\]: `string`
