import {TSimpleType} from '../../../interfaces/common';
import {isAnyNumber, isString} from '../typeGuards/isSimpleType';

export function areSimpleValuesEqual<
  V1 extends TSimpleType,
  V2 extends TSimpleType
>(value1: V1, value2: V2): boolean {
  if (arguments.length === 0) {
    return false;
  }
  if ((value1 as TSimpleType) === (value2 as TSimpleType)) {
    return true;
  }
  if (isAnyNumber(value1) && isAnyNumber(value2)) {
    return (
      (value1 as number) === value2 ||
      (Number.isNaN(value1) && Number.isNaN(value2))
    );
  }
  if (isString(value1) && isString(value2)) {
    return (value1 as string).trim() === (value2 as string).trim();
  }
  return false;
}
