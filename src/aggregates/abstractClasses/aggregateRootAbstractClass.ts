import {
  TAggregateRootImplementation,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
} from '@root/aggregates/interfaces/aggregateRoot';
import {BaseEntity} from '@root/entities/abstractClasses';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export abstract class BaseAggregateRootAbstractClass<
    Id extends TIdentityValueObject,
    Type extends string,
    E extends IBaseAggregateRootEventsList<Id, Type>
  >
  extends BaseEntity<Id, Type, E>
  implements TAggregateRootImplementation<Id, Type, E>
{
  public delete(): void {
    this._delete();
  }
}
