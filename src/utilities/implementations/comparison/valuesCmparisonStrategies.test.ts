import {ICompareValuesShallowStrategy} from '@root/utilities/interfaces/comparison/valuesComparisonStrategies';
import {
  SIMPLE_TYPE_VALUES_SET_EMPTY,
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
} from '../../../__mock__/simpleTypes.stubs';
import {
  shallowComparisonStrategy,
  deepComparisonStrategy,
} from './valuesComparisonStrategies';
import {ICompareValuesStrategy} from '../../interfaces/comparison/valuesComparisonStrategies';
import {
  OBJECT_TYPE_VALUES_SET_ARRAYS,
  OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES,
  OBJECT_TYPE_VALUES_SET_OBJECTS,
  OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
} from '../../../__mock__/objectTypes.stubs';

describe('Strategies for comparison', () => {
  function testStrategyCommonMethods(
    comparisonStrategy:
      | ICompareValuesShallowStrategy
      | ICompareValuesStrategy<any>
  ): void {
    describe('compareDates method', () => {
      it('Should be in the strategy', () => {
        expect(comparisonStrategy.compareDates).toEqual(expect.any(Function));
      });
      it('Should return true for the same dates', () => {
        const testDate = new Date();
        expect(comparisonStrategy.compareDates(testDate, testDate)).toBe(true);
      });
      it('Should return false for different dates', () => {
        const testDate = new Date();
        const anotherDate = new Date('');
        anotherDate.setDate(testDate.getDate() + 1);
        expect(comparisonStrategy.compareDates(testDate, anotherDate)).toBe(
          false
        );
      });
      it('Should return false if no arguments passed', () => {
        expect((comparisonStrategy.compareDates as any)()).toBe(false);
      });
      it.each([
        ...SIMPLE_TYPE_VALUES_SET_EMPTY,
        ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
        ...SIMPLE_TYPE_VALUES_SET_STRINGS,
      ])(
        'Should return false for the value "%s" passed as an argument',
        testValue => {
          expect(
            (comparisonStrategy.compareDates as any)(testValue, testValue)
          ).toBe(false);
        }
      );
    });
    describe('compareSimpleType method', () => {
      it('Should be in the strategy', () => {
        expect(comparisonStrategy.compareSimpleType).toEqual(
          expect.any(Function)
        );
      });
      it('Should return false if no arguments passed', () => {
        expect((comparisonStrategy.compareSimpleType as any)()).toBe(false);
      });
      it('Should return false if a non simple values passed', () => {
        expect((comparisonStrategy.compareSimpleType as any)([], [])).toBe(
          false
        );
        expect((comparisonStrategy.compareSimpleType as any)({}, {})).toBe(
          false
        );
      });
      it.each([
        ...SIMPLE_TYPE_VALUES_SET_EMPTY,
        ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
        ...SIMPLE_TYPE_VALUES_SET_STRINGS,
      ])(
        'Should return true for the value "%s" compared to itself',
        testValue => {
          expect(
            (comparisonStrategy.compareSimpleType as any)(testValue, testValue)
          ).toBe(true);
        }
      );
      describe.each(SIMPLE_TYPE_VALUES_SET_EMPTY)(
        'For empty value "%s"',
        testValue => {
          it.each([
            ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS,
            ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
          ])('Should return false for the value "%s"', testValueOtherType => {
            expect(
              (comparisonStrategy.compareSimpleType as any)(
                testValue,
                testValueOtherType
              )
            ).toBe(false);
          });
        }
      );
      describe.each(SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS)(
        'For numeric value "%s"',
        testValue => {
          it.each([
            ...SIMPLE_TYPE_VALUES_SET_EMPTY,
            ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
          ])('Should return false for the value "%s"', testValueOtherType => {
            expect(
              (comparisonStrategy.compareSimpleType as any)(
                testValue,
                testValueOtherType
              )
            ).toBe(false);
          });
        }
      );
      describe.each(SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS)(
        'For string value "%s"',
        testValue => {
          it.each([
            ...SIMPLE_TYPE_VALUES_SET_EMPTY,
            ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS,
          ])('Should return false for the value "%s"', testValueOtherType => {
            expect(
              (comparisonStrategy.compareSimpleType as any)(
                testValue,
                testValueOtherType
              )
            ).toBe(false);
          });
        }
      );
    });
  }

  describe('shallowComparisonStrategy', () => {
    testStrategyCommonMethods(shallowComparisonStrategy);
  });
  describe('deepComparisonStrategy', () => {
    testStrategyCommonMethods(deepComparisonStrategy);
    describe('compareOther', () => {
      it.each([
        ...SIMPLE_TYPE_VALUES_SET_EMPTY,
        ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
        ...SIMPLE_TYPE_VALUES_SET_STRINGS,
        ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
      ])(
        'Should return true for the value "%s" compared to itself',
        testValue => {
          expect(
            deepComparisonStrategy.compareOther(
              testValue,
              testValue,
              deepComparisonStrategy
            )
          ).toBe(true);
        }
      );
      it('Should return true for two NaN values compared', () => {
        expect(
          deepComparisonStrategy.compareOther(NaN, NaN, deepComparisonStrategy)
        ).toBe(true);
      });
      it('Should return false if NaN is compared with 0', () => {
        expect(
          deepComparisonStrategy.compareOther(NaN, 0, deepComparisonStrategy)
        ).toBe(false);
      });
      it('Should return false if NaN is compared with undefined', () => {
        expect(
          deepComparisonStrategy.compareOther(
            NaN,
            undefined,
            deepComparisonStrategy
          )
        ).toBe(false);
      });
      it('Should return false if NaN is compared with null', () => {
        expect(
          deepComparisonStrategy.compareOther(
            NaN,
            undefined,
            deepComparisonStrategy
          )
        ).toBe(false);
      });
      it('Should return false if undefined is compared with null', () => {
        expect(
          deepComparisonStrategy.compareOther(
            null,
            undefined,
            deepComparisonStrategy
          )
        ).toBe(false);
      });
      it('Should return false if undefined is compared with 0', () => {
        expect(
          deepComparisonStrategy.compareOther(
            0,
            undefined,
            deepComparisonStrategy
          )
        ).toBe(false);
      });
      it('Should return false if undefined is compared with false', () => {
        expect(
          deepComparisonStrategy.compareOther(
            false,
            undefined,
            deepComparisonStrategy
          )
        ).toBe(false);
      });
      it('Should return false if 0 is compared with false', () => {
        expect(
          deepComparisonStrategy.compareOther(false, 0, deepComparisonStrategy)
        ).toBe(false);
      });
      it('Should return false if 0 is compared with an empty string', () => {
        expect(
          deepComparisonStrategy.compareOther('', 0, deepComparisonStrategy)
        ).toBe(false);
      });
      it('Should return true for two Infinity numbers compared', () => {
        expect(
          deepComparisonStrategy.compareOther(
            Infinity,
            Infinity,
            deepComparisonStrategy
          )
        ).toBe(true);
        expect(
          deepComparisonStrategy.compareOther(
            -Infinity,
            -Infinity,
            deepComparisonStrategy
          )
        ).toBe(true);
      });
    });
    describe('compareObjects', () => {
      describe('deepComparisonStrategy', () => {
        it.each(OBJECT_TYPE_VALUES_SET_OBJECTS)(
          'Should return true for the same object "%p"',
          testValue => {
            expect(
              deepComparisonStrategy.compareObjects(
                testValue,
                testValue,
                deepComparisonStrategy
              )
            ).toBe(true);
          }
        );
        it.each(OBJECT_TYPE_VALUES_SET_OBJECTS)(
          'Should return true for an object "%p" has the same keys and values',
          testValue => {
            const valueToCompareWith = {
              ...testValue,
            };
            expect(
              deepComparisonStrategy.compareObjects(
                testValue,
                valueToCompareWith,
                deepComparisonStrategy
              )
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
              deepComparisonStrategy.compareObjects(
                testValue,
                valueToCompareWith,
                deepComparisonStrategy
              )
            ).toBe(false);
          }
        );
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
              deepComparisonStrategy.compareObjects(
                testValueWithNestedObject,
                valueToCompareWith,
                deepComparisonStrategy
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
              deepComparisonStrategy.compareObjects(
                testValueWithNestedObject,
                valueToCompareWith,
                deepComparisonStrategy
              )
            ).toBe(false);
          }
        );
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
            deepComparisonStrategy.compareObjects(
              testValueWithNestedObject,
              valueToCompareWith,
              deepComparisonStrategy
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
            deepComparisonStrategy.compareObjects(
              testValueWithNestedObject,
              valueToCompareWith,
              deepComparisonStrategy
            )
          ).toBe(false);
        }
      );
    });
    describe('compareArrays', () => {
      it('Should return true for the same array', () => {
        OBJECT_TYPE_VALUES_SET_ARRAYS.forEach(testValue => {
          expect(
            deepComparisonStrategy.compareArrays(
              testValue,
              testValue,
              deepComparisonStrategy
            )
          ).toBe(true);
        });
      });
      it('Should return true for an array has the same keys and values', () => {
        OBJECT_TYPE_VALUES_SET_ARRAYS.forEach(testValue => {
          const valueToCompareWith = [...testValue];
          expect(
            deepComparisonStrategy.compareArrays(
              testValue,
              valueToCompareWith,
              deepComparisonStrategy
            )
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
              deepComparisonStrategy.compareArrays(
                testValue,
                valueToCompareWith,
                deepComparisonStrategy
              )
            ).toBe(false);
          }
        );
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
            deepComparisonStrategy.compareArrays(
              testValueWithNestedObject,
              valueToCompareWith,
              deepComparisonStrategy
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
            deepComparisonStrategy.compareArrays(
              testValueWithNestedObject,
              valueToCompareWith,
              deepComparisonStrategy
            )
          ).toBe(false);
        });
      });
    });
  });
});
