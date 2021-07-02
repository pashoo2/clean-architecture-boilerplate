import {Constructor} from '@root/interfaces/classes';
import {TSimpleType} from '@root/interfaces/common';
import {IComparable} from '@root/interfaces/comparison';
import {ISerializable, ISerializer} from '@root/interfaces/serialization';
import {IValidator} from '@root/interfaces/validation';
import {ICompareValues} from '@root/utilities/interfaces/comparison/valuesComparisonStrategies';

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
  serializeValue: ISerializer<V, S>;
  validateValue: IValidator<V>;
}

export interface IBaseValueObjectConstructorFabric<
  V extends TSimpleType,
  S extends TSimpleType
> {
  (
    parameters: IBaseValueObjectConstructorFabricParameters<V, S>
  ): IBaseValueObjectConstructor<V, S>;
}
