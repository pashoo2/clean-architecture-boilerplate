import {ICompareSimpleTypeValues} from './simpleTypeValueComparison';
import {TSimpleType} from '../../../interfaces';
import {ICompareDateValues} from './objectTypeValuesComparison';
import {ICompareObjectsWithStrategy} from './objectsComparison';

export interface ICompareAnyByStrategy<
  V1 extends any,
  V2 extends any,
  S extends ICompareValuesStrategy<S>
> {
  (anyTypeValue1: V1, anyTypeValue2: V2, strategy: S): boolean;
}

export interface ICompareValuesStrategy<S extends ICompareValuesStrategy<S>> {
  compareSimpleType: ICompareSimpleTypeValues<TSimpleType, TSimpleType>;
  compareDates: ICompareDateValues;
  compareObjects: ICompareObjectsWithStrategy<Object, Object, S>;
  compareArrays: ICompareObjectsWithStrategy<Object, Object, S>;
  compareOther: ICompareAnyByStrategy<any, any, S>;
}

export interface ICompareValuesShallowStrategy
  extends Omit<
    ICompareValuesStrategy<any>,
    'compareObjects' | 'compareOther' | 'compareArrays'
  > {}

export interface ICompareValuesByStrategy<
  V1,
  V2,
  S extends ICompareValuesStrategy<S>
> {
  (firstValue: V1, secondValue: V2, strategy: S): boolean;
}

export interface ICompareValues<V1, V2> {
  (firstValue: V1, secondValue: V2): boolean;
}

export interface ICompareValuesAsync<V1, V2> {
  (firstValue: V1, secondValue: V2): Promise<boolean>;
}
