function empty<T extends Element>(element: T): void {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

export { empty };
