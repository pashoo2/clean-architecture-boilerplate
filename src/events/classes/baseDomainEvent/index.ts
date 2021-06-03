import {TDomainEventPayload} from 'src/events/interfaces/domainEvents';
import {
  BaseDomainEventClass,
  IBaseDomainEventParameters,
  IBaseDomainEventClassServices,
} from './baseDomainEvent';
import {commonBoundaryServicesContainerResolver} from 'src/services/commonBoundaryServices/commonBoundaryServicesContainerResolver';

export abstract class BaseDomainEvent<
  N extends string = string,
  P extends TDomainEventPayload | undefined | never = undefined
> extends BaseDomainEventClass<N, P> {
  constructor(parameters: IBaseDomainEventParameters<P>) {
    const commonBoundaryServices = commonBoundaryServicesContainerResolver
      .getServicesContainer()
      .getServices();
    const serviceGetUniqueIdentifierString =
      commonBoundaryServices.common.generators.generateUniqueIdentifier;
    const services: IBaseDomainEventClassServices = {
      getUniqueIdentifierString: serviceGetUniqueIdentifierString,
    };
    super(
      parameters as P extends never
        ? IBaseDomainEventParameters<TDomainEventPayload>
        : IBaseDomainEventParameters<P>,
      services
    );
  }
}
