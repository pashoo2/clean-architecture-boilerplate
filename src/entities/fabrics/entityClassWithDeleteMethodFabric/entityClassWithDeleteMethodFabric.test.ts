import {DOMAIN_ENTITY_EVENT_NAME_DELETE} from '@root/constants/domainEvents';
import {
  IRunEntityTestsParameters,
  runEntityTests,
} from '@root/entities/abstractClasses/baseEntity/baseEntity.test';
import {entityClassWithDeleteMethodFabric} from '@root/entities/fabrics/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric';
import {
  IBaseEntityEventsList,
  IEntity,
  IEntityImplementationWithDeleteMethod,
  TEntityTypeMain,
} from '@root/entities/interfaces';
import {TDomainEventFailedNameForDomainEventName} from '@root/events/interfaces';
import {TPickTransferableProperties} from '@root/interfaces';
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

export interface IRunTestEntityWithDeleteMethod
  extends IRunEntityTestsParameters {
  deleteMethodName?: string;
}

export function runTestEntityWithDeleteMethod<
  P extends IRunTestEntityWithDeleteMethod
>(getTestsParams: () => P) {
  runEntityTests(getTestsParams);

  describe('"$delete" method', () => {
    let entity: IEntityImplementationWithDeleteMethod<
      TIdentityValueObject,
      TEntityTypeMain,
      IBaseEntityEventsList<TIdentityValueObject, TEntityTypeMain>
    >;
    let services: P['services'];
    let parameters: P['parameters'];
    let deleteMethodName: P['deleteMethodName'];

    beforeEach(() => {
      const testsParams = getTestsParams();
      entity = testsParams.entity as IEntityImplementationWithDeleteMethod<
        any,
        any,
        any
      >;
      services = testsParams.services;
      parameters = testsParams.parameters;
      deleteMethodName = testsParams.deleteMethodName ?? '$delete';
    });

    it('Should have "delete" method', () => {
      expect(typeof (entity as any)[deleteMethodName] === 'function').toBe(
        true
      );
    });
    it('Should mark the entity as deleted', () => {
      expect(() => (entity as any)[deleteMethodName]()).not.toThrow();
      expect(entity.isDeleted).toBe(true);
    });
    it('Should emit "DELETE" event if the entity has not been deleted previously', () => {
      const listenerDeleteEvents = jest.fn();
      (services.domainEventBus as any).subscribe(
        DOMAIN_ENTITY_EVENT_NAME_DELETE,
        listenerDeleteEvents
      );
      expect(() => (entity as any)[deleteMethodName]()).not.toThrow();
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
      expect(() => (entity as any)[deleteMethodName]()).not.toThrow();
      expect(listenerDeleteEvents).not.toHaveBeenCalledWith(
        expect.objectContaining({
          entityId: parameters.id,
          name: DOMAIN_ENTITY_EVENT_NAME_DELETE,
        })
      );
    });
  });
}

describe('entityClassWithDeleteMethodFabric', () => {
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
            entityType: ENTITY_TYPE_STUB,
            entityUniqueIdentifier,
            isDeleted,
            parameters,
            services,
          } as unknown as IRunEntityTestsParameters;
        }

        runTestEntityWithDeleteMethod(getTestsParams);
      });
    }
  );
});
