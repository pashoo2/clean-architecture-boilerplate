import {TSimpleType} from 'src/interfaces';
import {
  IBaseValueObject,
  IMultiValuesValueObject,
  TIdentityValueObject,
} from 'src/valueObjects/interfaces';

export interface IValidateEntityIdentityBase {
  (entityId: IBaseValueObject<TSimpleType>): void;
}

export interface IValidateEntityIdentityMultipleValue {
  (entityId: IMultiValuesValueObject<any>): void;
}

export interface IValidateEntityIdentity {
  (entityId: TIdentityValueObject): void;
}
