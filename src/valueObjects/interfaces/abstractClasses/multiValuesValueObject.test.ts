import {MultiValuesValueObject} from './multiValuesValueObject';

describe('multiValuesValueObject', () => {
  class MultiValuesValueObjectTestClass extends MultiValuesValueObject<{
    value: string;
    dateValue?: Date;
  }> {
    serialize() {
      return JSON.stringify(this.value);
    }

    protected _validate() {
      return true;
    }
  }

  it('Should not throw on invoking the constructor', () => {
    expect(() => {
      new MultiValuesValueObjectTestClass({value: ''});
    }).not.toThrow();
  });

  it('Should have value property that returns value passed as a parameter in the constructor', () => {
    const testValue = 'testValue';
    const instance = new MultiValuesValueObjectTestClass({value: testValue});

    expect(instance.value).toEqual({
      value: testValue,
    });
    expect(instance.serialize()).toEqual(expect.stringContaining(testValue));
    expect(
      instance.equalsTo(new MultiValuesValueObjectTestClass({value: testValue}))
    ).toBe(true);
    expect(
      instance.equalsTo(
        new MultiValuesValueObjectTestClass({value: `not ${testValue}`})
      )
    ).toBe(false);
  });

  describe('"equalsTo" method', () => {
    it('Should return a boolean value', () => {
      const instance = new MultiValuesValueObjectTestClass({
        value: 'testValue',
      });

      expect(
        typeof instance.equalsTo(
          new MultiValuesValueObjectTestClass({value: ''})
        ) === 'boolean'
      ).toBe(true);
    });
    it('Should return true for an object with the same keys and values simple type', () => {
      const testValue = {
        value: 'test',
      };
      const instance = new MultiValuesValueObjectTestClass(testValue);
      expect(
        instance.equalsTo(new MultiValuesValueObjectTestClass(testValue))
      ).toBe(true);
    });
    it('Should return true for an object with the same keys and values Date type', () => {
      const testValue = {
        value: 'test',
        dateValue: new Date(),
      };
      const instance = new MultiValuesValueObjectTestClass(testValue);

      expect(
        instance.equalsTo(new MultiValuesValueObjectTestClass(testValue))
      ).toBe(true);
    });
    it("Should return false if another value object doesn't contain one of props", () => {
      const testValue = {
        value: 'test',
      };
      const instance = new MultiValuesValueObjectTestClass(testValue);

      expect(
        instance.equalsTo(new MultiValuesValueObjectTestClass({} as any))
      ).toBe(false);

      const testValueWithDate = {value: 'test', dateValue: new Date()};
      const instanceWithDate = new MultiValuesValueObjectTestClass(
        testValueWithDate
      );

      expect(
        instanceWithDate.equalsTo(
          new MultiValuesValueObjectTestClass({value: testValueWithDate.value})
        )
      ).toBe(false);
      expect(
        instanceWithDate.equalsTo(
          new MultiValuesValueObjectTestClass({
            dateValue: testValueWithDate.dateValue,
          } as any)
        )
      ).toBe(false);
    });
    it('Should return false for a different simple values', () => {
      const testValue = {
        value: 'test',
      };
      const instance = new MultiValuesValueObjectTestClass(testValue);

      expect(
        instance.equalsTo(
          new MultiValuesValueObjectTestClass({
            value: `${testValue.value} not the same`,
          })
        )
      ).toBe(false);
      expect(
        instance.equalsTo(
          new MultiValuesValueObjectTestClass({
            value: `${testValue.value}   `,
          })
        )
      ).toBe(false);
    });
    it('Should return false for Dates differ with seconds or milliseconds', () => {
      const testDate = new Date();
      const differentDate = new Date();
      const testValue = {
        value: '',
        dateValue: testDate,
      };
      const instance = new MultiValuesValueObjectTestClass(testValue);

      differentDate.setMilliseconds(testDate.getMilliseconds() + 1);
      expect(
        instance.equalsTo(
          new MultiValuesValueObjectTestClass({
            ...testValue,
            dateValue: differentDate,
          })
        )
      ).toBe(false);
      differentDate.setSeconds(testDate.getSeconds() + 1);
      expect(
        instance.equalsTo(
          new MultiValuesValueObjectTestClass({
            ...testValue,
            dateValue: differentDate,
          })
        )
      ).toBe(false);
    });
  });
});
