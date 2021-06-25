import {TEntityType} from 'src/entities/interfaces';
import {
  BaseDomainEntityOrAggregateEvent,
  TBaseDomainEntityOrAggregateEventParameters,
} from 'src/events/classes/baseDomainEntityOrAggregateEvent/baseDomainEntityOrAggregateEvent';
import {EDomainEntityEventType} from 'src/events/constants/eventType';
import {TDomainEventPayload} from 'src/events/interfaces';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';
import {
  MultipleIdentityValueObjectClassMock,
  SimpleIdentityValueObjectClassMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from 'src/__mock__/valueObjects.mock';

const EVENT_IDENTITY_UNIQUE = 'EVENT_IDENTITY_UNIQUE';
const EVENT_NAME = 'EVENT_NAME' as const;
const ENTITY_TYPE = 'ENTITY_TYPE' as const;
const EVENT_TYPE = EDomainEntityEventType.ENTITY_EVENT;

export interface ITestBaseDomainEntityOrAggregateEventParameters<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType,
  N extends string = string,
  P extends TDomainEventPayload = undefined,
  EventType extends EDomainEntityEventType = EDomainEntityEventType
> {
  entityId: EntityId;
  entityType: EntityType;
  eventType: EventType;
  eventName: N;
  eventPayload: P;
  constructorParameters: TBaseDomainEntityOrAggregateEventParameters<
    EntityId,
    P
  >;
  getEntity(): BaseDomainEntityOrAggregateEvent<
    EntityId,
    EntityType,
    N,
    P,
    EventType
  >;
}

export function testBaseDomainEntityOrAggregateEvent<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType,
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

  let domainEntityEvent: ReturnType<typeof getEntity>;
  describe('DomainEventClass', () => {
    beforeEach(() => {
      domainEntityEvent = getEntity();
    });
    it('Should have the "name" property', () => {
      expect(domainEntityEvent.name).toEqual(eventName);
    });
    it('Should have the "id" property', () => {
      expect(domainEntityEvent).toHaveProperty('id');
    });
    test('The "id" property should be equal to a value returned by the "getUniqueIdentifierString" service', () => {
      expect(domainEntityEvent.id).toEqual(EVENT_IDENTITY_UNIQUE);
    });
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
        id: EVENT_IDENTITY_UNIQUE,
        name: eventName,
        entityType: entityType,
        entityId:
          typeof constructorParameters.entityId.value === 'object'
            ? expect.objectContaining(UNIQUE_ENTITY_IDENTITY_MULTI_STUB)
            : UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
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
  const parametersWithoutPayloadSimpleEntityId: TBaseDomainEntityOrAggregateEventParameters<
    SimpleIdentityValueObjectClassMock,
    undefined
  > = {
    id: EVENT_IDENTITY_UNIQUE,
    metaVersion: 1,
    entityId: new SimpleIdentityValueObjectClassMock(
      UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB
    ),
  };
  const parametersWithoutPayloadMultiEntityId: TBaseDomainEntityOrAggregateEventParameters<
    MultipleIdentityValueObjectClassMock,
    undefined
  > = {
    ...parametersWithoutPayloadSimpleEntityId,
    entityId: new MultipleIdentityValueObjectClassMock(
      UNIQUE_ENTITY_IDENTITY_MULTI_STUB
    ),
  };
  const parametersWithPayloadSimpleEntityId: TBaseDomainEntityOrAggregateEventParameters<
    SimpleIdentityValueObjectClassMock,
    {isPayload: boolean}
  > = {
    id: EVENT_IDENTITY_UNIQUE,
    payload: {isPayload: true},
    entityId: new SimpleIdentityValueObjectClassMock(
      UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB
    ),
  };
  const parametersWithPayloadMultiEntityId: TBaseDomainEntityOrAggregateEventParameters<
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
    class DomainEventClassTest extends BaseDomainEntityOrAggregateEvent<
      typeof constructorParameters.entityId,
      typeof ENTITY_TYPE,
      typeof EVENT_NAME,
      any,
      EDomainEntityEventType
    > {
      protected _name = EVENT_NAME;
      protected _entityType = ENTITY_TYPE;
      protected _eventType = EVENT_TYPE;
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
