import {
  IEntity,
  TEntityImplementation,
  IEntityImplementationWithInitialization,
} from '@root/entities/interfaces/entity';

import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from '@root/entities/interfaces/baseEntity';
import {TPickTransferableProperties} from '@root/interfaces/transferable';
import {TGetEvents, TGetEventsNames} from '@root/events/interfaces/events';
import {
  IDomainEventFailed,
  IDomainEventListener,
  IDomainFailedEventListener,
} from '@root/events/interfaces/domainEvents';
import {TIdentityValueObject} from '@root/valueObjects/interfaces/index';
import {ENTITY_INITIALIZER_SCOPE_NAME} from '../constants/entityInitialize';

export abstract class BaseEntityAbstractClass<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseEntityEventsList<Id, Type>
> implements
    TEntityImplementation<Id, Type, E>,
    IEntityImplementationWithInitialization
{
  public abstract get id(): Id;

  public abstract get isDeleted(): boolean;

  public abstract readonly type: Type;

  protected constructor(
    parameters: IBaseEntityParameters<Id>,
    services: IBaseEntityServices<E>
  ) {
    if (!(self as any)[ENTITY_INITIALIZER_SCOPE_NAME]) {
      throw new Error(
        'The entity should be constructed within a certain scope'
      );
    }
    if (!parameters) {
      throw new Error('Parameters must be passed to entity constructor');
    }
    if (!services) {
      throw new Error('Services must be passed to entity constructor');
    }
  }
  public $initializeInstance(): void {
    this._validate();
    this._emitCreateEvent();
  }
  public abstract equalsTo(anotherEntity: IEntity<Id, Type>): boolean;

  public abstract getTransferableProps(): TPickTransferableProperties<this>;

  public abstract emit<Event extends TGetEvents<E>>(event: Event): void;

  public abstract emitEventFailed<Ev extends TGetEvents<E>>(
    eventFailed: IDomainEventFailed<Ev>
  ): void;

  public abstract subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;

  public abstract subscribeOnFailed<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainFailedEventListener<E[N]>
  ): void;

  public abstract unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;
  protected abstract _emitCreateEvent(): void;

  protected abstract _validate(): void;

  protected abstract _markDeleted(): void;
}
