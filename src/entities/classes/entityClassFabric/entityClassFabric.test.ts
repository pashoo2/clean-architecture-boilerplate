import {
  IRunEntityTestsParameters,
  runEntityTests,
} from 'src/entities/abstractClasses/baseEntity/baseEntity.test';
import {entityClassFabric} from 'src/entities/classes/entityClassFabric/entityClassFabric';
import {IEntity} from 'src/entities/interfaces';
import {TDomainEventFailedNameForDomainEventName} from 'src/events/interfaces';
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
        function getTestsParams(): IRunEntityTestsParameters {
          const EntityTestClass = entityClassFabric({
            type: ENTITY_TYPE,
            getTransferableProps<T extends IEntity<any, typeof ENTITY_TYPE>>(
              instance: T
            ): TPickTransferableProperties<T> {
              return {
                id: instance.id,
                isDeleted: instance.isDeleted,
                type: instance.type,
              } as TPickTransferableProperties<T>;
            },
            validateInstance() {},
          });

          const parameters = {
            id: entityUniqueIdentifier,
            isDeleted,
          };
          const services = {
            domainEventBus: getMockDomainEventBus(),
            generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
          };

          const entity = new EntityTestClass(parameters, services);

          return {
            EntityTestClass,
            entity,
            entityEventFailedName: ENTITY_EVENT_FAILED_NAME,
            entityEventName: ENTITY_EVENT_NAME,
            entityType: ENTITY_TYPE,
            entityUniqueIdentifier,
            isDeleted,
            parameters,
            services,
          } as unknown as IRunEntityTestsParameters;
        }

        runEntityTests(getTestsParams);
      });
    }
  );
});
