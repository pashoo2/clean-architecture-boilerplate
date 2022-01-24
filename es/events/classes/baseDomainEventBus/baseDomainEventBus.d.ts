/// <reference types="node" />
import EventEmitter from 'events';
import { IDomainAllEventsListener, IDomainEventBus, IDomainEventFailed, IDomainEventListener, IDomainFailedEventListener, IEventsList, TGetEvents, TGetEventsNames } from '../../../events/interfaces';
export declare class BaseDomainEventBus<E extends IEventsList, EE extends EventEmitter> implements IDomainEventBus<E> {
    private readonly __eventEmitter;
    protected get _eventEmitter(): EE;
    protected _listenersAllEvents: Set<IDomainAllEventsListener<TGetEvents<E>>>;
    constructor(__eventEmitter: EE);
    emit<Ev extends TGetEvents<E>>(event: Ev): void;
    emitEventFailed<Ev extends TGetEvents<E>>(eventFailed: IDomainEventFailed<Ev>): void;
    subscribeAllEvents(eventListener: IDomainAllEventsListener<TGetEvents<E>>): void;
    subscribe<N extends TGetEventsNames<E>>(eventName: N, eventListener: IDomainEventListener<E[N]>): void;
    subscribeOnFailed<N extends TGetEventsNames<E>>(eventName: N, eventListener: IDomainFailedEventListener<E[N]>): void;
    unsubscribe<N extends TGetEventsNames<E>>(eventName: N, eventListener: IDomainEventListener<E[N]> | IDomainFailedEventListener<E[N]> | IDomainAllEventsListener<TGetEvents<E>>): void;
    unsubscribeListenerAllEvents(eventListener: IDomainAllEventsListener<TGetEvents<E>>): void;
    protected _getFailedEventNameByEventName<N extends TGetEventsNames<E>>(eventName: N): IDomainEventFailed<E[N]>['name'];
    protected _emitEventForAllEventsListeners<Ev extends TGetEvents<E> | IDomainEventFailed<TGetEvents<E>>>(event: Ev): void;
}
