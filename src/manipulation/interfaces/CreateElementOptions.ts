import type { AttributeType } from '../../attributes/aliases/AttributeType';

interface CreateElementOptions {
    attributes?: Record<string, AttributeType>;
    classes?: string[];
    children?: Element[];
    innerHTML?: string;
}

export { CreateElementOptions };
