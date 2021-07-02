import {TSimpleType} from '@root/interfaces';
import {
  IBaseValueObject,
  IMultiValuesValueObject,
  TIdentityValueObject,
} from '@root/valueObjects/interfaces';

export interface IValidateEntityIdentityBase {
  (entityId: IBaseValueObject<TSimpleType>): void;
}

export interface IValidateEntityIdentityMultipleValue {
  (entityId: IMultiValuesValueObject<any>): void;
}

export interface IValidateEntityIdentity {
  (entityId: TIdentityValueObject): void;
}
