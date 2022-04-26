/**
 * Load an image asynchronously.
 * @since 0.2.0
 *
 * @param {string} path The image to load.
 *
 * @returns {Promise<HTMLImageElement>}
 */
function loadImage(path: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.src = path;

        image
            .decode()
            .then(() => resolve(image))
            .catch(reject);
    });
}

export { loadImage };
