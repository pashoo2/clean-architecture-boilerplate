import {
  BaseDomainEntityEvent,
  TBaseDomainEntityEventParameters,
} from 'src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent';
import {baseValueObjectClassFabric} from 'src/valueObjects/implementations/baseValueObjectClassFabrics';
import {multipleValuesValueObjectBaseFabric} from 'src/valueObjects/implementations/multipleValuesValueObjectBaseClassFabrics';
import {
  IBaseValueObjectConstructorFabricParameters,
  IIdentityMultiValueObject,
  IIdentityValueObjectSimple,
  IMultipleValuesValueObjectBaseFabricParameters,
  IMultiValuesValueObjectValue,
} from 'src/valueObjects/interfaces';

// TODO - test failed

describe('Base domain entity event', () => {
  const EVENT_IDENTITY_UNIQUE = 'event id unique';
  const UNIQUE_ENTITY_IDENTITY_SIMPLE = 'entity id unique';
  const UNIQUE_ENTITY_IDENTITY_MULTI = {
    id: 'entity id unique multi',
    isMulti: true,
  };
  const ENTITY_TYPE = 'entity type';
  const EVENT_NAME = 'DomainEventClassTest';

  const simpleIdentityValueObjectClassFabricParameters: IBaseValueObjectConstructorFabricParameters<
    string,
    string
  > = {
    compareValues: jest.fn(() => true),
    serializeValue: jest.fn(() => UNIQUE_ENTITY_IDENTITY_SIMPLE),
    validateValue: jest.fn(() => true),
  };
  class SimpleIdentityValueObjectClass
    extends baseValueObjectClassFabric(
      simpleIdentityValueObjectClassFabricParameters
    )
    implements IIdentityValueObjectSimple {}

  const multipleIdentityValueObjectClassFabricParameters: IMultipleValuesValueObjectBaseFabricParameters<IMultiValuesValueObjectValue> =
    {
      compareValues: jest.fn(() => true),
      serializeValue: jest.fn(() =>
        JSON.stringify(UNIQUE_ENTITY_IDENTITY_MULTI)
      ),
      validateValue: jest.fn(() => true),
    };
  class MultipleIdentityValueObjectClass
    extends multipleValuesValueObjectBaseFabric<
      typeof UNIQUE_ENTITY_IDENTITY_MULTI
    >(multipleIdentityValueObjectClassFabricParameters)
    implements IIdentityMultiValueObject<typeof UNIQUE_ENTITY_IDENTITY_MULTI> {}

  const parametersWithoutPayloadSimpleEntityId: TBaseDomainEntityEventParameters<
    SimpleIdentityValueObjectClass,
    undefined
  > = {
    id: EVENT_IDENTITY_UNIQUE,
    metaVersion: 1,
    entityId: new SimpleIdentityValueObjectClass(UNIQUE_ENTITY_IDENTITY_SIMPLE),
  };
  const parametersWithoutPayloadMultiEntityId: TBaseDomainEntityEventParameters<
    MultipleIdentityValueObjectClass,
    undefined
  > = {
    ...parametersWithoutPayloadSimpleEntityId,
    entityId: new MultipleIdentityValueObjectClass(
      UNIQUE_ENTITY_IDENTITY_MULTI
    ),
  };
  const parametersWithPayloadSimpleEntityId: TBaseDomainEntityEventParameters<
    SimpleIdentityValueObjectClass,
    {isPayload: boolean}
  > = {
    id: EVENT_IDENTITY_UNIQUE,
    payload: {isPayload: true},
    entityId: new SimpleIdentityValueObjectClass(UNIQUE_ENTITY_IDENTITY_SIMPLE),
  };
  const parametersWithPayloadMultiEntityId: TBaseDomainEntityEventParameters<
    MultipleIdentityValueObjectClass,
    {isPayload: boolean}
  > = {
    ...parametersWithPayloadSimpleEntityId,
    entityId: new MultipleIdentityValueObjectClass(
      UNIQUE_ENTITY_IDENTITY_MULTI
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
        expect(domainEntityEvent.serialize()).toEqual({
          id: EVENT_IDENTITY_UNIQUE,
          name: EVENT_NAME,
          entityType: ENTITY_TYPE,
          entityId:
            typeof constructorParameters.entityId === 'object'
              ? expect.objectContaining(UNIQUE_ENTITY_IDENTITY_MULTI)
              : UNIQUE_ENTITY_IDENTITY_SIMPLE,
          payload: (constructorParameters as any).payload,
          metaVersion: (constructorParameters as any).metaVersion
            ? (constructorParameters as any).metaVersion
            : 1,
        });
      });
    });
  });
});
