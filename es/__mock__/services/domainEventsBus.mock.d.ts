import { IServiceDomainEventsBus } from '../../services/interfaces/domain/events/domainEventsBusService';
import { IEventsList } from '../../events/interfaces/events';
export declare const getMockDomainEventBus: <Events extends IEventsList = IEventsList>() => IServiceDomainEventsBus<Events>;
export declare const mockDomainEventBus: IServiceDomainEventsBus<IEventsList>;
