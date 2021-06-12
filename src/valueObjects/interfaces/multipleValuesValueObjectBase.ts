import {
  ISerializable,
  ISerializer,
  TSerializableValue,
} from '../../interfaces/serialization';
import {IComparable} from '../../interfaces/comparison';
import {Constructor} from 'src/interfaces/classes';
import {ICompareValues} from 'src/utilities/interfaces/comparison/valuesComparisonStrategies';
import {IValidator} from 'src/interfaces/validation';

export interface IMultiValuesValueObjectValue {
  [key: string]: TSerializableValue;
  [key: number]: TSerializableValue;
}

export interface IMultiValuesValueObjectBase<
  V extends IMultiValuesValueObjectValue
> extends ISerializable<string>,
    IComparable<IMultiValuesValueObjectBase<V>> {
  readonly value: V;
}

export interface IMultipleValuesValueObjectBaseConstructor<
  V extends IMultiValuesValueObjectValue
> extends Constructor<IMultiValuesValueObjectBase<V>, [V]> {}

export interface IMultipleValuesValueObjectBaseFabricParameters<
  V extends IMultiValuesValueObjectValue
> {
  compareValues: ICompareValues<V, V>;
  serializeValue: ISerializer<V, string>;
  validateValue: IValidator<V>;
}

export interface IMultipleValuesValueObjectBaseFabric<
  V extends IMultiValuesValueObjectValue
> {
  (
    parameters: IMultipleValuesValueObjectBaseFabricParameters<V>
  ): IMultipleValuesValueObjectBaseConstructor<V>;
}

export interface IMultiValuesValueObject<V extends IMultiValuesValueObjectValue>
  extends IMultiValuesValueObjectBase<V> {}
