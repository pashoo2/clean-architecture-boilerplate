import {
  ICompareAnyByStrategy,
  ICompareValuesShallowStrategy,
  ICompareValuesStrategy,
} from 'src/utilities/interfaces/comparison/valuesComparisonStrategies';
import {
  OBJECT_TYPE_VALUES_SET_ARRAYS,
  OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES,
  OBJECT_TYPE_VALUES_SET_OBJECTS,
  OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
} from 'src/__mock__/objectTypes.stubs';
import {
  compareObjectsDeepByStrategy,
  compareObjectsDeepWithCompareValuesFunction,
  compareObjectsShallowByStrategy,
} from './objectComparison';

const comparisonFunctionMock = jest.fn((v1, v2) => {
  if (v1 === v2) {
    return true;
  }
  if (typeof v1 === 'number' || v1 instanceof Number) {
    if (typeof v2 === 'number' || v2 instanceof Number) {
      if (Number.isNaN(v1) && Number.isNaN(v2)) {
        return true;
      }
      return v1 === v2;
    }
  }
  return false;
});
const COMPARISON_STRATEGY_STUB: ICompareValuesStrategy<any> = {
  compareSimpleType: comparisonFunctionMock,
  compareObjects: comparisonFunctionMock,
  compareArrays: comparisonFunctionMock,
  compareDates: comparisonFunctionMock,
  compareOther: comparisonFunctionMock,
};

