import {TSimpleType} from 'src/interfaces';
import {
  IBaseValueObject,
  IMultiValuesValueObject,
  TIdentityValueObject,
} from 'src/valueObjects/interfaces';
import {
  isEmptyBaseValueObjectValue,
  isEmptyMultipleValuesValueObjectValue,
} from 'src/valueObjects/utilities/implementations/isEmptyValueObjectValue';
import {
  isBaseValueObject,
  isMultipleValuesValueObject,
  isMultipleValuesValueObjectInsteadOfBase,
  isValueObject,
} from 'src/valueObjects/utilities/implementations/typeGuards';

export function validateEntityIdentityBase(
  entityId: IBaseValueObject<TSimpleType>
): void {
  if (!isBaseValueObject(entityId)) {
    throw new Error('Should be a valid simple value object');
  }
  if (isEmptyBaseValueObjectValue(entityId.value)) {
    throw new Error('Identity value object should not have an empty value');
  }
}

export function validateEntityIdentityMultipleValue(
  entityId: IMultiValuesValueObject<any>
): void {
  if (!isMultipleValuesValueObject(entityId)) {
    throw new Error('Should be a valid multiple values value object');
  }
  if (isEmptyMultipleValuesValueObjectValue(entityId.value)) {
    throw new Error('Identity value object should not have an empty value');
  }
}

export function validateEntityIdentity(entityId: TIdentityValueObject): void {
  if (!isValueObject(entityId)) {
    throw new Error('Entity should have a valid identity value object');
  }
  if (isMultipleValuesValueObjectInsteadOfBase(entityId)) {
    validateEntityIdentityMultipleValue(entityId);
  } else {
    validateEntityIdentityBase(entityId);
  }
}
