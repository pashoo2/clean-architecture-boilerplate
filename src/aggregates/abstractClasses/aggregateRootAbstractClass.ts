import {
  IAggregateRoot,
  IBaseAggregateRootEventsList,
  IBaseAggregateRootParameters,
  IBaseAggregateRootServices,
} from 'src/aggregates/interfaces/aggregateRoot';
import {BaseEntityAbstractClass} from 'src/entities/abstractClasses/baseEntityAbstractClass';
import {TIdentityValueObject} from 'src/valueObjects/interfaces/index';

export abstract class BaseAggregateRootAbstractClass<
    Id extends TIdentityValueObject,
    Type extends string,
    E extends IBaseAggregateRootEventsList<Id, Type>
  >
  extends BaseEntityAbstractClass<Id, Type, E>
  implements IAggregateRoot<Id, Type, E>
{
  constructor(
    parameters: IBaseAggregateRootParameters<Id>,
    services: IBaseAggregateRootServices<E>
  ) {
    super(parameters, services);
  }

  public abstract delete(): void;
}
