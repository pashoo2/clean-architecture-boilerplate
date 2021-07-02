import {areSimpleValuesEqual} from '@root/utilities/implementations/comparison/simpleTypeValuesComparison';
import {
  ICompareValuesShallowStrategy,
  ICompareValues,
} from '../../interfaces/comparison/valuesComparisonStrategies';
import {ICompareValuesStrategy} from '../../interfaces/comparison/valuesComparisonStrategies';
import {compareValuesFunctionFabric} from './compareByStrategy';

export function compareObjectsDeepWithCompareValuesFunction<
  O1 extends Object,
  O2 extends Object
>(
  objectFirst: O1,
  objectSecond: O2,
  compareValues: ICompareValues<any, any>
): boolean {
  if ((objectFirst as unknown) === objectSecond) {
    return true;
  }

  const objectFirstKeys = Object.keys(objectFirst) as Array<keyof O1>;

  if (objectFirstKeys.length !== Object.keys(objectSecond).length) {
    return false;
  }
  // TODO - for an object with cycle references it will throw
  return objectFirstKeys.every(key => {
    const objectFirstValueForKey = objectFirst[key];
    const objectSecondValueForKey = (objectSecond as unknown as O1)[key];

    if (objectFirstValueForKey === objectSecondValueForKey) {
      return true;
    }
    return compareValues(objectFirstValueForKey, objectSecondValueForKey);
  });
}

export function compareObjectsShallowByStrategy<
  O1 extends Object,
  O2 extends Object,
  S extends ICompareValuesShallowStrategy
>(objectFirst: O1, objectSecond: O2, shallowComparisonStrategy: S): boolean {
  function compareNested(o1: any, o2: any): boolean {
    return areSimpleValuesEqual(o1, o2);
  }
  const shallowStrategy: ICompareValuesStrategy<any> = {
    ...shallowComparisonStrategy,
    compareObjects: compareNested,
    compareArrays: compareNested,
    compareOther: compareNested,
  };
  const compareValues = compareValuesFunctionFabric(shallowStrategy);
  return compareObjectsDeepWithCompareValuesFunction(
    objectFirst,
    objectSecond,
    compareValues
  );
}

export function compareObjectsDeepByStrategy<
  O1 extends Object,
  O2 extends Object,
  S extends ICompareValuesStrategy<S>
>(objectFirst: O1, objectSecond: O2, comparisonStrategy: S): boolean {
  const compareValues = compareValuesFunctionFabric(comparisonStrategy);
  return compareObjectsDeepWithCompareValuesFunction(
    objectFirst,
    objectSecond,
    compareValues
  );
}
