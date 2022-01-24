import { IEventsList } from '../../../../events/interfaces';
import { IServiceDomainEventsBus } from './domainEventsBusService';
export interface IDomainCommonServicesEvents<Events extends IEventsList> {
    domainEventsBus: IServiceDomainEventsBus<Events>;
}
