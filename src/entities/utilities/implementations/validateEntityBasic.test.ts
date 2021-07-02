import {ENTITY_TYPE_PREFIX} from '@root/entities/constants/entityType';
import {entityClassFabric} from '@root/entities/fabrics';
import {
  IEntity,
  IEntityImplementation,
  TEntityTypeMain,
} from '@root/entities/interfaces';
import {
  validateEntityBasic,
  validateEntityObject,
  validateEntityType,
} from '@root/entities/utilities/implementations/validateEntityBasic';
import {TPickTransferableProperties} from '@root/interfaces';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';
import {ENTITY_TYPE_STUB} from '@root/__mock__/entityType.stub';
import {getMockDomainEventBus} from '@root/__mock__/services/domainEventsBus.mock';
import {serviceGeneratorIdentifierUnique} from '@root/__mock__/services/identifiers.mock';
import {
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from '@root/__mock__/simpleTypes.stubs';
import {
  MultipleIdentityValueObjectClassWithComparisonMock,
  SimpleIdentityValueObjectClassWithComparisonMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from '@root/__mock__/valueObjects.mock';

describe('Basic utilities for an entities validation', () => {
  function runTestsForValidateEntityObject(
    validateEntityObjectCallback: (value: any) => void
  ) {
    it.each([
      ...SIMPLE_TYPE_VALUES_SET_STRINGS,
      ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
    ])('Should throw for the non-value object %p', value => {
      expect(() => validateEntityObjectCallback(value as any)).toThrow();
    });
    it.each([undefined, 0, '', null])(
      'Should throw for the empty value "%p"',
      value => {
        expect(() => validateEntityObjectCallback(value as any)).toThrow();
      }
    );
  }

  describe('validateEntityType', () => {
    it.each(['', NaN, undefined, null, ENTITY_TYPE_PREFIX])(
      'Should throw for an invalid entity types simple value "%p"',
      () => {
        expect(() =>
          validateEntityType(`${ENTITY_TYPE_PREFIX}` as any)
        ).toThrow();
      }
    );
    it.each([
      `${ENTITY_TYPE_PREFIX}_value` as const,
      `${ENTITY_TYPE_PREFIX}_` as const,
      `${ENTITY_TYPE_PREFIX}0` as const,
    ])(
      'Should not throw for a valid entity types simple value "%p"',
      entityTypeValue => {
        expect(() => validateEntityType(entityTypeValue as any)).not.toThrow();
      }
    );
  });
  describe('validateEntityObject', () => {
    runTestsForValidateEntityObject(validateEntityObject);
    it.each([new Map(), new Date(), [], new Set(), {}, []])(
      'Should not throw for the object-type value "%p"',
      value => {
        expect(() => validateEntityObject(value as any)).not.toThrow();
      }
    );
  });
  describe('validateEntityBasic', () => {
    runTestsForValidateEntityObject(validateEntityBasic);
    const uniqueEntityIdentitySimple =
      new SimpleIdentityValueObjectClassWithComparisonMock(
        UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB
      );
    const uniqueEntityIdentityMultiStub =
      new MultipleIdentityValueObjectClassWithComparisonMock(
        UNIQUE_ENTITY_IDENTITY_MULTI_STUB
      );

    describe.each([uniqueEntityIdentitySimple, uniqueEntityIdentityMultiStub])(
      'Entity identity %p',
      entityUniqueIdentifier => {
        describe.each([true, false])('Is deleted %p', isDeleted => {
          let entity: IEntityImplementation<
            TIdentityValueObject,
            TEntityTypeMain,
            any
          >;
          let entityWithWrongType: IEntityImplementation<any, any, any>;
          let entityWithWrongIdentity: IEntityImplementation<any, any, any>;
          beforeEach(() => {
            class EntityTestClass extends entityClassFabric({
              type: ENTITY_TYPE_STUB,
              getTransferableProps<
                T extends IEntity<any, typeof ENTITY_TYPE_STUB>
              >(instance: T): TPickTransferableProperties<T> {
                return {
                  id: instance.id,
                  isDeleted: instance.isDeleted,
                  type: instance.type,
                } as TPickTransferableProperties<T>;
              },
              validateInstance() {},
            }) {}
            class EntityWithWrongTypeTestClass extends entityClassFabric({
              type: 'wrong_type' as any,
              getTransferableProps<
                T extends IEntity<any, typeof ENTITY_TYPE_STUB>
              >(instance: T): TPickTransferableProperties<T> {
                return {
                  id: instance.id,
                  isDeleted: instance.isDeleted,
                  type: instance.type,
                } as TPickTransferableProperties<T>;
              },
              validateInstance() {},
            }) {}

            const parameters = {
              id: entityUniqueIdentifier,
              isDeleted,
            };
            const services = {
              domainEventBus: getMockDomainEventBus(),
              generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
            };

            entity = new EntityTestClass(parameters, services);
            entityWithWrongType = new EntityWithWrongTypeTestClass(
              parameters,
              services
            );
            entityWithWrongIdentity = new EntityTestClass(
              {
                ...parameters,
                id: 'Identity' as any,
              },
              services
            );
          });

          it('Should not throw for the entity', () => {
            expect(() => validateEntityBasic(entity)).not.toThrow();
          });
          it('Should throw for the entity has a wrong type', () => {
            expect(() => validateEntityBasic(entityWithWrongType)).toThrow();
          });
          it('Should throw for the entity has a wrong identity', () => {
            expect(() =>
              validateEntityBasic(entityWithWrongIdentity)
            ).toThrow();
          });
        });
      }
    );
  });
});
