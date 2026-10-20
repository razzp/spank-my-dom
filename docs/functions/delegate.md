[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / delegate

# Function: delegate()

## Call Signature

> **delegate**\<`K`, `E`\>(`selectors`, `callback`): (`event`) => `void`

Create a delegate listener that fires on elements that match the
provided selectors, as the event bubbles up through the DOM.

### Type Parameters

#### K

`K` *extends* keyof `HTMLElementTagNameMap`

#### E

`E` *extends* `Event` \| `CustomEvent`\<`any`\>

### Parameters

#### selectors

`K`

One or more selectors to match.

#### callback

(`event`) => `void`

The function called for each delegate match.

### Returns

(`event`) => `void`

### Examples

Do something with a matched element.
```ts
document.addEventListener('click', delegate('.foo', ({ delegateTarget }) => {
    console.log(delegateTarget);
}));
```

Stop delegation if there are multiple matches within the event bubble
that you don't want to trigger callbacks for.
```ts
document.addEventListener('click', delegate('.foo', ({ stopDelegation }) => {
    if (condition) {
        stopDelegation();
    }
}));
```

## Call Signature

> **delegate**\<`K`, `E`\>(`selectors`, `callback`): (`event`) => `void`

Create a delegate listener that fires on elements that match the
provided selectors, as the event bubbles up through the DOM.

### Type Parameters

#### K

`K` *extends* keyof `MathMLElementTagNameMap`

#### E

`E` *extends* `Event` \| `CustomEvent`\<`any`\>

### Parameters

#### selectors

`K`

One or more selectors to match.

#### callback

(`event`) => `void`

The function called for each delegate match.

### Returns

(`event`) => `void`

### Examples

Do something with a matched element.
```ts
document.addEventListener('click', delegate('.foo', ({ delegateTarget }) => {
    console.log(delegateTarget);
}));
```

Stop delegation if there are multiple matches within the event bubble
that you don't want to trigger callbacks for.
```ts
document.addEventListener('click', delegate('.foo', ({ stopDelegation }) => {
    if (condition) {
        stopDelegation();
    }
}));
```

## Call Signature

> **delegate**\<`K`, `E`\>(`selectors`, `callback`): (`event`) => `void`

Create a delegate listener that fires on elements that match the
provided selectors, as the event bubbles up through the DOM.

### Type Parameters

#### K

`K` *extends* keyof `SVGElementTagNameMap`

#### E

`E` *extends* `Event` \| `CustomEvent`\<`any`\>

### Parameters

#### selectors

`K`

One or more selectors to match.

#### callback

(`event`) => `void`

The function called for each delegate match.

### Returns

(`event`) => `void`

### Examples

Do something with a matched element.
```ts
document.addEventListener('click', delegate('.foo', ({ delegateTarget }) => {
    console.log(delegateTarget);
}));
```

Stop delegation if there are multiple matches within the event bubble
that you don't want to trigger callbacks for.
```ts
document.addEventListener('click', delegate('.foo', ({ stopDelegation }) => {
    if (condition) {
        stopDelegation();
    }
}));
```

## Call Signature

> **delegate**\<`T`, `E`\>(`selectors`, `callback`): (`event`) => `void`

Create a delegate listener that fires on elements that match the
provided selectors, as the event bubbles up through the DOM.

### Type Parameters

#### T

`T` *extends* `Element`

#### E

`E` *extends* `Event` \| `CustomEvent`\<`any`\>

### Parameters

#### selectors

`string`

One or more selectors to match.

#### callback

(`event`) => `void`

The function called for each delegate match.

### Returns

(`event`) => `void`

### Examples

Do something with a matched element.
```ts
document.addEventListener('click', delegate('.foo', ({ delegateTarget }) => {
    console.log(delegateTarget);
}));
```

Stop delegation if there are multiple matches within the event bubble
that you don't want to trigger callbacks for.
```ts
document.addEventListener('click', delegate('.foo', ({ stopDelegation }) => {
    if (condition) {
        stopDelegation();
    }
}));
```
