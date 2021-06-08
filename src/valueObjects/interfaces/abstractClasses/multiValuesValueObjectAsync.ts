import {MultiValuesValueObject} from './multiValuesValueObject';
import {
  IMultiValuesValueObject,
  IMultiValuesValueObjectAsync,
  IMultiValuesValueObjectValue,
} from '../multipleValuesValueObject';

export abstract class MultiValuesValueObjectAsync<
  V extends IMultiValuesValueObjectValue
> implements IMultiValuesValueObjectAsync<V>
{
  protected constructor(private __value: V) {
    this._validate();
  }

  public abstract serialize(): Promise<string>;

  public abstract equalsTo(
    anotherValueObject: IMultiValuesValueObject<V>
  ): Promise<boolean>;

  protected abstract _validate(): void;
}
