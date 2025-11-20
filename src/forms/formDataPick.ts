/**
 * Filter a `FormData` object by all keys that *are* specified.
 *
 * @param formData - The `FormData` object to pick from.
 * @param keys - The keys to pick.
 *
 * @public
 */
function formDataPick<T extends string>(
    formData: FormData,
    ...keys: T[]
): { [key in T]: FormDataEntryValue } {
    const entries = keys.map<[string, FormDataEntryValue]>((key) => {
        const value = formData.get(key);

        if (!value) {
            throw new Error(`Key "${key}" missing from FormData object.`);
        }

        return [key, value];
    });

    return Object.fromEntries(entries) as { [key in T]: FormDataEntryValue };
}

export { formDataPick };
