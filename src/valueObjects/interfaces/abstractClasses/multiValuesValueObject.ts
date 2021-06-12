import {
  IMultiValuesValueObject,
  IMultiValuesValueObjectValue,
} from '../multipleValuesValueObjectBase';

export abstract class MultiValuesValueObject<
  V extends IMultiValuesValueObjectValue
> implements IMultiValuesValueObject<V>
{
  get value(): V {
    return this.__value;
  }

  constructor(private __value: V) {
    this._validate();
  }

  public abstract serialize(): string;

  public equalsTo(anotherValueObject: IMultiValuesValueObject<V>): boolean {
    const {value: anotherValueObjectValue} = anotherValueObject;
    const anotherValueObjectValueKeys = Object.keys(anotherValueObjectValue);

    if (
      anotherValueObjectValueKeys.length !== Object.keys(this.__value).length
    ) {
      return false;
    }
    return Object.keys(anotherValueObjectValue).every(key => {
      const valueForKeyAnotherObject = anotherValueObjectValue[key];
      const valueForKeyThisObject = this.value[key];

      if (valueForKeyAnotherObject === valueForKeyThisObject) {
        return true;
      }
      if (
        valueForKeyAnotherObject instanceof Date &&
        valueForKeyThisObject instanceof Date
      ) {
        return (
          valueForKeyAnotherObject.getMilliseconds() ===
            valueForKeyThisObject.getMilliseconds() &&
          valueForKeyAnotherObject.toISOString() ===
            valueForKeyThisObject.toISOString()
        );
      }
      return false;
    });
  }

  protected abstract _validate(): void;
}
