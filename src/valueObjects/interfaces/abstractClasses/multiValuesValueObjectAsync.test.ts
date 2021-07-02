import {MultiValuesValueObjectAsync} from '@root/valueObjects/interfaces/abstractClasses/multiValuesValueObjectAsync';

describe('multiValuesValueObject', () => {
  class MultiValuesValueObjectTestClass extends MultiValuesValueObjectAsync<{
    value: string;
    dateValue?: Date;
  }> {
    async serialize() {
      return JSON.stringify(this.value);
    }

    async equalsTo(v: any): Promise<boolean> {
      return this.value === v.value;
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
  });

  it('Should serialize a value into a string that includes value passed as a parameter in the constructor', async () => {
    const testValue = 'testValue';
    const instance = new MultiValuesValueObjectTestClass({value: testValue});

    await expect(instance.serialize()).resolves.toEqual(
      expect.stringContaining(testValue)
    );
  });

  describe('"equalsTo" method', () => {
    it('Should return a boolean value', async () => {
      const instance = new MultiValuesValueObjectTestClass({
        value: 'testValue',
      });
      const result = await instance.equalsTo(
        new MultiValuesValueObjectTestClass({value: ''})
      );

      expect(typeof result === 'boolean').toBe(true);
    });
  });
});
