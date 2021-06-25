import {TBaseDomainEntityEventParameters} from 'src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {createDomainEntityEventConstructor} from 'src/events/classes/fabricDomainEntityEventConstructor/fabricDomainEntityEventConstructor';
import {
  MultipleIdentityValueObjectClassMock,
  SimpleIdentityValueObjectClassMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from 'src/__mock__/valueObjects.mock';

const EVENT_IDENTITY_UNIQUE = 'EVENT_IDENTITY_UNIQUE' as const;
const EVENT_NAME = 'EVENT_NAME' as const;
const ENTITY_TYPE = 'ENTITY_TYPE' as const;

describe('fabricDomainEntityEventConstructor', () => {
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

  class DomainEventClassTest extends createDomainEntityEventConstructor<
    typeof EVENT_NAME,
    typeof ENTITY_TYPE,
    any
  >({
    eventName: EVENT_NAME,
    entityType: ENTITY_TYPE,
  }) {}

  describe.each([
    parametersWithoutPayloadSimpleEntityId,
    parametersWithoutPayloadMultiEntityId,
    parametersWithPayloadSimpleEntityId,
    parametersWithPayloadMultiEntityId,
  ])('Parameters %p', constructorParameters => {
    
  });
});
