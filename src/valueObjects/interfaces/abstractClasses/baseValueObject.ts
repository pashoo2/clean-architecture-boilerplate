import {
  IBaseValueObject,
  IBaseValueObjectStringSerialization,
} from '@root/valueObjects/interfaces/baseValueObject';
import {TSimpleType} from '@root/interfaces/common';

export abstract class BaseValueObject<
  V extends TSimpleType,
  S extends TSimpleType = string
> implements IBaseValueObject<V, S>
{
  get value(): V {
    return this.__value;
  }

  constructor(private __value: V) {
    this._validate();
  }

  public abstract serialize(): S;

  public equalsTo(anotherValueObject: IBaseValueObject<V, S>): boolean {
    return anotherValueObject.value === this.value;
  }

  protected abstract _validate(): void;
}

export abstract class BaseValueObjectStringSerialization<V extends TSimpleType>
  extends BaseValueObject<V, string>
  implements IBaseValueObjectStringSerialization<V>
{
  public serialize(): string {
    if (typeof this.value === 'string') {
      return this.value;
    }
    return JSON.stringify(this.value);
  }
}
