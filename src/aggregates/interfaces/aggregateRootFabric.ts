import {
  IAggregateRootImplementation,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
} from '@root/aggregates/interfaces/aggregateRoot';
import {
  ICompareEntitiesIdentities,
  ICompareEntitiesTypes,
} from '@root/entities/utilities/interfaces';
import {TPickTransferableProperties} from '@root/interfaces';
import {Constructor} from '@root/interfaces/classes';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export interface IValidateAggregate<
  Id extends TIdentityValueObject,
  Type extends string
> {
  (aggregateRoot: IAggregateRootImplementation<Id, Type, any>): void;
}

export interface IGetTransferablePropertiesOfAggregateRoot<
  Id extends TIdentityValueObject,
  Type extends string,
  Instance extends IAggregateRootImplementation<
    Id,
    Type,
    any
  > = IAggregateRootImplementation<Id, Type, any>
> {
  (aggregateRoot: Instance): TPickTransferableProperties<Instance>;
}

export interface IAggregateRootClassFabricParameters<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseAggregateRootEventsList<Id, Type>,
  Instance extends IAggregateRootImplementation<
    Id,
    Type,
    E
  > = IAggregateRootImplementation<Id, Type, E>
> {
  type: Type;
  getServices: () => IBaseAggregateRootServices<E>;
  validateInstance: IValidateAggregate<Id, Type>;
  getTransferableProps: IGetTransferablePropertiesOfAggregateRoot<
    Id,
    Type,
    Instance
  >;
  compareEntitiesTypes: ICompareEntitiesTypes<Type>;
  compareEntitiesIdentities: ICompareEntitiesIdentities<Id>;
}

export interface IAggregateRootClassFabric<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseAggregateRootEventsList<Id, Type>
> {
  (parameters: IAggregateRootClassFabricParameters<Id, Type, E>): Constructor<
    IAggregateRootImplementation<Id, Type, E>,
    [IBaseAggregateRootParameters<Id>]
  >;
}
