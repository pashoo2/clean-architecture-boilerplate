import {
  DOMAIN_ENTITY_EVENT_NAME_CONSTRUCTED,
  DOMAIN_ENTITY_EVENT_NAME_DELETE,
} from 'src/constants/domainEvents';
import {BaseEntity} from 'src/entities/abstractClasses/baseEntity/baseEntity';
import {
  TBaseEntityEventsListCommonEvents,
  IBaseEntityServices,
} from 'src/entities/interfaces';
import {BaseDomainEntityEvent} from 'src/events/classes';
import {
  IDomainEventFailed,
  TDomainEventFailedNameForDomainEventName,
} from 'src/events/interfaces';
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
  const ENTITY_EVENT_FAILED_NAME: TDomainEventFailedNameForDomainEventName<
    typeof ENTITY_EVENT_NAME
  > = `failed::${ENTITY_EVENT_NAME}`;

  type TEntityTestClassEventsList = TBaseEntityEventsListCommonEvents<
    | MultipleIdentityValueObjectClassWithComparisonMock
    | SimpleIdentityValueObjectClassWithComparisonMock,
    typeof ENTITY_TYPE
  > & {
    [ENTITY_EVENT_NAME]: ReturnType<typeof getDomainEntityEventMock>;
  };

  class EntityTestClass extends BaseEntity<
    | MultipleIdentityValueObjectClassWithComparisonMock
    | SimpleIdentityValueObjectClassWithComparisonMock,
    typeof ENTITY_TYPE,
    TEntityTestClassEventsList
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
          let entityServiceParameterEventBus: IBaseEntityServices<TEntityTestClassEventsList>['domainEventBus'];
          let eventTest: BaseDomainEntityEvent<
            typeof parameters['id'],
            typeof ENTITY_TYPE,
            typeof ENTITY_EVENT_NAME
          >;
          let eventFailedTest: IDomainEventFailed<typeof eventTest>;

          beforeEach(() => {
            entityServiceParameterEventBus = services.domainEventBus;
            eventTest = getDomainEntityEventMock(
              parameters.id,
              ENTITY_TYPE,
              ENTITY_EVENT_NAME
            );
            eventFailedTest = {
              name: ENTITY_EVENT_FAILED_NAME,
              failedEvent: eventTest,
              error: new Error(),
            };
          });

          it('Should have the "emit" method', () => {
            expect(entity.emit).toEqual(expect.any(Function));
          });
          it('Should have the "emitEventFailed" method', () => {
            expect(entity.emitEventFailed).toEqual(expect.any(Function));
          });
          it('Should have "subscribe" method', () => {
            expect(entity.subscribe).toEqual(expect.any(Function));
          });
          it("Should emit events via a domain events bus service's instance", () => {
            const eventExpectedListener = jest.fn();
            entityServiceParameterEventBus.subscribe(
              ENTITY_EVENT_NAME,
              eventExpectedListener
            );
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledTimes(1);
            expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
          });
          it('Should call a callback passed as the "subscribe" method\'s argument whenever an event is fired', () => {
            const eventExpectedListener = jest.fn();
            entity.subscribe(ENTITY_EVENT_NAME, eventExpectedListener);
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledTimes(1);
            expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
          });
          it('Should not call a callback passed as the "subscribe" method\'s argument whenever a failed event is fired', () => {
            const eventExpectedListener = jest.fn();
            entity.subscribe(ENTITY_EVENT_NAME, eventExpectedListener);
            entityServiceParameterEventBus.subscribe(
              ENTITY_EVENT_NAME,
              eventExpectedListener
            );
            expect(() =>
              entityServiceParameterEventBus.emitEventFailed(eventFailedTest)
            ).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledTimes(0);
          });
          it('Should call a callback passed as the "subscribeOnFailed" method\'s argument whenever a event failed is fired', () => {
            const eventFailedExpectedListener = jest.fn();
            expect(() =>
              entity.subscribeOnFailed(
                ENTITY_EVENT_NAME,
                eventFailedExpectedListener
              )
            ).not.toThrow();
            expect(() =>
              entityServiceParameterEventBus.subscribeOnFailed(
                ENTITY_EVENT_NAME,
                eventFailedExpectedListener
              )
            ).not.toThrow();
            expect(() =>
              entityServiceParameterEventBus.emitEventFailed(eventFailedTest)
            ).not.toThrow();
            expect(eventFailedExpectedListener).toHaveBeenLastCalledWith(
              eventFailedTest
            );
          });
          it('Should not call a callback passed as the "subscribeOnFailed" method\'s argument whenever an event is fired', () => {
            const eventFailedExpectedListener = jest.fn();
            entity.subscribeOnFailed(
              ENTITY_EVENT_NAME,
              eventFailedExpectedListener
            );
            entityServiceParameterEventBus.subscribeOnFailed(
              ENTITY_EVENT_NAME,
              eventFailedExpectedListener
            );
            expect(() =>
              entityServiceParameterEventBus.emit(eventTest)
            ).not.toThrow();
            expect(eventFailedExpectedListener).toHaveBeenCalledTimes(0);
          });
          test('All events emitted must be able to be listened with a subscription through the "subscribeAllEvents" event bus method', () => {
            const allEventsListener = jest.fn();
            entityServiceParameterEventBus.subscribeAllEvents(
              allEventsListener
            );
            entity.emit(eventTest);
            entity.emitEventFailed(eventFailedTest);
            expect(allEventsListener).toBeCalledTimes(2);
            expect(allEventsListener).toHaveBeenCalledWith(eventTest);
            expect(allEventsListener).toHaveBeenCalledWith(eventFailedTest);
          });
          it('Should not call a callback function that had been passed as a parameter to the "subscribe" method, if it have been passed as a parameter to the "unsubscribe" method', () => {
            const eventExpectedListener = jest.fn();
            expect(() =>
              entity.subscribe(ENTITY_EVENT_NAME, eventExpectedListener)
            ).not.toThrow();
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
            eventExpectedListener.mockClear();
            expect(() =>
              entity.unsubscribe(ENTITY_EVENT_NAME, eventExpectedListener)
            ).not.toThrow();
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(eventExpectedListener).not.toHaveBeenCalled();
          });
          it('Should call a callback function that had been passed as a parameter to the "subscribe" method of a domain events service bus, if it have been passed as a parameter to the "unsubscribe" method', () => {
            const eventExpectedListener = jest.fn();
            const entityServiceParameterEventBusExpectedEventListener =
              jest.fn();
            expect(() =>
              entityServiceParameterEventBus.subscribe(
                ENTITY_EVENT_NAME,
                entityServiceParameterEventBusExpectedEventListener
              )
            ).not.toThrow();
            expect(() =>
              entity.subscribe(ENTITY_EVENT_NAME, eventExpectedListener)
            ).not.toThrow();
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
            eventExpectedListener.mockClear();
            expect(() =>
              entity.unsubscribe(ENTITY_EVENT_NAME, eventExpectedListener)
            ).not.toThrow();
            expect(() => entity.emit(eventTest)).not.toThrow();
            expect(
              entityServiceParameterEventBusExpectedEventListener
            ).toHaveBeenCalled();
          });
          it('Should not call a callback function that had been passed as a parameter to the "subscribeOnFailed" method, if it have been passed as a parameter to the "unsubscribe" method', () => {
            const eventFailedExpectedListener = jest.fn();
            expect(() =>
              entity.subscribeOnFailed(
                ENTITY_EVENT_NAME,
                eventFailedExpectedListener
              )
            ).not.toThrow();
            expect(() => entity.emitEventFailed(eventFailedTest)).not.toThrow();
            expect(eventFailedExpectedListener).toHaveBeenCalledWith(
              eventFailedTest
            );
            eventFailedExpectedListener.mockClear();
            expect(() =>
              entity.unsubscribe(ENTITY_EVENT_NAME, eventFailedExpectedListener)
            ).not.toThrow();
            expect(() => entity.emitEventFailed(eventFailedTest)).not.toThrow();
            expect(eventFailedExpectedListener).not.toHaveBeenCalled();
          });
          it('Should call a callback function that had been passed as a parameter to the "subscribeOnFailed" method of a domain events service bus, if it have been passed as a parameter to the "unsubscribe" method', () => {
            const eventFailedExpectedListener = jest.fn();
            const entityServiceParameterEventBusExpectedEventListener =
              jest.fn();
            expect(() =>
              entity.subscribeOnFailed(
                ENTITY_EVENT_NAME,
                eventFailedExpectedListener
              )
            ).not.toThrow();
            expect(() =>
              entityServiceParameterEventBus.subscribeOnFailed(
                ENTITY_EVENT_NAME,
                entityServiceParameterEventBusExpectedEventListener
              )
            ).not.toThrow();
            expect(() => entity.emitEventFailed(eventFailedTest)).not.toThrow();
            expect(
              entityServiceParameterEventBusExpectedEventListener
            ).toHaveBeenCalledWith(eventFailedTest);
            entityServiceParameterEventBusExpectedEventListener.mockClear();
            expect(() =>
              entity.unsubscribe(ENTITY_EVENT_NAME, eventFailedExpectedListener)
            ).not.toThrow();
            expect(() => entity.emitEventFailed(eventFailedTest)).not.toThrow();
            expect(
              entityServiceParameterEventBusExpectedEventListener
            ).toHaveBeenCalled();
          });
        });
      });
    }
  );
});
