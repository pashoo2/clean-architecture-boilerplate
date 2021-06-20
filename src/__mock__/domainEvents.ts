import {BaseDomainEntityEvent} from 'src/events/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';
import {serviceGeneratorIdentifierUnique} from 'src/__mock__/services/identifiers.mock';

export const DOMAIN_ENTITY_EVENT_MOCK_NAME =
  'DOMAIN_ENTITY_EVENT_MOCK_NAME' as const;

export function getDomainEntityEventMock<
  EntityId extends TIdentityValueObject,
  EntityType extends string
>(
  entityId: EntityId,
  entityType: EntityType
): BaseDomainEntityEvent<
  EntityId,
  EntityType,
  typeof DOMAIN_ENTITY_EVENT_MOCK_NAME
> {
  class DomainEntityEventMock extends BaseDomainEntityEvent<
    EntityId,
    EntityType,
    typeof DOMAIN_ENTITY_EVENT_MOCK_NAME
  > {
    static eventName = DOMAIN_ENTITY_EVENT_MOCK_NAME;
    protected _name = DOMAIN_ENTITY_EVENT_MOCK_NAME;
    protected _entityType = entityType;
  }
  return new DomainEntityEventMock({
    id: serviceGeneratorIdentifierUnique(),
    entityId,
  });
}
