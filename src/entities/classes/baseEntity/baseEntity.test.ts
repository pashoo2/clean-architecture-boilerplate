import {
  DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED,
  DOMAIN_ENTITY_EVENT_NAME_DELETE,
} from 'src/constants/domainEvents';
import {BaseEntity} from 'src/entities/classes/baseEntity/baseEntity';
import {TPickTransferableProperties} from 'src/interfaces';
import {getMockDomainEventBus} from 'src/__mock__/services/domainEventsBus.mock';
import {serviceGeneratorIdentifierUnique} from 'src/__mock__/services/identifiers.mock';
import {
  MultipleIdentityValueObjectClassWithComparisonMock,
  SimpleIdentityValueObjectClassWithComparisonMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from 'src/__mock__/valueObjects.mock';

describe('BaseEntity class', () => {
  const ENTITY_TYPE = 'ENTITY_TYPE' as const;

  class EntityTestClass extends BaseEntity<any, typeof ENTITY_TYPE> {
    protected _type = ENTITY_TYPE;

    protected _getTransferableProps<T extends this>(
      this: T
    ): TPickTransferableProperties<T> {
      const transferableObject: TPickTransferableProperties<EntityTestClass> = {
        id: this.id,
        isDeleted: this.isDeleted,
        type: this.type,
      };
      return transferableObject as TPickTransferableProperties<T>;
    }

    // TODO - check it
    // public emit<Event extends TGetEvents<E>>(event: Event): void {}

    // public subscribe<N extends TGetEventsNames<E>>(
    //   eventName: N,
    //   eventListener: IDomainEventListener<E[N]>
    // ): void {}

    // public unsubscribe<N extends TGetEventsNames<E>>(
    //   eventName: N,
    //   eventListener: IDomainEventListener<E[N]>
    // ): void {}

    protected _validate() {}
  }

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
        let entityTestClassConstructorParameters: ConstructorParameters<
          typeof EntityTestClass
        >;
        let entity: EntityTestClass;
        let parameters: typeof entityTestClassConstructorParameters[0];
        let services: typeof entityTestClassConstructorParameters[1];

        beforeEach(() => {
          parameters = {
            id: entityUniqueIdentifier,
            isDeleted,
          };
          services = {
            domainEventBus: getMockDomainEventBus(),
            generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
          };
          entityTestClassConstructorParameters = [parameters, services];
          entity = new EntityTestClass(...entityTestClassConstructorParameters);
        });

        describe('Should implement interface IEntity', () => {
          it('Should have "id" property equals to an identity passed into parameters', () => {
            expect(entity.id).toBe(entityUniqueIdentifier);
          });
          it(`Should have "type" property equals to ${ENTITY_TYPE}`, () => {
            expect(entity.id).toBe(entityUniqueIdentifier);
          });
          it('Should have "isDeleted" property equals to the value passed in the parameter', () => {
            expect(entity.isDeleted).toBe(isDeleted);
          });
          describe('"equalsTo" method', () => {
            it('Should have "equalsTo" method', () => {
              expect(typeof entity.equalsTo === 'function').toBe(true);
            });
            it('Should return true for an entity with the same id', () => {
              expect(
                entity.equalsTo(
                  new EntityTestClass(...entityTestClassConstructorParameters)
                )
              ).toBe(true);
            });
            it('Should return false for an event with an id that is not equal to the identity of the entity', () => {
              expect(
                entity.equalsTo(
                  new EntityTestClass(
                    {
                      ...entityTestClassConstructorParameters[0],
                      id: new SimpleIdentityValueObjectClassWithComparisonMock(
                        String(Math.random())
                      ),
                    },
                    entityTestClassConstructorParameters[1]
                  )
                )
              ).toBe(false);
            });
            it('Should return for an entity with another type', () => {
              class AnotherTypeEntity extends EntityTestClass {
                protected _type = `ANOTHER_${ENTITY_TYPE}` as any;
              }
              expect(
                entity.equalsTo(
                  new AnotherTypeEntity(...entityTestClassConstructorParameters)
                )
              ).toBe(false);
            });
          });
          describe('"delete" method', () => {
            it('Should have "delete" method', () => {
              expect(typeof entity.delete === 'function').toBe(true);
            });
            it('Should mark the entity as deleted', () => {
              expect(() => entity.delete()).not.toThrow();
              expect(entity.isDeleted).toBe(true);
            });
            it('Should emit "DELETE" event if the entity has not been deleted previously', () => {
              const listenerDeleteEvents = jest.fn();
              (services.domainEventBus as any).subscribe(
                DOMAIN_ENTITY_EVENT_NAME_DELETE,
                listenerDeleteEvents
              );
              expect(() => entity.delete()).not.toThrow();
              if (parameters.isDeleted) {
                expect(listenerDeleteEvents).not.toHaveBeenCalledWith(
                  expect.objectContaining({
                    entityId: parameters.id,
                    name: DOMAIN_ENTITY_EVENT_NAME_DELETE,
                  })
                );
              } else {
                expect(listenerDeleteEvents).toHaveBeenCalledWith(
                  expect.objectContaining({
                    entityId: parameters.id,
                    name: DOMAIN_ENTITY_EVENT_NAME_DELETE,
                  })
                );
              }
              listenerDeleteEvents.mockClear();
              expect(() => entity.delete()).not.toThrow();
              expect(listenerDeleteEvents).not.toHaveBeenCalledWith(
                expect.objectContaining({
                  entityId: parameters.id,
                  name: DOMAIN_ENTITY_EVENT_NAME_DELETE,
                })
              );
            });
          });
          describe('"getTransferableProps"', () => {
            it('Should have "getTransferableProps"', () => {
              expect(entity.getTransferableProps).toEqual(expect.any(Function));
            });
            it('Should return properties of the entity', () => {
              expect(entity.getTransferableProps()).toEqual({
                id: parameters.id,
                type: ENTITY_TYPE,
                isDeleted: parameters.isDeleted,
              });
            });
          });
        });
        it(`Should emit instance created event "${DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED}" after event instance have been constructed`, () => {
          const listenerEntityConstructedEvents = jest.fn();
          (services.domainEventBus as any).subscribe(
            DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED,
            listenerEntityConstructedEvents
          );
          expect(
            () => new EntityTestClass(...entityTestClassConstructorParameters)
          ).not.toThrow();
          expect(listenerEntityConstructedEvents).toHaveBeenCalledWith(
            expect.objectContaining({
              entityId: parameters.id,
              name: DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED,
            })
          );
        });
      });
    }
  );
});
