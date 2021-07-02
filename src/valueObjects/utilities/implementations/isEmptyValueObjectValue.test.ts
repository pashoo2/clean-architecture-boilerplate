import {
  isEmptyBaseValueObjectValue,
  isEmptyMultipleValuesValueObjectValue,
} from '@root/valueObjects/utilities/implementations/isEmptyValueObjectValue';
import {
  OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY,
  OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR_SERIALIZABLE,
} from '@root/__mock__/objectTypes.stubs';
import {
  SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
} from '@root/__mock__/simpleTypes.stubs';

describe('Utilities for checking whether a value object is empty', () => {
  describe('isEmptyBaseValueObjectValue', () => {
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS,
      ...SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS,
    ])('Should return true for the empty value "%p"', emptyValue => {
      expect(isEmptyBaseValueObjectValue(emptyValue)).toBe(true);
    });
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS,
      ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
    ])('Should return false for a non empty value "%p"', emptyValue => {
      expect(isEmptyBaseValueObjectValue(emptyValue)).toBe(false);
    });
  });
  describe('isEmptyMultipleValuesValueObjectValue', () => {
    it.each([{}, []])(
      'Should return true for the empty value "%p"',
      emptyValue => {
        expect(isEmptyMultipleValuesValueObjectValue(emptyValue)).toBe(true);
      }
    );
    it.each([
      ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY,
      ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR_SERIALIZABLE,
    ])('Should return false for a non empty value "%p"', emptyValue => {
      expect(isEmptyMultipleValuesValueObjectValue(emptyValue)).toBe(false);
    });
  });
});
