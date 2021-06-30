import {IAggregateRoot, TAggregateTypeMain} from 'src/aggregates/interfaces/index';
import {TIdentityValueObject} from 'src/valueObjects/interfaces/index';

export interface ICompareAggregatesTypesUtility {
  (firstAggregate: TAggregateTypeMain, secondAggregate: TAggregateTypeMain): boolean;
}

export interface ICompareAggregatesUtility {
  (
    firstAggregate: IAggregateRoot<TIdentityValueObject, TAggregateTypeMain, any>,
    secondAggregate: IAggregateRoot<TIdentityValueObject, TAggregateTypeMain, any>
  ): boolean;
}
