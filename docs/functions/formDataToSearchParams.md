[**spank-my-dom**](../index.md)

***

[spank-my-dom](../index.md) / formDataToSearchParams

# Function: formDataToSearchParams()

> **formDataToSearchParams**(`formData`, `options?`): `URLSearchParams`

Defined in: [src/forms/formDataToSearchParams.ts:42](https://github.com/razzp/spank-my-dom/blob/37a1d5730f62492fe7c812cf59fb148ede0f6ed7/src/forms/formDataToSearchParams.ts#L42)

Takes a `FormData` object and converts it into a `URLSearchParams` object.

## Parameters

### formData

`FormData`

The `FormData` object to convert.

### options?

[`FormDataToSearchParamsOptions`](../interfaces/FormDataToSearchParamsOptions.md)

An optional configuration object.

## Returns

`URLSearchParams`

## Remarks

Useful in cases where you want to send data in`application/x-www-form-urlencoded`
format, or if you want to serialise a form's data using `URLSearchParams.toString()`.

## Examples

Serialise a form.
```ts
const formData = new FormData(formElement);
const searchParams = formDataToSearchParams(formData);
const serialised = searchParams.toString();
```

Define a custom transformer for handling `File` objects.
```ts
const searchParams = formDataToSearchParams(formData, {
    handleFile: (file) => `Name: ${file.name}`;
});
```
