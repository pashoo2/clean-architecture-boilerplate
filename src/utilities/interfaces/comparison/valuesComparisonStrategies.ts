import {ICompareSimpleTypeValues} from './simpleTypeValueComparison';
import {TSimpleType} from '../../../interfaces';
import {ICompareDateValues} from './objectTypeValuesComparison';
import {ICompareObjectsWithStrategy} from './objectsComparition';

export interface ICompareAnyWithStrategy<
  V1 extends any,
  V2 extends any,
  S extends ICompareValuesStrategy<S>
> {
  (anyTypeValue1: V1, anyTypeValue2: V2, strategy: S): boolean;
}

export interface ICompareValuesStrategy<S extends ICompareValuesStrategy<S>> {
  compareSimpleTypeStrategy: ICompareSimpleTypeValues<TSimpleType, TSimpleType>;
  compareDates: ICompareDateValues;
  compareObjects: ICompareObjectsWithStrategy<Object, Object, S>;
  compareOther: ICompareAnyWithStrategy<any, any, S>;
}

export interface ICompareValuesShallowStrategy
  extends Omit<
    ICompareValuesStrategy<any>,
    'compareObjects' | 'compareOther'
  > {}

export interface ICompareValuesByStrategy<
  V1,
  V2,
  S extends ICompareValuesStrategy<S>
> {
  (firstValue: V1, secondValue: V2, strategy: S): boolean;
}
