import {ICompareValuesStrategy} from '../../interfaces/comparison/valuesComparisonStrategies';
import {isSimpleType} from '../typeGuards/isSimpleType';

export function compareValuesByStrategy<
  V1,
  V2,
  S extends ICompareValuesStrategy<S>
>(firstValue: V1, secondValue: V2, comparisonStrategy: S): boolean {
  if ((firstValue as unknown) === secondValue) {
    return true;
  }
  // Simple value types
  if (isSimpleType(firstValue)) {
    if (isSimpleType(secondValue)) {
      return comparisonStrategy.compareSimpleTypeStrategy(
        firstValue,
        secondValue
      );
    }
  }
  // Dates
  if (firstValue instanceof Date) {
    if (secondValue instanceof Date) {
      return comparisonStrategy.compareDates(firstValue, secondValue);
    }
  }
  if (typeof firstValue === 'object') {
    if (typeof secondValue === 'object') {
      // Nested objects
      return comparisonStrategy.compareObjects(
        firstValue,
        secondValue,
        comparisonStrategy
      );
    }
  }
  return comparisonStrategy.compareOther(
    firstValue,
    secondValue,
    comparisonStrategy
  );
}
