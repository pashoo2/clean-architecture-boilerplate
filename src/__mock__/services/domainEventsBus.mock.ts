import EventEmitter from 'events';
import {IServiceDomainEventsBus} from '@root/services/interfaces/domain/events/domainEventsBusService';
import {IEventsList} from '@root/events/interfaces/events';
import {BaseDomainEventBus} from '@root/events/classes/baseDomainEventBus/baseDomainEventBus';

export const getMockDomainEventBus = <
  Events extends IEventsList = IEventsList
>(): IServiceDomainEventsBus<Events> =>
  new BaseDomainEventBus(new EventEmitter());

export const mockDomainEventBus: IServiceDomainEventsBus<IEventsList> =
  getMockDomainEventBus();
