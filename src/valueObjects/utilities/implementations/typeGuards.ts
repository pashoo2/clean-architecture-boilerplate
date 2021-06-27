import {TSimpleType} from 'src/interfaces';
import {isSimpleType} from 'src/utilities/implementations/typeGuards';
import {
  IBaseValueObject,
  IMultiValuesValueObject,
  IMultiValuesValueObjectValue,
} from 'src/valueObjects/interfaces';

export function isValueObject(
  valueObject: any
): valueObject is IBaseValueObject<any> | IMultiValuesValueObject<any> {
  if (!valueObject) {
    return false;
  }
  if (typeof valueObject !== 'object') {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(valueObject, 'value')) {
    return false;
  }
  if (
    typeof valueObject.serialize !== 'function' ||
    valueObject.serialize.length
  ) {
    return false;
  }
  if (
    typeof valueObject.equalsTo !== 'function' ||
    valueObject.equalsTo.length !== 1
  ) {
    return false;
  }
  return true;
}

export function isBaseValueObject(
  valueObject: any
): valueObject is IBaseValueObject<TSimpleType> {
  if (!isValueObject(valueObject)) {
    return false;
  }
  if (!isSimpleType(valueObject.value)) {
    return false;
  }
  return true;
}

export function isMultipleValuesValueObject(
  valueObject: any
): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue> {
  if (!isValueObject(valueObject)) {
    return false;
  }
  if (isSimpleType(valueObject.value)) {
    return false;
  }
  if (!valueObject.value) {
    return false;
  }
  if (typeof valueObject.value !== 'object') {
    return false;
  }
  return true;
}

export function isMultipleValuesValueObjectInsteadOfBase(
  valueObject:
    | IMultiValuesValueObject<IMultiValuesValueObjectValue>
    | IBaseValueObject<TSimpleType>
): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue> {
  if (valueObject.value && typeof valueObject.value === 'object') {
    return true;
  }
  return false;
}
