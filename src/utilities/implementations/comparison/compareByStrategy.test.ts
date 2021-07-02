import {
  OBJECT_TYPE_VALUES_SET_ARRAYS,
  OBJECT_TYPE_VALUES_SET_DATES,
  OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
  OBJECT_TYPE_VALUES_SET_WITH_CONSTRUCTOR,
} from '@root/__mock__/objectTypes.stubs';
import {compareValuesByStrategy} from './compareByStrategy';
import {
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
} from '../../../__mock__/simpleTypes.stubs';
import {ICompareValuesStrategy} from '@root/utilities/interfaces/comparison/valuesComparisonStrategies';

const COMPARISON_STRATEGY_STUB: ICompareValuesStrategy<any> = {
  compareSimpleType: jest.fn(() => true),
  compareObjects: jest.fn(() => true),
  compareArrays: jest.fn(() => true),
  compareDates: jest.fn(() => true),
  compareOther: jest.fn(() => true),
};

const NOT_EMPTY_VALUES_STUB = [
  ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
  ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS,
  ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
  ...OBJECT_TYPE_VALUES_SET_WITH_CONSTRUCTOR,
  ...OBJECT_TYPE_VALUES_SET_DATES,
];

describe('Utilities for comparison by a strategy', () => {
  describe('compareValuesByStrategy', () => {
    it('Should throw if less than 3 arguments passed into', () => {
      expect(() => (compareValuesByStrategy as any)()).toThrow();
      expect(() => (compareValuesByStrategy as any)(1)).toThrow();
      expect(() => (compareValuesByStrategy as any)(1, 2)).toThrow();
    });

    it.each([...NOT_EMPTY_VALUES_STUB])(
      'Should return true if "%s" is compared to itself',
      testValue => {
        expect(compareValuesByStrategy(testValue, testValue, {} as any)).toBe(
          true
        );
      }
    );
    it('Should call "compareArrays" if comparing the array with another array', () => {
      OBJECT_TYPE_VALUES_SET_ARRAYS.forEach(testValue => {
        const comparingFunction =
          COMPARISON_STRATEGY_STUB.compareArrays as jest.MockedFunction<any>;
        const testValueToCompareWith = [[[[]]]] as unknown[];

        comparingFunction.mockClear();
        expect(
          compareValuesByStrategy(
            testValue,
            testValueToCompareWith,
            COMPARISON_STRATEGY_STUB
          )
        ).toBe(true);
        expect(comparingFunction).toBeCalledTimes(1);
        expect(comparingFunction).toBeCalledWith(
          testValue,
          testValueToCompareWith,
          COMPARISON_STRATEGY_STUB
        );
      });
    });
    it.each([...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR])(
      'Should call "compareObjects" if comparing the object type value "%s" with an object',
      testValue => {
        const comparingFunction =
          COMPARISON_STRATEGY_STUB.compareObjects as jest.MockedFunction<any>;
        const testValueToCompareWith = {};

        comparingFunction.mockClear();
        expect(
          compareValuesByStrategy(
            testValue,
            testValueToCompareWith,
            COMPARISON_STRATEGY_STUB
          )
        ).toBe(true);
        expect(comparingFunction).toBeCalledTimes(1);
        expect(comparingFunction).toBeCalledWith(
          testValue,
          testValueToCompareWith,
          COMPARISON_STRATEGY_STUB
        );
      }
    );
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS,
      ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
    ])(
      'Should call "compareSimpleType" if comparing the value "%s" with another simple type value',
      testValue => {
        const comparingFunction =
          COMPARISON_STRATEGY_STUB.compareSimpleType as jest.MockedFunction<any>;
        const testValueToCompareWith = undefined;

        comparingFunction.mockClear();
        expect(
          compareValuesByStrategy(
            testValue,
            testValueToCompareWith,
            COMPARISON_STRATEGY_STUB
          )
        ).toBe(true);
        expect(comparingFunction).toBeCalledTimes(1);
        expect(comparingFunction).toBeCalledWith(
          testValue,
          testValueToCompareWith
        );
      }
    );
    it.each([...OBJECT_TYPE_VALUES_SET_DATES])(
      'Should call "compareDates" if comparing the Date type value "%s" with a date',
      testValue => {
        const comparingFunction =
          COMPARISON_STRATEGY_STUB.compareDates as jest.MockedFunction<any>;
        const testValueToCompareWith = new Date();

        comparingFunction.mockClear();
        expect(
          compareValuesByStrategy(
            testValue,
            testValueToCompareWith,
            COMPARISON_STRATEGY_STUB
          )
        ).toBe(true);
        expect(comparingFunction).toBeCalledTimes(1);
        expect(comparingFunction).toBeCalledWith(
          testValue,
          testValueToCompareWith
        );
      }
    );
    it.each([...OBJECT_TYPE_VALUES_SET_WITH_CONSTRUCTOR])(
      'Should call "compareOther" if comparing the object "%s" which has a constructor with another object',
      testValue => {
        const comparingFunction =
          COMPARISON_STRATEGY_STUB.compareOther as jest.MockedFunction<any>;
        const testValueToCompareWith = new Date();

        comparingFunction.mockClear();
        expect(
          compareValuesByStrategy(
            testValue,
            testValueToCompareWith,
            COMPARISON_STRATEGY_STUB
          )
        ).toBe(true);
        expect(comparingFunction).toBeCalledTimes(1);
        expect(comparingFunction).toBeCalledWith(
          testValue,
          testValueToCompareWith,
          COMPARISON_STRATEGY_STUB
        );
      }
    );
  });
});
