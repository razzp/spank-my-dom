/**
 * Create a `FormData` object representing form fields and their values.
 *
 * @param form - The form to use.
 * @param additionalEntries - Additional entries to add.
 *
 * @public
 */
function getFormData(
    form: HTMLFormElement,
    additionalEntries?: { [key: string]: unknown },
): FormData {
    const data = new FormData(form);

    if (additionalEntries) {
        for (const [key, value] of Object.entries(additionalEntries)) {
            data.append(key, String(value));
        }
    }

    return data;
}

export { getFormData };
