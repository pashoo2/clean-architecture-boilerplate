import { IAggregateRoot } from '../../aggregates/interfaces';
import { TAggregateRootImplementation, IBaseAggregateRootEventsList, IBaseAggregateRootParameters, IBaseAggregateRootServices } from '../../aggregates/interfaces/aggregateRoot';
import { IEntity } from '../../entities/interfaces';
import { TEntityImplementationConstructorParametersFull, TEntityImplementationConstructorParametersRawFull } from '../../entities/interfaces/entityFabric';
import { ICompareEntitiesIdentities, ICompareEntitiesTypes } from '../../entities/utilities/interfaces';
import { OmitNeverProps, TPickReadOnlyProperties, TPickTransferableProperties } from '../../interfaces';
import { Constructor } from '../../interfaces/classes';
import { TIdentityValueObject } from '../../valueObjects/interfaces';
export interface IValidateAggregate<Id extends TIdentityValueObject, Type extends string, Instance extends TAggregateRootImplementation<Id, Type, any> = TAggregateRootImplementation<Id, Type, any>> {
    (aggregateRoot: Instance): void;
}
export interface IGetTransferablePropertiesOfAggregateRoot<Id extends TIdentityValueObject, Type extends string, Instance extends TAggregateRootImplementation<Id, Type, any> = TAggregateRootImplementation<Id, Type, any>> {
    (aggregateRoot: Instance): TPickTransferableProperties<Instance>;
}
export interface IAggregateRootClassFabricParameters<Id extends TIdentityValueObject, Type extends string, E extends IBaseAggregateRootEventsList<Id, Type>, Instance extends TAggregateRootImplementation<Id, Type, E> = TAggregateRootImplementation<Id, Type, E>> {
    type: Type;
    getServices: () => IBaseAggregateRootServices<E>;
    validateInstance: IValidateAggregate<Id, Type, Instance>;
    getTransferableProps: IGetTransferablePropertiesOfAggregateRoot<Id, Type, Instance>;
    compareEntitiesTypes: ICompareEntitiesTypes<Type>;
    compareEntitiesIdentities: ICompareEntitiesIdentities<Id>;
}
export interface IAggregateRootClassFabric<Id extends TIdentityValueObject, Type extends string, E extends IBaseAggregateRootEventsList<Id, Type>> {
    (parameters: IAggregateRootClassFabricParameters<Id, Type, E>): Constructor<TAggregateRootImplementation<Id, Type, E>, [
        IBaseAggregateRootParameters<Id>
    ]>;
}
export declare type TPickReadonlyPropsWithEntities<AggregateRoot extends IAggregateRoot<Id, Type>, Id extends TIdentityValueObject = TIdentityValueObject, Type extends string = string> = OmitNeverProps<{
    [K in TPickReadOnlyProperties<AggregateRoot>]: AggregateRoot[K] extends IEntity<TIdentityValueObject, string> ? AggregateRoot[K] : never;
}>;
export declare type TAggregateImplementationConstructorParametersFull<AggregateRoot extends IAggregateRoot<Id, Type>, Id extends TIdentityValueObject = TIdentityValueObject, Type extends string = string> = Omit<TEntityImplementationConstructorParametersFull<AggregateRoot>, keyof TPickReadonlyPropsWithEntities<AggregateRoot, Id, Type>> & TPickReadonlyPropsWithEntities<AggregateRoot, Id, Type>;
export declare type TAggregateImplementationConstructorParametersRawFull<AggregateRoot extends IAggregateRoot<Id, Type>, Id extends TIdentityValueObject = TIdentityValueObject, Type extends string = string> = Omit<TEntityImplementationConstructorParametersRawFull<AggregateRoot>, keyof TPickReadonlyPropsWithEntities<AggregateRoot, Id, Type>> & TPickReadonlyPropsWithEntities<AggregateRoot, Id, Type>;
/**
 * A constructor of an instance of the entity, which doesn't require
 * services as a parameter
 */
export declare type TAggregateRootImplementationConstructor<Id extends TIdentityValueObject, Type extends string, E extends IBaseAggregateRootEventsList<Id, Type>, AggregateRoot extends IAggregateRoot<Id, Type> = IAggregateRoot<Id, Type>, AggregateRootImplementation extends TAggregateRootImplementation<Id, Type, E, AggregateRoot> = TAggregateRootImplementation<Id, Type, E, AggregateRoot>, ConstructorParameters extends TAggregateImplementationConstructorParametersFull<AggregateRoot> = TAggregateImplementationConstructorParametersFull<AggregateRoot>> = Constructor<AggregateRootImplementation, [ConstructorParameters]>;
/**
 * A constructor of an instance of the entity, which doesn't require
 * services as a parameter
 */
export declare type TAggregateRootImplementationConstructorByRawDataNoServices<Id extends TIdentityValueObject, Type extends string, E extends IBaseAggregateRootEventsList<Id, Type>, AggregateRoot extends IAggregateRoot<Id, Type> = IAggregateRoot<Id, Type>, AggregateRootImplementation extends TAggregateRootImplementation<Id, Type, E, AggregateRoot> = TAggregateRootImplementation<Id, Type, E, AggregateRoot>, ConstructorParameters extends TAggregateImplementationConstructorParametersRawFull<AggregateRoot> = TAggregateImplementationConstructorParametersRawFull<AggregateRoot>> = Constructor<AggregateRootImplementation, [ConstructorParameters]>;
