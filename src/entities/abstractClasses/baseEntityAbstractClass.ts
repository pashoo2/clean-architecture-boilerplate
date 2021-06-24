import {
  IEntity,
  IEntityImplementation,
  TEntityType,
} from 'src/entities/interfaces/entity';

import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from 'src/entities/interfaces/baseEntity';
import {TPickTransferableProperties} from 'src/interfaces/transferable';
import {TGetEvents, TGetEventsNames} from 'src/events/interfaces/events';
import {
  IDomainEventFailed,
  IDomainEventListener,
  IDomainFailedEventListener,
} from 'src/events/interfaces/domainEvents';
import {TIdentityValueObject} from 'src/valueObjects/interfaces/index';

export abstract class BaseEntityAbstractClass<
  Id extends TIdentityValueObject,
  Type extends TEntityType,
  E extends IBaseEntityEventsList<Id, Type>
> implements IEntityImplementation<Id, Type, E>
{
  public abstract get id(): Id;

  public abstract get isDeleted(): boolean;

  public abstract readonly type: Type;

  protected constructor(
    protected readonly _parameters: IBaseEntityParameters<Id>,
    protected readonly _services: IBaseEntityServices<E>
  ) {
    if (!_parameters) {
      throw new Error('Parameters must be passed to entity constructor');
    }
    if (!_services) {
      throw new Error('Services must be passed to entity constructor');
    }
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

  protected abstract _validate(): void;

  protected abstract _markDeleted(): void;
}