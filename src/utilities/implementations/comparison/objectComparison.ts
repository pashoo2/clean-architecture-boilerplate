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
  const objectFirstKeys = Object.keys(objectFirst);

  if (objectFirstKeys.length !== Object.keys(objectSecond).length) {
    return false;
  }
  return (Object.keys(objectFirst) as Array<keyof O1>).every(key => {
    const objectFirstValueForKey = objectFirst[key];
    const objectSecondValueForKey = (objectSecond as unknown as O1)[key];

    return compareValues(objectFirstValueForKey, objectSecondValueForKey);
  });
}

export function compareObjectsShallowWithStrategy<
  O1 extends Object,
  O2 extends Object,
  S extends ICompareValuesShallowStrategy
>(objectFirst: O1, objectSecond: O2, shallowComparisonStrategy: S): boolean {
  function compareNested(o1: any, o2: any): boolean {
    return o1 === o2;
  }
  const shallowStrategy: ICompareValuesStrategy<any> = {
    ...shallowComparisonStrategy,
    compareObjects: compareNested,
    compareOther: compareNested,
  };
  const compareValues = compareValuesFunctionFabric(shallowStrategy);
  return compareObjectsDeepWithCompareValuesFunction(
    objectFirst,
    objectSecond,
    compareValues
  );
}

export function compareObjectsDeepWithStrategy<
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
