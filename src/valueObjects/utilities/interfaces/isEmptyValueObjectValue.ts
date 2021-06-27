import {TSimpleType} from 'src/interfaces';
import {
  IBaseValueObject,
  IMultiValuesValueObject,
  IMultiValuesValueObjectValue,
} from 'src/valueObjects/interfaces';

export interface IIsEmptyBaseValueObjectValue {
  (valueObjectValue: IBaseValueObject<TSimpleType>['value']): boolean;
}

export interface IIsEmptyMultipleValuesValueObjectValue {
  (
    valueObjectValue: IMultiValuesValueObject<IMultiValuesValueObjectValue>['value']
  ): boolean;
}
