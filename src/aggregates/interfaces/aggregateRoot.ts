import {IEntityImplementation} from '../../entities/interfaces/entity';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';
import {
  IBaseEntityParameters,
  IBaseEntityServices,
  IBaseEntityEventsList,
} from '../../entities/interfaces/baseEntity';

export interface IBaseAggregateRootParameters<Id extends TIdentityValueObject>
  extends IBaseEntityParameters<Id> {
  isDeleted: boolean;
}

export interface IBaseAggregateRootEventsList<
  Id extends TIdentityValueObject,
  Type extends string
> extends IBaseEntityEventsList<Id, Type> {}

export interface IBaseAggregateRootServices<
  E extends IBaseAggregateRootEventsList<TIdentityValueObject, string>
> extends IBaseEntityServices<E> {}

export interface IAggregateRoot<
  Id extends TIdentityValueObject = TIdentityValueObject,
  Type extends string = string,
  E extends IBaseAggregateRootEventsList<
    Id,
    Type
  > = IBaseAggregateRootEventsList<Id, Type>
> extends IEntityImplementation<Id, Type, E> {
  delete(): void;
}
