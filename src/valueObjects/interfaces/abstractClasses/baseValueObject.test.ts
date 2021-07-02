import {TSimpleType} from 'src/interfaces/common';
import {
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from 'src/__mock__/simpleTypes.stubs';
import {
  BaseValueObject,
  BaseValueObjectStringSerialization,
} from './baseValueObject';

describe('Base value object', () => {
  describe.each([BaseValueObject, BaseValueObjectStringSerialization])(
    '%p',
    ValueObjectConstructor => {
      class BaseValueObjectTestClass<
        V extends TSimpleType = string
      > extends ValueObjectConstructor<V> {
        public serialize(): string {
          return JSON.stringify(this.value);
        }

        protected _validate() {
          return true;
        }
      }

      it('Should not throw on invoking the constructor', () => {
        expect(() => {
          new BaseValueObjectTestClass('');
        }).not.toThrow();
      });

      it('Should have value property that returns value passed as a parameter in the constructor', () => {
        const testValue = 'testValue';
        const instance = new BaseValueObjectTestClass(testValue);

        expect(instance.value).toEqual(testValue);
      });

      it('Should serialize a value into a string that includes value passed as a parameter in the constructor', () => {
        const testValue = 'testValue';
        const instance = new BaseValueObjectTestClass(testValue);

        expect(instance.serialize()).toEqual(
          expect.stringContaining(testValue)
        );
      });

      describe('"equalsTo" method', () => {
        const TEST_VALUES: TSimpleType[] = ['string', 0, 1, null, undefined];

        it.each(TEST_VALUES)('Should return a boolean for %s', testValue => {
          const instance = new BaseValueObjectTestClass(testValue);

          expect(
            typeof instance.equalsTo(
              new BaseValueObjectTestClass(undefined)
            ) === 'boolean'
          ).toBe(true);
        });
        it.each(TEST_VALUES)(
          'Should return true for an Value Object with the same value %s',
          testValue => {
            const instance = new BaseValueObjectTestClass(testValue);
            expect(
              instance.equalsTo(new BaseValueObjectTestClass(testValue))
            ).toBe(true);
          }
        );
        it.each(TEST_VALUES)(
          'Should return false in case of a Value Object has a value of a different type',
          testValue => {
            const differentTypeValue = TEST_VALUES.find(
              t => typeof t !== typeof testValue
            );
            const instance = new BaseValueObjectTestClass(testValue);

            expect(
              instance.equalsTo(
                new BaseValueObjectTestClass(differentTypeValue)
              )
            ).toBe(false);
          }
        );
      });
    }
  );
  describe('BaseValueObject', () => {
    describe('Serialization', () => {
      class BaseValueObjectTestClass<
        V extends TSimpleType = string
      > extends BaseValueObject<V, any> {
        public serialize(): any {
          return this.value;
        }

        protected _validate() {
          return true;
        }
      }
      it.each([
        ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
        ...SIMPLE_TYPE_VALUES_SET_STRINGS,
      ])('Should return the same value as argument "%s"', testValue => {
        const testVO = new BaseValueObjectTestClass(testValue);

        expect(testVO.serialize()).toBe(testValue);
      });
    });
  });
  describe('BaseValueObjectStringSerialization', () => {
    describe('Serialization', () => {
      class BaseValueObjectTestClass<
        V extends TSimpleType
      > extends BaseValueObjectStringSerialization<V> {
        protected _validate() {
          return true;
        }
      }
      it.each([...SIMPLE_TYPE_VALUES_SET_NUMBERS])(
        'Should return a string returned by JSON.stringify for the numeric value "%s"',
        testValue => {
          const expectedValue = JSON.stringify(testValue);
          const testVO = new BaseValueObjectTestClass(testValue);

          expect(testVO.serialize()).toBe(expectedValue);
        }
      );

      it.each([...SIMPLE_TYPE_VALUES_SET_STRINGS])(
        'Should return a string returned a string itself for the string "%s"',
        testValue => {
          const expectedValue = testValue;
          const testVO = new BaseValueObjectTestClass(testValue);

          expect(testVO.serialize()).toBe(expectedValue);
        }
      );
    });
  });
});
