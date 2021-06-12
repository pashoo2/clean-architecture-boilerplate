import {
  ISerializable,
  ISerializableAsync,
} from '../../interfaces/serialization';
import {IComparable, IComparableAsync} from '../../interfaces/comparison';
import {TSerializableValue} from '../../interfaces/serialization';
import {Constructor} from 'src/interfaces/classes';
import {ICompareValues} from 'src/utilities/interfaces/comparison/valuesComparisonStrategies';

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
  serializeValue: (value: V) => string;
  validateValue: (value: V) => void;
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

export interface IMultiValuesValueObjectAsync<
  V extends IMultiValuesValueObjectValue
> extends Omit<IMultiValuesValueObjectBase<V>, 'serialize' | 'equalsTo'>,
    ISerializableAsync<string>,
    IComparableAsync<IMultiValuesValueObject<V>> {}
