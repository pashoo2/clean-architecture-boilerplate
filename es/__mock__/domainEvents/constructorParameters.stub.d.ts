import { TBaseDomainEntityEventParameters } from '../../events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import { EDomainEntityEventType } from '../../events/constants/eventType';
import { MultipleIdentityValueObjectClassMock, SimpleIdentityValueObjectClassMock } from '../../__mock__/valueObjects.mock';
export declare const EVENT_IDENTITY_UNIQUE_STUB: "EVENT_IDENTITY_UNIQUE";
export declare const EVENT_NAME_STUB: "EVENT_NAME";
export declare const EVENT_ENTITY_TYPE_STUB: "entity____entity_type";
export declare const EVENT_TYPE_STUB: EDomainEntityEventType;
export declare const DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB: TBaseDomainEntityEventParameters<SimpleIdentityValueObjectClassMock, undefined>;
export declare const DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_MULTI_ENTITY_ID_STUB: TBaseDomainEntityEventParameters<MultipleIdentityValueObjectClassMock, undefined>;
export declare const DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB: TBaseDomainEntityEventParameters<SimpleIdentityValueObjectClassMock, {
    isPayload: boolean;
}>;
export declare const DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_MULTI_ENTITY_ID_STUB: TBaseDomainEntityEventParameters<MultipleIdentityValueObjectClassMock, {
    isPayload: boolean;
}>;
