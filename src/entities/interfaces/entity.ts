import {IBaseEntityEventsList} from 'src/entities/interfaces/baseEntity';
import {
  IDomainEventFailed,
  IDomainEventListener,
  IDomainFailedEventListener,
  TGetEvents,
  TGetEventsNames,
} from 'src/events/interfaces';
import {IComparable} from 'src/interfaces/comparison';
import {ITransferable} from 'src/interfaces/transferable';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';

export type TEntityType = string | String;

export interface IEntity<
  Id extends TIdentityValueObject,
  Type extends TEntityType
> {
  readonly id: Id;
  readonly type: Type;
  readonly isDeleted: boolean;
}

export interface IEntityImplementation<
  Id extends TIdentityValueObject,
  Type extends TEntityType,
  E extends IBaseEntityEventsList<Id, Type>
> extends IEntity<Id, Type>,
    IComparable<IEntity<Id, Type>>,
    ITransferable {
  emit<Event extends TGetEvents<E>>(event: Event): void;

  emitEventFailed<Ev extends TGetEvents<E>>(
    eventFailed: IDomainEventFailed<Ev>
  ): void;

  subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;

  subscribeOnFailed<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainFailedEventListener<E[N]>
  ): void;

  unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;
}

// The method shouldn't be accessible from an outside, only within an aggregate
export interface IEntityImplementationWithDeleteMethod<
  Id extends TIdentityValueObject,
  Type extends TEntityType,
  E extends IBaseEntityEventsList<Id, Type>
> extends IEntityImplementation<Id, Type, E> {
  $delete(): void;
}
