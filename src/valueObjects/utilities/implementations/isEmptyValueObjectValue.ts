import {TSimpleType} from '@root/interfaces';
import {
  isAnyNumber,
  isString,
} from '@root/utilities/implementations/typeGuards';
import {
  IBaseValueObject,
  IMultiValuesValueObject,
  IMultiValuesValueObjectValue,
} from '@root/valueObjects/interfaces';

export function isEmptyBaseValueObjectValue(
  valueObjectValue: IBaseValueObject<TSimpleType>['value']
): boolean {
  return (
    valueObjectValue === null ||
    valueObjectValue === undefined ||
    valueObjectValue === false ||
    (isAnyNumber(valueObjectValue) &&
      (valueObjectValue === 0 || Number.isNaN(valueObjectValue))) ||
    (isString(valueObjectValue) && valueObjectValue.trim() === '')
  );
}

export function isEmptyMultipleValuesValueObjectValue(
  valueObjectValue: IMultiValuesValueObject<IMultiValuesValueObjectValue>['value']
): boolean {
  if (!valueObjectValue) {
    return true;
  }
  return Object.keys(valueObjectValue).length === 0;
}
