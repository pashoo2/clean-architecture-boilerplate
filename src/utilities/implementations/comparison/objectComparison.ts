import {ICompareValuesByStrategy} from './../../interfaces/comparison/valuesComparisonStrategies';
import {ICompareValuesShallowStrategy} from '../../interfaces/comparison/valuesComparisonStrategies';
import {ICompareValuesStrategy} from '../../interfaces/comparison/valuesComparisonStrategies';

export function compareObjectsDeepWithStrategy<
  O1 extends Object,
  O2 extends Object,
  S extends ICompareValuesStrategy<S>
>(
  objectFirst: O1,
  objectSecond: O2,
  comparisonStrategy: S,
  compareValuesByStrategy: ICompareValuesByStrategy<any, any, S>
): boolean {
  const objectFirstKeys = Object.keys(objectFirst);

  if (objectFirstKeys.length !== Object.keys(objectSecond).length) {
    return false;
  }
  return (Object.keys(objectFirst) as Array<keyof O1>).every(key => {
    const objectFirstValueForKey = objectFirst[key];
    const objectSecondValueForKey = (objectSecond as unknown as O1)[key];

    return compareValuesByStrategy(
      objectFirstValueForKey,
      objectSecondValueForKey,
      comparisonStrategy
    );
  });
}

export function compareObjectsShallowWithStrategy<
  O1 extends Object,
  O2 extends Object,
  S extends ICompareValuesShallowStrategy
>(
  objectFirst: O1,
  objectSecond: O2,
  comparisonStrategy: S,
  compareValuesByStrategy: ICompareValuesByStrategy<
    any,
    any,
    ICompareValuesStrategy<any>
  >
): boolean {
  function compareNested(o1: any, o2: any): boolean {
    return o1 === o2;
  }
  const shallowStrategy: ICompareValuesStrategy<any> = {
    ...comparisonStrategy,
    compareObjects: compareNested,
    compareOther: compareNested,
  };
  return compareObjectsDeepWithStrategy(
    objectFirst,
    objectSecond,
    shallowStrategy,
    compareValuesByStrategy
  );
}
