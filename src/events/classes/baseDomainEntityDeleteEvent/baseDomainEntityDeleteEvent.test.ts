import {DOMAIN_ENTITY_EVENT_NAME_DELETE} from 'src/constants/domainEvents';
import {BaseDomainEntityDeleteEvent} from 'src/events/classes/baseDomainEntityDeleteEvent/baseDomainEntityDeleteEvent';
import {TBaseDomainEntityEventParameters} from 'src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {EDomainEntityEventType} from 'src/events/constants/eventType';
import {ENTITY_TYPE_STUB} from 'src/__mock__/entityType.stub';
import {
  MultipleIdentityValueObjectClassMock,
  SimpleIdentityValueObjectClassMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from 'src/__mock__/valueObjects.mock';

const EVENT_IDENTITY_UNIQUE = 'EVENT_IDENTITY_UNIQUE' as const;

describe('Domain entity event "DELETE"', () => {
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

  class DeleteEntityEvent extends BaseDomainEntityDeleteEvent<
    any,
    typeof ENTITY_TYPE_STUB
  > {
    protected _entityType = ENTITY_TYPE_STUB;
  }

  describe.each([
    parametersWithoutPayloadSimpleEntityId,
    parametersWithoutPayloadMultiEntityId,
  ])('Parameters %p', constructorParameters => {
    let domainEntityEvent: DeleteEntityEvent;
    beforeEach(() => {
      domainEntityEvent = new DeleteEntityEvent(constructorParameters);
    });
    it('Should have the "name" property', () => {
      expect(domainEntityEvent.name).toEqual(DOMAIN_ENTITY_EVENT_NAME_DELETE);
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
    it(`Should have entity type property equals to the ${ENTITY_TYPE_STUB}`, () => {
      expect(domainEntityEvent.entityType).toBe(ENTITY_TYPE_STUB);
    });
    it(`Should have entity id property equals to the ${constructorParameters.entityId}`, () => {
      expect(domainEntityEvent.entityId).toBe(constructorParameters.entityId);
    });
    it('Should be serialized', () => {
      const eventSerialized = domainEntityEvent.serialize();
      const eventSerializedParsed = JSON.parse(eventSerialized);
      const objectExpected = {
        id: EVENT_IDENTITY_UNIQUE,
        name: DOMAIN_ENTITY_EVENT_NAME_DELETE,
        entityType: ENTITY_TYPE_STUB,
        entityId:
          typeof constructorParameters.entityId.value === 'object'
            ? expect.objectContaining(UNIQUE_ENTITY_IDENTITY_MULTI_STUB)
            : UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
        eventType: EDomainEntityEventType.ENTITY_EVENT,
        payload: (constructorParameters as any).payload,
        metaVersion: (constructorParameters as any).metaVersion
          ? (constructorParameters as any).metaVersion
          : 1,
      };
      expect(eventSerializedParsed).toEqual(objectExpected);
    });
  });
});
