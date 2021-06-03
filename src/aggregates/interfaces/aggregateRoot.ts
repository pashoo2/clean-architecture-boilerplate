import {IEntity} from '../../entities/interfaces/entity';
import {TGetEventsNames} from 'src/events/interfaces/events';
import {IDomainEventListener} from 'src/events/interfaces/domainEvents';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
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
> extends IEntity<Id, Type> {
  delete(): void;
  subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventHandler: IDomainEventListener<E[N]>
  ): void;
  unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventHandler: IDomainEventListener<E[N]>
  ): void;
}
