import {IComparable} from 'src/interfaces/comparison';
import {ITransferable} from 'src/interfaces/transferable';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';

export type TEntityIdentity = string;

export type TEntityType = string;

export interface IEntity<
  Id extends TIdentityValueObject = TIdentityValueObject,
  Type extends TEntityType = string
> extends IComparable<IEntity<Id, Type>>,
    ITransferable {
  readonly id: Id;
  readonly type: Type;
  readonly isDeleted: boolean;
}
