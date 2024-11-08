import { ATTR_DATA_ELEMENT_HIDE_CLASS } from './internal/constants';

function showElement(element: HTMLElement): void {
    const useClass = element.getAttribute(ATTR_DATA_ELEMENT_HIDE_CLASS);

    if (useClass !== null) {
        element.classList.remove(useClass);
        element.removeAttribute(ATTR_DATA_ELEMENT_HIDE_CLASS);
    } else {
        element.style.removeProperty('display');
    }
}

export { showElement };

// TODO: JSDOC
