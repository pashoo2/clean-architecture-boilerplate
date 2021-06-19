import {
  IDomainAllEventsListener,
  IDomainEventFailed,
  IDomainEventListener,
  IDomainFailedEventListener,
} from './domainEvents';
import {TEventsList, TGetEvents, TGetEventsNames} from './events';

export interface IDomainEventBus<E extends TEventsList> {
  emit<Event extends TGetEvents<E>>(event: Event): void;

  emitEventFailed<Event extends TGetEvents<E>>(
    event: IDomainEventFailed<Event>
  ): void;
  subscribeAllEvents(
    eventListener: IDomainAllEventsListener<TGetEvents<E>>
  ): void;
  subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;
  subscribeOnFailed<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainFailedEventListener<E[N]>
  ): void;

  unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]> | IDomainFailedEventListener<E[N]>
  ): void;
  unsubscribeListenerAllEvents(
    eventListener: IDomainAllEventsListener<TGetEvents<E>>
  ): void;
}
