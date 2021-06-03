import {TSimpleType} from 'src/interfaces/common';

export function isSimpleType(v: unknown): v is TSimpleType {
  if (
    v === null ||
    typeof v === 'string' ||
    typeof v === 'boolean' ||
    typeof v === 'undefined' ||
    (typeof v === 'number' && isFinite(v))
  ) {
    return true;
  }
  return false;
}
