import {TSimpleType} from '@root/interfaces';
import {
  IBaseValueObject,
  IMultiValuesValueObject,
  IMultiValuesValueObjectValue,
} from '@root/valueObjects/interfaces';

export interface IIsEmptyBaseValueObjectValue {
  (valueObjectValue: IBaseValueObject<TSimpleType>['value']): boolean;
}

export interface IIsEmptyMultipleValuesValueObjectValue {
  (
    valueObjectValue: IMultiValuesValueObject<IMultiValuesValueObjectValue>['value']
  ): boolean;
}
