import {
  IAggregateRoot,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
  TAggregateType,
} from 'src/aggregates/interfaces/aggregateRoot';
import {TPickTransferableProperties} from 'src/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface IValidateAggregate<
  Id extends TIdentityValueObject,
  Type extends TAggregateType
> {
  (aggregateRoot: IAggregateRoot<Id, Type, any>): void;
}

export interface IGetTransferablePropertiesOfAggregateRoot<
  Id extends TIdentityValueObject,
  Type extends TAggregateType
> {
  <T extends IAggregateRoot<Id, Type, any>>(
    aggregateRoot: T
  ): TPickTransferableProperties<T>;
}

export interface IAggregateRootFabricParameters<
  Id extends TIdentityValueObject,
  Type extends TAggregateType
> {
  type: Type;
  validateInstance: IValidateAggregate<Id, Type>;
  getTransferableProps: IGetTransferablePropertiesOfAggregateRoot<Id, Type>;
}

export interface IAggregateRootClassFabric<
  Id extends TIdentityValueObject,
  Type extends TAggregateType,
  E extends IBaseAggregateRootEventsList<Id, Type>
> {
  (parameters: IAggregateRootFabricParameters<Id, Type>): Constructor<
    IAggregateRoot<Id, Type, E>,
    [IBaseAggregateRootParameters<Id>, IBaseAggregateRootServices<E>]
  >;
}
