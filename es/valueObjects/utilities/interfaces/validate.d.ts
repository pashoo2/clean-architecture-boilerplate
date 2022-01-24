import { TSimpleType } from '../../../interfaces';
import { IBaseValueObject, IMultiValuesValueObject, TIdentityValueObject } from '../../../valueObjects/interfaces';
export interface IValidateEntityIdentityBase {
    (entityId: IBaseValueObject<TSimpleType>): void;
}
export interface IValidateEntityIdentityMultipleValue {
    (entityId: IMultiValuesValueObject<any>): void;
}
export interface IValidateEntityIdentity {
    (entityId: TIdentityValueObject): void;
}
