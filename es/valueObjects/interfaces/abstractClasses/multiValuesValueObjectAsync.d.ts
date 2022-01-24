import { IMultiValuesValueObject, IMultiValuesValueObjectValue } from '../multipleValuesValueObjectBase';
import { IMultiValuesValueObjectAsync } from '../multipleValuesValueObjectAsync';
export declare abstract class MultiValuesValueObjectAsync<V extends IMultiValuesValueObjectValue> implements IMultiValuesValueObjectAsync<V> {
    private __value;
    get value(): V;
    constructor(__value: V);
    abstract serialize(): Promise<string>;
    abstract equalsTo(anotherValueObject: IMultiValuesValueObject<V>): Promise<boolean>;
    protected abstract _validate(): void;
}
