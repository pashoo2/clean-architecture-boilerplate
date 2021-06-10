import {isObjectWithoutConstructor} from 'src/utilities/implementations/typeGuards';
import {
  ICompareValues,
  ICompareValuesStrategy,
} from '../../interfaces/comparison/valuesComparisonStrategies';
import {isSimpleType} from '../typeGuards/isSimpleType';

export function compareValuesByStrategy<
  V1,
  V2,
  S extends ICompareValuesStrategy<S>
>(firstValue: V1, secondValue: V2, comparisonStrategy: S): boolean {
  if (arguments.length < 3) {
    throw new Error(
      '3 arguments are required by the "compareValuesByStrategy"'
    );
  }
  if ((firstValue as unknown) === secondValue) {
    return true;
  }
  // Simple value types
  if (isSimpleType(firstValue)) {
    if (isSimpleType(secondValue)) {
      return comparisonStrategy.compareSimpleType(firstValue, secondValue);
    }
  }
  // Dates
  if (firstValue instanceof Date) {
    if (secondValue instanceof Date) {
      return comparisonStrategy.compareDates(firstValue, secondValue);
    }
  }
  // Objects
  if (isObjectWithoutConstructor(firstValue)) {
    if (isObjectWithoutConstructor(secondValue)) {
      // Nested objects
      return comparisonStrategy.compareObjects(
        firstValue,
        secondValue,
        comparisonStrategy
      );
    }
  }
  // Arrays
  if (Array.isArray(firstValue)) {
    if (Array.isArray(secondValue)) {
      // Nested arrays
      return comparisonStrategy.compareArrays(
        firstValue,
        secondValue,
        comparisonStrategy
      );
    }
  }
  // Any other values
  return comparisonStrategy.compareOther(
    firstValue,
    secondValue,
    comparisonStrategy
  );
}

export function compareValuesFunctionFabric<
  V1,
  V2,
  S extends ICompareValuesStrategy<S>
>(comparisonStrategy: S): ICompareValues<V1, V2> {
  return (firstValue: V1, secondValue: V2) =>
    compareValuesByStrategy<V1, V2, S>(
      firstValue,
      secondValue,
      comparisonStrategy
    );
}
