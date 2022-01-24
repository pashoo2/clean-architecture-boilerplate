import { IMultiValuesValueObjectValue } from '../../valueObjects/interfaces';
import { IMultipleValuesValueObjectAsyncConstructor, IMultipleValuesValueObjectAsyncFabricParameters } from '../../valueObjects/interfaces/multipleValuesValueObjectAsync';
export declare function multipleValuesValueObjectAsyncFabric<V extends IMultiValuesValueObjectValue>({ compareValues, serializeValue, validateValue, }: IMultipleValuesValueObjectAsyncFabricParameters<V>): IMultipleValuesValueObjectAsyncConstructor<V>;
