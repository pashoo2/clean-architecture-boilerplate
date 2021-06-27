import {IAggregateRoot, TAggregateType} from 'src/aggregates/interfaces/index';
import {TIdentityValueObject} from 'src/valueObjects/interfaces/index';

export interface ICompareAggregatesTypesUtility {
  (firstAggregate: TAggregateType, secondAggregate: TAggregateType): boolean;
}

export interface ICompareAggregatesUtility {
  (
    firstAggregate: IAggregateRoot<TIdentityValueObject, TAggregateType, any>,
    secondAggregate: IAggregateRoot<TIdentityValueObject, TAggregateType, any>
  ): boolean;
}
