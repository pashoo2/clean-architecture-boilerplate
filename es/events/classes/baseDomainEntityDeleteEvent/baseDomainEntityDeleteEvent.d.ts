import { DOMAIN_ENTITY_EVENT_NAME_DELETE } from '../../../constants/domainEvents';
import { BaseDomainEntityEvent } from '../../../events/classes/baseDomainEntityEvent';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare type TDomainEvent = typeof DOMAIN_ENTITY_EVENT_NAME_DELETE;
export declare abstract class BaseDomainEntityDeleteEvent<EntityId extends TIdentityValueObject, EntityType extends string> extends BaseDomainEntityEvent<EntityId, EntityType, typeof DOMAIN_ENTITY_EVENT_NAME_DELETE> {
    static eventName: TDomainEvent;
    protected _name: "DOMAIN_ENTITY_DELETED";
}
