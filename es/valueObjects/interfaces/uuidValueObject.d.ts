import { IBaseValueObjectStringSerialization } from '../../valueObjects/interfaces/baseValueObject';
import { IIdentityValueObjectSimple } from '../../valueObjects/interfaces/identityValueObject';
export interface IUuidVO extends IBaseValueObjectStringSerialization<string>, IIdentityValueObjectSimple {
}
