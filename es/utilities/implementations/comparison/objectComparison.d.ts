import { ICompareValuesShallowStrategy, ICompareValues } from '../../interfaces/comparison/valuesComparisonStrategies';
import { ICompareValuesStrategy } from '../../interfaces/comparison/valuesComparisonStrategies';
export declare function compareObjectsDeepWithCompareValuesFunction<O1 extends Object, O2 extends Object>(objectFirst: O1, objectSecond: O2, compareValues: ICompareValues<any, any>): boolean;
export declare function compareObjectsShallowByStrategy<O1 extends Object, O2 extends Object, S extends ICompareValuesShallowStrategy>(objectFirst: O1, objectSecond: O2, shallowComparisonStrategy: S): boolean;
export declare function compareObjectsDeepByStrategy<O1 extends Object, O2 extends Object, S extends ICompareValuesStrategy<S>>(objectFirst: O1, objectSecond: O2, comparisonStrategy: S): boolean;
