import {TSimpleType} from 'src/interfaces/common';
import {IComparable} from 'src/interfaces/comparison';
import {ISerializable} from 'src/interfaces/serialization';

export interface IBaseValueObject<
  V extends TSimpleType,
  S extends TSimpleType = string
> extends ISerializable<string>,
    IComparable<IBaseValueObject<V, S>> {
  readonly value: V;
}

export interface IBaseValueObjectStringSerialization<V extends TSimpleType>
  extends IBaseValueObject<V, string> {
  serialize(): string;
}
