import {IDomainEventBus, IEventsList} from 'src/events/interfaces';
import {IClassService} from 'src/services/interfaces/common';

/**
 * Domain event bus that is using for emitting
 * and listening of domain events.
 *
 * @export
 * @interfaces IEventBus
 */
export interface IServiceDomainEventsBus<E extends IEventsList>
  extends IDomainEventBus<E>,
    IClassService {}
