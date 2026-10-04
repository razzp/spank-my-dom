[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / delegate

# Function: delegate()

> **delegate**\<`T`\>(`selectors`, `callback`): (`event`) => `void`

Defined in: [src/events/delegate.ts:53](https://github.com/razzp/spank-my-dom/blob/5b0a27fab349d78781f967e6aef61c11287b7389/src/events/delegate.ts#L53)

Create a delegate listener that fires on elements that match the
provided selectors, as the event bubbles up through the DOM.

## Type Parameters

### T

`T` *extends* `Event` \| `CustomEvent`\<`any`\>

## Parameters

### selectors

`string`

One or more selectors to match.

### callback

(`delegateEvent`) => `unknown`

The function called for each delegate match.

## Returns

(`event`) => `void`

## Examples

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
