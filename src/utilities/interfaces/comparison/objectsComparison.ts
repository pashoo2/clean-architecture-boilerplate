import {ICompareValuesStrategy} from './valuesComparisonStrategies';

export interface ICompareObjects<O1 extends Object, O2 extends Object> {
  (objectFirst: O1, objectSecond: O2): boolean;
}

export interface ICompareObjectsWithStrategy<
  O1 extends Object,
  O2 extends Object,
  S extends ICompareValuesStrategy<S>
> {
  (objectFirst: O1, objectSecond: O2, compareValuesStrategy: S): boolean;
}

export interface ICompareArraysWithStrategy<
  A1 extends Array<unknown>,
  A2 extends Array<unknown>,
  S extends ICompareValuesStrategy<S>
> {
  (objectFirst: A1, objectSecond: A2, compareValuesStrategy: S): boolean;
}
