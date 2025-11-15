/**
 * Set a global CSS variable.
 *
 * @param property - The name of the CSS variable.
 * @param value - The value of the CSS variable.
 *
 * @public
 */
function setGlobalCSSVariable(property: string, value: string | null): void {
    const styles = document.documentElement.style;

    if (value === null) {
        styles.removeProperty(property);
    } else {
        styles.setProperty(property, value);
    }
}

export { setGlobalCSSVariable };
