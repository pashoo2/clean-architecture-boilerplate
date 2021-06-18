import EventEmitter from 'events';
import {IServiceDomainEventsBus} from 'src/services/interfaces/domain/events/domainEventsBusService';
import {TEventsList} from 'src/events/interfaces/events';
import {BaseDomainEventBus} from 'src/events/classes/baseDomainEventBus/baseDomainEventBus';

export const mockDomainEventBus: IServiceDomainEventsBus<TEventsList> =
  new BaseDomainEventBus(new EventEmitter());
