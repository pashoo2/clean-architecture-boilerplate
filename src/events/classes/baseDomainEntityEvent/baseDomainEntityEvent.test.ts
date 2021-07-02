import {TAggregateTypeMain} from '@root/aggregates/interfaces';
import {TEntityTypeMain} from '@root/entities/interfaces';
import {
  BaseDomainEntityEvent,
  TBaseDomainEntityEventParameters,
} from '@root/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {EDomainEntityEventType} from '@root/events/constants/eventType';
import {TDomainEventPayload} from '@root/events/interfaces';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';
import {
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_MULTI_ENTITY_ID_STUB,
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_MULTI_ENTITY_ID_STUB,
  DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
  EVENT_ENTITY_TYPE_STUB,
  EVENT_NAME_STUB,
  EVENT_TYPE_STUB,
} from '@root/__mock__/domainEvents/constructorParameters.stub';

export interface ITestBaseDomainEntityOrAggregateEventParameters<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain | TAggregateTypeMain,
  N extends string = string,
  P extends TDomainEventPayload = undefined,
  EventType extends EDomainEntityEventType = EDomainEntityEventType
> {
  entityType: EntityType;
  eventType: EventType;
  eventName: N;
  eventPayload: P;
  constructorParameters: TBaseDomainEntityEventParameters<EntityId, P>;
  getEntity(): BaseDomainEntityEvent<EntityId, EntityType, N, P>;
}

export function testBaseDomainEntityEvent<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain,
  N extends string = string,
  P extends TDomainEventPayload = undefined,
  EventType extends EDomainEntityEventType = EDomainEntityEventType
>(
  parameters: ITestBaseDomainEntityOrAggregateEventParameters<
    EntityId,
    EntityType,
    N,
    P,
    EventType
  >
) {
  const {constructorParameters, eventName, entityType, eventType, getEntity} =
    parameters;

  describe('DomainEventClass', () => {
    let domainEntityEvent: ReturnType<typeof getEntity>;
    beforeEach(() => {
      domainEntityEvent = getEntity();
    });
    it('Should have the "name" property', () => {
      expect(domainEntityEvent.name).toEqual(eventName);
    });
    it('Should have the "id" property', () => {
      expect(domainEntityEvent).toHaveProperty('id');
    });
    // test('The "id" property should be equal to a value returned by the "getUniqueIdentifierString" service', () => {
    //   expect(domainEntityEvent.id).toEqual(entityId);
    // });
    if ((constructorParameters as any).payload) {
      it('Should have the "payload" property equals to a value passed in a parameters', () => {
        expect(domainEntityEvent.payload).toEqual(
          (constructorParameters as any).payload
        );
      });
    } else {
      it('Should have the "payload" property equals to the "undefined"', () => {
        expect(domainEntityEvent.payload).toEqual(undefined);
      });
    }
    if ((constructorParameters as any).metaVersion) {
      it('Should have the "metaVersion" property equals to a value passed in a parameters', () => {
        expect(domainEntityEvent.metaVersion).toEqual(
          (constructorParameters as any).metaVersion
        );
      });
    } else {
      it('Should have the "metaVersion" property', () => {
        expect(domainEntityEvent).toHaveProperty('metaVersion');
      });
    }
    it(`Should have entity type property equals to the ${entityType}`, () => {
      expect(domainEntityEvent.entityType).toBe(entityType);
    });
    it(`Should have event type property equals to the ${eventType}`, () => {
      expect(domainEntityEvent.eventType).toBe(eventType);
    });
    it(`Should have entity id property equals to the ${constructorParameters.entityId}`, () => {
      expect(domainEntityEvent.entityId).toBe(constructorParameters.entityId);
    });
    it('Should be serialized', () => {
      const eventSerialized = domainEntityEvent.serialize();
      const eventSerializedParsed = JSON.parse(eventSerialized);
      const objectExpected = {
        id: parameters.constructorParameters.id,
        name: eventName,
        entityType: entityType,
        entityId:
          typeof constructorParameters.entityId.value === 'object'
            ? expect.objectContaining(
                JSON.parse(constructorParameters.entityId.serialize())
              )
            : constructorParameters.entityId.value,
        eventType: eventType,
        payload: (constructorParameters as any).payload,
        metaVersion: (constructorParameters as any).metaVersion
          ? (constructorParameters as any).metaVersion
          : 1,
      };
      expect(eventSerializedParsed).toEqual(objectExpected);
    });
  });
}

describe('Base domain entity or aggregate event', () => {
  describe.each([
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITHOUT_PAYLOAD_MULTI_ENTITY_ID_STUB,
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_SIMPLE_ENTITY_ID_STUB,
    DOMAIN_ENTITY_EVENT_CONSTRUCTOR_PARAMETERS_WITH_PAYLOAD_MULTI_ENTITY_ID_STUB,
  ])(
    'Parameters %p',
    (constructorParameters: TBaseDomainEntityEventParameters<any, any>) => {
      class DomainEventClassTest extends BaseDomainEntityEvent<
        typeof constructorParameters.entityId,
        typeof EVENT_ENTITY_TYPE_STUB,
        typeof EVENT_NAME_STUB,
        any
      > {
        protected _name = EVENT_NAME_STUB;
        protected _entityType = EVENT_ENTITY_TYPE_STUB;
        protected _eventType = EVENT_TYPE_STUB;
      }
      testBaseDomainEntityEvent({
        constructorParameters,
        entityType: EVENT_ENTITY_TYPE_STUB,
        eventName: EVENT_NAME_STUB,
        eventPayload: (constructorParameters as any).payload,
        eventType: EVENT_TYPE_STUB,
        getEntity() {
          return new DomainEventClassTest(constructorParameters);
        },
      });
    }
  );
});
