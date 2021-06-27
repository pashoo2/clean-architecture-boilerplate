import {IEntityImplementation} from '../../entities/interfaces/entity';
import {TIdentityValueObject} from '../../valueObjects/interfaces/identityValueObject';
import {
  IBaseEntityParameters,
  IBaseEntityServices,
  IBaseEntityEventsList,
} from '../../entities/interfaces/baseEntity';
import {AGGREGATE_TYPE_PREFIX} from 'src/aggregates/constants/aggregateType';
import {TPickTransferableProperties} from 'src/interfaces';

export type TAggregateType<T extends string = string> =
  `${typeof AGGREGATE_TYPE_PREFIX}:${T}`;

export interface IBaseAggregateRootParameters<Id extends TIdentityValueObject>
  extends IBaseEntityParameters<Id> {
  isDeleted: boolean;
}

export interface IBaseAggregateRootEventsList<
  Id extends TIdentityValueObject,
  Type extends TAggregateType
> extends IBaseEntityEventsList<Id, Type> {}

export interface IBaseAggregateRootServices<
  E extends IBaseAggregateRootEventsList<TIdentityValueObject, TAggregateType>
> extends IBaseEntityServices<E> {}

export interface IAggregateRoot<
  Id extends TIdentityValueObject,
  Type extends TAggregateType,
  E extends IBaseAggregateRootEventsList<
    Id,
    Type
  > = IBaseAggregateRootEventsList<Id, Type>
> extends IEntityImplementation<Id, Type, E> {
  equalsTo(anotherEntity: IAggregateRoot<Id, Type, any>): boolean;
  getTransferableProps(): TPickTransferableProperties<this>;
  delete(): void;
}
