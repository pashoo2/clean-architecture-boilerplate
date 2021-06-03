import {IEntity, TEntityType} from 'src/entities/interfaces/entity';

import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from 'src/entities/interfaces/baseEntity';
import {TPickTransferableProperties} from 'src/interfaces/transferable';
import {TGetEvents, TGetEventsNames} from 'src/events/interfaces/events';
import {IDomainEventListener} from 'src/events/interfaces/domainEvents';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export abstract class BaseEntityAbstractClass<
  Id extends TIdentityValueObject,
  Type extends TEntityType,
  E extends IBaseEntityEventsList<Id, Type>
> implements IEntity<Id, Type>
{
  public abstract get id(): Id;

  public abstract get isDeleted(): boolean;

  public abstract readonly type: Type;

  protected constructor(
    parameters: IBaseEntityParameters<Id>,
    services: IBaseEntityServices<E>
  ) {
    if (!parameters) {
      throw new Error('Parameters must be passed to entity constructor');
    }
    if (!services) {
      throw new Error('Services must be passed to entity constructor');
    }
  }

  protected abstract _delete(): void;

  public abstract equalsTo(anotherEntity: IEntity<Id, Type>): boolean;

  public abstract getTransferableProps(): TPickTransferableProperties<this>;

  protected abstract _validate(): void;

  protected abstract _markDeleted(): void;

  protected abstract _emit<Event extends TGetEvents<E>>(event: Event): void;

  protected abstract _subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;

  protected abstract _unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;
}
