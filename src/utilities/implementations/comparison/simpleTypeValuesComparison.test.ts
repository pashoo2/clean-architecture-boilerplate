import {
  SIMPLE_TYPE_VALUES_SET_EMPTY,
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from '../../../__mock__/simpleTypes.stubs';
import {areSimpleValuesEqual} from 'src/utilities/implementations/comparison/simpleTypeValuesComparison';

describe('Utils for comparison simple type values', () => {
  describe('areSimpleValuesEqual', () => {
    it('Should return false if no arguments passed', () => {
      expect((areSimpleValuesEqual as any)()).toBe(false);
    });
    it.each(SIMPLE_TYPE_VALUES_SET_EMPTY)(
      'Should return true for the same simple empty values "%s"',
      testValue => {
        expect(areSimpleValuesEqual(testValue, testValue)).toBe(true);
      }
    );
    it.each(SIMPLE_TYPE_VALUES_SET_NUMBERS)(
      'Should return true for the same numeric values "%s"',
      testValue => {
        expect(areSimpleValuesEqual(testValue, testValue)).toBe(true);
      }
    );
    it.each(SIMPLE_TYPE_VALUES_SET_STRINGS)(
      'Should return true for the same string values "%s"',
      testValue => {
        expect(areSimpleValuesEqual(testValue, testValue)).toBe(true);
      }
    );

    function areEquals(valueFromSet: any, testValue: any): boolean {
      if (valueFromSet === testValue) {
        return true;
      }
      if (
        (typeof valueFromSet === 'number' || valueFromSet instanceof Number) &&
        (typeof testValue === 'number' || testValue instanceof Number) &&
        Number.isNaN(testValue) &&
        Number.isNaN(valueFromSet)
      ) {
        return true;
      }
      if (
        (typeof valueFromSet === 'string' || valueFromSet instanceof String) &&
        (typeof testValue === 'string' || testValue instanceof String) &&
        String(valueFromSet).trim() === String(testValue).trim()
      ) {
        return true;
      }
      return false;
    }

    describe.each([
      ...SIMPLE_TYPE_VALUES_SET_EMPTY,
      ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
      ...SIMPLE_TYPE_VALUES_SET_STRINGS,
    ])('Value "%s"', testValue => {
      it.each(SIMPLE_TYPE_VALUES_SET_EMPTY)(
        'Should return false for different empty value "%s"',
        valueFromSet => {
          if (areEquals(valueFromSet, testValue)) {
            return;
          }
          expect(areSimpleValuesEqual(testValue, valueFromSet)).toBe(false);
        }
      );

      it.each(SIMPLE_TYPE_VALUES_SET_NUMBERS)(
        'Should return false for different number value "%s"',
        valueFromSet => {
          if (areEquals(valueFromSet, testValue)) {
            return;
          }
          expect(areSimpleValuesEqual(testValue, valueFromSet)).toBe(false);
        }
      );

      it.each(SIMPLE_TYPE_VALUES_SET_STRINGS)(
        'Should return false for different string value "%s"',
        valueFromSet => {
          if (areEquals(valueFromSet, testValue)) {
            return;
          }
          expect(areSimpleValuesEqual(testValue, valueFromSet)).toBe(false);
        }
      );
    });
  });
});
