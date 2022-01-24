import { TSimpleObject, TSimpleArray, TSimpleType } from '../../../interfaces/common';
export declare function isSimpleTypeOrArrayOrObject(item: unknown): item is TSimpleType | TSimpleArray | TSimpleObject;
export declare function isObjectWithoutConstructor(o: Object): boolean;
export declare function isSimpleObject(o: any): o is TSimpleObject;
export declare function isSimpleArray(arr: unknown): arr is TSimpleArray;
