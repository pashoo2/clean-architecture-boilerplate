import {BaseEntity} from 'src/entities/abstractClasses/baseEntity/baseEntity';
import {
  IRunEntityTestsParameters,
  runEntityTests,
} from 'src/entities/abstractClasses/baseEntity/baseEntity.test';
import {
  BaseEntityWithUtilities,
  IBaseEntityAbstractClassImplementationUtitlities,
} from 'src/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {TBaseEntityEventsListCommonEvents} from 'src/entities/interfaces';
import {TDomainEventFailedNameForDomainEventName} from 'src/events/interfaces';
import {TPickTransferableProperties} from 'src/interfaces/index';
import {getDomainEntityEventMock} from 'src/__mock__/domainEvents/domainEvents.mock';
import {ENTITY_TYPE_STUB} from 'src/__mock__/entityType.stub';
import {getMockDomainEventBus} from 'src/__mock__/services/domainEventsBus.mock';
import {serviceGeneratorIdentifierUnique} from 'src/__mock__/services/identifiers.mock';
import {
  MultipleIdentityValueObjectClassWithComparisonMock,
  SimpleIdentityValueObjectClassWithComparisonMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from 'src/__mock__/valueObjects.mock';

type TEntityTestClassEventsList = TBaseEntityEventsListCommonEvents<
  | MultipleIdentityValueObjectClassWithComparisonMock
  | SimpleIdentityValueObjectClassWithComparisonMock,
  any
> & {
  [eventName: string]: ReturnType<typeof getDomainEntityEventMock>;
};

describe('BaseEntity class', () => {
  const ENTITY_EVENT_NAME = 'ENTITY_EVENT_NAME' as const;
  const ENTITY_EVENT_FAILED_NAME: TDomainEventFailedNameForDomainEventName<
    typeof ENTITY_EVENT_NAME
  > = `failed::${ENTITY_EVENT_NAME}`;

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
        const parameters = {
          id: entityUniqueIdentifier,
          isDeleted,
        };
        const services = {
          domainEventBus: getMockDomainEventBus<TEntityTestClassEventsList>(),
          generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
        };

        class BaseEntityTestClass extends BaseEntity<
          | MultipleIdentityValueObjectClassWithComparisonMock
          | SimpleIdentityValueObjectClassWithComparisonMock,
          any,
          TEntityTestClassEventsList
        > {
          protected _type = ENTITY_TYPE_STUB;

          protected _getTransferableProps<T extends this>(
            this: T
          ): TPickTransferableProperties<T> {
            return {} as any;
          }

          protected _validate() {}
          public compareEntitiesIdentities(...args: any[]) {
            return this._compareEntitiesIdentities(args[0], args[1]);
          }
          public compareEntitiesTypes(...args: any[]) {
            return this._compareEntitiesTypes(args[0], args[1]);
          }
        }
        const entityBaseEntity = new BaseEntityTestClass(parameters, services);

        const utilities: IBaseEntityAbstractClassImplementationUtitlities = {
          compareEntitiesTypes: jest.fn((...args: any[]) => {
            return entityBaseEntity.compareEntitiesTypes(
              args[0],
              args[1]
            ) as any;
          }),
          compareEntitiesIdentities: jest.fn((...args: any[]) => {
            return entityBaseEntity.compareEntitiesIdentities(
              args[0],
              args[1]
            ) as any;
          }),
        };

        function getTestsParams(): IRunEntityTestsParameters {
          class EntityTestClass extends BaseEntityWithUtilities<
            | MultipleIdentityValueObjectClassWithComparisonMock
            | SimpleIdentityValueObjectClassWithComparisonMock,
            any,
            TEntityTestClassEventsList
          > {
            protected _type = ENTITY_TYPE_STUB;

            protected _getTransferableProps<T extends this>(
              this: T
            ): TPickTransferableProperties<T> {
              const transferableObject: TPickTransferableProperties<EntityTestClass> =
                {
                  id: this.id,
                  isDeleted: this.isDeleted,
                  type: this.type,
                };
              return transferableObject as TPickTransferableProperties<T>;
            }

            protected _validate() {}
          }

          class EntityTestClassNoUtilities extends EntityTestClass {
            constructor(...args: any[]) {
              super(args[0], args[1], utilities);
            }
          }

          const entity = new EntityTestClass(parameters, services, utilities);

          return {
            EntityClass: EntityTestClassNoUtilities,
            entity,
            entityEventFailedName: ENTITY_EVENT_FAILED_NAME,
            entityEventName: ENTITY_EVENT_NAME,
            entityType: ENTITY_TYPE_STUB,
            entityUniqueIdentifier,
            isDeleted,
            parameters,
            services,
          };
        }

        runEntityTests(getTestsParams);

        afterAll(() => {
          expect(utilities.compareEntitiesIdentities).toBeCalled();
          expect(utilities.compareEntitiesTypes).toBeCalled();
        });
      });
    }
  );
});
