import { Constructor } from '../../../interfaces/classes';
import { IDomainEntityEvent, TDomainEventPayload } from '../../../events/interfaces/domainEvents';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
import { TBaseDomainEntityEventParameters } from '../../../events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import { EDomainEntityEventType } from '../../../events/constants/eventType';
export interface IFabricDomainEntityEventParameters<EntityType extends string, EventName extends string> {
    entityType: EntityType;
    eventName: EventName;
}
export declare function createDomainEntityEventConstructor<EventName extends string, EntityType extends string, EntityId extends TIdentityValueObject, P extends TDomainEventPayload = undefined>({ eventName, entityType, }: IFabricDomainEntityEventParameters<EntityType, EventName>): Constructor<IDomainEntityEvent<EntityId, EntityType, EventName, P, EDomainEntityEventType.ENTITY_EVENT>, [
    TBaseDomainEntityEventParameters<EntityId, P>
]>;
