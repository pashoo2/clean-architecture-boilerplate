import {TDomainEventPayload} from 'src/events/interfaces/domainEvents';
import {commonBoundaryServicesContainerResolver} from 'src/services/commonBoundaryServices/commonBoundaryServicesContainerResolver';
import {
  DomainEventClass,
  IDomainEventClassServices,
  TDomainEventClassParameters,
} from 'src/events/classes/domainEvent/domainEvent';

export abstract class DomainEvent<
  N extends string = string,
  P extends TDomainEventPayload | undefined | never = undefined
> extends DomainEventClass<N, P> {
  constructor(parameters: TDomainEventClassParameters<P>) {
    const commonBoundaryServices = commonBoundaryServicesContainerResolver
      .getServicesContainer()
      .getServices();
    const serviceGetUniqueIdentifierString =
      commonBoundaryServices.common.generators.generateUniqueIdentifier;
    const services: IDomainEventClassServices = {
      getUniqueIdentifierString: serviceGetUniqueIdentifierString,
    };
    super(parameters, services);
  }
}
