import {multipleValuesValueObjectAsyncFabric} from '@root/valueObjects/implementations/multipleValuesValueObjectAsyncClassFabrics';

describe('Fabrics allows to construct various constructors of the multiple values value object interface', () => {
  describe('multipleValuesValueObjectBaseFabric', () => {
    let testValue: {testValue: boolean};

    beforeEach(() => {
      testValue = {testValue: true};
    });
    it('Should return a class allows to construct a value object', () => {
      const MultipleValuesValueObject = multipleValuesValueObjectAsyncFabric<
        typeof testValue
      >({
        compareValues: jest.fn(),
        serializeValue: jest.fn(),
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      expect(vo.value).toBe(testValue);
      expect(typeof vo.serialize === 'function').toBe(true);
      expect(typeof vo.equalsTo === 'function').toBe(true);
    });
    it('Should call "compareValues" parameter function when the method "equalsTo" is invoked with values of value objects compared', async () => {
      const comparator = jest.fn();
      const MultipleValuesValueObject = multipleValuesValueObjectAsyncFabric<
        typeof testValue
      >({
        compareValues: comparator,
        serializeValue: jest.fn(),
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      const testValueToCompareWith = {};
      const voToCompareWith = new MultipleValuesValueObject(
        testValueToCompareWith as any
      );
      expect(comparator).not.toBeCalled();
      await vo.equalsTo(voToCompareWith);
      expect(comparator).toBeCalledWith(testValue, testValueToCompareWith);
    });
    test('The method "equalsTo" must return a boolean', async () => {
      const comparator = jest.fn(() => 'comparator') as any;
      const MultipleValuesValueObject = multipleValuesValueObjectAsyncFabric<
        typeof testValue
      >({
        compareValues: comparator,
        serializeValue: jest.fn(),
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      expect(typeof (await vo.equalsTo(vo)) === 'boolean').toBe(true);
    });
    test('The method "equalsTo" must throw if a parameter "compareValues" throws', async () => {
      const errorMessageExpected = 'errorExpected';
      const comparator = jest.fn(() => {
        throw new Error(errorMessageExpected);
      }) as any;
      const MultipleValuesValueObject = multipleValuesValueObjectAsyncFabric<
        typeof testValue
      >({
        compareValues: comparator,
        serializeValue: jest.fn(),
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      await expect(() => vo.equalsTo(vo)).rejects.toThrowError(
        errorMessageExpected
      );
    });
    it('Should call "serializeValue" parameter function with the value when the "serialize" method invoked', async () => {
      const serializer = jest.fn();
      const MultipleValuesValueObject = multipleValuesValueObjectAsyncFabric<
        typeof testValue
      >({
        compareValues: jest.fn(),
        serializeValue: serializer,
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      expect(serializer).not.toBeCalled();
      await vo.serialize();
      expect(serializer).toBeCalledWith(testValue);
    });
    it('Should return a string from "serialize" method invoked', async () => {
      const expectedSerializedValue = {};
      const serializer = jest.fn(() => expectedSerializedValue) as any;
      const MultipleValuesValueObject = multipleValuesValueObjectAsyncFabric<
        typeof testValue
      >({
        compareValues: jest.fn(),
        serializeValue: serializer,
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      await expect(vo.serialize()).resolves.toEqual(
        expect.stringContaining('')
      );
    });
    test('The method "serialize" must throw if a parameter "serialize" throws', async () => {
      const errorMessageExpected = 'errorExpected';
      const serializer = jest.fn(() => {
        throw new Error(errorMessageExpected);
      }) as any;
      const MultipleValuesValueObject = multipleValuesValueObjectAsyncFabric<
        typeof testValue
      >({
        compareValues: jest.fn(),
        serializeValue: serializer,
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      await expect(() => vo.serialize()).rejects.toThrowError(
        errorMessageExpected
      );
    });
    it('Should call a "validateValue" parameter function with the value passed in a constructor', () => {
      const validator = jest.fn(() => 'some value');
      const MultipleValuesValueObject = multipleValuesValueObjectAsyncFabric<
        typeof testValue
      >({
        compareValues: jest.fn(),
        serializeValue: jest.fn(),
        validateValue: validator,
      });
      expect(validator).not.toBeCalled();
      new MultipleValuesValueObject(testValue);
      expect(validator).toBeCalledWith(testValue);
    });
    it('Should throw on construction if a "validateValue" parameter function throws', () => {
      const errorMessageExpected = 'errorMessageExpected';
      const validator = jest.fn(() => {
        throw new Error(errorMessageExpected);
      });
      const MultipleValuesValueObject = multipleValuesValueObjectAsyncFabric<
        typeof testValue
      >({
        compareValues: jest.fn(),
        serializeValue: jest.fn(),
        validateValue: validator,
      });
      expect(() => new MultipleValuesValueObject(testValue)).toThrowError(
        errorMessageExpected
      );
    });
  });
});
