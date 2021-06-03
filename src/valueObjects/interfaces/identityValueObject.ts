import {
  IMultiValuesValueObject,
  IMultiValuesValueObjectValue,
} from './multipleValuesValueObject';
import {IBaseValueObject} from './baseValueObject';

export interface IIdentityValueObjectSimple
  extends IBaseValueObject<string, string> {}

export interface IIdentityMultiValueObject<
  V extends IMultiValuesValueObjectValue = IMultiValuesValueObjectValue
> extends IMultiValuesValueObject<V> {}

export type TIdentityValueObject =
  | IIdentityValueObjectSimple
  | IIdentityMultiValueObject;
