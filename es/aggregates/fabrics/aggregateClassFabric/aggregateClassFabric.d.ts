import { TAggregateRootImplementation, IBaseAggregateRootEventsList, IBaseAggregateRootParameters, TAggregateTypeMain } from '../../../aggregates/interfaces';
import { IAggregateRootClassFabricParameters } from '../../../aggregates/interfaces/aggregateRootFabric';
import { Constructor } from '../../../interfaces/classes';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare function aggregateClassFabric<Id extends TIdentityValueObject, Type extends TAggregateTypeMain, E extends IBaseAggregateRootEventsList<Id, Type> = IBaseAggregateRootEventsList<Id, Type>, Instance extends TAggregateRootImplementation<Id, Type, E> = TAggregateRootImplementation<Id, Type, E>, Params extends IBaseAggregateRootParameters<Id> = IBaseAggregateRootParameters<Id>>({ type, getServices, validateInstance, getTransferableProps, compareEntitiesTypes, compareEntitiesIdentities, }: IAggregateRootClassFabricParameters<Id, Type, E, Instance>): Constructor<Instance, [
    Params
]>;
