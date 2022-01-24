import { TSimpleType } from '../../../interfaces';
import { IBaseValueObject, IMultiValuesValueObject, TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare function validateEntityIdentityBase(entityId: IBaseValueObject<TSimpleType>): void;
export declare function validateEntityIdentityMultipleValue(entityId: IMultiValuesValueObject<any>): void;
export declare function validateEntityIdentity(entityId: TIdentityValueObject): void;
