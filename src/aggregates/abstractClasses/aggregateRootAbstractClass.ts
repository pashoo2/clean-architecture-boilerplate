import {
  IAggregateRootImplementation,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
} from 'src/aggregates/interfaces/aggregateRoot';
import {BaseEntity} from 'src/entities/abstractClasses';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export abstract class BaseAggregateRootAbstractClass<
    Id extends TIdentityValueObject,
    Type extends string,
    E extends IBaseAggregateRootEventsList<Id, Type>
  >
  extends BaseEntity<Id, Type, E>
  implements IAggregateRootImplementation<Id, Type, E>
{
  constructor(
    parameters: IBaseAggregateRootParameters<Id>,
    services: IBaseAggregateRootServices<E>
  ) {
    super(parameters, services);
  }

  public delete(): void {
    this._delete();
  }
}
