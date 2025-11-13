/**
 * An optional configuration object for `formDataToSearchParams`.
 *
 * @public
 */
type FormDataToSearchParamsOptions = {
    /**
     * A function to handle the transformation of a `File` object.
     * By default, the name of the `File` is used.
     */
    handleFile?: (file: File) => string;
};

/**
 * Takes a `FormData` object and converts it into a `URLSearchParams` object.
 *
 * @remarks
 * Useful in cases where you want to send data in`application/x-www-form-urlencoded`
 * format, or if you want to serialise a form's data using `URLSearchParams.toString()`.
 *
 * @param formData - The `FormData` object to convert.
 * @param options - An optional configuration object.
 *
 * @example
 * Serialise a form.
 * ```ts
 * const formData = new FormData(formElement);
 * const searchParams = formDataToSearchParams(formData);
 * const serialised = searchParams.toString();
 * ```
 *
 * @example
 * Define a custom transformer for handling `File` objects.
 * ```ts
 * const searchParams = formDataToSearchParams(formData, {
 *     handleFile: (file) => `Name: ${file.name}`;
 * });
 * ```
 *
 * @public
 */
function formDataToSearchParams(
    formData: FormData,
    options?: FormDataToSearchParamsOptions,
): URLSearchParams {
    const { handleFile } = {
        handleFile: (file: File) => file.name,
        ...options,
    };

    return new URLSearchParams(
        [...formData].map(([key, value]) => [
            key,
            value instanceof File ? handleFile(value) : value,
        ]),
    );
}

export { formDataToSearchParams, type FormDataToSearchParamsOptions };
