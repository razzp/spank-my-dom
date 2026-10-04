[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / getSiblings

# Function: getSiblings()

> **getSiblings**\<`T`\>(`direction`, `element`, `selectors?`): `T`[]

Defined in: [src/traversal/getSiblings.ts:34](https://github.com/razzp/spank-my-dom/blob/a559af9c65875b3c630d2c18b9cb8847000d6d7c/src/traversal/getSiblings.ts#L34)

Get the siblings of an element, optionally filtered by selectors.

## Type Parameters

### T

`T` *extends* `Element` = `HTMLElement`

## Parameters

### direction

`"after"` \| `"before"` \| `"all"`

The direction(s) to search from `element`.

### element

`Element`

The element whose siblings will be returned.

### selectors?

`string`

One or more selectors to match.

## Returns

`T`[]

## Examples

Find all siblings of an element.
```ts
const siblings = getSiblings('all', element);
```

Find all siblings before an element.
```ts
const siblings = getSiblings('before', element);
```

Find all siblings after an element.
```ts
const siblings = getSiblings('after', element);
```

Find siblings of an element, filtered by a CSS selector.
```ts
const siblings = getSiblings('all', element, '.foo');
```
