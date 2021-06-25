import {BaseDomainEntityEvent} from 'src/events/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';
import {serviceGeneratorIdentifierUnique} from 'src/__mock__/services/identifiers.mock';

export const DOMAIN_ENTITY_EVENT_MOCK_NAME =
  'DOMAIN_ENTITY_EVENT_MOCK_NAME' as const;

export function getDomainEntityEventMock<
  EntityId extends TIdentityValueObject,
  EntityType extends string,
  EventName extends string = typeof DOMAIN_ENTITY_EVENT_MOCK_NAME
>(
  entityId: EntityId,
  entityType: EntityType,
  eventName: EventName = DOMAIN_ENTITY_EVENT_MOCK_NAME as EventName
): BaseDomainEntityEvent<EntityId, EntityType, EventName> {
  class DomainEntityEventMock extends BaseDomainEntityEvent<
    EntityId,
    EntityType,
    EventName
  > {
    static eventName = eventName;
    protected _name = eventName;
    protected _entityType = entityType;
  }
  return new DomainEntityEventMock({
    id: serviceGeneratorIdentifierUnique(),
    entityId,
  });
}
