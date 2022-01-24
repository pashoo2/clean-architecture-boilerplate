import { BaseValueObjectStringSerialization } from '../../valueObjects/interfaces/abstractClasses/baseValueObject';
import { IUuidVO } from '../../valueObjects/interfaces/uuidValueObject';
export declare class UuidValueObject extends BaseValueObjectStringSerialization<string> implements IUuidVO {
    protected _validate(): void;
}
