import {DOMAIN_ENTITY_EVENT_NAME_DELETE} from 'src/constants/domainEvents';
import {
  IRunEntityTestsParameters,
  runEntityTests,
} from 'src/entities/abstractClasses/baseEntity/baseEntity.test';
import {entityClassWithDeleteMethodFabric} from 'src/entities/classes/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric';
import {
  IEntity,
  IEntityImplementationWithDeleteMethod,
} from 'src/entities/interfaces';
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
          class EntityTestClass extends entityClassWithDeleteMethodFabric({
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
          }) {}

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
            EntityClass: EntityTestClass,
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

        describe('"$delete" method', () => {
          let entity: IEntityImplementationWithDeleteMethod<
            any,
            typeof ENTITY_TYPE,
            any
          >;
          let services: IRunEntityTestsParameters['services'];
          let parameters: IRunEntityTestsParameters['parameters'];

          beforeEach(() => {
            const testsParams = getTestsParams();
            entity =
              testsParams.entity as IEntityImplementationWithDeleteMethod<
                any,
                typeof ENTITY_TYPE,
                any
              >;
            services = testsParams.services;
            parameters = testsParams.parameters;
          });

          it('Should have "$delete" method', () => {
            expect(typeof entity.$delete === 'function').toBe(true);
          });
          it('Should mark the entity as deleted', () => {
            expect(() => entity.$delete()).not.toThrow();
            expect(entity.isDeleted).toBe(true);
          });
          it('Should emit "DELETE" event if the entity has not been deleted previously', () => {
            const listenerDeleteEvents = jest.fn();
            (services.domainEventBus as any).subscribe(
              DOMAIN_ENTITY_EVENT_NAME_DELETE,
              listenerDeleteEvents
            );
            expect(() => entity.$delete()).not.toThrow();
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
            expect(() => entity.$delete()).not.toThrow();
            expect(listenerDeleteEvents).not.toHaveBeenCalledWith(
              expect.objectContaining({
                entityId: parameters.id,
                name: DOMAIN_ENTITY_EVENT_NAME_DELETE,
              })
            );
          });
        });
      });
    }
  );
});
