import {
  ICompareValuesShallowStrategy,
  ICompareValuesStrategy,
} from '../../interfaces/comparison/valuesComparisonStrategies';
import {areDatesEqual} from './objectTypeValuesComparison';
import {areSimpleValuesEqual} from './simpleTypeValuesComparison';
import {compareObjectsDeepByStrategy} from './objectComparison';

export const shallowComparisonStrategy: ICompareValuesShallowStrategy = {
  compareDates: areDatesEqual,
  compareSimpleType: areSimpleValuesEqual,
};

export const deepComparisonStrategy: ICompareValuesStrategy<any> = {
  ...shallowComparisonStrategy,
  compareObjects: compareObjectsDeepByStrategy,
  compareArrays: compareObjectsDeepByStrategy,
  compareOther: areSimpleValuesEqual,
};
