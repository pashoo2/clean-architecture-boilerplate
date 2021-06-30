import {
  IAggregateRootImplementation,
  TAggregateTypeMain,
} from 'src/aggregates/interfaces/index';
import {TIdentityValueObject} from 'src/valueObjects/interfaces/index';

export interface ICompareAggregatesTypesUtility {
  (
    firstAggregate: TAggregateTypeMain,
    secondAggregate: TAggregateTypeMain
  ): boolean;
}

export interface ICompareAggregatesUtility {
  (
    firstAggregate: IAggregateRootImplementation<
      TIdentityValueObject,
      TAggregateTypeMain,
      any
    >,
    secondAggregate: IAggregateRootImplementation<
      TIdentityValueObject,
      TAggregateTypeMain,
      any
    >
  ): boolean;
}
