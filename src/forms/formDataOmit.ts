/**
 * Filter a `FormData` object by all keys that *are not* specified.
 *
 * @param formData - The `FormData` object to omit from.
 * @param keys - The keys to omit.
 *
 * @public
 */
function formDataOmit(
    formData: FormData,
    ...keys: string[]
): { [key: string]: FormDataEntryValue } {
    const entries = [...formData.entries()].filter(
        ([key]) => !keys.includes(key),
    );

    return Object.fromEntries(entries);
}

export { formDataOmit };
