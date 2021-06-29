import {
  IRunEntityTestsParameters,
  runEntityTests,
} from 'src/entities/abstractClasses/baseEntity/baseEntity.test';
import {ENTITY_TYPE_PREFIX} from 'src/entities/constants/entityType';
import {entityClassFabricWithServices} from 'src/entities/fabrics/entityClassFabricWithServices/entityClassFabricWithServices';
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

describe('entityClassFabricWithServices', () => {
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
          const services = {
            domainEventBus: getMockDomainEventBus(),
            generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
          };
          class EntityTestClass extends entityClassFabricWithServices(
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
            services
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

        runEntityTests(getTestsParams);
      });
    }
  );
});
