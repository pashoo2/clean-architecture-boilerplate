import {TBaseDomainEntityEventParameters} from '@root/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {EDomainEntityEventType} from '@root/events/constants/eventType';
import {ENTITY_TYPE_STUB} from '@root/__mock__/entityType.stub';
import {
  MultipleIdentityValueObjectClassMock,
  SimpleIdentityValueObjectClassMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from '@root/__mock__/valueObjects.mock';

export const EVENT_IDENTITY_UNIQUE_STUB = 'EVENT_IDENTITY_UNIQUE' as const;
export const EVENT_NAME_STUB = 'EVENT_NAME' as const;
export const EVENT_ENTITY_TYPE_STUB = ENTITY_TYPE_STUB;
export const EVENT_TYPE_STUB = EDomainEntityEventType.ENTITY_EVENT as const;

export const DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB: TBaseDomainEntityEventParameters<
  SimpleIdentityValueObjectClassMock,
  undefined
> = {
  id: EVENT_IDENTITY_UNIQUE_STUB,
  metaVersion: 1,
  entityId: new SimpleIdentityValueObjectClassMock(
    UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB
  ),
};
export const DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_MULTI_ENTITY_ID_STUB: TBaseDomainEntityEventParameters<
  MultipleIdentityValueObjectClassMock,
  undefined
> = {
  ...DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
  entityId: new MultipleIdentityValueObjectClassMock(
    UNIQUE_ENTITY_IDENTITY_MULTI_STUB
  ),
};
export const DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB: TBaseDomainEntityEventParameters<
  SimpleIdentityValueObjectClassMock,
  {isPayload: boolean}
> = {
  id: EVENT_IDENTITY_UNIQUE_STUB,
  payload: {isPayload: true},
  entityId: new SimpleIdentityValueObjectClassMock(
    UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB
  ),
};
export const DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_MULTI_ENTITY_ID_STUB: TBaseDomainEntityEventParameters<
  MultipleIdentityValueObjectClassMock,
  {isPayload: boolean}
> = {
  ...DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
  entityId: new MultipleIdentityValueObjectClassMock(
    UNIQUE_ENTITY_IDENTITY_MULTI_STUB
  ),
};
