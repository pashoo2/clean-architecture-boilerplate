import {TEventsList} from 'src/events/interfaces';
import {IServiceDomainEventsBus} from './domainEventsBusService';

export interface IDomainCommonServicesEvents<Events extends TEventsList> {
  domainEventsBus: IServiceDomainEventsBus<Events>;
}
