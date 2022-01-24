import { TSimpleType } from '../../../interfaces';
import { IBaseValueObject, IMultiValuesValueObject, IMultiValuesValueObjectValue } from '../../../valueObjects/interfaces';
export interface IIsEmptyBaseValueObjectValue {
    (valueObjectValue: IBaseValueObject<TSimpleType>['value']): boolean;
}
export interface IIsEmptyMultipleValuesValueObjectValue {
    (valueObjectValue: IMultiValuesValueObject<IMultiValuesValueObjectValue>['value']): boolean;
}
