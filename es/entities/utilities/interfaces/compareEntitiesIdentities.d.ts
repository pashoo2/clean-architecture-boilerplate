import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export interface ICompareEntitiesIdentities<Id extends TIdentityValueObject> {
    (firstId: Id, secondId: Id): boolean;
}
