import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface ICompareEntitiesIdentities {
  (firstId: TIdentityValueObject, secondId: TIdentityValueObject): boolean;
}
