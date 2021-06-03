import EventEmitter from 'events';
import {IDomainEventFailed} from 'src/events/interfaces/domainEvents';
import {IDomainEventListener} from 'src/events/interfaces/domainEvents';
import {IServiceAggregateDomainEventsBus} from 'src/services/interfaces/domain/events/domainEventsBusService';
import {
  TEventsList,
  TGetEvents,
  TGetEventsNames,
} from 'src/events/interfaces/events';

const eventEmitter = new EventEmitter();

class MockDomainEventsBus<E extends TEventsList>
  implements IServiceAggregateDomainEventsBus<E>
{
  emit<Event extends TGetEvents<E>>(event: Event): void {
    eventEmitter.emit(event.name, event);
  }
  emitEventFailed<Event extends TGetEvents<E>>(
    eventFailed: IDomainEventFailed<Event>
  ): void {
    eventEmitter.emit(eventFailed.name, event);
  }
  subscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void {
    eventEmitter.addListener(eventName, eventListener);
  }
  unsubscribe<N extends TGetEventsNames<E>>(
    eventName: N,
    eventListener: IDomainEventListener<E[N]>
  ): void {
    eventEmitter.removeListener(eventName, eventListener);
  }
}

export const mockDomainEventBus: IServiceAggregateDomainEventsBus<TEventsList> =
  new MockDomainEventsBus();
