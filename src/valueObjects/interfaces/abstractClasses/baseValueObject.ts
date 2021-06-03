import {
  IBaseValueObject,
  IBaseValueObjectStringSerialization,
} from 'src/valueObjects/interfaces/baseValueObject';
import {TSimpleType} from 'src/interfaces/common';

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

  public serialize(): string {
    return JSON.stringify(this.value);
  }

  public equalsTo(anotherValueObject: IBaseValueObject<V, S>): boolean {
    return anotherValueObject.value === this.value;
  }

  protected abstract _validate(): void;
}

export abstract class BaseValueObjectStringSerialization<V extends TSimpleType>
  extends BaseValueObject<V, string>
  implements IBaseValueObjectStringSerialization<V>
{
  serialize(): string {
    return String(this.value);
  }
}
