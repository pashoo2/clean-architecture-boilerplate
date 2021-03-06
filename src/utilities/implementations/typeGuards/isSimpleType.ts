import {TSimpleType} from '@root/interfaces/common';

export function isAnyNumber(v: unknown): v is Number | number {
  return typeof v === 'number' || v instanceof Number;
}

export function isString(
  v: unknown
): v is string | InstanceType<StringConstructor> {
  return typeof v === 'string' || v instanceof String;
}

export function isSimpleType(v: unknown): v is TSimpleType {
  if (
    v === null ||
    v === undefined ||
    typeof v === 'boolean' ||
    isString(v) ||
    (isAnyNumber(v) && Number.isFinite(v.valueOf()))
  ) {
    return true;
  }
  return false;
}
