import {IBaseAggregateRootEventsList} from 'src/aggregates/interfaces/aggregateRoot';
import {BaseAggregateRootAbstractClass} from 'src/aggregates/abstractClasses/aggregateRootAbstractClass';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export abstract class BaseAggregateRoot<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseAggregateRootEventsList<Id, Type>
> extends BaseAggregateRootAbstractClass<Id, Type, E> {
  public delete(): void {
    this._delete();
  }
}
