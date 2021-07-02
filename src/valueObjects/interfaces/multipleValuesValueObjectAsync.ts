import {Constructor} from '@root/interfaces/classes';
import {IValidator} from '@root/interfaces/validation';
import {ICompareValuesAsync} from '@root/utilities/interfaces/comparison/valuesComparisonStrategies';
import {
  IComparableAsync,
  ISerializableAsync,
  ISerializerAsync,
} from '../../interfaces';
import {
  IMultiValuesValueObject,
  IMultiValuesValueObjectBase,
  IMultiValuesValueObjectValue,
} from './multipleValuesValueObjectBase';

export interface IMultiValuesValueObjectAsync<
  V extends IMultiValuesValueObjectValue
> extends Omit<IMultiValuesValueObjectBase<V>, 'serialize' | 'equalsTo'>,
    ISerializableAsync<string>,
    IComparableAsync<
      IMultiValuesValueObject<V> | IMultiValuesValueObjectAsync<V>
    > {}

export interface IMultipleValuesValueObjectAsyncConstructor<
  V extends IMultiValuesValueObjectValue
> extends Constructor<IMultiValuesValueObjectAsync<V>, [V]> {}

export interface IMultipleValuesValueObjectAsyncFabricParameters<
  V extends IMultiValuesValueObjectValue
> {
  compareValues: ICompareValuesAsync<V, V>;
  serializeValue: ISerializerAsync<V, string>;
  validateValue: IValidator<V>;
}

export interface IMultipleValuesValueObjectAsyncFabric<
  V extends IMultiValuesValueObjectValue
> {
  (
    parameters: IMultipleValuesValueObjectAsyncFabricParameters<V>
  ): IMultipleValuesValueObjectAsyncConstructor<V>;
}
