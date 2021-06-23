import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from 'src/entities/interfaces/baseEntity';
import {
  IDomainEventFailed,
  IDomainEventListener,
  IDomainFailedEventListener,
  TGetEvents,
  TGetEventsNames,
} from 'src/events/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {IComparable} from 'src/interfaces/comparison';
import {
  ITransferable,
  TPickTransferableProperties,
} from 'src/interfaces/transferable';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';

export type TEntityIdentity = string;

export type TEntityType = string;

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

export interface IValidateEntity<
  Id extends TIdentityValueObject,
  Type extends string
> {
  (entity: IEntity<Id, Type>): void;
}

export interface IGetTransferablePropertiesOfEntity<
  Id extends TIdentityValueObject,
  Type extends string
> {
  <T extends IEntity<Id, Type>>(entity: T): TPickTransferableProperties<T>;
}

export interface IEntityFabricParameters<
  Id extends TIdentityValueObject,
  Type extends string
> {
  type: Type;
  validateInstance: IValidateEntity<Id, Type>;
  getTransferableProps: IGetTransferablePropertiesOfEntity<Id, Type>;
}

export interface IEntityClassFabric<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseEntityEventsList<Id, Type>,
  C extends Constructor<
    IEntityImplementation<Id, Type, E>,
    [IBaseEntityParameters<Id>, IBaseEntityServices<E>]
  > = Constructor<
    IEntityImplementation<Id, Type, E>,
    [IBaseEntityParameters<Id>, IBaseEntityServices<E>]
  >
> {
  (parameters: IEntityFabricParameters<Id, Type>): C;
}
