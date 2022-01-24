import { IEntity, TEntityImplementation } from '../../entities/interfaces/entity';
import { TIdentityValueObject } from '../../valueObjects/interfaces/identityValueObject';
import { IBaseEntityParameters, IBaseEntityServices, IBaseEntityEventsList } from '../../entities/interfaces/baseEntity';
import { AGGREGATE_TYPE_PREFIX } from '../../aggregates/constants/aggregateType';
import { TPickTransferableProperties } from '../../interfaces';
export declare type TAggregateTypeMain<T extends string = string> = `${typeof AGGREGATE_TYPE_PREFIX}__${T}`;
export interface IBaseAggregateRootParameters<Id extends TIdentityValueObject> extends IBaseEntityParameters<Id> {
    isDeleted: boolean;
}
export interface IBaseAggregateRootEventsList<Id extends TIdentityValueObject, Type extends string> extends IBaseEntityEventsList<Id, Type> {
}
export interface IBaseAggregateRootServices<E extends IBaseAggregateRootEventsList<TIdentityValueObject, string>> extends IBaseEntityServices<E> {
}
export interface IAggregateRoot<Id extends TIdentityValueObject, Type extends string> extends IEntity<Id, Type> {
}
export interface IAggregateRootImplementationMethods {
    equalsTo(anotherAggregate: IAggregateRoot<TIdentityValueObject, string>): boolean;
    getTransferableProps(): TPickTransferableProperties<this>;
    delete(): void;
}
export declare type TAggregateRootImplementation<Id extends TIdentityValueObject, Type extends string, E extends IBaseAggregateRootEventsList<Id, Type> = IBaseAggregateRootEventsList<Id, Type>, Aggregate extends IAggregateRoot<Id, Type> = IAggregateRoot<Id, Type>> = Aggregate & TEntityImplementation<Id, Type, E> & IAggregateRootImplementationMethods;
