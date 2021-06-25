import {
  BaseDomainEntityEvent,
  TBaseDomainEntityEventParameters,
} from 'src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {testBaseDomainEntityOrAggregateEvent} from 'src/events/classes/baseDomainEntityOrAggregateEvent/baseDomainEntityOrAggregateEvent.test';
import {EDomainEntityEventType} from 'src/events/constants/eventType';
import {
  MultipleIdentityValueObjectClassMock,
  SimpleIdentityValueObjectClassMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from 'src/__mock__/valueObjects.mock';

const EVENT_IDENTITY_UNIQUE = 'EVENT_IDENTITY_UNIQUE' as const;
const EVENT_NAME = 'EVENT_NAME' as const;
const ENTITY_TYPE = 'ENTITY_TYPE' as const;
const EVENT_TYPE = EDomainEntityEventType.ENTITY_EVENT as const;

describe('Base domain entity event', () => {
  const parametersWithoutPayloadSimpleEntityId: TBaseDomainEntityEventParameters<
    SimpleIdentityValueObjectClassMock,
    undefined
  > = {
    id: EVENT_IDENTITY_UNIQUE,
    metaVersion: 1,
    entityId: new SimpleIdentityValueObjectClassMock(
      UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB
    ),
  };
  const parametersWithoutPayloadMultiEntityId: TBaseDomainEntityEventParameters<
    MultipleIdentityValueObjectClassMock,
    undefined
  > = {
    ...parametersWithoutPayloadSimpleEntityId,
    entityId: new MultipleIdentityValueObjectClassMock(
      UNIQUE_ENTITY_IDENTITY_MULTI_STUB
    ),
  };
  const parametersWithPayloadSimpleEntityId: TBaseDomainEntityEventParameters<
    SimpleIdentityValueObjectClassMock,
    {isPayload: boolean}
  > = {
    id: EVENT_IDENTITY_UNIQUE,
    payload: {isPayload: true},
    entityId: new SimpleIdentityValueObjectClassMock(
      UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB
    ),
  };
  const parametersWithPayloadMultiEntityId: TBaseDomainEntityEventParameters<
    MultipleIdentityValueObjectClassMock,
    {isPayload: boolean}
  > = {
    ...parametersWithPayloadSimpleEntityId,
    entityId: new MultipleIdentityValueObjectClassMock(
      UNIQUE_ENTITY_IDENTITY_MULTI_STUB
    ),
  };

  describe.each([
    parametersWithoutPayloadSimpleEntityId,
    parametersWithoutPayloadMultiEntityId,
    parametersWithPayloadSimpleEntityId,
    parametersWithPayloadMultiEntityId,
  ])('Parameters %p', constructorParameters => {
    class DomainEventClassTest extends BaseDomainEntityEvent<
      typeof constructorParameters.entityId,
      typeof ENTITY_TYPE,
      typeof EVENT_NAME,
      any
    > {
      protected _name = EVENT_NAME;
      protected _entityType = ENTITY_TYPE;
    }
    testBaseDomainEntityOrAggregateEvent({
      constructorParameters,
      entityId: constructorParameters.entityId,
      entityType: ENTITY_TYPE,
      eventName: EVENT_NAME,
      eventPayload: (constructorParameters as any).payload,
      eventType: EVENT_TYPE,
      getEntity() {
        return new DomainEventClassTest(constructorParameters);
      },
    });
  });
});
