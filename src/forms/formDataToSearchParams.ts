/**
 * Takes a `FormData` object and converts it into a `URLSearchParams` object.
 *
 * @remarks
 * Useful in cases where you want to send data in`application/x-www-form-urlencoded`
 * format, or if you want to serialise a form's data using `URLSearchParams.toString()`.
 *
 * @param formData - The `FormData` object to convert.
 * @param fileHandler - Method to handle `File` objects.
 *
 * @public
 */
function formDataToSearchParams(
    formData: FormData,
    fileHandler: (file: File) => string = (file: File) => file.name,
): URLSearchParams {
    return new URLSearchParams(
        [...formData.entries()].map(([key, value]) => [
            key,
            value instanceof File ? fileHandler(value) : value,
        ]),
    );
}

export { formDataToSearchParams };
