import { BaseValueObjectStringSerialization } from '../../valueObjects/interfaces/abstractClasses/baseValueObject';
import { IEmailVO } from '../interfaces/emailValueObject';
export declare class EmailVO extends BaseValueObjectStringSerialization<string> implements IEmailVO {
    protected _validate(): void;
}
