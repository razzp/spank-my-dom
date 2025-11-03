/**
 * Load an image asynchronously.
 *
 * @param path - The image to load.
 *
 * @public
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
