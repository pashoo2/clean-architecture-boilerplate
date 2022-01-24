import { TBaseEntityEventsListCommonEvents, IBaseEntityServices, IBaseEntityParameters, TEntityImplementation } from '../../../entities/interfaces';
import { TDomainEventFailedNameForDomainEventName } from '../../../events/interfaces';
import { Constructor } from '../../../interfaces/classes';
import { getDomainEntityEventMock } from '../../../__mock__/domainEvents/domainEvents.mock';
import { MultipleIdentityValueObjectClassWithComparisonMock, SimpleIdentityValueObjectClassWithComparisonMock } from '../../../__mock__/valueObjects.mock';
declare type TEntityTestClassEventsList = TBaseEntityEventsListCommonEvents<MultipleIdentityValueObjectClassWithComparisonMock | SimpleIdentityValueObjectClassWithComparisonMock, any> & {
    [eventName: string]: ReturnType<typeof getDomainEntityEventMock>;
};
export interface IRunEntityTestsParameters<BE extends Constructor<TEntityImplementation<any, ET, TEntityTestClassEventsList>, [
    Params,
    Services
]> = Constructor<TEntityImplementation<any, any, TEntityTestClassEventsList>, [
    any,
    any
]>, EVName extends keyof TEntityTestClassEventsList = keyof TEntityTestClassEventsList, ET extends string = string, Params extends IBaseEntityParameters<any> = IBaseEntityParameters<any>, Services extends IBaseEntityServices<any> = IBaseEntityServices<any>> {
    entity: InstanceType<BE>;
    EntityClass: BE;
    entityUniqueIdentifier: MultipleIdentityValueObjectClassWithComparisonMock | SimpleIdentityValueObjectClassWithComparisonMock;
    entityType: ET;
    isDeleted: boolean;
    parameters: Params;
    services: Services;
    entityEventName: EVName extends string ? EVName : never;
    entityEventFailedName: TDomainEventFailedNameForDomainEventName<EVName extends string ? EVName : never>;
}
export declare function runEntityTests<P extends IRunEntityTestsParameters>(getTestsParams: () => P): void;
export {};
