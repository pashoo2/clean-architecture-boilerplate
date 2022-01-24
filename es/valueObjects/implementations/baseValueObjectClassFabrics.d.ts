import { TSimpleType } from '../../interfaces';
import { IBaseValueObjectConstructor, IBaseValueObjectConstructorFabricParameters } from '../../valueObjects/interfaces/baseValueObject';
export declare function baseValueObjectClassFabric<V extends TSimpleType, S extends TSimpleType>({ compareValues, serializeValue, validateValue, }: IBaseValueObjectConstructorFabricParameters<V, S>): IBaseValueObjectConstructor<V, S>;
