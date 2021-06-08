import {TSimpleType} from '../../../interfaces/common';

export function areSimpleValuesEqual<
  V1 extends TSimpleType,
  V2 extends TSimpleType
>(value1: V1, value2: V2): boolean {
  if ((value1 as TSimpleType) === (value2 as TSimpleType)) {
    return true;
  }

  const value1Type = typeof value1;
  const value2Type = typeof value2;

  if (value1Type !== value2Type) {
    return false;
  }
  if (value1Type === 'string') {
    return (value1 as string).trim() === (value2 as string).trim();
  }
  return (value1 as unknown) === value2;
}
