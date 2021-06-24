import {
  IAggregateRoot,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
  TAggregateType,
} from 'src/aggregates/interfaces/aggregateRoot';
import {BaseEntity} from 'src/entities/abstractClasses';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export abstract class BaseAggregateRootAbstractClass<
    Id extends TIdentityValueObject,
    Type extends TAggregateType,
    E extends IBaseAggregateRootEventsList<Id, Type>
  >
  extends BaseEntity<Id, Type, E>
  implements IAggregateRoot<Id, Type, E>
{
  get isAggregate(): true {
    return true;
  }
  constructor(
    parameters: IBaseAggregateRootParameters<Id>,
    services: IBaseAggregateRootServices<E>
  ) {
    super(parameters, services);
  }

  public abstract delete(): void;
}
