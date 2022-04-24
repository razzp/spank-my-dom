import type { StringConvertibleTypesDict } from '../../interfaces/StringConvertibleTypesDict';

type AttributeType =
    | string
    | StringConvertibleTypesDict[keyof StringConvertibleTypesDict];

export { AttributeType };
