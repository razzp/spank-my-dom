/**
 * Load an image asynchronously.
 * @since 0.2.0
 *
 * @param {string} path The image to load.
 *
 * @returns {Promise<HTMLImageElement>}
 */
function loadImage(path: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();

        image.onload = () => resolve(image);
        image.onerror = reject;

        image.src = path;
    });
}

export { loadImage };
