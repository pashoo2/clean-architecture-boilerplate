import { TSimpleType } from '../../../interfaces';
import { IBaseValueObject, IMultiValuesValueObject, IMultiValuesValueObjectValue } from '../../../valueObjects/interfaces';
export declare function isValueObject(valueObject: any): valueObject is IBaseValueObject<any> | IMultiValuesValueObject<any>;
export declare function isBaseValueObject(valueObject: any): valueObject is IBaseValueObject<TSimpleType>;
export declare function isMultipleValuesValueObject(valueObject: any): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue>;
export declare function isMultipleValuesValueObjectInsteadOfBase(valueObject: IMultiValuesValueObject<IMultiValuesValueObjectValue> | IBaseValueObject<TSimpleType>): valueObject is IMultiValuesValueObject<IMultiValuesValueObjectValue>;
