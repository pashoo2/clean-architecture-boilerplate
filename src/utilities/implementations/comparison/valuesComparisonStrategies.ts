import {
  ICompareValuesShallowStrategy,
  ICompareValuesStrategy,
} from '../../interfaces/comparison/valuesComparisonStrategies';
import {areDatesEqual} from './objectTypeValuesComparison';
import {areSimpleValuesEqual} from './simpleTypeValuesComparison';
import {compareObjectsDeepWithStrategy} from './objectComparison';

export const shallowComparisonStrategy: ICompareValuesShallowStrategy = {
  compareDates: areDatesEqual,
  compareSimpleType: areSimpleValuesEqual,
};

export const deepComparisonStrategy: ICompareValuesStrategy<any> = {
  ...shallowComparisonStrategy,
  compareObjects: compareObjectsDeepWithStrategy,
  compareOther: (v1, v2) => v1 === v2,
};
