import {
  BaseDomainEventClass,
  TBaseDomainEventClassParameters,
} from 'src/events/classes/baseDomainEvent/baseDomainEvent';
import {
  IDomainEvent,
  TDomainEventPayload,
} from 'src/events/interfaces/domainEvents';

export interface IDomainEventClassServices {
  getUniqueIdentifierString(): string;
}

export type TDomainEventClassParameters<P extends TDomainEventPayload> = Omit<
  TBaseDomainEventClassParameters<P>,
  'id'
>;

export abstract class DomainEventClass<
    N extends string = string,
    P extends TDomainEventPayload = undefined
  >
  extends BaseDomainEventClass<N, P>
  implements IDomainEvent<N, P>
{
  constructor(
    parameters: TDomainEventClassParameters<P>,
    {getUniqueIdentifierString}: IDomainEventClassServices
  ) {
    const id = getUniqueIdentifierString();
    super({
      ...parameters,
      id,
    } as TBaseDomainEventClassParameters<P>);
  }
}
