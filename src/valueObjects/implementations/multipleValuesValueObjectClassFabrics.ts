import {
  IMultipleValuesValueObjectBaseConstructor,
  IMultipleValuesValueObjectBaseFabricParameters,
  IMultiValuesValueObject,
  IMultiValuesValueObjectValue,
} from 'src/valueObjects/interfaces';
import {MultiValuesValueObject} from 'src/valueObjects/interfaces/abstractClasses';

export function multipleValuesValueObjectBaseFabric<
  V extends IMultiValuesValueObjectValue
>({
  compareValues,
  serializeValue,
  validateValue,
}: IMultipleValuesValueObjectBaseFabricParameters<V>): IMultipleValuesValueObjectBaseConstructor<V> {
  class BaseValueObjectWithValuesEqualityChecker extends MultiValuesValueObject<V> {
    public equalsTo(vo: IMultiValuesValueObject<V>): boolean {
      return Boolean(compareValues(this.value, vo.value));
    }
    public serialize(): string {
      return serializeValue(this.value);
    }

    protected _validate(): void {
      validateValue(this.value);
    }
  }
  return BaseValueObjectWithValuesEqualityChecker;
}
