import {TSimpleType} from 'src/interfaces';
import {BaseValueObject} from 'src/valueObjects/interfaces/abstractClasses/baseValueObject';
import {
  IBaseValueObject,
  IBaseValueObjectConstructor,
  IBaseValueObjectConstructorFabricParameters,
} from 'src/valueObjects/interfaces/baseValueObject';

export function baseValueObjectClassFabric<
  V extends TSimpleType,
  S extends TSimpleType
>({
  compareValues,
  serializeValue,
  validateValue,
}: IBaseValueObjectConstructorFabricParameters<
  V,
  S
>): IBaseValueObjectConstructor<V, S> {
  class BaseValueObjectWithValuesEqualityChecker extends BaseValueObject<V, S> {
    public equalsTo(vo: IBaseValueObject<V, S>): boolean {
      return Boolean(compareValues(this.value, vo.value));
    }
    public serialize(): S {
      return serializeValue(this.value);
    }

    protected _validate(): void {
      validateValue(this.value);
    }
  }
  return BaseValueObjectWithValuesEqualityChecker;
}
