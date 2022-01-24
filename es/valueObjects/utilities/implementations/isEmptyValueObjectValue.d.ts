import { TSimpleType } from '../../../interfaces';
import { IBaseValueObject, IMultiValuesValueObject, IMultiValuesValueObjectValue } from '../../../valueObjects/interfaces';
export declare function isEmptyBaseValueObjectValue(valueObjectValue: IBaseValueObject<TSimpleType>['value']): boolean;
export declare function isEmptyMultipleValuesValueObjectValue(valueObjectValue: IMultiValuesValueObject<IMultiValuesValueObjectValue>['value']): boolean;
