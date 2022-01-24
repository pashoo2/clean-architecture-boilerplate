import { IBaseValueObject, IBaseValueObjectStringSerialization } from '../../../valueObjects/interfaces/baseValueObject';
import { TSimpleType } from '../../../interfaces/common';
export declare abstract class BaseValueObject<V extends TSimpleType, S extends TSimpleType = string> implements IBaseValueObject<V, S> {
    private __value;
    get value(): V;
    constructor(__value: V);
    abstract serialize(): S;
    equalsTo(anotherValueObject: IBaseValueObject<V, S>): boolean;
    protected abstract _validate(): void;
}
export declare abstract class BaseValueObjectStringSerialization<V extends TSimpleType> extends BaseValueObject<V, string> implements IBaseValueObjectStringSerialization<V> {
    serialize(): string;
}
