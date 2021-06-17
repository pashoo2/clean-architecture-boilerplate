import {
  BaseDomainEntityEvent,
  TBaseDomainEntityEventParameters,
} from 'src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {
  MultipleIdentityValueObjectClassMock,
  SimpleIdentityValueObjectClassMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from 'src/__mock__/valueObjects.mock';

const EVENT_IDENTITY_UNIQUE = 'EVENT_IDENTITY_UNIQUE';
const EVENT_NAME = 'EVENT_NAME';
const ENTITY_TYPE = 'ENTITY_TYPE';

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

  class DomainEventClassTest extends BaseDomainEntityEvent<any> {
    protected _name = EVENT_NAME;
    protected _entityType = ENTITY_TYPE;
  }

  describe.each([
    parametersWithoutPayloadSimpleEntityId,
    parametersWithoutPayloadMultiEntityId,
    parametersWithPayloadSimpleEntityId,
    parametersWithPayloadMultiEntityId,
  ])('Parameters %p', constructorParameters => {
    let domainEntityEvent: DomainEventClassTest;
    describe('DomainEventClass', () => {
      beforeEach(() => {
        domainEntityEvent = new DomainEventClassTest(constructorParameters);
      });
      it('Should have the "name" property', () => {
        expect(domainEntityEvent.name).toEqual(EVENT_NAME);
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
      it(`Should have entity type property equals to the ${ENTITY_TYPE}`, () => {
        expect(domainEntityEvent.entityType).toBe(ENTITY_TYPE);
      });
      it(`Should have entity id property equals to the ${constructorParameters.entityId}`, () => {
        expect(domainEntityEvent.entityId).toBe(constructorParameters.entityId);
      });
      it('Should be serialized', () => {
        const eventSerialized = domainEntityEvent.serialize();
        const eventSerializedParsed = JSON.parse(eventSerialized);
        const objectExpected = {
          id: EVENT_IDENTITY_UNIQUE,
          name: EVENT_NAME,
          entityType: ENTITY_TYPE,
          entityId:
            typeof constructorParameters.entityId.value === 'object'
              ? expect.objectContaining(UNIQUE_ENTITY_IDENTITY_MULTI_STUB)
              : UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
          payload: (constructorParameters as any).payload,
          metaVersion: (constructorParameters as any).metaVersion
            ? (constructorParameters as any).metaVersion
            : 1,
        };
        expect(eventSerializedParsed).toEqual(objectExpected);
      });
    });
  });
});
