import {IDomainEventFailed, IDomainEventListener} from './domainEvents';
import {TEventsList, TGetEvents, TGetEventsNames} from './events';

export interface IDomainEventBus<E extends TEventsList> {
  emit<Event extends TGetEvents<E>>(event: Event): void;

  emitEventFailed<Event extends TGetEvents<E>>(
    event: IDomainEventFailed<Event>
  ): void;

  subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;

  unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void;
}
