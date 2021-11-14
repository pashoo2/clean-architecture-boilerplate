import {ENTITY_TYPE_PREFIX} from '@root/entities/constants/entityType';
import {IBaseEntityEventsList} from '@root/entities/interfaces/baseEntity';
import {
  IDomainEventFailed,
  IDomainEventListener,
  IDomainFailedEventListener,
  TGetEvents,
  TGetEventsNames,
} from '@root/events/interfaces';
import {IComparable} from '@root/interfaces/comparison';
import {ITransferable} from '@root/interfaces/transferable';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';

export type TEntityTypeMain<T extends string = string> =
  `${typeof ENTITY_TYPE_PREFIX}__${T}`;

export interface IEntity<Id extends TIdentityValueObject, Type extends string> {
  readonly id: Id;
  readonly type: Type;
  readonly isDeleted: boolean;
}

export interface IEntityImplementationMethods<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseEntityEventsList<Id, Type>
> {
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

export type TEntityImplementation<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseEntityEventsList<Id, Type>,
  Entity extends IEntity<Id, Type> = IEntity<Id, Type>
> = Entity &
  IComparable<Entity> &
  ITransferable &
  IEntityImplementationMethods<Id, Type, E>;

// The method shouldn't be accessible from an outside, only within an aggregate
export interface IEntityImplementationWithDeleteMethod<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseEntityEventsList<Id, Type>
> extends TEntityImplementation<Id, Type, E> {
  /**
   * Just set a flag that the entity's been deleted
   *
   * @memberof IEntityImplementationWithDeleteMethod
   */
  $markDeleted(): void;
}
