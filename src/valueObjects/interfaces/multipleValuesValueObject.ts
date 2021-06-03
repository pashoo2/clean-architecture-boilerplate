import {
  ISerializable,
  ISerializableAsync,
} from '../../interfaces/serialization';
import {IComparable, IComparableAsync} from '../../interfaces/comparison';
import {TSerializableValue} from '../../interfaces/serialization';

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

export interface IMultiValuesValueObject<V extends IMultiValuesValueObjectValue>
  extends IMultiValuesValueObjectBase<V> {}

export interface IMultiValuesValueObjectAsync<
  V extends IMultiValuesValueObjectValue
> extends Omit<IMultiValuesValueObjectBase<V>, 'serialize' | 'equalsTo'>,
    ISerializableAsync<string>,
    IComparableAsync<IMultiValuesValueObject<V>> {}
