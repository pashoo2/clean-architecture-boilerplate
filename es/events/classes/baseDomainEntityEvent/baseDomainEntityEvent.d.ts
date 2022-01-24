import { BaseDomainEventClass, TBaseDomainEventClassParameters } from '../../../events/classes/baseDomainEvent/baseDomainEvent';
import { EDomainEntityEventType } from '../../../events/constants/eventType';
import { TDomainEventPayload, IDomainEntityEvent, IDomainEntityEventPropertiesSerialized } from '../../../events/interfaces/domainEvents';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare type TBaseDomainEntityEventParameters<Id extends TIdentityValueObject, P extends TDomainEventPayload> = TBaseDomainEventClassParameters<P> & {
    entityId: Id;
};
export declare abstract class BaseDomainEntityEvent<EntityId extends TIdentityValueObject, EntityType extends string, N extends string = string, P extends TDomainEventPayload = undefined> extends BaseDomainEventClass<N, P> implements IDomainEntityEvent<EntityId, EntityType, N, P, EDomainEntityEventType.ENTITY_EVENT> {
    get entityId(): EntityId;
    get entityType(): EntityType;
    get eventType(): EDomainEntityEventType;
    private __entityId;
    protected abstract _entityType: EntityType;
    constructor(parameters: TBaseDomainEntityEventParameters<EntityId, P>);
    protected _getSerializableObjectRepresentation(): IDomainEntityEventPropertiesSerialized<EntityId, EntityType, N, P>;
}
