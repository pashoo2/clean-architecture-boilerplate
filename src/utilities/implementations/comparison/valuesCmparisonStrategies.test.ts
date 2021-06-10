import {ICompareValuesShallowStrategy} from 'src/utilities/interfaces/comparison/valuesComparisonStrategies';
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
import {OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR} from '../../../__mock__/objectTypes.stubs';

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
          if (typeof testValue === 'number' && Number.isNaN(testValue)) {
            return;
          }
          expect(
            deepComparisonStrategy.compareOther(
              testValue,
              testValue,
              deepComparisonStrategy
            )
          ).toBe(true);
        }
      );
    });
    describe('compareObjects', () => {
      // TODO
    });
    describe('compareArrays', () => {
      // TODO
    });
  });
});
