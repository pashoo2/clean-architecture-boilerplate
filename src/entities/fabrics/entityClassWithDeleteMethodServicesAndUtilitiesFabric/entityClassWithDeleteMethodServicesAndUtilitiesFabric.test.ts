import {BaseEntity} from 'src/entities/abstractClasses';
import {IRunEntityTestsParameters} from 'src/entities/abstractClasses/baseEntity/baseEntity.test';
import {IBaseEntityAbstractClassImplementationUtitlities} from 'src/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {runTestEntityWithDeleteMethod} from 'src/entities/fabrics/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric.test';
import {entityClassWithDeleteMethodServicesAndUtilitiesFabric} from 'src/entities/fabrics/entityClassWithDeleteMethodServicesAndUtilitiesFabric/entityClassWithDeleteMethodServicesAndUtilitiesFabric';
import {IEntity} from 'src/entities/interfaces';
import {TDomainEventFailedNameForDomainEventName} from 'src/events/interfaces';
import {TPickTransferableProperties} from 'src/interfaces';
import {ENTITY_TYPE_STUB} from 'src/__mock__/entityType.stub';
import {getMockDomainEventBus} from 'src/__mock__/services/domainEventsBus.mock';
import {serviceGeneratorIdentifierUnique} from 'src/__mock__/services/identifiers.mock';
import {
  MultipleIdentityValueObjectClassWithComparisonMock,
  SimpleIdentityValueObjectClassWithComparisonMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from 'src/__mock__/valueObjects.mock';

describe('entityClassWithDeleteMethodServicesAndUtilitiesFabric', () => {
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
          domainEventBus: getMockDomainEventBus(),
          generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
        };

        class BaseEntityTestClass extends BaseEntity<
          | MultipleIdentityValueObjectClassWithComparisonMock
          | SimpleIdentityValueObjectClassWithComparisonMock,
          any,
          any
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
          class EntityTestClass extends entityClassWithDeleteMethodServicesAndUtilitiesFabric(
            {
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
            },
            services,
            utilities
          ) {}

          const parameters = {
            id: entityUniqueIdentifier,
            isDeleted,
          };

          const entity = new EntityTestClass(parameters);

          return {
            EntityClass: EntityTestClass,
            entity,
            entityEventFailedName: ENTITY_EVENT_FAILED_NAME,
            entityEventName: ENTITY_EVENT_NAME,
            entityType: ENTITY_TYPE_STUB,
            entityUniqueIdentifier,
            isDeleted,
            parameters,
            services,
          } as unknown as IRunEntityTestsParameters;
        }

        runTestEntityWithDeleteMethod(getTestsParams);

        afterAll(() => {
          expect(utilities.compareEntitiesIdentities).toBeCalled();
          expect(utilities.compareEntitiesTypes).toBeCalled();
        });
      });
    }
  );
});
