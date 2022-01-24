import {
  IRunEntityTestsParameters,
  runEntityTests,
} from '@root/entities/abstractClasses/baseEntity/baseEntity.test';
import {entityClassFabricWithServices} from '@root/entities/fabrics/entityClassFabricWithServices/entityClassFabricWithServices';
import {IEntity} from '@root/entities/interfaces';
import {TDomainEventFailedNameForDomainEventName} from '@root/events/interfaces';
import {TPickTransferableProperties} from '@root/interfaces';
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
                } as unknown as TPickTransferableProperties<T>;
              },
              validateInstance() {},
            },
            services
          ) {}

          const parameters = {
            id: entityUniqueIdentifier,
            isDeleted,
          };

          const entity = createAndInitializeEntity(EntityTestClass, parameters);

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
