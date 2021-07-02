import {BaseAggregateRootAbstractClass} from '@root/aggregates/abstractClasses';
import {
  IRunAggregateTestsParameters,
  runAggregateTests,
  TAggregateTestClassEventsList,
} from '@root/aggregates/abstractClasses/aggregateRootAbstractClass.test';
import {aggregateClassFabric} from '@root/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric';
import {
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
} from '@root/aggregates/interfaces';
import {
  compareEntitiesIdentitiesUtility,
  compareEntitiesTypesUtility,
} from '@root/entities/utilities/implementations';
import {TDomainEventFailedNameForDomainEventName} from '@root/events/interfaces';
import {TPickTransferableProperties} from '@root/interfaces';
import {AGGREGATE_TYPE_STUB} from '@root/__mock__/entityType.stub';
import {getMockDomainEventBus} from '@root/__mock__/services/domainEventsBus.mock';
import {serviceGeneratorIdentifierUnique} from '@root/__mock__/services/identifiers.mock';
import {
  MultipleIdentityValueObjectClassWithComparisonMock,
  SimpleIdentityValueObjectClassWithComparisonMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from '@root/__mock__/valueObjects.mock';

describe('aggregateClassFabric', () => {
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
        const parameters: IBaseAggregateRootParameters<
          typeof aggregateUniqueIdentifier
        > = {
          id: aggregateUniqueIdentifier,
          isDeleted,
        };
        const services: IBaseAggregateRootServices<TAggregateTestClassEventsList> =
          {
            domainEventBus:
              getMockDomainEventBus<TAggregateTestClassEventsList>(),
            generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
          };
        class BaseAggregateRoot extends BaseAggregateRootAbstractClass<
          typeof aggregateUniqueIdentifier,
          typeof AGGREGATE_TYPE_STUB,
          TAggregateTestClassEventsList
        > {
          protected _type = AGGREGATE_TYPE_STUB;

          protected _getTransferableProps<T extends this>(
            this: T
          ): TPickTransferableProperties<T> {
            const transferableObject: TPickTransferableProperties<BaseAggregateRoot> =
              {
                id: this.id,
                isDeleted: this.isDeleted,
                type: this.type,
              };
            return transferableObject as TPickTransferableProperties<T>;
          }

          protected _validate() {}
        }

        const baseAggregateRootImplementation = new BaseAggregateRoot(
          parameters,
          services
        );

        const validateInstance = jest.fn(() => {});
        const getTransferableProps = jest.fn(() => {
          return baseAggregateRootImplementation.getTransferableProps();
        }) as any;
        const compareEntitiesTypes = jest.fn(compareEntitiesTypesUtility);
        const compareEntitiesIdentities = jest.fn(
          compareEntitiesIdentitiesUtility
        );

        function getTestsParams(): IRunAggregateTestsParameters {
          class AggregateRootTestClass extends aggregateClassFabric({
            type: AGGREGATE_TYPE_STUB,
            services,
            validateInstance,
            getTransferableProps,
            compareEntitiesTypes,
            compareEntitiesIdentities,
          }) {}

          const aggregate = new AggregateRootTestClass(parameters);

          return {
            AggregateClass: AggregateRootTestClass as any,
            aggregate: aggregate as any,
            aggregateEventFailedName: AGGREGATE_EVENT_FAILED_NAME,
            aggregateEventName: AGGREGATE_EVENT_NAME,
            aggregateType: AGGREGATE_TYPE_STUB,
            aggregateUniqueIdentifier,
            isDeleted,
            parameters,
            services,
          };
        }

        runAggregateTests(getTestsParams);

        describe('Parameters passed', () => {
          describe('validateInstance ', () => {
            it('Should not be called in fabric', () => {
              const validateInstanceUtil = jest.fn(() => {});
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance: validateInstanceUtil,
                getTransferableProps,
                compareEntitiesTypes,
                compareEntitiesIdentities,
              }) {}
              expect(validateInstanceUtil).not.toBeCalled();
            });
            it('Should be called in constructor', () => {
              const validateInstanceUtil = jest.fn(() => {});
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance: validateInstanceUtil,
                getTransferableProps,
                compareEntitiesTypes,
                compareEntitiesIdentities,
              }) {}
              expect(validateInstanceUtil).not.toBeCalled();
              expect(
                () => new AggregateRootTestClass(parameters)
              ).not.toThrow();
              expect(validateInstanceUtil).toBeCalled();
            });
            it('Should make a constructor throwing an error if it throws ', () => {
              const validateInstanceUtil = jest.fn(() => {
                throw new Error('Error');
              });
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance: validateInstanceUtil,
                getTransferableProps,
                compareEntitiesTypes,
                compareEntitiesIdentities,
              }) {}
              expect(() => new AggregateRootTestClass(parameters)).toThrow();
            });
          });
          describe('getTransferableProps', () => {
            it('Should not be called by the fabric', () => {
              const getTransferablePropsUtil = jest.fn(() => {}) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps: getTransferablePropsUtil,
                compareEntitiesTypes,
                compareEntitiesIdentities,
              }) {}
              expect(getTransferablePropsUtil).not.toBeCalled();
            });
            it('Should not be called in the instance constructor', () => {
              const getTransferablePropsUtil = jest.fn(() => {}) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps: getTransferablePropsUtil,
                compareEntitiesTypes,
                compareEntitiesIdentities,
              }) {}
              expect(
                () => new AggregateRootTestClass(parameters)
              ).not.toThrow();
              expect(getTransferablePropsUtil).not.toBeCalled();
            });
            it('Should be called by calling the "getTransferableProps" method', () => {
              const getTransferablePropsUtil = jest.fn(() => {}) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps: getTransferablePropsUtil,
                compareEntitiesTypes,
                compareEntitiesIdentities,
              }) {}
              const aggregateInstance = new AggregateRootTestClass(parameters);
              expect(() =>
                aggregateInstance.getTransferableProps()
              ).not.toThrow();
              expect(getTransferablePropsUtil).toBeCalled();
            });
            test('Method "getTransferableProps" should return the same value', () => {
              const expectedValue = 'expectedValue';
              const getTransferablePropsUtil = jest.fn(
                () => expectedValue
              ) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps: getTransferablePropsUtil,
                compareEntitiesTypes,
                compareEntitiesIdentities,
              }) {}
              const aggregateInstance = new AggregateRootTestClass(parameters);
              expect(aggregateInstance.getTransferableProps()).toBe(
                expectedValue as any
              );
            });
          });
          describe('compareEntitiesTypes', () => {
            it('Should not be called by the fabric', () => {
              const compareEntitiesTypesUtil = jest.fn(() => {}) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps,
                compareEntitiesTypes: compareEntitiesTypesUtil,
                compareEntitiesIdentities: () => true,
              }) {}
              expect(compareEntitiesTypesUtil).not.toBeCalled();
            });
            it('Should not be called in the instance constructor', () => {
              const compareEntitiesTypesUtil = jest.fn(() => {}) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps,
                compareEntitiesTypes: compareEntitiesTypesUtil,
                compareEntitiesIdentities: () => true,
              }) {}
              expect(
                () => new AggregateRootTestClass(parameters)
              ).not.toThrow();
              expect(compareEntitiesTypesUtil).not.toBeCalled();
            });
            it('Should be called by calling the "equalsTo" method', () => {
              const compareEntitiesTypesUtil = jest.fn(() => {}) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps,
                compareEntitiesTypes: compareEntitiesTypesUtil,
                compareEntitiesIdentities: () => true,
              }) {}
              const aggregateInstance = new AggregateRootTestClass(parameters);
              expect(() => aggregateInstance.equalsTo({} as any)).not.toThrow();
              expect(compareEntitiesTypesUtil).toBeCalled();
            });
            test('Method "equalsTo" should return false if it return false', () => {
              const expectedValue = false;
              const compareEntitiesTypesUtil = jest.fn(
                () => expectedValue
              ) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps,
                compareEntitiesTypes: compareEntitiesTypesUtil,
                compareEntitiesIdentities: () => true,
              }) {}
              const aggregateInstance = new AggregateRootTestClass(parameters);
              expect(aggregateInstance.equalsTo({} as any)).toBe(
                expectedValue as any
              );
            });
          });
          describe('compareEntitiesIdentities', () => {
            it('Should not be called by the fabric', () => {
              const compareEntitiesIdentitiesUtil = jest.fn(() => {}) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps,
                compareEntitiesTypes: () => true,
                compareEntitiesIdentities: compareEntitiesIdentitiesUtil,
              }) {}
              expect(compareEntitiesIdentitiesUtil).not.toBeCalled();
            });
            it('Should not be called in the instance constructor', () => {
              const compareEntitiesIdentitiesUtil = jest.fn(() => {}) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps,
                compareEntitiesTypes: () => true,
                compareEntitiesIdentities: compareEntitiesIdentitiesUtil,
              }) {}
              expect(
                () => new AggregateRootTestClass(parameters)
              ).not.toThrow();
              expect(compareEntitiesIdentitiesUtil).not.toBeCalled();
            });
            it('Should be called by calling the "equalsTo" method', () => {
              const compareEntitiesIdentitiesUtil = jest.fn(() => {}) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps,
                compareEntitiesTypes: () => true,
                compareEntitiesIdentities: compareEntitiesIdentitiesUtil,
              }) {}
              const aggregateInstance = new AggregateRootTestClass(parameters);
              expect(() => aggregateInstance.equalsTo({} as any)).not.toThrow();
              expect(compareEntitiesIdentitiesUtil).toBeCalled();
            });
            test('Method "equalsTo" should return false if it return false', () => {
              const expectedValue = false;
              const compareEntitiesIdentitiesUtil = jest.fn(
                () => expectedValue
              ) as any;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              class AggregateRootTestClass extends aggregateClassFabric({
                type: AGGREGATE_TYPE_STUB,
                services,
                validateInstance,
                getTransferableProps,
                compareEntitiesTypes: () => true,
                compareEntitiesIdentities: compareEntitiesIdentitiesUtil,
              }) {}
              const aggregateInstance = new AggregateRootTestClass(parameters);
              expect(aggregateInstance.equalsTo({} as any)).toBe(
                expectedValue as any
              );
            });
          });
          test('Method "equalsTo" should return true if both of "compareEntitiesTypes" and "compareEntitiesIdentities" return true', () => {
            const compareEntitiesTypesUtil = jest.fn(() => true) as any;
            const compareEntitiesIdentitiesUtil = jest.fn(() => true) as any;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            class AggregateRootTestClass extends aggregateClassFabric({
              type: AGGREGATE_TYPE_STUB,
              services,
              validateInstance,
              getTransferableProps,
              compareEntitiesTypes: compareEntitiesTypesUtil,
              compareEntitiesIdentities: compareEntitiesIdentitiesUtil,
            }) {}
            const aggregateInstance = new AggregateRootTestClass(parameters);
            expect(aggregateInstance.equalsTo({} as any)).toBe(true);
            expect(compareEntitiesTypesUtil).toBeCalled();
            expect(compareEntitiesTypesUtil).toBeCalled();
          });
        });
      });
    }
  );
});
