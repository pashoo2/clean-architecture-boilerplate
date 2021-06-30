import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface ICompareEntitiesIdentities<Id extends TIdentityValueObject> {
  (firstId: Id, secondId: Id): boolean;
}
