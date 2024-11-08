import { ATTR_DATA_ELEMENT_HIDE_CLASS } from './internal/constants';

function hideElement(element: HTMLElement, useClass?: string): void {
    if (typeof useClass === 'string') {
        element.classList.add(useClass);
        element.setAttribute(ATTR_DATA_ELEMENT_HIDE_CLASS, useClass);
    } else {
        element.style.setProperty('display', 'none', 'important');
    }
}

export { hideElement };

// TODO: JSDOC
