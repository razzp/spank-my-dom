import type { AttributeType } from '../../attributes/aliases/AttributeType';

interface CreateElementOptions {
    attributes?: Record<string, AttributeType>;
    children?: Element[];
    innerHTML?: string;
}

export { CreateElementOptions };
