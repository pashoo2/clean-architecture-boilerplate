import { ICompareValues, ICompareValuesStrategy } from '../../interfaces/comparison/valuesComparisonStrategies';
export declare function compareValuesByStrategy<V1, V2, S extends ICompareValuesStrategy<S>>(firstValue: V1, secondValue: V2, comparisonStrategy: S): boolean;
export declare function compareValuesFunctionFabric<V1, V2, S extends ICompareValuesStrategy<S>>(comparisonStrategy: S): ICompareValues<V1, V2>;
