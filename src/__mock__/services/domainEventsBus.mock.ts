import EventEmitter from 'events';
import {IServiceDomainEventsBus} from 'src/services/interfaces/domain/events/domainEventsBusService';
import {IEventsList} from 'src/events/interfaces/events';
import {BaseDomainEventBus} from 'src/events/classes/baseDomainEventBus/baseDomainEventBus';

export const getMockDomainEventBus = <
  Events extends IEventsList = IEventsList
>(): IServiceDomainEventsBus<Events> =>
  new BaseDomainEventBus(new EventEmitter());

export const mockDomainEventBus: IServiceDomainEventsBus<IEventsList> =
  getMockDomainEventBus();
