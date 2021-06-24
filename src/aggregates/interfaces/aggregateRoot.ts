import {IEntityImplementation} from '../../entities/interfaces/entity';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';
import {
  IBaseEntityParameters,
  IBaseEntityServices,
  IBaseEntityEventsList,
} from '../../entities/interfaces/baseEntity';

export type TAggregateType<T extends string = string> = `aggregate:${T}`;

export interface IBaseAggregateRootParameters<Id extends TIdentityValueObject>
  extends IBaseEntityParameters<Id> {
  isDeleted: boolean;
}

export interface IBaseAggregateRootEventsList<
  Id extends TIdentityValueObject,
  Type extends TAggregateType
> extends IBaseEntityEventsList<Id, Type> {}

export interface IBaseAggregateRootServices<
  E extends IBaseAggregateRootEventsList<TIdentityValueObject, TAggregateType>
> extends IBaseEntityServices<E> {}

export interface IAggregateRoot<
  Id extends TIdentityValueObject = TIdentityValueObject,
  Type extends TAggregateType = TAggregateType,
  E extends IBaseAggregateRootEventsList<
    Id,
    Type
  > = IBaseAggregateRootEventsList<Id, Type>
> extends IEntityImplementation<Id, Type, E> {
  readonly isAggregate: true;
  delete(): void;
}
