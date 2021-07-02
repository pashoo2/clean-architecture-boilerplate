import {BaseAggregateRootAbstractClass} from '@root/aggregates/abstractClasses/aggregateRootAbstractClass';
import {
  IAggregateRootImplementation,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
} from '@root/aggregates/interfaces';
import {runTestEntityWithDeleteMethod} from '@root/entities/fabrics/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric.test';
import {TDomainEventFailedNameForDomainEventName} from '@root/events/interfaces';
import {TPickTransferableProperties} from '@root/interfaces';
import {Constructor} from '@root/interfaces/classes';
import {getDomainEntityEventMock} from '@root/__mock__/domainEvents/domainEvents.mock';
import {ENTITY_TYPE_STUB} from '@root/__mock__/entityType.stub';
import {getMockDomainEventBus} from '@root/__mock__/services/domainEventsBus.mock';
import {serviceGeneratorIdentifierUnique} from '@root/__mock__/services/identifiers.mock';
import {
  MultipleIdentityValueObjectClassWithComparisonMock,
  SimpleIdentityValueObjectClassWithComparisonMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from '@root/__mock__/valueObjects.mock';

export type TAggregateTestClassEventsList = IBaseAggregateRootEventsList<
  | MultipleIdentityValueObjectClassWithComparisonMock
  | SimpleIdentityValueObjectClassWithComparisonMock,
  any
> & {
  [eventName: string]: ReturnType<typeof getDomainEntityEventMock>;
};

export interface IRunAggregateTestsParameters<
  BA extends Constructor<
    IAggregateRootImplementation<any, any, TAggregateTestClassEventsList>,
    [Params, Services]
  > = Constructor<
    IAggregateRootImplementation<any, any, TAggregateTestClassEventsList>,
    [any, any]
  >,
  EVName extends keyof TAggregateTestClassEventsList = keyof TAggregateTestClassEventsList,
  ET extends string = string,
  Params extends IBaseAggregateRootParameters<any> = IBaseAggregateRootParameters<any>,
  Services extends IBaseAggregateRootServices<any> = IBaseAggregateRootServices<any>
> {
  aggregate: InstanceType<BA>;
  AggregateClass: BA;
  aggregateUniqueIdentifier:
    | MultipleIdentityValueObjectClassWithComparisonMock
    | SimpleIdentityValueObjectClassWithComparisonMock;
  aggregateType: ET;
  isDeleted: boolean;
  parameters: Params;
  services: Services;
  aggregateEventName: EVName extends string ? EVName : never;
  aggregateEventFailedName: TDomainEventFailedNameForDomainEventName<
    EVName extends string ? EVName : never
  >;
}

export function runAggregateTests(
  getParameters: () => IRunAggregateTestsParameters
): void {
  const getRunEntityTests = (): ReturnType<
    Parameters<typeof runTestEntityWithDeleteMethod>[0]
  > => {
    const {
      aggregate: entity,
      AggregateClass: EntityClass,
      aggregateUniqueIdentifier: entityUniqueIdentifier,
      aggregateType: entityType,
      isDeleted,
      parameters,
      services,
      aggregateEventName: entityEventName,
      aggregateEventFailedName: entityEventFailedName,
    } = getParameters();

    return {
      entity,
      EntityClass,
      entityEventFailedName,
      entityEventName,
      entityType,
      entityUniqueIdentifier,
      isDeleted,
      parameters,
      services,
      deleteMethodName: 'delete',
    };
  };

  runTestEntityWithDeleteMethod(getRunEntityTests);
}

describe('BaseAggregateRootAbstractClass', () => {
  const AGGREGATE_EVENT_NAME = 'AGGREGATE_EVENT_NAME' as const;
  const AGGREGATE_EVENT_FAILED_NAME: TDomainEventFailedNameForDomainEventName<
    typeof AGGREGATE_EVENT_NAME
  > = `failed::${AGGREGATE_EVENT_NAME}`;

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
    aggregateUniqueIdentifier => {
      describe.each([true, false])('Is deleted %p', isDeleted => {
        function getTestsParams(): IRunAggregateTestsParameters {
          const parameters = {
            id: aggregateUniqueIdentifier,
            isDeleted,
          };
          const services = {
            domainEventBus:
              getMockDomainEventBus<TAggregateTestClassEventsList>(),
            generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
          };

          class AggregateRootTestClass extends BaseAggregateRootAbstractClass<
            | MultipleIdentityValueObjectClassWithComparisonMock
            | SimpleIdentityValueObjectClassWithComparisonMock,
            any,
            TAggregateTestClassEventsList
          > {
            protected _type = ENTITY_TYPE_STUB;

            protected _getTransferableProps<T extends this>(
              this: T
            ): TPickTransferableProperties<T> {
              const transferableObject: TPickTransferableProperties<AggregateRootTestClass> =
                {
                  id: this.id,
                  isDeleted: this.isDeleted,
                  type: this.type,
                };
              return transferableObject as TPickTransferableProperties<T>;
            }

            protected _validate() {}
          }

          const aggregate = new AggregateRootTestClass(parameters, services);

          return {
            AggregateClass: AggregateRootTestClass,
            aggregate,
            aggregateEventFailedName: AGGREGATE_EVENT_FAILED_NAME,
            aggregateEventName: AGGREGATE_EVENT_NAME,
            aggregateType: ENTITY_TYPE_STUB,
            aggregateUniqueIdentifier,
            isDeleted,
            parameters,
            services,
          };
        }

        runAggregateTests(getTestsParams);
      });
    }
  );
});
