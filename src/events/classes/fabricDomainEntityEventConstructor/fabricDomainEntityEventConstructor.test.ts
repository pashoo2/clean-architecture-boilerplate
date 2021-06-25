import {TBaseDomainEntityOrAggregateEventParameters} from 'src/events/classes/baseDomainEntityOrAggregateEvent/baseDomainEntityOrAggregateEvent';
import {testBaseDomainEntityOrAggregateEvent} from 'src/events/classes/baseDomainEntityOrAggregateEvent/baseDomainEntityOrAggregateEvent.test';
import {createDomainEntityEventConstructor} from 'src/events/classes/fabricDomainEntityEventConstructor/fabricDomainEntityEventConstructor';
import {
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_MULTI_ENTITY_ID_STUB,
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_MULTI_ENTITY_ID_STUB,
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
  EVENT_ENTITY_TYPE_STUB,
  EVENT_NAME_STUB,
  EVENT_TYPE_STUB,
} from 'src/__mock__/domainEvents/constructorParameters.stub';

describe('Base domain entity event', () => {
  describe.each([
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_MULTI_ENTITY_ID_STUB,
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_MULTI_ENTITY_ID_STUB,
  ])(
    'Parameters %p',
    (
      constructorParameters: TBaseDomainEntityOrAggregateEventParameters<
        any,
        any
      >
    ) => {
      class DomainEventClassTest extends createDomainEntityEventConstructor<
        typeof EVENT_NAME_STUB,
        typeof EVENT_ENTITY_TYPE_STUB,
        any
      >({
        eventName: EVENT_NAME_STUB,
        entityType: EVENT_ENTITY_TYPE_STUB,
      }) {}
      testBaseDomainEntityOrAggregateEvent({
        constructorParameters,
        entityType: EVENT_ENTITY_TYPE_STUB,
        eventName: EVENT_NAME_STUB,
        eventPayload: (constructorParameters as any).payload,
        eventType: EVENT_TYPE_STUB,
        getEntity() {
          return new DomainEventClassTest(constructorParameters) as any;
        },
      });
    }
  );
});
