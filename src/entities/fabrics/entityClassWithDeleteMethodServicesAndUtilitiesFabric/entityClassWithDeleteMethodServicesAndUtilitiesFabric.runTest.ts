import {BaseEntity} from '@root/entities/abstractClasses';
import {IRunEntityTestsParameters} from '@root/entities/abstractClasses/baseEntity/baseEntity.test';
import {IBaseEntityAbstractClassImplementationUtitlities} from '@root/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {runTestEntityWithDeleteMethod} from '@root/entities/fabrics/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric.test';
import {entityClassWithDeleteMethodServicesAndUtilitiesFabric} from '@root/entities/fabrics/entityClassWithDeleteMethodServicesAndUtilitiesFabric/entityClassWithDeleteMethodServicesAndUtilitiesFabric';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntity,
  IEntityFabricParameters,
  IEntityImplementationWithDeleteMethod,
} from '@root/entities/interfaces';
import {TDomainEventFailedNameForDomainEventName} from '@root/events/interfaces';
import {TPickTransferableProperties} from '@root/interfaces';
import {Constructor} from '@root/interfaces/classes';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';
import {ENTITY_TYPE_STUB} from '@root/__mock__/entityType.stub';
import {getMockDomainEventBus} from '@root/__mock__/services/domainEventsBus.mock';
import {serviceGeneratorIdentifierUnique} from '@root/__mock__/services/identifiers.mock';
import {
  MultipleIdentityValueObjectClassWithComparisonMock,
  SimpleIdentityValueObjectClassWithComparisonMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from '@root/__mock__/valueObjects.mock';
import {createAndInitializeEntity} from '../../utilities/implementations';

export function runTestEntityClassWithDeleteMethodServicesAndUtilitiesFabric<
  Id extends TIdentityValueObject,
  Type extends typeof ENTITY_TYPE_STUB,
  E extends IBaseEntityEventsList<Id, Type>
>(
  entityClassFabricWithServicesAndUtilities: (
    parameters: IEntityFabricParameters<Id, Type>,
    services: IBaseEntityServices<E>,
    utilities: IBaseEntityAbstractClassImplementationUtitlities<Id, Type>
  ) => Constructor<
    IEntityImplementationWithDeleteMethod<Id, Type, E>,
    [IBaseEntityParameters<Id>]
  >,
  testName = ''
): void {
  describe(testName, () => {
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
          const entityBaseEntity = createAndInitializeEntity(
            BaseEntityTestClass,
            parameters,
            services
          );

          const utilities: IBaseEntityAbstractClassImplementationUtitlities<
            any,
            any
          > = {
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
                  } as unknown as TPickTransferableProperties<T>;
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

            const entity = createAndInitializeEntity(
              EntityTestClass,
              parameters
            );

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
}
