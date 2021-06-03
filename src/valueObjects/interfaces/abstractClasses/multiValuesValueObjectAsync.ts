import {
  IMultiValuesValueObject,
  IMultiValuesValueObjectAsync,
  IMultiValuesValueObjectValue,
} from '../multipleValuesValueObject';

export abstract class MultiValuesValueObjectAsync<
  V extends IMultiValuesValueObjectValue
> implements IMultiValuesValueObjectAsync<V>
{
  get value(): V {
    return this.__value;
  }

  protected constructor(private __value: V) {
    this._validate();
  }

  public abstract serialize(): Promise<string>;

  public abstract equalsTo(
    anotherValueObject: IMultiValuesValueObject<V>
  ): Promise<boolean>;

  protected abstract _validate(): void;
}
