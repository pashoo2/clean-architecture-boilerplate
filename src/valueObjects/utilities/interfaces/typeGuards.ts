import {TSimpleType} from 'src/interfaces';
import {
  IBaseValueObject,
  IMultiValuesValueObject,
  IMultiValuesValueObjectValue,
} from 'src/valueObjects/interfaces';

export interface IIsBaseValueObject {
  (valueObject: any): valueObject is IBaseValueObject<TSimpleType>;
}

export interface IIsMultipleValuesValueObject {
  (
    valueObject: any
  ): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue>;
}

export interface IIsValueObject {
  (valueObject: any): valueObject is
    | IMultiValuesValueObject<IMultiValuesValueObjectValue>
    | IBaseValueObject<TSimpleType>;
}

export interface IIsMultipleValuesValueObjectInsteadOfBase {
  (
    valueObject:
      | IMultiValuesValueObject<IMultiValuesValueObjectValue>
      | IBaseValueObject<TSimpleType>
  ): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue>;
}
