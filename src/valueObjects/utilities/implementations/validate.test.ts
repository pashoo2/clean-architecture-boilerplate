import {
  validateEntityIdentity,
  validateEntityIdentityBase,
  validateEntityIdentityMultipleValue,
} from 'src/valueObjects/utilities/implementations/validate';
import {
  OBJECT_TYPE_VALUES_SET_ARRAYS_EMPTY,
  OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY,
  OBJECT_TYPE_VALUES_SET_OBJECTS_EMPTY,
  OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
} from 'src/__mock__/objectTypes.stubs';
import {
  SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
} from 'src/__mock__/simpleTypes.stubs';
import {
  MultipleValueObjectClassMock,
  SimpleValueObjectClassMock,
} from 'src/__mock__/valueObjects.mock';

describe('Value object validation utilities', () => {
  function runTestsForEntityIdentityBaseValidator(
    validateEntityIdentityBaseCallback: (v: any) => void
  ) {
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS,
      ...SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS,
    ])('Should throw in case of a non value object value "%p"', emptyValue => {
      expect(() =>
        validateEntityIdentityBaseCallback(emptyValue as any)
      ).toThrow();
    });
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS,
      ...SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS,
    ])(
      'Should throw in case of a value object which has a simple type empty value "%p"',
      emptyValue => {
        const simpleEmptyValueValueObject = new SimpleValueObjectClassMock(
          emptyValue as any
        );
        expect(() =>
          validateEntityIdentityBaseCallback(simpleEmptyValueValueObject as any)
        ).toThrow();
      }
    );
    it.each(
      [
        ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
        ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS,
      ].filter(value =>
        typeof value === 'number' ? Number.isFinite(value) : true
      )
    )(
      'Should not throw in case of a value object which has a simple type value "%p"',
      emptyValue => {
        const simpleEmptyValueValueObject = new SimpleValueObjectClassMock(
          emptyValue as any
        );
        expect(() =>
          validateEntityIdentityBaseCallback(simpleEmptyValueValueObject as any)
        ).not.toThrow();
      }
    );
  }

  function runTestsForEntityIdentityMultipleValueValidator(
    validateEntityIdentityMultipleValue: (value: any) => void
  ) {
    it.each([
      ...OBJECT_TYPE_VALUES_SET_ARRAYS_EMPTY,
      ...OBJECT_TYPE_VALUES_SET_OBJECTS_EMPTY,
    ])(
      'Should throw in case of a value object which has an object type empty value  "%p"',
      emptyValue => {
        const objectValueValueObject = new MultipleValueObjectClassMock(
          emptyValue as any
        );
        expect(() =>
          validateEntityIdentityMultipleValue(objectValueValueObject as any)
        ).toThrow();
      }
    );
    it.each([new Date(), new Map(), new Map().set(1, 1)])(
      'Should throw in case of a value object which has a simple type value "%p"',
      emptyValue => {
        const valueObjectWithObjectValueConstructor =
          new MultipleValueObjectClassMock(emptyValue as any);
        expect(() =>
          validateEntityIdentityMultipleValue(
            valueObjectWithObjectValueConstructor as any
          )
        ).toThrow();
      }
    );
    it.each([
      ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY,
      ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
    ])(
      'Should not throw in case of a value object which has an object type value "%p"',
      emptyValue => {
        const objectValueValueObject = new MultipleValueObjectClassMock(
          emptyValue as any
        );
        expect(() =>
          validateEntityIdentityMultipleValue(objectValueValueObject as any)
        ).not.toThrow();
      }
    );
  }

  describe('validateEntityIdentityBase', () => {
    runTestsForEntityIdentityBaseValidator(validateEntityIdentityBase);
    it.each([
      ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY,
      ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
      new Date(),
      new Map(),
    ])(
      'Should throw in case of a value object which has an object type value  "%p"',
      emptyValue => {
        const objectValueValueObject = new MultipleValueObjectClassMock(
          emptyValue as any
        );
        expect(() =>
          validateEntityIdentityBase(objectValueValueObject as any)
        ).toThrow();
      }
    );
  });
  describe('validateEntityIdentityMultipleValue', () => {
    runTestsForEntityIdentityMultipleValueValidator(
      validateEntityIdentityMultipleValue
    );
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
      ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS,
    ])(
      'Should throw in case of a value object which has a simple type value "%p"',
      emptyValue => {
        const simpleEmptyValueValueObject = new SimpleValueObjectClassMock(
          emptyValue as any
        );
        expect(() =>
          validateEntityIdentityMultipleValue(
            simpleEmptyValueValueObject as any
          )
        ).toThrow();
      }
    );
  });
  describe('validateEntityIdentity', () => {
    runTestsForEntityIdentityBaseValidator(validateEntityIdentity);
    runTestsForEntityIdentityMultipleValueValidator(validateEntityIdentity);
  });
});
