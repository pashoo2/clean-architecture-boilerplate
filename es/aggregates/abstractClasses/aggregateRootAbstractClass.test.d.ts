import { TAggregateRootImplementation, IBaseAggregateRootEventsList, IBaseAggregateRootParameters, IBaseAggregateRootServices } from '../../aggregates/interfaces';
import { TDomainEventFailedNameForDomainEventName } from '../../events/interfaces';
import { Constructor } from '../../interfaces/classes';
import { getDomainEntityEventMock } from '../../__mock__/domainEvents/domainEvents.mock';
import { MultipleIdentityValueObjectClassWithComparisonMock, SimpleIdentityValueObjectClassWithComparisonMock } from '../../__mock__/valueObjects.mock';
export declare type TAggregateTestClassEventsList = IBaseAggregateRootEventsList<MultipleIdentityValueObjectClassWithComparisonMock | SimpleIdentityValueObjectClassWithComparisonMock, any> & {
    [eventName: string]: ReturnType<typeof getDomainEntityEventMock>;
};
export interface IRunAggregateTestsParameters<BA extends Constructor<TAggregateRootImplementation<any, any, TAggregateTestClassEventsList>, [
    Params,
    Services
]> = Constructor<TAggregateRootImplementation<any, any, TAggregateTestClassEventsList>, [
    any,
    any
]>, EVName extends keyof TAggregateTestClassEventsList = keyof TAggregateTestClassEventsList, ET extends string = string, Params extends IBaseAggregateRootParameters<any> = IBaseAggregateRootParameters<any>, Services extends IBaseAggregateRootServices<any> = IBaseAggregateRootServices<any>> {
    aggregate: InstanceType<BA>;
    AggregateClass: BA;
    aggregateUniqueIdentifier: MultipleIdentityValueObjectClassWithComparisonMock | SimpleIdentityValueObjectClassWithComparisonMock;
    aggregateType: ET;
    isDeleted: boolean;
    parameters: Params;
    services: Services;
    aggregateEventName: EVName extends string ? EVName : never;
    aggregateEventFailedName: TDomainEventFailedNameForDomainEventName<EVName extends string ? EVName : never>;
}
export declare function runAggregateTests(getParameters: () => IRunAggregateTestsParameters): void;
