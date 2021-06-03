import {TEventsList} from 'src/events/interfaces';
import {IServiceAggregateDomainEventsBus} from './domainEventsBusService';

export interface IDomainCommonServicesEvents<Events extends TEventsList> {
  domainEventsBus: IServiceAggregateDomainEventsBus<Events>;
}
