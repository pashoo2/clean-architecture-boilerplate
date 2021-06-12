import {multipleValuesValueObjectBaseFabric} from 'src/valueObjects/implementations/multipleValuesValueObjectClassFabrics';

describe('Fabrics allows to construct various constructors of the multiple values value object interface', () => {
  describe('multipleValuesValueObjectBaseFabric', () => {
    let testValue: {testValue: boolean};

    beforeEach(() => {
      testValue = {testValue: true};
    });
    it('Should return a class allows to construct a value object', () => {
      const MultipleValuesValueObject = multipleValuesValueObjectBaseFabric<
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
    it('Should call "compareValues" parameter function when the method "equalsTo" is invoked with values of value objects compared', () => {
      const comparator = jest.fn();
      const MultipleValuesValueObject = multipleValuesValueObjectBaseFabric<
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
      vo.equalsTo(voToCompareWith);
      expect(comparator).toBeCalledWith(testValue, testValueToCompareWith);
    });
    test('The method "equalsTo" must return a boolean', () => {
      const comparator = jest.fn(() => 'comparator') as any;
      const MultipleValuesValueObject = multipleValuesValueObjectBaseFabric<
        typeof testValue
      >({
        compareValues: comparator,
        serializeValue: jest.fn(),
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      expect(typeof vo.equalsTo(vo) === 'boolean').toBe(true);
    });
    test('The method "equalsTo" must throw if a parameter "compareValues" throws', () => {
      const errorMessageExpected = 'errorExpected';
      const comparator = jest.fn(() => {
        throw new Error(errorMessageExpected);
      }) as any;
      const MultipleValuesValueObject = multipleValuesValueObjectBaseFabric<
        typeof testValue
      >({
        compareValues: comparator,
        serializeValue: jest.fn(),
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      expect(() => vo.equalsTo(vo)).toThrowError(errorMessageExpected);
    });
    it('Should call "serializeValue" parameter function with the value when the "serialize" method invoked', () => {
      const serializer = jest.fn();
      const MultipleValuesValueObject = multipleValuesValueObjectBaseFabric<
        typeof testValue
      >({
        compareValues: jest.fn(),
        serializeValue: serializer,
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      expect(serializer).not.toBeCalled();
      vo.serialize();
      expect(serializer).toBeCalledWith(testValue);
    });
    it('Should return exact the same value as a "serializeValue" parameter function return if the "serialize" method invoked', () => {
      const expectedSerializedValue = 'expectedSerializedValue';
      const serializer = jest.fn(() => expectedSerializedValue);
      const MultipleValuesValueObject = multipleValuesValueObjectBaseFabric<
        typeof testValue
      >({
        compareValues: jest.fn(),
        serializeValue: serializer,
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      expect(vo.serialize()).toBe(expectedSerializedValue);
    });
    test('The method "serialize" must throw if a parameter "serialize" throws', () => {
      const errorMessageExpected = 'errorExpected';
      const serializer = jest.fn(() => {
        throw new Error(errorMessageExpected);
      }) as any;
      const MultipleValuesValueObject = multipleValuesValueObjectBaseFabric<
        typeof testValue
      >({
        compareValues: jest.fn(),
        serializeValue: serializer,
        validateValue: jest.fn(),
      });
      const vo = new MultipleValuesValueObject(testValue);
      expect(() => vo.serialize()).toThrowError(errorMessageExpected);
    });
    it('Should call a "validateValue" parameter function with the value passed in a constructor', () => {
      const validator = jest.fn(() => 'some value');
      const MultipleValuesValueObject = multipleValuesValueObjectBaseFabric<
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
      const MultipleValuesValueObject = multipleValuesValueObjectBaseFabric<
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
