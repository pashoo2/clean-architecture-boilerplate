import {BaseDomainEntityCreateEvent} from 'src/events/classes/baseDomainEntityConstructEvent';
import {BaseDomainEntityDeleteEvent} from 'src/events/classes/baseDomainEntityDeleteEvent';
import {TGetEvents, TGetEventsNames} from 'src/events/interfaces/events';
import {IDomainEventListener} from 'src/events/interfaces/domainEvents';
import {IEntity} from 'src/entities/interfaces/entity';
import {TIdentityValueObject} from '../../../valueObjects/interfaces/identityValueObject';
import {IDomainEventBus} from 'src/events/interfaces/domainEventBus';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from '../../interfaces/baseEntity';
import {TPickTransferableProperties} from 'src/interfaces/transferable';
import {BaseEntityAbstractClass} from 'src/entities/interfaces/baseEntityAbstractClass';

export abstract class BaseEntity<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>
> extends BaseEntityAbstractClass<Id, Type, E> {
  public get id(): Id {
    return this.__id;
  }

  public get isDeleted(): boolean {
    return this.__isDeleted;
  }

  private readonly __id: Id;

  private __isDeleted: boolean;

  private __domainEventBus: IDomainEventBus<E>;

  protected constructor(
    parameters: IBaseEntityParameters<Id>,
    services: IBaseEntityServices<E>
  ) {
    super(parameters, services);
    const {id, isDeleted} = parameters;
    const {domainEventBus} = services;

    if (!id) {
      throw new Error('Each entity should have a unique identity');
    }
    if (!domainEventBus) {
      throw new Error('Domain event emitter service must be provided');
    }

    this.__id = id;
    this.__isDeleted = isDeleted;
    this.__domainEventBus = domainEventBus;
    this._validate();
    this._emitCreateEvent();
  }

  public equalsTo(anotherEntity: IEntity<Id, Type>): boolean {
    return (
      anotherEntity.type === this.type &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.id.equalsTo(anotherEntity.id as any)
    );
  }

  protected _delete(): void {
    this._markDeleted();
    this._emitDeleteEvent();
  }

  protected abstract _validate(): void;

  public abstract getTransferableProps(): TPickTransferableProperties<this>;

  protected _markDeleted(): void {
    this.__isDeleted = true;
  }

  protected _emit<Event extends TGetEvents<E>>(event: Event): void {
    this.__domainEventBus.emit<Event>(event);
  }

  protected _subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void {
    this.__domainEventBus.subscribe<N>(eventName, eventListener);
  }

  protected _unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void {
    this.__domainEventBus.unsubscribe<N>(eventName, eventListener);
  }

  protected _emitDeleteEvent(): void {
    const event = this.__createEntityDeleteEventInstance();

    this._emit<E['DOMAIN_ENTITY_DELETED']>(event);
  }

  protected _emitCreateEvent(): void {
    const event = this.__createEntityCreateEventInstance();

    this._emit<E['DOMAIN_ENTITY_CONSTRUCTED']>(event);
  }

  private __createEntityDeleteEventInstance(): BaseDomainEntityDeleteEvent<
    Id,
    Type
  > {
    const entityType = this.type;
    class DeleteEntityEvent extends BaseDomainEntityDeleteEvent<Id, Type> {
      protected _entityType = entityType;
    }
    return new DeleteEntityEvent({
      entityId: this.id,
    });
  }

  private __createEntityCreateEventInstance(): BaseDomainEntityCreateEvent<
    Id,
    Type
  > {
    const entityType = this.type;
    class CreateEntityEvent extends BaseDomainEntityCreateEvent<Id, Type> {
      protected _entityType = entityType;
    }
    return new CreateEntityEvent({
      entityId: this.id,
    });
  }
}
