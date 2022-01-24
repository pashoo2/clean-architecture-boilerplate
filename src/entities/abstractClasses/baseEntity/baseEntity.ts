import {BaseDomainEntityCreateEvent} from '@root/events/classes/baseDomainEntityConstructEvent/index';
import {BaseDomainEntityDeleteEvent} from '@root/events/classes/baseDomainEntityDeleteEvent/index';
import {TGetEvents, TGetEventsNames} from '@root/events/interfaces/events';
import {
  IDomainEventFailed,
  IDomainEventListener,
  IDomainFailedEventListener,
} from '@root/events/interfaces/domainEvents';
import {IEntity} from '@root/entities/interfaces/entity';
import {
  IIdentityMultiValueObject,
  IIdentityValueObjectSimple,
  TIdentityValueObject,
} from '../../../valueObjects/interfaces/identityValueObject';
import {IDomainEventBus} from '@root/events/interfaces/domainEventBus';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from '../../interfaces/baseEntity';
import {TPickTransferableProperties} from '@root/interfaces/transferable';
import {BaseEntityAbstractClass} from '@root/entities/abstractClasses/baseEntityAbstractClass';
import {IServiceGeneratorIdentifierUnique} from '@root/services/interfaces/domain/generators/identifiers';
import {Constructor} from '@root/interfaces/classes';
import {TBaseDomainEntityEventParameters} from '@root/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {
  createAndInitializeEntity,
  definedOrThrow,
} from '../../utilities/implementations';

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

  public get type(): Type {
    return this._type;
  }

  protected get _domainEventBus(): IDomainEventBus<E> {
    return this.__domainEventBus;
  }

  protected get _generateUniqueIdentityString(): IServiceGeneratorIdentifierUnique {
    return this.__generateUniqueIdentityString;
  }

  protected abstract _type: Type;

  private __id: Id;

  private __isDeleted: boolean;

  private __domainEventBus: IDomainEventBus<E>;

  private __generateUniqueIdentityString: IServiceGeneratorIdentifierUnique;

  protected readonly _EntityDeleteEventClass: Constructor<
    BaseDomainEntityDeleteEvent<Id, Type>,
    [TBaseDomainEntityEventParameters<Id, undefined>]
  >;

  protected readonly _EntityCreateEventClass: Constructor<
    BaseDomainEntityCreateEvent<Id, Type>,
    [TBaseDomainEntityEventParameters<Id, undefined>]
  >;

  constructor(
    parameters: IBaseEntityParameters<Id>,
    services: IBaseEntityServices<E>
  ) {
    super(parameters, services);
    const {id, isDeleted} = parameters;
    const {domainEventBus, generateUniqueIdentifierString} = services;

    if (!id) {
      throw new Error('Each entity should have a unique identity');
    }
    if (!domainEventBus) {
      throw new Error('Domain event emitter service must be provided');
    }

    this.__id = id;
    this.__isDeleted = isDeleted;
    this.__domainEventBus = domainEventBus;
    this.__generateUniqueIdentityString = generateUniqueIdentifierString;

    this._EntityDeleteEventClass = this.__getEntityDeleteEventClass();
    this._EntityCreateEventClass = this.__getEntityCreateEventClass();
  }

  public equalsTo(anotherEntity: IEntity<Id, Type>): boolean {
    return (
      this._compareEntitiesTypes(this.type, anotherEntity.type) &&
      this._compareEntitiesIdentities(this.id, anotherEntity.id)
    );
  }

  public getTransferableProps(): TPickTransferableProperties<this> {
    return this._getTransferableProps();
  }

  public emit<Event extends TGetEvents<E>>(event: Event): void {
    this._domainEventBus.emit(event);
  }

  public emitEventFailed<Ev extends TGetEvents<E>>(
    eventFailed: IDomainEventFailed<Ev>
  ): void {
    this._domainEventBus.emitEventFailed(eventFailed);
  }

  public subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void {
    this._domainEventBus.subscribe(eventName, eventListener);
  }

  public subscribeOnFailed<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainFailedEventListener<E[N]>
  ): void {
    this._domainEventBus.subscribeOnFailed(eventName, eventListener);
  }

  public unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void {
    this._domainEventBus.unsubscribe(eventName, eventListener);
  }

  protected abstract _validate(): void;

  protected _compareEntitiesIdentities(
    firstId: TIdentityValueObject,
    secondId: TIdentityValueObject
  ): boolean {
    return (
      firstId as IIdentityMultiValueObject | IIdentityValueObjectSimple
    ).equalsTo(secondId as any);
  }

  protected _compareEntitiesTypes(
    firstType: string,
    secondType: string
  ): boolean {
    return firstType === secondType;
  }

  protected _delete(): void {
    if (this.isDeleted) {
      return;
    }
    this._markDeleted();
    this._emitDeleteEvent();
  }

  protected _markDeleted(): void {
    this.__isDeleted = true;
  }

  protected _emitDeleteEvent(): void {
    const event = this.__createEntityDeleteEventInstance();

    this.emit<E['DOMAIN_ENTITY_DELETED']>(event);
  }

  protected _emitCreateEvent(): void {
    const event = this.__createEntityCreateEventInstance();

    this.emit<E['DOMAIN_ENTITY_CONSTRUCTED']>(event);
  }

  protected _getEventUniqueIdentity(): string {
    return this._generateUniqueIdentityString();
  }

  protected abstract _getTransferableProps(): TPickTransferableProperties<this>;

  private __getEntityDeleteEventClass(): Constructor<
    BaseDomainEntityDeleteEvent<Id, Type>,
    [TBaseDomainEntityEventParameters<Id, undefined>]
  > {
    const entityType = this.type;
    class DeleteEntityEvent extends BaseDomainEntityDeleteEvent<Id, Type> {
      protected _entityType = entityType;
    }
    return DeleteEntityEvent;
  }

  private __getEntityCreateEventClass(): Constructor<
    BaseDomainEntityCreateEvent<Id, Type>,
    [TBaseDomainEntityEventParameters<Id, undefined>]
  > {
    const entityType = this.type;
    class CreateEntityEvent extends BaseDomainEntityCreateEvent<Id, Type> {
      protected _entityType = entityType;
    }
    return CreateEntityEvent;
  }

  private __createEntityDeleteEventInstance(): BaseDomainEntityDeleteEvent<
    Id,
    Type
  > {
    const DeleteEntityEventClass = this._EntityDeleteEventClass;
    return new DeleteEntityEventClass({
      entityId: this.id,
      id: this._getEventUniqueIdentity(),
    });
  }

  private __createEntityCreateEventInstance(): BaseDomainEntityCreateEvent<
    Id,
    Type
  > {
    const CreateEntityEventClass = this._EntityCreateEventClass;
    return new CreateEntityEventClass({
      entityId: this.id,
      id: this._getEventUniqueIdentity(),
    });
  }
}
