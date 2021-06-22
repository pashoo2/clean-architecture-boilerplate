import {IEventsList} from 'src/events/interfaces';
import {IServiceDomainEventsBus} from './domainEventsBusService';

export interface IDomainCommonServicesEvents<Events extends IEventsList> {
  domainEventsBus: IServiceDomainEventsBus<Events>;
}
