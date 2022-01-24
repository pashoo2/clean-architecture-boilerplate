import { IEntity, TEntityImplementation, IEntityImplementationWithInitialization } from '../../entities/interfaces/entity';
import { IBaseEntityEventsList, IBaseEntityParameters, IBaseEntityServices } from '../../entities/interfaces/baseEntity';
import { TPickTransferableProperties } from '../../interfaces/transferable';
import { TGetEvents, TGetEventsNames } from '../../events/interfaces/events';
import { IDomainEventFailed, IDomainEventListener, IDomainFailedEventListener } from '../../events/interfaces/domainEvents';
import { TIdentityValueObject } from '../../valueObjects/interfaces/index';
export declare abstract class BaseEntityAbstractClass<Id extends TIdentityValueObject, Type extends string, E extends IBaseEntityEventsList<Id, Type>> implements TEntityImplementation<Id, Type, E>, IEntityImplementationWithInitialization {
    abstract get id(): Id;
    abstract get isDeleted(): boolean;
    abstract readonly type: Type;
    protected constructor(parameters: IBaseEntityParameters<Id>, services: IBaseEntityServices<E>);
    $initializeInstance(): void;
    abstract equalsTo(anotherEntity: IEntity<Id, Type>): boolean;
    abstract getTransferableProps(): TPickTransferableProperties<this>;
    abstract emit<Event extends TGetEvents<E>>(event: Event): void;
    abstract emitEventFailed<Ev extends TGetEvents<E>>(eventFailed: IDomainEventFailed<Ev>): void;
    abstract subscribe<N extends TGetEventsNames<E>>(eventName: N, eventListener: IDomainEventListener<E[N]>): void;
    abstract subscribeOnFailed<N extends TGetEventsNames<E>>(eventName: N, eventListener: IDomainFailedEventListener<E[N]>): void;
    abstract unsubscribe<N extends TGetEventsNames<E>>(eventName: N, eventListener: IDomainEventListener<E[N]>): void;
    protected abstract _emitCreateEvent(): void;
    protected abstract _validate(): void;
    protected abstract _markDeleted(): void;
}
