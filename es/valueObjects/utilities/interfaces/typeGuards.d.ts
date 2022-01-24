import { TSimpleType } from '../../../interfaces';
import { IBaseValueObject, IMultiValuesValueObject, IMultiValuesValueObjectValue } from '../../../valueObjects/interfaces';
export interface IIsBaseValueObject {
    (valueObject: any): valueObject is IBaseValueObject<TSimpleType>;
}
export interface IIsMultipleValuesValueObject {
    (valueObject: any): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue>;
}
export interface IIsValueObject {
    (valueObject: any): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue> | IBaseValueObject<TSimpleType>;
}
export interface IIsMultipleValuesValueObjectInsteadOfBase {
    (valueObject: IMultiValuesValueObject<IMultiValuesValueObjectValue> | IBaseValueObject<TSimpleType>): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue>;
}
