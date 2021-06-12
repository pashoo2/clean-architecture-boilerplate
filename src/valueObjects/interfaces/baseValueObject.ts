import {Constructor} from 'src/interfaces/classes';
import {TSimpleType} from 'src/interfaces/common';
import {IComparable} from 'src/interfaces/comparison';
import {ISerializable} from 'src/interfaces/serialization';
import {ICompareValues} from 'src/utilities/interfaces/comparison/valuesComparisonStrategies';

export interface IBaseValueObject<
  V extends TSimpleType,
  S extends TSimpleType = string
> extends ISerializable<S>,
    IComparable<IBaseValueObject<V, S>> {
  readonly value: V;
}

export interface IBaseValueObjectConstructor<
  V extends TSimpleType,
  S extends TSimpleType = string
> extends Constructor<IBaseValueObject<V, S>, [V]> {}

export interface IBaseValueObjectStringSerialization<V extends TSimpleType>
  extends IBaseValueObject<V, string> {
  serialize(): string;
}

export interface IBaseValueObjectConstructorFabricParameters<
  V extends TSimpleType,
  S extends TSimpleType
> {
  compareValues: ICompareValues<V, V>;
  serializeValue: (value: V) => S;
  validateValue: (value: V) => void;
}

export interface IBaseValueObjectConstructorFabric<
  V extends TSimpleType,
  S extends TSimpleType
> {
  (
    parameters: IBaseValueObjectConstructorFabricParameters<V, S>
  ): IBaseValueObjectConstructor<V, S>;
}
