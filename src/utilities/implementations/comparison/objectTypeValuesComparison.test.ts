import {areDatesEqual} from './objectTypeValuesComparison';
import {
  SIMPLE_TYPE_VALUES_SET_EMPTY,
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from '../../../__mock__/simpleTypes.stubs';

describe('Utils for comparison values have object type', () => {
  describe('areDatesEqual', () => {
    it('Should return true for the same dates', () => {
      const testDate = new Date();
      expect(areDatesEqual(testDate, testDate)).toBe(true);
    });
    it('Should return true different objects but the same date', () => {
      const testDateString = new Date().toISOString();
      const testDateFirst = new Date(testDateString);
      const testDateSecond = new Date(testDateString);
      expect(areDatesEqual(testDateFirst, testDateSecond)).toBe(true);
    });
    it('Should return false for a dates with a different seconds', () => {
      const testDateString = new Date().toISOString();
      const testDateFirst = new Date(testDateString);
      const testDateSecond = new Date(testDateString);
      testDateSecond.setSeconds(testDateFirst.getSeconds() + 1);
      expect(areDatesEqual(testDateFirst, testDateSecond)).toBe(false);
    });
    it('Should return false for a dates with a different milliseconds', () => {
      const testDateString = new Date().toISOString();
      const testDateFirst = new Date(testDateString);
      const testDateSecond = new Date(testDateString);
      testDateSecond.setMilliseconds(testDateFirst.getMilliseconds() + 1);
      expect(areDatesEqual(testDateFirst, testDateSecond)).toBe(false);
    });
    it('Should return false if no arguments passed', () => {
      expect((areDatesEqual as any)()).toBe(false);
    });
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_EMPTY,
      ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
      ...SIMPLE_TYPE_VALUES_SET_STRINGS,
    ])(
      'Should return false for the value "%s" passed as an argument',
      testValue => {
        expect((areDatesEqual as any)(testValue, testValue)).toBe(false);
      }
    );
  });
});
