import {ICompareValuesStrategy} from "./valuesComparison";

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
