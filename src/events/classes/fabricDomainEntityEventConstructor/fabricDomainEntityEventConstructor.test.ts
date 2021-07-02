import {TBaseDomainEntityEventParameters} from '@root/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {testBaseDomainEntityEvent} from '@root/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.test';
import {createDomainEntityEventConstructor} from '@root/events/classes/fabricDomainEntityEventConstructor/fabricDomainEntityEventConstructor';
import {
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_MULTI_ENTITY_ID_STUB,
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_MULTI_ENTITY_ID_STUB,
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
  EVENT_ENTITY_TYPE_STUB,
  EVENT_NAME_STUB,
  EVENT_TYPE_STUB,
} from '@root/__mock__/domainEvents/constructorParameters.stub';

describe('Base domain entity event', () => {
  describe.each([
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_MULTI_ENTITY_ID_STUB,
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_MULTI_ENTITY_ID_STUB,
  ])(
    'Parameters %p',
    (constructorParameters: TBaseDomainEntityEventParameters<any, any>) => {
      class DomainEventClassTest extends createDomainEntityEventConstructor<
        typeof EVENT_NAME_STUB,
        typeof EVENT_ENTITY_TYPE_STUB,
        any
      >({
        eventName: EVENT_NAME_STUB,
        entityType: EVENT_ENTITY_TYPE_STUB,
      }) {}
      testBaseDomainEntityEvent({
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
