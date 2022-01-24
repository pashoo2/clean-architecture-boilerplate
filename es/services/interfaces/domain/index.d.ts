import { IEventsList } from '../../../events/interfaces/events';
import { IDomainCommonServicesEvents } from '../../../services/interfaces/domain/events';
import { IDomainCommonServicesGenerators } from './generators';
export interface IDomainCommonServices<DomainsEvents extends IEventsList> {
    events: IDomainCommonServicesEvents<DomainsEvents>;
    generators: IDomainCommonServicesGenerators;
}
