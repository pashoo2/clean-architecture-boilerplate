import { TSimpleType } from '../../../interfaces/common';
export declare function isAnyNumber(v: unknown): v is Number | number;
export declare function isString(v: unknown): v is string | InstanceType<StringConstructor>;
export declare function isSimpleType(v: unknown): v is TSimpleType;
