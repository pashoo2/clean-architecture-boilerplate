import {IEventsList} from '@root/events/interfaces/events';
import {IDomainCommonServicesEvents} from '@root/services/interfaces/domain/events';
import {IDomainCommonServicesGenerators} from './generators';

export interface IDomainCommonServices<DomainsEvents extends IEventsList> {
  events: IDomainCommonServicesEvents<DomainsEvents>;
  generators: IDomainCommonServicesGenerators;
}
