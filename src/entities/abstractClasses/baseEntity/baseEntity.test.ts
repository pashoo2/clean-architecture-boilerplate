import {
  DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED,
  DOMAIN_ENTITY_EVENT_NAME_DELETE,
} from 'src/constants/domainEvents';
import {BaseEntity} from 'src/entities/abstractClasses/baseEntity/baseEntity';
import {
  IBaseEntityEventsListCommonEvents,
  IBaseEntityServices,
} from 'src/entities/interfaces';
import {TPickTransferableProperties} from 'src/interfaces/index';
import {getDomainEntityEventMock} from 'src/__mock__/domainEvents';
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
  const ENTITY_EVENT_NAME = 'ENTITY_EVENT_NAME' as const;

  interface EntityTestClassEventsList
    extends IBaseEntityEventsListCommonEvents<
      | MultipleIdentityValueObjectClassWithComparisonMock
      | SimpleIdentityValueObjectClassWithComparisonMock,
      typeof ENTITY_TYPE
    > {
    [ENTITY_EVENT_NAME]: ReturnType<typeof getDomainEntityEventMock>;
  }

  class EntityTestClass extends BaseEntity<
    | MultipleIdentityValueObjectClassWithComparisonMock
    | SimpleIdentityValueObjectClassWithComparisonMock,
    typeof ENTITY_TYPE,
    EntityTestClassEventsList
  > {
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
        describe('Entity events', () => {
          let entityServiceParameterEventBus: IBaseEntityServices<EntityTestClassEventsList>['domainEventBus'];
          beforeEach(() => {
            entityServiceParameterEventBus = services.domainEventBus;
          });

          it('Should have the "emit" method', () => {
            expect(entityServiceParameterEventBus.emit).toEqual(
              expect.any(Function)
            );
          });
          it('Should have the "emitEventFailed" method', () => {
            expect(entityServiceParameterEventBus.emitEventFailed).toEqual(
              expect.any(Function)
            );
          });
          it('Should have "subscribe" method', () => {
            expect(entityServiceParameterEventBus.subscribe).toEqual(
              expect.any(Function)
            );
          });
          it('Should call a callback passed as the "subscribe" method\'s argument whenever an event is fired', () => {
            const eventExpectedListener = jest.fn();
            entity.subscribe(ENTITY_EVENT_NAME, eventExpectedListener);
            expect(() =>
              entityServiceParameterEventBus.emit(eventTest)
            ).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledTimes(1);
            expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
          });
          it('Should not call a callback passed as the "subscribe" method\'s argument whenever a failed event is fired', () => {
            const eventExpectedListener = jest.fn();
            entityServiceParameterEventBus.subscribe(
              EVENT_EXPECTED_NAME,
              eventExpectedListener
            );
            expect(() =>
              entityServiceParameterEventBus.emitEventFailed(eventFailedTest)
            ).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledTimes(0);
          });
          it('Should have a "subscribeOnFailed" method', () => {
            expect(entityServiceParameterEventBus.subscribeOnFailed).toEqual(
              expect.any(Function)
            );
          });
          it('Should call a callback passed as the "subscribeOnFailed" method\'s argument whenever an event is fired', () => {
            const eventFailedExpectedListener = jest.fn();
            expect(() =>
              entityServiceParameterEventBus.subscribeOnFailed(
                EVENT_EXPECTED_NAME,
                eventFailedExpectedListener
              )
            ).not.toThrow();
            expect(() =>
              entityServiceParameterEventBus.emitEventFailed(eventFailedTest)
            ).not.toThrow();
            expect(eventFailedExpectedListener).toHaveBeenCalledTimes(1);
            expect(eventFailedExpectedListener).toHaveBeenLastCalledWith(
              eventFailedTest
            );
          });
          it('Should not call a callback passed as the "subscribeOnFailed" method\'s argument whenever an event is fired', () => {
            const eventFailedExpectedListener = jest.fn();
            entityServiceParameterEventBus.subscribeOnFailed(
              EVENT_EXPECTED_NAME,
              eventFailedExpectedListener
            );
            expect(() =>
              entityServiceParameterEventBus.emit(eventTest)
            ).not.toThrow();
            expect(eventFailedExpectedListener).toHaveBeenCalledTimes(0);
          });
          it('Should have "subscribeAllEvents"', () => {
            expect(entityServiceParameterEventBus.subscribeAllEvents).toEqual(
              expect.any(Function)
            );
          });
          test('A listener subscribed with "subscribeAllEvents" should be called if an event or event failed emitted', () => {
            const allEventsListener = jest.fn();
            entityServiceParameterEventBus.subscribeAllEvents(
              allEventsListener
            );
            entityServiceParameterEventBus.emit(eventTest);
            entityServiceParameterEventBus.emitEventFailed(eventFailedTest);
            expect(allEventsListener).toBeCalledTimes(2);
            expect(allEventsListener).toHaveBeenCalledWith(eventTest);
            expect(allEventsListener).toHaveBeenCalledWith(eventFailedTest);
          });
          it('Should have the "unsubscribe" method', () => {
            expect(entityServiceParameterEventBus.unsubscribe).toEqual(
              expect.any(Function)
            );
          });
          it('Should not call a callback function that is passed as a parameter for the "subscribe" method, after it will be passed as a parameter for the "unsubscribe" method', () => {
            const eventExpectedListener = jest.fn();
            expect(() =>
              entityServiceParameterEventBus.subscribe(
                EVENT_EXPECTED_NAME,
                eventExpectedListener
              )
            ).not.toThrow();
            expect(() =>
              entityServiceParameterEventBus.emit(eventTest)
            ).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
            eventExpectedListener.mockClear();
            expect(() =>
              entityServiceParameterEventBus.unsubscribe(
                EVENT_EXPECTED_NAME,
                eventExpectedListener
              )
            ).not.toThrow();
            expect(() =>
              entityServiceParameterEventBus.emit(eventTest)
            ).not.toThrow();
            expect(eventExpectedListener).not.toHaveBeenCalled();
          });
          it('Should not call a callback function that is passed as a parameter for the "subscribeOnFailed" method, after it will be passed as a parameter for the "unsubscribe" method', () => {
            const eventFailedExpectedListener = jest.fn();
            expect(() =>
              entityServiceParameterEventBus.subscribeOnFailed(
                EVENT_EXPECTED_NAME,
                eventFailedExpectedListener
              )
            ).not.toThrow();
            expect(() =>
              entityServiceParameterEventBus.emitEventFailed(eventFailedTest)
            ).not.toThrow();
            expect(eventFailedExpectedListener).toHaveBeenCalledWith(
              eventFailedTest
            );
            eventFailedExpectedListener.mockClear();
            expect(() =>
              entityServiceParameterEventBus.unsubscribe(
                EVENT_EXPECTED_NAME,
                eventFailedExpectedListener
              )
            ).not.toThrow();
            expect(() =>
              entityServiceParameterEventBus.emit(eventTest)
            ).not.toThrow();
            expect(eventFailedExpectedListener).not.toHaveBeenCalled();
          });
        });
      });
    }
  );
});
