import {
  IMultiValuesValueObject,
  IMultiValuesValueObjectValue,
} from '../multipleValuesValueObject';

export abstract class MultiValuesValueObject<
  V extends IMultiValuesValueObjectValue
> implements IMultiValuesValueObject<V>
{
  get value(): V {
    return this.__value;
  }

  protected constructor(private __value: V) {
    this._validate();
  }

  public abstract serialize(): string;

  public equalsTo(anotherValueObject: IMultiValuesValueObject<V>): boolean {
    const {value: anotherValueObjectValue} = anotherValueObject;
    return Object.keys(anotherValueObjectValue).every(key => {
      const valueForKeyAnotherObject = anotherValueObjectValue[key];
      const valueForKeyThisObject = this.value[key];

      if (valueForKeyAnotherObject === valueForKeyThisObject) {
        return true;
      }
      if (
        valueForKeyThisObject instanceof Date &&
        valueForKeyThisObject instanceof Date
      ) {
        return (
          valueForKeyThisObject.toISOString() ===
          valueForKeyThisObject.toISOString()
        );
      }
      return false;
    });
  }

  protected abstract _validate(): void;
}
