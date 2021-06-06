import {
  ISimpleObject,
  TSimpleArray,
  TSimpleType,
} from '../../../interfaces/common';
import {isSimpleType} from './isSimpleType';

export function isSimpleTypeOrArrayOrObject(
  item: unknown
): item is TSimpleType | TSimpleArray | ISimpleObject {
  return isSimpleType(item) || isSimpleObject(item) || isSimpleArray(item);
}

export function isSimpleObject(o: any): o is ISimpleObject {
  return (
    Boolean(o && typeof o === 'object' && o.constructor === Object) &&
    Object.getOwnPropertyNames(o).every(key => {
      return isSimpleTypeOrArrayOrObject(o[key]);
    })
  );
}

export function isSimpleArray(arr: unknown): arr is TSimpleArray {
  return Array.isArray(arr) && arr.every(isSimpleTypeOrArrayOrObject);
}
