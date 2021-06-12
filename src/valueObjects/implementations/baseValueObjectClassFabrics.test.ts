import {baseValueObjectClassFabric} from 'src/valueObjects/implementations/baseValueObjectClassFabrics';

describe('Fabrics allows to construct various constructors of the base value object interface', () => {
  describe('baseValueObjectClassFabric', () => {
    it('Should return a class allows to construct a value object', () => {
      const BaseValueObjectClass = baseValueObjectClassFabric<string, string>({
        compareValues: jest.fn(),
        serializeValue: jest.fn(),
        validateValue: jest.fn(),
      });
      const value = 'v';
      const vo = new BaseValueObjectClass(value);
      expect(vo.value).toBe(value);
      expect(typeof vo.serialize === 'function').toBe(true);
      expect(typeof vo.equalsTo === 'function').toBe(true);
    });
    it('Should call "compareValues" parameter function when the method "equalsTo" is invoked with values of value objects compared', () => {
      const comparator = jest.fn();
      const BaseValueObjectClass = baseValueObjectClassFabric<number, string>({
        compareValues: comparator,
        serializeValue: jest.fn(),
        validateValue: jest.fn(),
      });
      const testValue = 10;
      const vo = new BaseValueObjectClass(testValue);
      const testValueToCompareWith = Infinity;
      const voToCompareWith = new BaseValueObjectClass(testValueToCompareWith);
      expect(comparator).not.toBeCalled();
      vo.equalsTo(voToCompareWith);
      expect(comparator).toBeCalledWith(testValue, testValueToCompareWith);
    });
    test('The method "equalsTo" must return a boolean', () => {
      const comparator = jest.fn(() => 'comparator') as any;
      const BaseValueObjectClass = baseValueObjectClassFabric<number, string>({
        compareValues: comparator,
        serializeValue: jest.fn(),
        validateValue: jest.fn(),
      });
      const testValue = 10;
      const vo = new BaseValueObjectClass(testValue);
      expect(typeof vo.equalsTo(vo) === 'boolean').toBe(true);
    });
    test('The method "equalsTo" must throw if a parameter "compareValues" throws', () => {
      const errorMessageExpected = 'errorExpected';
      const comparator = jest.fn(() => {
        throw new Error(errorMessageExpected);
      }) as any;
      const BaseValueObjectClass = baseValueObjectClassFabric<number, string>({
        compareValues: comparator,
        serializeValue: jest.fn(),
        validateValue: jest.fn(),
      });
      const testValue = 10;
      const vo = new BaseValueObjectClass(testValue);
      expect(() => vo.equalsTo(vo)).toThrowError(errorMessageExpected);
    });
    it('Should call "serializeValue" parameter function with the value when the "serialize" method invoked', () => {
      const serializer = jest.fn();
      const BaseValueObjectClass = baseValueObjectClassFabric<number, string>({
        compareValues: jest.fn(),
        serializeValue: serializer,
        validateValue: jest.fn(),
      });
      const testValue = 10;
      const vo = new BaseValueObjectClass(testValue);
      expect(serializer).not.toBeCalled();
      vo.serialize();
      expect(serializer).toBeCalledWith(testValue);
    });
    it('Should return exact the same value as a "serializeValue" parameter function return if the "serialize" method invoked', () => {
      const expectedSerializedValue = 'expectedSerializedValue';
      const serializer = jest.fn(() => expectedSerializedValue);
      const BaseValueObjectClass = baseValueObjectClassFabric<number, string>({
        compareValues: jest.fn(),
        serializeValue: serializer,
        validateValue: jest.fn(),
      });
      const testValue = 10;
      const vo = new BaseValueObjectClass(testValue);
      expect(vo.serialize()).toBe(expectedSerializedValue);
    });
    test('The method "serialize" must throw if a parameter "serialize" throws', () => {
      const errorMessageExpected = 'errorExpected';
      const serializer = jest.fn(() => {
        throw new Error(errorMessageExpected);
      }) as any;
      const BaseValueObjectClass = baseValueObjectClassFabric<number, string>({
        compareValues: jest.fn(),
        serializeValue: serializer,
        validateValue: jest.fn(),
      });
      const testValue = 10;
      const vo = new BaseValueObjectClass(testValue);
      expect(() => vo.serialize()).toThrowError(errorMessageExpected);
    });
    it('Should call a "validateValue" parameter function with the value passed in a constructor', () => {
      const validator = jest.fn(() => 'some value');
      const BaseValueObjectClass = baseValueObjectClassFabric<number, string>({
        compareValues: jest.fn(),
        serializeValue: jest.fn(),
        validateValue: validator,
      });
      const testValue = 10;
      expect(validator).not.toBeCalled();
      new BaseValueObjectClass(testValue);
      expect(validator).toBeCalledWith(testValue);
    });
    it('Should throw on construction if a "validateValue" parameter function throws', () => {
      const errorMessageExpected = 'errorMessageExpected';
      const validator = jest.fn(() => {
        throw new Error(errorMessageExpected);
      });
      const BaseValueObjectClass = baseValueObjectClassFabric<number, string>({
        compareValues: jest.fn(),
        serializeValue: jest.fn(),
        validateValue: validator,
      });
      const testValue = 10;
      expect(() => new BaseValueObjectClass(testValue)).toThrowError(
        errorMessageExpected
      );
    });
  });
});