describe('Object comparison utilities', () => {
  let comparisonStrategyDeepMock: ICompareValuesStrategy<any>;
  let comparisonStrategyShallowMock: ICompareValuesShallowStrategy;

  beforeEach(() => {
    comparisonStrategyDeepMock = {
      ...COMPARISON_STRATEGY_STUB,
    };
    comparisonStrategyShallowMock = {
      compareDates: COMPARISON_STRATEGY_STUB.compareDates,
      compareSimpleType: COMPARISON_STRATEGY_STUB.compareSimpleType,
    };
  });

  describe('compareObjectsDeepWithCompareValuesFunction', () => {
    it('Should return true for the same object', () => {
      const testObject1 = {
        key1: 'key1',
      };
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testObject1,
          testObject1,
          () => false
        )
      ).toBe(true);
    });
    it('Should return true for the same array', () => {
      const testArray1 = ['1', 0];
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testArray1,
          testArray1,
          () => false
        )
      ).toBe(true);
    });
    it('Should return false if objects have different amount of keys', () => {
      const testObject1 = {
        key1: 'key1',
      };
      const testObject2 = {
        ...testObject1,
        key2: 'key2',
      };
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testObject1,
          testObject2,
          () => true
        )
      ).toBe(false);
    });
    it('Should return false if arrays have different amount of items', () => {
      const testArray1 = ['1', '2'];
      const testArray2 = [...testArray1, 3];
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testArray1,
          testArray2,
          () => true
        )
      ).toBe(false);
    });
    it('Should pass through all the keys of an object', () => {
      const testObject1 = {} as any;
      const testObject2 = {} as any;
      const count = 100;
      const mockComparatorFn = jest.fn(() => true);

      function createDifferentValue(item: number): string {
        return `0${item}`;
      }

      let idx = 0;
      while (idx < count) {
        testObject1[idx] = idx;
        testObject2[idx] = createDifferentValue(idx);
        idx += 1;
      }
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testObject1,
          testObject2,
          mockComparatorFn
        )
      ).toBe(true);
      expect(mockComparatorFn).toBeCalledTimes(count);

      idx = 0;
      while (idx < count) {
        expect(mockComparatorFn).toBeCalledWith(idx, createDifferentValue(idx));
        idx += 1;
      }
    });
    it('Should pass through all the items of an array', () => {
      const testArray1 = [] as any;
      const testArray2 = [] as any;
      const count = 100;
      const mockComparatorFn = jest.fn(() => true);

      function createDifferentValue(item: number): string {
        return `0${item}`;
      }

      let idx = 0;
      while (idx < count) {
        testArray1.push(idx);
        testArray2.push(createDifferentValue(idx));
        idx += 1;
      }
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testArray1,
          testArray2,
          mockComparatorFn
        )
      ).toBe(true);
      expect(mockComparatorFn).toBeCalledTimes(count);

      idx = 0;
      while (idx < count) {
        expect(mockComparatorFn).toBeCalledWith(idx, createDifferentValue(idx));
        idx += 1;
      }
    });
    it('Should return true if object has numeric keys with values equal with an array', () => {
      const testArray = [] as any;
      const testObject = {} as any;
      const count = 100;
      const mockComparatorFn = jest.fn(() => true);

      let idx = 0;
      while (idx < count) {
        testArray.push(idx);
        testObject[idx] = idx;
        idx += 1;
      }
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testArray,
          testObject,
          mockComparatorFn
        )
      ).toBe(true);
    });
    it('Should pass through all the items of an array if it is compared with an object ', () => {
      const testArray = [] as any;
      const testObject = {} as any;
      const count = 100;
      const mockComparatorFn = jest.fn(() => true);

      function createDifferentValue(item: number): string {
        return `0${item}`;
      }

      let idx = 0;
      while (idx < count) {
        testArray.push(idx);
        testObject[idx] = createDifferentValue(idx);
        idx += 1;
      }
      expect(
        compareObjectsDeepWithCompareValuesFunction(
          testArray,
          testObject,
          mockComparatorFn
        )
      ).toBe(true);
      expect(mockComparatorFn).toBeCalledTimes(count);

      idx = 0;
      while (idx < count) {
        expect(mockComparatorFn).toBeCalledWith(idx, createDifferentValue(idx));
        idx += 1;
      }
    });
  });

  describe.each([
    'compareObjectsShallowByStrategy',
    'compareObjectsDeepByStrategy',
  ])('%s', utilityName => {
    let strategy: ICompareValuesStrategy<any> | ICompareValuesShallowStrategy;
    let utilityToTest: ICompareAnyByStrategy<
      any,
      any,
      ICompareValuesStrategy<any>
    >;

    beforeEach(() => {
      const isDeepComparison = utilityName === 'compareObjectsDeepByStrategy';
      strategy = isDeepComparison
        ? comparisonStrategyDeepMock
        : comparisonStrategyShallowMock;
      utilityToTest = isDeepComparison
        ? compareObjectsDeepByStrategy
        : compareObjectsShallowByStrategy;
    });
    describe('Objects', () => {
      it.each(OBJECT_TYPE_VALUES_SET_OBJECTS)(
        'Should return true for the same object "%p"',
        testValue => {
          expect(utilityToTest(testValue, testValue, strategy as any)).toBe(
            true
          );
        }
      );
      it.each(OBJECT_TYPE_VALUES_SET_OBJECTS)(
        'Should return true for an object "%p" has the same keys and values',
        testValue => {
          const valueToCompareWith = {
            ...testValue,
          };
          expect(
            utilityToTest(testValue, valueToCompareWith, strategy as any)
          ).toBe(true);
        }
      );
      it.each(OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR)(
        'Should return false for an object different form "%p" by one property value',
        testValue => {
          const valueToCompareWith = {
            ...testValue,
            [Object.keys(testValue)[0]]: Math.random() + Date.now(),
          };
          expect(
            utilityToTest(testValue, valueToCompareWith, strategy as any)
          ).toBe(false);
        }
      );
    });
    describe('Arrays', () => {
      it('Should return true for the same array', () => {
        OBJECT_TYPE_VALUES_SET_ARRAYS.forEach(testValue => {
          expect(utilityToTest(testValue, testValue, strategy as any)).toBe(
            true
          );
        });
      });
      it('Should return true for an array has the same keys and values', () => {
        OBJECT_TYPE_VALUES_SET_ARRAYS.forEach(testValue => {
          const valueToCompareWith = [...testValue];
          expect(
            utilityToTest(testValue, valueToCompareWith, strategy as any)
          ).toBe(true);
        });
      });
      it('Should return false for an array different form another by one property value', () => {
        OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES.forEach(
          testValue => {
            const valueToCompareWith = [...testValue];
            valueToCompareWith[valueToCompareWith.length - 1] =
              Math.random() + Date.now();
            expect(
              utilityToTest(testValue, valueToCompareWith, strategy as any)
            ).toBe(false);
          }
        );
      });
    });
  });
  describe('compareObjectsDeepByStrategy', () => {
    describe('Objects', () => {
      let strategy: ICompareValuesStrategy<any>;
      beforeEach(() => {
        strategy = {
          ...comparisonStrategyDeepMock,
          compareObjects: (v1: any, v2: any, strategyArgument: any) => {
            return compareObjectsDeepByStrategy(v1, v2, strategyArgument);
          },
        };
      });
      it.each(OBJECT_TYPE_VALUES_SET_OBJECTS)(
        'Should return true for an object that have a nested object with the same values',
        testValue => {
          const nestedObjectFirst = {
            a: {
              ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR[0],
            },
            b: null,
            c: 1,
          };
          const nestedObjectSecond = {
            ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR[0],
            d: {
              ...nestedObjectFirst,
            },
          };
          const testValueWithNestedObject = {
            ...testValue,
            nested: {
              ...nestedObjectSecond,
              nested: {
                ...nestedObjectFirst,
              },
            },
          };
          const valueToCompareWith = {
            ...testValue,
            nested: {
              ...nestedObjectSecond,
              nested: {
                ...nestedObjectFirst,
              },
            },
          };

          expect(
            compareObjectsDeepByStrategy(
              testValueWithNestedObject,
              valueToCompareWith,
              strategy
            )
          ).toBe(true);
        }
      );
      it.each(OBJECT_TYPE_VALUES_SET_OBJECTS)(
        'Should return false for an object that have a nested object with the same values except a one',
        testValue => {
          const nestedObjectFirst = {
            a: {
              ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR[0],
            },
            b: null,
            c: 1,
          };
          const nestedObjectSecond = {
            ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR[0],
            d: {
              ...nestedObjectFirst,
            },
          };
          const testValueWithNestedObject = {
            ...testValue,
            nested: {
              ...nestedObjectSecond,
              nested: {
                ...nestedObjectFirst,
                c: 2,
              },
            },
          };
          const valueToCompareWith = {
            ...testValue,
            nested: {
              ...nestedObjectSecond,
              nested: {
                ...nestedObjectFirst,
              },
            },
          };
          expect(
            compareObjectsDeepByStrategy(
              testValueWithNestedObject,
              valueToCompareWith,
              comparisonStrategyDeepMock
            )
          ).toBe(false);
        }
      );
    });
    describe('Arrays', () => {
      let strategy: ICompareValuesStrategy<any>;
      beforeEach(() => {
        strategy = {
          ...comparisonStrategyDeepMock,
          compareArrays: (v1: any, v2: any, strategyArgument: any) => {
            return compareObjectsDeepByStrategy(v1, v2, strategyArgument);
          },
        };
      });
      it('Should return true for an array that have a nested array with the same values', () => {
        OBJECT_TYPE_VALUES_SET_ARRAYS.forEach(testValue => {
          const nestedArrayFirst = [
            [...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES[0]],
            null,
            1,
          ];
          const nestedArraySecond = [
            ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES[0],
            [...nestedArrayFirst],
          ];
          const testValueWithNestedObject = {
            ...testValue,
            ...nestedArraySecond,
            ...nestedArrayFirst,
          };
          const valueToCompareWith = {
            ...testValue,
            ...nestedArraySecond,
            ...nestedArrayFirst,
          };

          expect(
            compareObjectsDeepByStrategy(
              testValueWithNestedObject,
              valueToCompareWith,
              strategy
            )
          ).toBe(true);
        });
      });
      it('Should return false for an array that have a nested arrays with the same values except an one', () => {
        OBJECT_TYPE_VALUES_SET_ARRAYS.forEach(testValue => {
          const nestedArrayFirst = [
            [...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES[0]],
            null,
            1,
          ];
          const nestedArraySecond = [
            ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES[0],
            [...nestedArrayFirst],
          ];
          const testValueWithNestedObject = {
            ...testValue,
            ...nestedArraySecond,
            ...nestedArrayFirst,
          };
          const valueToCompareWith = {
            ...testValue,
            ...nestedArraySecond,
            ...nestedArrayFirst,
          };
          valueToCompareWith[valueToCompareWith.length] =
            Math.random() + Date.now();

          expect(
            compareObjectsDeepByStrategy(
              testValueWithNestedObject,
              valueToCompareWith,
              strategy
            )
          ).toBe(false);
        });
      });
    });
    describe('Objects and arrays', () => {
      let strategy: ICompareValuesStrategy<any>;
      beforeEach(() => {
        strategy = {
          ...comparisonStrategyDeepMock,
          compareObjects: (v1: any, v2: any, strategyArgument: any) => {
            return compareObjectsDeepByStrategy(v1, v2, strategyArgument);
          },
          compareArrays: (v1: any, v2: any, strategyArgument: any) => {
            return compareObjectsDeepByStrategy(v1, v2, strategyArgument);
          },
        };
      });
      it.each(OBJECT_TYPE_VALUES_SET_OBJECTS)(
        'Should return true for an object that have a nested array with the same values',
        testValue => {
          const nestedArrayFirst = [
            [...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES[0]],
            null,
            1,
          ];
          const nestedArraySecond = [
            ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES[0],
            [...nestedArrayFirst],
          ];
          const nestedObjectFirst = {
            a: {
              ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR[0],
            },
            b: null,
            c: 1,
            array: nestedArraySecond,
          };
          const nestedObjectSecond = {
            ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR[0],
            d: {
              ...nestedObjectFirst,
              array: nestedArrayFirst,
            },
          };
          const testValueWithNestedObject = {
            ...testValue,
            nested: {
              ...nestedObjectSecond,
              nested: {
                ...nestedObjectFirst,
                nestedArraySecond: [...nestedArraySecond],
              },
            },
          };
          const valueToCompareWith = {
            ...testValue,
            nested: {
              ...nestedObjectSecond,
              nested: {
                ...nestedObjectFirst,
                nestedArraySecond: [...nestedArraySecond],
              },
            },
          };

          expect(
            compareObjectsDeepByStrategy(
              testValueWithNestedObject,
              valueToCompareWith,
              strategy
            )
          ).toBe(true);
        }
      );
      it.each(OBJECT_TYPE_VALUES_SET_OBJECTS)(
        'Should return false for an object that have a nested array with the same values except a one',
        testValue => {
          const nestedArrayFirst = [
            [...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES[0]],
            null,
            1,
          ];
          const nestedArraySecond = [
            ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES[0],
            [...nestedArrayFirst],
          ];
          const nestedObjectFirst = {
            a: {
              ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR[0],
            },
            b: null,
            c: 1,
          };
          const nestedObjectSecond = {
            ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR[0],
            d: {
              ...nestedObjectFirst,
            },
          };
          const testValueWithNestedObject = {
            ...testValue,
            nested: {
              ...nestedObjectSecond,
              nested: {
                ...nestedObjectFirst,
                nestedArraySecond,
              },
            },
          };
          const valueToCompareWith = {
            ...testValue,
            nested: {
              ...nestedObjectSecond,
              nested: {
                ...nestedObjectFirst,
                nestedArraySecond: [...nestedArraySecond].map((v, idx) =>
                  idx === 0 ? Math.random() + Date.now() : v
                ),
              },
            },
          };
          expect(
            compareObjectsDeepByStrategy(
              testValueWithNestedObject,
              valueToCompareWith,
              comparisonStrategyDeepMock
            )
          ).toBe(false);
        }
      );
    });
  });
});
