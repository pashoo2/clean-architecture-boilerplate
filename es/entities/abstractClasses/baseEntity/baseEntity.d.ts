import { BaseDomainEntityCreateEvent } from '../../../events/classes/baseDomainEntityConstructEvent/index';
import { BaseDomainEntityDeleteEvent } from '../../../events/classes/baseDomainEntityDeleteEvent/index';
import { TGetEvents, TGetEventsNames } from '../../../events/interfaces/events';
import { IDomainEventFailed, IDomainEventListener, IDomainFailedEventListener } from '../../../events/interfaces/domainEvents';
import { IEntity } from '../../../entities/interfaces/entity';
import { TIdentityValueObject } from '../../../valueObjects/interfaces/identityValueObject';
import { IDomainEventBus } from '../../../events/interfaces/domainEventBus';
import { IBaseEntityEventsList, IBaseEntityParameters, IBaseEntityServices } from '../../interfaces/baseEntity';
import { TPickTransferableProperties } from '../../../interfaces/transferable';
import { BaseEntityAbstractClass } from '../../../entities/abstractClasses/baseEntityAbstractClass';
import { IServiceGeneratorIdentifierUnique } from '../../../services/interfaces/domain/generators/identifiers';
import { Constructor } from '../../../interfaces/classes';
import { TBaseDomainEntityEventParameters } from '../../../events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
export declare abstract class BaseEntity<Id extends TIdentityValueObject, Type extends string, E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>> extends BaseEntityAbstractClass<Id, Type, E> {
    get id(): Id;
    get isDeleted(): boolean;
    get type(): Type;
    protected get _domainEventBus(): IDomainEventBus<E>;
    protected get _generateUniqueIdentityString(): IServiceGeneratorIdentifierUnique;
    protected abstract _type: Type;
    private __id;
    private __isDeleted;
    private __domainEventBus;
    private __generateUniqueIdentityString;
    protected readonly _EntityDeleteEventClass: Constructor<BaseDomainEntityDeleteEvent<Id, Type>, [
        TBaseDomainEntityEventParameters<Id, undefined>
    ]>;
    protected readonly _EntityCreateEventClass: Constructor<BaseDomainEntityCreateEvent<Id, Type>, [
        TBaseDomainEntityEventParameters<Id, undefined>
    ]>;
    constructor(parameters: IBaseEntityParameters<Id>, services: IBaseEntityServices<E>);
    equalsTo(anotherEntity: IEntity<Id, Type>): boolean;
    getTransferableProps(): TPickTransferableProperties<this>;
    emit<Event extends TGetEvents<E>>(event: Event): void;
    emitEventFailed<Ev extends TGetEvents<E>>(eventFailed: IDomainEventFailed<Ev>): void;
    subscribe<N extends TGetEventsNames<E>>(eventName: N, eventListener: IDomainEventListener<E[N]>): void;
    subscribeOnFailed<N extends TGetEventsNames<E>>(eventName: N, eventListener: IDomainFailedEventListener<E[N]>): void;
    unsubscribe<N extends TGetEventsNames<E>>(eventName: N, eventListener: IDomainEventListener<E[N]>): void;
    protected abstract _validate(): void;
    protected _compareEntitiesIdentities(firstId: TIdentityValueObject, secondId: TIdentityValueObject): boolean;
    protected _compareEntitiesTypes(firstType: string, secondType: string): boolean;
    protected _delete(): void;
    protected _markDeleted(): void;
    protected _emitDeleteEvent(): void;
    protected _emitCreateEvent(): void;
    protected _getEventUniqueIdentity(): string;
    protected abstract _getTransferableProps(): TPickTransferableProperties<this>;
    private __getEntityDeleteEventClass;
    private __getEntityCreateEventClass;
    private __createEntityDeleteEventInstance;
    private __createEntityCreateEventInstance;
}
