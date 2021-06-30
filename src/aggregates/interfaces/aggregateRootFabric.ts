import {
  IAggregateRoot,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
  TAggregateTypeMain,
} from 'src/aggregates/interfaces/aggregateRoot';
import {TPickTransferableProperties} from 'src/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface IValidateAggregate<
  Id extends TIdentityValueObject,
  Type extends string
> {
  (aggregateRoot: IAggregateRoot<Id, Type, any>): void;
}

export interface IGetTransferablePropertiesOfAggregateRoot<
  Id extends TIdentityValueObject,
  Type extends string
> {
  <T extends IAggregateRoot<Id, Type, any>>(
    aggregateRoot: T
  ): TPickTransferableProperties<T>;
}

export interface IEqualsToAggregate {
  (
    firstAggregate: IAggregateRoot<TIdentityValueObject, string, any>,
    secondAggregate: IAggregateRoot<TIdentityValueObject, string, any>
  ): boolean;
}

export interface IAggregateRootFabricParameters<
  Id extends TIdentityValueObject,
  Type extends string
> {
  type: Type;
  validateInstance: IValidateAggregate<Id, Type>;
  getTransferableProps: IGetTransferablePropertiesOfAggregateRoot<Id, Type>;
}

export interface IAggregateRootClassFabric<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseAggregateRootEventsList<Id, Type>
> {
  (parameters: IAggregateRootFabricParameters<Id, Type>): Constructor<
    IAggregateRoot<Id, Type, E>,
    [IBaseAggregateRootParameters<Id>, IBaseAggregateRootServices<E>]
  >;
}
