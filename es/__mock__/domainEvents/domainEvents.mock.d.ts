import { BaseDomainEntityEvent } from '../../events/classes';
import { TIdentityValueObject } from '../../valueObjects/interfaces';
export declare const DOMAIN_ENTITY_EVENT_MOCK_NAME: "DOMAIN_ENTITY_EVENT_MOCK_NAME";
export declare function getDomainEntityEventMock<EntityId extends TIdentityValueObject, EntityType extends string, EventName extends string = typeof DOMAIN_ENTITY_EVENT_MOCK_NAME>(entityId: EntityId, entityType: EntityType, eventName?: EventName): BaseDomainEntityEvent<EntityId, EntityType, EventName>;
