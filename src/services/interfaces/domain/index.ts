import {TEventsList} from 'src/events/interfaces/events';
import {IDomainCommonServicesEvents} from 'src/services/interfaces/domain/events';
import {IDomainCommonServicesGenerators} from './generators';

export interface IDomainCommonServices<DomainsEvents extends TEventsList> {
  events: IDomainCommonServicesEvents<DomainsEvents>;
  generators: IDomainCommonServicesGenerators;
}
