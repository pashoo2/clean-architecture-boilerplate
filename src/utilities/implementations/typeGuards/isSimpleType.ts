import {TSimpleType} from 'src/interfaces/common';

function isAnyNumber(v: unknown): v is Number | number {
  return typeof v === 'number' || v instanceof Number;
}

export function isSimpleType(v: unknown): v is TSimpleType {
  if (
    v === null ||
    v === undefined ||
    typeof v === 'boolean' ||
    typeof v === 'string' ||
    v instanceof String ||
    (isAnyNumber(v) && isFinite(v.valueOf()))
  ) {
    return true;
  }
  return false;
}
