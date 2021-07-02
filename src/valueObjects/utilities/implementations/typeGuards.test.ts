import {
  isBaseValueObject,
  isMultipleValuesValueObject,
  isMultipleValuesValueObjectInsteadOfBase,
  isValueObject,
} from '@root/valueObjects/utilities/implementations/typeGuards';
import {
  SimpleIdentityValueObjectClassMock,
  MultipleIdentityValueObjectClassMock,
  SimpleIdentityValueObjectClassWithComparisonMock,
  MultipleIdentityValueObjectClassWithComparisonMock,
  SimpleValueObjectClassMock,
} from '@root/__mock__/valueObjects.mock';

export function runCheckResultsOfValueObjectTypeGuard(
  isValueObjectTypeGuardCallback: (value: any) => boolean
): void {
  it('Should return false for a non object value', () => {
    expect(isValueObjectTypeGuardCallback(undefined)).toBe(false);
    expect(isValueObjectTypeGuardCallback(null)).toBe(false);
    expect(isValueObjectTypeGuardCallback(void '')).toBe(false);
    expect(isValueObjectTypeGuardCallback('string')).toBe(false);
    expect(isValueObjectTypeGuardCallback(0)).toBe(false);
    expect(isValueObjectTypeGuardCallback(1)).toBe(false);
  });
  it('Should return false for a value object without method required', () => {
    const baseValueObjectWithoutEqualsToMethod =
      new SimpleIdentityValueObjectClassMock('');
    (baseValueObjectWithoutEqualsToMethod as any).equalsTo = undefined;
    const baseValueObjectWithoutSerializeMethod =
      new SimpleIdentityValueObjectClassMock('');
    (baseValueObjectWithoutSerializeMethod as any).serialize = undefined;
    const multipleValuesValueObjectWithoutSerializeMethod =
      new MultipleIdentityValueObjectClassMock({
        id: '',
      });
    (multipleValuesValueObjectWithoutSerializeMethod as any).serialize =
      undefined;
    const multipleValuesValueObjectWithComparisonWithoutEqualsToMethod =
      new MultipleIdentityValueObjectClassWithComparisonMock({
        id: '',
      });
    (
      multipleValuesValueObjectWithComparisonWithoutEqualsToMethod as any
    ).equalsTo = undefined;
    expect(
      isValueObjectTypeGuardCallback(baseValueObjectWithoutEqualsToMethod)
    ).toBe(false);
    expect(
      isValueObjectTypeGuardCallback(baseValueObjectWithoutSerializeMethod)
    ).toBe(false);
    expect(
      isValueObjectTypeGuardCallback(
        multipleValuesValueObjectWithComparisonWithoutEqualsToMethod
      )
    ).toBe(false);
    expect(
      isValueObjectTypeGuardCallback(
        multipleValuesValueObjectWithoutSerializeMethod
      )
    ).toBe(false);
  });
}

describe('Utilities for helping to check whether a value is a value object', () => {
  describe('isValueObject', () => {
    runCheckResultsOfValueObjectTypeGuard(isValueObject);
    it.each([
      new SimpleIdentityValueObjectClassMock(''),
      new SimpleIdentityValueObjectClassWithComparisonMock(''),
      new MultipleIdentityValueObjectClassMock({
        id: '',
      }),
      new MultipleIdentityValueObjectClassWithComparisonMock({
        id: '',
      }),
    ])('Should return true for the value object "%p"', valueObject => {
      expect(isValueObject(valueObject)).toBe(true);
    });
    it('Should return true for a value object with "undefined" value', () => {
      const baseValueObject = new SimpleValueObjectClassMock(undefined as any);
      expect(isValueObject(baseValueObject)).toBe(true);
    });
    it('Should return true for a value object with "null" value', () => {
      const baseValueObject = new SimpleValueObjectClassMock(null as any);
      expect(isValueObject(baseValueObject)).toBe(true);
    });
  });
  describe('isBaseValueObject', () => {
    runCheckResultsOfValueObjectTypeGuard(isBaseValueObject);

    it.each([
      new SimpleIdentityValueObjectClassMock(''),
      new SimpleIdentityValueObjectClassWithComparisonMock(''),
    ])('Should return true for the value object "%p"', valueObject => {
      expect(isBaseValueObject(valueObject)).toBe(true);
    });
    it.each([
      new MultipleIdentityValueObjectClassMock({
        id: 'id',
      }),
      new MultipleIdentityValueObjectClassWithComparisonMock({
        id: 'id',
      }),
    ])('Should return false for the value object "%p"', valueObject => {
      expect(isBaseValueObject(valueObject)).toBe(false);
    });
    it('Should return true for a value object with "undefined" value', () => {
      const baseValueObject = new SimpleValueObjectClassMock(undefined as any);
      expect(isBaseValueObject(baseValueObject)).toBe(true);
    });
    it('Should return true for a value object with "null" value', () => {
      const baseValueObject = new SimpleValueObjectClassMock(null as any);
      expect(isBaseValueObject(baseValueObject)).toBe(true);
    });
  });
  describe('isMultipleValuesValueObject', () => {
    runCheckResultsOfValueObjectTypeGuard(isMultipleValuesValueObject);
    it.each([
      new SimpleIdentityValueObjectClassMock(''),
      new SimpleIdentityValueObjectClassWithComparisonMock(''),
    ])('Should return false for the value object "%p"', valueObject => {
      expect(isMultipleValuesValueObject(valueObject)).toBe(false);
    });
    it.each([
      new MultipleIdentityValueObjectClassMock({
        id: 'id',
      }),
      new MultipleIdentityValueObjectClassWithComparisonMock({
        id: 'id',
      }),
    ])('Should return true for the value object "%p"', valueObject => {
      expect(isMultipleValuesValueObject(valueObject)).toBe(true);
    });
  });
  describe('isMultipleValuesValueObjectInsteadOfBase', () => {
    it.each([
      new SimpleIdentityValueObjectClassMock(''),
      new SimpleIdentityValueObjectClassWithComparisonMock(''),
    ])('Should return false for the value object "%p"', valueObject => {
      expect(isMultipleValuesValueObjectInsteadOfBase(valueObject)).toBe(false);
    });
    it.each([
      new MultipleIdentityValueObjectClassMock({
        id: 'id',
      }),
      new MultipleIdentityValueObjectClassWithComparisonMock({
        id: 'id',
      }),
    ])('Should return true for the value object "%p"', valueObject => {
      expect(isMultipleValuesValueObjectInsteadOfBase(valueObject)).toBe(true);
    });
  });
});
