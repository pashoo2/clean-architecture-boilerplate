import EventEmitter from 'events';
import {
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
  constructor(private readonly __eventEmitter: EE) {}
  public emit<Ev extends TGetEvents<E>>(event: Ev): void {
    this._eventEmitter.emit(event.name, event);
  }
  public emitEventFailed<Ev extends TGetEvents<E>>(
    eventFailed: IDomainEventFailed<Ev>
  ): void {
    this._eventEmitter.emit(eventFailed.name, eventFailed);
  }
  public subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void {
    this._eventEmitter.addListener(eventName, eventListener);
  }
  public subscribeFailed<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainFailedEventListener<E[N]>
  ): void {
    this._eventEmitter.addListener(
      this._getFailedEventNameByEventName(eventName),
      eventListener
    );
  }
  public unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]> | IDomainFailedEventListener<E[N]>
  ): void {
    this._eventEmitter.removeListener(eventName, eventListener);
    this._eventEmitter.removeListener(
      this._getFailedEventNameByEventName(eventName),
      eventListener
    );
  }
  protected _getFailedEventNameByEventName<N extends TGetEventsNames<E>>(
    eventName: N
  ): IDomainEventFailed<E[N]>['name'] {
    return `failed::${eventName}`;
  }
}
