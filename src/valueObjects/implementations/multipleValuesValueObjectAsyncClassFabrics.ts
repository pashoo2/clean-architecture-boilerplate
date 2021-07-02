import {
  IMultiValuesValueObject,
  IMultiValuesValueObjectValue,
} from '@root/valueObjects/interfaces';
import {MultiValuesValueObjectAsync} from '@root/valueObjects/interfaces/abstractClasses';
import {
  IMultipleValuesValueObjectAsyncConstructor,
  IMultipleValuesValueObjectAsyncFabricParameters,
} from '@root/valueObjects/interfaces/multipleValuesValueObjectAsync';

export function multipleValuesValueObjectAsyncFabric<
  V extends IMultiValuesValueObjectValue
>({
  compareValues,
  serializeValue,
  validateValue,
}: IMultipleValuesValueObjectAsyncFabricParameters<V>): IMultipleValuesValueObjectAsyncConstructor<V> {
  class MultiValueObjectAsyncClass extends MultiValuesValueObjectAsync<V> {
    public async equalsTo(vo: IMultiValuesValueObject<V>): Promise<boolean> {
      return Boolean(await compareValues(this.value, vo.value));
    }
    public async serialize(): Promise<string> {
      return String(await serializeValue(this.value));
    }

    protected _validate(): void {
      validateValue(this.value);
    }
  }
  return MultiValueObjectAsyncClass;
}
