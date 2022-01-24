import { DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED } from '../../../constants/domainEvents';
import { BaseDomainEntityEvent } from '../../../events/classes/baseDomainEntityEvent';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare type TDomainEventName = typeof DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED;
export interface IBaseDomainEntityConstructEventParameters<EntityId extends TIdentityValueObject, EntityType extends string> extends BaseDomainEntityConstructEvent<EntityId, EntityType> {
    entityType: EntityType;
}
export declare abstract class BaseDomainEntityConstructEvent<EntityId extends TIdentityValueObject, EntityType extends string> extends BaseDomainEntityEvent<EntityId, EntityType, typeof DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED> {
    static eventName: TDomainEventName;
    protected _name: "DOMAIN_ENTITY_CONSTRUCTED";
}
