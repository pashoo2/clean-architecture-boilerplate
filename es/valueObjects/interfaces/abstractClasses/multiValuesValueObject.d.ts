import { IMultiValuesValueObject, IMultiValuesValueObjectValue } from '../multipleValuesValueObjectBase';
export declare abstract class MultiValuesValueObject<V extends IMultiValuesValueObjectValue> implements IMultiValuesValueObject<V> {
    private __value;
    get value(): V;
    constructor(__value: V);
    abstract serialize(): string;
    equalsTo(anotherValueObject: IMultiValuesValueObject<V>): boolean;
    protected abstract _validate(): void;
}
