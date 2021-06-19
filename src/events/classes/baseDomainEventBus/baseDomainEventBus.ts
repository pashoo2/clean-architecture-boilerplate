import EventEmitter from 'events';
import {
  IDomainAllEventsListener,
  IDomainEventBus,
  IDomainEventFailed,
  IDomainEventListener,
  IDomainFailedEventListener,
  TEventsList,
  TGetEvents,
  TGetEventsNames,
} from 'src/events/interfaces';

export class BaseDomainEventBus<E extends TEventsList, EE extends EventEmitter>
  implements IDomainEventBus<E>
{
  protected get _eventEmitter(): EE {
    return this.__eventEmitter;
  }
  protected _listenersAllEvents: Set<IDomainAllEventsListener<TGetEvents<E>>> =
    new Set();
  constructor(private readonly __eventEmitter: EE) {}
  public emit<Ev extends TGetEvents<E>>(event: Ev): void {
    this._eventEmitter.emit(event.name, event);
    this._emitEventForAllEventsListeners(event);
  }
  public emitEventFailed<Ev extends TGetEvents<E>>(
    eventFailed: IDomainEventFailed<Ev>
  ): void {
    this._eventEmitter.emit(eventFailed.name, eventFailed);
    this._emitEventForAllEventsListeners(eventFailed);
  }
  public subscribeAllEvents(
    eventListener: IDomainAllEventsListener<TGetEvents<E>>
  ): void {
    this._listenersAllEvents.add(eventListener);
  }
  public subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void {
    this._eventEmitter.addListener(eventName, eventListener);
  }
  public subscribeOnFailed<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainFailedEventListener<E[N]>
  ): void {
    const failedEventName = this._getFailedEventNameByEventName(eventName);
    this._eventEmitter.addListener(failedEventName, eventListener);
  }
  public unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener:
      | IDomainEventListener<E[N]>
      | IDomainFailedEventListener<E[N]>
      | IDomainAllEventsListener<TGetEvents<E>>
  ): void {
    this._eventEmitter.removeListener(eventName, eventListener);
    this._eventEmitter.removeListener(
      this._getFailedEventNameByEventName(eventName),
      eventListener
    );
  }
  public unsubscribeListenerAllEvents(
    eventListener: IDomainAllEventsListener<TGetEvents<E>>
  ): void {
    this._listenersAllEvents.delete(eventListener);
  }
  protected _getFailedEventNameByEventName<N extends TGetEventsNames<E>>(
    eventName: N
  ): IDomainEventFailed<E[N]>['name'] {
    return `failed::${eventName}`;
  }

  protected _emitEventForAllEventsListeners<
    Ev extends TGetEvents<E> | IDomainEventFailed<TGetEvents<E>>
  >(event: Ev): void {
    this._listenersAllEvents.forEach(listener =>
      listener(event as TGetEvents<E>)
    );
  }
}
